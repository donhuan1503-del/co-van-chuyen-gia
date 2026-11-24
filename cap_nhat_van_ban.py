# -*- coding: utf-8 -*-
"""
Cập nhật văn bản pháp luật mới cho ứng dụng Cố vấn Chuyên gia VN.

Nguồn (chỉ đọc công khai, không vượt rào chặn của trang):
  1. Công báo Chính phủ (congbao.chinhphu.vn) - danh sách văn bản mới ban hành, đọc trực tiếp.
  2. Google Tin tức RSS với bộ lọc site: cho các trang cơ quan nhà nước mà máy không đọc trực tiếp được
     (Bộ Tài chính mof.gov.vn, Cục Thuế gdt.gov.vn, Chính phủ chinhphu.vn / baochinhphu.vn,
      Bộ Tư pháp moj.gov.vn / vbpl.vn, BHXH Việt Nam bhxh.gov.vn, Bộ Nội vụ moha.gov.vn).
  3. Trang chuyên ngành (thuvienphapluat.vn, ...) qua Google Tin tức - đánh dấu là nguồn tham khảo.

Kết quả: data/updates.json và data/updates.js (để mở bằng file:// vẫn đọc được).
Chạy:  python cap_nhat_van_ban.py        (hằng ngày bằng Task Scheduler - xem dat_lich_cap_nhat.bat)
"""
import sys, re, json, time, html, os, datetime, urllib.request, urllib.parse
import urllib.error
import xml.etree.ElementTree as ET

BASE = os.path.dirname(os.path.abspath(__file__))
DATA = os.path.join(BASE, "data")
LOGD = os.path.join(BASE, "logs")
UA = "Mozilla/5.0 (compatible; CoVanVN-updater/1.0; +local personal use)"
KEEP_DAYS = 120
MAX_ITEMS = 700

OFFICIAL = ("congbao.chinhphu.vn", "chinhphu.vn", "baochinhphu.vn", "mof.gov.vn", "gdt.gov.vn", "moj.gov.vn",
            "vbpl.vn", "bhxh.gov.vn", "moha.gov.vn", "molisa.gov.vn", "quochoi.vn", "dichvucong.gov.vn",
            "customs.gov.vn", "sbv.gov.vn", "thuedientu.gdt.gov.vn", "canhsat.vn")

# Truy vấn Google Tin tức: (nhãn, truy vấn). when:7d = 7 ngày gần nhất.
QUERIES = [
    ("Bộ Tài chính",   'site:mof.gov.vn when:10d'),
    ("Cục Thuế",       'site:gdt.gov.vn when:10d'),
    ("Chính phủ",      'site:chinhphu.vn (thông tư OR nghị định OR luật OR nghị quyết) when:10d'),
    ("Báo Chính phủ",  'site:baochinhphu.vn (thuế OR bảo hiểm OR lao động OR hóa đơn OR kế toán OR doanh nghiệp) when:7d'),
    ("Bộ Tư pháp",     'site:moj.gov.vn when:15d'),
    ("vbpl.vn",        'site:vbpl.vn when:30d'),
    ("BHXH Việt Nam",  'site:bhxh.gov.vn when:15d'),
    ("Bộ Nội vụ",      'site:moha.gov.vn (tiền lương OR lao động OR bảo hiểm) when:15d'),
    ("Thư viện pháp luật", 'site:thuvienphapluat.vn (thông tư OR nghị định OR công văn) (thuế OR bảo hiểm OR lao động OR kế toán OR hóa đơn) when:3d'),
    ("Tham khảo",      '(công văn OR thông tư OR nghị định) (thuế OR hóa đơn OR BHXH OR "tiền lương") hướng dẫn when:3d'),
]

REL = re.compile(r"(thuế|bảo hiểm|bhxh|bhyt|bhtn|lao động|tiền lương|kế toán|hóa đơn|doanh nghiệp|hợp đồng|kiểm toán|"
                 r"chứng từ|giá trị gia tăng|gtgt|tncn|tndn|thu nhập|chấm công|hộ kinh doanh|tài chính|ngân hàng|chứng khoán|"
                 r"ngân sách|hải quan|phí|lệ phí|nợ công|sổ sách|bộ luật|luật)", re.I)

TAGS = [
    ("gtgt",   r"gtgt|giá trị gia tăng"),
    ("tndn",   r"tndn|thu nhập doanh nghiệp"),
    ("tncn",   r"tncn|thu nhập cá nhân|giảm trừ gia cảnh"),
    ("qlt",    r"quản lý thuế|khai thuế|nộp thuế|tiền chậm nộp|quyết toán thuế|tờ khai|hoàn thuế|cưỡng chế|nợ thuế|công văn.*thuế|cục thuế|thuế"),
    ("hd",     r"hóa đơn|chứng từ điện tử"),
    ("bhxh",   r"bhxh|bhyt|bhtn|bảo hiểm xã hội|bảo hiểm y tế|bảo hiểm thất nghiệp|lương cơ sở|mức tham chiếu"),
    ("luong",  r"tiền lương|lương tối thiểu|làm thêm giờ|tiền thưởng"),
    ("laodong",r"lao động|hợp đồng lao động|người sử dụng lao động|thử việc|sa thải|việc làm"),
    ("chamcong", r"chấm công|thời giờ làm việc|nghỉ phép"),
    ("ketoan", r"kế toán|chế độ kế toán|báo cáo tài chính|chuẩn mực"),
    ("sosach", r"sổ sách|sổ kế toán|chứng từ kế toán"),
    ("dn",     r"luật doanh nghiệp|đăng ký doanh nghiệp|thành lập doanh nghiệp|chủ sở hữu hưởng lợi|hộ kinh doanh"),
    ("hopdong",r"hợp đồng|bộ luật dân sự|luật thương mại"),
    ("kiemtoan", r"kiểm toán"),
    ("taichinh", r"ngân hàng|chứng khoán|trái phiếu|lãi suất|tài chính doanh nghiệp|ngân sách|nợ công"),
]
TAGS = [(k, re.compile(p, re.I)) for k, p in TAGS]


def log(msg):
    os.makedirs(LOGD, exist_ok=True)
    line = "%s  %s" % (datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S"), msg)
    print(line)
    try:
        with open(os.path.join(LOGD, "cap_nhat.log"), "a", encoding="utf-8") as f:
            f.write(line + "\n")
    except Exception:
        pass


def get(url, timeout=25):
    req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept-Language": "vi,en;q=0.8"})
    for wait in (0, 8, 20):          # gặp 429 (giới hạn tần suất) thì chờ rồi thử lại, không ép
        if wait:
            time.sleep(wait)
        try:
            with urllib.request.urlopen(req, timeout=timeout) as r:
                return r.read().decode("utf-8", "ignore")
        except urllib.error.HTTPError as e:
            if e.code != 429 or wait == 20:
                raise
    raise RuntimeError("không tải được")


def host_of(u):
    try:
        return urllib.parse.urlparse(u).netloc.lower().replace("www.", "")
    except Exception:
        return ""


def is_official(u):
    h = host_of(u)
    return any(h == d or h.endswith("." + d) for d in OFFICIAL)


def tag(text):
    out = []
    for k, rx in TAGS:
        if rx.search(text):
            out.append(k)
    return out[:4]


def iso(d):
    return d.strftime("%Y-%m-%d")


def from_congbao():
    items = []
    s = get("https://congbao.chinhphu.vn/van-ban-moi")
    for m in re.finditer(r'<div class="item-child"[^>]*>(.*?)(?=<div class="item-child"|</body>)', s, re.S):
        chunk = m.group(1)
        a = re.search(r'<a href="(/van-ban/[^"]+)"[^>]*title="([^"]+)"', chunk)
        if not a:
            continue
        title = html.unescape(a.group(2)).strip()
        dm = re.search(r"(\d{2})/(\d{2})/(\d{4})", html.unescape(re.sub(r"<[^>]+>", " ", chunk)))
        d = None
        if dm:
            try:
                d = datetime.date(int(dm.group(3)), int(dm.group(2)), int(dm.group(1)))
            except ValueError:
                d = None
        items.append({"t": title, "u": "https://congbao.chinhphu.vn" + a.group(1), "s": "Công báo Chính phủ",
                      "d": iso(d) if d else iso(datetime.date.today()), "o": True})
    return items


def from_gnews(label, query):
    url = "https://news.google.com/rss/search?q=%s&hl=vi&gl=VN&ceid=VN:vi" % urllib.parse.quote(query)
    root = ET.fromstring(get(url))
    out = []
    for it in root.iter("item"):
        title = html.unescape((it.findtext("title") or "").strip())
        link = (it.findtext("link") or "").strip()
        pub = it.findtext("pubDate") or ""
        src = it.find("source")
        src_name = (src.text if src is not None else "") or label
        src_url = src.get("url") if src is not None else ""
        # tiêu đề Google dạng "Tiêu đề - Nguồn": bỏ phần nguồn
        title = re.sub(r"\s+-\s+" + re.escape(src_name) + r"\s*$", "", title)
        try:
            d = datetime.datetime.strptime(pub[:25], "%a, %d %b %Y %H:%M:%S").date()
        except Exception:
            d = datetime.date.today()
        out.append({"t": title, "u": link, "s": src_name, "d": iso(d), "o": is_official(src_url or link)})
    return out


def main():
    t0 = time.time()
    path = os.path.join(DATA, "updates.json")
    old = {"items": []}
    try:
        with open(path, encoding="utf-8") as f:
            old = json.load(f)
    except Exception:
        pass
    found, errors = [], []
    try:
        got = from_congbao()
        log("Công báo: %d mục" % len(got))
        found += got
    except Exception as e:
        errors.append("congbao: %s" % e)
        log("LỖI Công báo: %s" % e)
    for label, q in QUERIES:
        try:
            got = from_gnews(label, q)
            log("%s: %d mục" % (label, len(got)))
            found += got
        except Exception as e:
            errors.append("%s: %s" % (label, e))
            log("LỖI %s: %s" % (label, e))
        time.sleep(3.0)

    seen, merged = set(), []
    for it in found + old.get("items", []):
        key = re.sub(r"\W+", "", it["t"].lower())[:90]
        if key in seen:
            continue
        seen.add(key)
        if not it.get("g"):
            it["g"] = tag(it["t"])
        if "o" not in it:
            it["o"] = is_official(it.get("u", ""))
        merged.append(it)
    # chỉ giữ mục liên quan (kế toán - thuế - lao động - doanh nghiệp...)
    merged = [i for i in merged if REL.search(i["t"]) or i.get("g")]
    cutoff = iso(datetime.date.today() - datetime.timedelta(days=KEEP_DAYS))
    merged = [i for i in merged if (i.get("d") or "9999") >= cutoff]
    merged.sort(key=lambda i: (i.get("d") or ""), reverse=True)
    merged = merged[:MAX_ITEMS]

    if not found and old.get("items"):
        log("Không lấy được mục mới (mất mạng?) - giữ nguyên dữ liệu cũ.")
        merged = old["items"]
        gen = old.get("generated")
    else:
        gen = datetime.datetime.now().isoformat(timespec="seconds")

    out = {"generated": gen, "items": merged, "errors": errors}
    os.makedirs(DATA, exist_ok=True)
    with open(path, "w", encoding="utf-8") as f:
        json.dump(out, f, ensure_ascii=False, indent=1)
    with open(os.path.join(DATA, "updates.js"), "w", encoding="utf-8") as f:
        f.write("window.UPDATES = " + json.dumps(out, ensure_ascii=False) + ";\n")
    log("Xong: %d mục lưu, %d nguồn lỗi, %.1f giây." % (len(merged), len(errors), time.time() - t0))
    return 0 if merged else 1


if __name__ == "__main__":
    sys.exit(main())
