/* TNDN & TNCN - đối chiếu nguồn 11/2026 */
KB.push(
{id:"tndn1",d:"thue",t:"TNDN 1 - Thuế suất và đối tượng áp dụng (Luật 67/2025)",conf:2,v:"11/2026",
 law:"Luật Thuế TNDN 67/2025/QH15; NĐ 320/2025/NĐ-CP; TT 20/2026/TT-BTC; NĐ 141/2026/NĐ-CP (miễn TNDN doanh thu dưới 1 tỷ)",
 sec:[
 {h:"Thuế suất",l:["Phổ thông 20%.","Doanh nghiệp có tổng doanh thu năm không quá 3 tỷ đồng: 15%; trên 3 tỷ đến 50 tỷ: 17%. Căn cứ: tổng doanh thu của kỳ tính thuế năm liền trước.","Không áp 15%/17% trong một số trường hợp (công ty con, quan hệ liên kết, v.v. - đọc Điều 11 NĐ 320/2025 và TT 20/2026).","Doanh nghiệp có tổng doanh thu năm từ mức Chính phủ quy định trở xuống được MIỄN thuế TNDN: khoản 14a Điều 4 do Luật 09/2026/QH16 bổ sung, hiệu lực từ 01/01/2026 (đã đọc VBHN 113/VBHN-VPQH); mức 1 tỷ đồng do NĐ 141/2026 quy định - kiểm tra điều kiện.","Ưu đãi: địa bàn, ngành nghề, dự án đầu tư mới (thuế suất 10%/17% theo thời gian) - xem Điều ưu đãi của NĐ 320/2025."]},
 {h:"Thu nhập tính thuế",l:["Thu nhập tính thuế = doanh thu - chi phí được trừ + thu nhập khác - thu nhập miễn thuế - lỗ được kết chuyển.","Lỗ chuyển tối đa 5 năm liên tục.","Quỹ phát triển khoa học và công nghệ: trích tối đa tỷ lệ theo quy định (kiểm tra)."]}
 ],
 ex:"Doanh nghiệp A năm 2025 doanh thu 2,6 tỷ; năm 2026 doanh thu 4,2 tỷ, thu nhập tính thuế 600 triệu. Thuế suất 2026 xác định theo doanh thu năm liền trước (2,6 tỷ ≤ 3 tỷ) → 15% → thuế 90 triệu. Nếu xét 4,2 tỷ (3–50 tỷ) → 17% = 102 triệu: cách chọn căn cứ phải theo văn bản (và hỏi cơ quan thuế khi tình huống đặc thù).",
 warn:"Có tranh luận thực tế về cách xác định ngưỡng (doanh thu năm hiện hành hay năm trước, doanh thu có tính thu nhập khác không). Đọc Điều 11 NĐ 320/2025 và TT 20/2026 trước khi quyết toán.",
 tip:"Lập bảng theo dõi doanh thu năm trước liền kề ngay từ đầu năm để chọn thuế suất tạm tính quý.",
 q:"Doanh nghiệp doanh thu năm trước 2,6 tỷ, năm nay 4,2 tỷ. Thuế suất nào áp dụng cho tạm tính quý năm nay và vì sao?",chk:["lien truoc","15","3 ty","doanh thu"]},

{id:"tndn2",d:"thue",t:"TNDN 2 - Chi phí được trừ và chi phí không được trừ",conf:2,v:"11/2026",
 law:"Luật 67/2025 Điều 9; NĐ 320/2025 (Điều 9-10); TT 20/2026; NĐ 132/2020 (giao dịch liên kết)",
 sec:[
 {h:"Điều kiện chung của chi phí được trừ",l:["Khoản chi thực tế phát sinh liên quan đến hoạt động sản xuất kinh doanh.","Có đủ hóa đơn, chứng từ hợp pháp.","Chứng từ thanh toán không dùng tiền mặt đối với hóa đơn mua hàng hóa, dịch vụ từ ngưỡng theo quy định (kiểm tra ngưỡng và hình thức đang hiệu lực)."]},
 {h:"Các khoản thường bị loại",l:["Khoản chi không tương ứng doanh thu; phạt vi phạm hành chính; chi phí không có hóa đơn, chứng từ.","Khấu hao ô tô vượt nguyên giá khống chế; khấu hao TSCĐ không sử dụng cho sản xuất kinh doanh.","Lãi vay vượt mức khống chế trong giao dịch liên kết (30% EBITDA - NĐ 132/2020); lãi vay vốn góp chưa đủ.","Chi phí tiền lương không có trong hợp đồng/quy chế; chi phụ cấp, phúc lợi vượt quy chế.","Chênh lệch tỷ giá chưa thực hiện; dự phòng không đúng quy định."]},
 {h:"Kiểm soát nội bộ thực hành",l:["Hồ sơ chi: hợp đồng, biên bản nghiệm thu, hóa đơn, chứng từ thanh toán, bảng kê.","Rà soát cuối năm theo danh sách các khoản chi rủi ro: tiếp khách, quà biếu, công tác phí, xăng xe, chi sửa chữa, chi hộ."]}
 ],
 ex:"Công ty bị phạt chậm nộp thuế 25 triệu và phạt vi phạm hợp đồng 40 triệu. Tiền chậm nộp thuế và phạt vi phạm hành chính: không được trừ. Phạt vi phạm hợp đồng kinh tế (theo thỏa thuận dân sự) thường được xem xét là chi phí hợp lý nếu có hợp đồng, chứng từ và liên quan SXKD - kiểm tra cụ thể.",
 tip:"Mỗi năm lập bảng «điều chỉnh thu nhập chịu thuế» (tăng/giảm) làm hồ sơ gốc cho quyết toán 03/TNDN.",
 q:"Kể 5 khoản chi phí hay bị loại khi quyết toán TNDN và hồ sơ cần có để bảo vệ từng khoản.",chk:["hoa don","phat","khau hao","luong","lai vay"]},

{id:"tndn3",d:"thue",t:"TNDN 3 - Kê khai tạm tính quý, quyết toán năm",conf:2,v:"11/2026",
 law:"Luật QLT 108/2025; NĐ 252/2026; TT 89/2026; mẫu 03/TNDN (kiểm tra mẫu hiện hành)",
 sec:[
 {h:"Tạm tính quý",l:["Nộp tạm tính quý (không phải nộp tờ khai quý riêng nếu theo hướng dẫn mới - kiểm tra), hạn nộp tiền: ngày 30 tháng đầu quý sau.","Tạm nộp thiếu quá 20% so với số quyết toán: phải tính tiền chậm nộp trên phần chênh lệch (nguyên tắc từ Luật 38/2019 - kiểm tra có thay đổi)."]},
 {h:"Quyết toán năm",l:["Hạn nộp hồ sơ quyết toán: chậm nhất ngày thứ 90 kể từ ngày kết thúc năm tài chính (kiểm tra theo Luật 108/2025).","Hồ sơ: tờ khai 03/TNDN, các phụ lục, BCTC, báo cáo giao dịch liên kết (nếu có), hồ sơ thuế hỗ trợ."]},
 {h:"Kiểm tra trước khi nộp",l:["BCKQKD khớp với doanh thu trên 01/GTGT cả năm (giải trình chênh lệch).","Bảng kê chi phí không được trừ; lỗ chuyển; thuế nộp thừa/thiếu."]}
 ],
 tip:"Đưa kết quả quý 4 làm căn cứ rà lại tạm tính cả năm để tránh bị tính chậm nộp trên chênh lệch.",
 q:"Năm tạm nộp 800 triệu, quyết toán phải nộp 1.100 triệu. Có phát sinh chậm nộp không, tính trên bao nhiêu?",chk:["20","chenh lech","1.100","880"]},

{id:"tncn1",d:"thue",t:"TNCN 1 - Luật 109/2025: biểu thuế, giảm trừ, hiệu lực",conf:1,v:"11/2026",
 law:"Luật Thuế TNCN 109/2025/QH15, VBHN 112/VBHN-VPQH ngày 20/5/2026 (Điều 9, 10, 29 đã đọc nguyên văn); (thông qua 10/12/2025; hiệu lực 01/07/2026); NĐ 253/2026/NĐ-CP (30/06/2026); NQ 110/2025/UBTVQH15",
 sec:[
 {h:"Mốc áp dụng",l:["Giảm trừ gia cảnh mới (bản thân 15,5 triệu/tháng; mỗi người phụ thuộc 6,2 triệu/tháng) áp dụng từ kỳ tính thuế 2026 (NQ 110/2025).","Luật 109/2025 có hiệu lực từ 01/07/2026, NHƯNG Điều 29 khoản 2 quy định phần thu nhập từ kinh doanh, tiền lương, tiền công của cá nhân cư trú áp dụng từ KỲ TÍNH THUẾ NĂM 2026 (cả năm): biểu 5 bậc (5% - 10% - 20% - 30% - 35%) và giảm trừ mới dùng khi quyết toán năm 2026. Cách khấu trừ tạm thời tháng 1-6/2026 xem hướng dẫn chuyển tiếp của NĐ 253/2026 (chưa đọc nguyên văn).","Quyết toán năm 2025 (nộp 2026): vẫn dùng giảm trừ 11 triệu/4,4 triệu và biểu 7 bậc."]},
 {h:"Biểu thuế lũy tiến từng phần (tháng) - 5 bậc",l:["Đến 10 triệu: 5%","Trên 10 đến 30 triệu: 10%","Trên 30 đến 60 triệu: 20%","Trên 60 đến 100 triệu: 30%","Trên 100 triệu: 35%"]},
 {h:"Khấu trừ tại nguồn",l:["Cá nhân cư trú ký HĐLĐ từ 3 tháng trở lên: khấu trừ theo biểu lũy tiến.","Không ký HĐLĐ hoặc HĐLĐ dưới 3 tháng: khấu trừ 10% trên mỗi lần chi trả; NĐ 253/2026 (Điều 50) nâng ngưỡng khấu trừ lên từ 5 triệu đồng/lần chi trả từ 01/07/2026 (dưới ngưỡng không bắt buộc khấu trừ, trừ khi có yêu cầu).","Cá nhân không cư trú: thuế suất theo luật (tiền lương: 20% trên thu nhập chịu thuế)."]}
 ],
 ex:"Lương gross 40 triệu, 1 người phụ thuộc, BH NLĐ 10,5% (giả sử trần chưa chạm: 4,2 triệu). Thu nhập tính thuế = 40 - 4,2 - 15,5 - 6,2 = 14,1 triệu → thuế = 10 × 5% + 4,1 × 10% = 0,5 + 0,41 = 0,91 triệu. Net = 40 - 4,2 - 0,91 = 34,89 triệu.",
 warn:"Quy định chuyển tiếp 2026 (hai biểu thuế trong một kỳ) phức tạp. Phần mềm tính lương cần xác định rõ cách tính tháng 1-6 và 7-12 và quyết toán.",
 tip:"Dùng tab «Máy tính» để thử lương gross/net theo biểu cũ và mới.",
 q:"Lương gross 55 triệu, 2 người phụ thuộc (trần BHXH chưa chạm). Tính thuế TNCN theo biểu 5 bậc.",chk:["5,775","15,5","12,4","thu nhap tinh thue"]},

{id:"tncn2",d:"thue",t:"TNCN 2 - Thu nhập chịu thuế, miễn thuế, khoản không tính vào thu nhập",conf:2,v:"11/2026",
 law:"Luật 109/2025; NĐ 253/2026; (trước đó Luật 04/2007 và TT 111/2013 - đã được thay thế về cơ bản)",
 sec:[
 {h:"Các khoản thường gặp",l:["Tiền lương, tiền công, thưởng, phụ cấp: chịu thuế, trừ các khoản phụ cấp, trợ cấp luật cho phép miễn: phụ cấp độc hại, phụ cấp ăn giữa ca có mức hợp lý (kiểm tra mức trần miễn thuế còn hiệu lực), phụ cấp đi lại theo quy chế...","Tiền làm thêm giờ, làm đêm: phần chênh lệch cao hơn mức lương ngày bình thường được miễn thuế (theo hướng dẫn).","Bảo hiểm bắt buộc NLĐ đóng: được trừ khi tính thu nhập tính thuế."]},
 {h:"Giảm trừ gia cảnh - người phụ thuộc",l:["Đăng ký người phụ thuộc kèm mã số thuế; điều kiện về độ tuổi, thu nhập (≤ mức quy định), người nuôi dưỡng.","Người phụ thuộc chỉ được giảm trừ một lần cho một người nộp thuế trong cùng kỳ.","Từ 01/07/2026: người phụ thuộc có điều kiện thu nhập theo quy định mới - kiểm tra TT 87/2026/TT-BTC (nếu áp dụng)."]},
 {h:"Thu nhập từ kinh doanh, đầu tư",l:["Chuyển nhượng bất động sản: thuế suất 2% trên giá chuyển nhượng; chuyển nhượng chứng khoán: 0,1% trên giá chuyển nhượng; thu nhập từ cổ tức: 5% (kiểm tra luật mới)."]}
 ],
 warn:"Không dùng thông tin cũ (TT 111/2013) mà không đối chiếu: nhiều quy định đã được thay bởi Luật 109/2025 và NĐ 253/2026.",
 tip:"Lập danh sách các khoản phụ cấp trong quy chế lương: khoản nào miễn, khoản nào chịu thuế, khoản nào vượt mức trần.",
 q:"Khoản phụ cấp ăn trưa 1,2 triệu/tháng của nhân viên: có chịu thuế TNCN không? Điều kiện gì cần kiểm tra?",chk:["muc","mien","quy che","tran"]},

{id:"tncn3",d:"thue",t:"TNCN 3 - Quyết toán, tự quyết toán, ủy quyền",conf:2,v:"11/2026",
 law:"Luật 109/2025; Luật QLT 108/2025; NĐ 253/2026; NĐ 252/2026",
 sec:[
 {h:"Ai quyết toán",l:["Doanh nghiệp quyết toán thay cho NLĐ có hợp đồng từ 3 tháng, nhận ủy quyền (mẫu ủy quyền hiện hành).","Cá nhân tự quyết toán khi: có từ 2 nơi nhận thu nhập tiền lương trở lên; có thu nhập vãng lai; có yêu cầu hoàn thuế.","Hạn: tổ chức trả thu nhập: 90 ngày kể từ ngày kết thúc năm dương lịch; cá nhân tự quyết toán: ngày cuối của tháng thứ tư (kiểm tra thay đổi theo luật mới)."]},
 {h:"Hồ sơ doanh nghiệp",l:["Tờ khai 05/QTT-TNCN, bảng kê 05-1/BK-QTT-TNCN, 05-2/BK-QTT-TNCN (bảng kê người phụ thuộc) - mẫu hiện hành kiểm tra.","Chứng từ khấu trừ thuế cấp cho NLĐ khi có yêu cầu hoặc cuối năm."]}
 ],
 tip:"Cuối năm đối chiếu 3 chiều: bảng lương - tờ khai tháng/quý 02/KK-TNCN - tờ khai quyết toán.",
 q:"Nhân viên làm 2 nơi trong năm, công ty cũ đã khấu trừ. Ai quyết toán và hồ sơ cần gì?",chk:["tu quyet toan","chung tu","ca nhan","hai noi"]}
);
