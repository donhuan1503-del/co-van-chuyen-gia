/* Tình huống lập từ văn bản gốc đã đọc nguyên văn: Luật DN 76/2025, Luật 56/2024 (Kế toán, QLT 2019), NĐ 144/2026. */
SCEN.push(

{id:"s_gtgt_tracham",role:"Kế toán trưởng",topic:"gtgt",level:3,make:function(R){
  var P=R.step(300e6,1500e6,50e6),rt=R.pick([8,10]),vat=Math.round(P*rt/100),n=R.pick([4,5,6]),k=R.int(2,n-1),adj=Math.round(vat/n);
  return {title:"Mua trả góp: chứng từ thanh toán và điều chỉnh GTGT đầu vào",
   facts:[R.co()+" mua thiết bị "+R.m(P)+" đồng (chưa thuế), GTGT "+rt+"% = "+R.m(vat)+" đồng, hợp đồng bằng văn bản, trả góp đều "+n+" kỳ. Công ty đã khấu trừ toàn bộ GTGT đầu vào ngay khi nhận hóa đơn.","Đến kỳ thanh toán thứ "+k+", kế toán trả bằng TIỀN MẶT cho kỳ đó, không có chứng từ thanh toán không dùng tiền mặt."],
   stages:[
    simMC("Ngay khi nhận hóa đơn (chưa đến hạn thanh toán), công ty có được khấu trừ GTGT đầu vào không?","Có, vẫn được khấu trừ vì chưa đến thời điểm thanh toán theo hợp đồng",["Không, phải trả hết tiền mới được khấu trừ","Chỉ được khấu trừ 50%","Không, vì mua trả góp không được khấu trừ"],"NĐ 144/2026 (sửa điểm g khoản 2 Điều 26 NĐ 181/2025): chưa đến hạn thanh toán thì vẫn khấu trừ đầu vào."),
    {type:"num",q:"Số GTGT đầu vào phải kê khai điều chỉnh giảm ở kỳ thanh toán thứ "+k+" (đồng, chia đều theo kỳ)?",ans:adj,unit:"đồng",tol:Math.max(1000,Math.round(adj*0.005)),e:R.m(vat)+" ÷ "+n+" = "+R.m(adj)+" đồng, kê khai vào kỳ tính thuế phát sinh nghĩa vụ thanh toán."},
    simMC("Sau này công ty chuyển khoản bổ sung đúng khoản đó (có chứng từ ngân hàng). Xử lý thế nào?","Được kê khai khấu trừ lại phần thuế đã điều chỉnh, vào kỳ tính thuế có chứng từ thanh toán không dùng tiền mặt",["Mất quyền khấu trừ vĩnh viễn","Khai bổ sung kỳ trước","Chỉ được tính vào chi phí"],"Văn bản quy định được khấu trừ lại vào kỳ có chứng từ thanh toán không dùng tiền mặt.")],
   law:"NĐ 144/2026/NĐ-CP (hiệu lực 20/6/2026); NĐ 181/2025/NĐ-CP; Luật GTGT 48/2024",
   lesson:"Với trả chậm, trả góp: khấu trừ trước, kiểm tra chứng từ ở từng kỳ đến hạn; thiếu chứng từ thì điều chỉnh kỳ đó.",
   warn:"Cách phân bổ phần thuế theo kỳ khi các kỳ không đều: tính theo giá trị phần không có chứng từ."};}},

{id:"s_dn_bocu",role:"Pháp chế doanh nghiệp",topic:"dn",level:2,make:function(R){
  var req=R.pick([10,15,20,30]),days=R.int(31,60);
  return {title:"HĐQT không triệu tập họp Đại hội đồng cổ đông",
   facts:["Công ty cổ phần (không niêm yết) có HĐQT. Nhóm cổ đông sở hữu "+req+"% tổng số cổ phần yêu cầu triệu tập họp ĐHĐCĐ bất thường bằng văn bản đầy đủ nội dung, kèm chứng cứ vi phạm của HĐQT.","HĐQT không triệu tập trong thời hạn luật định; đã quá "+days+" ngày kể từ khi hết thời hạn đó."],
   stages:[
    simMC("Quyền của nhóm cổ đông sau khi HĐQT bỏ qua thời hạn triệu tập?","Trong 30 ngày tiếp theo, nhóm cổ đông đủ điều kiện (khoản 2 Điều 115) được đại diện công ty triệu tập họp ĐHĐCĐ",["Phải chờ họp thường niên sau","Phải kiện ra Tòa trước mới được họp","Không có quyền gì"],"Luật 76/2025 bổ sung khoản 4a Điều 140: đại diện công ty triệu tập trong 30 ngày tiếp theo."),
    simMC("Chi phí tổ chức cuộc họp do ai chịu?","Chi phí hợp lý được công ty hoàn lại cho cổ đông triệu tập",["Cổ đông tự chịu hoàn toàn","Chia đều cho các cổ đông","Không được hoàn lại"],"Luật 76/2025: chi phí hợp lý cho triệu tập và tiến hành họp được công ty hoàn lại."),
    {type:"free",q:"Yêu cầu triệu tập họp bằng văn bản phải có những nội dung gì?",chk:["ho ten","so luong co phan","ty le so huu","can cu","ly do","chung cu","tai lieu"],model:["Họ tên, địa chỉ, số giấy tờ pháp lý của từng cổ đông (hoặc tên, mã số doanh nghiệp nếu là tổ chức)","Số lượng cổ phần, thời điểm đăng ký cổ phần của từng cổ đông, tổng cổ phần của nhóm và tỷ lệ sở hữu","Căn cứ và lý do yêu cầu triệu tập","Tài liệu, chứng cứ về vi phạm của HĐQT hoặc quyết định vượt thẩm quyền","Cổ đông chịu trách nhiệm về tính trung thực của tài liệu"]}],
   law:"Luật 76/2025/QH15 (sửa Điều 115, 140; bổ sung khoản 4a Điều 140)",
   lesson:"Quyền triệu tập của cổ đông chỉ phát sinh khi yêu cầu hợp lệ về hình thức: lập hồ sơ đủ nội dung và chứng cứ ngay từ đầu.",
   warn:"Điều kiện về tỷ lệ cổ phần của nhóm cổ đông nằm ở khoản 2 Điều 115 Luật DN 2020, chưa đọc trong tài liệu này."};}},

{id:"s_dn_trai_phieu",role:"Pháp chế doanh nghiệp",topic:"dn",level:2,make:function(R){
  var E=R.step(20e9,200e9,5e9),N=R.step(30e9,Math.round(E*4.5/1e9)*1e9,5e9),mx=5*E-N;
  return {title:"Điều kiện phát hành trái phiếu riêng lẻ: tỷ lệ nợ trên vốn chủ",
   facts:[R.co()+" dự kiến phát hành trái phiếu riêng lẻ (không thuộc nhóm ngoại lệ). Theo BCTC năm liền kề đã kiểm toán: vốn chủ sở hữu "+R.m(E)+" đồng; nợ phải trả hiện tại "+R.m(N)+" đồng."],
   stages:[
    simMC("Giới hạn nợ phải trả theo Luật DN sửa đổi 2025?","Nợ phải trả (gồm cả trái phiếu dự kiến phát hành) không vượt 5 lần vốn chủ sở hữu theo BCTC năm liền kề được kiểm toán",["Không vượt 3 lần vốn chủ sở hữu","Không vượt 10 lần vốn chủ sở hữu","Không có giới hạn"],"Điểm c1 khoản 3 Điều 128 (do Luật 76/2025 bổ sung)."),
    {type:"num",q:"Giá trị trái phiếu tối đa có thể phát hành mà vẫn bảo đảm điều kiện (đồng)?",ans:mx,unit:"đồng",e:"5 × "+R.m(E)+" - "+R.m(N)+" = "+R.m(mx)+" đồng."},
    simMC("Doanh nghiệp nào nằm ngoài quy định giới hạn 5 lần này?","Tổ chức tín dụng, doanh nghiệp bảo hiểm, công ty chứng khoán, doanh nghiệp nhà nước, phát hành để thực hiện dự án bất động sản (theo luật chuyên ngành)",["Mọi doanh nghiệp xây dựng","Mọi công ty cổ phần","Chỉ doanh nghiệp nước ngoài"],"Văn bản liệt kê các nhóm được thực hiện theo quy định pháp luật liên quan.")],
   law:"Luật 76/2025/QH15 (bổ sung điểm c1 khoản 3 Điều 128); các quy định về chào bán trái phiếu riêng lẻ",
   lesson:"Điều kiện này dùng BCTC năm liền kề ĐÃ KIỂM TOÁN: báo cáo chưa kiểm toán không dùng được.",warn:""};}},

{id:"s_dn_hoanvon",role:"Pháp chế doanh nghiệp",topic:"dn",level:2,make:function(R){
  var yrs=R.pick([1,1.5,2,3,4]),stop=R.pick([0,0.5,1]),eff=yrs-stop,ok=eff>=2;
  return {title:"Công ty cổ phần hoàn trả vốn góp cho cổ đông",
   facts:["Công ty cổ phần thành lập cách đây "+yrs+" năm, trong đó có "+stop+" năm đăng ký tạm ngừng kinh doanh. ĐHĐCĐ muốn hoàn trả một phần vốn góp cho cổ đông theo tỷ lệ sở hữu.","Công ty vẫn bảo đảm thanh toán đủ nợ và nghĩa vụ tài sản sau khi hoàn trả."],
   stages:[
    {type:"num",q:"Thời gian kinh doanh hợp lệ để xét điều kiện (không tính thời gian tạm ngừng), tính bằng THÁNG?",ans:Math.round(eff*12),unit:"tháng",e:yrs+" năm - "+stop+" năm = "+eff+" năm = "+Math.round(eff*12)+" tháng (điều kiện: từ 24 tháng trở lên)."},
    simMC("Có được hoàn trả một phần vốn góp theo quyết định của ĐHĐCĐ không?",ok?"Được, vì đã kinh doanh từ 02 năm trở lên (không tính tạm ngừng) và bảo đảm thanh toán nợ":"Chưa được, vì chưa đủ 02 năm kinh doanh không kể thời gian tạm ngừng",
     [ok?"Không được, phải chờ 5 năm":"Được ngay nếu ĐHĐCĐ đồng ý",ok?"Chỉ được hoàn trả toàn bộ":"Được nếu bán tài sản","Không bao giờ được"].slice(0,3),"Điểm a khoản 5 Điều 112 (sửa bởi Luật 76/2025).")],
   law:"Luật 76/2025/QH15 (sửa điểm a khoản 5 Điều 112)",
   lesson:"Hai điều kiện đồng thời: tối thiểu 02 năm hoạt động kinh doanh thực tế và bảo đảm thanh toán nợ sau hoàn trả.",warn:"Thuế TNCN/TNDN khi hoàn vốn cần xem hướng dẫn riêng."};}},

{id:"s_dn_chusohuu",role:"Pháp chế doanh nghiệp",topic:"dn",level:2,make:function(R){
  var a=R.int(20,40),b=R.int(20,40),c=100-a-b;
  return {title:"Xác định chủ sở hữu hưởng lợi của công ty",
   facts:["Công ty TNHH có 3 thành viên: ông A "+a+"%, ông B "+b+"%, Công ty C (tổ chức) "+c+"%.","Ông D là chủ tịch Công ty C, trực tiếp nắm "+R.int(60,90)+"% vốn Công ty C. Ông D cũng quyết định các vấn đề quan trọng của công ty theo thỏa thuận miệng với A và B."],
   stages:[
    simMC("Chủ sở hữu hưởng lợi là gì theo Luật DN sửa đổi 2025?","Cá nhân có quyền sở hữu trên thực tế vốn điều lệ hoặc có quyền chi phối đối với doanh nghiệp",["Bất kỳ tổ chức nào góp vốn","Chỉ người đại diện theo pháp luật","Chỉ cổ đông sáng lập"],"Khoản 35 Điều 4 (bổ sung bởi Luật 76/2025)."),
    {type:"free",q:"Những ai cần đưa vào danh sách chủ sở hữu hưởng lợi và vì sao? Doanh nghiệp phải làm gì?",chk:["ong d","quyen chi phoi","ca nhan","danh sach","thong tin","5 nam"],model:["Ông D: cá nhân sở hữu gián tiếp qua Công ty C và/hoặc có quyền chi phối thực tế","Ông A, ông B: cá nhân sở hữu trực tiếp theo tỷ lệ, xem xét thêm quyền chi phối thực tế","Lập danh sách: họ tên, ngày sinh, quốc tịch, địa chỉ, tỷ lệ sở hữu hoặc quyền chi phối, giấy tờ pháp lý","Cập nhật khi thay đổi; thông báo thay đổi cho cơ quan đăng ký kinh doanh; lưu giữ ít nhất 05 năm sau khi giải thể"]},
    simMC("Doanh nghiệp thành lập trước 01/7/2025 bổ sung thông tin này khi nào?","Đồng thời khi đăng ký thay đổi hoặc thông báo thay đổi nội dung đăng ký doanh nghiệp gần nhất (hoặc bổ sung sớm nếu muốn)",["Phải bổ sung ngay trong 7 ngày","Không phải bổ sung","Chỉ khi bị yêu cầu"],"Điều 3 Luật 76/2025 (chuyển tiếp).")],
   law:"Luật 76/2025/QH15 (Điều 4, Điều 8, Điều 11, Điều 25, Điều 31, Điều 216, Điều 3 chuyển tiếp)",
   lesson:"Tiêu chí chi tiết xác định chủ sở hữu hưởng lợi do Chính phủ quy định: theo dõi nghị định hướng dẫn.",
   warn:"Nghị định hướng dẫn về tiêu chí và cách kê khai chưa đọc: cần bổ sung khi có."};}},

{id:"s_ketoan_baoluu",role:"Kế toán trưởng",topic:"ketoan",level:2,make:function(R){
  var x=R.step(200e6,2000e6,50e6);
  return {title:"Cấp trên yêu cầu hạch toán không đúng chuẩn mực",
   facts:[R.co()+": giám đốc yêu cầu kế toán ghi nhận doanh thu "+R.m(x)+" đồng ngay trong tháng 12 dù hàng sẽ giao tháng 1 năm sau, để 'đẹp' báo cáo xin vay ngân hàng.","Bạn là kế toán viên đã nêu ý kiến miệng nhưng giám đốc vẫn yêu cầu thực hiện."],
   stages:[
    simMC("Theo Luật Kế toán sửa đổi (khoản 2 Điều 51), việc nên làm?","Bảo lưu ý kiến chuyên môn bằng văn bản và báo cáo bằng văn bản cho kế toán trưởng hoặc người đại diện theo pháp luật",["Làm theo, không cần ghi gì","Tự ý không hạch toán và nghỉ việc","Báo ngân hàng ngay"],"Văn bản bảo lưu và báo cáo là bước đầu tiên theo luật."),
    simMC("Nếu vẫn bị yêu cầu chấp hành, bước tiếp theo?","Báo cáo lên cấp trên trực tiếp của người ra quyết định hoặc cơ quan nhà nước có thẩm quyền; không phải chịu trách nhiệm về hậu quả của việc thi hành quyết định đó",["Chịu hoàn toàn trách nhiệm","Xóa dữ liệu để tránh bị phát hiện","Chỉ cần lưu email riêng"],"Quy định bảo vệ người làm kế toán khi đã thực hiện đủ trình tự bảo lưu, báo cáo."),
    {type:"free",q:"Hồ sơ nào bạn cần lưu để tự bảo vệ, và vì sao việc ghi nhận doanh thu như yêu cầu là sai?",chk:["bao luu","van ban","chuyen giao","rui ro","cut off","quyen so huu","giao hang"],model:["Văn bản bảo lưu ý kiến, báo cáo gửi kế toán trưởng/người đại diện, bản ghi nhận đã gửi","Chứng từ giao nhận, hợp đồng chứng minh hàng chưa giao","Sai vì doanh thu ghi nhận khi chuyển giao rủi ro và lợi ích quyền sở hữu (cut-off), không phải khi lập hóa đơn hay theo ý muốn","Báo cáo sai có thể bị coi là hành vi vi phạm pháp luật kế toán và ảnh hưởng quan hệ tín dụng"]}],
   law:"Luật 56/2024/QH15 (khoản 2 Điều 51 Luật Kế toán); VAS 14",
   lesson:"Quyền độc lập chuyên môn đi kèm trình tự: bảo lưu bằng văn bản → báo cáo → báo cấp trên/cơ quan nhà nước.",warn:""};}},

{id:"s_tmdt_khautru",role:"Thanh tra thuế",topic:"qlt",level:2,make:function(R){
  var kenh=R.pick(["sàn thương mại điện tử trong nước","nền tảng số có chức năng thanh toán","sàn thương mại điện tử nước ngoài"]);
  return {title:"Hộ kinh doanh bán trên nền tảng: ai khấu trừ, ai khai thuế",
   facts:["Hộ kinh doanh "+R.pick(SIM_PERSON)+" bán hàng chủ yếu trên "+kenh+". Hộ chưa kê khai gì về doanh thu trên nền tảng vì cho rằng 'sàn đã nộp thay'."],
   stages:[
    simMC("Theo quy định về quản lý thuế (khoản 4a Điều 42 Luật QLT 38/2019 sửa bởi Luật 56/2024), sàn/nền tảng có trách nhiệm gì?","Khấu trừ, nộp thuế thay và kê khai số thuế đã khấu trừ cho hộ, cá nhân kinh doanh (trong phạm vi Chính phủ quy định)",["Không có trách nhiệm gì","Chỉ cung cấp tên hộ cho cơ quan thuế","Chỉ nộp phí cho nhà nước"],"Quy định hướng tới sàn làm đầu mối khấu trừ để giảm nghĩa vụ trực tiếp của hộ."),
    simMC("Nếu hộ không thuộc đối tượng được khấu trừ, nộp thuế thay thì sao?","Hộ có nghĩa vụ trực tiếp đăng ký thuế, khai thuế, nộp thuế",["Không phải nộp","Đợi cơ quan thuế thông báo","Chỉ nộp khi vượt 1 tỷ"],"Khoản 4a Điều 42: hộ không thuộc diện khấu trừ phải tự đăng ký, khai và nộp."),
    {type:"free",q:"Hộ cần làm gì để không bị trùng hoặc thiếu nghĩa vụ?",chk:["doi chieu","bao cao","sao ke","da khau tru","doanh thu","kenh"],model:["Lấy báo cáo đối soát từng nền tảng: doanh thu, số thuế sàn đã khấu trừ","Đối chiếu với sổ doanh thu và sao kê; phần doanh thu chưa được khấu trừ phải tự kê khai","Gộp doanh thu mọi kênh khi xác định nghĩa vụ và ngưỡng","Lưu chứng từ khấu trừ do sàn cấp"]}],
   law:"Luật 56/2024/QH15 (khoản 4, 4a Điều 42 Luật QLT 38/2019); từ 01/7/2026 theo Luật QLT 108/2025 và nghị định hướng dẫn",
   lesson:"«Sàn nộp thay» không có nghĩa là hộ hết nghĩa vụ: phải đối chiếu phần sàn đã khấu trừ và phần còn phải tự khai.",
   warn:"Luật QLT 38/2019 đã được Luật 108/2025 thay thế từ 01/7/2026; phạm vi khấu trừ và tỷ lệ cụ thể nằm ở nghị định hướng dẫn mới, chưa đọc."};}}

);
