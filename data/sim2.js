/* Bộ tình huống mở rộng (tuần tự: kiểm tra thuế DN → kiểm toán → luật kế toán → lao động & hợp đồng).
   Cùng khung với data/sim.js. Pháp lý ổn định nhưng luôn có mục lưu ý để đối chiếu văn bản hiện hành. */
SCEN.push(

/* ===== A. KIỂM TRA THUẾ DOANH NGHIỆP ===== */
{id:"s_hd_khong",role:"Thanh tra thuế",topic:"qlt",level:3,make:function(R){
  var x=R.step(300e6,2400e6,50e6),rt=R.pick([8,10]),vat=Math.round(x*rt/100),days=R.int(90,400),tax=vat+Math.round(x*0.2),cn=Math.round(tax*0.0003*days);
  return {title:"Hóa đơn đầu vào của nhà cung cấp không có hoạt động thật",
   facts:[R.co()+" kê khai khấu trừ GTGT và tính vào chi phí lô hàng mua "+R.m(x)+" đồng (thuế suất "+rt+"%, GTGT "+R.m(vat)+" đồng).",
    "Qua xác minh: nhà cung cấp không có kho, không có nhân viên, đã bỏ địa chỉ; tiền thanh toán chuyển vào tài khoản cá nhân không liên quan; không có chứng từ vận chuyển. Công ty không xuất trình được phiếu nhập kho.",
    "Vụ việc phát hiện sau "+days+" ngày kể từ hạn nộp."],
   stages:[
    simMC("Kết luận đúng về khoản này?","Hóa đơn không phản ánh giao dịch thực: loại khấu trừ GTGT và loại khỏi chi phí được trừ",["Vẫn khấu trừ vì hóa đơn đúng hình thức","Chỉ loại chi phí, vẫn khấu trừ GTGT","Không xử lý vì nhà cung cấp đã bỏ trốn"],"Điều kiện cốt lõi là giao dịch có thật và đủ chứng từ thanh toán, vận chuyển, nhập kho. Hóa đơn hợp lệ về hình thức chưa đủ."),
    {type:"num",q:"Tổng thuế phải truy thu (GTGT bị loại + TNDN 20% trên chi phí bị loại), đồng?",ans:tax,unit:"đồng",e:"GTGT "+R.m(vat)+" + TNDN 20% × "+R.m(x)+" = "+R.m(tax)+" đồng."},
    {type:"num",q:"Tiền chậm nộp (0,03%/ngày) cho "+days+" ngày trên số thuế truy thu, làm tròn đến đồng?",ans:cn,unit:"đồng",tol:Math.max(1000,Math.round(cn*0.005)),e:R.m(tax)+" × 0,03% × "+days+" = "+R.m(cn)+" đồng."}],
   law:"Luật GTGT 48/2024; Luật TNDN 67/2025; Luật QLT 108/2025 (tiền chậm nộp 0,03%/ngày); NĐ 123/2020, NĐ 70/2025 về hóa đơn",
   lesson:"Bốn chứng cứ của một giao dịch thật: hợp đồng, giao nhận/ nhập kho, vận chuyển, thanh toán đúng tên người bán. Thiếu mắt xích nào cũng phải giải trình.",
   warn:"Mức phạt và khả năng xử lý hình sự đối với hóa đơn bất hợp pháp không tính ở đây; tra nghị định xử phạt và Bộ luật Hình sự hiện hành."};}},

{id:"s_lai_vay",role:"Kế toán trưởng",topic:"tndn",level:3,make:function(R){
  var ln=R.step(2e9,10e9,100e6),lv=R.step(2e9,9e9,100e6),kh=R.step(500e6,3e9,100e6),e=ln+lv+kh,cap=Math.round(e*0.3),ex=Math.max(0,lv-cap);
  return {title:"Khống chế chi phí lãi vay khi có giao dịch liên kết",
   facts:[R.co()+" vay công ty mẹ (bên liên kết). Lợi nhuận thuần từ hoạt động kinh doanh "+R.m(ln)+" đồng, chi phí lãi vay "+R.m(lv)+" đồng, khấu hao "+R.m(kh)+" đồng."],
   stages:[
    {type:"num",q:"EBITDA (lợi nhuận thuần + lãi vay + khấu hao), đồng?",ans:e,unit:"đồng",e:R.m(ln)+" + "+R.m(lv)+" + "+R.m(kh)+" = "+R.m(e)+" đồng."},
    {type:"num",q:"Chi phí lãi vay tối đa được trừ = 30% EBITDA. Phần lãi vay bị loại là bao nhiêu? (0 nếu không vượt)",ans:ex,unit:"đồng",e:"30% × "+R.m(e)+" = "+R.m(cap)+"; lãi vay "+R.m(lv)+(ex>0?" vượt "+R.m(ex)+" đồng nên bị loại.":" không vượt nên không bị loại.")},
    {type:"num",q:"Thuế TNDN tăng thêm 20% do phần lãi vay bị loại, đồng?",ans:Math.round(ex*0.2),unit:"đồng",e:R.m(ex)+" × 20% = "+R.m(ex*0.2)+" đồng."},
    simMC("Phần lãi vay bị loại trong năm có được chuyển sang năm sau để tính vào chi phí không?","Có, được chuyển sang các kỳ tính thuế tiếp theo theo quy định (trong thời hạn tối đa cho phép)",["Không, mất hẳn","Chuyển sang năm sau không giới hạn","Chuyển ngược về năm trước"],"Theo quy định khống chế lãi vay, phần chi phí lãi vay không được trừ được chuyển sang kỳ sau trong thời hạn quy định.")],
   law:"NĐ 132/2020/NĐ-CP (quản lý thuế giao dịch liên kết, khống chế 30% EBITDA) và văn bản thay thế/ sửa đổi liên quan Luật TNDN 67/2025",
   lesson:"Với doanh nghiệp có giao dịch liên kết, lập sẵn bảng EBITDA khi vay nội bộ; dư địa chi phí lãi vay bị khống chế theo công thức.",
   warn:"Công thức EBITDA, thời hạn chuyển và phạm vi áp dụng cần đối chiếu NĐ 132/2020 và văn bản mới thay thế (NĐ 320/2025, TT 20/2026)."};}},

{id:"s_tndn_lo",role:"Kế toán trưởng",topic:"tndn",level:2,make:function(R){
  var a=R.step(500e6,3000e6,50e6),b=R.step(400e6,2000e6,50e6),t=R.step(800e6,4500e6,50e6),ti=Math.max(0,t-b);
  return {title:"Chuyển lỗ khi quyết toán TNDN",
   facts:[R.co()+": lỗ tính thuế năm 2020 là "+R.m(a)+" đồng; lỗ năm 2023 là "+R.m(b)+" đồng (chưa chuyển hết).","Năm 2026 thu nhập tính thuế trước chuyển lỗ: "+R.m(t)+" đồng."],
   stages:[
    simMC("Lỗ năm 2020 có được chuyển vào năm 2026 không?","Không: lỗ chỉ được chuyển liên tục tối đa 5 năm kể từ năm tiếp theo sau năm phát sinh lỗ (hết hạn sau 2025)",["Có, chuyển không giới hạn","Có, nếu doanh nghiệp xin phép","Chỉ chuyển một nửa"],"Lỗ 2020 được chuyển vào các năm 2021–2025; sang 2026 đã hết hạn 5 năm."),
    {type:"num",q:"Thu nhập tính thuế năm 2026 sau chuyển lỗ 2023 (đồng, tối thiểu 0)?",ans:ti,unit:"đồng",e:R.m(t)+" - "+R.m(b)+" = "+R.m(t-b)+(t-b<0?" nên thu nhập tính thuế bằng 0, lỗ còn lại tiếp tục chuyển.":" đồng.")},
    {type:"num",q:"Thuế TNDN phải nộp 20% (đồng)?",ans:Math.round(ti*0.2),unit:"đồng",e:R.m(ti)+" × 20% = "+R.m(ti*0.2)+" đồng."}],
   law:"Luật TNDN 67/2025 (chuyển lỗ 5 năm); TT 20/2026",
   lesson:"Lập sổ theo dõi lỗ theo từng năm phát sinh và hạn sử dụng; không dùng lỗ đã quá 5 năm.",
   warn:"Đối chiếu điều kiện chuyển lỗ và thuế suất theo quy mô doanh thu tại TT 20/2026."};}},

{id:"s_gtgt_khautru",role:"Kế toán trưởng",topic:"gtgt",level:2,make:function(R){
  var v=function(){return R.step(2e6,40e6,500e3);},
   A={t:"Mua hàng hóa dùng cho kinh doanh chịu thuế, chuyển khoản",v:v(),ok:1},
   B={t:"Mua hàng thanh toán TIỀN MẶT, giá trị cả thuế từ 5 triệu trở lên",v:v(),ok:0},
   C={t:"Mua vật tư chỉ dùng cho hoạt động KHÔNG chịu thuế GTGT",v:v(),ok:0},
   D={t:"Thuê xe vận chuyển, hóa đơn hợp lệ, chuyển khoản",v:v(),ok:1},
   list=R.shuf([A,B,C,D]),sum=[A,D].reduce(function(s,x){return s+x.v;},0);
  return {title:"Chọn hóa đơn đầu vào được khấu trừ GTGT",
   facts:["Công ty kê khai GTGT theo phương pháp khấu trừ. Bốn hóa đơn đầu vào kỳ này (số thuế GTGT trên hóa đơn):"].concat(list.map(function(x,i){return "("+(i+1)+") "+x.t+": "+R.m(x.v)+" đồng";})),
   stages:[
    simMC("Hóa đơn nào KHÔNG được khấu trừ vì thanh toán tiền mặt?",B.t+": "+R.m(B.v)+" đồng",[A.t+": "+R.m(A.v)+" đồng",D.t+": "+R.m(D.v)+" đồng","Cả bốn hóa đơn đều được khấu trừ"],"Hóa đơn từ 5 triệu đồng trở lên cần chứng từ thanh toán không dùng tiền mặt mới được khấu trừ (theo Luật GTGT 48/2024, nguồn đã tra)."),
    {type:"num",q:"Tổng GTGT được khấu trừ kỳ này (đồng)?",ans:sum,unit:"đồng",e:"Chỉ hóa đơn chuyển khoản dùng cho hoạt động chịu thuế: "+R.m(A.v)+" + "+R.m(D.v)+" = "+R.m(sum)+" đồng."}],
   law:"Luật GTGT 48/2024; NĐ 181/2025; NĐ 144/2026",
   lesson:"Ba điều kiện khấu trừ: hóa đơn hợp lệ, thanh toán không dùng tiền mặt (từ ngưỡng), dùng cho hoạt động chịu thuế; hàng dùng chung thì phân bổ.",
   warn:"Ngưỡng 5 triệu tính trên giá trị đã có thuế hay không, và quy định phân bổ: xem NĐ 181/2025."};}},

/* ===== B. KIỂM TOÁN ===== */
{id:"s_kt_hangton",role:"Kiểm toán viên",topic:"kiemtoan",level:2,make:function(R){
  var q=R.step(200,3000,50),c=R.step(80e3,900e3,10e3),n=Math.round(c*R.int(60,90)/100/1000)*1000,dp=q*(c-n);
  return {title:"Dự phòng giảm giá hàng tồn kho",
   facts:[R.co()+": tồn kho cuối năm "+R.m(q)+" đơn vị, giá gốc "+R.m(c)+" đồng/đơn vị.","Giá bán sau ngày khóa sổ trừ chi phí bán hàng ước tính (giá trị thuần có thể thực hiện) chỉ còn "+R.m(n)+" đồng/đơn vị. Công ty chưa trích dự phòng."],
   stages:[
    simMC("Nguyên tắc đánh giá hàng tồn kho cuối kỳ?","Theo giá thấp hơn giữa giá gốc và giá trị thuần có thể thực hiện",["Luôn theo giá gốc","Luôn theo giá bán","Theo giá thị trường cao nhất"],"VAS 02: hàng tồn kho được ghi nhận theo giá thấp hơn giữa giá gốc và giá trị thuần có thể thực hiện."),
    {type:"num",q:"Số dự phòng giảm giá hàng tồn kho cần trích (đồng)?",ans:dp,unit:"đồng",e:R.m(q)+" × ("+R.m(c)+" - "+R.m(n)+") = "+R.m(dp)+" đồng. Bút toán: Nợ 632 / Có 2294."},
    {type:"free",q:"Thủ tục kiểm toán để thu thập bằng chứng về giá trị thuần có thể thực hiện?",chk:["gia ban","sau ngay","kiem ke","chung kien","cham luan chuyen","hang hu"],model:["Chứng kiến kiểm kê; xác định hàng chậm luân chuyển, hỏng, lỗi thời","Kiểm tra giá bán thực tế sau ngày khóa sổ và hợp đồng bán","Đánh giá chi phí bán hàng ước tính, so sánh với giá gốc từng nhóm","Xem xét chính sách trích lập dự phòng của đơn vị có nhất quán không"]}],
   law:"VAS 02; VSA 501 (kiểm kê hàng tồn kho); TT 99/2025 (dự phòng tổn thất tài sản)",
   lesson:"Dự phòng không phải ước muốn của kế toán: cần bằng chứng giá bán thực tế và tình trạng hàng.",
   warn:"Số hiệu TK dự phòng theo TT 99/2025 nên đối chiếu (TK 229x)."};}},

{id:"s_kt_khauhao",role:"Kiểm toán viên",topic:"kiemtoan",level:2,make:function(R){
  var G=R.step(300e6,3000e6,50e6),n=R.pick([5,8,10]),k=R.int(2,5),mon=Math.round(G/n/12),sub=mon*k;
  return {title:"Khấu hao TSCĐ trích chậm",
   facts:[R.co()+" mua máy móc nguyên giá "+R.m(G)+" đồng, thời gian sử dụng "+n+" năm, khấu hao đường thẳng.","Máy đưa vào sử dụng từ đầu năm nhưng kế toán bắt đầu trích khấu hao chậm "+k+" tháng."],
   stages:[
    {type:"num",q:"Khấu hao mỗi tháng (đồng, làm tròn)?",ans:mon,unit:"đồng",tol:Math.max(1000,Math.round(mon*0.005)),e:R.m(G)+" ÷ "+n+" ÷ 12 = "+R.m(mon)+" đồng."},
    {type:"num",q:"Số khấu hao còn thiếu trong năm do trích chậm (đồng)?",ans:sub,unit:"đồng",tol:Math.max(1000,Math.round(sub*0.005)),e:R.m(mon)+" × "+k+" = "+R.m(sub)+" đồng."},
    simMC("Hướng xử lý của kiểm toán viên khi sai sót này lớn?","Đề nghị điều chỉnh chi phí khấu hao và xem xét ảnh hưởng thuế TNDN, thuyết minh nếu trọng yếu",["Bỏ qua vì không ảnh hưởng dòng tiền","Chỉ ghi vào thư quản lý, không điều chỉnh","Xóa TSCĐ khỏi sổ"],"Khấu hao ảnh hưởng chi phí, lợi nhuận và thuế; sai sót trọng yếu phải đề nghị điều chỉnh.")],
   law:"VAS 03; TT 45/2013 và văn bản thay thế (khấu hao); TT 99/2025",
   lesson:"Ngày bắt đầu khấu hao là thời điểm TSCĐ sẵn sàng sử dụng, không phải ngày thanh toán hay lắp đặt xong trên giấy.",
   warn:"Khung thời gian khấu hao theo văn bản hiện hành."};}},

{id:"s_kt_hdlt",role:"Kiểm toán viên",topic:"kiemtoan",level:3,make:function(R){
  var A=R.step(20e9,60e9,1e9),B=Math.round(A*R.int(110,160)/100/1e9)*1e9,r=Math.round(A/B*100),lo=R.step(3e9,15e9,500e6);
  return {title:"Dấu hiệu nghi ngờ khả năng hoạt động liên tục",
   facts:[R.co()+": tài sản ngắn hạn "+R.m(A)+" đồng; nợ ngắn hạn "+R.m(B)+" đồng; lỗ lũy kế "+R.m(lo)+" đồng; dòng tiền kinh doanh âm hai năm liên tiếp.","Nhiều khoản vay đã quá hạn, ngân hàng thông báo thu hồi sớm."],
   stages:[
    {type:"num",q:"Hệ số thanh toán hiện hành nhân 100 (làm tròn số nguyên)?",ans:r,unit:"%",tol:1,e:"Tài sản ngắn hạn ÷ nợ ngắn hạn = "+(A/B).toFixed(2)+" nên nhập "+r+"."},
    simMC("Hành động đúng của kiểm toán viên?","Đánh giá kế hoạch hoạt động của ban giám đốc và bằng chứng hỗ trợ; xem xét thuyết minh; cân nhắc nhấn mạnh hoặc ý kiến phù hợp",["Phát hành ngay ý kiến chấp nhận toàn phần","Bỏ qua vì doanh nghiệp vẫn đang hoạt động","Từ chối cuộc kiểm toán ngay lập tức"],"VSA 570: đánh giá giả định hoạt động liên tục, kế hoạch của ban giám đốc, thuyết minh; từ đó quyết định ý kiến."),
    {type:"free",q:"Liệt kê các bằng chứng cần thu thập để đánh giá kế hoạch của ban giám đốc.",chk:["ke hoach","dong tien","ngan hang","cam ket","du bao","gia han"],model:["Dự báo dòng tiền, kế hoạch kinh doanh có căn cứ","Văn bản gia hạn, tái cơ cấu nợ với ngân hàng","Cam kết hỗ trợ tài chính của cổ đông hoặc công ty mẹ (có năng lực thực hiện)","Thuyết minh BCTC về sự kiện, điều kiện gây nghi ngờ"]}],
   law:"VSA 570 (hoạt động liên tục); VAS 21",
   lesson:"Hoạt động liên tục là giả định của cả bộ BCTC: nếu không còn đúng, cơ sở lập báo cáo phải đổi.",warn:""};}},

{id:"s_kt_trongyeu",role:"Kiểm toán viên",topic:"kiemtoan",level:2,make:function(R){
  var P=R.step(2e9,15e9,100e6),pm=Math.round(P*0.05),ratio=R.pick([0.5,0.7,1.3,1.6]),sum=Math.round(pm*ratio/1e6)*1e6;
  return {title:"Mức trọng yếu và sai sót chưa điều chỉnh",
   facts:[R.co()+": lợi nhuận trước thuế dự kiến "+R.m(P)+" đồng. Kiểm toán viên chọn mức trọng yếu 5% lợi nhuận trước thuế.","Tổng các sai sót đã phát hiện nhưng đơn vị chưa điều chỉnh: "+R.m(sum)+" đồng."],
   stages:[
    {type:"num",q:"Mức trọng yếu tổng thể (đồng)?",ans:pm,unit:"đồng",e:R.m(P)+" × 5% = "+R.m(pm)+" đồng."},
    simMC("Tổng sai sót chưa điều chỉnh so với mức trọng yếu thì kết luận?",sum>pm?"Vượt mức trọng yếu: yêu cầu điều chỉnh; không điều chỉnh sẽ cân nhắc ý kiến ngoại trừ":"Chưa vượt mức trọng yếu nhưng vẫn phải xem xét tính chất và tổng hợp các sai sót",
     [sum>pm?"Không cần làm gì vì từng sai sót nhỏ":"Vượt mức trọng yếu, phát hành ý kiến từ chối","Bỏ qua mọi sai sót nhỏ","Chỉ cần ghi chú trong hồ sơ nội bộ"],"VSA 320 và 450: đánh giá sai sót chưa điều chỉnh gộp, cả về số lượng và bản chất.")],
   law:"VSA 320 (trọng yếu), VSA 450 (đánh giá sai sót)",
   lesson:"Trọng yếu không chỉ là con số: sai sót nhỏ nhưng che giấu vi phạm hoặc vượt chỉ tiêu hợp đồng vẫn có thể trọng yếu về bản chất.",
   warn:"Tỷ lệ 5% chỉ là điểm tham chiếu thường dùng, không phải quy định bắt buộc."};}},

/* ===== C. LUẬT KẾ TOÁN ===== */
{id:"s_kt_luutru",role:"Kế toán trưởng",topic:"ketoan",level:1,make:function(R){
  var c=R.pick([
   {t:"Chứng từ kế toán dùng trực tiếp để ghi sổ và sổ kế toán",y:"10 năm"},
   {t:"Báo cáo tài chính năm",y:"10 năm"},
   {t:"Báo cáo tài chính quý và tài liệu phục vụ quản lý không dùng để ghi sổ",y:"5 năm"}]);
  return {title:"Thời hạn lưu trữ tài liệu kế toán",
   facts:["Công ty chuẩn bị dọn kho lưu trữ. Tài liệu đang xem xét: "+c.t+"."],
   stages:[
    simMC("Thời hạn lưu trữ tối thiểu theo Luật Kế toán?",c.y,["3 năm","15 năm","Không giới hạn nếu không có yêu cầu","Vĩnh viễn với mọi loại"].filter(function(x){return x!==c.y;}).concat(["2 năm"]).slice(0,3),"Luật Kế toán 2015: tối thiểu 10 năm với tài liệu ghi sổ, sổ kế toán, BCTC năm; 5 năm với tài liệu quản lý khác, BCTC tháng/quý; vĩnh viễn với tài liệu có tính sử liệu."),
    simMC("Khi hết thời hạn và muốn tiêu hủy, cách làm đúng?","Có quyết định của người đại diện pháp luật, lập hội đồng và biên bản tiêu hủy",["Kế toán tự quyết và hủy ngay","Gửi cho nhà cung cấp giữ hộ","Bán giấy vụn không cần biên bản"],"Tiêu hủy tài liệu kế toán phải có quyết định, hội đồng và biên bản; tài liệu điện tử cần phương thức bảo đảm không khôi phục sử dụng sai.")],
   law:"Luật Kế toán 88/2015 (Điều 41); hướng dẫn về lưu trữ tài liệu kế toán điện tử",
   lesson:"Khi có thanh tra, kiểm tra, thời hạn 10 năm thường là thời gian bạn phải chứng minh số liệu.",
   warn:"Luật 56/2024 (đã đọc nguyên văn) sửa nhiều điều Luật Kế toán nhưng không sửa Điều 41 về lưu trữ; thời hạn 10/5 năm/vĩnh viễn vẫn theo Luật Kế toán 2015."};}},

/* ===== D. LAO ĐỘNG VÀ HỢP ĐỒNG ===== */
{id:"s_ld_thoiviec_tc",role:"Nhân sự - tiền lương",topic:"laodong",level:2,make:function(R){
  var Y=R.int(4,12),Z=R.int(1,Y-1),S=R.step(9e6,30e6,500e3),hd=R.pick([{n:"hợp đồng không xác định thời hạn",d:45},{n:"hợp đồng 24 tháng",d:30},{n:"hợp đồng 9 tháng",d:3}]),tc=Math.round((Y-Z)*0.5*S);
  return {title:"Người lao động nghỉ việc: báo trước và trợ cấp thôi việc",
   facts:["Nhân viên làm việc "+Y+" năm, trong đó đã tham gia BHTN "+Z+" năm. Lương bình quân 6 tháng liền kề "+R.m(S)+" đồng.","Nhân viên đơn phương chấm dứt "+hd.n+", đúng thủ tục và không thuộc trường hợp được nghỉ không cần báo trước."],
   stages:[
    {type:"num",q:"Số ngày phải báo trước tối thiểu theo luật (ngày; với hợp đồng dưới 12 tháng là ngày làm việc)?",ans:hd.d,unit:"ngày",e:"BLLĐ 2019 Điều 35: 45 ngày (không xác định thời hạn), 30 ngày (12–36 tháng), 03 ngày làm việc (dưới 12 tháng)."},
    {type:"num",q:"Trợ cấp thôi việc: thời gian tính trợ cấp = tổng thời gian làm việc - thời gian tham gia BHTN. Mỗi năm được 1/2 tháng lương. Tổng trợ cấp (đồng)?",ans:tc,unit:"đồng",e:"("+Y+" - "+Z+") × 0,5 × "+R.m(S)+" = "+R.m(tc)+" đồng."},
    simMC("Người lao động nghỉ không báo trước đúng thời hạn, hậu quả?","Không được trợ cấp thôi việc, phải bồi thường nửa tháng lương và ngày vi phạm báo trước, hoàn trả chi phí đào tạo nếu có",["Không có hậu quả","Bị phạt hình sự","Công ty phải trả gấp đôi lương"],"Trường hợp đơn phương chấm dứt trái pháp luật, NLĐ không được trợ cấp thôi việc và phải bồi thường theo Điều 40 BLLĐ 2019.")],
   law:"Bộ luật Lao động 2019 (Điều 35, 40, 46); NĐ 145/2020",
   lesson:"Trợ cấp thôi việc chỉ tính cho thời gian chưa đóng BHTN; thời gian đã đóng BHTN hưởng chế độ BHTN thay thế.",
   warn:"Kiểm tra quy định tính lương bình quân và trường hợp được nghỉ không cần báo trước."};}},

{id:"s_ld_nghiphep",role:"Nhân sự - tiền lương",topic:"luong",level:2,make:function(R){
  var M=R.int(4,11),u=R.int(0,M-2),r=M-u,S=R.step(9e6,25e6,500e3),pay=Math.round(S/26*r);
  return {title:"Thanh toán tiền phép năm còn lại khi nghỉ việc",
   facts:["Nhân viên nghỉ việc sau "+M+" tháng làm việc trong năm, đã nghỉ phép "+u+" ngày. Quy định công ty: 12 ngày phép/năm đủ 12 tháng; lương tháng "+R.m(S)+" đồng, ngày công chuẩn 26."],
   stages:[
    {type:"num",q:"Số ngày phép năm được hưởng (tỷ lệ theo tháng làm việc) còn lại chưa nghỉ?",ans:r,unit:"ngày",e:"Phép năm = 12 × "+M+"/12 = "+M+" ngày; đã nghỉ "+u+"; còn "+r+" ngày."},
    {type:"num",q:"Tiền lương cho số ngày phép chưa nghỉ (lương ÷ 26 × số ngày), đồng?",ans:pay,unit:"đồng",tol:Math.max(1000,Math.round(pay*0.005)),e:R.m(S)+" ÷ 26 × "+r+" = "+R.m(pay)+" đồng."},
    simMC("Khoản tiền phép chưa nghỉ khi thôi việc về thuế TNCN?","Là thu nhập từ tiền lương, tiền công: tính vào thu nhập chịu thuế của tháng nhận",["Miễn thuế hoàn toàn","Chịu thuế 10% cố định","Không phải thu nhập"],"Tiền thanh toán ngày phép năm chưa nghỉ là khoản tiền lương chịu thuế TNCN.")],
   law:"Bộ luật Lao động 2019 (Điều 113, 114); Luật TNCN",
   lesson:"Số ngày phép tính theo tháng làm việc thực tế; cách chia lương/26 hay theo ngày công thực tế cần ghi trong quy chế.",
   warn:"Cách tính lương ngày phải theo quy chế lương và quy định hiện hành."};}},

{id:"s_hd_phat",role:"Pháp chế doanh nghiệp",topic:"hopdong",level:2,make:function(R){
  var V=R.step(500e6,5000e6,50e6),p=R.pick([20,30,40,50]),base=Math.round(V*p/100),mx=Math.round(base*0.08);
  return {title:"Phạt vi phạm hợp đồng thương mại",
   facts:["Hợp đồng mua bán giữa hai công ty (đều là thương nhân) giá trị "+R.m(V)+" đồng. Bên bán giao thiếu, phần nghĩa vụ vi phạm tương ứng "+p+"% giá trị hợp đồng ("+R.m(base)+" đồng).","Hợp đồng ghi phạt 12% giá trị phần nghĩa vụ bị vi phạm."],
   stages:[
    {type:"num",q:"Mức phạt tối đa theo Luật Thương mại (8% phần nghĩa vụ bị vi phạm), đồng?",ans:mx,unit:"đồng",e:R.m(base)+" × 8% = "+R.m(mx)+" đồng."},
    simMC("Điều khoản phạt 12% có hiệu lực thế nào?","Phần vượt 8% không được áp dụng; mức phạt thực tế tối đa là 8%",["Có hiệu lực đầy đủ vì hai bên tự thỏa thuận","Toàn bộ hợp đồng vô hiệu","Phạt tính lại theo lãi suất ngân hàng"],"Luật Thương mại 2005: mức phạt không quá 8% giá trị phần nghĩa vụ bị vi phạm đối với quan hệ thương mại giữa thương nhân."),
    simMC("Nếu hợp đồng thuộc quan hệ dân sự (không phải giữa thương nhân) thì sao?","Áp dụng Bộ luật Dân sự: các bên thỏa thuận mức phạt, không bị giới hạn 8% theo Luật Thương mại",["Vẫn bị giới hạn 8%","Không được thỏa thuận phạt","Phạt tối đa 20%"],"Giới hạn 8% là đặc thù Luật Thương mại; Bộ luật Dân sự cho phép thỏa thuận, nhưng tòa có thể điều chỉnh nếu bất hợp lý.")],
   law:"Luật Thương mại 2005 (Điều 301); Bộ luật Dân sự 2015 (Điều 418)",
   lesson:"Soạn điều khoản phạt: xác định hợp đồng thuộc luật nào trước khi ghi tỷ lệ.",
   warn:"Luật Thương mại có đề xuất sửa đổi; đối chiếu văn bản hiện hành trước khi dùng."};}}

);
