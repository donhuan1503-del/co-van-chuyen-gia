/* QUYẾT TOÁN THUẾ TNCN: tình huống tính toán có số liệu ngẫu nhiên.
   Căn cứ đối chiếu nguyên văn Luật TNCN 109/2025 (VBHN 112/VBHN-VPQH, 2026): Điều 3, 4, 7, 8, 9, 10, 11, 29.
   Điểm CHƯA đối chiếu nguyên văn (trong bài chỉ cho sẵn làm dữ kiện): mức doanh thu miễn thuế của hộ, cá nhân kinh doanh (do Chính phủ quy định),
   mức giảm trừ chi y tế, giáo dục, mức trần bảo hiểm tự nguyện, cách khấu trừ tạm thời trong năm, hạn nộp hồ sơ quyết toán và điều kiện ủy quyền quyết toán. */
function AZ_TNCN_YEAR(tn){ // thuế theo biểu lũy tiến năm (triệu đồng quy ra đồng): 120, 360, 720, 1.200
  var br=[[120e6,0.05],[360e6,0.10],[720e6,0.20],[1200e6,0.30],[1e18,0.35]],t=0,pre=0;
  for(var i=0;i<br.length;i++){if(tn>pre){t+=(Math.min(tn,br[i][0])-pre)*br[i][1];}pre=br[i][0];}
  return Math.round(t);
}
SCEN.push(

{id:"s_tncn_qt_luong",role:"Kế toán trưởng",topic:"tncn",level:3,make:function(R){
  var L=R.step(18e6,48e6,1e6),Bn=R.step(20e6,150e6,5e6),H=R.step(1e6,3e6,500000),n=R.int(0,3),D=R.pick([0,0,10e6,20e6]);
  var inc,bh,gt,tn;
  for(;;){inc=L*12+Bn;bh=Math.round(L*12*0.105);gt=186e6+n*74.4e6;tn=inc-bh-gt-D;if(tn>30e6||n===0)break;n--;}
  if(tn<=0){D=0;tn=inc-bh-gt;}
  var tax=AZ_TNCN_YEAR(tn),f=R.pick([0.88,0.93,1.07,1.15]),paid=Math.round(tax*f/1000)*1000,diff=Math.abs(tax-paid),more=tax>paid;
  return {title:"Quyết toán thuế TNCN năm 2026 của một người lao động",
   facts:[R.pick(SIM_PERSON)+" là cá nhân cư trú, ký hợp đồng lao động cả năm 2026 tại một nơi duy nhất. Lương tháng "+R.m(L)+" đồng (đồng thời là lương làm căn cứ đóng bảo hiểm, chưa vượt mức trần), đóng đủ 12 tháng. Thưởng cuối năm "+R.m(Bn)+" đồng.","Phụ cấp độc hại, nguy hiểm theo quy định của pháp luật: "+R.m(H)+" đồng/tháng (12 tháng).","Người phụ thuộc đã đăng ký đủ năm: "+n+" người."+(D?" Đóng góp từ thiện vào quỹ từ thiện được cơ quan nhà nước cho phép thành lập: "+R.m(D)+" đồng, đủ chứng từ hợp lệ.":" Không có khoản đóng góp từ thiện."),"Thuế TNCN công ty đã khấu trừ trong năm: "+R.m(paid)+" đồng. Áp dụng Luật TNCN 109/2025 cho kỳ tính thuế năm 2026 (Điều 29 khoản 2). Người nộp thuế bảo hiểm bắt buộc 10,5% (BHXH 8%, BHYT 1,5%, BHTN 1%)."],
   stages:[
    {type:"num",q:"Tổng thu nhập chịu thuế từ tiền lương, tiền công cả năm (đồng)? (Lưu ý phụ cấp độc hại.)",ans:inc,unit:"đồng",e:"Lương 12 tháng + thưởng = "+R.m(L*12)+" + "+R.m(Bn)+" = "+R.m(inc)+" đồng. Phụ cấp độc hại, nguy hiểm không thuộc thu nhập chịu thuế tiền lương (Luật TNCN Điều 3 khoản 2 điểm c)."},
    {type:"num",q:"Bảo hiểm bắt buộc người lao động đóng trong năm (đồng)?",ans:bh,unit:"đồng",e:"10,5% × "+R.m(L*12)+" = "+R.m(bh)+" đồng; được trừ khi tính thu nhập tính thuế (Điều 8 khoản 2)."},
    {type:"num",q:"Tổng mức giảm trừ gia cảnh cả năm (đồng)?",ans:gt,unit:"đồng",e:"Bản thân 15,5 triệu × 12 = 186 triệu; mỗi người phụ thuộc 6,2 triệu × 12 = 74,4 triệu × "+n+" = "+R.m(n*74.4e6)+" đồng. Tổng "+R.m(gt)+" đồng (Điều 10)."},
    {type:"num",q:"Thu nhập tính thuế cả năm (đồng)?",ans:tn,unit:"đồng",e:R.m(inc)+" - "+R.m(bh)+" - "+R.m(gt)+(D?" - "+R.m(D)+" (từ thiện, Điều 11)":"")+" = "+R.m(tn)+" đồng."},
    {type:"num",q:"Thuế TNCN phải nộp cả năm theo biểu lũy tiến 5 bậc (đồng)?",ans:tax,unit:"đồng",e:"Biểu năm: đến 120 triệu 5%; trên 120 đến 360 triệu 10%; trên 360 đến 720 triệu 20%; trên 720 đến 1.200 triệu 30%; trên 1.200 triệu 35% (Điều 9). Thuế = "+R.m(tax)+" đồng."},
    simMC("So với số đã khấu trừ trong năm, kết quả quyết toán:",more?"Phải nộp thêm":"Được hoàn hoặc bù trừ vào kỳ sau (nộp thừa)",more?["Được hoàn thuế","Không phát sinh chênh lệch"]:["Phải nộp thêm","Không phát sinh chênh lệch"],"Thuế cả năm "+R.m(tax)+" so với đã khấu trừ "+R.m(paid)+": chênh lệch "+R.m(diff)+" đồng. Hình thức nộp thêm, hoàn hoặc bù trừ theo hướng dẫn của Luật Quản lý thuế."),
    {type:"num",q:"Số tiền chênh lệch giữa thuế cả năm và thuế đã khấu trừ (đồng, nhập số dương)?",ans:diff,unit:"đồng",e:"|"+R.m(tax)+" - "+R.m(paid)+"| = "+R.m(diff)+" đồng."}],
   law:"Luật TNCN 109/2025 (VBHN 112/VBHN-VPQH): Điều 3 khoản 2, Điều 8, 9, 10, 11, 29",
   lesson:"Trình tự quyết toán tiền lương: loại khoản không chịu thuế → tổng thu nhập chịu thuế → trừ bảo hiểm → trừ giảm trừ gia cảnh và từ thiện → tính theo biểu năm → so với số đã khấu trừ.",
   warn:"Đề giả định ngưỡng trần bảo hiểm chưa chạm và mọi người phụ thuộc đăng ký đủ năm. Hạn nộp hồ sơ quyết toán, điều kiện ủy quyền quyết toán và cách khấu trừ tạm thời tháng 1-6/2026 xem Luật Quản lý thuế 108/2025, NĐ 252/2026 và hướng dẫn mới nhất (chưa đối chiếu nguyên văn)."};}},

{id:"s_tncn_hkd",role:"Kế toán trưởng",topic:"tncn",level:3,make:function(R){
  var sect=R.pick([{n:"phân phối, cung cấp hàng hóa",t:0.005},{n:"dịch vụ, xây dựng không bao thầu nguyên vật liệu",t:0.02},{n:"sản xuất, vận tải, dịch vụ gắn với hàng hóa, xây dựng có bao thầu nguyên vật liệu",t:0.015},{n:"hoạt động kinh doanh khác",t:0.01}]);
  var X=1000e6,Rv=R.step(1200e6,2800e6,100e6),cr=R.pick([0.62,0.7,0.78,0.85]),cost=Math.round(Rv*cr/1e6)*1e6,tnA=Rv-cost,taxA=Math.round(tnA*0.15),taxB=Math.round((Rv-X)*sect.t),lowerA=taxA<taxB;
  return {title:"Hộ kinh doanh: chọn cách tính thuế TNCN có lợi",
   facts:["Cá nhân cư trú kinh doanh ngành "+sect.n+", doanh thu năm "+R.m(Rv)+" đồng, có sổ sách kế toán, chi phí hợp lý có chứng từ "+R.m(cost)+" đồng.","Theo nghị định hiện hành, mức doanh thu năm từ mức này trở xuống không phải nộp thuế TNCN: giả định "+R.m(X)+" đồng (Luật giao Chính phủ quy định mức; hãy tra mức mới nhất khi làm thực tế)."],
   stages:[
    {type:"num",q:"Cách 1: thuế tính theo thu nhập tính thuế (doanh thu - chi phí) × 15% (đồng)?",ans:taxA,unit:"đồng",e:"Doanh thu "+R.m(Rv)+" trên mức miễn đến 03 tỷ đồng: thuế suất 15% (Điều 7 khoản 2 điểm b). Thu nhập tính thuế "+R.m(tnA)+" × 15% = "+R.m(taxA)+" đồng."},
    {type:"num",q:"Cách 2: thuế tính theo doanh thu = (doanh thu - mức miễn) × tỷ lệ của ngành (đồng)?",ans:taxB,unit:"đồng",e:"Tỷ lệ ngành này "+(sect.t*100)+"% (Điều 7 khoản 3). ("+R.m(Rv)+" - "+R.m(X)+") × "+(sect.t*100)+"% = "+R.m(taxB)+" đồng."},
    simMC("Doanh thu đến 03 tỷ đồng được chọn một trong hai cách. Cách nào số thuế thấp hơn?",lowerA?"Cách 1 (theo thu nhập tính thuế)":"Cách 2 (theo doanh thu)",lowerA?["Cách 2 (theo doanh thu)","Hai cách bằng nhau"]:["Cách 1 (theo thu nhập tính thuế)","Hai cách bằng nhau"],"Cách 1: "+R.m(taxA)+" đồng; cách 2: "+R.m(taxB)+" đồng. Chọn cách có thuế thấp hơn, nhưng cách 1 đòi hỏi sổ sách, chứng từ chi phí đầy đủ."),
    simMC("Nếu doanh thu năm vượt 03 tỷ đồng thì:","Không được chọn cách tính theo doanh thu; thuế tính theo thu nhập tính thuế với thuế suất 17% (trên 03 đến 50 tỷ đồng)",["Vẫn được chọn cách theo doanh thu","Được miễn thuế","Thuế suất cố định 15%"],"Điều 7 khoản 2 điểm c và khoản 3: cách theo doanh thu chỉ áp dụng cho doanh thu đến 03 tỷ đồng.")],
   law:"Luật TNCN 109/2025 (VBHN 112/VBHN-VPQH) Điều 7",
   lesson:"Với hộ, cá nhân kinh doanh doanh thu đến 03 tỷ đồng: tính cả hai cách và chọn cách thấp hơn, kèm chuẩn bị sổ sách, hóa đơn, chứng từ để dùng cách theo thu nhập.",
   warn:"Mức doanh thu miễn thuế, thời điểm áp dụng, cách khai theo quý hay năm, hóa đơn bắt buộc: do nghị định, thông tư quy định, chưa đối chiếu nguyên văn."};}},

{id:"s_tncn_phan_loai",role:"Kế toán trưởng",topic:"tncn",level:2,make:function(R){
  var pool=[
   {t:"Tiền lãi gửi tiết kiệm tại ngân hàng.",tax:false,e:"Thu nhập từ lãi tiền gửi tại tổ chức tín dụng được miễn thuế (Điều 4 khoản 6)."},
   {t:"Phụ cấp độc hại, nguy hiểm theo quy định của pháp luật cho người làm việc ở nơi có yếu tố độc hại.",tax:false,e:"Không thuộc thu nhập chịu thuế tiền lương, tiền công (Điều 3 khoản 2 điểm c)."},
   {t:"Tiền thưởng cuối năm theo quy chế công ty.",tax:true,e:"Là thu nhập từ tiền lương, tiền công (Điều 3 khoản 2): chịu thuế."},
   {t:"Trợ cấp thôi việc theo quy định của pháp luật lao động.",tax:false,e:"Trợ cấp thôi việc, trợ cấp mất việc làm không thuộc thu nhập chịu thuế tiền lương (Điều 3 khoản 2 điểm c)."},
   {t:"Cổ tức nhận từ công ty cổ phần.",tax:true,e:"Là thu nhập từ đầu tư vốn: chịu thuế 5% (Điều 3 khoản 3, Điều 12)."},
   {t:"Thu nhập từ chuyển nhượng nhà ở, đất ở của cá nhân chỉ có một nhà ở, đất ở duy nhất tại Việt Nam.",tax:false,e:"Được miễn thuế (Điều 4 khoản 2)."},
   {t:"Tặng cho bất động sản giữa cha đẻ và con đẻ.",tax:false,e:"Được miễn thuế (Điều 4 khoản 1)."},
   {t:"Lương hưu do Quỹ bảo hiểm xã hội chi trả.",tax:false,e:"Được miễn thuế (Điều 4 khoản 9)."},
   {t:"Thu nhập từ chuyển nhượng chứng khoán.",tax:true,e:"Chịu thuế: giá chuyển nhượng × 0,1% mỗi lần (Điều 3 khoản 4, Điều 13 khoản 2)."},
   {t:"Trúng thưởng xổ số.",tax:true,e:"Thu nhập từ trúng thưởng chịu thuế (Điều 3 khoản 6)."}];
  var s=R.shuf(pool).slice(0,4);
  return {title:"Phân loại thu nhập chịu thuế và miễn thuế TNCN",
   facts:["Kế toán rà soát các khoản thu nhập của một cá nhân cư trú trong năm 2026:"].concat(s.map(function(x,i){return "("+(i+1)+") "+x.t;})),
   stages:s.map(function(x,i){return simMC("Khoản ("+(i+1)+"):",x.tax?"Thuộc thu nhập chịu thuế TNCN":"Không chịu thuế hoặc được miễn thuế",x.tax?["Được miễn thuế","Không thuộc diện kê khai"]:["Thuộc thu nhập chịu thuế TNCN","Chịu thuế 10%"],x.e);}),
   law:"Luật TNCN 109/2025 (VBHN 112/VBHN-VPQH): Điều 3, 4, 12, 13",
   lesson:"Hai bước: (1) khoản đó có thuộc Điều 3 (thu nhập chịu thuế) không; (2) có nằm trong Điều 4 (miễn thuế) không. Chỉ khoản còn lại mới tính thuế.",
   warn:"Mức miễn của một số khoản (ăn giữa ca, làm thêm giờ, đồng phục...) do nghị định quy định; bài này chỉ phân loại theo luật."};}}

);
