/* Câu luyện tập QUYẾT TOÁN TNCN, đã đối chiếu nguyên văn Luật TNCN 109/2025 (VBHN 112/VBHN-VPQH). Thêm vào CUỐI bảng QUIZ. */
(function(){
function sh(a){a=a.slice();for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1)),t=a[i];a[i]=a[j];a[j]=t;}return a;}
function uniq(a){var s={},r=[];a.forEach(function(x){if(!s[x]){s[x]=1;r.push(x);}});return r;}
function Q(q,right,wrongs,e){wrongs=uniq(wrongs).filter(function(w){return w!==right;});
  var o=sh([{t:right,ok:1}].concat(wrongs.slice(0,3).map(function(w){return {t:w,ok:0};})));
  QUIZ.push({t:"tncn",q:q,o:o.map(function(x){return x.t;}),a:o.findIndex(function(x){return x.ok;}),e:(e||"")+" [đã đối chiếu nguyên văn VBHN 112/VBHN-VPQH]"});}
function fm(n){return String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g,".");}
function R(a,b){return a+Math.floor(Math.random()*(b-a+1));}
Q("Cá nhân cư trú theo Luật TNCN khi đáp ứng điều kiện nào?","Có mặt tại Việt Nam từ 183 ngày trở lên trong 01 năm dương lịch hoặc 12 tháng liên tục; hoặc có nơi ở thường xuyên tại Việt Nam",["Có quốc tịch Việt Nam","Có mã số thuế","Làm việc cho doanh nghiệp Việt Nam"],"Điều 2 khoản 2.");
Q("Cá nhân cư trú nộp thuế TNCN đối với thu nhập phát sinh:","Trong và ngoài lãnh thổ Việt Nam",["Chỉ trong lãnh thổ Việt Nam","Chỉ ngoài lãnh thổ Việt Nam","Chỉ thu nhập từ tiền lương"],"Điều 2 khoản 1.");
Q("Phụ cấp độc hại, nguy hiểm theo quy định của pháp luật đối với công việc có yếu tố độc hại, nguy hiểm:","Không thuộc thu nhập chịu thuế tiền lương, tiền công",["Chịu thuế toàn bộ","Chịu thuế 10%","Chịu thuế khi vượt 1 triệu đồng/tháng"],"Điều 3 khoản 2 điểm c.");
Q("Trợ cấp thôi việc, trợ cấp mất việc làm theo quy định pháp luật:","Không thuộc thu nhập chịu thuế tiền lương, tiền công",["Chịu thuế như lương","Chịu thuế 5%","Chỉ miễn khi dưới 10 triệu"],"Điều 3 khoản 2 điểm c.");
Q("Lãi gửi tiết kiệm tại tổ chức tín dụng thuộc diện:","Thu nhập được miễn thuế",["Chịu thuế 5%","Chịu thuế 10%","Chịu thuế lũy tiến"],"Điều 4 khoản 6.");
Q("Lương hưu do Quỹ bảo hiểm xã hội chi trả thuộc diện:","Thu nhập được miễn thuế",["Chịu thuế lũy tiến","Chịu thuế khi trên 20 triệu","Chịu thuế 10%"],"Điều 4 khoản 9.");
Q("Thu nhập từ chuyển nhượng nhà ở, đất ở của cá nhân chỉ có một nhà ở, đất ở duy nhất tại Việt Nam:","Được miễn thuế",["Chịu thuế 2% giá chuyển nhượng","Chịu thuế 20% thu nhập","Chịu thuế 0,1%"],"Điều 4 khoản 2.");
Q("Chuyển nhượng, nhận thừa kế, tặng cho bất động sản giữa vợ với chồng, cha mẹ đẻ với con đẻ:","Được miễn thuế",["Chịu thuế 2%","Chịu thuế lũy tiến","Chịu thuế 5%"],"Điều 4 khoản 1.");
Q("Thu nhập tính thuế từ tiền lương, tiền công được xác định bằng tổng thu nhập chịu thuế trừ các khoản:","Bảo hiểm bắt buộc, bảo hiểm hưu trí bổ sung và nhân thọ trong mức Chính phủ quy định, giảm trừ gia cảnh, giảm trừ từ thiện nhân đạo, y tế, giáo dục",["Chỉ giảm trừ gia cảnh","Chỉ bảo hiểm bắt buộc","Chi phí ăn uống của cá nhân"],"Điều 8 khoản 2.");
Q("Mức giảm trừ gia cảnh đối với người nộp thuế theo Luật TNCN 109/2025 là:","15,5 triệu đồng/tháng (186 triệu đồng/năm)",["11 triệu đồng/tháng","12 triệu đồng/tháng","18 triệu đồng/tháng"],"Điều 10 khoản 1 điểm a.");
Q("Mức giảm trừ đối với mỗi người phụ thuộc:","6,2 triệu đồng/tháng",["4,4 triệu đồng/tháng","5 triệu đồng/tháng","7 triệu đồng/tháng"],"Điều 10 khoản 1 điểm b.");
Q("Mỗi người phụ thuộc được tính giảm trừ:","Một lần vào một người nộp thuế",["Cho tất cả người có trách nhiệm nuôi dưỡng","Hai lần","Không giới hạn"],"Điều 10 khoản 3.");
Q("Bậc 1 của biểu thuế lũy tiến TNCN theo năm áp dụng cho thu nhập tính thuế:","Đến 120 triệu đồng, thuế suất 5%",["Đến 60 triệu đồng, thuế suất 5%","Đến 120 triệu đồng, thuế suất 10%","Đến 100 triệu đồng, thuế suất 5%"],"Điều 9 khoản 2.");
Q("Thuế suất 35% áp dụng cho phần thu nhập tính thuế năm:","Trên 1.200 triệu đồng",["Trên 960 triệu đồng","Trên 2.000 triệu đồng","Trên 1.000 triệu đồng"],"Điều 9 khoản 2.");
Q("Chi đóng góp vào quỹ từ thiện được giảm trừ khi tính thuế tiền lương nếu:","Quỹ được cơ quan nhà nước có thẩm quyền cho phép thành lập, hoạt động không vì lợi nhuận và có hóa đơn, chứng từ hợp lệ",["Chỉ cần giấy xác nhận miệng","Quỹ nước ngoài bất kỳ","Chi bằng tiền mặt không cần chứng từ"],"Điều 11 khoản 1, 3.");
Q("Thuế TNCN đối với chuyển nhượng chứng khoán của cá nhân cư trú:","Giá chuyển nhượng × 0,1% mỗi lần chuyển nhượng",["Thu nhập tính thuế × 20%","Giá chuyển nhượng × 2%","5% cổ tức"],"Điều 13 khoản 2.");
Q("Thuế TNCN đối với thu nhập từ đầu tư vốn (cổ tức, lãi cho vay) của cá nhân cư trú:","5%",["10%","15%","20%"],"Điều 12 khoản 1.");
Q("Thuế TNCN đối với chuyển nhượng bất động sản của cá nhân cư trú:","Giá chuyển nhượng × 2%",["Thu nhập × 20%","Giá chuyển nhượng × 0,1%","Giá chuyển nhượng × 5%"],"Điều 14 khoản 1.");
Q("Quy định mới về thu nhập từ kinh doanh, tiền lương, tiền công của cá nhân cư trú theo Luật TNCN 109/2025 áp dụng từ:","Kỳ tính thuế năm 2026",["01/01/2025","01/01/2027","Từng tháng kể từ 01/7/2026"],"Điều 29 khoản 2.");
Q("Cá nhân kinh doanh có doanh thu năm từ mức Chính phủ quy định trở xuống:","Không phải nộp thuế TNCN",["Nộp thuế 1% doanh thu","Nộp thuế 15%","Chỉ miễn khi có hóa đơn"],"Điều 7 khoản 1.");
Q("Cá nhân kinh doanh có doanh thu năm trên mức miễn đến 03 tỷ đồng được chọn cách nộp thuế theo:","Thu nhập tính thuế × 15% hoặc (doanh thu vượt mức miễn) × tỷ lệ theo ngành",["Chỉ theo thu nhập","Chỉ theo doanh thu toàn bộ","Thu nhập × 20%"],"Điều 7 khoản 2, 3.");
Q("Cá nhân kinh doanh doanh thu trên 50 tỷ đồng chịu thuế suất tính trên thu nhập tính thuế:","20%",["15%","17%","25%"],"Điều 7 khoản 2 điểm d.");
Q("Tỷ lệ (doanh thu vượt mức miễn) áp dụng cho phân phối, cung cấp hàng hóa của cá nhân kinh doanh:","0,5%",["1%","1,5%","2%"],"Điều 7 khoản 3 điểm b.");
Q("Tỷ lệ áp dụng cho dịch vụ, xây dựng không bao thầu nguyên vật liệu (trừ cho thuê tài sản, đại lý bảo hiểm, xổ số, đa cấp):","2%",["0,5%","1,5%","5%"],"Điều 7 khoản 3 điểm c.");
Q("Cá nhân cho thuê bất động sản (không kể lưu trú) nộp thuế bằng phần doanh thu vượt mức miễn nhân:","5%",["2%","10%","15%"],"Điều 7 khoản 4.");
/* Số ngẫu nhiên: thuế biểu năm */
function brk(tn){var br=[[120e6,0.05],[360e6,0.10],[720e6,0.20],[1200e6,0.30],[1e18,0.35]],t=0,pre=0;for(var i=0;i<br.length;i++){if(tn>pre)t+=(Math.min(tn,br[i][0])-pre)*br[i][1];pre=br[i][0];}return Math.round(t);}
for(var i=0;i<14;i++){var tn=R(60,1500)*1e6,t=brk(tn);
 Q("Thu nhập tính thuế cả năm của một người lao động là "+fm(tn)+" đồng. Thuế TNCN theo biểu lũy tiến 5 bậc (biểu năm) là:",fm(t)+" đồng",[fm(Math.round(tn*0.2))+" đồng",fm(Math.round(t*1.2))+" đồng",fm(Math.round(t*0.8))+" đồng"],"Tính lũy tiến từng phần: đến 120 triệu 5%; đến 360 triệu 10%; đến 720 triệu 20%; đến 1.200 triệu 30%; trên 35% → "+fm(t)+" đồng.");}
for(var j=0;j<8;j++){var n=R(0,4),g=186e6+n*74.4e6;
 Q("Tổng giảm trừ gia cảnh cả năm của người nộp thuế có "+n+" người phụ thuộc đăng ký đủ 12 tháng là:",fm(g)+" đồng",[fm(186e6+n*52.8e6)+" đồng",fm(132e6+n*74.4e6)+" đồng",fm(g+74.4e6)+" đồng"],"15,5 triệu × 12 = 186 triệu; 6,2 triệu × 12 = 74,4 triệu mỗi người phụ thuộc → "+fm(g)+" đồng.");}
})();
