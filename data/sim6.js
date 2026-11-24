/* Tình huống RỦI RO THUẾ và KIỂM TRA THUẾ (TT 94/2026 Điều 9, 15-20; Phụ lục II). */
SCEN.push(

{id:"s_rr_tuchamdiem",role:"Kế toán trưởng",topic:"kiemtra",level:2,make:function(R){
  var r0=R.step(8e9,40e9,5e8),r1=Math.round(r0*R.pick([0.6,0.8,1.35,1.8,2.4])/1e8)*1e8,l0=R.step(-2e9,1e9,1e8),l1=R.step(-4e9,-5e8,1e8),inv=R.pick([true,false]),pct=Math.round((r1-r0)/r0*100);
  return {title:"Tự soát biến động trước khi nộp quyết toán",
   facts:[R.co()+": doanh thu năm trước "+R.m(r0)+" đồng, năm nay "+R.m(r1)+" đồng. Lợi nhuận trước thuế năm trước "+R.m(l0)+", năm nay "+R.m(l1)+" đồng (lỗ). "+(inv?"Trong năm công ty tăng tài sản cố định và mở thêm chi nhánh.":"Quy mô không đổi.")],
   stages:[
    {type:"num",q:"Biến động doanh thu so với năm trước (%, làm tròn, nhập số tuyệt đối)?",ans:Math.abs(pct),unit:"%",tol:1,e:"("+R.m(r1)+" - "+R.m(r0)+") ÷ "+R.m(r0)+" = "+pct+"%."},
    simMC("Tiêu chí nào trong Phụ lục II TT 94/2026 CÓ THỂ được nhắc tới khi năm nay lỗ?","Tổng số lỗ, số lần kê khai lỗ, và (nếu có) lỗ liên tục nhưng vẫn mở rộng quy mô sản xuất, kinh doanh",["Chỉ tuổi của người đại diện","Chỉ trạng thái hoạt động","Không có tiêu chí nào"],"Nhóm lợi nhuận và tình trạng lỗ (STT 62-64)."),
    {type:"free",q:"Bạn chuẩn bị gì để giải trình nếu cơ quan thuế gửi thông báo?",chk:["giai trinh","chung tu","bien dong","hop dong","ke hoach","dong tien"],model:["Bảng so sánh số liệu hai năm, nêu nguyên nhân từng biến động trên 20%","Hợp đồng, chứng từ, kế hoạch kinh doanh chứng minh mở rộng quy mô và nguồn vốn","Đối chiếu doanh thu với tờ khai GTGT, dòng tiền với sao kê ngân hàng","Nộp giải trình đúng hạn và đầy đủ để tránh vào diện giám sát trọng điểm"]}],
   law:"TT 94/2026/TT-BTC (Phụ lục II STT 30-64; Điều 9 khoản 1 điểm d)",
   lesson:"Biến động lớn không đồng nghĩa với vi phạm, nhưng không giải trình hoặc giải trình thiếu là dấu hiệu giám sát trọng điểm.",warn:"Không có ngưỡng chính thức: 20% chỉ là mức tự soát thực hành."};}},

{id:"s_rr_hoanthue",role:"Thanh tra thuế",topic:"kiemtra",level:2,make:function(R){
  var lv=R.pick(["cao","trung bình","thấp"]),y=R.int(2026,2029),sau=lv==="cao"?"Kiểm tra trước, hoàn thuế sau":"Hoàn thuế trước, kiểm tra sau";
  return {title:"Phân loại hồ sơ hoàn thuế GTGT theo mức rủi ro",
   facts:["Công ty nộp hồ sơ đề nghị hoàn thuế GTGT "+R.m(R.step(500e6,4000e6,100e6))+" đồng, quyết định (nếu hoàn) ban hành năm "+y+". Hồ sơ được hệ thống xếp rủi ro "+lv+" và không thuộc ngoại lệ về nhóm tiêu chí không chấm điểm."],
   stages:[
    simMC("Theo Điều 16 TT 94/2026, cách xử lý hồ sơ?",sau,[lv==="cao"?"Hoàn thuế trước, kiểm tra sau":"Kiểm tra trước, hoàn thuế sau","Từ chối hoàn không lý do","Chuyển công an ngay"],"Rủi ro cao: kiểm tra trước, hoàn sau; trung bình và thấp: hoàn trước, kiểm tra sau (số thuế chưa phát hiện rủi ro)."),
    {type:"num",q:"Cơ quan thuế được kiểm tra sau hoàn thuế đến hết năm nào (05 năm kể từ ngày ban hành quyết định hoàn)?",ans:y+5,unit:"năm",e:y+" + 5 = "+(y+5)+"."},
    simMC("Một phần số tiền đề nghị hoàn có dấu hiệu rủi ro (hồ sơ rủi ro trung bình). Xử lý?","Tạm dừng hoàn phần đó để rà soát, kiểm tra; xử lý trong thời hạn 02 năm kể từ ngày ban hành quyết định hoàn",["Hoàn toàn bộ rồi bỏ qua","Từ chối cả hồ sơ","Hoàn gấp đôi"],"Điều 16 khoản 1 điểm b.2 TT 94/2026.")],
   law:"TT 94/2026/TT-BTC Điều 16",
   lesson:"Chuẩn bị hồ sơ hoàn như hồ sơ sẽ bị kiểm tra: hợp đồng, giao nhận, thanh toán đúng tên, tờ khai hải quan, đối chiếu hóa đơn đầu ra của nhà cung cấp.",
   warn:"Số thuế 'có rủi ro' và 'chưa phát hiện rủi ro' do Cục Thuế hướng dẫn."};}},

{id:"s_rr_kehoach",role:"Thanh tra thuế",topic:"kiemtra",level:2,make:function(R){
  var T=R.int(20,300),n=Math.floor(T*0.1);
  return {title:"Lập kế hoạch kiểm tra tại trụ sở người nộp thuế",
   facts:["Chi cục Thuế xây dựng kế hoạch kiểm tra năm với tổng "+T+" trường hợp tại trụ sở người nộp thuế."],
   stages:[
    {type:"num",q:"Số trường hợp tối đa được chọn ngẫu nhiên (không quá 10%, làm tròn xuống)?",ans:n,unit:"trường hợp",e:T+" × 10% = "+(T*0.1)+" nên tối đa "+n+"."},
    simMC("Phần còn lại chọn thế nào?","Chọn dựa trên kết quả phân tích, phân loại tuân thủ và rủi ro, theo thứ tự rủi ro từ cao xuống thấp (không dưới 90%)",["Chọn theo thứ tự bảng chữ cái","Chọn theo vốn lớn nhất","Chọn theo ý kiến của người nộp thuế"],"Điều 17 khoản 1, 2 TT 94/2026."),
    simMC("Có thông tin tin cậy làm giảm rủi ro của một doanh nghiệp trong danh sách xuống mức thấp. Cơ quan thuế làm gì?","Không đưa vào kế hoạch, chọn trường hợp khác theo quy định, và chịu trách nhiệm về quyết định",["Vẫn bắt buộc kiểm tra","Xóa hồ sơ doanh nghiệp","Phạt doanh nghiệp"],"Điều 17 khoản 2 điểm c TT 94/2026.")],
   law:"TT 94/2026/TT-BTC Điều 17",lesson:"Đa số cuộc kiểm tra bắt nguồn từ dữ liệu rủi ro; nhìn lại các tiêu chí của chính bạn.",warn:""};}},

{id:"s_rr_trongdiem",role:"Kế toán trưởng",topic:"kiemtra",level:1,make:function(R){
  var ev=R.pick([
   {t:"Công ty nhận thông báo yêu cầu giải trình chênh lệch doanh thu nhưng không trả lời trong thời hạn",y:true},
   {t:"Công ty trả lời đầy đủ, đúng hạn kèm chứng từ",y:false},
   {t:"Người đại diện hợp pháp bị khởi tố về hành vi vi phạm hóa đơn",y:true},
   {t:"Ngân hàng báo giao dịch đáng ngờ liên quan trốn thuế theo pháp luật phòng chống rửa tiền",y:true},
   {t:"Công ty bị xếp mức tuân thủ trung bình, không có dấu hiệu khác",y:false}]);
  return {title:"Có rơi vào diện giám sát trọng điểm không?",
   facts:["Tình huống: "+ev.t+"."],
   stages:[simMC("Theo Điều 9 TT 94/2026, đây có thuộc diện kiểm soát, giám sát trọng điểm không?",ev.y?"Có, thuộc một trong 4 dấu hiệu tại khoản 1 Điều 9":"Chưa, không thuộc 4 dấu hiệu tại khoản 1 Điều 9",[ev.y?"Không, vì chỉ áp dụng cho doanh nghiệp nước ngoài":"Có, mọi doanh nghiệp đều bị","Chỉ khi nợ thuế trên 1 tỷ","Chỉ khi doanh thu trên 100 tỷ"],"4 dấu hiệu: giao dịch ngân hàng đáng ngờ, bị khởi tố, rủi ro cao thuộc chuyên đề trọng điểm, mức không tuân thủ hoặc không giải trình đầy đủ."),
    simMC("Việc bạn kiểm soát được để TRÁNH dấu hiệu thứ tư?","Giải trình, bổ sung thông tin đầy đủ và đúng thời hạn trong thông báo bằng văn bản của cơ quan thuế",["Không mở thư của cơ quan thuế","Đổi địa chỉ trụ sở","Tạm ngừng kinh doanh"],"Điều 9 khoản 1 điểm d TT 94/2026.")],
   law:"TT 94/2026/TT-BTC Điều 9",lesson:"Giải trình đúng hạn, đầy đủ là hành động đơn giản nhất để không rơi vào diện giám sát trọng điểm.",warn:""};}},

{id:"s_rr_nothue",role:"Thanh tra thuế",topic:"kiemtra",level:1,make:function(R){
  var lv=R.pick(["cao","trung bình","thấp"]);
  var d={"cao":"Tăng tần suất theo dõi, làm việc trực tiếp, tạm hoãn xuất cảnh, cưỡng chế, công khai thông tin nợ","trung bình":"Theo dõi hằng tháng, đôn đốc nhắc nhở, tư vấn hỗ trợ, tạm hoãn xuất cảnh theo ngưỡng, công khai nợ theo luật, cưỡng chế theo trình tự","thấp":"Đôn đốc, nhắc nhở, tư vấn hỗ trợ; được xem xét chưa tạm hoãn xuất cảnh và chưa cưỡng chế"};
  return {title:"Biện pháp quản lý nợ thuế theo mức rủi ro",
   facts:["Doanh nghiệp nợ thuế "+R.m(R.step(100e6,3000e6,50e6))+" đồng, được phân loại rủi ro "+lv+"."],
   stages:[simMC("Biện pháp cơ quan thuế áp dụng theo Điều 18 TT 94/2026?",d[lv],Object.keys(d).filter(function(k){return k!==lv;}).map(function(k){return d[k];}).concat(["Xóa nợ"]),"Điều 18 TT 94/2026 phân hóa biện pháp theo mức rủi ro.")],
   law:"TT 94/2026/TT-BTC Điều 18",lesson:"Nợ thuế kéo dài làm tăng mức rủi ro và kéo theo biện pháp mạnh hơn.",warn:""};}},

{id:"s_rr_hoadon",role:"Kế toán trưởng",topic:"hd",level:2,make:function(R){
  var x=R.pick(["mua","xuất"]);
  return {title:"Rủi ro hóa đơn: giao dịch với người nộp thuế ngừng hoạt động",
   facts:["Công ty "+x+" hóa đơn với một người nộp thuế sau đó bị xác định ngừng hoạt động, không hoạt động tại địa chỉ đã đăng ký, chưa hoàn thành thủ tục chấm dứt hiệu lực mã số thuế."],
   stages:[simMC("Tiêu chí này thuộc nhóm nào trong Phụ lục II TT 94/2026?","Nhóm tình hình sử dụng hóa đơn",["Nhóm thông tin người đại diện","Nhóm thuế tiêu thụ đặc biệt","Nhóm đất đai"],"Phụ lục II có tiêu chí mua hoặc xuất hóa đơn với người nộp thuế ngừng hoạt động."),
    simMC("Nếu công ty bị xếp rủi ro cao về hóa đơn, biện pháp có thể là?","Không chấp nhận đăng ký sử dụng hóa đơn điện tử, ngừng sử dụng hoặc biện pháp quản lý hóa đơn khác",["Miễn thuế GTGT","Tăng hạn mức hóa đơn","Không có biện pháp"],"Điều 20 khoản 1 điểm a TT 94/2026."),
    {type:"free",q:"Hồ sơ nào chứng minh giao dịch có thật?",chk:["hop dong","giao nhan","van chuyen","thanh toan","hoa don","kiem tra"],model:["Hợp đồng, biên bản giao nhận, phiếu nhập kho","Chứng từ vận chuyển","Thanh toán không dùng tiền mặt đúng tên","Kiểm tra tình trạng hoạt động của nhà cung cấp trước khi giao dịch"]}],
   law:"TT 94/2026/TT-BTC Phụ lục II, Điều 20",lesson:"Tra cứu tình trạng hoạt động của đối tác trước mỗi giao dịch lớn và lưu kết quả.",warn:""};}}

);
