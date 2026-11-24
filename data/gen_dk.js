/* BỘ SINH BÀI ĐỊNH KHOẢN (24/11/2026): mỗi mẫu tạo 6 bài với số tiền ngẫu nhiên mỗi lần mở app.
   Tài khoản theo TT 99/2025 (3383 BHXH, 3384 BHYT, 3386 BHTN; 8211 thuế TNDN hiện hành; 8212 hoãn lại; 242 chi phí chờ phân bổ).
   Thứ tự mẫu cố định để điểm theo dõi đúng chỗ; thêm mẫu mới ở CUỐI danh sách. */
(function(){
function step(a,b,s){return a+s*Math.floor(Math.random()*((b-a)/s+1));}
function pick(a){return a[Math.floor(Math.random()*a.length)];}
function M(n){return Math.round(n).toLocaleString("vi-VN");}
var G=[];
/* [chủ đề, hàm sinh -> {s, ans, h}] */
function add(t,fn){G.push([t,fn]);}
function net(){return step(10e6,500e6,1e6);}

/* ----- mua - bán - giá vốn ----- */
add("dk_muaban",function(){var n=net(),r=pick([8,10]),v=n*r/100;return {s:"Mua hàng hóa nhập kho giá chưa thuế "+M(n)+" đồng, thuế GTGT "+r+"%, chưa thanh toán cho nhà cung cấp.",ans:[["156","N",n],["133","N",v],["331","C",n+v]],h:"Hàng nhập kho 156, thuế đầu vào 133, phải trả 331 theo tổng giá thanh toán."};});
add("dk_muaban",function(){var n=net(),r=pick([8,10]),v=n*r/100;return {s:"Mua nguyên liệu, vật liệu nhập kho giá chưa thuế "+M(n)+" đồng, thuế GTGT "+r+"%, thanh toán chuyển khoản.",ans:[["152","N",n],["133","N",v],["112","C",n+v]],h:"Nguyên liệu, vật liệu 152; chuyển khoản ghi Có 112."};});
add("dk_muaban",function(){var n=net(),r=pick([8,10]),v=n*r/100;return {s:"Bán hàng giá chưa thuế "+M(n)+" đồng, thuế GTGT "+r+"%, khách chuyển khoản ngay.",ans:[["112","N",n+v],["511","C",n],["3331","C",v]],h:"Thu tiền gửi 112; doanh thu 511; thuế phải nộp 3331."};});
add("dk_muaban",function(){var n=net(),r=pick([8,10]),v=n*r/100;return {s:"Bán chịu hàng hóa cho khách giá chưa thuế "+M(n)+" đồng, thuế GTGT "+r+"%.",ans:[["131","N",n+v],["511","C",n],["3331","C",v]],h:"Phải thu khách hàng 131 theo tổng giá thanh toán."};});
add("dk_muaban",function(){var g=step(5e6,400e6,1e6);return {s:"Kết chuyển giá vốn của lô hàng hóa đã bán trong kỳ "+M(g)+" đồng.",ans:[["632","N",g],["156","C",g]],h:"Giá vốn 632 (Nợ), hàng hóa giảm 156 (Có)."};});
add("dk_muaban",function(){var g=step(5e6,400e6,1e6);return {s:"Xuất kho nguyên liệu, vật liệu trị giá "+M(g)+" đồng cho sản xuất sản phẩm.",ans:[["621","N",g],["152","C",g]],h:"Chi phí nguyên liệu, vật liệu trực tiếp 621; giảm kho 152."};});
add("dk_muaban",function(){var n=net(),r=pick([8,10]),v=n*r/100,g=Math.round(n*0.7/1e6)*1e6;return {s:"Bán hàng thu tiền mặt giá chưa thuế "+M(n)+" đồng (thuế "+r+"%); đồng thời ghi giá vốn "+M(g)+" đồng. Định khoản toàn bộ hai bút toán.",ans:[["111","N",n+v],["511","C",n],["3331","C",v],["632","N",g],["156","C",g]],h:"Bút toán doanh thu và bút toán giá vốn đi cùng nhau."};});
add("dk_muaban",function(){var n=net(),r=pick([8,10]),v=n*r/100;return {s:"Mua hàng hóa nhập kho giá chưa thuế "+M(n)+" đồng, thuế GTGT "+r+"%, trả bằng tiền mặt.",ans:[["156","N",n],["133","N",v],["111","C",n+v]],h:"Chi bằng tiền mặt ghi Có 111."};});
/* ----- tiền, công nợ, vốn vay ----- */
add("dk_tien",function(){var a=step(10e6,500e6,1e6);return {s:"Khách hàng chuyển khoản trả nợ "+M(a)+" đồng.",ans:[["112","N",a],["131","C",a]],h:"Thu nợ phải thu: Nợ 112, Có 131."};});
add("dk_tien",function(){var a=step(10e6,500e6,1e6);return {s:"Thanh toán cho nhà cung cấp "+M(a)+" đồng bằng chuyển khoản.",ans:[["331","N",a],["112","C",a]],h:"Giảm phải trả: Nợ 331, Có 112."};});
add("dk_tien",function(){var a=step(5e6,300e6,1e6);return {s:"Rút tiền gửi ngân hàng nhập quỹ tiền mặt "+M(a)+" đồng.",ans:[["111","N",a],["112","C",a]],h:"Rút tiền: Nợ 111, Có 112."};});
add("dk_tien",function(){var a=step(5e6,300e6,1e6);return {s:"Nộp tiền mặt "+M(a)+" đồng vào tài khoản ngân hàng.",ans:[["112","N",a],["111","C",a]],h:"Nộp tiền: Nợ 112, Có 111."};});
add("dk_tien",function(){var a=step(50e6,900e6,10e6);return {s:"Vay ngân hàng, tiền nhận vào tài khoản "+M(a)+" đồng.",ans:[["112","N",a],["341","C",a]],h:"Vay và nợ thuê tài chính 341."};});
add("dk_tien",function(){var a=step(1e6,40e6,1e6);return {s:"Trả lãi vay ngân hàng "+M(a)+" đồng bằng chuyển khoản.",ans:[["635","N",a],["112","C",a]],h:"Chi phí tài chính 635."};});
add("dk_tien",function(){var a=step(50e6,600e6,10e6);return {s:"Trả nợ gốc vay ngân hàng "+M(a)+" đồng bằng chuyển khoản.",ans:[["341","N",a],["112","C",a]],h:"Trả gốc: Nợ 341, Có 112."};});
add("dk_tien",function(){var a=step(2e6,50e6,1e6);return {s:"Tạm ứng tiền mặt "+M(a)+" đồng cho nhân viên đi công tác.",ans:[["141","N",a],["111","C",a]],h:"Tạm ứng 141."};});
add("dk_tien",function(){var a=step(100e6,900e6,10e6);return {s:"Chủ sở hữu góp vốn bằng chuyển khoản "+M(a)+" đồng.",ans:[["112","N",a],["411","C",a]],h:"Vốn đầu tư của chủ sở hữu 411."};});
add("dk_tien",function(){var u=step(5e6,30e6,1e6),c=Math.round(u*0.8/1e6)*1e6,r=pick([8,10]),v=Math.round(c*r/100);return {s:"Nhân viên thanh toán tạm ứng "+M(u)+" đồng: chi phí quản lý chưa thuế "+M(c)+" đồng, thuế GTGT "+r+"% "+M(v)+" đồng, phần còn lại hoàn nhập quỹ tiền mặt.",ans:[["642","N",c],["133","N",v],["111","N",u-c-v],["141","C",u]],h:"Chi phí 642, thuế 133, tiền hoàn lại 111, giảm tạm ứng 141."};});
/* ----- thuế ----- */
add("dk_thue",function(){var o=step(30e6,300e6,1e6),i=step(10e6,Math.min(o,280e6),1e6);return {s:"Cuối tháng khấu trừ thuế GTGT: thuế đầu ra TK 3331 là "+M(o)+" đồng, thuế đầu vào TK 133 là "+M(i)+" đồng (khấu trừ toàn bộ phần đầu vào).",ans:[["3331","N",Math.min(o,i)],["133","C",Math.min(o,i)]],h:"Khấu trừ số nhỏ hơn."};});
add("dk_thue",function(){var a=step(5e6,200e6,1e6);return {s:"Nộp thuế GTGT còn phải nộp "+M(a)+" đồng bằng chuyển khoản.",ans:[["3331","N",a],["112","C",a]],h:"Nộp ngân sách: Nợ 3331, Có 112."};});
add("dk_thue",function(){var a=step(5e6,100e6,1e6);return {s:"Ghi nhận thuế TNDN tạm phải nộp của quý "+M(a)+" đồng.",ans:[["8211","N",a],["3334","C",a]],h:"Chi phí thuế TNDN hiện hành 8211; thuế TNDN phải nộp 3334."};});
add("dk_thue",function(){var a=step(5e6,100e6,1e6);return {s:"Nộp thuế TNDN "+M(a)+" đồng bằng chuyển khoản.",ans:[["3334","N",a],["112","C",a]],h:"Nộp ngân sách: Nợ 3334, Có 112."};});
add("dk_thue",function(){var a=step(1e6,40e6,1e6);return {s:"Nộp tiền phạt vi phạm hành chính về thuế "+M(a)+" đồng bằng chuyển khoản (ghi nhận chi phí khác).",ans:[["811","N",a],["112","C",a]],h:"Chi phí khác 811 (không được trừ khi tính thuế TNDN)."};});
/* ----- lương, bảo hiểm ----- */
add("dk_luong",function(){var l=step(10e6,200e6,1e6);return {s:"Tính tiền lương phải trả nhân viên bán hàng trong tháng: "+M(l)+" đồng.",ans:[["641","N",l],["334","C",l]],h:"Chi phí bán hàng 641; phải trả người lao động 334."};});
add("dk_luong",function(){var b=step(10e6,200e6,1e6);return {s:"Trích BHXH, BHYT, BHTN phần doanh nghiệp chịu trên quỹ lương đóng bảo hiểm "+M(b)+" đồng (17,5%, 3%, 1%) vào chi phí quản lý doanh nghiệp.",ans:[["642","N",b*0.215],["3383","C",b*0.175],["3384","C",b*0.03],["3386","C",b*0.01]],h:"3383 BHXH; 3384 BHYT; 3386 BHTN."};});
add("dk_luong",function(){var b=step(10e6,200e6,1e6);return {s:"Khấu trừ BHXH, BHYT, BHTN phần người lao động chịu (8%, 1,5%, 1%) trên quỹ lương đóng bảo hiểm "+M(b)+" đồng vào lương phải trả.",ans:[["334","N",b*0.105],["3383","C",b*0.08],["3384","C",b*0.015],["3386","C",b*0.01]],h:"Khấu trừ vào lương: Nợ 334, Có 3383, 3384, 3386."};});
add("dk_luong",function(){var a=step(10e6,200e6,1e6);return {s:"Chi trả lương cho người lao động bằng chuyển khoản "+M(a)+" đồng.",ans:[["334","N",a],["112","C",a]],h:"Trả lương: Nợ 334, Có 112."};});
add("dk_luong",function(){var b=step(10e6,200e6,1e6);return {s:"Nộp BHXH, BHYT, BHTN bằng chuyển khoản cho quỹ bảo hiểm với tổng quỹ lương đóng "+M(b)+" đồng (cả phần doanh nghiệp 21,5% và người lao động 10,5%).",ans:[["3383","N",b*0.255],["3384","N",b*0.045],["3386","N",b*0.02],["112","C",b*0.32]],h:"BHXH 17,5%+8%=25,5%; BHYT 3%+1,5%=4,5%; BHTN 1%+1%=2%."};});
/* ----- TSCĐ, CCDC, chi phí ----- */
add("dk_tscd",function(){var n=step(50e6,900e6,10e6),r=pick([8,10]),v=n*r/100;return {s:"Mua máy móc (TSCĐ hữu hình) giá chưa thuế "+M(n)+" đồng, thuế GTGT "+r+"%, chuyển khoản.",ans:[["211","N",n],["133","N",v],["112","C",n+v]],h:"TSCĐ hữu hình 211."};});
add("dk_tscd",function(){var k=step(2e6,40e6,1e6);return {s:"Trích khấu hao TSCĐ bộ phận quản lý doanh nghiệp tháng này "+M(k)+" đồng.",ans:[["642","N",k],["214","C",k]],h:"Chi phí quản lý 642; hao mòn lũy kế 214."};});
add("dk_tscd",function(){var c=step(10e6,100e6,1e6);return {s:"Xuất kho công cụ, dụng cụ cho bộ phận quản lý, trị giá "+M(c)+" đồng, phân bổ nhiều kỳ.",ans:[["242","N",c],["153","C",c]],h:"Chi phí chờ phân bổ 242; công cụ dụng cụ 153."};});
add("dk_tscd",function(){var c=step(1e6,20e6,1e6);return {s:"Phân bổ chi phí chờ phân bổ (CCDC) của bộ phận quản lý vào chi phí kỳ này "+M(c)+" đồng.",ans:[["642","N",c],["242","C",c]],h:"Phân bổ: Nợ 642, Có 242."};});
add("dk_tscd",function(){var c=step(2e6,60e6,1e6);return {s:"Trích trước chi phí sửa chữa văn phòng phải trả vào chi phí quản lý doanh nghiệp "+M(c)+" đồng.",ans:[["642","N",c],["335","C",c]],h:"Chi phí phải trả 335."};});
/* ----- kết chuyển ----- */
add("dk_ketchuyen",function(){var a=step(100e6,900e6,10e6);return {s:"Cuối kỳ kết chuyển doanh thu bán hàng thuần "+M(a)+" đồng sang xác định kết quả kinh doanh.",ans:[["511","N",a],["911","C",a]],h:"Kết chuyển doanh thu: Nợ 511, Có 911."};});
add("dk_ketchuyen",function(){var a=step(50e6,600e6,10e6);return {s:"Cuối kỳ kết chuyển giá vốn hàng bán "+M(a)+" đồng.",ans:[["911","N",a],["632","C",a]],h:"Nợ 911, Có 632."};});
add("dk_ketchuyen",function(){var a=step(10e6,200e6,1e6);return {s:"Cuối kỳ kết chuyển chi phí quản lý doanh nghiệp "+M(a)+" đồng.",ans:[["911","N",a],["642","C",a]],h:"Nợ 911, Có 642."};});
add("dk_ketchuyen",function(){var a=step(10e6,300e6,1e6);return {s:"Sau khi kết chuyển, lợi nhuận sau thuế của kỳ là "+M(a)+" đồng. Kết chuyển sang lợi nhuận sau thuế chưa phân phối.",ans:[["911","N",a],["421","C",a]],h:"Lãi: Nợ 911, Có 421."};});
/* ----- loại 7-8, thuế hoãn lại ----- */
add("dk_loai8",function(){var g=step(30e6,300e6,10e6),r=pick([8,10]),v=g*r/100;return {s:"Thanh lý TSCĐ: thu tiền gửi "+M(g+v)+" đồng gồm giá bán "+M(g)+" đồng và thuế GTGT "+r+"%. Hãy định khoản phần ghi nhận thu nhập.",ans:[["112","N",g+v],["711","C",g],["3331","C",v]],h:"Thu nhập khác 711; thuế phải nộp 3331."};});
add("dk_loai8",function(){var o=step(100e6,500e6,10e6),h=Math.round(o*0.8/10e6)*10e6;return {s:"Ghi giảm TSCĐ thanh lý: nguyên giá "+M(o)+" đồng, hao mòn lũy kế "+M(h)+" đồng.",ans:[["214","N",h],["811","N",o-h],["211","C",o]],h:"Giá trị còn lại ghi vào chi phí khác 811."};});
add("dk_loai8",function(){var a=step(2e6,50e6,1e6);return {s:"Nhận tiền phạt do khách hàng vi phạm hợp đồng "+M(a)+" đồng bằng chuyển khoản.",ans:[["112","N",a],["711","C",a]],h:"Thu nhập khác 711."};});
add("dk_loai8",function(){var a=step(2e6,40e6,1e6);return {s:"Ghi nhận tài sản thuế thu nhập hoãn lại phát sinh trong năm "+M(a)+" đồng.",ans:[["243","N",a],["8212","C",a]],h:"Tài sản thuế hoãn lại 243; giảm chi phí thuế hoãn lại 8212."};});
add("dk_loai8",function(){var a=step(2e6,40e6,1e6);return {s:"Ghi nhận thuế thu nhập hoãn lại phải trả phát sinh trong năm "+M(a)+" đồng.",ans:[["8212","N",a],["347","C",a]],h:"Chi phí thuế hoãn lại 8212; thuế hoãn lại phải trả 347."};});
add("dk_loai8",function(){var a=step(5e6,100e6,1e6);return {s:"Cuối năm kết chuyển chi phí thuế TNDN hiện hành "+M(a)+" đồng sang xác định kết quả kinh doanh.",ans:[["911","N",a],["8211","C",a]],h:"Nợ 911, Có 8211."};});
G.forEach(function(g,gi){
  for(var k=0;k<6;k++){
    var d=g[1](),ans=d.ans.map(function(x){return [x[0],x[1],Math.round(x[2])];});
    DK.push({t:g[0],id:"g"+gi+"_"+k,s:d.s,ans:ans,h:d.h,g:1});
  }
});
})();
