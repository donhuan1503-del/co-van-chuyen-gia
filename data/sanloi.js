/* SĂN LỖI BÚT TOÁN: cho bộ dữ kiện + bút toán đã ghi; người học chỉ ra dòng sai, loại lỗi, bản chất, rủi ro thuế và cách phòng tránh.
   Mỗi mẫu: make(R) -> {title, facts[], entries:[{h, l:[[Nợ|Có, tài khoản, số tiền]]}], flaws:[{at:"e,l" | miss:true, type, fix, why, risk, detect, prevent, law}], oknote}
   Căn cứ đã đối chiếu nguyên văn: Luật GTGT Điều 14; Luật TNDN Điều 9, 10, 16; Luật BHXH 2024 Điều 33; TT 20/2026 Điều 3 (chứng từ không tiền mặt từ 5 triệu).
   Tài khoản theo hệ thống TT 200/TT 99 (156, 133, 331, 3331, 3334, 3383, 3384, 3386, 334, 211, 214, 242, 511, 521, 632, 642, 811, 821). */
var HUNT = [

{id:"h_mua_hang",topic:"ketoan",level:1,make:function(R){
  var P=R.step(20e6,400e6,5e6),V=Math.round(P*0.1),T=P+V,v=R.v(4);
  var f=["Mua hàng hóa nhập kho để bán lại. Hóa đơn GTGT của nhà cung cấp: giá chưa thuế "+R.m(P)+" đồng, thuế suất 10%, thuế GTGT "+R.m(V)+" đồng, tổng "+R.m(T)+" đồng.","Phiếu nhập kho đã lập đủ. Điều khoản: chưa thanh toán, 30 ngày sau trả bằng chuyển khoản."];
  var e=[{h:"Bút toán 1 - Ghi nhận mua hàng",l:[["Nợ","156",P],["Nợ","133",V],["Có","331",T]]}],fl=[];
  if(v===1){e[0].l[0][1]="642";fl.push({at:"0,0",type:"Sai tài khoản: hàng nhập kho ghi thẳng vào chi phí",fix:"Nợ 156 "+R.m(P),why:"Hàng mua để bán lại là hàng tồn kho (TK 156). Chi phí chỉ phát sinh khi bán hàng, qua giá vốn (TK 632) theo nguyên tắc phù hợp giữa doanh thu và chi phí.",risk:"Chi phí năm nay bị đẩy lên, lợi nhuận giảm; cơ quan thuế xem là khoản chi không tương ứng doanh thu (Luật TNDN Điều 9 khoản 2 điểm m) và nghi ngờ điều tiết lợi nhuận.",detect:"Đối chiếu tồn kho sổ sách với kiểm kê; tỷ lệ giá vốn/doanh thu thấp bất thường; hóa đơn mua lớn nhưng tồn kho không tăng.",prevent:"Nhập liệu mua hàng bắt buộc đi kèm phiếu nhập kho; phần mềm chặn ghi thẳng TK 642 cho hàng hóa.",law:"Nguyên tắc phù hợp; Luật TNDN Điều 9."});}
  else if(v===2){e[0].l[2][1]="111";fl.push({at:"0,2",type:"Sai tài khoản đối ứng: ghi đã trả tiền mặt trong khi chưa thanh toán",fix:"Có 331 "+R.m(T),why:"Mua chịu thì ghi nợ phải trả người bán (TK 331), không được ghi giảm quỹ tiền mặt khi chưa chi tiền.",risk:"Sổ quỹ ghi chi không có chứng từ chi, quỹ có thể âm; công nợ nhà cung cấp thiếu so với thực tế; hóa đơn từ 5 triệu mà ghi tiền mặt còn gây rủi ro mất quyền khấu trừ thuế (Luật GTGT Điều 14 khoản 2 điểm b).",detect:"Quỹ tiền mặt cuối ngày âm; đối chiếu công nợ với nhà cung cấp lệch; sổ phụ ngân hàng không có giao dịch tương ứng.",prevent:"Quy trình: chỉ ghi Có 111/112 khi có phiếu chi hoặc giấy báo nợ; đối chiếu công nợ nhà cung cấp hằng tháng.",law:"Luật GTGT Điều 14 khoản 2 điểm b; nguyên tắc kế toán dồn tích."});}
  else if(v===3){e[0].l=[["Nợ","156",T],["Có","331",T]];fl.push({at:"0,0",type:"Tính thuế GTGT đầu vào vào giá trị hàng tồn kho",fix:"Nợ 156 "+R.m(P)+"; Nợ 133 "+R.m(V),why:"Thuế GTGT đầu vào đủ điều kiện được khấu trừ phải ghi riêng ở TK 133, không tính vào giá gốc hàng tồn kho.",risk:"Giá vốn bị tính cao; thuế đầu vào bị bỏ sót, tờ khai GTGT nộp thừa; số dư 133 trên sổ không khớp tờ khai.",detect:"Đối chiếu bảng kê hóa đơn mua vào với số phát sinh Nợ 133; giá vốn đơn vị cao hơn giá mua chưa thuế.",prevent:"Mẫu bút toán mua hàng có sẵn dòng 133; kiểm tra tổng 133 hằng tháng với tờ khai.",law:"Luật GTGT Điều 14 khoản 1."});}
  else if(v===4){var V8=Math.round(P*0.08);e[0].l=[["Nợ","156",P],["Nợ","133",V8],["Có","331",P+V8]];fl.push({at:"0,1",type:"Ghi thuế đầu vào không khớp số thuế trên hóa đơn",fix:"Nợ 133 "+R.m(V)+" đúng theo hóa đơn",why:"Số thuế GTGT đầu vào ghi sổ phải đúng số thuế ghi trên hóa đơn của người bán (10%: "+R.m(V)+" đồng).",risk:"Khai thuế đầu vào sai so với dữ liệu hóa đơn điện tử đã gửi cơ quan thuế; bị cảnh báo chênh lệch khi đối chiếu bảng kê mua vào.",detect:"Cơ quan thuế đối chiếu số thuế kê khai với dữ liệu hóa đơn điện tử đầu vào.",prevent:"Nhập thuế suất và tiền thuế từ hóa đơn gốc, không tự tính lại.",law:"Luật GTGT Điều 14."});
    fl.push({at:"0,2",type:"Công nợ nhà cung cấp ghi sai số tiền hóa đơn",fix:"Có 331 "+R.m(T),why:"Công nợ phải khớp tổng thanh toán trên hóa đơn.",risk:"Đối chiếu công nợ với nhà cung cấp bị lệch.",detect:"Biên bản đối chiếu công nợ lệch.",prevent:"Đối chiếu công nợ hằng tháng.",law:"Luật Kế toán Điều 6, 13."});}
  return {title:"Ghi nhận mua hàng hóa nhập kho",facts:f,entries:e,flaws:fl};}},

{id:"h_ban_hang",topic:"ketoan",level:1,make:function(R){
  var S=R.step(30e6,500e6,5e6),V=Math.round(S*0.1),T=S+V,C=Math.round(S*R.pick([0.62,0.7,0.78])/1e5)*1e5,v=R.v(3);
  var f=["Bán hàng hóa cho khách, đã xuất hóa đơn GTGT: giá bán chưa thuế "+R.m(S)+" đồng, thuế 10% ("+R.m(V)+" đồng), tổng "+R.m(T)+" đồng. Khách đã chuyển khoản đủ vào tài khoản ngân hàng ngay trong ngày.","Hàng đã xuất kho giao khách, giá vốn bình quân "+R.m(C)+" đồng."];
  var e=[{h:"Bút toán 1 - Ghi nhận doanh thu",l:[["Nợ","112",T],["Có","511",S],["Có","3331",V]]},{h:"Bút toán 2 - Ghi nhận giá vốn",l:[["Nợ","632",C],["Có","156",C]]}],fl=[];
  if(v===1){e[0].l[1][1]="711";fl.push({at:"0,1",type:"Sai tài khoản doanh thu: ghi vào thu nhập khác",fix:"Có 511 "+R.m(S),why:"Bán hàng hóa thuộc hoạt động kinh doanh thường xuyên phải ghi vào doanh thu bán hàng (TK 511), không phải thu nhập khác (TK 711).",risk:"Doanh thu trên báo cáo kết quả kinh doanh thấp hơn tờ khai GTGT; ảnh hưởng thuế suất TNDN (căn cứ tổng doanh thu) và dễ bị cơ quan thuế đối chiếu chênh lệch.",detect:"Đối chiếu doanh thu tờ khai GTGT với chỉ tiêu doanh thu trên báo cáo tài chính và với hóa đơn bán ra.",prevent:"Danh mục tài khoản doanh thu theo loại hình; soát chênh lệch doanh thu GTGT và BCKQKD mỗi quý.",law:"Luật TNDN Điều 8, 10."});}
  else if(v===2){e.pop();fl.push({miss:true,type:"Thiếu bút toán giá vốn khi ghi nhận doanh thu",fix:"Nợ 632 "+R.m(C)+" / Có 156 "+R.m(C),why:"Ghi doanh thu thì phải đồng thời ghi giá vốn của hàng đã bán (nguyên tắc phù hợp).",risk:"Lãi gộp ảo, tồn kho sổ sách lớn hơn thực tế; khi kiểm kê chênh lệch bị xử lý như hàng thiếu, thuế TNDN bị truy thu.",detect:"Tỷ suất lãi gộp bất thường; kiểm kê tồn kho thiếu so với sổ; hóa đơn bán nhưng không có phiếu xuất kho.",prevent:"Bút toán doanh thu và xuất kho liên kết cùng một chứng từ bán hàng.",law:"Luật Kế toán Điều 6; nguyên tắc phù hợp."});}
  else if(v===3){e[0].l[2][1]="133";fl.push({at:"0,2",type:"Ghi thuế GTGT đầu ra vào tài khoản thuế đầu vào (TK 133)",fix:"Có 3331 "+R.m(V),why:"Thuế GTGT của hàng bán ra là thuế đầu ra phải nộp (Có TK 3331); TK 133 chỉ dùng cho thuế đầu vào được khấu trừ.",risk:"Thuế phải nộp bị bỏ sót, tờ khai kê khai thiếu thuế đầu ra: bị truy thu, phạt khai thiếu và tính tiền chậm nộp 0,03%/ngày.",detect:"Đối chiếu thuế đầu ra tờ khai với bảng kê hóa đơn bán ra và sổ 3331.",prevent:"Mẫu bút toán bán hàng cố định; đối chiếu 3331 hằng tháng.",law:"Luật GTGT Điều 14; Luật Quản lý thuế (tiền chậm nộp 0,03%/ngày)."});}
  return {title:"Ghi nhận doanh thu và giá vốn bán hàng",facts:f,entries:e,flaws:fl};}},

{id:"h_tiep_khach",topic:"gtgt",level:2,make:function(R){
  var B=R.step(8e6,40e6,1e6),V=Math.round(B*0.1),T=B+V,v=R.v(2);
  var f=["Chi phí tiếp khách phục vụ hoạt động kinh doanh, có hóa đơn GTGT hợp lệ: giá chưa thuế "+R.m(B)+" đồng, thuế 10% ("+R.m(V)+" đồng), tổng "+R.m(T)+" đồng."];
  var how=v===0?"Thanh toán bằng chuyển khoản qua tài khoản ngân hàng của công ty.":"Thanh toán bằng TIỀN MẶT.";
  f.push(how);
  var e=[{h:"Bút toán 1 - Ghi nhận chi phí",l:[["Nợ","642",B],["Nợ","133",V],["Có",v===0?"112":"111",T]]}],fl=[];
  if(v>=1){var cash=true;
    fl.push({at:"0,1",type:"Khấu trừ thuế GTGT đầu vào của hóa đơn từ 5 triệu thanh toán bằng tiền mặt",fix:"Nợ 642 "+R.m(T)+" (không ghi 133), kèm điều chỉnh tăng thu nhập chịu thuế khi quyết toán TNDN",why:"Điều kiện khấu trừ thuế GTGT đầu vào: có chứng từ thanh toán không dùng tiền mặt (Luật GTGT Điều 14 khoản 2 điểm b); ngưỡng 5 triệu đồng theo quy định hướng dẫn (NĐ 181/2025 Điều 26). Thanh toán bằng tiền mặt thì không được khấu trừ.",risk:"Truy thu thuế GTGT đã khấu trừ; đồng thời chi phí không được trừ khi tính TNDN (Luật TNDN Điều 9 khoản 1 điểm c; TT 20/2026 Điều 3), bị phạt khai sai và tiền chậm nộp.",detect:"Cơ quan thuế đối chiếu sao kê ngân hàng với hóa đơn đầu vào từ 5 triệu; sổ quỹ có chi tiền mặt cho hóa đơn lớn.",prevent:"Chặn thanh toán tiền mặt cho hóa đơn từ 5 triệu ngay từ khâu duyệt chi; lưu ủy nhiệm chi hoặc giấy báo nợ.",law:"Luật GTGT Điều 14 khoản 2; Luật TNDN Điều 9 khoản 1 điểm c; NĐ 181/2025 Điều 26; TT 20/2026 Điều 3."});}
  return {title:"Chi phí tiếp khách và điều kiện khấu trừ thuế",facts:f,entries:e,flaws:fl};}},

{id:"h_phat_hc",topic:"tndn",level:2,make:function(R){
  var F=R.step(2e6,40e6,1e6),v=R.v(2);
  var f=["Công ty bị cơ quan thuế ra quyết định xử phạt vi phạm hành chính "+R.m(F)+" đồng do vi phạm về hóa đơn; đã nộp phạt qua ngân hàng."];
  var e=[{h:"Bút toán 1 - Ghi nhận khoản phạt",l:[["Nợ",v===1?"642":"811",F],["Có","112",F]]}],fl=[];
  if(v===1)fl.push({at:"0,0",type:"Đưa tiền phạt vi phạm hành chính vào chi phí quản lý",fix:"Nợ 811 "+R.m(F)+" và điều chỉnh tăng thu nhập chịu thuế TNDN",why:"Khoản phạt vi phạm hành chính là chi phí khác (TK 811), không phải chi phí hoạt động. Khoản này không được trừ khi tính thuế TNDN.",risk:"Nếu không loại trừ khi quyết toán, thuế TNDN bị truy thu; ghi vào 642 làm cơ quan thuế khó nhận ra khoản phải loại, tăng rủi ro bị xác định cố tình.",detect:"Tìm từ khóa phạt, vi phạm trong sổ chi tiết 642; đối chiếu quyết định xử phạt đã nộp với bảng điều chỉnh quyết toán.",prevent:"Danh mục tài khoản có quy tắc: khoản phạt chỉ ghi 811; bảng điều chỉnh TNDN cuối năm liệt kê toàn bộ TK 811.",law:"Luật TNDN Điều 9 khoản 2 điểm b."});
  if(v===2){e[0].l[1][1]="111";fl.push({at:"0,1",type:"Ghi nộp phạt bằng tiền mặt trong khi thực tế nộp qua ngân hàng",fix:"Có 112 "+R.m(F),why:"Tài khoản đối ứng phải khớp phương thức thanh toán thực tế.",risk:"Sổ quỹ lệch, số dư ngân hàng sổ sách khác sổ phụ.",detect:"Đối chiếu sổ phụ ngân hàng với sổ tiền gửi: khoản trừ tiền không có trên sổ.",prevent:"Hạch toán từ giấy báo nợ ngân hàng.",law:"Luật Kế toán Điều 13 khoản 2."});}
  return {title:"Hạch toán tiền phạt vi phạm hành chính",facts:f,entries:e,flaws:fl};}},

{id:"h_luong_bh",topic:"bhxh",level:2,make:function(R){
  var L=R.step(8e6,40e6,1e6),v=R.v(2),b1=Math.round(L*0.08),b2=Math.round(L*0.015),b3=Math.round(L*0.01),tot=b1+b2+b3;
  var f=["Lương làm căn cứ đóng BHXH của một người lao động: "+R.m(L)+" đồng/tháng. Phần người lao động đóng: BHXH 8%, BHYT 1,5%, BHTN 1% khấu trừ vào lương."];
  var e=[{h:"Bút toán 1 - Khấu trừ bảo hiểm vào lương người lao động",l:[["Nợ","334",tot],["Có","3383",b1],["Có","3384",b2],["Có","3386",b3]]}],fl=[];
  if(v===1){e[0].l=[["Nợ","334",tot],["Có","3383",b1],["Có","3384",b2+b3]];fl.push({at:"0,2",type:"Gộp bảo hiểm thất nghiệp vào tài khoản BHYT",fix:"Có 3384 "+R.m(b2)+"; Có 3386 "+R.m(b3),why:"Mỗi loại bảo hiểm phải theo dõi riêng để đối chiếu với thông báo của cơ quan BHXH.",risk:"Không đối chiếu được số phải nộp từng loại; nộp thiếu, nộp nhầm quỹ.",detect:"Đối chiếu sổ chi tiết 338 với thông báo đóng BHXH, BHYT, BHTN của cơ quan bảo hiểm.",prevent:"Sổ chi tiết riêng cho 3383, 3384, 3386.",law:"Luật BHXH 2024 Điều 33; Luật Kế toán Điều 6."});}
  else if(v===2){e[0].l[0][1]="642";fl.push({at:"0,0",type:"Ghi phần bảo hiểm người lao động đóng vào chi phí quản lý",fix:"Nợ 334 "+R.m(tot),why:"Phần bảo hiểm do người lao động đóng được trừ vào lương phải trả (Nợ 334), không phải chi phí của doanh nghiệp.",risk:"Chi phí tăng ảo; phần của doanh nghiệp (3% + 14% hưu trí...) bị trộn với phần người lao động, tính sai chi phí lương.",detect:"Chi phí lương trên sổ cao hơn bảng lương; đối chiếu bảng lương, chi phí bảo hiểm của doanh nghiệp.",prevent:"Mẫu phân bổ lương: tách phần trừ người lao động và phần doanh nghiệp chịu.",law:"Luật BHXH 2024 Điều 33, 34."});}
  return {title:"Khấu trừ bảo hiểm vào lương người lao động",facts:f,entries:e,flaws:fl};}},

{id:"h_khau_hao",topic:"ketoan",level:1,make:function(R){
  var D=R.step(1e6,12e6,500000),v=R.v(2);
  var f=["Trích khấu hao tháng cho máy móc phục vụ bộ phận quản lý: "+R.m(D)+" đồng."];
  var e=[{h:"Bút toán 1 - Trích khấu hao",l:[["Nợ","642",D],["Có","214",D]]}],fl=[];
  if(v===1){e[0].l[1][1]="211";fl.push({at:"0,1",type:"Ghi giảm trực tiếp nguyên giá TSCĐ thay vì tăng hao mòn lũy kế",fix:"Có 214 "+R.m(D),why:"Khấu hao ghi vào TK 214 (hao mòn lũy kế); nguyên giá TK 211 chỉ giảm khi thanh lý, nhượng bán.",risk:"Nguyên giá và giá trị còn lại trên báo cáo sai; bảng tính khấu hao tiếp theo bị lệch, chi phí khấu hao các kỳ sau sai.",detect:"Đối chiếu sổ TSCĐ chi tiết với tổng 211 và 214; nguyên giá giảm không có thanh lý.",prevent:"Phần mềm TSCĐ tự sinh bút toán khấu hao; kiểm tra 211, 214 hằng quý.",law:"Luật Kế toán Điều 6; Luật TNDN Điều 9 khoản 2 điểm e."});}
  else if(v===2){e[0].l=[["Nợ","214",D],["Có","642",D]];fl.push({at:"0,0",type:"Đảo bên Nợ Có",fix:"Nợ 642; Có 214",why:"Chi phí tăng ghi bên Nợ; hao mòn lũy kế tăng ghi bên Có.",risk:"Chi phí khấu hao ghi âm, lợi nhuận ảo; thuế TNDN tính sai.",detect:"Chi phí 642 giảm bất thường, hao mòn lũy kế giảm.",prevent:"Kiểm tra bảng cân đối phát sinh: phát sinh bên nào lớn hơn.",law:"Luật Kế toán Điều 6."});
    fl.push({at:"0,1",type:"Đảo bên Nợ Có",fix:"Nợ 642; Có 214",why:"Như trên.",risk:"Như trên.",detect:"Như trên.",prevent:"Như trên.",law:"Luật Kế toán Điều 6."});}
  return {title:"Trích khấu hao TSCĐ",facts:f,entries:e,flaws:fl};}},

{id:"h_tra_ncc",topic:"ketoan",level:1,make:function(R){
  var X=R.step(10e6,300e6,1e6),v=R.v(2);
  var f=["Công ty chuyển khoản qua ngân hàng trả nợ nhà cung cấp "+R.m(X)+" đồng cho hóa đơn đã ghi nhận kỳ trước. Giấy báo nợ ngày hôm nay."];
  var e=[{h:"Bút toán 1 - Thanh toán công nợ",l:[["Nợ","331",X],["Có","112",X]]}],fl=[];
  if(v===1){e[0].l=[["Nợ","112",X],["Có","331",X]];fl.push({at:"0,0",type:"Đảo bên Nợ Có",fix:"Nợ 331 "+R.m(X),why:"Trả nợ làm giảm nợ phải trả: ghi Nợ 331 và Có 112.",risk:"Công nợ nhà cung cấp tăng gấp đôi chênh lệch, số dư tiền gửi tăng ảo.",detect:"Số dư 112 sổ sách lớn hơn sổ phụ ngân hàng; công nợ nhà cung cấp lệch.",prevent:"Đối chiếu sổ phụ ngân hàng hằng ngày.",law:"Luật Kế toán Điều 13 khoản 2."});
    fl.push({at:"0,1",type:"Đảo bên Nợ Có",fix:"Có 112 "+R.m(X),why:"Như trên.",risk:"Như trên.",detect:"Như trên.",prevent:"Như trên.",law:"Luật Kế toán Điều 13."});}
  else if(v===2){e[0].l[1][1]="111";fl.push({at:"0,1",type:"Ghi chi tiền mặt trong khi thanh toán qua ngân hàng",fix:"Có 112 "+R.m(X),why:"Phương thức thanh toán phải khớp chứng từ gốc (giấy báo nợ ngân hàng).",risk:"Quỹ tiền mặt sổ sách âm hoặc lệch; khoản chuyển khoản không được ghi nhận khiến số dư ngân hàng sổ sách sai; với hóa đơn từ 5 triệu mất bằng chứng thanh toán không dùng tiền mặt (Luật GTGT Điều 14 khoản 2 điểm b).",detect:"Sổ phụ ngân hàng có khoản trừ tiền mà sổ tiền gửi không có.",prevent:"Hạch toán từ giấy báo nợ; không dùng chứng từ chi tiền mặt cho giao dịch ngân hàng.",law:"Luật GTGT Điều 14 khoản 2 điểm b."});}
  return {title:"Thanh toán công nợ nhà cung cấp qua ngân hàng",facts:f,entries:e,flaws:fl};}},

{id:"h_khau_tru",topic:"gtgt",level:2,make:function(R){
  var A=R.step(100e6,400e6,5e6),B=A+R.pick([-1,1])*R.step(10e6,80e6,5e6),mn=Math.min(A,B),mx=Math.max(A,B),v=R.v(2);
  var f=["Cuối tháng: thuế GTGT đầu ra phát sinh (số dư Có TK 3331) "+R.m(A)+" đồng; thuế GTGT đầu vào đủ điều kiện khấu trừ (số dư Nợ TK 133) "+R.m(B)+" đồng. Doanh nghiệp tính thuế theo phương pháp khấu trừ."];
  var e=[{h:"Bút toán 1 - Khấu trừ thuế GTGT cuối kỳ",l:[["Nợ","3331",v===1?mx:mn],["Có","133",v===1?mx:mn]]}],fl=[];
  if(v===1){fl.push({at:"0,0",type:"Khấu trừ vượt số thuế đầu ra hoặc vượt số thuế đầu vào hiện có",fix:"Nợ 3331 / Có 133 "+R.m(mn)+" (số nhỏ hơn giữa đầu ra và đầu vào)",why:"Số khấu trừ tối đa bằng số nhỏ hơn giữa thuế đầu ra và thuế đầu vào; phần đầu vào còn lại chuyển kỳ sau (nếu đầu vào lớn hơn) hoặc phần đầu ra còn lại là số phải nộp.",risk:"Số dư 3331 hoặc 133 bị âm; tờ khai sai so với sổ; khai thiếu thuế phải nộp.",detect:"Số dư 133, 3331 sổ cái không khớp chỉ tiêu trên tờ khai 01/GTGT.",prevent:"Mẫu tính khấu trừ cuối kỳ: min(đầu ra, đầu vào); đối chiếu tờ khai.",law:"Luật GTGT Điều 14 khoản 1 điểm đ."});
    fl.push({at:"0,1",type:"Khấu trừ vượt số thuế đầu ra hoặc vượt số thuế đầu vào hiện có",fix:"Có 133 "+R.m(mn),why:"Như trên.",risk:"Như trên.",detect:"Như trên.",prevent:"Như trên.",law:"Luật GTGT Điều 14."});}
  if(v===2){e[0].l=[["Nợ","3331",mn],["Có","111",mn]];fl.push({at:"0,1",type:"Ghi khấu trừ thuế vào quỹ tiền mặt",fix:"Có 133 "+R.m(mn),why:"Khấu trừ thuế là bù trừ giữa 3331 và 133, không liên quan tiền mặt.",risk:"Quỹ tiền mặt bị ghi giảm không có chi thực tế, số dư 133 không được kết chuyển.",detect:"Sổ quỹ không có phiếu chi tương ứng; số dư 133 không khớp tờ khai.",prevent:"Bút toán khấu trừ cuối kỳ cố định Nợ 3331 / Có 133.",law:"Luật GTGT Điều 14."});}
  return {title:"Khấu trừ thuế GTGT cuối kỳ",facts:f,entries:e,flaws:fl};}},

{id:"h_thue_tndn",topic:"tndn",level:2,make:function(R){
  var TN=R.step(200e6,2000e6,10e6),cases=[
   {dtp:"2,6 tỷ đồng",rate:0.15,txt:"15% (doanh thu năm liền trước không quá 03 tỷ đồng)"},
   {dtp:"40 tỷ đồng",rate:0.17,txt:"17% (doanh thu năm liền trước trên 03 tỷ đến không quá 50 tỷ đồng)"},
   {dtp:"120 tỷ đồng",rate:0.20,txt:"20% (doanh thu năm liền trước trên 50 tỷ đồng)"}],c=R.pick(cases),v=R.v(2),tax=Math.round(TN*c.rate);
  var f=["Quyết toán thuế TNDN năm: thu nhập tính thuế "+R.m(TN)+" đồng; tổng doanh thu của kỳ tính thuế liền trước là "+c.dtp+"."];
  var used=v===1?(c.rate===0.20?0.15:0.20):c.rate;
  var e=[{h:"Bút toán 1 - Ghi nhận chi phí thuế TNDN hiện hành",l:[["Nợ",v===2?"642":"821",Math.round(TN*used)],["Có","3334",Math.round(TN*used)]]}],fl=[];
  if(v===1){fl.push({at:"0,0",type:"Áp sai thuế suất TNDN",fix:"Thuế suất "+c.txt+": chi phí thuế "+R.m(tax)+" đồng",why:"Thuế suất 15%, 17%, 20% xác định theo tổng doanh thu của kỳ tính thuế liền trước (Luật TNDN Điều 10 khoản 2, 3).",risk:"Tờ khai quyết toán tính sai thuế: thiếu thì bị truy thu, phạt khai sai, tiền chậm nộp 0,03%/ngày; thừa thì nộp thừa.",detect:"Cơ quan thuế đối chiếu doanh thu năm liền trước với thuế suất áp dụng trên tờ khai.",prevent:"Lập bảng theo dõi doanh thu từng năm; ghi chú căn cứ thuế suất trong hồ sơ quyết toán.",law:"Luật TNDN Điều 10."});
    fl.push({at:"0,1",type:"Áp sai thuế suất TNDN",fix:"Có 3334 "+R.m(tax),why:"Như trên.",risk:"Như trên.",detect:"Như trên.",prevent:"Như trên.",law:"Luật TNDN Điều 10."});}
  if(v===2){fl.push({at:"0,0",type:"Ghi thuế TNDN vào chi phí quản lý",fix:"Nợ 821 "+R.m(tax),why:"Chi phí thuế TNDN hiện hành ghi ở TK 821, không đưa vào chi phí quản lý. Bản thân thuế TNDN không được trừ khi tính thuế TNDN (Luật TNDN Điều 9 khoản 2 điểm l).",risk:"Lợi nhuận trước thuế sai; nếu đưa vào chi phí tính thuế thì bị tính trừ hai lần.",detect:"Đối chiếu chi phí thuế TNDN trên báo cáo kết quả kinh doanh với tờ khai quyết toán.",prevent:"Danh mục tài khoản: thuế TNDN chỉ ghi 821.",law:"Luật TNDN Điều 9 khoản 2 điểm l."});}
  return {title:"Ghi nhận chi phí thuế TNDN và xác định thuế suất",facts:f,entries:e,flaws:fl};}},

{id:"h_tra_lai",topic:"ketoan",level:2,make:function(R){
  var S=R.step(20e6,200e6,5e6),V=Math.round(S*0.1),T=S+V,C=Math.round(S*0.7/1e5)*1e5,v=R.v(2);
  var f=["Khách trả lại hàng đã bán kỳ trước (không đạt chất lượng). Hai bên lập biên bản, người bán xuất hóa đơn điều chỉnh giảm: giá chưa thuế "+R.m(S)+" đồng, thuế 10% "+R.m(V)+" đồng, tổng "+R.m(T)+" đồng, trừ vào công nợ phải thu.","Hàng trả lại đã nhập kho trở lại, giá vốn trước đây "+R.m(C)+" đồng."];
  var e=[{h:"Bút toán 1 - Ghi giảm doanh thu và thuế",l:[["Nợ","521",S],["Nợ","3331",V],["Có","131",T]]},{h:"Bút toán 2 - Nhập kho lại, giảm giá vốn",l:[["Nợ","156",C],["Có","632",C]]}],fl=[];
  if(v===1){e.pop();fl.push({miss:true,type:"Thiếu bút toán nhập kho và giảm giá vốn của hàng trả lại",fix:"Nợ 156 "+R.m(C)+" / Có 632 "+R.m(C),why:"Hàng nhập lại kho phải ghi tăng tồn kho và giảm giá vốn đã ghi.",risk:"Giá vốn quá cao so với doanh thu còn lại, tồn kho sổ sách thiếu so với thực tế; lãi bị tính thấp, thuế TNDN sai.",detect:"Tồn kho thực tế nhiều hơn sổ; tỷ suất lãi gộp giảm bất thường sau kỳ có hàng trả lại.",prevent:"Mọi biên bản trả hàng gắn với phiếu nhập kho.",law:"Luật Kế toán Điều 6."});}
  else if(v===2){e[0].l=[["Nợ","521",T],["Có","131",T]];fl.push({at:"0,0",type:"Ghi giảm doanh thu cả phần thuế GTGT, bỏ điều chỉnh thuế đầu ra",fix:"Nợ 521 "+R.m(S)+"; Nợ 3331 "+R.m(V),why:"Hóa đơn điều chỉnh giảm làm giảm cả thuế đầu ra; phần thuế phải ghi Nợ 3331, không tính vào giảm trừ doanh thu.",risk:"Doanh thu bị giảm nhiều hơn thực tế, thuế đầu ra kê khai cao hơn đúng; sai khớp tờ khai GTGT.",detect:"Đối chiếu hóa đơn điều chỉnh với tờ khai GTGT và sổ 3331.",prevent:"Mẫu bút toán trả hàng có dòng 3331.",law:"Luật GTGT Điều 14."});}
  return {title:"Hàng bán bị trả lại",facts:f,entries:e,flaws:fl};}},

{id:"h_ccdc",topic:"ketoan",level:2,make:function(R){
  var m=R.pick([12,24,36]),P=m*R.step(1e6,5e6,500000),mo=Math.round(P/m),v=R.v(2);
  var f=["Mua công cụ dụng cụ giá chưa thuế "+R.m(P)+" đồng (thuế 10%), thanh toán chuyển khoản. Doanh nghiệp phân bổ đều trong "+m+" tháng, đưa vào sử dụng ở bộ phận quản lý từ tháng này."];
  var V=Math.round(P*0.1);
  var e=[{h:"Bút toán 1 - Mua công cụ dụng cụ",l:[["Nợ","242",P],["Nợ","133",V],["Có","112",P+V]]},{h:"Bút toán 2 - Phân bổ tháng đầu tiên",l:[["Nợ","642",v===1?P:mo],["Có","242",v===1?P:mo]]}],fl=[];
  if(v===1)fl.push({at:"1,0",type:"Phân bổ toàn bộ chi phí trả trước vào một kỳ",fix:"Nợ 642 / Có 242 "+R.m(mo)+" mỗi tháng",why:"Chi phí trả trước phải phân bổ theo thời gian sử dụng để phù hợp với doanh thu từng kỳ.",risk:"Chi phí kỳ này bị đẩy lên, các kỳ sau thiếu chi phí; chênh lệch thời điểm ghi nhận chi phí có thể bị cơ quan thuế điều chỉnh.",detect:"Sổ chi tiết 242 giảm hết trong một tháng; đối chiếu kế hoạch phân bổ.",prevent:"Lập bảng theo dõi phân bổ cho từng công cụ dụng cụ.",law:"Luật Kế toán Điều 6; Luật TNDN Điều 9."});
  if(v===1)fl.push({at:"1,1",type:"Phân bổ toàn bộ chi phí trả trước vào một kỳ",fix:"Có 242 "+R.m(mo),why:"Như trên.",risk:"Như trên.",detect:"Như trên.",prevent:"Như trên.",law:"Luật Kế toán Điều 6."});
  if(v===2){e[0].l[2][1]="111";fl.push({at:"0,2",type:"Ghi thanh toán tiền mặt trong khi chuyển khoản",fix:"Có 112 "+R.m(P+V),why:"Tài khoản đối ứng phải đúng phương thức thanh toán; hóa đơn từ 5 triệu cần chứng từ thanh toán không dùng tiền mặt.",risk:"Mất chứng cứ thanh toán không dùng tiền mặt, nguy cơ không được khấu trừ GTGT, không được trừ chi phí TNDN; sổ phụ lệch sổ.",detect:"Đối chiếu sổ phụ ngân hàng với sổ tiền gửi và sổ quỹ.",prevent:"Hạch toán từ giấy báo nợ ngân hàng.",law:"Luật GTGT Điều 14 khoản 2 điểm b; Luật TNDN Điều 9 khoản 1 điểm c."});}
  return {title:"Công cụ dụng cụ và chi phí trả trước",facts:f,entries:e,flaws:fl};}},

{id:"h_cutoff",topic:"ketoan",level:3,make:function(R){
  var S=R.step(100e6,800e6,10e6),V=Math.round(S*0.1),T=S+V,v=R.v(2);
  var early=v!==0;
  var f=["Hợp đồng: quyền sở hữu hàng hóa chuyển giao cho khách khi khách nhận hàng tại kho khách. Giá bán chưa thuế "+R.m(S)+" đồng, thuế 10% "+R.m(V)+" đồng.",early?"Ngày 31/12 công ty xuất hóa đơn và ghi nhận doanh thu; nhưng xe giao hàng chỉ đến kho khách ngày 03/01 năm sau, khách ký biên bản nhận hàng ngày 03/01.":"Xe giao hàng đến kho khách và khách ký biên bản nhận hàng ngày 30/12; công ty xuất hóa đơn và ghi nhận doanh thu ngày 31/12."];
  var e=[{h:"Bút toán 1 - Ghi nhận doanh thu ngày 31/12",l:[["Nợ","131",T],["Có","511",S],["Có","3331",V]]}],fl=[];
  if(early){fl.push({at:"0,1",type:"Ghi nhận doanh thu sai kỳ (chưa chuyển giao quyền sở hữu)",fix:"Ghi nhận doanh thu và thuế đầu ra vào ngày 03/01 năm sau (khi khách nhận hàng); đến 31/12 hàng còn là hàng gửi đi bán",why:"Doanh thu ghi nhận khi rủi ro và lợi ích gắn với quyền sở hữu đã chuyển cho người mua; hóa đơn lập tại thời điểm chuyển giao quyền sở hữu.",risk:"Doanh thu, thuế GTGT đầu ra và thuế TNDN năm nay bị kê khai sớm; lập hóa đơn không đúng thời điểm có thể bị xử phạt; hàng còn trong kho không có trên sổ tồn kho.",detect:"Đối chiếu hóa đơn xuất cuối năm với phiếu giao nhận, biên bản nhận hàng, nhật ký vận chuyển; kiểm kê cuối năm lệch tồn kho.",prevent:"Rà soát cut-off: mọi hóa đơn 5 ngày cuối năm đối chiếu chứng từ giao nhận; khóa sổ theo thời điểm giao hàng.",law:"Nguyên tắc ghi nhận doanh thu (chuẩn mực kế toán); nguyên tắc thời điểm lập hóa đơn (xem thẻ Quản lý thuế)."});
    fl.push({at:"0,0",type:"Ghi nhận khoản phải thu sai kỳ",fix:"Ghi Nợ 131 vào ngày chuyển giao hàng 03/01",why:"Khoản phải thu phát sinh khi hàng đã giao và quyền sở hữu chuyển cho khách.",risk:"Phải thu và doanh thu cuối năm bị thổi phồng so với thực tế.",detect:"Thư xác nhận công nợ với khách hàng, đối chiếu biên bản nhận hàng.",prevent:"Rà soát cut-off cuối năm.",law:"Nguyên tắc ghi nhận doanh thu."});
    fl.push({at:"0,2",type:"Kê khai thuế GTGT đầu ra sai kỳ",fix:"Ghi Có 3331 vào kỳ chuyển giao",why:"Thuế đầu ra phát sinh cùng thời điểm hóa đơn đúng kỳ.",risk:"Tờ khai kỳ cuối năm kê khai sai.",detect:"Như trên.",prevent:"Như trên.",law:"Luật GTGT Điều 8."});}
  return {title:"Cut-off doanh thu cuối năm",facts:f,entries:e,flaws:fl};}}

];

/* ===== Giao diện ===== */
function HR(seed){
  var a=seed|0,rng=function(){a=a+0x6D2B79F5|0;var t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296;};
  var r={forceV:null};
  r.int=function(x,y){return x+Math.floor(rng()*(y-x+1));};
  r.step=function(x,y,st){return x+st*Math.floor(rng()*((y-x)/st+1));};
  r.pick=function(arr){return arr[Math.floor(rng()*arr.length)];};
  r.v=function(n){var x=r.int(0,n);return r.forceV!==null?r.forceV:x;};
  r.m=function(n){return money(n);};
  return r;
}
var huntCur=null,huntSeen=[],huntStat={n:0,ok:0};
function viewHunt(){
  return '<div class="card"><b>Săn lỗi bút toán</b><div class="law">Đóng vai kiểm toán viên hoặc thanh tra thuế: xem dữ kiện, tích vào từng dòng bút toán mà bạn cho là SAI. Nếu thấy thiếu bút toán thì tích ô «Thiếu bút toán». Nếu mọi thứ đúng thì để trống và bấm Chấm. Sau khi chấm: bút toán đúng hoàn chỉnh, đối chiếu dòng sai với dòng đúng, bản chất, rủi ro thuế, cách cơ quan thuế phát hiện, cách phòng tránh.</div></div><div id="huntbox"></div>';
}
function huntNew(){
  var pool=HUNT.filter(function(t){return huntSeen.indexOf(t.id)<0;});
  if(!pool.length){huntSeen=[];pool=HUNT;}
  var t=shuffle(pool)[0];huntSeen.push(t.id);
  var seed=Math.floor(Math.random()*2147483000)+1,s=t.make(HR(seed)),r2=HR(seed);r2.forceV=0;
  try{s.good=t.make(r2).entries;}catch(e){s.good=null;}
  huntCur={t:t,s:s,sel:{},miss:false,done:false};huntRender();
}
function huntToggle(k){if(huntCur.done)return;huntCur.sel[k]=!huntCur.sel[k];huntRender();}
function huntMiss(){if(huntCur.done)return;huntCur.miss=!huntCur.miss;huntRender();}
function huntGrade(){
  var c=huntCur,s=c.s,want={},wantMiss=false;
  s.flaws.forEach(function(f){if(f.miss)wantMiss=true;else want[f.at]=1;});
  var okSet=true,ks=Object.keys(c.sel).filter(function(k){return c.sel[k];});
  ks.forEach(function(k){if(!want[k])okSet=false;});Object.keys(want).forEach(function(k){if(!c.sel[k])okSet=false;});
  var ok=okSet&&(c.miss===wantMiss);
  c.ok=ok;c.done=true;huntStat.n++;if(ok)huntStat.ok++;
  record(c.t.topic,"hunt:"+c.t.id,ok,"hunt");huntRender();
}
function huntLn(l){return l[0]+" "+l[1]+": "+money(l[2])+" đồng";}
function huntTable(entries){
  return entries.map(function(en){return '<h4>'+esc(en.h)+'</h4><table>'+en.l.map(function(ln){return '<tr><td><b>'+esc(ln[0])+' '+esc(ln[1])+'</b></td><td class="n" style="text-align:right">'+money(ln[2])+'</td></tr>';}).join("")+'</table>';}).join("");
}
function huntRender(){
  var box=$("huntbox");if(!box)return;
  if(!huntCur){huntNew();return;}
  var c=huntCur,s=c.s,h='<div class="card"><span class="tag">Mức '+c.t.level+'/3</span><span class="tag g">Đã làm '+huntStat.ok+'/'+huntStat.n+'</span><h3>'+esc(s.title)+'</h3><ul>'+s.facts.map(function(f){return '<li>'+esc(f)+'</li>';}).join("")+'</ul>';
  var want={},wantMiss=false;s.flaws.forEach(function(f){if(f.miss)wantMiss=true;else want[f.at]=f;});
  s.entries.forEach(function(en,ei){
    h+='<h4>'+esc(en.h)+'</h4><table>';
    en.l.forEach(function(ln,li){
      var k=ei+","+li,on=!!c.sel[k],bad=!!want[k],mark="";
      if(c.done)mark=bad?(on?' ✔ lỗi':' ✘ bạn bỏ sót'):(on?' ✘ dòng này đúng':'');
      h+='<tr style="'+(c.done&&(bad||on)?(bad?'background:rgba(179,38,30,.10)':'background:rgba(180,120,0,.10)'):'')+'"><td style="width:32px"><input type="checkbox" '+(on?'checked ':'')+(c.done?'disabled ':'')+'onclick="huntToggle(\''+k+'\')"></td><td><b>'+esc(ln[0])+' '+esc(ln[1])+'</b></td><td class="n" style="text-align:right">'+money(ln[2])+'</td><td class="law">'+esc(mark)+'</td></tr>';
    });
    h+='</table>';
  });
  h+='<p><label><input type="checkbox" '+(c.miss?'checked ':'')+(c.done?'disabled ':'')+'onclick="huntMiss()" style="width:auto"> Thiếu bút toán cần ghi'+(c.done&&wantMiss?' ✔ đúng, có thiếu':'')+(c.done&&!wantMiss&&c.miss?' ✘ không thiếu':'')+'</label></p>';
  if(!c.done){h+='<p><button class="b" onclick="huntGrade()">Chấm</button> <button class="b alt" onclick="huntNew()">Bỏ qua</button></p></div>';}
  else{
    var types={};s.flaws.forEach(function(f){types[f.type]=1;});
    h+='<div class="ex"><b>'+(c.ok?'Chính xác.':'Chưa đúng hoàn toàn.')+'</b> '+(s.flaws.length?'Bộ chứng từ này có '+s.flaws.length+' dòng sai thuộc '+Object.keys(types).length+' loại lỗi.':'Bút toán này ĐÚNG, không có lỗi: đây là bài kiểm tra bạn có kết luận đúng, không báo lỗi thừa.')+'</div>';
    if(s.good&&s.flaws.length){h+='<h3 style="margin-top:12px">Bút toán đúng hoàn chỉnh</h3>'+huntTable(s.good);}
    var groups={},order=[];
    s.flaws.forEach(function(f){var g=groups[f.type];if(!g){g=groups[f.type]={f:f,ats:[],miss:false};order.push(f.type);}if(f.miss)g.miss=true;else g.ats.push(f.at);});
    order.forEach(function(ty,gi){var g=groups[ty],f=g.f,rows="";
      g.ats.forEach(function(at){var p=at.split(","),bad=s.entries[+p[0]]&&s.entries[+p[0]].l[+p[1]],gd=s.good&&s.good[+p[0]]&&s.good[+p[0]].l.length===s.entries[+p[0]].l.length&&s.good[+p[0]].l[+p[1]];if(gd&&bad&&gd[0]!==bad[0])gd=null;
        rows+='<tr><td>'+esc(bad?huntLn(bad):"")+'</td><td>→</td><td>'+esc(gd?huntLn(gd):"(xem bút toán đúng hoàn chỉnh ở trên)")+'</td></tr>';});
      if(g.miss)rows+='<tr><td>(không có bút toán)</td><td>→</td><td>'+esc(f.fix)+'</td></tr>';
      h+='<div class="card" style="margin-top:10px"><span class="tag w">Lỗi '+(gi+1)+'</span><b> '+esc(f.type)+'</b>'+(rows?'<h4>Dòng sai → dòng đúng</h4><table>'+rows+'</table>':'')+'<h4>Cần ghi đúng</h4><div>'+esc(f.fix)+'</div><h4>Vì sao đây là lỗi (bản chất)</h4><div>'+esc(f.why)+'</div><h4>Rủi ro thuế và hệ quả</h4><div>'+esc(f.risk)+'</div><h4>Cơ quan thuế, kiểm toán phát hiện bằng cách nào</h4><div>'+esc(f.detect)+'</div><h4>Cách phòng tránh</h4><div>'+esc(f.prevent)+'</div><div class="law">Căn cứ: '+esc(f.law)+'</div><h4>Tự kiểm tra bằng 4 câu hỏi</h4><div class="law">1) Nghiệp vụ thực chất là gì? 2) Tài khoản đối ứng nào đúng bản chất? 3) Số tiền khớp hóa đơn, chứng từ thanh toán chưa? 4) Thời điểm ghi nhận và hồ sơ thuế (điều kiện khấu trừ, chi phí được trừ) đã đủ chưa?</div></div>';});
    if(!s.flaws.length)h+='<div class="law">Kiểm tra lại: tài khoản đúng bản chất, số tiền khớp hóa đơn và chứng từ thanh toán, bút toán đủ và cân Nợ - Có.</div>';
    h+='<p><button class="b" onclick="huntNew()">Bài tiếp theo</button></p></div>';
  }
  box.innerHTML=h;
}
