/* Mở rộng chủ đề BÁO CÁO TÀI CHÍNH (24/11/2026): B03 từng bước, thuế hoãn lại, checklist khóa sổ, lỗi thường gặp,
   thuyết minh, phân tích tỷ số, sai sót - sự kiện sau ngày khóa sổ. Mã số B01-B03 và nguyên tắc TK 821 đã đối chiếu TT 99/2025;
   phần thuyết minh và chuẩn mực VAS ghi conf 2 (nên đối chiếu bản hiện hành). */
KB.push(

{id:"bctc_10",d:"ketoan",t:"Lập BCTC 10 - Báo cáo lưu chuyển tiền tệ gián tiếp (B03): làm từng bước",conf:1,v:"11/2026",
 law:"Thông tư 99/2025/TT-BTC, Phụ lục IV (hướng dẫn lập B03 theo phương pháp gián tiếp)",
 sec:[
 {h:"Bước 1 - Bắt đầu từ lợi nhuận trước thuế",l:["Mã 01 = lợi nhuận kế toán trước thuế (B02 mã 50).","Cộng trừ các khoản KHÔNG bằng tiền hoặc thuộc hoạt động khác: 02 khấu hao TSCĐ và BĐSĐT (cộng); 03 các khoản dự phòng (cộng khi trích, trừ khi hoàn nhập); 04 lãi/lỗ chênh lệch tỷ giá chưa thực hiện; 05 lãi/lỗ từ hoạt động đầu tư, tài chính (lãi: trừ, lỗ: cộng); 06 chi phí đi vay (cộng lại vì sẽ trừ ở mã 14).","Mã 08 = 01 + 02 + 03 + 04 + 05 + 06 + 07: lợi nhuận từ hoạt động kinh doanh trước thay đổi vốn lưu động."]},
 {h:"Bước 2 - Thay đổi vốn lưu động (mã 09-13)",l:["Quy tắc dấu: tài sản tăng làm giảm tiền, nợ tăng làm tăng tiền.","Mã 09 = -(phải thu cuối kỳ - đầu kỳ). Mã 10 = -(hàng tồn kho cuối - đầu). Mã 12 = -(chi phí chờ phân bổ cuối - đầu). Mã 13: chứng khoán kinh doanh.","Mã 11 = (phải trả cuối - đầu), KHÔNG kể lãi vay phải trả và thuế TNDN phải nộp (hai khoản này xử lý ở mã 14 và 15).","Hàng tồn kho cuối kỳ nhỏ hơn đầu kỳ thì CỘNG vào, lớn hơn thì TRỪ (theo hướng dẫn của TT 99)."]},
 {h:"Bước 3 - Tiền đã trả thực tế (mã 14-17) và mã 20",l:["Mã 14 = chi phí đi vay đã trả bằng tiền trong kỳ (số âm); không gồm phần đã vốn hóa vào tài sản dở dang (phần đó thuộc hoạt động đầu tư).","Mã 15 = thuế TNDN đã nộp (âm) = chi phí thuế TNDN hiện hành + thuế phải nộp đầu kỳ - thuế phải nộp cuối kỳ.","Mã 20 = 08 + 09 + 10 + 11 + 12 + 13 + 14 + 15 + 16 + 17."]},
 {h:"Bước 4 - Hoạt động đầu tư và tài chính",l:["Đầu tư: 21 chi mua sắm TSCĐ (âm), 22 thu thanh lý TSCĐ (dương), 23 chi cho vay, 24 thu hồi cho vay, 25 chi góp vốn, 26 thu hồi góp vốn, 27 thu lãi, cổ tức; mã 30 là tổng.","Tài chính: 31 thu phát hành, nhận vốn góp; 32 trả lại vốn, mua lại cổ phiếu; 33 tiền vay nhận; 34 trả nợ gốc vay; 35 trả nợ gốc thuê tài chính; 36 cổ tức đã trả; mã 40 là tổng."]},
 {h:"Bước 5 - Tổng hợp và đối chiếu",l:["Mã 50 = 20 + 30 + 40. Mã 60 = mã 110 đầu kỳ trên B01. Mã 61 = ảnh hưởng tỷ giá. Mã 70 = 50 + 60 + 61.","BẮT BUỘC: mã 70 bằng mã 110 số cuối kỳ trên B01. Lệch thì soát dấu của các khoản tăng giảm vốn lưu động, khoản không bằng tiền (mua TSCĐ chưa trả tiền, cấn trừ công nợ), và phần tiền bị hạn chế sử dụng."]}
 ],
 warn:"Bản gốc đọc bằng OCR; phần mã 01-07 trong B03 trực tiếp có tên khác (tiền thu từ bán hàng...). Bài này chỉ nói phương pháp gián tiếp.",
 tip:"Luyện bằng tab «Lập BCTC», chế độ «Lưu chuyển tiền tệ B03 gián tiếp»: đề tự sinh số liệu, chấm từng bước.",
 q:"Phải thu khách hàng đầu kỳ 800, cuối kỳ 950; hàng tồn kho đầu 600, cuối 500. Mã 09 và mã 10 trên B03 gián tiếp lần lượt có dấu và giá trị nào?",chk:["-150","100","phai thu tang","giam tien","hang ton kho giam","cong"]},

{id:"bctc_11",d:"ketoan",t:"Lập BCTC 11 - Thuế TNDN hoãn lại: ví dụ và cách trình bày trên B01, B02",conf:1,v:"11/2026",
 law:"VAS 17; Thông tư 99/2025/TT-BTC (nguyên tắc TK 821, mã B01 272, 342 và B02 mã 52)",
 sec:[
 {h:"Hai loại chênh lệch tạm thời",l:["Chênh lệch tạm thời ĐƯỢC KHẤU TRỪ (giá trị tính thuế của tài sản lớn hơn giá trị ghi sổ, hoặc chi phí kế toán đã ghi nhưng thuế chưa cho trừ): sinh TÀI SẢN thuế hoãn lại (TK 243).","Chênh lệch tạm thời CHỊU THUẾ (doanh thu kế toán ghi trước thuế, khấu hao kế toán chậm hơn thuế...): sinh THUẾ hoãn lại PHẢI TRẢ (TK 347)."]},
 {h:"Ví dụ dự phòng giảm giá hàng tồn kho không được trừ khi tính thuế",l:["Trích 60 triệu, thuế chưa cho trừ, thuế suất 17%: tài sản thuế hoãn lại = 60 × 17% = 10,2 triệu.","Bút toán: Nợ 243 / Có 8212 (thu nhập thuế hoãn lại). Khi dự phòng được trừ thuế ở kỳ sau: hoàn nhập, Nợ 8212 / Có 243.","Cùng lúc thu nhập tính thuế được cộng thêm 60 triệu làm thuế hiện hành tăng (Nợ 8211 / Có 3334)."]},
 {h:"Trình bày",l:["B01: tài sản thuế thu nhập hoãn lại mã 272 (dư Nợ TK 243); thuế thu nhập hoãn lại phải trả mã 342 (dư Có TK 347).","B02: mã 52 chi phí thuế TNDN hoãn lại; thu nhập thuế hoãn lại ghi số âm trong ngoặc. Lợi nhuận sau thuế mã 60 = mã 50 - (mã 51 + mã 52).","TK 8212 cuối kỳ kết chuyển vào 911: chênh lệch số phát sinh Nợ và Có."]},
 {h:"Lưu ý theo TT 99/2025 (đã đọc)",l:["Không phản ánh vào TK 821 tài sản hoặc thuế hoãn lại phát sinh từ giao dịch được ghi nhận trực tiếp vào vốn chủ sở hữu.","Thuế TNDN bổ sung theo quy định thuế tối thiểu toàn cầu được ghi nhận trong chi phí thuế hiện hành, đồng thời ghi nhận tài sản thuế thu nhập hoãn lại."]}
 ],
 warn:"Thuế suất dùng để tính thuế hoãn lại là thuế suất dự kiến áp dụng khi tài sản được thu hồi hoặc nợ được thanh toán (VAS 17); với doanh nghiệp nhỏ có thể khó xác định, cần thống nhất chính sách.",
 tip:"Mỗi cuối năm lập bảng «chênh lệch giữa kế toán và thuế» (khấu hao, dự phòng, trích trước, chi phí không được trừ tạm thời), tính thuế hoãn lại một lần cho cả năm.",
 q:"Công ty trích dự phòng giảm giá hàng tồn kho 80 triệu, thuế chưa cho trừ, thuế suất 20%. Định khoản thuế hoãn lại và nó thể hiện ở mã nào trên B01, B02?",chk:["243","8212","16 trieu","272","mã 52","so am","tai san thue hoan lai"]},

{id:"bctc_12",d:"ketoan",t:"Lập BCTC 12 - Checklist khóa sổ cuối năm trước khi lập báo cáo",conf:1,v:"11/2026",
 law:"Luật Kế toán 2015 (sửa bởi Luật 56/2024), chế độ kế toán TT 99/2025, thực hành nghề",
 sec:[
 {h:"Nhóm A - Đối chiếu số liệu",l:["Quỹ tiền mặt: kiểm kê, so sổ quỹ; chênh lệch treo 1381/3381 và xử lý.","Tiền gửi: đối chiếu sao kê ngân hàng 31/12, lập biên bản các khoản chưa ghi nhận (séc, chuyển khoản dở).","Công nợ phải thu, phải trả: đối chiếu và xác nhận số dư, tách dư Có 131 (khách trả trước) và dư Nợ 331 (trả trước người bán) để không bù trừ trên B01.","Hàng tồn kho: kiểm kê thực tế, so sổ chi tiết nhập xuất tồn; hàng hỏng, chậm luân chuyển.","TSCĐ và CCDC: kiểm kê, so sổ theo dõi; TSCĐ không còn sử dụng."]},
 {h:"Nhóm B - Bút toán điều chỉnh cuối kỳ",l:["Khấu hao TSCĐ tháng 12; phân bổ chi phí chờ phân bổ (TK 242); trích trước chi phí (TK 335) đúng kỳ.","Dự phòng giảm giá hàng tồn kho, dự phòng phải thu khó đòi, dự phòng phải trả; hoàn nhập dự phòng không còn cần.","Đánh giá lại số dư ngoại tệ cuối kỳ (lãi vào 515, lỗ vào 635).","Cut-off: doanh thu và chi phí đúng kỳ, hóa đơn đầu vào, hàng đã giao nhưng chưa lập hóa đơn."]},
 {h:"Nhóm C - Lương, thuế, bảo hiểm",l:["Lương, BHXH, BHYT, BHTN, kinh phí công đoàn tháng 12; thuế TNCN khấu trừ; tiền thưởng cuối năm.","Thuế GTGT: kê khai kỳ cuối, số dư 133 và 3331; thuế môn bài; các thuế khác.","Thuế TNDN: điều chỉnh tăng giảm, thuế hiện hành, thuế hoãn lại; so tạm nộp để ghi bổ sung."]},
 {h:"Nhóm D - Kết chuyển và kiểm tra",l:["Kết chuyển 521 vào 511; kết chuyển các TK 5, 6, 7, 8 vào 911; xác định lãi lỗ, kết chuyển vào 421.","Bảng cân đối số phát sinh cân; số dư các TK loại 5-9 bằng 0.","Lập B01, B02, B03, Thuyết minh; chạy các phép thử cân đối: mã 280 = mã 440, mã 60 khớp biến động TK 421, mã 70 B03 bằng mã 110 B01."]}
 ],
 tip:"In checklist thành bảng có cột «người làm», «ngày», «chứng từ đính kèm»; mỗi dòng xong mới ký. Lưu hồ sơ khóa sổ để giải trình khi bị kiểm tra, kiểm toán.",
 q:"Liệt kê theo thứ tự 6 việc bạn làm từ khi chốt chứng từ đến khi ra B01 và 3 phép thử cân đối cuối cùng.",chk:["doi chieu","dieu chinh","khau hao","du phong","thue tndn","ket chuyen","911","421","280","440","110"]},

{id:"bctc_13",d:"ketoan",t:"Lập BCTC 13 - Mười lỗi hay gặp trên B01, B02 và cách phát hiện",conf:1,v:"11/2026",
 law:"Thông tư 99/2025/TT-BTC (hướng dẫn lập B01, B02, B03), Luật Kế toán, thực hành nghề",
 sec:[
 {h:"Lỗi về phân loại, trình bày",l:["Bù trừ dư Có 131 với dư Nợ 131: phải trình bày riêng (dư Có ở mã 312, dư Nợ ở mã 131). Tương tự dư Nợ 331 (mã 132) và dư Có 331 (mã 311).","Phân loại ngắn hạn, dài hạn sai: khoản vay dài hạn đến hạn trả trong 12 tháng phải chuyển sang ngắn hạn.","Thanh lý TSCĐ trình bày gộp giá bán vào mã 31 và giá trị còn lại vào mã 32: theo TT 99 chỉ ghi phần chênh lệch.","TK 334 có dư Nợ (trả thừa lương) và 338 có dư Nợ: trình bày ở phải thu khác (mã 135), không bù với dư Có.","Thuế GTGT còn được khấu trừ (TK 133) phải ở mã 162; thuế nộp thừa ở mã 163."]},
 {h:"Lỗi về số liệu, cân đối",l:["Mã 280 khác mã 440: thường do bút toán kết chuyển chưa đủ, TK trung gian còn số dư, hoặc TK 421 chưa khớp lợi nhuận.","TK 421 cuối kỳ không bằng 421 đầu kỳ + lợi nhuận sau thuế - cổ tức, trích quỹ: kiểm tra sai sót năm trước, điều chỉnh hồi tố.","Lợi nhuận trước thuế ở B02 mã 50 khác tờ khai quyết toán TNDN: phải có bảng giải thích điều chỉnh tăng giảm.","Tiền cuối kỳ mã 70 B03 khác mã 110 B01.","Thuế thu nhập hoãn lại không trình bày dấu âm ở mã 52 khi là thu nhập."]},
 {h:"Cách phát hiện nhanh",l:["Chạy bảng 4 tầng trong chuyên đề «Lập BCTC 8» và tab «Soát BCTC».","Đối chiếu doanh thu B02 với tờ khai GTGT cả năm, giải thích chênh lệch (không chịu thuế, xuất khẩu, chưa lập hóa đơn).","So sánh kỳ này với kỳ trước, biến động trên 20% phải có lời giải thích bằng chứng từ."]}
 ],
 tip:"Sau khi lập xong, dùng tab «Soát BCTC» nhập số liệu để chạy 19 phép thử; mọi cảnh báo phải có lời giải thích bằng văn bản.",
 q:"B01 có TK 131 dư Nợ 900 triệu (nhiều khách) và dư Có 150 triệu (một khách trả trước). Trình bày thế nào và nếu bù trừ thì sai gì?",chk:["khong bu tru","ma 131","ma 312","900","150","nguoi mua tra tien truoc"]},

{id:"bctc_14",d:"ketoan",t:"Lập BCTC 14 - Thuyết minh báo cáo tài chính: nội dung cần có",conf:2,v:"11/2026",
 law:"VAS 21 (Trình bày báo cáo tài chính), VAS 23 (Sự kiện sau ngày kết thúc kỳ kế toán), TT 99/2025 (mẫu thuyết minh B09); Luật Kế toán sửa bởi Luật 56/2024 Điều 29",
 sec:[
 {h:"Phần chung",l:["Đặc điểm hoạt động: hình thức sở hữu vốn, lĩnh vực, ngành nghề, chu kỳ sản xuất kinh doanh, cấu trúc doanh nghiệp, nhân sự.","Kỳ kế toán, đơn vị tiền tệ sử dụng; chuẩn mực và chế độ kế toán áp dụng; giả định hoạt động liên tục."]},
 {h:"Chính sách kế toán chủ yếu",l:["Ghi nhận doanh thu, giá vốn; hàng tồn kho (phương pháp tính giá, lập dự phòng); TSCĐ (nguyên giá, khấu hao, thời gian); đầu tư tài chính; chi phí đi vay; chi phí chờ phân bổ; ngoại tệ; thuế (hiện hành, hoãn lại)."]},
 {h:"Thông tin bổ sung từng khoản mục",l:["Chi tiết tiền, phải thu (theo thời hạn, đối tượng, quá hạn), hàng tồn kho (kể cả hàng dự phòng), TSCĐ (biến động nguyên giá, hao mòn), vay và nợ thuê tài chính, thuế và các khoản phải nộp, vốn chủ sở hữu (biến động), doanh thu và chi phí chi tiết.","Thông tin về bên liên quan: giao dịch và số dư với công ty mẹ, công ty con, liên kết, người quản lý chủ chốt.","Sự kiện phát sinh sau ngày kết thúc kỳ kế toán có ảnh hưởng; cam kết, nợ tiềm tàng; hoạt động liên tục nếu có yếu tố không chắc chắn trọng yếu."]}
 ],
 warn:"Mẫu thuyết minh chi tiết trong TT 99/2025 (B09) chưa được đọc nguyên văn; bài này mô tả theo chuẩn mực và thông lệ. Đối chiếu mẫu hiện hành khi lập thật.",
 tip:"Lập thuyết minh song song với B01, B02: mỗi chỉ tiêu có số dư lớn hoặc nhạy cảm (phải thu quá hạn, dự phòng, TSCĐ, thuế) cần kèm bảng chi tiết cùng số liệu.",
 q:"Liệt kê 6 nhóm thông tin bắt buộc phải có trong thuyết minh BCTC.",chk:["dac diem hoat dong","chinh sach ke toan","chi tiet","ben lien quan","su kien sau","hoat dong lien tuc"]},

{id:"bctc_15",d:"kiemtoan",t:"Lập BCTC 15 - Đọc BCTC bằng tỷ số tài chính: bộ chỉ tiêu cơ bản",conf:1,v:"11/2026",
 law:"Thực hành phân tích tài chính; VSA 520 (thủ tục phân tích)",
 sec:[
 {h:"Thanh khoản",l:["Hệ số thanh toán hiện hành = tài sản ngắn hạn (mã 100) ÷ nợ ngắn hạn (mã 310). Dưới 1 là dấu hiệu rủi ro thanh khoản.","Hệ số thanh toán nhanh = (tài sản ngắn hạn - hàng tồn kho) ÷ nợ ngắn hạn.","Hệ số thanh toán tiền = tiền và tương đương tiền (mã 110) ÷ nợ ngắn hạn."]},
 {h:"Đòn bẩy",l:["Nợ phải trả ÷ vốn chủ sở hữu (mã 300 ÷ mã 400); Nợ phải trả ÷ tổng tài sản (mã 300 ÷ mã 280).","Khả năng trả lãi = lợi nhuận trước lãi vay và thuế ÷ chi phí lãi vay."]},
 {h:"Hiệu quả hoạt động",l:["Vòng quay hàng tồn kho = giá vốn ÷ hàng tồn kho bình quân; số ngày tồn kho = 365 ÷ vòng quay.","Vòng quay phải thu = doanh thu thuần ÷ phải thu bình quân; số ngày thu tiền = 365 ÷ vòng quay.","Vòng quay tài sản = doanh thu thuần ÷ tổng tài sản bình quân."]},
 {h:"Sinh lời",l:["Biên lợi nhuận gộp = mã 20 ÷ mã 10; biên lợi nhuận ròng = mã 60 ÷ mã 10.","ROA = mã 60 ÷ tổng tài sản bình quân; ROE = mã 60 ÷ vốn chủ sở hữu bình quân.","DuPont: ROE = biên lợi nhuận ròng × vòng quay tài sản × đòn bẩy tài chính."]},
 {h:"Chất lượng lợi nhuận",l:["So lợi nhuận với lưu chuyển tiền thuần từ hoạt động kinh doanh (mã 20 B03): lãi nhưng tiền âm kéo dài là dấu hiệu cần soát phải thu, tồn kho."]}
 ],
 tip:"Luôn so với cùng kỳ năm trước và trung bình ngành; một tỷ số không có ý nghĩa nếu đứng riêng.",
 q:"Doanh thu thuần 24 tỷ, phải thu đầu kỳ 3 tỷ, cuối kỳ 5 tỷ. Số ngày thu tiền bình quân? Nhận xét?",chk:["4 ty","6","61","ngay thu tien","vong quay","365"]},

{id:"bctc_16",d:"ketoan",t:"Lập BCTC 16 - Sai sót, thay đổi chính sách và sự kiện sau ngày khóa sổ",conf:1,v:"11/2026",
 law:"VAS 29 (thay đổi chính sách kế toán, ước tính kế toán và các sai sót), VAS 23 (sự kiện sau ngày kết thúc kỳ kế toán); TT 99/2025 (nguyên tắc TK 821)",
 sec:[
 {h:"Sai sót của kỳ trước",l:["Sai sót KHÔNG trọng yếu phát hiện ở kỳ này: điều chỉnh vào kết quả của kỳ phát hiện (ví dụ thuế TNDN năm trước thiếu: ghi tăng chi phí thuế hiện hành của năm phát hiện, theo nguyên tắc TK 821 TT 99/2025).","Sai sót TRỌNG YẾU: điều chỉnh hồi tố, trình bày lại số liệu so sánh, điều chỉnh số dư đầu kỳ của vốn chủ sở hữu và thuyết minh."]},
 {h:"Thay đổi chính sách và ước tính",l:["Thay đổi chính sách kế toán (ví dụ đổi phương pháp tính giá hàng tồn kho): áp dụng hồi tố như đã luôn áp dụng, trừ khi không khả thi.","Thay đổi ước tính (thời gian khấu hao, dự phòng): áp dụng phi hồi tố, ghi vào kết quả kỳ thay đổi và các kỳ sau."]},
 {h:"Sự kiện sau ngày kết thúc kỳ kế toán",l:["Sự kiện cung cấp bằng chứng về tình trạng đã tồn tại tại ngày kết thúc kỳ (ví dụ khách hàng phá sản sau ngày 31/12 chứng minh nợ khó đòi): phải điều chỉnh báo cáo.","Sự kiện chỉ phát sinh sau ngày kết thúc kỳ (ví dụ cháy kho tháng 1 năm sau): không điều chỉnh, chỉ thuyết minh nếu trọng yếu.","Doanh nghiệp giải thể, ngừng hoạt động sau kỳ: xem xét giả định hoạt động liên tục."]}
 ],
 warn:"Ranh giới trọng yếu do doanh nghiệp xác định theo mức và tính chất; nên có chính sách trọng yếu bằng văn bản.",
 tip:"Mỗi lần phát hiện sai sót lập một «biên bản điều chỉnh» ghi nguyên nhân, mức trọng yếu, bút toán, báo cáo bị ảnh hưởng và người duyệt.",
 q:"Tháng 3 năm sau phát hiện sai sót trọng yếu của năm trước làm lợi nhuận bị khai cao 400 triệu. Cách xử lý và báo cáo nào bị ảnh hưởng?",chk:["hoi to","421","so dau ky","thuyet minh","so sanh","trong yeu"]}
);
