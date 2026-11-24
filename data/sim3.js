/* Bộ tình huống BHXH và thanh tra lao động. Cùng khung với sim.js. */
SCEN.push(

{id:"s_bhxh_trondong",role:"Nhân sự - tiền lương",topic:"bhxh",level:3,make:function(R){
  var N=R.int(8,60),d=R.step(2e6,8e6,500e3),m=R.int(4,14),days=R.int(60,300),miss=Math.round(N*d*m*0.32),li=Math.round(miss*0.0003*days);
  return {title:"Kê khai lương đóng BHXH thấp hơn lương thực trả",
   facts:[R.co()+" có "+N+" lao động. Hợp đồng ghi lương đóng BH thấp hơn lương thực trả bình quân "+R.m(d)+" đồng/người/tháng, kéo dài "+m+" tháng (phần chênh trả dưới dạng phụ cấp ngoài hợp đồng).",
    "Cơ quan BHXH phát hiện sau khi đối chiếu tờ khai TNCN. Giả định chưa vượt trần đóng; tổng tỷ lệ NLĐ + DN = 32% (BHXH, BHYT, BHTN).",
    "Công ty không khắc phục sau 60 ngày kể từ khi bị phát hiện; số ngày tính lãi trung bình "+days+" ngày."],
   stages:[
    simMC("Hành vi này được xác định là gì?","Khai mức lương đóng thấp hơn thực tế và không khắc phục sau 60 ngày: trốn đóng BHXH",["Chỉ là chậm đóng","Không vi phạm vì phụ cấp không phải lương","Chỉ là sai sót kế toán, không bị xử lý"],"Theo NĐ 274/2025 (tóm tắt): kê khai lương thấp hơn thực tế mà quá 60 ngày không khắc phục là trốn đóng."),
    {type:"num",q:"Số tiền BHXH, BHYT, BHTN còn thiếu (NLĐ + DN, 32%), đồng?",ans:miss,unit:"đồng",tol:Math.max(1000,Math.round(miss*0.005)),e:N+" × "+R.m(d)+" × "+m+" × 32% = "+R.m(miss)+" đồng."},
    {type:"num",q:"Lãi 0,03%/ngày tính trên số tiền thiếu cho "+days+" ngày (đồng)?",ans:li,unit:"đồng",tol:Math.max(1000,Math.round(li*0.005)),e:R.m(miss)+" × 0,03% × "+days+" = "+R.m(li)+" đồng."},
    {type:"free",q:"Bạn xử lý thế nào để giảm thiệt hại và tránh lặp lại?",chk:["dieu chinh","nop du","lai","hop dong","phu luc","giai trinh"],model:["Điều chỉnh mức lương đóng, lập phụ lục hợp đồng đúng thực tế","Nộp đủ số tiền thiếu và lãi, giữ chứng từ nộp","Giải trình bằng văn bản với cơ quan BHXH, hợp tác khi thanh tra","Rà soát mọi khoản chi trả cho người lao động, quy chế lương rõ ràng, đối chiếu 3 số cuối quý"]}],
   law:"Luật BHXH 2024; NĐ 274/2025 (mốc 60 ngày, lãi 0,03%/ngày)",
   lesson:"Chênh lệch giữa lương thực trả, lương đóng BH và quỹ lương trên tờ khai TNCN là dấu hiệu dễ thấy nhất.",
   warn:"Quy định về khoản tiền tính vào lương đóng BHXH (phụ cấp, bổ sung) theo Luật BHXH 2024 và nghị định hướng dẫn; mức phạt nằm ở NĐ 283/2026: đối chiếu văn bản gốc."};}},

{id:"s_bhxh_chuyen",role:"Nhân sự - tiền lương",topic:"bhxh",level:3,make:function(R){
  var c=R.pick(["a","b","c"]),dd=R.int(46,80),ans=c==="c"?dd+15:61;
  var facts=c==="a"?["Công ty có người lao động đủ điều kiện tham gia BHXH bắt buộc nhưng chưa đăng ký. Hôm nay là ngày thứ 40 kể từ hết hạn đăng ký."]:
   c==="b"?["Công ty chậm đóng BHXH. Cơ quan BHXH gửi văn bản đôn đốc vào ngày thứ "+R.int(10,40)+" sau hạn chậm nhất (trong 45 ngày). Công ty vẫn chưa nộp."]:
   ["Công ty chậm đóng BHXH. Cơ quan BHXH gửi văn bản đôn đốc vào ngày thứ "+dd+" sau hạn chậm nhất (sau 45 ngày)."];
  return {title:"Từ chậm đóng sang trốn đóng: mốc thời gian",
   facts:facts.concat(["Bạn là chuyên viên nhân sự cần cảnh báo ban giám đốc về mốc trở thành trốn đóng."]),
   stages:[
    {type:"num",q:c==="a"?"Hành vi bị coi là trốn đóng từ ngày thứ mấy kể từ hết hạn đăng ký?":c==="b"?"Với trường hợp đã đôn đốc trong 45 ngày, trốn đóng từ ngày thứ mấy kể từ hạn chậm nhất?":"Trường hợp đôn đốc sau 45 ngày: trốn đóng từ ngày thứ mấy kể từ hạn chậm nhất (tính cả 15 ngày sau văn bản)?",ans:ans,unit:"ngày",e:c==="c"?"Văn bản đôn đốc gửi ngày "+dd+"; trốn đóng sau 15 ngày kể từ ngày ban hành: ngày "+(dd+15)+".":"Mốc là quá 60 ngày, tức tính từ ngày thứ 61."},
    simMC("Công ty gặp bão lụt nghiêm trọng làm ngừng hoạt động. Điều gì đúng?","Không bị coi là trốn đóng nếu chứng minh được nguyên nhân bất khả kháng và gửi hồ sơ đúng hạn",["Tự động miễn mọi nghĩa vụ","Vẫn bị coi là trốn đóng","Chỉ cần gọi điện báo"],"NĐ 274/2025 loại trừ thiên tai, dịch bệnh, tình trạng khẩn cấp, bất khả kháng; hồ sơ phải gửi đúng thời hạn quy định."),
    {type:"num",q:"Công ty chậm đóng 400 triệu đồng trong 30 ngày. Lãi 0,03%/ngày là bao nhiêu (đồng)?",ans:3600000,unit:"đồng",e:"400.000.000 × 0,03% × 30 = 3.600.000 đồng."}],
   law:"NĐ 274/2025/NĐ-CP (Điều 3, 4, 6, 7 theo bài tóm tắt); Luật BHXH 2024 (khoản 1 Điều 28)",
   lesson:"Đếm ngày từ mốc đôn đốc và hạn chậm nhất, ghi lịch cảnh báo 45 ngày và 60 ngày cho từng khoản chậm đóng.",
   warn:"Các mốc ngày lấy từ bài tóm tắt NĐ 274/2025 của luatvietnam.vn; đối chiếu nguyên văn trước khi áp dụng."};}},

{id:"s_bhxh_hoso",role:"Nhân sự - tiền lương",topic:"bhxh",level:2,make:function(R){
  var n=R.int(15,120);
  return {title:"Đoàn kiểm tra BHXH yêu cầu hồ sơ",
   facts:[R.co()+" ("+n+" lao động) nhận thông báo kiểm tra việc đóng BHXH, BHYT, BHTN năm "+R.pick(["2025","2026"])+".","Đoàn yêu cầu cung cấp hồ sơ trong 5 ngày làm việc."],
   stages:[
    {type:"free",q:"Liệt kê hồ sơ bạn chuẩn bị và việc đối chiếu nội bộ trước khi nộp.",chk:["hop dong","bang luong","cham cong","to khai","chung tu nop","thang bang luong"],model:["Hợp đồng lao động, phụ lục, quyết định tăng lương, nghỉ việc","Bảng lương, chấm công, chứng từ trả lương qua ngân hàng","Tờ khai, thông báo đóng và chứng từ nộp BHXH, BHYT, BHTN","Quỹ lương trên tờ khai TNCN ↔ quỹ lương đóng BH ↔ sổ kế toán","Thang bảng lương, quy chế lương, danh sách tăng giảm lao động"]},
    simMC("Khi đối chiếu bạn phát hiện 3 người làm việc nhưng chưa báo tăng lao động. Nên làm gì trước khi nộp hồ sơ?","Báo tăng ngay, nộp đủ bảo hiểm và lãi, chuẩn bị giải trình bằng văn bản",["Xóa tên khỏi bảng lương","Làm hợp đồng lùi ngày","Không nộp hồ sơ"],"Khắc phục trước và giải trình trung thực; không sửa chứng từ."),
    simMC("Cách ghi nhận khi không đồng ý nội dung biên bản?","Ghi ý kiến bảo lưu, nêu rõ lý do và chứng cứ sẽ bổ sung, giữ bản biên bản",["Không ký và bỏ về","Ký cho xong","Xé biên bản"],"Hợp tác nhưng bảo lưu quyền giải trình; mọi bổ sung bằng văn bản.")],
   law:"Luật BHXH 2024; NĐ 274/2025; Luật Thanh tra 2025",
   lesson:"Hồ sơ BHXH nên được rà soát ba chiều: lương thực trả, lương đóng BH và quỹ lương trên tờ khai thuế.",warn:""};}},

{id:"s_ld_noiquy",role:"Nhân sự - tiền lương",topic:"laodong",level:1,make:function(R){
  var n=R.pick([7,8,9,10,12,14,25,40]),big=n>=10;
  return {title:"Nội quy lao động của doanh nghiệp nhỏ",
   facts:[R.co()+" có "+n+" người lao động và chưa có nội quy lao động bằng văn bản; mọi quy định nói miệng."],
   stages:[
    simMC("Doanh nghiệp có phải ban hành nội quy lao động bằng văn bản không?",big?"Có, vì từ 10 người lao động trở lên phải có nội quy bằng văn bản":"Không bắt buộc bằng văn bản vì dưới 10 người lao động, nhưng vẫn phải có quy định và thông báo",
     big?["Không, chỉ cần thỏa thuận miệng","Chỉ khi có công đoàn","Chỉ khi khách hàng yêu cầu"]:["Có, bắt buộc đăng ký nội quy với cơ quan quản lý","Không cần quy định gì","Chỉ khi khách hàng yêu cầu"],
     "BLLĐ 2019 Điều 118: người sử dụng lao động từ 10 người lao động trở lên phải có nội quy bằng văn bản."),
    big?simMC("Sau khi ban hành, doanh nghiệp phải làm gì?","Đăng ký nội quy lao động với cơ quan quản lý nhà nước về lao động có thẩm quyền trong thời hạn quy định",["Không cần đăng ký","Chỉ cần niêm yết","Chỉ cần gửi cho công đoàn"],"Điều 119: phải đăng ký nội quy lao động (sau ban hành); có hiệu lực sau 15 ngày kể từ ngày cơ quan nhận hồ sơ.")
      :simMC("Doanh nghiệp xử lý kỷ luật người lao động khi chưa có nội quy bằng văn bản được không?","Rất rủi ro: kỷ luật phải căn cứ hành vi vi phạm đã được quy định trong nội quy hoặc hợp đồng",["Được tùy ý","Được nếu có chủ tịch đồng ý","Luôn được"],"Kỷ luật lao động phải dựa trên nội quy, hợp đồng hoặc thỏa ước.")],
   law:"Bộ luật Lao động 2019 (Điều 118, 119)",
   lesson:"Nội quy là cơ sở của kỷ luật lao động: thiếu nội quy thì rất khó xử lý vi phạm hợp pháp.",
   warn:"Cơ quan nhận đăng ký nội quy có thể đổi sau sắp xếp chính quyền địa phương."};}},

{id:"s_ld_luongtre",role:"Nhân sự - tiền lương",topic:"luong",level:2,make:function(R){
  var N=R.int(10,80),L=R.step(7e6,16e6,500e3),days=R.pick([5,10,15,20,25,30,45]),rate=R.pick([4.5,4.7,5.0,5.2]),tot=N*L,li=Math.round(tot*rate/100*days/365);
  return {title:"Trả lương chậm cho người lao động",
   facts:[R.co()+" trả lương chậm cho "+N+" người, mỗi người "+R.m(L)+" đồng/tháng, chậm "+days+" ngày so với kỳ hạn.","Lãi suất huy động tiền gửi 12 tháng do ngân hàng nơi công ty mở tài khoản trả lương công bố: "+rate+"%/năm."],
   stages:[
    simMC("Nghĩa vụ phát sinh khi trả lương chậm?",days>=15?"Từ 15 ngày trở lên phải trả thêm khoản tiền ít nhất bằng lãi tiền gửi 12 tháng trên số tiền chậm":"Chưa tới 15 ngày: chưa bắt buộc trả lãi theo quy định, nhưng vẫn là vi phạm kỳ hạn trả lương",
     [days>=15?"Không phát sinh nghĩa vụ gì":"Phải trả lãi gấp đôi","Chỉ cần xin lỗi","Bồi thường 50% tiền lương"],"BLLĐ 2019 Điều 97: trả chậm từ 15 ngày trở lên phải trả thêm khoản tiền ít nhất bằng lãi suất tiền gửi 12 tháng."),
    {type:"num",q:"Khoản tiền lãi tối thiểu tính cho tổng quỹ lương bị chậm (nếu chậm ≥ 15 ngày; nếu dưới 15 ngày nhập số tính theo công thức vẫn dùng để so sánh), đồng?",ans:li,unit:"đồng",tol:Math.max(1000,Math.round(li*0.005)),e:R.m(tot)+" × "+rate+"% × "+days+"/365 = "+R.m(li)+" đồng."},
    {type:"free",q:"Về kế toán và thuế, bạn xử lý khoản lãi trả thêm này thế nào?",chk:["chi phi","635","tai chinh","chung tu","khong phai luong"],model:["Khoản trả thêm cho người lao động do chậm lương: ghi nhận chi phí (thường vào chi phí tài chính hoặc chi phí khác theo bản chất)","Lập chứng từ chi trả cho từng người; xem xét tính chất để xác định thu nhập chịu thuế TNCN của người nhận","Xem điều kiện chi phí được trừ TNDN: có chứng từ và liên quan hoạt động"]}],
   law:"Bộ luật Lao động 2019 (Điều 97); NĐ 145/2020",
   lesson:"Trả lương chậm là lỗi thường gặp nhất trong thanh tra lao động: lập lịch dòng tiền để lương luôn trả đúng hạn.",
   warn:"Cách hạch toán và tính chất thuế TNCN của khoản lãi cần xem thêm hướng dẫn thuế."};}},

{id:"s_ld_luongtt",role:"Nhân sự - tiền lương",topic:"luong",level:2,make:function(R){
  var v=R.pick([["I",5310000],["II",4730000],["III",4140000],["IV",3700000]]),pay=Math.round(v[1]*R.int(86,97)/100/10000)*10000,m=R.int(3,12),N=R.int(5,40),gap=(v[1]-pay),tot=gap*N*m;
  return {title:"Lương thấp hơn lương tối thiểu vùng",
   facts:[R.co()+" ở vùng "+v[0]+" trả "+N+" lao động giản đơn (chưa qua đào tạo) mức "+R.m(pay)+" đồng/tháng trong "+m+" tháng của năm 2026.","Lương tối thiểu vùng "+v[0]+" từ 1/1/2026 là "+R.m(v[1])+" đồng/tháng."],
   stages:[
    {type:"num",q:"Mỗi người bị thiếu bao nhiêu đồng mỗi tháng so với lương tối thiểu?",ans:gap,unit:"đồng",e:R.m(v[1])+" - "+R.m(pay)+" = "+R.m(gap)+" đồng."},
    {type:"num",q:"Tổng số tiền công ty phải truy trả bù cho toàn bộ người lao động (đồng)?",ans:tot,unit:"đồng",e:R.m(gap)+" × "+N+" × "+m+" = "+R.m(tot)+" đồng."},
    simMC("Với người lao động đã qua học nghề, mức lương thấp nhất?","Cao hơn ít nhất 7% so với lương tối thiểu vùng",["Bằng lương tối thiểu vùng","Cao hơn 20%","Không có quy định"],"Theo quy định về lương tối thiểu: lao động đã qua học nghề phải cao hơn ít nhất 7%.")],
   law:"NĐ 293/2025/NĐ-CP (lương tối thiểu vùng từ 1/1/2026); Bộ luật Lao động 2019 (Điều 91)",
   lesson:"Khi lương tối thiểu vùng tăng, phải rà soát cả thang bảng lương và các khoản đóng BH vì mức đóng thấp nhất cũng tăng.",
   warn:"Phân vùng theo địa bàn có thể đổi sau sắp xếp đơn vị hành chính: kiểm tra danh mục vùng hiện hành."};}},

{id:"s_ld_otnam",role:"Nhân sự - tiền lương",topic:"chamcong",level:2,make:function(R){
  var h=[],i,t=0;for(i=0;i<12;i++){var x=R.int(8,28);h.push(x);t+=x;}
  var over=Math.max(0,t-200);
  return {title:"Giờ làm thêm trong năm của một người lao động",
   facts:["Số giờ làm thêm mỗi tháng của một nhân viên sản xuất (ngành không thuộc diện đặc thù): "+h.join(", ")+" giờ."],
   stages:[
    {type:"num",q:"Tổng giờ làm thêm cả năm?",ans:t,unit:"giờ",e:"Tổng các tháng = "+t+" giờ."},
    simMC("So với giới hạn của luật?",t>200?"Vượt giới hạn 200 giờ/năm: vi phạm; phải điều chỉnh kế hoạch sản xuất và tuyển bổ sung":"Chưa vượt 200 giờ/năm; còn phải kiểm tra từng tháng không vượt 40 giờ và sự đồng ý của người lao động",
     t>200?["Không vi phạm vì người lao động đồng ý","Giới hạn là 500 giờ/năm","Không có giới hạn nếu trả đủ 150%"]:["Đã vượt giới hạn và vi phạm","Giới hạn là 100 giờ/năm","Không có giới hạn"],"BLLĐ 2019 và NĐ 145/2020: tối đa 40 giờ/tháng, 200 giờ/năm (300 giờ với ngành nghề đặc thù, phải thông báo cơ quan quản lý).")],
   law:"Bộ luật Lao động 2019 (Điều 107); NĐ 145/2020 (Điều 59)",
   lesson:"Phần mềm chấm công cần cảnh báo lũy kế làm thêm theo tháng và năm cho từng người.",
   warn:"Ngành đặc thù được làm thêm đến 300 giờ/năm theo danh mục của Chính phủ."};}},

{id:"s_ld_dauthanhtra",role:"Nhân sự - tiền lương",topic:"laodong",level:2,make:function(R){
  var n=R.int(12,150);
  return {title:"Đoàn thanh tra lao động đến doanh nghiệp",
   facts:[R.co()+" ("+n+" người lao động) nhận quyết định thanh tra việc chấp hành pháp luật lao động, an toàn vệ sinh lao động và BHXH.","Quyết định nêu thời hạn thanh tra và đề nghị cung cấp hồ sơ sau 3 ngày làm việc."],
   stages:[
    {type:"free",q:"Liệt kê hồ sơ và 5 việc rà soát nội bộ nhanh nhất để giảm rủi ro.",chk:["hop dong","noi quy","thang bang luong","so quan ly lao dong","cham cong","bhxh","an toan"],model:["Hợp đồng lao động, nội quy đã đăng ký, thang bảng lương, sổ quản lý lao động","Bảng lương, chấm công, giờ làm thêm, chứng từ trả lương","Hồ sơ BHXH, BHYT, BHTN, thông báo đóng","Hồ sơ an toàn, vệ sinh lao động, huấn luyện, khám sức khỏe","Rà soát: lương tối thiểu, làm thêm giờ, nghỉ phép, hợp đồng hết hạn, trả lương đúng hạn"]},
    simMC("Khi phát hiện thiếu sót ngay trước ngày đoàn đến, bạn nên?","Khắc phục thật (ký bổ sung, đăng ký, nộp đủ) và ghi nhận trung thực; không làm giả hoặc lùi ngày chứng từ",["Làm hợp đồng lùi ngày","Giấu hồ sơ","Nhờ người lao động nói không có vấn đề"],"Làm giả hồ sơ là hành vi vi phạm nghiêm trọng hơn lỗi ban đầu."),
    simMC("Sau khi nhận kết luận có yêu cầu khắc phục, việc cần làm?","Lập kế hoạch khắc phục có thời hạn, gửi báo cáo kết quả khắc phục, lưu hồ sơ; nếu không đồng ý nội dung thì khiếu nại đúng hạn",["Bỏ qua nếu mức phạt thấp","Chỉ khắc phục miệng","Chờ lần thanh tra sau"],"Thực hiện kết luận và báo cáo kết quả khắc phục theo thời hạn nêu trong kết luận.")],
   law:"Luật Thanh tra 2025; Bộ luật Lao động 2019; NĐ 145/2020; NĐ 283/2026 (theo báo chí)",
   lesson:"Thanh tra không phải kỳ thi bất ngờ nếu hồ sơ lao động được rà soát hằng quý.",
   warn:"Quy trình thanh tra chi tiết theo Luật Thanh tra 2025 và nghị định hướng dẫn mới: đối chiếu văn bản hiện hành."};}}

);
