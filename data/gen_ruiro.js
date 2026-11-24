/* Bộ sinh câu hỏi RỦI RO THUẾ từ bảng tiêu chí Phụ lục II, Thông tư 94/2026/TT-BTC (đọc nguyên văn bằng OCR) và các điều 9-20.
   Thêm ở CUỐI file này để không làm lệch điểm theo dõi của các câu cũ. */
(function(){
function sh(a){a=a.slice();for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1)),t=a[i];a[i]=a[j];a[j]=t;}return a;}
function pick(a){return a[Math.floor(Math.random()*a.length)];}
function int(a,b){return a+Math.floor(Math.random()*(b-a+1));}
function uniq(a){var s={},r=[];a.forEach(function(x){if(!s[x]){s[x]=1;r.push(x);}});return r;}
function Q(t,q,right,wrongs,e){wrongs=uniq(wrongs).filter(function(w){return w!==right;});
  var o=sh([{t:right,ok:1}].concat(wrongs.slice(0,3).map(function(w){return {t:w,ok:0};})));
  QUIZ.push({t:t,q:q,o:o.map(function(x){return x.t;}),a:o.findIndex(function(x){return x.ok;}),e:e||"",g:1});}
function others(pool,right,n){return sh(pool.filter(function(x){return x!==right;})).slice(0,n);}
var GR={
 info:"Thông tin chung về người nộp thuế",rep:"Người đại diện theo pháp luật, thành viên sáng lập, chủ sở hữu",stat:"Tình trạng hoạt động",file:"Tình hình kê khai và nộp hồ sơ khai thuế",aud:"Báo cáo tài chính được kiểm toán",
 rev:"Doanh thu bán hàng, cung cấp dịch vụ",cost:"Chi phí",prof:"Lợi nhuận và tình trạng lỗ",bs:"Tài sản và khả năng thanh toán (tài sản, nợ, vốn, hàng tồn kho)",ns:"Chấp hành nghĩa vụ với ngân sách nhà nước (nộp, miễn giảm, hoàn thuế)",
 vat:"Thuế giá trị gia tăng",cit:"Thuế thu nhập doanh nghiệp",sct:"Thuế tiêu thụ đặc biệt",pit:"Thuế thu nhập cá nhân",land:"Đất đai, tài sản gắn liền với đất",debt:"Tình hình nợ thuế",pen:"Mức độ vi phạm hành chính về thuế",chk:"Kết quả kiểm tra thuế",inv:"Tình hình sử dụng hóa đơn",oth:"Giao dịch liên kết, kinh tế số và tiêu chí khác"};
var C=[
 ["Thời gian thành lập","info"],["Địa chỉ trụ sở đăng ký kinh doanh","info"],["Loại hình kinh tế","info"],["Ngành nghề đăng ký kinh doanh","info"],["Vốn điều lệ","info"],["Mức độ tương xứng giữa số nhân viên với tính chất, quy mô người nộp thuế","info"],["Thông tin về kế toán trưởng","info"],
 ["Mức độ vi phạm pháp luật thuế của người đại diện theo pháp luật","rep"],["Thông tin tham gia bảo hiểm xã hội của người đại diện","rep"],["Tuổi của người đại diện theo pháp luật","rep"],["Thông tin doanh nghiệp mà cá nhân là người đại diện theo pháp luật","rep"],["Địa chỉ đăng ký thường trú, tạm trú của người đại diện","rep"],
 ["Trạng thái hoạt động","stat"],["Số lần tạm ngừng kinh doanh","stat"],["Thời gian tạm ngừng kinh doanh","stat"],["Số lần thay đổi địa điểm kinh doanh","stat"],
 ["Tỷ trọng số hồ sơ khai thuế đã nộp trên số hồ sơ phải nộp","file"],["Tỷ trọng số hồ sơ khai thuế nộp đúng hạn","file"],["Người nộp thuế có điều chỉnh, bổ sung hồ sơ khai thuế","file"],["Tất cả chỉ tiêu trên hồ sơ khai thuế bằng 0","file"],
 ["Ý kiến của kiểm toán báo cáo tài chính","aud"],["Tình hình nộp báo cáo tài chính được kiểm toán","aud"],
 ["Tổng doanh thu bán hàng hóa, cung cấp dịch vụ","rev"],["Doanh thu thuần bán hàng hóa, cung cấp dịch vụ","rev"],["Doanh thu hàng hóa, dịch vụ chịu thuế suất GTGT 0%","rev"],["Doanh thu hàng hóa, dịch vụ không chịu thuế GTGT","rev"],["Tổng giá trị hàng hóa, dịch vụ mua vào","rev"],
 ["Tổng chi phí","cost"],["Chi phí bán hàng","cost"],["Chi phí quản lý doanh nghiệp","cost"],["Chi phí lãi vay","cost"],["Giá vốn hàng bán","cost"],["Chi phí khác","cost"],
 ["Tổng lợi nhuận kế toán trước thuế thu nhập doanh nghiệp","prof"],["Lợi nhuận sau thuế thu nhập doanh nghiệp","prof"],["Lợi nhuận gộp từ bán hàng và cung cấp dịch vụ","prof"],["Tổng số lỗ","prof"],["Số lần kê khai lỗ","prof"],["Lỗ liên tục nhưng vẫn mở rộng quy mô sản xuất, kinh doanh","prof"],
 ["Tài sản ngắn hạn","bs"],["Tài sản cố định","bs"],["Tổng tài sản","bs"],["Nợ phải trả","bs"],["Phải trả người bán","bs"],["Người mua trả tiền trước","bs"],["Các khoản dự phòng","bs"],["Vốn chủ sở hữu","bs"],["Hàng tồn kho","bs"],
 ["Số tiền phải nộp ngân sách nhà nước","ns"],["Số thuế được miễn, giảm","ns"],["Số thuế đề nghị hoàn","ns"],["Số thuế thu hồi sau hoàn thuế","ns"],["Tỷ lệ số lần cơ quan thuế ban hành quyết định hoàn thuế trên số lần đề nghị hoàn","ns"],
 ["Thuế GTGT của hàng hóa, dịch vụ bán ra","vat"],["Thuế GTGT của hàng hóa, dịch vụ mua vào","vat"],["Thuế GTGT còn được khấu trừ chuyển kỳ sau","vat"],["Số thuế GTGT kê khai điều chỉnh tăng, giảm","vat"],
 ["Thuế TNDN được ưu đãi, miễn giảm","cit"],["Thuế TNDN còn phải nộp","cit"],["Điều chỉnh giảm tổng lợi nhuận trước thuế TNDN","cit"],["Việc trích lập, sử dụng quỹ khoa học và công nghệ","cit"],
 ["Số thuế tiêu thụ đặc biệt được khấu trừ","sct"],["Biến động lượng nguyên liệu trên một đơn vị sản phẩm tiêu thụ","sct"],
 ["Tổng số người lao động","pit"],["Tổng số cá nhân giảm trừ gia cảnh","pit"],["Tổng thu nhập chịu thuế trả cho cá nhân","pit"],["Tổng số thuế thu nhập cá nhân đã khấu trừ","pit"],
 ["Thửa đất, tài sản gắn liền với đất được chuyển nhượng nhiều lần","land"],["Hồ sơ khai tiền thuê đất, thuê mặt nước chưa có quyết định, hợp đồng cho thuê đất","land"],
 ["Tuổi nợ","debt"],["Tần suất phát sinh nợ","debt"],["Tính chất khoản nợ","debt"],["Số lần bị cưỡng chế thi hành quyết định hành chính về quản lý thuế","debt"],["Hành vi phát tán tài sản","debt"],
 ["Tổng số lần bị xử phạt vi phạm hành chính về thuế","pen"],["Tổng số tiền bị xử phạt vi phạm hành chính về thuế","pen"],["Số lần bị xử lý vì không chấp hành quyết định kiểm tra thuế, cưỡng chế","pen"],
 ["Kỳ đã được kiểm tra gần nhất","chk"],["Số lần vi phạm pháp luật thuế phát hiện qua kiểm tra","chk"],["Số thuế truy thu, ấn định, tiền phạt, tiền chậm nộp do cơ quan thuế phát hiện qua kiểm tra","chk"],
 ["Số lượng hóa đơn người nộp thuế sử dụng, thay thế, điều chỉnh","inv"],["Số lần người nộp thuế bị xử phạt vi phạm về hóa đơn","inv"],["Sử dụng hóa đơn không hợp pháp, sử dụng không hợp pháp hóa đơn","inv"],["Mua hóa đơn của người nộp thuế ngừng hoạt động hoặc không hoạt động tại địa chỉ đã đăng ký","inv"],["Xuất hóa đơn cho người nộp thuế ngừng hoạt động hoặc không hoạt động tại địa chỉ đã đăng ký","inv"],
 ["Phát sinh giao dịch chuyển nhượng vốn, liên doanh, liên kết","oth"],["Chi phí lãi vay không được trừ đối với giao dịch liên kết","oth"],["Thu nhập của hộ kinh doanh, cá nhân cư trú kinh doanh qua mạng","oth"],["Thu nhập trả qua ví điện tử, từ Google, Youtube","oth"],["Tình hình chi trả cổ tức cho cổ đông","oth"],["Mặt hàng kinh doanh của người nộp thuế","oth"]
];
var gnames=Object.keys(GR).map(function(k){return GR[k];});
C.forEach(function(c){
  Q("kiemtra","Theo Phụ lục II TT 94/2026, tiêu chí «"+c[0]+"» thuộc nhóm tiêu chí nào?",GR[c[1]],others(gnames,GR[c[1]],3),"Phụ lục II TT 94/2026 (191 tiêu chí rủi ro).");
  var same=C.filter(function(x){return x[1]===c[1]&&x[0]!==c[0];}).map(function(x){return x[0];});
  var diff=C.filter(function(x){return x[1]!==c[1];}).map(function(x){return x[0];});
  if(same.length)Q("kiemtra","Nhóm tiêu chí «"+GR[c[1]]+"» (Phụ lục II TT 94/2026) gồm tiêu chí nào?",c[0],others(diff,c[0],3),"Nhóm «"+GR[c[1]]+"» gồm tiêu chí: "+c[0]+".");
});
/* biện pháp theo mức rủi ro (Điều 15-20) */
var RISK=[
 ["Hồ sơ hoàn thuế GTGT xếp rủi ro cao (không thuộc ngoại lệ)","Kiểm tra trước, hoàn thuế sau","Điều 16 khoản 1 TT 94/2026"],
 ["Hồ sơ hoàn thuế GTGT xếp rủi ro trung bình hoặc thấp, số thuế chưa phát hiện rủi ro","Hoàn thuế trước, kiểm tra sau","Điều 16 khoản 1 TT 94/2026"],
 ["Hồ sơ hoàn thuế khác xếp rủi ro cao","Kiểm tra trước, hoàn thuế sau","Điều 16 khoản 2 TT 94/2026"],
 ["Số tiền đề nghị hoàn có dấu hiệu rủi ro (hồ sơ rủi ro trung bình, thấp)","Tạm dừng hoàn để rà soát, kiểm tra trong thời hạn 02 năm kể từ ngày ban hành quyết định hoàn","Điều 16 khoản 1 TT 94/2026"],
 ["Hồ sơ miễn, giảm thuế xếp rủi ro cao","Kiểm tra tại trụ sở người nộp thuế","Điều 19 khoản 1 TT 94/2026"],
 ["Hồ sơ miễn, giảm thuế xếp rủi ro trung bình, thấp","Giải quyết theo trình tự; theo dõi, kiểm tra sau theo kế hoạch hoặc khi có dấu hiệu rủi ro","Điều 19 khoản 2 TT 94/2026"],
 ["Người nộp thuế rủi ro cao về hóa đơn, chứng từ","Có thể không chấp nhận đăng ký sử dụng hóa đơn điện tử, ngừng sử dụng hoặc biện pháp quản lý hóa đơn khác","Điều 20 khoản 1 TT 94/2026"],
 ["Người nộp thuế rủi ro trung bình, thấp về hóa đơn","Chọn mẫu rà soát, kiểm tra, tăng cường phân tích dữ liệu, hỗ trợ hướng dẫn tuân thủ","Điều 20 khoản 1 TT 94/2026"],
 ["Người nộp thuế rủi ro cao có nợ thuế","Tăng tần suất theo dõi, làm việc trực tiếp, tạm hoãn xuất cảnh, cưỡng chế, công khai thông tin nợ","Điều 18 khoản 1 TT 94/2026"],
 ["Người nộp thuế rủi ro thấp có nợ thuế","Đôn đốc, nhắc nhở, tư vấn hỗ trợ; được xem xét chưa tạm hoãn xuất cảnh và chưa cưỡng chế","Điều 18 khoản 3 TT 94/2026"],
 ["Hồ sơ khai thuế xếp rủi ro cao","Phân tích hồ sơ, lập danh sách trình kế hoạch kiểm tra hồ sơ khai thuế tại trụ sở cơ quan thuế","Điều 15 khoản 1 TT 94/2026"],
 ["Hồ sơ khai thuế xếp rủi ro trung bình, thấp","Chưa kiểm tra hồ sơ; đánh giá, phân loại cho kỳ tiếp theo","Điều 15 khoản 2 TT 94/2026"],
 ["Cơ quan thuế phát hiện người nộp thuế không giải trình hoặc giải trình không đầy đủ theo thông báo bằng văn bản","Đưa vào diện kiểm soát, giám sát trọng điểm","Điều 9 khoản 1 TT 94/2026"],
 ["Người nộp thuế hoặc người đại diện hợp pháp bị khởi tố về hành vi vi phạm về thuế, hóa đơn, chứng từ","Thuộc diện giám sát trọng điểm","Điều 9 khoản 1 TT 94/2026"],
 ["Người nộp thuế xếp mức tuân thủ tốt","Đưa vào danh sách xem xét tuyên dương, khen thưởng; được ưu tiên khi đủ điều kiện Điều 48 NĐ 252/2026","Điều 11 khoản 1 TT 94/2026"]
];
var acts=RISK.map(function(r){return r[1];});
RISK.forEach(function(r){
  Q("kiemtra","Theo TT 94/2026, với tình huống: «"+r[0]+"», cơ quan thuế áp dụng biện pháp nào?",r[1],others(acts,r[1],3),r[2]+".");
  Q("kiemtra","Biện pháp «"+r[1]+"» được TT 94/2026 áp dụng cho tình huống nào?",r[0],others(RISK.map(function(x){return x[0];}),r[0],3),r[2]+".");
});
/* tính toán */
for(var k=0;k<6;k++){var T=int(20,200),r=Math.ceil(T*0.9),n=Math.floor(T*0.1);
  Q("kiemtra","Kế hoạch kiểm tra tại trụ sở người nộp thuế năm có "+T+" trường hợp. Số trường hợp tối đa được chọn ngẫu nhiên theo Điều 17 TT 94/2026 là:",n+" trường hợp",[Math.round(T*0.2)+" trường hợp",Math.round(T*0.15)+" trường hợp",(T-n)+" trường hợp"],"Không quá 10%: "+T+" × 10% = "+(T*0.1)+" (làm tròn xuống "+n+"); còn lại, không dưới 90%, chọn theo rủi ro.");
  var y=int(2026,2030);
  Q("kiemtra","Quyết định hoàn thuế ban hành năm "+y+". Cơ quan thuế được kiểm tra sau hoàn thuế đến hết năm nào (thời hạn 05 năm kể từ ngày ban hành)?","Đến năm "+(y+5),["Đến năm "+(y+2),"Đến năm "+(y+10),"Đến năm "+(y+1)],"Điều 16 khoản 4 TT 94/2026: 05 năm kể từ ngày ban hành quyết định hoàn thuế.");
}
})();
