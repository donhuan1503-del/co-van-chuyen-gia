/* Tình huống tính MỨC PHẠT theo NĐ 283/2026 và hồ sơ chi phí theo TT 20/2026 (đã đọc bản gốc bằng OCR, 24/11/2026).
   Quy ước: mức phạt tiền ghi trong NĐ là mức đối với cá nhân; doanh nghiệp (tổ chức) gấp 2 lần (Điều 7). */
function simTier(n,tiers){ for(var i=0;i<tiers.length;i++){ if(n<=tiers[i][0]) return tiers[i]; } return tiers[tiers.length-1]; }
SCEN.push(

{id:"s_phat_chamdong",role:"Thanh tra thuế",topic:"bhxh",level:3,make:function(R){
  var M=R.step(30e6,1400e6,10e6),lo=Math.min(M*0.12,75e6)*2,hi=Math.min(M*0.15,75e6)*2,days=R.int(40,200);
  return {title:"Công ty chậm đóng BHXH: tính khung phạt tiền",
   facts:[R.co()+" chậm đóng BHXH bắt buộc tổng "+R.m(M)+" đồng tại thời điểm lập biên bản; đã được đôn đốc, chưa quá mốc trốn đóng; số ngày chậm đóng "+days+".","Áp dụng NĐ 283/2026 (Điều 43 khoản 3): phạt 12% đến 15% số tiền chậm đóng, tối đa 75 triệu đồng (mức cá nhân); doanh nghiệp gấp 2 lần."],
   stages:[
    {type:"num",q:"Mức phạt thấp nhất áp dụng cho công ty (tổ chức), đồng?",ans:Math.round(lo),unit:"đồng",e:"min(12% × "+R.m(M)+", 75.000.000) × 2 = "+R.m(lo)+" đồng."},
    {type:"num",q:"Mức phạt cao nhất áp dụng cho công ty (tổ chức), đồng?",ans:Math.round(hi),unit:"đồng",e:"min(15% × "+R.m(M)+", 75.000.000) × 2 = "+R.m(hi)+" đồng (trần cá nhân 75 triệu, tổ chức tối đa 150 triệu)."},
    {type:"num",q:"Ngoài tiền phạt, tiền lãi phải nộp vào quỹ BHXH tính 0,03%/ngày trên số tiền chậm đóng (đồng)?",ans:Math.round(M*0.0003*days),unit:"đồng",tol:Math.max(1000,Math.round(M*0.0003*days*0.005)),e:R.m(M)+" × 0,03% × "+days+" = "+R.m(M*0.0003*days)+" đồng, cộng nộp đủ số tiền chậm đóng."},
    simMC("Số tiền chậm đóng tại thời điểm lập biên bản dưới 400.000 đồng thì hình thức xử phạt?","Phạt cảnh cáo",["Phạt tiền tối thiểu 12%","Không xử phạt","Phạt tiền 5 triệu đồng"],"Khoản 1 Điều 43 NĐ 283/2026.")],
   law:"NĐ 283/2026/NĐ-CP (Điều 7, 43); NĐ 274/2025/NĐ-CP (lãi 0,03%/ngày)",
   lesson:"Phạt tiền tính theo % số tiền chậm đóng, có trần: khoản chậm đóng càng nhỏ thì nên xử lý ngay trước khi lập biên bản.",
   warn:"Văn bản gốc đọc bằng OCR; kiểm tra lại Điều 7 về nhân đôi mức phạt tổ chức."};}},

{id:"s_phat_trondong",role:"Thanh tra thuế",topic:"bhxh",level:3,make:function(R){
  var T=R.step(40e6,900e6,10e6),days=R.int(60,240),lo=Math.min(T*0.18,75e6)*2,hi=Math.min(T*0.20,75e6)*2;
  return {title:"Trốn đóng BHXH do đăng ký lương thấp: khung phạt và lãi",
   facts:[R.co()+" đăng ký tiền lương làm căn cứ đóng BHXH thấp hơn quy định tại khoản 1 Điều 31 Luật BHXH. Cơ quan chức năng xác định số tiền trốn đóng "+R.m(T)+" đồng, "+days+" ngày.","NĐ 283/2026 Điều 44 khoản 2: phạt 18% đến 20% số tiền trốn đóng, tối đa 75 triệu (mức cá nhân), tổ chức gấp 2."],
   stages:[
    {type:"num",q:"Mức phạt thấp nhất đối với công ty (tổ chức), đồng?",ans:Math.round(lo),unit:"đồng",e:"min(18% × "+R.m(T)+", 75.000.000) × 2 = "+R.m(lo)+" đồng."},
    {type:"num",q:"Mức phạt cao nhất đối với công ty (tổ chức), đồng?",ans:Math.round(hi),unit:"đồng",e:"min(20% × "+R.m(T)+", 75.000.000) × 2 = "+R.m(hi)+" đồng."},
    {type:"num",q:"Lãi 0,03%/ngày trên số tiền trốn đóng cho "+days+" ngày (đồng)?",ans:Math.round(T*0.0003*days),unit:"đồng",tol:Math.max(1000,Math.round(T*0.0003*days*0.005)),e:R.m(T)+" × 0,03% × "+days+" = "+R.m(T*0.0003*days)+" đồng."},
    simMC("Điều gì xảy ra nếu hành vi tái phạm trốn đóng BHXH có dấu hiệu tội phạm?","Người có thẩm quyền chuyển hồ sơ cho cơ quan tiến hành tố tụng hình sự",["Chỉ phạt hành chính gấp đôi","Bỏ qua","Chuyển cho công đoàn"],"Điều 4 NĐ 283/2026: tái phạm quy định về đóng BHXH bắt buộc, BHTN có thể chuyển hồ sơ hình sự.")],
   law:"NĐ 283/2026/NĐ-CP (Điều 4, 7, 44); Luật BHXH 2024 (Điều 31); NĐ 274/2025/NĐ-CP",
   lesson:"Đăng ký lương đóng BHXH thấp hơn thực tế là cấu thành trốn đóng ngay: rủi ro nặng hơn nhiều so với chậm đóng.",
   warn:"Mức phạt ở đây là khung hành chính; trách nhiệm hình sự (nếu có) theo Bộ luật Hình sự."};}},

{id:"s_phat_luongtt",role:"Nhân sự - tiền lương",topic:"luong",level:3,make:function(R){
  var n=R.pick([4,9,15,35,48,60,120]),t=simTier(n,[[10,20e6,30e6],[50,30e6,50e6],[1e9,50e6,75e6]]);
  var lo=t[1]*2,hi=t[2]*2,M=R.step(100000,900000,50000);
  return {title:"Trả lương thấp hơn lương tối thiểu vùng: khung phạt",
   facts:[R.co()+" trả lương thấp hơn mức lương tối thiểu vùng cho "+n+" người lao động, mỗi người thiếu bình quân "+R.m(M)+" đồng/tháng trong 6 tháng.","NĐ 283/2026 Điều 23 khoản 3: 1-10 người 20-30 triệu; 11-50 người 30-50 triệu; từ 51 người 50-75 triệu (mức cá nhân); tổ chức gấp 2."],
   stages:[
    {type:"num",q:"Mức phạt thấp nhất áp dụng cho công ty (tổ chức), đồng?",ans:lo,unit:"đồng",e:"Khung cá nhân "+R.m(t[1])+" - "+R.m(t[2])+"; công ty gấp 2: "+R.m(lo)+" - "+R.m(hi)+" đồng."},
    {type:"num",q:"Mức phạt cao nhất áp dụng cho công ty (tổ chức), đồng?",ans:hi,unit:"đồng",e:"Gấp 2 lần mức cá nhân cao nhất: "+R.m(hi)+" đồng."},
    {type:"num",q:"Số tiền lương còn thiếu phải truy trả cho tất cả người lao động trong 6 tháng (chưa kể lãi), đồng?",ans:n*M*6,unit:"đồng",e:n+" × "+R.m(M)+" × 6 = "+R.m(n*M*6)+" đồng."},
    simMC("Biện pháp khắc phục hậu quả bắt buộc đi kèm?","Trả đủ tiền lương còn thiếu cộng lãi theo mức lãi suất tiền gửi không kỳ hạn cao nhất của ngân hàng thương mại nhà nước tại thời điểm xử phạt",["Không có biện pháp nào","Chỉ phải xin lỗi","Nộp phạt gấp đôi"],"Điều 23 khoản 5 điểm a.")],
   law:"NĐ 283/2026/NĐ-CP (Điều 7, 23 khoản 3, 5); NĐ 293/2025/NĐ-CP (lương tối thiểu vùng)",
   lesson:"Mức phạt tăng theo số người bị ảnh hưởng và nhân đôi với doanh nghiệp: kiểm tra bảng lương mỗi khi lương tối thiểu vùng đổi.",
   warn:"Khung 'số người' tính theo số người lao động bị vi phạm; xem điều lệ chi tiết trong nghị định."};}},

{id:"s_phat_giolam",role:"Nhân sự - tiền lương",topic:"chamcong",level:2,make:function(R){
  var n=R.pick([5,8,20,45,80,150,250,400]),t=simTier(n,[[10,5e6,10e6],[50,10e6,20e6],[100,20e6,40e6],[300,40e6,60e6],[1e9,60e6,75e6]]);
  return {title:"Huy động làm thêm giờ vượt quy định: khung phạt theo số người",
   facts:[R.co()+" huy động "+n+" người lao động làm thêm vượt số giờ theo quy định.","NĐ 283/2026 Điều 24 khoản 4: 1-10 người 5-10 triệu; 11-50 người 10-20 triệu; 51-100 người 20-40 triệu; 101-300 người 40-60 triệu; từ 301 người 60-75 triệu (mức cá nhân); tổ chức gấp 2."],
   stages:[
    {type:"num",q:"Mức phạt thấp nhất áp dụng cho công ty (tổ chức), đồng?",ans:t[1]*2,unit:"đồng",e:"Khung cá nhân "+R.m(t[1])+" - "+R.m(t[2])+"; công ty gấp 2: "+R.m(t[1]*2)+" - "+R.m(t[2]*2)+" đồng."},
    simMC("Huy động người lao động làm thêm giờ mà KHÔNG có sự đồng ý của họ (trừ trường hợp Điều 108 BLLĐ) bị phạt theo khoản nào và mức cá nhân bao nhiêu?","Khoản 3 Điều 24: từ 20 đến 25 triệu đồng",["Khoản 1 Điều 24: 2-5 triệu","Khoản 2 Điều 24: 10-20 triệu","Không bị phạt"],"Khoản 3 Điều 24 NĐ 283/2026."),
    simMC("Làm thêm trên 200 đến 300 giờ/năm nhưng quên thông báo bằng văn bản cho Sở Nội vụ bị phạt:","Từ 2 đến 5 triệu đồng (khoản 1 Điều 24)",["Từ 20 đến 25 triệu","Không bị phạt","Từ 60 đến 75 triệu"],"Khoản 1 điểm b Điều 24 NĐ 283/2026.")],
   law:"NĐ 283/2026/NĐ-CP (Điều 7, 24); Bộ luật Lao động 2019 (Điều 107, 108)",
   lesson:"Ba lớp kiểm soát: người lao động đồng ý, không vượt giới hạn giờ, thông báo khi vượt 200 giờ/năm (ngành đặc thù).",
   warn:"Đơn vị 'thấp nhất' ở đây là mức đối với tổ chức = 2 × mức cá nhân."};}},

{id:"s_tndn_chuatt",role:"Kế toán trưởng",topic:"tndn",level:2,make:function(R){
  var x=R.step(20e6,400e6,5e6);
  return {title:"Chi phí đã nghiệm thu nhưng cuối năm chưa thanh toán",
   facts:[R.co()+" ghi nhận chi phí dịch vụ "+R.m(x)+" đồng (từ 5 triệu trở lên) theo hóa đơn hợp lệ, có hợp đồng và biên bản nghiệm thu; đến hết năm chưa thanh toán, sang năm sau mới chuyển khoản."],
   stages:[
    simMC("Khi quyết toán TNDN năm nay, khoản chi này?","Vẫn được tính vào chi phí được trừ vì có hợp đồng, biên bản bàn giao; khi thanh toán phải có chứng từ không dùng tiền mặt",["Bị loại hoàn toàn vì chưa thanh toán","Chỉ được trừ khi trả tiền mặt","Được trừ không cần hợp đồng"],"TT 20/2026 Điều 3 khoản 13 điểm c."),
    simMC("Sang năm sau công ty trả bằng TIỀN MẶT khoản này. Hệ quả?","Khoản chi không có chứng từ thanh toán không dùng tiền mặt nên không đủ điều kiện được trừ: phải xử lý điều chỉnh",["Không ảnh hưởng gì","Được trừ thêm lần nữa","Chỉ bị nhắc nhở"],"Điều kiện cuối cùng vẫn là chứng từ thanh toán không dùng tiền mặt khi thanh toán."),
    {type:"free",q:"Liệt kê hồ sơ bạn lưu để bảo vệ khoản chi khi bị kiểm tra.",chk:["hop dong","bien ban","hoa don","chung tu thanh toan","khong dung tien mat","ngan hang"],model:["Hợp đồng mua hàng hóa, dịch vụ","Biên bản bàn giao/nghiệm thu","Hóa đơn hợp lệ","Chứng từ thanh toán không dùng tiền mặt (ủy nhiệm chi, sao kê ngân hàng) khi đến hạn","Sổ chi tiết công nợ, theo dõi ngày thanh toán"]}],
   law:"Thông tư 20/2026/TT-BTC (Điều 3, hiệu lực 12/3/2026, áp dụng từ kỳ tính thuế 2025); Luật TNDN 67/2025; NĐ 320/2025",
   lesson:"Hợp đồng + nghiệm thu giữ chi phí trong kỳ; chứng từ chuyển khoản khi trả giữ nó mãi mãi.",
   warn:"Văn bản gốc đọc bằng OCR; quy định chứng từ không dùng tiền mặt áp dụng từ ngày NĐ 320/2025 có hiệu lực."};}},

{id:"s_tndn_thuesuat",role:"Kế toán trưởng",topic:"tndn",level:2,make:function(R){
  var a=R.step(500e6,60000e6,100e6),b=R.step(0,2000e6,100e6),c=R.step(0,1500e6,100e6),tot=a+b+c,rate=tot<=3e9?15:(tot<=50e9?17:20),lien=R.pick([false,false,true]);
  var real=lien?20:rate;
  return {title:"Chọn thuế suất TNDN tạm nộp theo tổng doanh thu năm trước",
   facts:[R.co()+(lien?" là công ty con của một tập đoàn có công ty liên kết doanh thu trên 50 tỷ đồng.":" là doanh nghiệp độc lập, không có quan hệ liên kết.")+" Năm trước liền kề (đủ 12 tháng): doanh thu bán hàng, dịch vụ sau giảm trừ "+R.m(a)+" đồng; doanh thu hoạt động tài chính "+R.m(b)+" đồng; thu nhập khác "+R.m(c)+" đồng."],
   stages:[
    {type:"num",q:"Tổng doanh thu dùng để xác định thuế suất (đồng)?",ans:tot,unit:"đồng",e:"Bán hàng + tài chính + thu nhập khác = "+R.m(a)+" + "+R.m(b)+" + "+R.m(c)+" = "+R.m(tot)+" đồng."},
    {type:"num",q:"Thuế suất áp dụng khi tạm nộp quý năm nay (nhập 15, 17 hoặc 20)?",ans:real,unit:"%",e:lien?"Công ty con/liên kết mà doanh nghiệp trong nhóm không đủ điều kiện thì không được áp 15%, 17%: dùng 20%.":(tot<=3e9?"Không quá 3 tỷ: 15%.":(tot<=50e9?"Trên 3 tỷ đến 50 tỷ: 17%.":"Trên 50 tỷ: 20%."))},
    simMC("Doanh thu năm nay tăng vọt lên trên 50 tỷ. Thuế suất tạm nộp các quý năm nay?",lien?"Vẫn 20% do quan hệ liên kết":"Vẫn theo doanh thu năm trước liền kề, không đổi trong năm; thuế suất mới ảnh hưởng năm sau",["Phải nộp bổ sung 20% ngay từ quý 1","Được miễn thuế một năm","Tự chọn theo ý muốn"],"Điều 11 NĐ 320/2025: mức thuế suất xác định theo tổng doanh thu của kỳ tính thuế năm trước liền kề.")],
   law:"NĐ 320/2025/NĐ-CP (Điều 11); Luật TNDN 67/2025",
   lesson:"Doanh thu để chọn thuế suất bao gồm cả doanh thu tài chính và thu nhập khác.",
   warn:"Đọc bằng OCR; kiểm tra thêm Điều 19 (ưu đãi thuế suất)."};}},

{id:"s_gtgt_cungngay",role:"Kế toán trưởng",topic:"gtgt",level:2,make:function(R){
  var n=R.int(2,4),parts=[],sum=0,i;for(i=0;i<n;i++){var v=R.step(1.2e6,2.4e6,100e3);parts.push(v);sum+=v;}
  var big=sum>=5e6,vatp=Math.round(sum*R.pick([8,10])/(100+8)); 
  var rate=R.pick([8,10]),vat=Math.round(sum*rate/(100+rate));
  return {title:"Mua nhiều lần cùng ngày từ một người bán",
   facts:[R.co()+" mua vật tư tại cùng một cửa hàng trong cùng một ngày, "+n+" lần, giá đã có GTGT: "+parts.map(function(x){return R.m(x);}).join(", ")+" đồng. Tất cả thanh toán bằng TIỀN MẶT."],
   stages:[
    {type:"num",q:"Tổng giá trị mua trong ngày (đồng)?",ans:sum,unit:"đồng",e:"Cộng các lần: "+R.m(sum)+" đồng."},
    simMC("Có được khấu trừ GTGT đầu vào không?",big?"Không: tổng nhiều lần trong cùng ngày từ một người nộp thuế đạt từ 05 triệu đồng thì phải có chứng từ thanh toán không dùng tiền mặt":"Được: từng lần dưới 05 triệu và tổng trong ngày cũng dưới 05 triệu nên không cần chứng từ không dùng tiền mặt",
     big?["Được vì mỗi hóa đơn dưới 5 triệu","Chỉ được khấu trừ một nửa","Được nếu có hợp đồng"]:["Không vì thanh toán tiền mặt","Chỉ được khấu trừ một nửa","Không vì phải có hợp đồng"],"NĐ 181/2025 Điều 26 khoản 2 điểm h và khoản 3."),
    {type:"num",q:"Với thuế suất "+rate+"%, số GTGT trong tổng tiền (bóc từ giá đã có thuế) là bao nhiêu? (đồng, làm tròn)",ans:vat,unit:"đồng",tol:Math.max(1000,Math.round(vat*0.005)),e:R.m(sum)+" × "+rate+"/"+(100+rate)+" = "+R.m(vat)+" đồng."}],
   law:"NĐ 181/2025/NĐ-CP (Điều 26 khoản 2 điểm h, khoản 3) - đọc bản gốc bằng OCR",
   lesson:"Chia nhỏ hóa đơn dưới 5 triệu không tránh được điều kiện thanh toán không dùng tiền mặt nếu cùng ngày, cùng người bán.",
   warn:"Chỉ áp dụng cho mua từ một người nộp thuế trong cùng ngày."};}}
);
