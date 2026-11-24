/* Kho TÌNH HUỐNG có tham số ngẫu nhiên: mỗi lần mở là số liệu, ngành, hoàn cảnh khác nhau.
   Mỗi mẫu: {id, role, topic, level, make(R)} -> {title, facts[], stages[], law, lesson, warn}
   Stage: {type:"mc",q,o[],a,e} | {type:"num",q,ans,unit,e} | {type:"free",q,chk[],model[]}
   Số liệu pháp lý ổn định (BLLĐ 2019, Luật GTGT 48/2024, TNDN 67/2025, Luật QLT 108/2025, lương cơ sở 2.530.000, vùng I 5.310.000)
   đều nên đối chiếu lại văn bản hiện hành trước khi dùng trong công việc thật. */
var SIM_ROLES = ["Kế toán trưởng","Thanh tra thuế","Kiểm toán viên","Pháp chế doanh nghiệp","Nhân sự - tiền lương"];
var SIM_IND = ["thương mại điện máy","xây dựng dân dụng","sản xuất bao bì","vận tải hàng hóa","nhà hàng - khách sạn","phân phối thực phẩm","phần mềm","may mặc xuất khẩu","vật liệu xây dựng","dược phẩm bán lẻ"];
var SIM_NAME = ["An Phát","Hoàng Long","Minh Quang","Thiên Ân","Đại Việt","Phú Gia","Bảo Tín","Hải Đăng","Kim Ngân","Lạc Hồng"];
var SIM_PERSON = ["anh Hùng","chị Lan","anh Tuấn","chị Mai","anh Đức","chị Hạnh","anh Nam","chị Thu"];
function SR(){var r={};
  r.int=function(a,b){return a+Math.floor(Math.random()*(b-a+1));};
  r.step=function(a,b,s){return a+s*Math.floor(Math.random()*((b-a)/s+1));};
  r.pick=function(x){return x[Math.floor(Math.random()*x.length)];};
  r.shuf=function(x){return shuffle(x);};
  r.m=function(n){return money(n);};
  r.co=function(){return "Công ty "+r.pick(SIM_NAME)+" ("+r.pick(SIM_IND)+")";};
  return r;}
function simMC(q,right,wrongs,e){ // đáp án đúng ở vị trí ngẫu nhiên
  var o=shuffle([{t:right,ok:1}].concat(wrongs.map(function(w){return {t:w,ok:0};})));
  return {type:"mc",q:q,o:o.map(function(x){return x.t;}),a:o.findIndex(function(x){return x.ok;}),e:e};
}

var SCEN = [

/* ===== 1. TNDN - chi phí không được trừ (Kế toán trưởng) ===== */
{id:"s_tndn_cp",role:"Kế toán trưởng",topic:"tndn",level:2,make:function(R){
  var nd=[
   {t:"Tiền phạt vi phạm hành chính về hóa đơn",a:R.step(8e6,40e6,1e6),w:"phạt vi phạm hành chính không được trừ"},
   {t:"Mua hàng có hóa đơn hợp lệ nhưng thanh toán bằng TIỀN MẶT",a:R.step(7e6,30e6,1e6),w:"từ 5 triệu trở lên phải có chứng từ thanh toán không dùng tiền mặt"},
   {t:"Chi tiền du lịch gia đình giám đốc",a:R.step(15e6,60e6,1e6),w:"không liên quan hoạt động sản xuất kinh doanh"},
   {t:"Mua hàng của người bán không có hóa đơn, không có bảng kê hợp lệ",a:R.step(10e6,50e6,1e6),w:"thiếu hóa đơn, chứng từ hợp lệ"},
   {t:"Chi thưởng cuối năm không ghi trong quy chế, hợp đồng lao động hay thỏa ước",a:R.step(20e6,80e6,1e6),w:"khoản thưởng không có điều kiện, mức thưởng ghi trong hợp đồng/quy chế"}];
  var dd=[
   {t:"Tiền thuê văn phòng, hóa đơn hợp lệ, đã chuyển khoản",a:R.step(12e6,60e6,1e6)},
   {t:"Lương nhân viên theo hợp đồng lao động, đã khai TNCN",a:R.step(30e6,90e6,1e6)},
   {t:"Điện nước văn phòng, hóa đơn hợp lệ, chuyển khoản",a:R.step(6e6,20e6,1e6)}];
  var bad=R.shuf(nd).slice(0,3),good=R.pick(dd),sum=bad.reduce(function(s,x){return s+x.a;},0),
      items=R.shuf(bad.concat([good]));
  return {title:"Soát chi phí trước khi quyết toán TNDN",
   facts:[R.co()+" chuẩn bị quyết toán TNDN năm. Bạn là kế toán trưởng, rà soát 4 khoản chi sau:"].concat(items.map(function(x,i){return "("+(i+1)+") "+x.t+": "+R.m(x.a)+" đồng";})).concat(["Thuế suất TNDN áp dụng: 20%."]),
   stages:[
    simMC("Khoản nào ĐƯỢC tính vào chi phí được trừ?",good.t+": "+R.m(good.a)+" đồng",bad.map(function(x){return x.t+": "+R.m(x.a)+" đồng";}),"Chỉ khoản có đủ hóa đơn, chứng từ thanh toán hợp lệ và liên quan sản xuất kinh doanh mới được trừ. Các khoản còn lại bị loại vì: "+bad.map(function(x){return x.w;}).join("; ")+"."),
    {type:"num",q:"Tổng các khoản chi bị loại khi tính thu nhập tính thuế, và thuế TNDN phải nộp thêm 20% là bao nhiêu? (nhập SỐ THUẾ TĂNG THÊM, đồng)",ans:Math.round(sum*0.2),unit:"đồng",e:"Tổng chi bị loại = "+R.m(sum)+"; thuế tăng thêm = "+R.m(sum)+" × 20% = "+R.m(sum*0.2)+" đồng."},
    simMC("Quyết toán đã nộp, sau đó mới phát hiện đã tính nhầm các khoản này vào chi phí được trừ. Cách xử lý đúng?",
     "Khai bổ sung hồ sơ khai thuế, nộp thêm thuế và tiền chậm nộp (0,03%/ngày)",
     ["Để nguyên chờ cơ quan thuế phát hiện","Hủy chứng từ gốc rồi lập lại cho hợp lệ","Điều chỉnh chi phí năm sau để bù trừ"],
     "Khai bổ sung (tối đa 5 năm theo Luật QLT 2025), nộp thuế và tiền chậm nộp; khai trước khi có quyết định kiểm tra thì được giảm nặng xử phạt.")],
   law:"Luật TNDN 67/2025; NĐ 320/2025; TT 20/2026; Luật QLT 108/2025 (khai bổ sung, chậm nộp 0,03%/ngày)",
   lesson:"Ba cửa kiểm tra mỗi khoản chi: (1) hóa đơn, chứng từ hợp lệ; (2) thanh toán không dùng tiền mặt nếu từ 5 triệu; (3) liên quan hoạt động kinh doanh. Thiếu một cửa là bị loại.",
   warn:"TT 20/2026 (đã đọc Điều 3): chi từ 05 triệu đồng cần chứng từ thanh toán không dùng tiền mặt; nếu chưa thanh toán đến lúc ghi nhận chi phí thì vẫn được trừ khi có hợp đồng, biên bản bàn giao và khi thanh toán có chứng từ không dùng tiền mặt. Danh mục đầy đủ khoản chi không được trừ nằm ở Luật TNDN 67/2025."};}},

/* ===== 2. Hoàn thuế GTGT (Thanh tra thuế) ===== */
{id:"s_gtgt_hoan",role:"Thanh tra thuế",topic:"gtgt",level:3,make:function(R){
  var sp=R.pick(["xuất khẩu","dự án đầu tư mới"]),amt=R.step(800e6,4800e6,100e6);
  var flags=R.shuf([
   "Hóa đơn đầu vào chiếm "+R.int(35,60)+"% tổng giá trị hoàn do nhà cung cấp vừa ngừng hoạt động hoặc thay đổi địa chỉ",
   "Tiền thanh toán cho nhà cung cấp chuyển qua tài khoản của bên thứ ba không có trong hợp đồng",
   "Doanh thu "+sp+" tăng đột biến "+R.int(3,8)+" lần so với cùng kỳ trong khi số lao động và tài sản không đổi",
   "Hợp đồng đầu vào ký sau ngày xuất hóa đơn nhiều tháng"]).slice(0,3);
  return {title:"Hồ sơ đề nghị hoàn thuế GTGT - "+sp,
   facts:[R.co()+" nộp hồ sơ đề nghị hoàn thuế GTGT "+R.m(amt)+" đồng ("+sp+"). Bạn là công chức thuế phụ trách hồ sơ. Qua đối chiếu dữ liệu bạn thấy:"].concat(flags.map(function(x,i){return "("+(i+1)+") "+x;})),
   stages:[
    simMC("Hướng xử lý đầu tiên hợp lý nhất đối với hồ sơ này?","Chưa hoàn ngay; yêu cầu giải trình, bổ sung chứng từ và xem xét kiểm tra trước hoàn thuế",["Hoàn ngay vì doanh nghiệp đã nộp đủ hồ sơ","Từ chối hoàn không cần lý do","Chuyển thẳng sang xử phạt trốn thuế"],"Hồ sơ có dấu hiệu rủi ro thuộc diện kiểm tra trước hoàn: yêu cầu giải trình, bổ sung chứng từ; chưa kết luận gian lận khi chưa có bằng chứng."),
    {type:"free",q:"Liệt kê các chứng từ và đối chiếu bạn yêu cầu để xác định hóa đơn đầu vào có thật.",chk:["hop dong","thanh toan","van chuyen","to khai","nhap kho","hai quan"],model:["Hợp đồng mua bán, biên bản giao nhận/ phiếu nhập kho, chứng từ vận chuyển","Chứng từ thanh toán qua ngân hàng đúng tên người bán (không qua bên thứ ba)","Đối chiếu tờ khai GTGT, tờ khai hải quan (nếu xuất khẩu), sổ chi tiết công nợ","Xác minh nhà cung cấp: địa chỉ, năng lực, kê khai thuế, hóa đơn đầu ra của họ"]},
    simMC("Qua xác minh, một nhà cung cấp là doanh nghiệp bỏ trốn nhưng giao dịch có đầy đủ hợp đồng, phiếu giao nhận, thanh toán đúng tên. Kết luận phù hợp?","Cho phép khấu trừ/hoàn khoản này vì giao dịch có thật và chứng từ hợp lệ",["Loại toàn bộ vì nhà cung cấp bỏ trốn","Loại và xử phạt người mua","Bắt buộc kiểm toán độc lập"],"Điểm mấu chốt là giao dịch thật và chứng từ thanh toán hợp lệ; việc nhà cung cấp bỏ trốn một mình không tự động loại khấu trừ.")],
   law:"Luật GTGT 48/2024; NĐ 181/2025; NĐ 144/2026; Luật QLT 108/2025; TT 94/2026",
   lesson:"Hoàn thuế là cửa rủi ro cao nhất: người kiểm tra luôn đi ngược dòng - hóa đơn → hợp đồng → giao hàng → thanh toán → nhà cung cấp.",
   warn:"Điều kiện, thời hạn hoàn chi tiết cần tra NĐ 181/2025 và hướng dẫn mới nhất."};}},

/* ===== 3. Chỉ tiêu BCTC rủi ro (Thanh tra thuế) ===== */
{id:"s_ktra_ratio",role:"Thanh tra thuế",topic:"kiemtra",level:2,make:function(R){
  var dt=R.step(20e9,90e9,1e9),gm=R.int(4,9),yrs=R.int(2,4),gmInd=R.int(18,28);
  var gp=Math.round(dt*gm/100);
  return {title:"Lỗ liên tục, biên lợi nhuận gộp thấp bất thường",
   facts:[R.co()+": doanh thu năm nay "+R.m(dt)+" đồng, lợi nhuận gộp "+R.m(gp)+" đồng, biên gộp "+gm+"%.",
    "Biên gộp trung bình ngành "+gmInd+"%. Doanh nghiệp kê khai lỗ "+yrs+" năm liên tiếp nhưng vẫn mở rộng kho và tăng vay.",
    "Bạn là công chức thuế rà soát phân loại rủi ro."],
   stages:[
    {type:"num",q:"Biên lợi nhuận gộp của doanh nghiệp thấp hơn ngành bao nhiêu điểm phần trăm? (nhập SỐ, ví dụ 12)",ans:gmInd-gm,unit:"điểm %",e:"Chênh lệch = "+gmInd+"% - "+gm+"% = "+(gmInd-gm)+" điểm %."},
    simMC("Giả thuyết kiểm tra hợp lý NHẤT cho tình huống này là gì?","Có thể ghi nhận doanh thu thấp hơn thực tế hoặc đẩy giá vốn/chi phí lên (chuyển giá, hóa đơn khống đầu vào)",["Doanh nghiệp chắc chắn trốn thuế","Hiện tượng bình thường của ngành","Do thuế suất thay đổi"],"Lỗ kéo dài mà vẫn mở rộng quy mô là tổ hợp tiêu chí rủi ro; nhưng đây mới là giả thuyết cần kiểm chứng, chưa phải kết luận."),
    {type:"free",q:"Bạn yêu cầu doanh nghiệp giải trình những nội dung nào và đối chiếu với nguồn dữ liệu nào?",chk:["hang ton kho","gia von","hoa don","ngan hang","hop dong","giao dich"],model:["Cơ cấu giá vốn, nhập xuất tồn, chính sách giá, chiết khấu","Hợp đồng bán chịu, công nợ, điều kiện thanh toán","Nguồn vốn mở rộng: vay ai, lãi suất, mục đích, dòng tiền","Giao dịch với bên liên kết, hóa đơn đầu vào rủi ro, đối chiếu dữ liệu ngân hàng và hóa đơn điện tử"]}],
   law:"TT 94/2026 (tiêu chí rủi ro: lỗ liên tục, biến động chỉ tiêu BCTC); Luật QLT 108/2025",
   lesson:"Người kiểm tra không chốt ngay: họ nêu giả thuyết, tìm chứng cứ trái chiều, rồi mới kết luận. Người được kiểm tra nên tự soát cùng chỉ tiêu trước.",
   warn:"Biên gộp ngành chỉ để minh họa."};}},

/* ===== 4. Cut-off doanh thu (Kiểm toán viên) ===== */
{id:"s_kt_cutoff",role:"Kiểm toán viên",topic:"kiemtoan",level:3,make:function(R){
  var n=R.int(2,4),x=R.step(300e6,1500e6,50e6),cost=Math.round(x*R.int(70,85)/100),d=R.int(28,31);
  return {title:"Kiểm tra cut-off doanh thu cuối năm",
   facts:[R.co()+" lập "+n+" hóa đơn bán hàng ngày "+d+"/12, tổng "+R.m(x)+" đồng (chưa VAT); giá vốn tương ứng "+R.m(cost)+" đồng.",
    "Khi kiểm toán bạn phát hiện biên bản giao nhận ký ngày "+R.int(3,10)+"/1 năm sau; hàng ở kho doanh nghiệp đến cuối năm."],
   stages:[
    simMC("Kết luận kiểm toán về ghi nhận doanh thu?","Doanh thu và giá vốn bị ghi nhận sớm sang năm nay (sai kỳ); lợi nhuận bị khai cao hơn",["Đúng vì đã lập hóa đơn","Đúng nếu khách đã đặt hàng","Chỉ ảnh hưởng thuế GTGT"],"Doanh thu ghi nhận khi chuyển giao rủi ro, lợi ích gắn liền với quyền sở hữu, không phải khi lập hóa đơn."),
    {type:"num",q:"Lợi nhuận trước thuế năm nay bị khai cao hơn thực tế bao nhiêu? (đồng)",ans:x-cost,unit:"đồng",e:"Doanh thu "+R.m(x)+" trừ giá vốn "+R.m(cost)+" = "+R.m(x-cost)+" đồng."},
    {type:"free",q:"Đề xuất bút toán điều chỉnh (chưa tính thuế GTGT).",chk:["511","131","632","156","155"],model:["Nợ 511 / Có 131: "+R.m(x)+" (giảm doanh thu, giảm phải thu)","Nợ 156 (hoặc 155) / Có 632: "+R.m(cost)+" (hoàn lại hàng tồn kho)","Xem xét thuế GTGT và TNDN tương ứng, đối chiếu thời điểm lập hóa đơn theo quy định hóa đơn"]}],
   law:"VAS 14 (doanh thu), Luật Kế toán, VSA 500; Luật GTGT/ NĐ hóa đơn về thời điểm lập hóa đơn",
   lesson:"Cut-off là thủ tục bắt buộc: lấy các hóa đơn 5-7 ngày trước và sau khóa sổ, đối chiếu biên bản giao nhận và phiếu xuất kho.",
   warn:"Thời điểm lập hóa đơn trong luật thuế có thể khác ghi nhận doanh thu kế toán, cần xem xét riêng."};}},

/* ===== 5. Xác nhận công nợ (Kiểm toán viên) ===== */
{id:"s_kt_congno",role:"Kiểm toán viên",topic:"kiemtoan",level:2,make:function(R){
  var book=R.step(900e6,3000e6,10e6),diff=R.step(40e6,220e6,10e6),conf=book-diff;
  return {title:"Thư xác nhận công nợ lệch số",
   facts:[R.co()+": số dư phải thu khách hàng "+R.pick(SIM_NAME)+" theo sổ là "+R.m(book)+" đồng.","Thư xác nhận khách hàng gửi lại ghi "+R.m(conf)+" đồng. Có thêm 2 khách hàng lớn không phản hồi sau 2 lần gửi."],
   stages:[
    {type:"num",q:"Chênh lệch giữa sổ sách và xác nhận là bao nhiêu? (đồng)",ans:diff,unit:"đồng",e:"Sổ "+R.m(book)+" trừ xác nhận "+R.m(conf)+" = "+R.m(diff)+" đồng."},
    {type:"free",q:"Liệt kê các nguyên nhân có thể và cách kiểm tra để giải thích khoản chênh lệch.",chk:["hang tra lai","thanh toan","chung tu","doi chieu","khoa so","chiet khau"],model:["Hàng trả lại, chiết khấu chưa ghi sổ phía công ty","Khoản thanh toán đang chuyển, ghi nhận khác kỳ (sau ngày khóa sổ)","Sai giá, sai số lượng; ghi nhầm khách hàng","Cách kiểm tra: lập bảng đối chiếu từng hóa đơn, chứng từ thanh toán, biên bản giao nhận và các khoản thu sau ngày khóa sổ"]},
    simMC("Với khách hàng không phản hồi xác nhận, thủ tục phù hợp?","Thực hiện thủ tục thay thế: kiểm tra việc thu tiền sau ngày khóa sổ, hóa đơn, hợp đồng, phiếu giao hàng",["Mặc nhiên coi là đúng","Mặc nhiên loại khỏi sổ","Dừng cuộc kiểm toán"],"Không có phản hồi thì phải làm thủ tục thay thế để có bằng chứng đầy đủ, thích hợp.")],
   law:"VSA 505 (thư xác nhận), VSA 500 (bằng chứng kiểm toán)",
   lesson:"Phản hồi xác nhận mạnh nhưng không tuyệt đối: luôn truy về chứng từ gốc và thu tiền sau ngày khóa sổ.",warn:""};}},

/* ===== 6. Sửa sổ kế toán (Kế toán trưởng) ===== */
{id:"s_sosach_sua",role:"Kế toán trưởng",topic:"sosach",level:2,make:function(R){
  var a=R.step(8e6,95e6,1e6),late=R.pick([false,true]);
  return {title:"Sửa sai sót ghi nhầm tài khoản",
   facts:["Kế toán ghi nhầm chi phí quảng cáo "+R.m(a)+" đồng vào TK 642 thay vì TK 641.",late?"Sai sót được phát hiện SAU khi đã khóa sổ và nộp báo cáo tài chính năm trước.":"Sai sót được phát hiện TRƯỚC khi khóa sổ kỳ này."],
   stages:[
    simMC("Cách sửa sổ phù hợp nhất?",late?"Lập bút toán điều chỉnh ở kỳ hiện tại (hoặc điều chỉnh hồi tố nếu sai sót trọng yếu), thuyết minh":"Ghi bút toán sửa trên sổ (đảo bút toán hoặc ghi số âm) rồi ghi lại đúng, người sửa ký xác nhận",
     [late?"Xé trang sổ cũ và in lại":"Dùng bút xóa, viết đè",late?"Không làm gì vì đã nộp báo cáo":"Xóa dòng sai trên phần mềm không để dấu vết","Sửa trực tiếp số liệu trên báo cáo"],
     "Luật Kế toán cấm tẩy xóa, sửa chữa làm mất dấu vết. Sửa bằng bút toán điều chỉnh, có chữ ký người sửa và lưu chứng từ giải thích."),
    {type:"free",q:"Nêu bút toán điều chỉnh để chuyển khoản chi phí về đúng tài khoản.",chk:["641","642","dieu chinh","chung tu"],model:["Bút toán điều chỉnh: Nợ 641 / Có 642: "+R.m(a)+" (chuyển từ chi phí quản lý sang chi phí bán hàng)","Hoặc ghi âm (bút toán đỏ) Nợ 642 rồi ghi lại Nợ 641 - kết quả như nhau","Có chữ ký người sửa, ghi rõ lý do, lưu cùng chứng từ gốc"]}
   ],
   law:"Luật Kế toán 88/2015 (sửa chữa sổ, lưu trữ chứng từ ít nhất 10 năm đối với tài liệu ghi sổ); TT 99/2025 (hướng dẫn sửa sổ)",
   lesson:"Nguyên tắc: không xóa, không viết đè; mọi sửa đổi phải để lại dấu vết, có người ký và chứng từ giải thích.",
   warn:"Thời hạn lưu trữ và hình thức sửa sổ nên đối chiếu Luật Kế toán hiện hành và hướng dẫn mới."};}},

/* ===== 7. Góp vốn (Pháp chế) ===== */
{id:"s_dn_gopvon",role:"Pháp chế doanh nghiệp",topic:"dn",level:2,make:function(R){
  var vdl=R.step(2000e6,10000e6,500e6),pa=Math.round(vdl*R.int(40,60)/100/50e6)*50e6,pb=vdl-pa,got=Math.round(pb*R.int(20,70)/100/10e6)*10e6;
  return {title:"Thành viên góp vốn không đủ trong thời hạn",
   facts:["Công ty TNHH hai thành viên, vốn điều lệ "+R.m(vdl)+" đồng. Thành viên A cam kết "+R.m(pa)+" (đã góp đủ); thành viên B cam kết "+R.m(pb)+".","Quá thời hạn 90 ngày kể từ ngày cấp Giấy chứng nhận đăng ký doanh nghiệp, thành viên B mới góp "+R.m(got)+" đồng."],
   stages:[
    simMC("Hậu quả pháp lý với phần vốn B chưa góp?","Thành viên B chỉ có quyền tương ứng phần đã góp; phần chưa góp thuộc diện phải đăng ký điều chỉnh vốn hoặc chuyển nhượng",["Không hậu quả vì công ty vẫn hoạt động","Công ty bị giải thể ngay","B vẫn nguyên quyền theo cam kết"],"Theo Luật Doanh nghiệp 2020 (Điều 47): hết 90 ngày mà chưa góp đủ thì phải đăng ký điều chỉnh vốn điều lệ và tỷ lệ phần vốn góp, thành viên chưa góp coi như không còn là thành viên đối với phần chưa góp."),
    {type:"num",q:"Vốn điều lệ thực góp tính đến hết 90 ngày là bao nhiêu? (đồng)",ans:pa+got,unit:"đồng",e:"A góp đủ "+R.m(pa)+" cộng B góp "+R.m(got)+" = "+R.m(pa+got)+" đồng."},
    {type:"free",q:"Công ty cần làm những thủ tục nào để xử lý đúng quy định?",chk:["dieu chinh","von dieu le","tuong ung","dang ky","thong bao","90 ngay"],model:["Đăng ký thay đổi vốn điều lệ, tỷ lệ phần vốn góp với cơ quan đăng ký kinh doanh","Điều chỉnh sổ đăng ký thành viên và điều lệ công ty","Xác định quyền biểu quyết, chia lợi nhuận theo phần thực góp","Xem xét thuế liên quan (lệ phí môn bài, thuế TNCN nếu chuyển nhượng)"]}],
   law:"Luật Doanh nghiệp 2020 (Điều 47, không bị sửa bởi Luật 76/2025); Luật 76/2025 (Điều 16: kê khống vốn điều lệ do không góp đủ mà không đăng ký điều chỉnh là hành vi bị cấm)",
   lesson:"Vốn điều lệ là vốn thực góp + cam kết trong hạn; quá hạn phải điều chỉnh, không được để vốn trên giấy.",
   warn:"Mốc 90 ngày chưa đối chiếu lại Điều 47 bản gốc Luật DN 2020; Luật 76/2025 đã đọc không sửa điều này."};}},

/* ===== 8. Thử việc (Nhân sự) ===== */
{id:"s_ld_thuviec",role:"Nhân sự - tiền lương",topic:"laodong",level:1,make:function(R){
  var lvl=R.pick([{n:"đại học (cao đẳng trở lên)",d:60},{n:"trung cấp",d:30},{n:"lao động phổ thông",d:6}]),S=R.step(12e6,40e6,1e6),used=lvl.d+R.pick([0,15,30]);
  return {title:"Thử việc đúng luật",
   facts:["Vị trí tuyển dụng cần trình độ "+lvl.n+". Lương chính thức "+R.m(S)+" đồng/tháng.","Phòng nhân sự dự kiến ký hợp đồng thử việc "+used+" ngày và trả lương thử việc 80% lương chính thức."],
   stages:[
    {type:"num",q:"Thời gian thử việc tối đa theo luật cho vị trí này là bao nhiêu ngày?",ans:lvl.d,unit:"ngày",e:"Bộ luật Lao động 2019: 180 ngày (quản lý doanh nghiệp), 60 ngày (cao đẳng trở lên), 30 ngày (trung cấp), 6 ngày làm việc (khác)."},
    {type:"num",q:"Lương thử việc tối thiểu phải trả là bao nhiêu? (đồng)",ans:Math.round(S*0.85),unit:"đồng",e:"Không thấp hơn 85% lương chính thức: "+R.m(S)+" × 85% = "+R.m(S*0.85)+" đồng."},
    simMC("Kế hoạch ban đầu (thời gian và mức lương thử việc) có vi phạm không?",used>lvl.d?"Vi phạm cả thời gian thử việc và mức lương (80% < 85%)":"Không vi phạm thời gian nhưng vi phạm mức lương (80% < 85%)",
     (used>lvl.d?["Chỉ vi phạm thời gian","Chỉ vi phạm mức lương","Hoàn toàn đúng luật"]:["Không vi phạm gì","Vi phạm thời gian nhưng đúng mức lương","Hoàn toàn đúng luật"]),"Thử việc chỉ một lần cho một công việc; mức lương ≥ 85%; thời gian không vượt mức tối đa.")],
   law:"Bộ luật Lao động 2019 (Điều 24-27)",
   lesson:"Thử việc chỉ được áp dụng một lần với một vị trí; hết thời gian thử việc phải thông báo kết quả, đạt thì giao kết hợp đồng lao động.",warn:""};}},

/* ===== 9. Làm thêm giờ (Nhân sự - tiền lương) ===== */
{id:"s_luong_ot",role:"Nhân sự - tiền lương",topic:"luong",level:2,make:function(R){
  var S=R.step(9e6,30e6,500e3),h1=R.int(6,24),h2=R.int(4,16),h3=R.pick([0,0,8]),rate=S/(26*8),pay=rate*(h1*1.5+h2*2+h3*3);
  return {title:"Tính tiền làm thêm giờ trong tháng",
   facts:["Lương cơ bản tháng "+R.m(S)+" đồng (26 ngày × 8 giờ). Làm thêm: ngày thường "+h1+" giờ, ngày nghỉ hằng tuần "+h2+" giờ"+(h3?", ngày lễ "+h3+" giờ":"")+".","Không có làm thêm ban đêm."],
   stages:[
    {type:"num",q:"Tiền lương làm thêm trong tháng (đồng, làm tròn)?",ans:Math.round(pay),unit:"đồng",e:"Lương giờ "+R.m(rate)+" × ("+h1+"×150% + "+h2+"×200%"+(h3?" + "+h3+"×300%":"")+") = "+R.m(pay)+" đồng."},
    simMC("Tổng giờ làm thêm "+(h1+h2+h3)+" giờ trong tháng. Giới hạn tối đa theo luật?","Không quá 40 giờ/tháng và 200 giờ/năm (một số ngành tối đa 300 giờ)",["Không giới hạn nếu người lao động đồng ý","60 giờ/tháng","80 giờ/tháng"],"Bộ luật Lao động 2019 và NĐ 145/2020: không quá 50% số giờ bình thường/ngày, không quá 40 giờ/tháng, 200 giờ/năm (300 giờ với ngành nghề đặc thù)."),
    {type:"free",q:"Khi tính thuế TNCN cho phần tiền làm thêm giờ, phần nào được miễn thuế?",chk:["phan chenh lech","150","lam viec ban ngay","mien thue","luong"],model:["Phần tiền lương làm thêm giờ cao hơn tiền lương trả cho ngày làm việc bình thường được miễn thuế TNCN","Ví dụ ngày thường: trả 150%, phần chênh 50% được miễn; phần 100% vẫn là thu nhập chịu thuế","Phải có chứng từ chấm công làm thêm giờ"]}],
   law:"Bộ luật Lao động 2019 (Điều 98, 107); NĐ 145/2020; Luật TNCN (thu nhập được miễn thuế)",
   lesson:"Lương giờ làm thêm: 150% ngày thường, 200% ngày nghỉ hằng tuần, 300% ngày lễ (chưa kể tiền lương ngày lễ).",
   warn:"Cách tính lương giờ (chia 26 ngày hay số ngày thực tế) theo quy chế công ty."};}},

/* ===== 10. BHXH bắt buộc (Nhân sự - tiền lương) ===== */
{id:"s_bhxh_tinh",role:"Nhân sự - tiền lương",topic:"bhxh",level:2,make:function(R){
  var S=R.pick([R.step(9e6,40e6,500e3),R.step(52e6,80e6,1e6)]),capBH=20*2530000,capTN=20*5310000;
  var emp=Math.min(S,capBH)*0.095+Math.min(S,capTN)*0.01,dn=Math.min(S,capBH)*0.205+Math.min(S,capTN)*0.01;
  return {title:"Tính BHXH, BHYT, BHTN cho một nhân viên",
   facts:["Nhân viên có mức lương đóng bảo hiểm "+R.m(S)+" đồng/tháng.","Lương cơ sở 2.530.000 đồng; lương tối thiểu vùng I 5.310.000 đồng. Tỷ lệ: NLĐ 8% BHXH + 1,5% BHYT + 1% BHTN; doanh nghiệp 17,5% BHXH + 3% BHYT + 1% BHTN."],
   stages:[
    {type:"num",q:"Tổng khoản NLĐ phải đóng mỗi tháng (đồng)?",ans:Math.round(emp),unit:"đồng",e:"BHXH+BHYT 9,5% trên min(lương, 50.600.000) = "+R.m(Math.min(S,capBH)*0.095)+"; BHTN 1% trên min(lương, 106.200.000) = "+R.m(Math.min(S,capTN)*0.01)+"; tổng "+R.m(emp)+" đồng."},
    {type:"num",q:"Tổng khoản doanh nghiệp phải đóng (BHXH 17,5% + BHYT 3% + BHTN 1%, chưa tính KPCĐ)?",ans:Math.round(dn),unit:"đồng",e:"min(lương, 50.600.000) × 20,5% = "+R.m(Math.min(S,capBH)*0.205)+" cộng BHTN 1% = "+R.m(Math.min(S,capTN)*0.01)+"; tổng "+R.m(dn)+" đồng."},
    simMC("Trần mức lương đóng BHXH, BHYT năm 2026 là:","20 lần lương cơ sở = 50.600.000 đồng",["20 lần lương tối thiểu vùng","Không có trần","10 lần lương cơ sở"],"Trần BHXH/BHYT = 20 × lương cơ sở; BHTN = 20 × lương tối thiểu vùng.")],
   law:"Luật BHXH 2024; Luật BHYT; Luật Việc làm; NĐ 161/2026 (lương cơ sở 2.530.000)",
   lesson:"Phần trích KPCĐ 2% do doanh nghiệp, tính riêng; trần BHTN khác trần BHXH-BHYT.",
   warn:"Tỷ lệ và mức đóng nên đối chiếu thông báo mới nhất của BHXH."};}},

/* ===== 11. TNCN (Kế toán trưởng) ===== */
{id:"s_tncn_tinh",role:"Kế toán trưởng",topic:"tncn",level:2,make:function(R){
  var S=R.step(18e6,95e6,1e6),nd=R.int(0,3),
      p={newT:true,nd:nd,gt:15.5e6,pt:6.2e6,luongCS:2530000,ltv:5310000,kpcd:false},r=g2n(S,p);
  return {title:"Tính thuế TNCN từ lương theo biểu mới",
   facts:["Nhân viên lương gross "+R.m(S)+" đồng/tháng, "+nd+" người phụ thuộc đã đăng ký.","Giảm trừ bản thân 15,5 triệu; mỗi người phụ thuộc 6,2 triệu. Bảo hiểm bắt buộc trừ trước thuế: NLĐ 10,5% (có trần)."],
   stages:[
    {type:"num",q:"Thu nhập tính thuế (đồng)?",ans:Math.round(r.ti),unit:"đồng",e:"Gross trừ bảo hiểm "+R.m(r.ins)+" trừ giảm trừ gia cảnh "+R.m(15.5e6+6.2e6*nd)+" = "+R.m(r.ti)+" đồng."},
    {type:"num",q:"Thuế TNCN phải nộp trong tháng (đồng)?",ans:Math.round(r.tax),unit:"đồng",e:"Áp biểu 5 bậc (5%, 10%, 20%, 30%, 35%) cho "+R.m(r.ti)+" đồng ra "+R.m(r.tax)+" đồng."},
    {type:"num",q:"Lương thực nhận (net) là bao nhiêu? (đồng)",ans:Math.round(r.net),unit:"đồng",e:"Gross trừ bảo hiểm trừ thuế = "+R.m(r.net)+" đồng."}],
   law:"Luật Thuế TNCN 109/2025; NĐ 253/2026; NQ về mức giảm trừ gia cảnh",
   lesson:"Thứ tự: gross → trừ bảo hiểm bắt buộc → trừ giảm trừ gia cảnh → thu nhập tính thuế → biểu lũy tiến.",
   warn:"Biểu thuế và mức giảm trừ lấy theo công cụ «Máy tính» của app; luôn đối chiếu văn bản hiện hành."};}},

/* ===== 12. Kiểm kê quỹ (Kế toán trưởng) ===== */
{id:"s_quy_kiemke",role:"Kế toán trưởng",topic:"sosach",level:1,make:function(R){
  var a=R.step(1e6,24e6,500e3),short=R.pick([true,false]);
  return {title:"Kiểm kê quỹ tiền mặt lệch",
   facts:["Cuối ngày kiểm kê quỹ tiền mặt: "+(short?"thiếu":"thừa")+" "+R.m(a)+" đồng so với sổ quỹ.","Chưa xác định nguyên nhân."],
   stages:[
    simMC("Hạch toán tạm thời phù hợp?",short?"Nợ 1381 / Có 111 (tài sản thiếu chờ xử lý)":"Nợ 111 / Có 3381 (tài sản thừa chờ giải quyết)",[short?"Nợ 811 / Có 111":"Nợ 111 / Có 711",short?"Nợ 642 / Có 111":"Nợ 111 / Có 511","Không hạch toán, bỏ qua"],"Chênh lệch chưa rõ nguyên nhân phải treo ở 1381 (thiếu) hoặc 3381 (thừa), xử lý sau khi có kết luận."),
    {type:"free",q:"Nêu các bước xử lý tiếp theo.",chk:["bien ban","nguyen nhan","thu quy","quyet dinh","boi thuong","xu ly"],model:["Lập biên bản kiểm kê có chữ ký thủ quỹ, kế toán, người chứng kiến","Truy tìm nguyên nhân: nhầm lẫn, ghi chép, mất mát","Có quyết định xử lý: thủ quỹ bồi thường, hoặc tính vào chi phí/thu nhập khác theo quyết định có thẩm quyền","Hạch toán xử lý sau quyết định và rà soát kiểm soát nội bộ quỹ"]}],
   law:"Luật Kế toán 88/2015; TT 99/2025 (TK 1381, 3381)",
   lesson:"Không bao giờ cân đối quỹ bằng cách «chỉnh» chứng từ: chênh lệch phải lộ ra và xử lý có quyết định.",warn:""};}},

/* ===== 13. HKD: doanh thu và tiền vào ngân hàng (Thanh tra thuế) ===== */
{id:"s_hkd_dongtien",role:"Thanh tra thuế",topic:"kiemtra",level:2,make:function(R){
  var D=R.step(600e6,1800e6,50e6),B=D+R.step(300e6,1500e6,50e6),N=R.step(100e6,Math.min(B-D,900e6)-50e6,50e6),und=B-N-D;
  return {title:"Hộ kinh doanh: khai doanh thu thấp hơn dòng tiền vào",
   facts:["Hộ kinh doanh "+R.pick(SIM_PERSON)+" khai doanh thu năm "+R.m(D)+" đồng. Tài khoản ngân hàng kinh doanh nhận "+R.m(B)+" đồng.","Hộ chứng minh được "+R.m(N)+" đồng là vay mượn người thân và chuyển khoản nội bộ."],
   stages:[
    {type:"num",q:"Phần chênh lệch CHƯA được giải trình là bao nhiêu? (đồng)",ans:und,unit:"đồng",e:R.m(B)+" - "+R.m(N)+" - "+R.m(D)+" = "+R.m(und)+" đồng."},
    simMC("Với phần chưa giải trình được, hướng xử lý của hộ?","Giải trình thêm bằng chứng, nếu không có thì khai bổ sung doanh thu và nộp thuế, tiền chậm nộp",["Phủ nhận và không phản hồi","Nộp thuế bằng ý kiến cá nhân nhưng không khai bổ sung","Đóng tài khoản"],"Bằng chứng quyết định; khai bổ sung sớm giảm nặng xử phạt."),
    {type:"free",q:"Liệt kê hồ sơ hộ nên chuẩn bị để giải trình.",chk:["sao ke","hop dong","bien nhan","so doanh thu","hoa don","tai khoan"],model:["Sao kê toàn bộ tài khoản dùng kinh doanh","Hợp đồng vay, biên nhận, tin nhắn chuyển khoản của người thân","Sổ doanh thu, hóa đơn bán hàng, báo cáo máy tính tiền","Bảng đối chiếu từng khoản tiền vào"]}],
   law:"Luật QLT 108/2025; NĐ 68/2026; NĐ 141/2026; TT 94/2026",
   lesson:"Giải trình bằng bảng đối chiếu có chứng từ; từ nay tách bạch tài khoản kinh doanh.",warn:"Đối chiếu mức xử phạt hiện hành."};}},

/* ===== 14. Hóa đơn sai sót (Kế toán trưởng) ===== */
{id:"s_hd_saisot",role:"Kế toán trưởng",topic:"hd",level:2,make:function(R){
  var c=R.pick([
   {t:"Sai MST người mua nhưng đúng tên và đúng số tiền",r:"Hủy hóa đơn sai và lập hóa đơn thay thế (hoặc thông báo theo quy định về sai sót)",e:"Sai MST là sai thông tin quan trọng, thường xử lý bằng hủy/thay thế theo quy định hóa đơn."},
   {t:"Sai số tiền thuế GTGT (thuế suất áp sai)",r:"Lập hóa đơn điều chỉnh hoặc thay thế theo thỏa thuận hai bên, kê khai điều chỉnh",e:"Sai về tiền/thuế suất xử lý bằng hóa đơn điều chỉnh/thay thế và khai bổ sung tờ khai."},
   {t:"Sai địa chỉ người mua, đúng MST",r:"Thông báo hóa đơn có sai sót (không cần lập lại) nếu không ảnh hưởng thông tin quan trọng",e:"Sai chữ không ảnh hưởng MST và số tiền thường chỉ cần thông báo sai sót theo mẫu."}]);
  return {title:"Xử lý hóa đơn điện tử có sai sót",
   facts:["Công ty phát hiện hóa đơn đã phát hành có sai sót: "+c.t+".","Người mua đã kê khai khấu trừ kỳ trước."],
   stages:[simMC("Cách xử lý đúng nhất theo quy định hóa đơn?",c.r,["Xóa hóa đơn trên hệ thống","Giữ nguyên, người mua tự sửa","Lập hóa đơn mới không liên quan hóa đơn cũ"],c.e)],
   law:"NĐ 123/2020 (Điều 19), NĐ 70/2025, NĐ 254/2026 và TT 91/2026 (hóa đơn thay thế)",
   lesson:"Hóa đơn điện tử đã phát hành không xóa; luôn có dấu vết hủy, điều chỉnh hay thay thế gắn với hóa đơn gốc.",
   warn:"Quy định xử lý hóa đơn sai sót đã thay đổi theo NĐ 70/2025 và NĐ 254/2026: đối chiếu bản hiện hành."};}}

];
