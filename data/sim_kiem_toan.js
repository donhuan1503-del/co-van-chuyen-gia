/* TÌNH HUỐNG KIỂM TOÁN (vai Kiểm toán viên). Phần luật theo Luật Kiểm toán độc lập (VBHN 17/VBHN-VPQH) đã đối chiếu nguyên văn;
   phần chuẩn mực theo nội dung ISA mà VSA áp dụng. Nạp sau sim6.js. */
SCEN.push(

{id:"s_ka_y_kien",role:"Kiểm toán viên",topic:"kiemtoan",level:3,make:function(R){
  var OM=R.step(300e6,900e6,50e6),PM=Math.round(OM*0.75),mode=R.int(0,2),
      a=R.step(40e6,150e6,10e6),b=R.step(30e6,120e6,10e6),c=R.step(20e6,100e6,10e6);
  if(mode===1){a=OM+R.step(100e6,300e6,50e6);b=R.step(20e6,60e6,10e6);c=R.step(10e6,50e6,10e6);}
  if(mode===2){a=OM*3;b=OM*2;c=OM;}
  var tot=a+b+c;
  return {title:"Từ sai sót chưa điều chỉnh đến ý kiến kiểm toán",
   facts:["Báo cáo tài chính công ty "+R.pick(SIM_NAME)+": mức trọng yếu tổng thể "+R.m(OM)+" đồng, mức trọng yếu thực hiện "+R.m(PM)+" đồng.","Sai sót chưa điều chỉnh sau kiểm toán: (1) dự phòng nợ phải thu thiếu "+R.m(a)+" đồng; (2) chi phí trả trước ghi trùng "+R.m(b)+" đồng; (3) doanh thu ghi sớm "+R.m(c)+" đồng. Ban giám đốc từ chối điều chỉnh."],
   stages:[
    {type:"num",q:"Tổng sai sót chưa điều chỉnh là bao nhiêu (đồng)?",ans:tot,unit:"đồng",e:"Cộng ba khoản: "+R.m(a)+" + "+R.m(b)+" + "+R.m(c)+" = "+R.m(tot)+" đồng."},
    simMC("Tổng sai sót so với mức trọng yếu tổng thể:",tot>OM?"Vượt mức trọng yếu tổng thể: sai sót trọng yếu":"Không vượt mức trọng yếu tổng thể: chưa trọng yếu về định lượng (vẫn cần đánh giá định tính)",tot>OM?["Chưa vượt, không cần xử lý","Chỉ so với mức thực hiện","Không liên quan ý kiến"]:["Vượt mức, phải trái ngược","Vượt mức, phải từ chối","Vượt mức, chỉ đoạn nhấn mạnh"],"Sai sót chưa điều chỉnh được tổng hợp và so với mức trọng yếu; ngoài ra phải xét ảnh hưởng định tính (ví dụ che giấu vi phạm hoặc lỗ)."),
    simMC("Ý kiến kiểm toán phù hợp nhất:",tot<=OM?"Chấp nhận toàn phần (nhưng thông báo sai sót cho Ban giám đốc và Ban quản trị)":(mode===2?"Ý kiến trái ngược (sai sót trọng yếu và lan tỏa nhiều khoản mục)":"Ý kiến ngoại trừ (sai sót trọng yếu nhưng không lan tỏa)"),tot<=OM?["Ngoại trừ","Trái ngược","Từ chối"]:(mode===2?["Ngoại trừ","Chấp nhận toàn phần","Từ chối"]:["Trái ngược","Chấp nhận toàn phần","Từ chối"]),"Sai sót trọng yếu nhưng không lan tỏa: ngoại trừ; trọng yếu và lan tỏa: trái ngược. Báo cáo kiểm toán phải nêu rõ cơ sở ý kiến (Luật Kiểm toán độc lập Điều 46, 48).")],
   law:"Luật Kiểm toán độc lập Điều 46, 48; VSA 450, 705 (nội dung theo ISA)",
   lesson:"Ba bước: (1) tổng hợp sai sót chưa điều chỉnh; (2) so với mức trọng yếu cả định lượng và định tính; (3) xét có lan tỏa hay không để chọn ngoại trừ hoặc trái ngược.",
   warn:"Mức trọng yếu và tỷ lệ 75% trong tình huống là chính sách giả định của doanh nghiệp kiểm toán."};}},

{id:"s_ka_doc_lap",role:"Kiểm toán viên",topic:"kiemtoan",level:2,make:function(R){
  var pool=[
   {t:"Bố đẻ của kiểm toán viên hành nghề là kế toán trưởng của đơn vị được kiểm toán.",ok:false,e:"Không được: Điều 19 khoản 7 cấm khi bố, mẹ, vợ, chồng, con, anh, chị, em ruột giữ chức vụ quản lý, điều hành, ban kiểm soát hoặc kế toán trưởng của đơn vị."},
   {t:"Kiểm toán viên hành nghề đã thôi giữ chức thành viên ban kiểm soát của đơn vị cách đây 8 tháng.",ok:false,e:"Không được: Điều 19 khoản 4: trong thời gian 02 năm kể từ thời điểm thôi giữ chức."},
   {t:"Kiểm toán viên hành nghề thôi giữ chức kế toán trưởng của đơn vị cách đây 30 tháng, và không giữ chức vụ nào trong các năm tài chính được kiểm toán.",ok:true,e:"Được xét theo Điều 19 khoản 3, 4: đã quá 02 năm và không giữ chức vụ trong năm tài chính được kiểm toán (vẫn phải xét thêm các quy định về đạo đức nghề nghiệp)."},
   {t:"Năm trước liền kề kiểm toán viên hành nghề đã lập báo cáo tài chính giúp đơn vị được kiểm toán.",ok:false,e:"Không được: Điều 19 khoản 5."},
   {t:"Kiểm toán viên hành nghề mua 100 cổ phiếu của đơn vị được kiểm toán.",ok:false,e:"Không được: Điều 19 khoản 1 và Điều 13 khoản 1 điểm a cấm nắm giữ cổ phiếu, phần vốn góp của đơn vị được kiểm toán, không phân biệt số lượng."},
   {t:"Kiểm toán viên hành nghề và đơn vị được kiểm toán chỉ có quan hệ mua bán hàng hóa thông thường giá thị trường, không có góp vốn, không có người thân giữ chức vụ.",ok:true,e:"Không thuộc các trường hợp bị cấm tại Điều 19; tuy nhiên vẫn đánh giá mức độ đe dọa độc lập theo chuẩn mực đạo đức nghề nghiệp."}];
  var s=R.shuf(pool).slice(0,3);
  return {title:"Kiểm toán viên có được nhận cuộc kiểm toán này không?",
   facts:["Công ty kiểm toán đang cân nhắc nhận cuộc kiểm toán báo cáo tài chính của "+R.co()+". Xét từng trường hợp về tính độc lập của kiểm toán viên hành nghề."].concat(s.map(function(x,i){return "("+(i+1)+") "+x.t;})),
   stages:s.map(function(x,i){return simMC("Trường hợp ("+(i+1)+"): kiểm toán viên hành nghề có được thực hiện cuộc kiểm toán không?",x.ok?"Được (không thuộc trường hợp bị cấm tại Điều 19)":"Không được",x.ok?["Không được, vì có quan hệ","Chỉ được nếu giảm phí","Chỉ được nếu thông báo Bộ Tài chính"]:["Được, vì chỉ là quan hệ gia đình","Được nếu công khai","Được nếu thay người ký báo cáo"],x.e);}),
   law:"Luật Kiểm toán độc lập Điều 13, 19, 30",
   lesson:"Xét độc lập theo thứ tự: góp vốn, chức vụ hiện tại và đã từng giữ (02 năm), dịch vụ ghi sổ lập báo cáo, quan hệ gia đình, dịch vụ khác theo chuẩn mực đạo đức.",
   warn:"Quy định này áp dụng cho kiểm toán viên hành nghề; doanh nghiệp kiểm toán còn có danh mục riêng tại Điều 30."};}},

{id:"s_ka_mau",role:"Kiểm toán viên",topic:"kiemtoan",level:3,make:function(R){
  var P=R.step(800e6,3000e6,100e6),S=R.step(80e6,300e6,10e6),E=R.step(2e6,15e6,1e6),proj=Math.round(E/S*P),TM=R.step(30e6,120e6,10e6);
  return {title:"Ngoại suy sai sót từ mẫu phải thu",
   facts:["Tổng thể các khoản phải thu của khách hàng: "+R.m(P)+" đồng. Kiểm toán viên chọn mẫu có giá trị "+R.m(S)+" đồng và phát hiện sai sót ghi thừa "+R.m(E)+" đồng.","Mức sai sót có thể chấp nhận được (trọng yếu thực hiện) cho khoản mục: "+R.m(TM)+" đồng."],
   stages:[
    {type:"num",q:"Sai sót dự tính (ngoại suy) cho toàn bộ tổng thể là bao nhiêu (đồng, làm tròn)?",ans:proj,unit:"đồng",e:R.m(E)+" / "+R.m(S)+" × "+R.m(P)+" = "+R.m(proj)+" đồng."},
    simMC("So sánh sai sót dự tính với mức có thể chấp nhận được, kết luận:",proj>TM?"Sai sót dự tính vượt mức có thể chấp nhận: phải mở rộng mẫu hoặc đề nghị điều chỉnh":"Sai sót dự tính chưa vượt mức có thể chấp nhận: chưa có cơ sở kết luận khoản mục sai sót trọng yếu, nhưng vẫn đề nghị điều chỉnh sai sót đã tìm thấy",proj>TM?["Bỏ qua vì mẫu nhỏ","Chỉ điều chỉnh đúng "+R.m(E)+" đồng và kết thúc","Ngoại trừ ngay"]:["Từ chối đưa ra ý kiến","Trái ngược","Ngừng cuộc kiểm toán"],"Sai sót trong mẫu phải ngoại suy sang tổng thể và so với mức có thể chấp nhận; kết hợp với đánh giá bản chất sai sót (hệ thống hay ngẫu nhiên)."),
    simMC("Nếu sai sót trong mẫu có tính hệ thống (cùng một nguyên nhân, ví dụ cùng một lỗi cut-off), kiểm toán viên nên:","Mở rộng thủ tục sang cả nhóm giao dịch có cùng đặc điểm",["Coi như sai sót ngẫu nhiên","Bỏ qua","Chỉ sửa khoản đã tìm thấy"],"Sai sót hệ thống cần xử lý đối với toàn bộ nhóm giao dịch chịu ảnh hưởng.")],
   law:"VSA 530, 450 (nội dung theo ISA 530, 450)",
   lesson:"Sai sót dự tính = (sai sót trong mẫu / giá trị mẫu) × giá trị tổng thể. Luôn hỏi tiếp: nguyên nhân, tính hệ thống, khoản mục khác có cùng rủi ro không.",
   warn:"Phương pháp chọn mẫu theo giá trị (MUS) và phương pháp thống kê khác có công thức riêng; bài này dùng tỷ lệ đơn giản."};}},

{id:"s_ka_sau_ngay",role:"Kiểm toán viên",topic:"kiemtoan",level:2,make:function(R){
  var pool=[
   {t:"Khách hàng lớn của đơn vị bị tuyên bố phá sản sau ngày kết thúc kỳ kế toán; kiểm toán viên xác định khó khăn tài chính của khách hàng đã tồn tại từ trước ngày kết thúc và khoản phải thu lớn.",adj:true,e:"Sự kiện cung cấp bằng chứng bổ sung về điều kiện đã tồn tại tại ngày kết thúc: sự kiện điều chỉnh, phải lập dự phòng."},
   {t:"Kho hàng của đơn vị bị cháy sau ngày kết thúc kỳ kế toán, thiệt hại trọng yếu.",adj:false,e:"Điều kiện (hỏa hoạn) phát sinh sau ngày kết thúc: sự kiện không điều chỉnh, thuyết minh bản chất và ước tính ảnh hưởng."},
   {t:"Tòa án tuyên đơn vị phải bồi thường một vụ kiện đã khởi kiện từ trước ngày kết thúc kỳ kế toán, đơn vị chưa lập dự phòng.",adj:true,e:"Phán quyết sau ngày kết thúc xác nhận nghĩa vụ hiện tại đã tồn tại: sự kiện điều chỉnh."},
   {t:"Sau ngày kết thúc kỳ kế toán, đơn vị phát hành thêm cổ phiếu để tăng vốn.",adj:false,e:"Giao dịch mới phát sinh sau ngày kết thúc: sự kiện không điều chỉnh, thuyết minh nếu trọng yếu."},
   {t:"Phát hiện sau ngày kết thúc kỳ kế toán nhưng trước ngày ký báo cáo kiểm toán rằng một lô hàng cuối năm có giá bán thấp hơn giá gốc do hàng lỗi đã có từ kỳ trước.",adj:true,e:"Bằng chứng về giá trị thuần có thể thực hiện của hàng tồn kho tại ngày kết thúc: điều chỉnh (dự phòng giảm giá)."}];
  var s=R.shuf(pool).slice(0,3);
  return {title:"Sự kiện sau ngày kết thúc kỳ kế toán",
   facts:["Báo cáo tài chính kết thúc ngày 31/12; kiểm toán viên đang hoàn thành cuộc kiểm toán, báo cáo kiểm toán chưa ký. Xét từng sự kiện:"].concat(s.map(function(x,i){return "("+(i+1)+") "+x.t;})),
   stages:s.map(function(x,i){return simMC("Sự kiện ("+(i+1)+") thuộc loại nào và xử lý ra sao?",x.adj?"Sự kiện cần điều chỉnh: ghi nhận, điều chỉnh số liệu báo cáo tài chính":"Sự kiện không điều chỉnh: không sửa số liệu, thuyết minh nếu trọng yếu",x.adj?["Không điều chỉnh, chỉ thuyết minh","Bỏ qua","Chỉ ghi chú nội bộ"]:["Điều chỉnh số liệu năm báo cáo","Bỏ qua","Từ chối đưa ra ý kiến"],x.e);}),
   law:"Chuẩn mực kế toán về sự kiện phát sinh sau ngày kết thúc kỳ kế toán; VSA 560 (nội dung theo ISA 560)",
   lesson:"Hỏi một câu: điều kiện gây ra sự kiện đã tồn tại tại ngày kết thúc kỳ chưa? Có thì điều chỉnh; không thì thuyết minh nếu trọng yếu.",
   warn:"Với sự kiện sau ngày ký báo cáo kiểm toán, thủ tục khác (VSA 560): bài này chỉ xét trước ngày ký."};}},

{id:"s_ka_ngay_ky",role:"Kiểm toán viên",topic:"kiemtoan",level:2,make:function(R){
  var y=R.int(2025,2027),end=new Date(y,11,31),last=new Date(end.getTime()-30*86400000),sg=new Date(y+1,R.int(1,2),R.int(5,25)),early=new Date(sg.getTime()-R.int(1,5)*86400000);
  var fd=function(d){return d.getDate()+"/"+(d.getMonth()+1)+"/"+d.getFullYear();};
  return {title:"Ngày giao kết hợp đồng và ngày ký báo cáo kiểm toán",
   facts:["Công ty cổ phần thuộc diện bắt buộc kiểm toán, kỳ kế toán năm kết thúc 31/12/"+y+".","Ban giám đốc ký báo cáo tài chính ngày "+fd(sg)+". Nhóm kiểm toán hoàn tất công việc và dự định ký báo cáo kiểm toán ngày "+fd(early)+"."],
   stages:[
    simMC("Hợp đồng kiểm toán báo cáo tài chính năm "+y+" phải giao kết chậm nhất ngày nào?",fd(last),[fd(end),fd(new Date(end.getTime()-60*86400000)),fd(new Date(end.getTime()+30*86400000))],"Điều 9 khoản 2: chậm nhất 30 ngày trước ngày kết thúc kỳ kế toán năm."),
    simMC("Dự định ký báo cáo kiểm toán ngày "+fd(early)+" (trước ngày ký báo cáo tài chính "+fd(sg)+"). Có hợp lệ không?","Không: ngày ký báo cáo kiểm toán không được trước ngày ký báo cáo tài chính",["Hợp lệ vì đã hoàn tất kiểm toán","Hợp lệ nếu báo cáo tài chính chưa thay đổi","Hợp lệ nếu Ban giám đốc đồng ý"],"Điều 46 khoản 2 Luật Kiểm toán độc lập."),
    simMC("Hồ sơ kiểm toán phải đưa vào lưu trữ trong thời hạn và lưu tối thiểu bao lâu?","12 tháng kể từ ngày phát hành báo cáo kiểm toán; tối thiểu 10 năm",["30 ngày; 05 năm","06 tháng; 07 năm","24 tháng; 15 năm"],"Điều 50 khoản 2.")],
   law:"Luật Kiểm toán độc lập Điều 9, 46, 50 (đã đối chiếu nguyên văn)",
   lesson:"Ba mốc phải thuộc lòng: hợp đồng trước 30 ngày; báo cáo kiểm toán ký không trước báo cáo tài chính; hồ sơ lưu 12 tháng, giữ tối thiểu 10 năm.",
   warn:"Đối tượng bắt buộc kiểm toán xác định theo Điều 37 và nghị định hướng dẫn."};}},

{id:"s_ka_gian_lan_dt",role:"Kiểm toán viên",topic:"kiemtoan",level:3,make:function(R){
  var n=R.int(5,9),amt=R.step(300e6,1500e6,50e6);
  return {title:"Dấu hiệu gian lận doanh thu cuối năm",
   facts:["Trong "+n+" ngày cuối tháng 12, công ty ghi nhận doanh thu bán hàng bất thường tăng "+R.int(40,90)+"% so với tháng trước, trong đó có 02 hợp đồng lớn tổng "+R.m(amt)+" đồng bán cho hai khách hàng mới, ký cuối năm, thanh toán chậm.","Đầu tháng 01 năm sau có hàng bán bị trả lại và hóa đơn điều chỉnh giảm liên quan chính hai khách hàng này."],
   stages:[
    simMC("Dấu hiệu nào cho thấy rủi ro gian lận ghi nhận doanh thu cao nhất?","Doanh thu tăng đột biến cuối năm, khách hàng mới, thanh toán chậm và hàng trả lại ngay sau ngày kết thúc kỳ",["Giá bán cao hơn đối thủ","Công ty có nhiều khách quen","Doanh thu tăng đều trong năm"],"Chuẩn mực về gian lận coi doanh thu là rủi ro gian lận được giả định; các dấu hiệu trên là cờ đỏ điển hình."),
    {type:"free",q:"Liệt kê các thủ tục kiểm toán bạn sẽ thực hiện đối với hai hợp đồng này.",chk:["xac nhan","hop dong","giao hang","cut-off","tra lai","thu tien sau","phong van"],model:["Gửi thư xác nhận trực tiếp cho hai khách hàng (hiện hữu, điều khoản, số dư)","Đọc hợp đồng: điều kiện chuyển giao rủi ro, điều khoản trả hàng, bên liên quan","Kiểm tra bằng chứng giao hàng: phiếu xuất kho, vận đơn, biên bản nhận hàng có chữ ký, ngày thực tế","Kiểm tra cut-off và hàng bán bị trả lại sau ngày kết thúc kỳ, hóa đơn điều chỉnh","Kiểm tra thu tiền sau ngày kết thúc kỳ; tìm hiểu năng lực khách hàng, quan hệ với đơn vị","Phỏng vấn ban giám đốc, kiểm tra bút toán thủ công cuối kỳ"]},
    simMC("Nếu khách hàng xác nhận nhận hàng nhưng bằng chứng cho thấy hàng chưa giao hết trước 31/12, doanh thu phần chưa giao:","Không được ghi nhận trong năm; đề nghị điều chỉnh, sai sót ảnh hưởng ý kiến nếu trọng yếu",["Vẫn ghi nhận vì đã có hóa đơn","Ghi nhận một nửa","Chỉ thuyết minh"],"Doanh thu ghi nhận khi rủi ro và lợi ích gắn với quyền sở hữu đã chuyển giao, không chỉ căn cứ hóa đơn.")],
   law:"VSA 240, 500, 505 (nội dung theo ISA 240, 500, 505); Luật Kế toán Điều 13",
   lesson:"Gặp cờ đỏ doanh thu: xác nhận độc lập, bằng chứng giao hàng thực, cut-off, thu tiền sau, hàng trả lại, bên liên quan, bút toán thủ công.",
   warn:"Nếu nghi ngờ gian lận có sự tham gia của Ban giám đốc, phải cân nhắc ảnh hưởng đến độ tin cậy của giải trình và nghĩa vụ báo cáo theo pháp luật."};}}

);
