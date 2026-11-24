/* Chế độ NÂNG CAO (BL_MAKE2) và LƯU CHUYỂN TIỀN TỆ B03 gián tiếp (BL_MAKE3) của tab «Lập BCTC». Mã số theo TT 99/2025. */
function BL_MAKE2(){
  function step(a,b,s){return a+s*Math.floor(Math.random()*((b-a)/s+1));}
  function pick(a){return a[Math.floor(Math.random()*a.length)];}
  function V(n){return n.toLocaleString("vi-VN");}
  var o,tries=0;
  while(tries++<800){
    var R=step(3e9,10e9,1e8),g=Math.round(R*(0.01+0.03*Math.random())/1e6)*1e6,Rn=R-g,
        C=Math.round(Rn*(0.60+0.16*Math.random())/1e6)*1e6,
        c156=step(300e6,1800e6,10e6),dp=step(10e6,60e6,1e6),nrv=c156-dp,xp=Math.round(dp*0.5/1e6)*1e6,
        c641=Math.round(Rn*(0.04+0.04*Math.random())/1e6)*1e6,c642pre=Math.round(Rn*(0.03+0.04*Math.random())/1e6)*1e6,
        i515=step(10e6,80e6,1e6),c635=step(20e6,120e6,1e6),t711b=step(0,50e6,1e6),c811b=step(20e6,80e6,1e6),PH=step(5e6,Math.min(c811b,30e6),1e6),
        Sgl=step(20e6,200e6,10e6),Tgl=step(20e6,200e6,10e6);
    if(Sgl===Tgl)continue;
    var G=step(1.2e9,4.8e9,120e6),d=G/120,m0=step(24,70,1),acc0=d*m0,p=step(2e6,10e6,1e6),x242=p+step(10e6,80e6,10e6),
        c642=c642pre+d+p,t711=t711b+Sgl,c811=c811b+Tgl,m31=t711b+Math.max(0,Sgl-Tgl),m32=c811b+Math.max(0,Tgl-Sgl),
        lntt=Rn-C-dp-c641-c642+i515-c635+(t711-c811),
        prior=pick([2.4e9,2.9e9,8e9,20e9,45e9]),rate=prior<=3e9?15:(prior<=50e9?17:20),
        tntt=lntt+PH+xp,thue=Math.round(tntt*rate/100),prov=Math.floor(thue*0.75/1e6)*1e6,extra=thue-prov,dta=Math.round(xp*rate/100),lnst=lntt-thue+dta;
    if(lntt<=60e6||extra<=0||prov<=0||dta<=0)continue;
    var c111=step(10e6,200e6,1e6),c112=step(50e6,900e6,1e6),D1=step(300e6,1500e6,10e6),D2=step(10e6,120e6,5e6),c133=step(10e6,150e6,1e6),
        c214=acc0+d,c242=x242-p,c331=step(100e6,1200e6,10e6),c3331=step(10e6,120e6,1e6),c334=step(20e6,200e6,1e6),
        ls=step(50e6,600e6,10e6),ll=step(200e6,1200e6,10e6),e0=step(100e6,600e6,10e6),
        A=c111+c112+D1+c133+(c156-dp)+(G-c214)+c242+dta,L=c331+c3331+c334+extra+ls+ll+D2,Vv=A-L-e0-lnst;
    if(Vv<500e6||Vv>6e9)continue;
    o={R:R,g:g,Rn:Rn,C:C,c156:c156,dp:dp,nrv:nrv,xp:xp,c641:c641,c642pre:c642pre,i515:i515,c635:c635,t711b:t711b,c811b:c811b,PH:PH,Sgl:Sgl,Tgl:Tgl,G:G,d:d,acc0:acc0,p:p,x242:x242,c642:c642,t711:t711,c811:c811,m31:m31,m32:m32,lntt:lntt,prior:prior,rate:rate,tntt:tntt,thue:thue,prov:prov,extra:extra,dta:dta,lnst:lnst,
       c111:c111,c112:c112,D1:D1,D2:D2,c133:c133,c214:c214,c242:c242,c331:c331,c3331:c3331,c334:c334,ls:ls,ll:ll,e0:e0,V:Vv,A:A,L:L};
    break;
  }
  var X=o,m30=Rn_(X)-X.C-X.dp-X.c641-X.c642+X.i515-X.c635,m40=X.m31-X.m32,m50=m30+m40;
  function Rn_(x){return x.Rn;}
  m30=X.Rn-X.C-X.dp-X.c641-X.c642+X.i515-X.c635;m40=X.m31-X.m32;m50=m30+m40;
  var c632=X.C+X.dp,tsnh=X.c111+X.c112+X.D1+(X.c156-X.dp)+X.c242+X.c133,tsdh=X.G-X.c214,m200=tsdh+X.dta,tong=tsnh+m200,
      m310=X.c331+X.c3331+X.c334+X.extra+X.ls+X.D2,m330=X.ll,m300=m310+m330,m420=X.e0+X.lnst,m400=X.V+m420,m440=m300+m400;
  X.name="Công ty "+pick(["Việt Hưng","Kim Long","Đông Á","Thành Công","Phương Nam","Sao Mai"])+" ("+pick(["bán lẻ điện máy","sản xuất đồ gỗ","phân phối hóa chất","vận tải và kho bãi"])+") - đề nâng cao";
  X.tb=[
   ["111","Tiền mặt",X.c111,0],["112","Tiền gửi ngân hàng không kỳ hạn",X.c112,0],["131","Phải thu khách hàng (chi tiết dư Nợ)",X.D1,0],["131","Phải thu khách hàng (chi tiết dư Có: khách trả trước)",0,X.D2],["133","Thuế GTGT được khấu trừ",X.c133,0],["156","Hàng hóa (giá gốc)",X.c156,0],["211","Tài sản cố định hữu hình (nguyên giá)",X.G,0],["214","Hao mòn TSCĐ lũy kế",0,X.acc0],["242","Chi phí chờ phân bổ (CCDC)",X.x242,0],
   ["331","Phải trả người bán",0,X.c331],["3331","Thuế GTGT phải nộp",0,X.c3331],["334","Phải trả người lao động",0,X.c334],["341","Vay ngân hàng (ngắn hạn "+V(X.ls)+"; dài hạn "+V(X.ll)+" - chi tiết)",0,X.ls+X.ll],["411","Vốn đầu tư của chủ sở hữu",0,X.V],["421","LNST chưa phân phối đầu năm",0,X.e0],
   ["511","Doanh thu bán hàng và cung cấp dịch vụ",0,X.R],["521","Hàng bán bị trả lại, giảm giá",X.g,0],["632","Giá vốn hàng bán",X.C,0],["641","Chi phí bán hàng",X.c641,0],["642","Chi phí quản lý (trước điều chỉnh tháng 12)",X.c642pre,0],["515","Doanh thu tài chính",0,X.i515],["635","Chi phí tài chính (toàn bộ là chi phí đi vay)",X.c635,0],
   ["711","Thu nhập khác (gồm thu thanh lý TSCĐ "+V(X.Sgl)+")",0,X.t711],["811","Chi phí khác (gồm giá trị còn lại và chi phí thanh lý TSCĐ "+V(X.Tgl)+"; tiền phạt hành chính "+V(X.PH)+")",X.c811,0],["8211","Chi phí thuế TNDN hiện hành (đã tạm tính và nộp)",X.prov,0]];
  X.note="Bảng số dư trước khi khóa sổ (cân Nợ = Có), đã loại TSCĐ thanh lý khỏi 211 và 214. Giá trị thuần có thể thực hiện của hàng hóa cuối kỳ: "+V(X.nrv)+" đồng. Đơn vị: đồng.";
  var f=function(k,l,a,u){return {k:k,l:l,a:a,u:u};};
  X.steps=[
   {id:"n1",title:"Bước 1 - Điều chỉnh cuối kỳ: khấu hao, phân bổ, dự phòng giảm giá hàng tồn kho",
    desc:"TSCĐ nguyên giá "+V(X.G)+" đồng, khấu hao 10 năm, tháng 12 chưa trích (bộ phận quản lý). CCDC TK 242 dư Nợ "+V(X.x242)+", phân bổ tháng "+V(X.p)+" đồng chưa ghi tháng 12. Hàng hóa giá gốc "+V(X.c156)+", giá trị thuần có thể thực hiện "+V(X.nrv)+" đồng, chưa trích dự phòng.",
    fields:[f("d","Khấu hao tháng 12, đồng",X.d),f("p","Phân bổ CCDC tháng 12, đồng",X.p),f("dp","Dự phòng giảm giá hàng tồn kho cần trích (Nợ 632 / Có 2294), đồng",X.dp),f("c642","Chi phí quản lý (TK 642) sau điều chỉnh, đồng",X.c642),f("c632","Giá vốn (TK 632) sau khi trích dự phòng, đồng",c632)],
    ex:["Khấu hao tháng = "+V(X.G)+" ÷ 120 = "+V(X.d)+" (Nợ 642 / Có 214).","Phân bổ CCDC: Nợ 642 / Có 242 = "+V(X.p)+".","Dự phòng = giá gốc - giá trị thuần = "+V(X.c156)+" - "+V(X.nrv)+" = "+V(X.dp)+" (Nợ 632 / Có 2294).","TK 642 = "+V(X.c642pre)+" + "+V(X.d)+" + "+V(X.p)+" = "+V(X.c642)+"; TK 632 = "+V(X.C)+" + "+V(X.dp)+" = "+V(c632)+"."]},
   {id:"n2",title:"Bước 2 - Thuế TNDN hiện hành và thuế hoãn lại",
    desc:"Dùng số chuẩn: doanh thu thuần "+V(X.Rn)+" (511 trừ 521); giá vốn "+V(c632)+"; chi phí quản lý "+V(X.c642)+". Tổng doanh thu năm trước "+V(X.prior)+" đồng (doanh nghiệp độc lập). Chi phí không được trừ: tiền phạt hành chính "+V(X.PH)+" đồng và phần dự phòng giảm giá không đủ điều kiện "+V(X.xp)+" đồng (chênh lệch tạm thời được khấu trừ). Đã tạm nộp thuế "+V(X.prov)+" đồng (TK 8211).",
    fields:[f("l","Lợi nhuận kế toán trước thuế (mã 50), đồng",X.lntt),f("t","Thu nhập tính thuế (cộng chi phí không được trừ), đồng",X.tntt),f("tx","Thuế TNDN hiện hành cả năm, đồng",X.thue),f("e","Ghi bổ sung chi phí thuế hiện hành (Nợ 8211 / Có 3334), đồng",X.extra),f("a","Tài sản thuế thu nhập hoãn lại (Nợ 243 / Có 8212) = chênh lệch × thuế suất, đồng",X.dta),f("r","Thuế suất áp dụng (%)",X.rate,"%")],
    ex:["LNTT = "+V(X.Rn)+" - "+V(c632)+" - "+V(X.c641)+" - "+V(X.c642)+" + "+V(X.i515)+" - "+V(X.c635)+" + ("+V(X.t711)+" - "+V(X.c811)+") = "+V(X.lntt)+".","Thuế suất "+X.rate+"% (doanh thu năm trước "+V(X.prior)+").","Thu nhập tính thuế = "+V(X.lntt)+" + "+V(X.PH)+" + "+V(X.xp)+" = "+V(X.tntt)+"; thuế hiện hành = "+V(X.thue)+"; ghi thêm "+V(X.extra)+".","Tài sản thuế hoãn lại = "+V(X.xp)+" × "+X.rate+"% = "+V(X.dta)+" (Nợ 243 / Có 8212: thu nhập thuế hoãn lại, mã 52 ghi số âm)."]},
   {id:"n3",title:"Bước 3 - Kết chuyển cuối kỳ",
    desc:"Dùng số chuẩn: doanh thu 511 = "+V(X.R)+", hàng bán bị trả lại 521 = "+V(X.g)+"; 632 = "+V(c632)+"; 641 = "+V(X.c641)+"; 642 = "+V(X.c642)+"; 515 = "+V(X.i515)+"; 635 = "+V(X.c635)+"; 711 = "+V(X.t711)+"; 811 = "+V(X.c811)+"; 8211 = "+V(X.thue)+"; thu nhập thuế hoãn lại 8212 (số dư Nợ) = "+V(X.dta)+".",
    fields:[f("rn","Doanh thu thuần sau kết chuyển 521 vào 511, đồng",X.Rn),f("cr","Tổng kết chuyển Có TK 911 (doanh thu thuần + 515 + 711 + 8212 thu nhập), đồng",X.Rn+X.i515+X.t711+X.dta),f("dr","Tổng kết chuyển Nợ TK 911 (632 + 641 + 642 + 635 + 811 + 8211), đồng",c632+X.c641+X.c642+X.c635+X.c811+X.thue),f("p","Lợi nhuận sau thuế (Nợ 911 / Có 421), đồng",X.lnst),f("e","Số dư Có TK 421 sau kết chuyển, đồng",X.e0+X.lnst)],
    ex:["Nợ 511 / Có 521 = "+V(X.g)+" → doanh thu thuần "+V(X.Rn)+".","Có 911 = "+V(X.Rn)+" + "+V(X.i515)+" + "+V(X.t711)+" + "+V(X.dta)+" = "+V(X.Rn+X.i515+X.t711+X.dta)+".","Nợ 911 = "+V(c632+X.c641+X.c642+X.c635+X.c811+X.thue)+".","LNST = "+V(X.lnst)+"; TK 421 = "+V(X.e0)+" + "+V(X.lnst)+" = "+V(X.e0+X.lnst)+"."]},
   {id:"n4",title:"Bước 4 - Báo cáo kết quả hoạt động (B02)",
    desc:"Trình bày thanh lý TSCĐ theo TT 99/2025: chỉ ghi phần chênh lệch (thu - giá trị còn lại - chi phí thanh lý) vào mã 31 nếu lãi hoặc mã 32 nếu lỗ. Thu nhập khác không phải thanh lý = "+V(X.t711b)+"; chi phí khác không phải thanh lý = "+V(X.c811b)+" (gồm tiền phạt). Thu thanh lý "+V(X.Sgl)+", giá trị còn lại và chi phí thanh lý "+V(X.Tgl)+". Các số chuẩn khác như bước 3; mã 21 bằng 0.",
    fields:[f("m01","Mã 01 - Doanh thu bán hàng, đồng",X.R),f("m02","Mã 02 - Các khoản giảm trừ doanh thu, đồng",X.g),f("m10","Mã 10 - Doanh thu thuần, đồng",X.Rn),f("m11","Mã 11 - Giá vốn hàng bán, đồng",c632),f("m20","Mã 20 - Lợi nhuận gộp, đồng",X.Rn-c632),f("m30","Mã 30 - Lợi nhuận thuần từ hoạt động kinh doanh, đồng",m30),f("m31","Mã 31 - Thu nhập khác, đồng",X.m31),f("m32","Mã 32 - Chi phí khác, đồng",X.m32),f("m40","Mã 40 - Lợi nhuận khác, đồng",m40),f("m50","Mã 50 - Tổng lợi nhuận kế toán trước thuế, đồng",m50),f("m51","Mã 51 - Chi phí thuế TNDN hiện hành, đồng",X.thue),f("m52","Mã 52 - Chi phí thuế TNDN hoãn lại (thu nhập ghi số âm), đồng",-X.dta),f("m60","Mã 60 - Lợi nhuận sau thuế, đồng",X.lnst)],
    ex:["Mã 10 = 01 - 02 = "+V(X.Rn)+"; mã 20 = 10 - 11 = "+V(X.Rn-c632)+".","Mã 30 = 20 + 21 + 22 - (23 + 25 + 26) = "+V(m30)+".","Thanh lý: "+(X.Sgl>X.Tgl?"lãi "+V(X.Sgl-X.Tgl)+" vào mã 31":"lỗ "+V(X.Tgl-X.Sgl)+" vào mã 32")+"; mã 31 = "+V(X.t711b)+(X.Sgl>X.Tgl?" + "+V(X.Sgl-X.Tgl):"")+" = "+V(X.m31)+"; mã 32 = "+V(X.c811b)+(X.Tgl>X.Sgl?" + "+V(X.Tgl-X.Sgl):"")+" = "+V(X.m32)+".","Mã 40 = 31 - 32 = "+V(m40)+"; mã 50 = 30 + 40 = "+V(m50)+".","Mã 52 = -"+V(X.dta)+" (thu nhập thuế hoãn lại); mã 60 = 50 - (51 + 52) = "+V(m50)+" - ("+V(X.thue)+" - "+V(X.dta)+") = "+V(X.lnst)+"."]},
   {id:"n5",title:"Bước 5 - B01 phần tài sản",
    desc:"Số dư SAU điều chỉnh: TK 2294 dư Có "+V(X.dp)+"; TK 214 = "+V(X.c214)+"; TK 242 = "+V(X.c242)+"; TK 243 = "+V(X.dta)+". TK 131: chi tiết dư Nợ "+V(X.D1)+" và chi tiết dư Có (khách trả trước) "+V(X.D2)+" - trình bày KHÔNG bù trừ.",
    fields:[f("m110","Mã 110 - Tiền và tương đương tiền, đồng",X.c111+X.c112),f("m131","Mã 131 - Phải thu ngắn hạn của khách hàng, đồng",X.D1),f("m141","Mã 141 - Hàng tồn kho (giá gốc), đồng",X.c156),f("m142","Mã 142 - Dự phòng giảm giá hàng tồn kho (số âm), đồng",-X.dp),f("m140","Mã 140 - Hàng tồn kho, đồng",X.c156-X.dp),f("m160","Mã 160 - Tài sản ngắn hạn khác (161 + 162), đồng",X.c242+X.c133),f("m100","Mã 100 - Tài sản ngắn hạn, đồng",tsnh),f("m220","Mã 220 - Tài sản cố định, đồng",tsdh),f("m272","Mã 272 - Tài sản thuế thu nhập hoãn lại, đồng",X.dta),f("m200","Mã 200 - Tài sản dài hạn (220 + 270), đồng",m200),f("m280","Mã 280 - Tổng cộng tài sản, đồng",tong)],
    ex:["Mã 131 = chi tiết dư Nợ TK 131 = "+V(X.D1)+" (dư Có "+V(X.D2)+" trình bày ở mã 312, không bù trừ).","Mã 140 = 141 + 142 = "+V(X.c156)+" - "+V(X.dp)+" = "+V(X.c156-X.dp)+" (mã 142 từ dư Có TK 2294, ghi âm).","Mã 160 = 161 (TK 242 = "+V(X.c242)+") + 162 (TK 133 = "+V(X.c133)+") = "+V(X.c242+X.c133)+"; mã 100 = "+V(tsnh)+".","Mã 220 = "+V(X.G)+" - "+V(X.c214)+" = "+V(tsdh)+"; mã 272 = dư Nợ TK 243 = "+V(X.dta)+"; mã 200 = "+V(m200)+"; mã 280 = "+V(tong)+"."]},
   {id:"n6",title:"Bước 6 - B01 phần nguồn vốn và kiểm tra cân đối",
    desc:"Số dư: TK 331 = "+V(X.c331)+"; TK 3331 = "+V(X.c3331)+"; TK 3334 = "+V(X.extra)+"; TK 334 = "+V(X.c334)+"; vay ngắn hạn "+V(X.ls)+" (mã 321), vay dài hạn "+V(X.ll)+" (mã 339); khách trả trước "+V(X.D2)+"; TK 411 = "+V(X.V)+"; TK 421 sau kết chuyển = "+V(m420)+". Coi TK 334 là phải trả người lao động ngắn hạn.",
    fields:[f("m312","Mã 312 - Người mua trả tiền trước ngắn hạn, đồng",X.D2),f("m314","Mã 314 - Thuế và các khoản phải nộp Nhà nước ngắn hạn (3331 + 3334), đồng",X.c3331+X.extra),f("m321","Mã 321 - Vay và nợ thuê tài chính ngắn hạn, đồng",X.ls),f("m339","Mã 339 - Vay và nợ thuê tài chính dài hạn, đồng",X.ll),f("m310","Mã 310 - Nợ ngắn hạn, đồng",m310),f("m330","Mã 330 - Nợ dài hạn, đồng",m330),f("m300","Mã 300 - Nợ phải trả, đồng",m300),f("m420","Mã 420 - Lợi nhuận sau thuế chưa phân phối, đồng",m420),f("m400","Mã 400 - Vốn chủ sở hữu, đồng",m400),f("m440","Mã 440 - Tổng cộng nguồn vốn, đồng",m440),f("chk","Chênh lệch mã 280 trừ mã 440 (phải bằng 0), đồng",0)],
    ex:["Mã 310 = 311 + 312 + 314 + 315 + 321 = "+V(X.c331)+" + "+V(X.D2)+" + "+V(X.c3331+X.extra)+" + "+V(X.c334)+" + "+V(X.ls)+" = "+V(m310)+".","Mã 330 = 339 = "+V(X.ll)+"; mã 300 = 310 + 330 = "+V(m300)+".","Mã 420 = "+V(m420)+"; mã 400 = 411 + 420 = "+V(m400)+"; mã 440 = 300 + 400 = "+V(m440)+" bằng mã 280 = "+V(tong)+"."]}
  ];
  X.fin="Kiểm tra cuối: lợi nhuận sau thuế "+V(X.lnst)+" đồng (gồm thu nhập thuế hoãn lại "+V(X.dta)+"); tổng tài sản "+V(tong)+" đồng = tổng nguồn vốn.";
  return X;
}

function BL_MAKE3(){
  function step(a,b,s){return a+s*Math.floor(Math.random()*((b-a)/s+1));}
  function pick(a){return a[Math.floor(Math.random()*a.length)];}
  function V(n){return n.toLocaleString("vi-VN");}
  var L=step(300e6,1200e6,10e6),d=step(60e6,300e6,10e6),I=step(20e6,150e6,1e6),T=Math.round(L*0.17),Tb=step(10e6,60e6,1e6),Te=step(10e6,70e6,1e6),
      ar0=step(300e6,1500e6,10e6),ar1=step(300e6,1500e6,10e6),iv0=step(200e6,1500e6,10e6),iv1=step(200e6,1500e6,10e6),ap0=step(100e6,1200e6,10e6),ap1=step(100e6,1200e6,10e6),pp0=step(10e6,80e6,1e6),pp1=step(10e6,80e6,1e6),
      P=step(100e6,900e6,10e6),S=step(0,150e6,10e6),N1=step(0,800e6,10e6),N2=step(0,600e6,10e6),K=step(0,500e6,10e6),Dv=step(0,200e6,10e6),Cb=step(100e6,900e6,10e6);
  var m08=L+d+I,m09=-(ar1-ar0),m10=-(iv1-iv0),m11=ap1-ap0,m12=-(pp1-pp0),m14=-I,taxPaid=T+Tb-Te,m15=-taxPaid,m20=m08+m09+m10+m11+m12+m14+m15,
      m21=-P,m22=S,m30=m21+m22,m31=K,m33=N1,m34=-N2,m36=-Dv,m40=m31+m33+m34+m36,m50=m20+m30+m40,m70=Cb+m50;
  var X={name:"Công ty "+pick(["Hòa Bình","Tân Phát","Đông Dương","Việt Tín"])+" - lập báo cáo lưu chuyển tiền tệ (gián tiếp)",note:"Số liệu năm báo cáo (từ B01 và B02). Đơn vị: đồng.",cols:["","Chỉ tiêu","Đầu kỳ","Cuối kỳ"],noSum:true,
   tb:[["131","Phải thu ngắn hạn của khách hàng",ar0,ar1],["141","Hàng tồn kho",iv0,iv1],["311+315","Phải trả người bán và phải trả người lao động",ap0,ap1],["161","Chi phí chờ phân bổ ngắn hạn",pp0,pp1],["314","Thuế TNDN phải nộp (dư Có TK 3334)",Tb,Te],["110","Tiền và tương đương tiền (B01)",Cb,m70]]};
  var f=function(k,l,a){return {k:k,l:l,a:a};};
  X.steps=[
   {id:"l1",title:"Bước 1 - Lưu chuyển tiền từ hoạt động kinh doanh",
    desc:"Lợi nhuận trước thuế (B02 mã 50) "+V(L)+"; khấu hao TSCĐ "+V(d)+"; chi phí đi vay "+V(I)+" (đã trả hết bằng tiền trong năm, không có lãi phải trả); chi phí thuế TNDN hiện hành "+V(T)+". Các số dư đầu kỳ và cuối kỳ ở bảng đề bài (mã 11 chỉ gồm phải trả người bán và người lao động; không kể lãi vay và thuế phải trả). Quy ước: tăng phải thu, hàng tồn kho, chi phí chờ phân bổ làm GIẢM tiền (ghi âm); tăng phải trả làm TĂNG tiền.",
    fields:[f("m01","Mã 01 - Lợi nhuận trước thuế",L),f("m02","Mã 02 - Khấu hao TSCĐ",d),f("m06","Mã 06 - Chi phí đi vay",I),f("m08","Mã 08 - Lợi nhuận từ HĐKD trước thay đổi vốn lưu động",m08),f("m09","Mã 09 - Tăng, giảm các khoản phải thu",m09),f("m10","Mã 10 - Tăng, giảm hàng tồn kho",m10),f("m11","Mã 11 - Tăng, giảm các khoản phải trả",m11),f("m12","Mã 12 - Tăng, giảm chi phí chờ phân bổ",m12),f("m14","Mã 14 - Chi phí đi vay đã trả",m14),f("m15","Mã 15 - Thuế TNDN đã nộp",m15),f("m20","Mã 20 - Lưu chuyển tiền thuần từ hoạt động kinh doanh",m20)],
    ex:["Mã 08 = 01 + 02 + 06 = "+V(L)+" + "+V(d)+" + "+V(I)+" = "+V(m08)+".","Mã 09 = -(cuối - đầu) = -("+V(ar1)+" - "+V(ar0)+") = "+V(m09)+"; mã 10 = -("+V(iv1)+" - "+V(iv0)+") = "+V(m10)+".","Mã 11 = cuối - đầu = "+V(ap1)+" - "+V(ap0)+" = "+V(m11)+"; mã 12 = -("+V(pp1)+" - "+V(pp0)+") = "+V(m12)+".","Mã 14 = -"+V(I)+"; thuế đã nộp = chi phí "+V(T)+" + phải nộp đầu kỳ "+V(Tb)+" - phải nộp cuối kỳ "+V(Te)+" = "+V(taxPaid)+" nên mã 15 = "+V(m15)+".","Mã 20 = 08 + 09 + 10 + 11 + 12 + 14 + 15 = "+V(m20)+"."]},
   {id:"l2",title:"Bước 2 - Lưu chuyển tiền từ hoạt động đầu tư",
    desc:"Trong năm: chi tiền mua sắm TSCĐ "+V(P)+" đồng; thu tiền thanh lý TSCĐ "+V(S)+" đồng.",
    fields:[f("m21","Mã 21 - Tiền chi mua sắm, xây dựng TSCĐ",m21),f("m22","Mã 22 - Tiền thu thanh lý, nhượng bán TSCĐ",m22),f("m30","Mã 30 - Lưu chuyển tiền thuần từ hoạt động đầu tư",m30)],
    ex:["Chi mua sắm là dòng tiền ra: mã 21 = "+V(m21)+".","Thu thanh lý là dòng tiền vào: mã 22 = "+V(m22)+".","Mã 30 = 21 + 22 + 23 + 24 + 25 + 26 + 27 = "+V(m30)+"."]},
   {id:"l3",title:"Bước 3 - Lưu chuyển tiền từ hoạt động tài chính",
    desc:"Trong năm: nhận vốn góp bằng tiền "+V(K)+"; tiền vay nhận được "+V(N1)+"; trả nợ gốc vay "+V(N2)+"; chi trả cổ tức, lợi nhuận "+V(Dv)+" đồng.",
    fields:[f("m31","Mã 31 - Tiền thu từ phát hành cổ phiếu, nhận vốn góp",m31),f("m33","Mã 33 - Tiền thu từ đi vay",m33),f("m34","Mã 34 - Tiền trả nợ gốc vay",m34),f("m36","Mã 36 - Cổ tức, lợi nhuận đã trả cho chủ sở hữu",m36),f("m40","Mã 40 - Lưu chuyển tiền thuần từ hoạt động tài chính",m40)],
    ex:["Mã 31 = "+V(m31)+"; mã 33 = "+V(m33)+"; mã 34 = "+V(m34)+" (âm); mã 36 = "+V(m36)+" (âm).","Mã 40 = 31 + 32 + 33 + 34 + 35 + 36 = "+V(m40)+"."]},
   {id:"l4",title:"Bước 4 - Tổng hợp và đối chiếu với B01",
    desc:"Dùng số chuẩn: mã 20 = "+V(m20)+"; mã 30 = "+V(m30)+"; mã 40 = "+V(m40)+". Tiền và tương đương tiền đầu kỳ (mã 110 đầu kỳ trên B01) = "+V(Cb)+"; không có ảnh hưởng tỷ giá (mã 61 = 0). Tiền cuối kỳ trên B01 (mã 110) = "+V(m70)+" đồng.",
    fields:[f("m50","Mã 50 - Lưu chuyển tiền thuần trong kỳ",m50),f("m60","Mã 60 - Tiền và tương đương tiền đầu kỳ",Cb),f("m70","Mã 70 - Tiền và tương đương tiền cuối kỳ",m70),f("chk","Chênh lệch mã 70 trừ mã 110 cuối kỳ trên B01 (phải bằng 0)",0)],
    ex:["Mã 50 = 20 + 30 + 40 = "+V(m20)+" + "+V(m30)+" + "+V(m40)+" = "+V(m50)+".","Mã 60 = mã 110 đầu kỳ trên B01 = "+V(Cb)+".","Mã 70 = 50 + 60 + 61 = "+V(m70)+" và phải bằng mã 110 cuối kỳ trên B01; chênh lệch = 0 là khớp. Nếu lệch, soát lại dấu của các khoản tăng, giảm vốn lưu động."]}
  ];
  X.fin="Tiền thuần trong kỳ "+V(m50)+" đồng; tiền cuối kỳ "+V(m70)+" đồng khớp mã 110 trên B01.";
  return X;
}
