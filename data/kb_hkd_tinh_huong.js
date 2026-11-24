/* Tình huống xử lý thanh tra, kiểm tra đối với HỘ KINH DOANH. Mỗi thẻ cùng khung: Tình huống → CQT thấy gì → Làm ngay → Hồ sơ → Sai lầm → Nếu có sai.
   Căn cứ chung: Luật QLT 108/2025, NĐ 68/2026 + NĐ 141/2026, TT 18/2026, TT 94/2026, QĐ 1161/QĐ-CT. Mức phạt/ngưỡng cụ thể: tra văn bản hiện hành. */
KB.push(

{id:"ktra_h1",d:"thue",t:"HKD tình huống 1 - Doanh thu kê khai thấp hơn tiền vào tài khoản ngân hàng",conf:2,v:"11/2026",
 law:"Luật QLT 108/2025 (giải trình, khai bổ sung); NĐ 68/2026, NĐ 141/2026; TT 94/2026 (đối chiếu dữ liệu)",
 sec:[
 {h:"Tình huống",l:["Hộ khai doanh thu cả năm 900 triệu; ngân hàng cung cấp dữ liệu cho thấy tài khoản dùng kinh doanh nhận 1,6 tỷ. Cơ quan thuế gửi thông báo giải trình qua cổng thuế hoặc điện thoại/tin nhắn."]},
 {h:"Cơ quan thuế nhìn thấy gì",l:["Tổng tiền vào so với doanh thu kê khai; số giao dịch lặp lại; tiền vào từ nhiều người lạ; tiền vào trùng thời điểm bán hàng.","Họ chưa kết luận trốn thuế: đây là cảnh báo để yêu cầu giải trình."]},
 {h:"Việc cần làm ngay (trong thời hạn thông báo)",l:["Tải sao kê cả năm của mọi tài khoản dùng kinh doanh và tách từng khoản tiền vào thành 2 nhóm: doanh thu; không phải doanh thu (vay mượn, góp vốn, chuyển nội bộ giữa tài khoản của chính mình, hoàn tiền, tiền hộ).","Mỗi khoản không phải doanh thu phải có chứng cứ: hợp đồng vay, giấy biên nhận, tin nhắn xác nhận, sao kê tài khoản bên chuyển.","Đối chiếu với sổ doanh thu hằng ngày, hóa đơn bán ra, báo cáo máy tính tiền; lập bảng chênh lệch: Tổng tiền vào - khoản không phải doanh thu = doanh thu thực; so với số đã khai."]},
 {h:"Hồ sơ nên có",l:["Sao kê, bảng tách khoản, chứng từ giải thích từng khoản lớn, sổ doanh thu, hóa đơn, hợp đồng bán hàng, hóa đơn mua vào cùng kỳ.","Văn bản giải trình ký tên, có danh mục tài liệu kèm theo; giữ bản gửi đi và xác nhận đã nộp."]},
 {h:"Sai lầm hay gặp",l:["Phủ nhận mọi khoản hoặc không trả lời đúng hạn (dễ bị chuyển sang kiểm tra tại nơi kinh doanh).","Giải thích miệng rằng «tiền của người thân» mà không có chứng cứ.","Dùng chung tài khoản cá nhân cho việc riêng và kinh doanh, nên phải chứng minh từng khoản."]},
 {h:"Nếu thực sự có sai",l:["Khai bổ sung hồ sơ khai thuế các kỳ liên quan (tối đa 5 năm), nộp đủ thuế còn thiếu và tiền chậm nộp (0,03%/ngày); khai trước khi có quyết định kiểm tra thì thường được giảm nặng mức xử phạt.","Từ đây tách bạch tài khoản kinh doanh, ghi sổ doanh thu mỗi ngày."]}
 ],
 warn:"Không có «mức chênh lệch được phép». Mọi khoản tiền vào đều có thể bị hỏi, nhưng không phải khoản nào cũng là doanh thu: gánh nặng là chứng minh được.",
 tip:"Mỗi tháng đối chiếu: tổng tiền vào ngân hàng ↔ sổ doanh thu, ghi chú tên từng khoản không phải doanh thu ngay khi phát sinh.",
 q:"Hộ khai doanh thu 900 triệu nhưng tài khoản kinh doanh nhận 1,6 tỷ, nhận thông báo giải trình. Trình tự xử lý?",chk:["sao ke","tach","khong phai doanh thu","chung tu","khai bo sung"]},

{id:"ktra_h2",d:"thue",t:"HKD tình huống 2 - Hàng tồn kho không khớp hóa đơn mua vào và doanh thu",conf:2,v:"11/2026",
 law:"NĐ 68/2026 (sổ sách hộ kinh doanh); NĐ 123/2020 và NĐ 70/2025 về hóa đơn; TT 94/2026",
 sec:[
 {h:"Tình huống",l:["Hộ bán hàng hóa. Tổng hóa đơn mua vào cả năm lớn hơn nhiều so với doanh thu kê khai, hoặc cán bộ kiểm tra tại cửa hàng thấy lượng hàng tồn vượt xa số sổ sách."]},
 {h:"Logic cơ quan thuế dùng",l:["Giá vốn ước tính = đầu kỳ + mua vào - tồn cuối kỳ. Doanh thu kê khai thấp hơn giá vốn là dấu hiệu bán hàng chưa kê khai, hoặc tồn kho đã bị ghi nhận thiếu.","Ngược lại tồn kho thực tế thấp hơn sổ: nghi bán không xuất hóa đơn."]},
 {h:"Việc cần làm ngay",l:["Kiểm kê thực tế, lập biên bản kiểm kê ký xác nhận, đối chiếu với sổ nhập xuất tồn.","Giải thích chênh lệch bằng chứng từ: hàng hư hỏng, khuyến mại, trả lại nhà cung cấp, hàng gửi bán, hàng nhập cuối năm chưa bán.","Làm bảng: tồn đầu + mua - tồn cuối = giá vốn; so với doanh thu và tỷ suất lợi nhuận gộp thông thường của ngành."]},
 {h:"Hồ sơ nên có",l:["Hóa đơn đầu vào có thanh toán không dùng tiền mặt đối với khoản lớn, phiếu nhập kho, sổ chi tiết hàng hóa, biên bản kiểm kê, chứng từ xử lý hàng hỏng."]},
 {h:"Sai lầm hay gặp",l:["Mua hàng không hóa đơn nhưng lại không ghi vào sổ, nên tồn thực tế cao hơn sổ.","Không có sổ nhập xuất tồn, chỉ có hóa đơn rời.","Sửa số sau khi nhận thông báo."]},
 {h:"Nếu có sai",l:["Hàng thừa không có hóa đơn: lập chứng từ giải trình nguồn gốc; không giải trình được thì bị xử lý theo quy định hóa đơn và có thể truy thu thuế.","Điều chỉnh sổ và khai bổ sung nếu doanh thu bị bỏ sót."]}
 ],
 tip:"Hộ bán hàng hóa nên kiểm kê định kỳ theo quý và giữ biên bản; lệch lớn làm rõ ngay trong kỳ.",
 q:"Kiểm tra thấy tồn kho thực tế cao hơn sổ rất nhiều và hóa đơn mua vào lớn hơn doanh thu kê khai. Cơ quan thuế nghi ngờ gì và hộ cần giải trình thế nào?",chk:["ton kho","kiem ke","gia von","hoa don","bien ban"]},

{id:"ktra_h3",d:"thue",t:"HKD tình huống 3 - Bán qua sàn thương mại điện tử, livestream, ví điện tử",conf:2,v:"11/2026",
 law:"Luật QLT 108/2025 (nghĩa vụ của tổ chức quản lý nền tảng); NĐ 68/2026; TT 94/2026 (nhóm tiêu chí kinh tế số)",
 sec:[
 {h:"Tình huống",l:["Hộ vừa bán tại cửa hàng vừa bán trên sàn, livestream, nhận tiền qua ví điện tử. Cơ quan thuế nhận dữ liệu từ sàn và ngân hàng và so với doanh thu kê khai."]},
 {h:"Cơ quan thuế nhìn thấy gì",l:["Doanh thu sàn ghi nhận theo mã số thuế/định danh của hộ; số đơn hoàn, hủy; thu nhập qua ví.","Khai báo chỉ có doanh thu tại cửa hàng, còn kênh online bỏ trống là mâu thuẫn rõ."]},
 {h:"Việc cần làm ngay",l:["Xuất báo cáo doanh thu từ từng sàn/ví theo kỳ, đối chiếu với sao kê ngân hàng và sổ doanh thu.","Phân biệt: doanh thu gộp, phí sàn, hoàn tiền, trợ giá; kiểm tra xem sàn đã khấu trừ, nộp thay thuế cho hộ hay chưa (nếu có) để không khai trùng hoặc thiếu.","Gộp doanh thu mọi kênh để xét ngưỡng doanh thu và nhóm ngành của hộ."]},
 {h:"Hồ sơ nên có",l:["Báo cáo đối soát của sàn, sao kê ví, sao kê ngân hàng, đơn hàng hoàn/hủy, hóa đơn (nếu thuộc diện lập hóa đơn)."]},
 {h:"Sai lầm hay gặp",l:["Chỉ khai doanh thu cửa hàng, quên kênh online.","Nhập nhằng giữa ví cá nhân và ví kinh doanh.","Không giữ báo cáo đối soát nên sau này không chứng minh được khoản hoàn tiền."]},
 {h:"Nếu có sai",l:["Khai bổ sung theo từng kỳ bị thiếu, nộp thuế và tiền chậm nộp; tách tài khoản/ví kinh doanh từ kỳ sau."]}
 ],
 warn:"Luật 56/2024 (khoản 4a Điều 42 Luật QLT 38/2019, đã đọc nguyên văn) quy định sàn thương mại điện tử/nền tảng số có chức năng thanh toán khấu trừ, nộp thuế thay hộ kinh doanh; hộ không thuộc diện khấu trừ phải tự đăng ký, khai, nộp. Phạm vi và tỷ lệ chi tiết do Chính phủ quy định: tra nghị định hướng dẫn (Luật QLT 108/2025 thay thế từ 01/7/2026).",
 tip:"Cuối mỗi tháng tải báo cáo đối soát của sàn và ghi vào sổ doanh thu theo kênh.",
 q:"Hộ bán cửa hàng và bán trên sàn, chỉ kê khai doanh thu cửa hàng. Dữ liệu sàn khiến cơ quan thuế phát hiện điều gì và hộ xử lý ra sao?",chk:["doanh thu","san","doi chieu","khai bo sung","gop"]},

{id:"ktra_h4",d:"thue",t:"HKD tình huống 4 - Đoàn kiểm tra đến tận nơi kinh doanh: ứng xử từng bước",conf:2,v:"11/2026",
 law:"Luật QLT 108/2025; QĐ 1161/QĐ-CT (quy trình kiểm tra từ 14/8/2026); NĐ 252/2026",
 sec:[
 {h:"Tình huống",l:["Một đoàn cán bộ thuế đến cửa hàng, nói kiểm tra việc lập hóa đơn, ghi sổ, tồn hàng."]},
 {h:"Ngay khi đoàn đến",l:["Lịch sự mời vào, nhờ xuất trình thẻ công chức/giấy tờ và quyết định kiểm tra (hoặc văn bản giao nhiệm vụ); đọc kỹ số, ngày, phạm vi, thời hạn, thành phần đoàn.","Kiểm tra thẩm quyền: quyết định phải do người có thẩm quyền ký; phạm vi kiểm tra chỉ trong nội dung đã ghi.","Chưa có quyết định hợp lệ thì chưa yêu cầu cung cấp hồ sơ ngoài việc hướng dẫn đúng quy định; cần hỏi rõ đây là kiểm tra hay tuyên truyền, nhắc nhở."]},
 {h:"Trong lúc làm việc",l:["Cử một người đại diện làm việc; ghi chép (thời gian, ai hỏi, hỏi gì, tài liệu nào bị lấy).","Cung cấp đúng tài liệu được yêu cầu, giao bản sao có xác nhận; giữ bản gốc; lập danh mục tài liệu bàn giao có ký nhận.","Không tự ý chỉnh sửa sổ sách, hóa đơn, dữ liệu máy tính tiền, không xóa tin nhắn."]},
 {h:"Biên bản",l:["Đọc toàn bộ biên bản trước khi ký. Không đồng ý nội dung nào thì ghi ý kiến bảo lưu vào biên bản, ghi rõ lý do và chứng cứ sẽ bổ sung.","Xin bản sao biên bản; ghi hạn nộp giải trình."]},
 {h:"Sau buổi làm việc",l:["Lập văn bản giải trình, bổ sung chứng từ trong thời hạn; nếu cần, nhờ kế toán/luật sư.","Có kết luận hoặc quyết định xử phạt mà không đồng ý: quyền khiếu nại, khởi kiện theo luật; ghi lại thời hạn."]}
 ],
 warn:"Thành viên đoàn, thời hạn, nội dung phải đúng quyết định. Thái độ hợp tác và hồ sơ sẵn sàng thường quyết định kết quả hơn việc tranh luận tại chỗ.",
 tip:"Dán sẵn ở quầy: danh sách tài liệu cần có (sổ doanh thu, hóa đơn mua vào, báo cáo thuế, kiểm kê) và số điện thoại kế toán hỗ trợ.",
 q:"Đoàn kiểm tra thuế đến cửa hàng. Bạn kiểm tra những gì trước khi cung cấp hồ sơ và ghi biên bản thế nào?",chk:["quyet dinh","tham quyen","pham vi","bien ban","y kien"]},

{id:"ktra_h5",d:"thue",t:"HKD tình huống 5 - Doanh thu sát ngưỡng, chia nhỏ hộ, nhiều địa điểm kinh doanh",conf:2,v:"11/2026",
 law:"NĐ 68/2026, NĐ 141/2026 (ngưỡng doanh thu 1 tỷ đồng), TT 18/2026; kiểm tra thông tin hợp nhất trước khi áp dụng",
 sec:[
 {h:"Tình huống",l:["Hộ có doanh thu năm gần ngưỡng miễn thuế/thay đổi phương pháp, hoặc một người đứng tên nhiều hộ/nhiều địa điểm để mỗi hộ nằm dưới ngưỡng."]},
 {h:"Cơ quan thuế nhìn thấy gì",l:["Cùng một người, cùng địa chỉ, cùng tài khoản nhận tiền, cùng người lao động, cùng nhà cung cấp.","Doanh thu mỗi hộ tách nhỏ vừa dưới ngưỡng trong khi tổng thực tế lớn."]},
 {h:"Điều cần hiểu",l:["Ngưỡng xét theo từng hộ/cá nhân kinh doanh, nhưng một cá nhân chỉ được là một hộ kinh doanh; nhiều địa điểm của cùng một hộ thì cộng doanh thu.","Tách hộ mà bản chất là một hoạt động có thể bị xác định lại là chia nhỏ để né thuế."]},
 {h:"Việc cần làm",l:["Rà lại xem một người có đang đứng tên nhiều hộ hay không; nếu có, đăng ký theo đúng một hộ, nhiều địa điểm.","Tính tổng doanh thu mọi địa điểm và mọi kênh bán, theo năm dương lịch, để xác định phương pháp kê khai và nghĩa vụ thuế.","Nếu gần ngưỡng: theo dõi hằng tháng; chuẩn bị chuyển sang chế độ có nghĩa vụ kê khai/hóa đơn khi vượt."]},
 {h:"Sai lầm hay gặp",l:["Chia cửa hàng cho người thân đứng tên nhưng vẫn điều hành, thu tiền chung một tài khoản.","Không cộng doanh thu các kênh online.","Giảm doanh thu cuối năm để «vừa dưới ngưỡng»."]},
 {h:"Nếu bị hỏi",l:["Chứng minh từng hộ độc lập thật sự: vốn, địa điểm, nhân sự, tài khoản, hóa đơn riêng. Không chứng minh được thì bị tính gộp và truy thu."]}
 ],
 warn:"Các ngưỡng và cách tính cho giai đoạn chuyển đổi 2026 đã thay đổi nhanh (NĐ 68, NĐ 141): luôn đối chiếu bản hợp nhất hiện hành.",
 tip:"Lập bảng theo dõi doanh thu lũy kế từng tháng của mọi địa điểm và kênh, cảnh báo khi đạt 80% ngưỡng.",
 q:"Một người đứng tên hai cửa hàng khác phố, mỗi nơi 700 triệu/năm, thu tiền vào cùng một tài khoản. Rủi ro gì và hướng xử lý?",chk:["mot ho","cong","chia nho","tai khoan","truy thu"]},

{id:"ktra_h6",d:"thue",t:"HKD tình huống 6 - Mua hàng không hóa đơn, hóa đơn đầu vào có vấn đề",conf:2,v:"11/2026",
 law:"Luật QLT 108/2025; NĐ 123/2020 và NĐ 70/2025; NĐ 254/2026 + TT 91/2026 (hóa đơn thay thế); quy định về chứng từ đầu vào hộ kinh doanh",
 sec:[
 {h:"Tình huống",l:["Hộ mua hàng của nhiều nơi nhỏ không xuất hóa đơn, hoặc hóa đơn mua vào bị thông báo là của doanh nghiệp bỏ trốn/hóa đơn không hợp pháp."]},
 {h:"Điểm cần phân biệt",l:["Hộ chịu thuế theo tỷ lệ trên doanh thu: chi phí đầu vào không quyết định số thuế, nhưng hóa đơn đầu vào vẫn là bằng chứng nguồn gốc hàng hóa và là cơ sở để đối chiếu giá vốn.","Hộ thuộc diện tính thuế theo lợi nhuận (doanh thu lớn theo quy định) thì chi phí hợp lý, có hóa đơn, chứng từ mới được trừ."]},
 {h:"Mua hàng không hóa đơn",l:["Lập bảng kê mua hàng (theo mẫu quy định) cho trường hợp được phép; có tên, địa chỉ, giấy tờ người bán, chứng từ thanh toán.","Khoản lớn: thanh toán chuyển khoản; không dùng tiền mặt cho khoản mua vượt mức quy định để giữ được chứng từ hợp lệ."]},
 {h:"Hóa đơn đầu vào bị cảnh báo",l:["Khi nhận thông báo, đối chiếu thực tế: có giao hàng thật không (phiếu giao nhận, vận chuyển, hợp đồng), thanh toán qua đâu, bên bán là ai.","Hóa đơn của bên bỏ trốn nhưng giao dịch có thật và chứng từ đủ thì đưa đủ hồ sơ để chứng minh; không xử lý như hóa đơn mua bán trái phép."]},
 {h:"Sai lầm hay gặp",l:["Mua rẻ không hóa đơn, bán hàng có xuất hóa đơn → lệch giá vốn, bị nghi ngờ nguồn hàng.","Nhận hóa đơn của người không bán thật để «đủ chứng từ»: rủi ro hình sự và hành chính."]},
 {h:"Nếu có sai",l:["Loại bỏ chứng từ không hợp lệ, khai bổ sung, giải trình nguồn hàng; không tiếp tục mua từ nguồn không rõ."]}
 ],
 warn:"Quy định về hóa đơn đầu vào thay đổi theo NĐ 254/2026 và hướng dẫn mới: kiểm tra phạm vi áp dụng cho hộ kinh doanh trước khi áp dụng.",
 tip:"Khoản mua lớn thanh toán chuyển khoản và lưu hóa đơn, phiếu giao hàng cùng một bộ hồ sơ.",
 q:"Hộ nhận thông báo hóa đơn mua vào của nhà cung cấp bỏ trốn. Cần chứng minh những gì?",chk:["giao dich","thanh toan","phieu giao","hop dong","hoa don"]},

{id:"ktra_h7",d:"thue",t:"HKD tình huống 7 - Quy trình tổng quát khi nhận thông báo giải trình đến khi có kết luận",conf:2,v:"11/2026",
 law:"Luật QLT 108/2025; NĐ 252/2026; QĐ 1161/QĐ-CT; TT 94/2026",
 sec:[
 {h:"Bước 0 - Phân loại văn bản nhận được",l:["Thông báo nhắc nhở/giải trình trên cổng thuế: chưa phải kiểm tra, nhưng không được bỏ qua.","Quyết định kiểm tra tại nơi kinh doanh hoặc tại cơ quan thuế: có thời hạn, thành phần đoàn, nội dung.","Quyết định xử phạt hoặc ấn định thuế: có thời hạn nộp và quyền khiếu nại."]},
 {h:"Bước 1 - Đọc và lập hạn",l:["Ghi ngay ngày nhận, hạn trả lời, người nhận giải trình, cách nộp (cổng, trực tiếp, bưu điện).","Xin gia hạn bằng văn bản nếu cần thêm thời gian, trước khi hết hạn."]},
 {h:"Bước 2 - Tự rà trước khi trả lời",l:["Chạy đối chiếu: sổ doanh thu ↔ tờ khai ↔ hóa đơn ↔ ngân hàng ↔ tồn kho.","Phân loại chênh lệch: có giải thích được bằng chứng từ; do sai sót cần khai bổ sung; không giải thích được."]},
 {h:"Bước 3 - Trả lời",l:["Văn bản ngắn gọn: nêu số liệu, bảng đối chiếu, danh mục chứng từ; kèm bản scan có thể kiểm tra.","Nếu có sai: khai bổ sung đồng thời, nộp thuế và tiền chậm nộp rồi gửi chứng từ nộp tiền."]},
 {h:"Bước 4 - Kết luận",l:["Đồng ý: nộp phạt, thuế đúng hạn.","Không đồng ý: khiếu nại theo thời hạn luật định, giữ nguyên chứng cứ; xem xét hỗ trợ từ luật sư/tư vấn thuế.","Sau việc: sửa quy trình ghi sổ để không lặp lại."]}
 ],
 tip:"Giữ một thư mục «Hồ sơ thuế» theo năm: tờ khai, sổ, sao kê, hóa đơn mua và bán, biên bản; cập nhật hằng tháng để khi có thông báo chỉ cần trích xuất.",
 q:"Hộ nhận thông báo giải trình qua cổng thuế còn 5 ngày. Bốn việc đầu tiên bạn làm?",chk:["han","doi chieu","giai trinh","khai bo sung","chung tu"]}
);
