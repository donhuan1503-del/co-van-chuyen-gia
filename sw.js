/* Service worker: chạy offline. Dữ liệu văn bản mới luôn ưu tiên lấy từ mạng/máy chủ. */
var CACHE = "covan-vn-v21";
var SHELL = ["./","index.html","style.css","app.js","manifest.webmanifest","icon.svg",
 "data/kb_thue_gtgt.js","data/kb_thue_tndn_tncn.js","data/kb_quan_ly_thue_hoa_don.js","data/kb_lao_dong_bhxh_luong.js",
 "data/kb_ke_toan_so_sach_dn_hop_dong.js","data/kb_kiem_toan_tai_chinh.js","data/kb_bctc_kiem_tra_thue.js","data/kb_hkd_tinh_huong.js","data/kb_van_ban_da_doc.js","data/kb_hop_nhat_2026.js","data/practice_hop_nhat.js","data/kb_bhxh_thanh_tra_lao_dong.js","data/practice.js","data/practice2.js","data/practice3.js","data/practice4.js","data/gen_quiz.js","data/gen_dk.js","data/gen_ruiro.js","data/kb_bctc_mo_rong.js","data/kb_rui_ro_thanh_tra_thue.js","data/lapbctc.js","data/lapbctc2.js","data/sim.js","data/sim2.js","data/sim3.js","data/sim4.js","data/sim5.js","data/sim6.js","data/vb_index.js","data/updates.js"];
self.addEventListener("install", function(e){
  e.waitUntil(caches.open(CACHE).then(function(c){return c.addAll(SHELL);}).then(function(){return self.skipWaiting();}));
});
self.addEventListener("activate", function(e){
  e.waitUntil(caches.keys().then(function(ks){return Promise.all(ks.filter(function(k){return k!==CACHE;}).map(function(k){return caches.delete(k);}));}).then(function(){return self.clients.claim();}));
});
self.addEventListener("fetch", function(e){
  var u = new URL(e.request.url);
  if (e.request.method !== "GET" || u.origin !== location.origin) return;
  var fresh = /data\/updates\.(js|json)$/.test(u.pathname);
  if (fresh) {   /* mạng trước, rơi về bản đã lưu */
    e.respondWith(fetch(e.request).then(function(r){var c=r.clone();caches.open(CACHE).then(function(x){x.put(e.request,c);});return r;}).catch(function(){return caches.match(e.request);}));
  } else {       /* bản đã lưu trước, cập nhật nền */
    e.respondWith(caches.match(e.request).then(function(m){
      var net = fetch(e.request).then(function(r){var c=r.clone();caches.open(CACHE).then(function(x){x.put(e.request,c);});return r;}).catch(function(){return m;});
      return m || net;
    }));
  }
});
