/* HUẤN LUYỆN LẬP BÁO CÁO TÀI CHÍNH TỪNG BƯỚC NHỎ (24/11/2026).
   Mỗi lần bấm «Bộ số liệu mới» app sinh một công ty với bảng số dư trước khi khóa sổ (cân Nợ = Có), rồi bạn làm 5 bước:
   1) bút toán điều chỉnh cuối kỳ; 2) thuế TNDN hiện hành; 3) kết chuyển 911 → 421; 4) báo cáo kết quả hoạt động (B02, mã TT 99/2025);
   5) báo cáo tình hình tài chính (B01) và kiểm tra cân đối mã 280 = mã 440. Mỗi bước chấm riêng, ghi vào điểm chủ đề «Lập & soát BCTC». */
function BL_MAKE(){
  function step(a,b,s){return a+s*Math.floor(Math.random()*((b-a)/s+1));}
  function pick(a){return a[Math.floor(Math.random()*a.length)];}
  var tries=0,o;
  while(tries++<500){
    var R=step(2e9,9e9,1e8),C=Math.round(R*(0.60+0.18*Math.random())/1e6)*1e6,
        c641=Math.round(R*(0.04+0.04*Math.random())/1e6)*1e6,c642pre=Math.round(R*(0.03+0.04*Math.random())/1e6)*1e6,
        i515=step(10e6,80e6,1e6),c635=step(20e6,120e6,1e6),t711=step(0,60e6,1e6),c811=step(15e6,80e6,1e6),
        PH=step(5e6,Math.min(c811,30e6),1e6),G=step(1.2e9,4.8e9,120e6),d=G/120,m0=step(24,70,1),acc0=d*m0,
        p=step(2e6,10e6,1e6),x242=p+step(10e6,80e6,10e6),c642=c642pre+d+p,
        lntt=R-C-c641-c642+i515-c635+t711-c811,
        prior=pick([2.4e9,2.9e9,8e9,20e9,45e9]),rate=prior<=3e9?15:(prior<=50e9?17:20),
        tntt=lntt+PH,thue=Math.round(tntt*rate/100),prov=Math.floor(thue*0.8/1e6)*1e6,extra=thue-prov,lnst=lntt-thue;
    if(lntt<=40e6||extra<=0||prov<=0)continue;
    var c111=step(10e6,200e6,1e6),c112=step(50e6,900e6,1e6),c131=step(200e6,1500e6,10e6),c133=step(10e6,150e6,1e6),c156=step(200e6,1800e6,10e6),
        c214=acc0+d,c242=x242-p,c331=step(100e6,1200e6,10e6),c3331=step(10e6,120e6,1e6),c334=step(20e6,200e6,1e6),c341=step(100e6,1500e6,10e6),
        e0=step(100e6,600e6,10e6),
        A=c111+c112+c131+c133+c156+(G-c214)+c242,L=c331+c3331+c334+extra+c341,V=A-L-e0-lnst;
    if(V<500e6||V>6e9)continue;
    o={R:R,C:C,c641:c641,c642pre:c642pre,i515:i515,c635:c635,t711:t711,c811:c811,PH:PH,G:G,d:d,m0:m0,acc0:acc0,p:p,x242:x242,c642:c642,lntt:lntt,prior:prior,rate:rate,tntt:tntt,thue:thue,prov:prov,extra:extra,lnst:lnst,
       c111:c111,c112:c112,c131:c131,c133:c133,c156:c156,c214:c214,c242:c242,c331:c331,c3331:c3331,c334:c334,c341:c341,e0:e0,V:V,A:A,L:L};
    break;
  }
  var X=o,m30=(X.R-X.C)+X.i515-(X.c635+X.c641+X.c642),m40=X.t711-X.c811,m50=m30+m40;
  var tsnh=X.c111+X.c112+X.c131+X.c156+X.c242+X.c133,tsdh=X.G-X.c214,tong=tsnh+tsdh,no=X.c331+X.c3331+X.c334+X.extra+X.c341,vcsh=X.V+X.e0+X.lnst;
  X.name="Công ty "+pick(["An Phát","Hoàng Long","Minh Quang","Thiên Ân","Đại Việt","Phú Gia","Bảo Tín","Hải Đăng"])+" ("+pick(["thương mại điện máy","phân phối thực phẩm","vật liệu xây dựng","dịch vụ vận tải","sản xuất bao bì"])+")";
  X.tb=[
   ["111","Tiền mặt",X.c111,0],["112","Tiền gửi ngân hàng không kỳ hạn",X.c112,0],["131","Phải thu khách hàng",X.c131,0],["133","Thuế GTGT được khấu trừ",X.c133,0],["156","Hàng hóa",X.c156,0],["211","Tài sản cố định hữu hình (nguyên giá)",X.G,0],["214","Hao mòn tài sản cố định lũy kế",0,X.acc0],["242","Chi phí chờ phân bổ (công cụ dụng cụ)",X.x242,0],
   ["331","Phải trả người bán",0,X.c331],["3331","Thuế GTGT phải nộp",0,X.c3331],["334","Phải trả người lao động",0,X.c334],["341","Vay ngân hàng ngắn hạn",0,X.c341],["411","Vốn đầu tư của chủ sở hữu",0,X.V],["421","Lợi nhuận sau thuế chưa phân phối (đầu năm)",0,X.e0],
   ["511","Doanh thu bán hàng và cung cấp dịch vụ",0,X.R],["632","Giá vốn hàng bán",X.C,0],["641","Chi phí bán hàng",X.c641,0],["642","Chi phí quản lý doanh nghiệp (trước điều chỉnh tháng 12)",X.c642pre,0],["515","Doanh thu hoạt động tài chính",0,X.i515],["635","Chi phí tài chính (lãi vay)",X.c635,0],["711","Thu nhập khác",0,X.t711],["811","Chi phí khác (gồm tiền phạt vi phạm hành chính "+X.PH.toLocaleString("vi-VN")+" đồng)",X.c811,0],["8211","Chi phí thuế TNDN hiện hành (đã tạm tính và đã nộp trong năm)",X.prov,0]];
  X.steps=[
   {id:"s1",title:"Bước 1 - Bút toán điều chỉnh cuối kỳ (tháng 12)",
    desc:"TSCĐ nguyên giá "+X.G.toLocaleString("vi-VN")+" đồng, khấu hao đường thẳng 10 năm (120 tháng), tháng 12 CHƯA trích khấu hao (bộ phận quản lý). Công cụ dụng cụ TK 242 dư Nợ "+X.x242.toLocaleString("vi-VN")+" đồng, mỗi tháng phân bổ "+X.p.toLocaleString("vi-VN")+" đồng, tháng 12 chưa phân bổ. Hãy làm các bút toán điều chỉnh vào chi phí quản lý doanh nghiệp.",
    fields:[{k:"d",l:"Khấu hao tháng 12 (Nợ 642 / Có 214), đồng",a:X.d},{k:"a",l:"Số dư Có TK 214 sau khi trích, đồng",a:X.c214},{k:"p",l:"Phân bổ công cụ dụng cụ tháng 12 (Nợ 642 / Có 242), đồng",a:X.p},{k:"r",l:"Số dư Nợ TK 242 còn lại, đồng",a:X.c242},{k:"c",l:"Chi phí quản lý doanh nghiệp (TK 642) sau điều chỉnh, đồng",a:X.c642}],
    ex:["Khấu hao tháng = nguyên giá ÷ 120 = "+X.d.toLocaleString("vi-VN")+" đồng. Nợ 642 / Có 214; TK 214 = "+X.acc0.toLocaleString("vi-VN")+" + "+X.d.toLocaleString("vi-VN")+" = "+X.c214.toLocaleString("vi-VN")+".","Phân bổ CCDC: Nợ 642 / Có 242 = "+X.p.toLocaleString("vi-VN")+"; TK 242 còn "+X.c242.toLocaleString("vi-VN")+".","TK 642 = "+X.c642pre.toLocaleString("vi-VN")+" + "+X.d.toLocaleString("vi-VN")+" + "+X.p.toLocaleString("vi-VN")+" = "+X.c642.toLocaleString("vi-VN")+"."]},
   {id:"s2",title:"Bước 2 - Thuế TNDN hiện hành",
    desc:"Dùng chi phí quản lý doanh nghiệp sau điều chỉnh = "+X.c642.toLocaleString("vi-VN")+" đồng (số chuẩn từ bước 1). Doanh nghiệp độc lập, tổng doanh thu năm trước liền kề (bán hàng, tài chính, thu nhập khác) là "+X.prior.toLocaleString("vi-VN")+" đồng. Khoản chi duy nhất không được trừ: tiền phạt vi phạm hành chính "+X.PH.toLocaleString("vi-VN")+" đồng (trong TK 811). Trong năm đã ghi nhận và nộp tạm tính "+X.prov.toLocaleString("vi-VN")+" đồng (TK 8211).",
    fields:[{k:"l",l:"Lợi nhuận kế toán trước thuế (mã 50), đồng",a:X.lntt},{k:"rt",l:"Thuế suất TNDN áp dụng (%)",a:X.rate,u:"%"},{k:"t",l:"Thu nhập tính thuế, đồng",a:X.tntt},{k:"tx",l:"Thuế TNDN phải nộp cả năm, đồng",a:X.thue},{k:"e",l:"Số ghi bổ sung vào chi phí thuế TNDN (Nợ 8211 / Có 3334), đồng",a:X.extra}],
    ex:["LNTT = doanh thu thuần - giá vốn - bán hàng - quản lý + tài chính - chi phí tài chính + thu nhập khác - chi phí khác = "+X.lntt.toLocaleString("vi-VN")+".","Doanh thu năm trước "+X.prior.toLocaleString("vi-VN")+" → thuế suất "+X.rate+"% (NĐ 320/2025 Điều 11: ≤3 tỷ 15%; >3 đến 50 tỷ 17%; còn lại 20%).","Thu nhập tính thuế = LNTT + chi phí không được trừ = "+X.lntt.toLocaleString("vi-VN")+" + "+X.PH.toLocaleString("vi-VN")+" = "+X.tntt.toLocaleString("vi-VN")+".","Thuế năm = "+X.tntt.toLocaleString("vi-VN")+" × "+X.rate+"% = "+X.thue.toLocaleString("vi-VN")+"; đã tạm nộp "+X.prov.toLocaleString("vi-VN")+" nên ghi thêm "+X.extra.toLocaleString("vi-VN")+" (Nợ 8211 / Có 3334)."]},
   {id:"s3",title:"Bước 3 - Kết chuyển cuối kỳ và xác định lợi nhuận",
    desc:"Dùng số chuẩn: TK 642 = "+X.c642.toLocaleString("vi-VN")+"; TK 8211 sau bổ sung = "+X.thue.toLocaleString("vi-VN")+" đồng. Kết chuyển các tài khoản doanh thu, thu nhập và chi phí sang TK 911.",
    fields:[{k:"cr",l:"Tổng kết chuyển Có TK 911 (511 + 515 + 711), đồng",a:X.R+X.i515+X.t711},{k:"dr",l:"Tổng kết chuyển Nợ TK 911 (632 + 641 + 642 + 635 + 811 + 8211), đồng",a:X.C+X.c641+X.c642+X.c635+X.c811+X.thue},{k:"p",l:"Lợi nhuận sau thuế kết chuyển Nợ 911 / Có 421, đồng",a:X.lnst},{k:"e",l:"Số dư Có TK 421 sau kết chuyển (đầu năm "+X.e0.toLocaleString("vi-VN")+" + lợi nhuận), đồng",a:X.e0+X.lnst}],
    ex:["Có 911 = "+X.R.toLocaleString("vi-VN")+" + "+X.i515.toLocaleString("vi-VN")+" + "+X.t711.toLocaleString("vi-VN")+" = "+(X.R+X.i515+X.t711).toLocaleString("vi-VN")+".","Nợ 911 = "+(X.C+X.c641+X.c642+X.c635+X.c811+X.thue).toLocaleString("vi-VN")+".","Lợi nhuận sau thuế = chênh lệch = "+X.lnst.toLocaleString("vi-VN")+" (Nợ 911 / Có 421 nếu lãi).","TK 421 = "+X.e0.toLocaleString("vi-VN")+" + "+X.lnst.toLocaleString("vi-VN")+" = "+(X.e0+X.lnst).toLocaleString("vi-VN")+"."]},
   {id:"s4",title:"Bước 4 - Báo cáo kết quả hoạt động (B02, mã theo TT 99/2025)",
    desc:"Dùng số chuẩn: doanh thu 511 = "+X.R.toLocaleString("vi-VN")+" (không có giảm trừ); giá vốn "+X.C.toLocaleString("vi-VN")+"; chi phí bán hàng "+X.c641.toLocaleString("vi-VN")+"; chi phí quản lý "+X.c642.toLocaleString("vi-VN")+"; doanh thu tài chính "+X.i515.toLocaleString("vi-VN")+"; chi phí tài chính "+X.c635.toLocaleString("vi-VN")+" (toàn bộ là chi phí đi vay); thu nhập khác "+X.t711.toLocaleString("vi-VN")+"; chi phí khác "+X.c811.toLocaleString("vi-VN")+"; thuế TNDN hiện hành "+X.thue.toLocaleString("vi-VN")+" (không có thuế hoãn lại; mã 21 bằng 0).",
    fields:[{k:"m10",l:"Mã 10 - Doanh thu thuần, đồng",a:X.R},{k:"m20",l:"Mã 20 - Lợi nhuận gộp, đồng",a:X.R-X.C},{k:"m30",l:"Mã 30 - Lợi nhuận thuần từ hoạt động kinh doanh = 20 + 21 + 22 - (23 + 25 + 26), đồng",a:m30},{k:"m40",l:"Mã 40 - Lợi nhuận khác, đồng",a:m40},{k:"m50",l:"Mã 50 - Tổng lợi nhuận kế toán trước thuế, đồng",a:m50},{k:"m51",l:"Mã 51 - Chi phí thuế TNDN hiện hành, đồng",a:X.thue},{k:"m60",l:"Mã 60 - Lợi nhuận sau thuế, đồng",a:X.lnst}],
    ex:["Mã 10 = mã 01 - mã 02 = "+X.R.toLocaleString("vi-VN")+".","Mã 20 = 10 - 11 = "+(X.R-X.C).toLocaleString("vi-VN")+".","Mã 30 = "+(X.R-X.C).toLocaleString("vi-VN")+" + 0 + "+X.i515.toLocaleString("vi-VN")+" - ("+X.c635.toLocaleString("vi-VN")+" + "+X.c641.toLocaleString("vi-VN")+" + "+X.c642.toLocaleString("vi-VN")+") = "+m30.toLocaleString("vi-VN")+".","Mã 40 = 31 - 32 = "+m40.toLocaleString("vi-VN")+"; mã 50 = 30 + 40 = "+m50.toLocaleString("vi-VN")+"; mã 60 = 50 - (51 + 52) = "+X.lnst.toLocaleString("vi-VN")+" (khớp bước 3)."]},
   {id:"s5",title:"Bước 5 - Báo cáo tình hình tài chính (B01) và kiểm tra cân đối",
    desc:"Dùng số dư SAU điều chỉnh: TK 214 = "+X.c214.toLocaleString("vi-VN")+"; TK 242 = "+X.c242.toLocaleString("vi-VN")+"; TK 3334 = "+X.extra.toLocaleString("vi-VN")+" (Có, thuế TNDN còn phải nộp); TK 421 = "+(X.e0+X.lnst).toLocaleString("vi-VN")+" (Có). Các số dư khác như bảng đầu bài. Coi toàn bộ phải thu, phải trả, vay và 242 là ngắn hạn.",
    fields:[{k:"m110",l:"Mã 110 - Tiền và các khoản tương đương tiền, đồng",a:X.c111+X.c112},{k:"m130",l:"Mã 130 - Các khoản phải thu ngắn hạn, đồng",a:X.c131},{k:"m140",l:"Mã 140 - Hàng tồn kho, đồng",a:X.c156},{k:"m160",l:"Mã 160 - Tài sản ngắn hạn khác (161 + 162), đồng",a:X.c242+X.c133},{k:"m100",l:"Mã 100 - Tài sản ngắn hạn, đồng",a:tsnh},{k:"m220",l:"Mã 220 - Tài sản cố định (nguyên giá trừ hao mòn), đồng",a:tsdh},{k:"m280",l:"Mã 280 - Tổng cộng tài sản, đồng",a:tong},{k:"m314",l:"Mã 314 - Thuế và các khoản phải nộp Nhà nước ngắn hạn (3331 + 3334), đồng",a:X.c3331+X.extra},{k:"m310",l:"Mã 310 - Nợ ngắn hạn, đồng",a:no},{k:"m420",l:"Mã 420 - Lợi nhuận sau thuế chưa phân phối, đồng",a:X.e0+X.lnst},{k:"m400",l:"Mã 400 - Vốn chủ sở hữu, đồng",a:vcsh},{k:"m440",l:"Mã 440 - Tổng cộng nguồn vốn, đồng",a:no+vcsh},{k:"chk",l:"Chênh lệch mã 280 trừ mã 440 (phải bằng 0), đồng",a:0}],
    ex:["Mã 110 = 111 + 112 = "+(X.c111+X.c112).toLocaleString("vi-VN")+"; mã 130 = 131 = "+X.c131.toLocaleString("vi-VN")+"; mã 140 = 156 (kèm dự phòng nếu có) = "+X.c156.toLocaleString("vi-VN")+".","Mã 161 = dư Nợ 242 = "+X.c242.toLocaleString("vi-VN")+"; mã 162 = dư Nợ 133 = "+X.c133.toLocaleString("vi-VN")+"; mã 160 = "+(X.c242+X.c133).toLocaleString("vi-VN")+"; mã 100 = "+tsnh.toLocaleString("vi-VN")+".","Mã 220 = 211 - 214 = "+X.G.toLocaleString("vi-VN")+" - "+X.c214.toLocaleString("vi-VN")+" = "+tsdh.toLocaleString("vi-VN")+"; mã 280 = 100 + 200 = "+tong.toLocaleString("vi-VN")+".","Mã 314 = dư Có TK 333 (3331 + 3334) = "+(X.c3331+X.extra).toLocaleString("vi-VN")+"; mã 310 = 331 + 333 + 334 + 341 = "+no.toLocaleString("vi-VN")+".","Mã 420 = 421 = "+(X.e0+X.lnst).toLocaleString("vi-VN")+"; mã 400 = 411 + 420 = "+vcsh.toLocaleString("vi-VN")+"; mã 440 = 300 + 400 = "+(no+vcsh).toLocaleString("vi-VN")+". Mã 280 phải bằng mã 440; nếu lệch thì kiểm tra lại các bước trước."]}
  ];
  X.fin="Kiểm tra cuối: lợi nhuận sau thuế "+X.lnst.toLocaleString("vi-VN")+" đồng; tổng tài sản "+tong.toLocaleString("vi-VN")+" đồng = tổng nguồn vốn.";
  return X;
}

/* ---------- Giao diện tab «Lập BCTC» (3 chế độ: cơ bản, nâng cao, lưu chuyển tiền tệ) ---------- */
var blCur=null,blMode="cb";
var BL_MODES=[["cb","Cơ bản: từ số dư đến B01 (5 bước)"],["nc","Nâng cao: giảm trừ doanh thu, dự phòng, thuế hoãn lại, thanh lý (6 bước)"],["lc","Lưu chuyển tiền tệ B03 gián tiếp (4 bước)"]];
function blMaker(m){return m==="nc"?BL_MAKE2:(m==="lc"?BL_MAKE3:BL_MAKE);}
function blNew(m){if(m)blMode=m;blCur={co:blMaker(blMode)(),i:0,fb:null,ok:0,mode:blMode};blRender();}
function viewBL(){
  return '<div class="card"><label>Chọn chế độ luyện</label><select onchange="blNew(this.value)">'+BL_MODES.map(function(x){return '<option value="'+x[0]+'"'+(blMode===x[0]?' selected':'')+'>'+esc(x[1])+'</option>';}).join("")+'</select><p style="margin-top:8px"><button class="b" onclick="blNew()">Bộ số liệu mới</button></p></div><div class="law" style="margin:8px 0">Lập báo cáo tài chính theo các bước nhỏ, mã số theo TT 99/2025. Mỗi bước tự chấm, sai thì có lời giải từng dòng; số liệu chuẩn của bước trước luôn được nêu lại ở bước sau để bạn không bị sai dây chuyền. Số âm: gõ dấu trừ trước số.</div><div id="blbox" style="margin-top:8px"></div>';
}
function blRender(){
  var el=$("blbox");if(!el)return;
  var X=blCur.co,i=blCur.i,cols=X.cols||["TK","Tên tài khoản","Dư Nợ","Dư Có"],h='<div class="card"><h3>'+esc(X.name)+'</h3><div class="law">'+esc(X.note||"Bảng số dư tài khoản trước khi khóa sổ năm (đã cân Nợ = Có). Đơn vị: đồng.")+'</div><details'+(i===0?' open':'')+'><summary>Xem số liệu đề bài</summary><table><tr><th>'+esc(cols[0])+'</th><th>'+esc(cols[1])+'</th><th class="n">'+esc(cols[2])+'</th><th class="n">'+esc(cols[3])+'</th></tr>';
  var sn=0,sc=0;X.tb.forEach(function(r){sn+=r[2]||0;sc+=r[3]||0;h+='<tr><td>'+esc(r[0])+'</td><td>'+esc(r[1])+'</td><td class="n">'+(r[2]!==0&&r[2]!=null?money(r[2]):"")+'</td><td class="n">'+(r[3]!==0&&r[3]!=null?money(r[3]):"")+'</td></tr>';});
  if(!X.noSum)h+='<tr><td></td><td><b>Cộng</b></td><td class="n"><b>'+money(sn)+'</b></td><td class="n"><b>'+money(sc)+'</b></td></tr>';
  h+='</table></details></div>';
  if(i>=X.steps.length){
    h+='<div class="card"><h3>Hoàn thành</h3><div class="ex"><b>'+blCur.ok+'/'+X.steps.length+' bước đúng hoàn toàn.</b></div><div class="law">'+esc(X.fin||"")+'</div><p><button class="b" onclick="blNew()">Làm bộ số liệu mới</button></p></div>';
    el.innerHTML=h;return;
  }
  var s=X.steps[i];
  h+='<div class="card"><h3>'+esc(s.title)+'</h3><div>'+esc(s.desc)+'</div>';
  s.fields.forEach(function(f,k){
    var st=blCur.fb&&blCur.fb.res[k];
    h+='<div style="margin-top:8px"><label>'+esc(f.l)+'</label><div class="row"><input id="blf'+k+'" inputmode="numeric" placeholder="'+(f.u==="%"?"nhập số %":"nhập số tiền (số âm: gõ dấu -)")+'"'+(blCur.fb?' value="'+esc(blCur.fb.vals[k])+'" disabled':'')+'>'+(st?'<span class="tag '+(st.ok?'g':'w')+'">'+(st.ok?'Đúng':'Chưa đúng: '+(f.u==="%"?f.a+"%":money(f.a)))+'</span>':'')+'</div></div>';
  });
  if(!blCur.fb)h+='<p><button class="b" onclick="blCheck()">Chấm bước này</button> <button class="b alt" onclick="blNext()">Bỏ qua bước này</button></p>';
  else{
    h+='<h4>Lời giải</h4><ul>'+s.ex.map(function(x){return '<li>'+esc(x)+'</li>';}).join("")+'</ul><p><button class="b" onclick="blNext()">'+(i+1>=X.steps.length?'Xem tổng kết':'Bước tiếp theo')+'</button></p>';
  }
  h+='</div>';el.innerHTML=h;
}
function blCheck(){
  var X=blCur.co,s=X.steps[blCur.i],res=[],vals=[],all=true,any=false;
  s.fields.forEach(function(f,k){var txt=$("blf"+k).value||"",raw=txt.replace(/[^0-9]/g,""),neg=/^\s*[-(−]/.test(txt),v=raw===""?null:(neg?-+raw:+raw);vals.push(txt);if(raw!=="")any=true;var ok=(v!==null&&v===f.a);res.push({ok:ok});if(!ok)all=false;});
  if(!any)return;
  record("bctc","bl:"+blCur.mode+":"+s.id,all,"lap");
  if(all)blCur.ok++;
  blCur.fb={res:res,vals:vals};blRender();
}
function blNext(){blCur.i++;blCur.fb=null;blRender();window.scrollTo(0,0);}
