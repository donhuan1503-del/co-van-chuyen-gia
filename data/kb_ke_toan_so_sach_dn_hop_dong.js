/* Kế toán - sổ sách - doanh nghiệp - hợp đồng - đối chiếu nguồn 11/2026 */
KB.push(
{id:"kt_luat1",d:"ketoan",t:"Luật Kế toán 2015 và hệ thống chế độ kế toán 2026",conf:2,v:"11/2026",
 law:"Luật Kế toán 88/2015/QH13; NĐ 174/2016/NĐ-CP; TT 99/2025/TT-BTC (từ 01/01/2026, thay TT 200/2014); TT 133/2016/TT-BTC; TT 88/2021/TT-BTC (hộ kinh doanh) và văn bản thay thế",
 sec:[
 {h:"Khung pháp lý",l:["Luật Kế toán 2015: đối tượng, chứng từ, sổ, BCTC, lưu trữ, kiểm tra. Chưa xác nhận được luật sửa đổi trong nguồn đã tra - theo dõi tab «Văn bản mới».","TT 99/2025: chế độ kế toán doanh nghiệp từ năm tài chính bắt đầu từ 01/01/2026, thay TT 200/2014. Điểm đáng chú ý: Báo cáo tình hình tài chính thay cho Bảng cân đối kế toán; yêu cầu xây dựng quy chế kế toán/kiểm soát nội bộ; cho phép chọn một ngoại tệ làm đơn vị tiền tệ kế toán khi đáp ứng điều kiện.","TT 133/2016: doanh nghiệp nhỏ và vừa - kiểm tra có tiếp tục hiệu lực nguyên văn hay có hướng dẫn thay thế/hợp nhất từ 2026."]},
 {h:"Nguyên tắc nền tảng (ổn định)",l:["Dồn tích; hoạt động liên tục; giá gốc; phù hợp; nhất quán; thận trọng; trọng yếu.","Chứng từ kế toán: lập đủ nội dung, ký, lưu; chứng từ điện tử có giá trị như chứng từ giấy khi đủ điều kiện.","Thời hạn lưu trữ: tài liệu kế toán dùng trực tiếp ghi sổ và lập BCTC - tối thiểu 10 năm; tài liệu phục vụ quản lý nội bộ - tối thiểu 5 năm."]}
 ],
 warn:"Doanh nghiệp đang quản lý theo TT 200 cần chuyển sang TT 99 từ 01/01/2026; DN theo TT 133 cần đọc hướng dẫn riêng. Hệ thống tài khoản, mẫu BCTC có thay đổi.",
 tip:"Lập bảng đối chiếu: tài khoản cũ (TT 200) → tài khoản mới (TT 99) và kiểm tra phần mềm kế toán đã cập nhật.",
 q:"Công ty đang dùng TT 200. Từ 01/01/2026 cần thay đổi những gì và bắt đầu từ đâu?",chk:["99","bao cao tinh hinh tai chinh","tai khoan","quy che"]},

{id:"kt_nv1",d:"ketoan",t:"Nghiệp vụ kế toán 1 - Mua hàng, bán hàng, giá vốn, VAT",conf:1,v:"11/2026",
 law:"VAS; TT 99/2025; TT 133/2016",
 sec:[
 {h:"Mua hàng - nhập kho",l:["Mua hàng nhập kho, chưa trả tiền: Nợ 156 (hoặc 152) giá mua; Nợ 133 VAT đầu vào; Có 331 tổng thanh toán.","Chi phí mua hàng (vận chuyển, bốc xếp): tính vào giá gốc 156. Chiết khấu thương mại/ giảm giá nhận được: giảm giá gốc hàng tồn kho.","Hàng mua về dùng ngay cho sản xuất: Nợ 621/627 thay vì 152/156."]},
 {h:"Bán hàng",l:["Doanh thu: Nợ 131/111/112 tổng thanh toán; Có 511 doanh thu chưa thuế; Có 3331 VAT đầu ra.","Giá vốn: Nợ 632 / Có 156 (giá vốn theo phương pháp tính giá xuất kho).","Chiết khấu thương mại cho khách (hóa đơn): giảm doanh thu; hàng bán bị trả lại: giảm doanh thu và nhập lại kho theo giá vốn."]},
 {h:"Kiểm soát giá vốn",l:["Theo dõi mã hàng, đơn vị tính, quy đổi; không xuất âm kho; so sánh giá nhập giữa các lần.","Bán lỗ (giá bán < giá vốn): phải có phê duyệt và lý do."]}
 ],
 ex:"Mua 1.000 kg hàng, đơn giá 20.000 đ, VAT 8%: giá mua 20.000.000, VAT 1.600.000, tổng 21.600.000 → Nợ 156 20.000.000; Nợ 133 1.600.000; Có 331 21.600.000. Bán 400 kg giá 30.000 đ, VAT 8%: doanh thu 12.000.000, VAT 960.000 → Nợ 131 12.960.000 / Có 511 12.000.000 / Có 3331 960.000; giá vốn 8.000.000 → Nợ 632 / Có 156.",
 tip:"Làm bài tập ở tab «Định khoản» cho đến khi đúng 3 lần liên tiếp.",
 q:"Định khoản bán 400 kg hàng giá bán 30.000 đ/kg VAT 8%, giá vốn 20.000 đ/kg.",chk:["131","511","3331","632","156"]},

{id:"kt_nv2",d:"ketoan",t:"Nghiệp vụ kế toán 2 - TSCĐ, CCDC, chi phí trả trước, khấu hao",conf:2,v:"11/2026",
 law:"TT 23/2023/TT-BTC (quản lý, khấu hao TSCĐ - kiểm tra), VAS 03, 04; TT 99/2025",
 sec:[
 {h:"TSCĐ",l:["Tiêu chuẩn: chắc chắn thu lợi ích, thời gian sử dụng trên 1 năm, nguyên giá xác định tin cậy và giá trị từ 30 triệu đồng trở lên (kiểm tra ngưỡng theo văn bản hiện hành).","Mua TSCĐ: Nợ 211 / Nợ 133 / Có 331, 112.","Khấu hao: Nợ 627/641/642 / Có 214. Phương pháp: đường thẳng; số dư giảm dần; theo sản lượng."]},
 {h:"CCDC và chi phí trả trước",l:["Công cụ dụng cụ có giá trị lớn, sử dụng nhiều kỳ: Nợ 242 / Có 111, 112, 331; phân bổ dần Nợ 642/641/627 / Có 242.","Chi phí trả trước (bảo hiểm, thuê nhà trả trước...): Nợ 242 hoặc 1388/3387 tùy trường hợp; phân bổ theo kỳ phát sinh."]}
 ],
 ex:"Mua máy 36.000.000 + VAT 8% = 2.880.000, trả tiền gửi ngân hàng; dùng 5 năm đường thẳng: Nợ 211 36.000.000; Nợ 133 2.880.000; Có 112 38.880.000. Khấu hao tháng = 36.000.000 / 60 = 600.000 đ → Nợ 642 600.000 / Có 214 600.000.",
 tip:"Hộ kinh doanh theo sổ S4: dùng sổ TSCĐ theo hướng dẫn riêng của thông tư HKD (kiểm tra TT 18/2026).",
 q:"Mua máy 28 triệu (trước VAT) dùng 3 năm: ghi nhận TSCĐ hay CCDC? Định khoản.",chk:["30 trieu","242","cong cu","khong dat"]},

{id:"so1",d:"ketoan",t:"Sổ sách 1 - Hình thức sổ, mẫu sổ, sửa sổ, khóa sổ",conf:2,v:"11/2026",
 law:"Luật Kế toán 2015 Điều 24-27; TT 99/2025 Phụ lục sổ; TT 133/2016",
 sec:[
 {h:"Hình thức sổ",l:["Nhật ký chung; Nhật ký - Sổ Cái; Chứng từ ghi sổ; Nhật ký - Chứng từ; kế toán trên máy tính. Hình thức sổ phải ổn định trong một năm tài chính.","Sổ: Nhật ký, Sổ Cái, sổ chi tiết (tiền, hàng tồn kho, công nợ, TSCĐ, doanh thu - chi phí...)."]},
 {h:"Sửa sổ kế toán",l:["Ghi sai chưa khóa sổ: cải chính bằng phương pháp phù hợp (xóa bỏ chữ cũ bằng cách gạch một đường thẳng, ghi chữ đúng và ký).","Phát hiện sai sót sau khi đã nộp BCTC/khóa sổ: ghi bút toán điều chỉnh (đảo bút toán, ghi bổ sung, ghi số âm) kèm thuyết minh; các điều chỉnh ảnh hưởng nghĩa vụ thuế → khai bổ sung."]},
 {h:"Khóa sổ và đối chiếu",l:["Cuối kỳ: đối chiếu số dư các tài khoản với sổ chi tiết; kiểm kê tiền mặt, tồn kho, TSCĐ; đối chiếu công nợ, ngân hàng.","Mỗi lần khóa sổ cần lập bảng cân đối số phát sinh, kiểm tra tổng Nợ = tổng Có."]}
 ],
 tip:"Chênh lệch 1 đồng cũng cần tìm nguyên nhân (làm tròn thuế, tỷ giá, sai đơn giá).",
 q:"Phát hiện sau khi nộp tờ khai thuế quý rằng 1 hóa đơn chi phí ghi nhầm kỳ. Xử lý sổ và hồ sơ thuế thế nào?",chk:["but toan dieu chinh","khai bo sung","thuyet minh","ky"]},

{id:"so2",d:"ketoan",t:"Sổ sách 2 - Hộ kinh doanh: các mẫu sổ và quy trình ghi sổ",conf:2,v:"11/2026",
 law:"TT 88/2021/TT-BTC (hộ kinh doanh); NĐ 68/2026/NĐ-CP; TT 18/2026/TT-BTC - kiểm tra mẫu hiện hành",
 sec:[
 {h:"Các sổ chính (theo TT 88/2021, kiểm tra thay đổi)",l:["S1a-HKD: sổ chi tiết bán hàng; S2a-HKD: doanh thu bán hàng hóa, dịch vụ (cho hộ nộp theo tỷ lệ %); S2b/S2c: doanh thu, chi phí (cho hộ tính thuế theo thu nhập); S3-HKD: chi phí sản xuất kinh doanh; S4-HKD: theo dõi tình hình thực hiện nghĩa vụ thuế; S5-HKD: sổ kho; S6-HKD: sổ chi tiết vật liệu; S7-HKD: sổ quỹ tiền mặt / tiền gửi.","Hộ kinh doanh chọn tính thuế theo thu nhập (phương pháp lợi nhuận) phải ghi sổ đầy đủ doanh thu - chi phí để xác định thu nhập tính thuế."]},
 {h:"Lưu ý 2026",l:["Doanh thu từ 01 tỷ đồng/năm trở xuống: không chịu thuế GTGT/TNCN nhưng vẫn cần thông báo doanh thu/ sổ sách đơn giản theo hướng dẫn (đọc NĐ 68/2026, TT 18/2026).","Kết nối hóa đơn điện tử từ máy tính tiền và dữ liệu ngân hàng giúp đối chiếu doanh thu với cơ quan thuế."]}
 ],
 warn:"Các mẫu sổ HKD có thể đã được thay thế bởi TT 18/2026 hoặc văn bản liên quan. Dùng mẫu từ cổng Thuế/ văn bản hiện hành.",
 tip:"Mỗi ngày cuối ca: ghi doanh thu, đối chiếu với tiền thực nhận, chụp ảnh chứng từ.",
 q:"Hộ bán lẻ doanh thu 800 triệu: có phải nộp thuế GTGT/TNCN? Cần sổ gì?",chk:["1 ty","khong chiu","so","thong bao"]},

{id:"dn1",d:"phaply",t:"Luật Doanh nghiệp 2020 (sửa đổi 2025): thành lập, vốn, quản trị",conf:2,v:"11/2026",
 law:"Luật Doanh nghiệp 59/2020/QH14; Luật 76/2025/QH15 (từ 01/07/2025); NĐ 168/2025/NĐ-CP (đã có nghị định sửa đổi tháng 7/2026 - kiểm tra)",
 sec:[
 {h:"Loại hình",l:["Doanh nghiệp tư nhân; công ty hợp danh; TNHH một thành viên; TNHH hai thành viên trở lên; công ty cổ phần. Hộ kinh doanh không phải doanh nghiệp (Nghị định đăng ký hộ kinh doanh riêng).","Chịu trách nhiệm hữu hạn trong phạm vi vốn góp (TNHH, CP); DNTN vô hạn; hợp danh viên vô hạn."]},
 {h:"Vốn và đăng ký",l:["Góp đủ vốn điều lệ trong 90 ngày kể từ ngày được cấp Giấy chứng nhận đăng ký doanh nghiệp. Không góp đủ: điều chỉnh vốn/ tỷ lệ; thành viên chưa góp bị xử lý theo luật.","Luật 76/2025 và NĐ 168/2025: tăng cường thông tin chủ sở hữu hưởng lợi (cá nhân sở hữu từ 25% vốn điều lệ hoặc quyền biểu quyết...), tích hợp định danh cá nhân; không cần nộp bản sao giấy tờ pháp lý nếu đã kê khai số định danh.","Tạm ngừng kinh doanh: thông báo chậm nhất 15 ngày trước; mỗi lần không quá 1 năm. Giải thể: thanh toán hết nợ (thuế, lương, BHXH) rồi mới giải thể."]},
 {h:"Quản trị",l:["Người đại diện theo pháp luật chịu trách nhiệm trong phạm vi quyền hạn; Hội đồng thành viên/Đại hội đồng cổ đông/HĐQT theo mô hình.","Nghị quyết ĐHĐCĐ: tỷ lệ thông qua theo điều lệ và luật (50%/65%...), đọc Điều 148 và Điều lệ."]}
 ],
 warn:"NĐ 168/2025 đã có nghị định sửa đổi (ban hành ngày 23/07/2026 theo một nguồn) - cần kiểm tra thay đổi về hồ sơ, thời hạn.",
 tip:"Hồ sơ pháp lý nên có: giấy chứng nhận ĐKDN, điều lệ, sổ cổ đông/danh sách thành viên, biên bản góp vốn, danh sách CSHHL.",
 q:"Công ty TNHH 2 thành viên góp vốn thiếu sau 90 ngày. Hệ quả và phương án xử lý?",chk:["90 ngay","dieu chinh","von","thanh vien"]},

{id:"hdong1",d:"phaply",t:"Hợp đồng 1 - Soạn thảo, rủi ro, thanh toán, phạt, bồi thường",conf:1,v:"11/2026",
 law:"Bộ luật Dân sự 91/2015/QH13; Luật Thương mại 36/2005/QH11; Luật GTGT 2024 (thanh toán không dùng tiền mặt); Luật QLT 108/2025",
 sec:[
 {h:"Nội dung tối thiểu",l:["Các bên (tên, MST, người đại diện, ủy quyền); đối tượng; số lượng, chất lượng, giá; thanh toán (hạn, hình thức - chuyển khoản, xuất hóa đơn); giao nhận, nghiệm thu; bảo hành.","Phạt vi phạm: theo thỏa thuận; trong thương mại tối đa 8% giá trị phần nghĩa vụ bị vi phạm (Luật TM Điều 301). Bồi thường: phải chứng minh thiệt hại thực tế.","Bất khả kháng; chấm dứt, thanh lý; giải quyết tranh chấp (tòa án/ trọng tài); luật áp dụng."]},
 {h:"Liên hệ kế toán thuế",l:["Hợp đồng là chứng từ hợp lệ cho chi phí được trừ; thanh toán phải khớp bên ký hợp đồng.","Thời điểm xuất hóa đơn, thuế suất áp dụng, điều kiện khấu trừ phải được thể hiện trong hợp đồng (ví dụ: giá đã/ chưa VAT)."]},
 {h:"Thời hiệu",l:["Thời hiệu khởi kiện yêu cầu giải quyết tranh chấp hợp đồng: 3 năm kể từ ngày người có quyền biết quyền lợi bị xâm phạm (BLDS Điều 429); lưu ý Luật thương mại về thời hiệu trọng tài."]}
 ],
 ex:"Hợp đồng bán hàng 500 triệu, ghi phạt vi phạm 20%: mức phạt có hiệu lực trong thương mại không quá 8% = 40 triệu (nếu là phạt trên phần nghĩa vụ vi phạm 500 triệu); phần thỏa thuận vượt là vô hiệu.",
 tip:"Trước khi ký: kiểm tra tư cách pháp lý đối tác (đăng ký kinh doanh, MST còn hoạt động, người ký có thẩm quyền).",
 q:"Hợp đồng ghi phạt chậm thanh toán 15% giá trị hợp đồng. Mức nào được tòa/trọng tài chấp nhận (hợp đồng thương mại)?",chk:["8","301","vo hieu","phan nghia vu"]},

{id:"hdong2",d:"phaply",t:"Hợp đồng 2 - Mẫu checklist kiểm tra trước khi ký và quản lý sau ký",conf:1,v:"11/2026",
 law:"Thực hành nghiệp vụ; BLDS 2015",
 sec:[
 {h:"Trước khi ký",l:["Kiểm tra pháp lý đối tác; kiểm tra thẩm quyền ký; điều khoản thanh toán + hóa đơn; điều khoản phạt/ bồi thường; điều kiện nghiệm thu.","Phê duyệt nội bộ: đề nghị, báo giá, hợp đồng, phụ lục."]},
 {h:"Sau khi ký",l:["Lập sổ theo dõi hợp đồng: mã, đối tác, giá trị, hạn thanh toán, hạn giao hàng, tình trạng nghiệm thu, hóa đơn đã xuất, tiền đã thu/chi.","Nhắc hạn thanh toán, hạn nghiệm thu, hạn bảo hành; lưu chứng từ giao nhận."]}
 ],
 tip:"Sổ theo dõi hợp đồng là công cụ đối chiếu công nợ 131/331 tốt nhất.",
 q:"Liệt kê 5 cột quan trọng của sổ theo dõi hợp đồng và lý do.",chk:["gia tri","han","nghiem thu","hoa don","thanh toan"]}
);
