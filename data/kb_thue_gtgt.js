/* Thuế GTGT - đối chiếu nguồn 11/2026. conf:1 ổn định; conf:2 nên đối chiếu văn bản gốc */
KB.push(
{id:"gtgt1",d:"thue",t:"GTGT 1 - Khung pháp lý và đối tượng chịu thuế",conf:2,v:"11/2026",
 law:"Luật Thuế GTGT 48/2024/QH15 (từ 01/07/2025); NĐ 181/2025/NĐ-CP; NĐ 144/2026/NĐ-CP (sửa đổi NĐ 181, hiệu lực 20/06/2026)",
 sec:[
 {h:"Văn bản đang hiệu lực",l:["Luật 48/2024/QH15 thay Luật GTGT 2008. NĐ 181/2025 hướng dẫn; NĐ 144/2026 sửa đổi, bổ sung NĐ 181 (nội dung cụ thể: đọc văn bản gốc).","Luật sửa đổi bổ sung tháng 12/2025 đã nâng ngưỡng doanh thu không chịu thuế của hộ, cá nhân kinh doanh (xem mục Hộ kinh doanh). Luôn kiểm tra văn bản hợp nhất."]},
 {h:"Đối tượng chịu thuế",l:["Hàng hóa, dịch vụ dùng cho sản xuất, kinh doanh và tiêu dùng ở Việt Nam (kể cả mua của tổ chức, cá nhân ở nước ngoài).","Người nộp thuế: tổ chức, cá nhân sản xuất kinh doanh; tổ chức, cá nhân nhập khẩu; tổ chức nước ngoài cung cấp dịch vụ điện tử, kinh doanh thương mại điện tử (nhà cung cấp nước ngoài, sàn thương mại điện tử khấu trừ - nộp thay)."]},
 {h:"Đối tượng không chịu thuế (nhóm thường gặp)",l:["Sản phẩm trồng trọt, chăn nuôi, thủy sản chưa qua chế biến hoặc chỉ sơ chế thông thường; muối; giống cây trồng, vật nuôi; phân bón, thức ăn chăn nuôi (theo danh mục luật).","Dịch vụ y tế; giáo dục, đào tạo theo quy định; bảo hiểm nhân thọ; dịch vụ tài chính, ngân hàng, chứng khoán theo luật; chuyển nhượng quyền sử dụng đất; nước sạch phục vụ sinh hoạt...","Điểm hay nhầm: hàng hóa thuộc diện KHÔNG chịu thuế khác với thuế suất 0%. Không chịu thuế → không được khấu trừ đầu vào. Thuế suất 0% → vẫn được khấu trừ và hoàn thuế."]}
 ],
 warn:"Danh mục không chịu thuế rất chi tiết (có điều kiện về chủng loại, khâu kinh doanh). Trước khi áp dụng cho một mặt hàng cụ thể phải tra Điều 5 Luật 48/2024 và hướng dẫn tại NĐ 181/2025 đã sửa đổi.",
 tip:"Quy trình đúng: xác định (1) có chịu thuế không, (2) thuế suất nào, (3) có điều kiện khấu trừ/hoàn không.",
 q:"Công ty bán gạo đã sơ chế và dịch vụ vận chuyển gạo cho khách. Hai khoản này có cùng thuế suất không? Có được khấu trừ đầu vào không?",chk:["khong chiu thue","khau tru","dich vu","thue suat"]},

{id:"gtgt2",d:"thue",t:"GTGT 2 - Thuế suất, giảm 2% và thời điểm xác định",conf:2,v:"11/2026",
 law:"Luật 48/2024 Điều 9; NĐ 174/2025/NĐ-CP; Nghị quyết 204/2025/QH15 (giảm 2% đến hết 31/12/2026)",
 sec:[
 {h:"Các mức thuế suất",l:["0%: hàng hóa, dịch vụ xuất khẩu và các trường hợp luật quy định (vận tải quốc tế, dịch vụ cung cấp ở ngoài VN...) - đủ hồ sơ mới áp dụng.","5%: nhóm thiết yếu theo luật (nước sạch, phân bón?, thiết bị y tế... xem danh mục Điều 9).","10%: mức phổ thông.","Hàng hóa/dịch vụ chịu thuế chia thành nhóm theo phương pháp khấu trừ, tính trực tiếp trên GTGT hoặc tỷ lệ % trên doanh thu."]},
 {h:"Giảm 2% (10% → 8%)",l:["Áp dụng từ 01/07/2025 đến hết 31/12/2026 theo NĐ 174/2025 cho hàng hóa, dịch vụ đang chịu 10%, trừ các nhóm loại trừ tại Phụ lục I, II, III của nghị định (viễn thông, công nghệ thông tin, tài chính, ngân hàng, chứng khoán, bảo hiểm, bất động sản, kim loại và sản phẩm kim loại, khai khoáng, than, dầu mỏ, hóa chất, hàng hóa/dịch vụ chịu thuế tiêu thụ đặc biệt ngoài xăng...).","Cơ sở kinh doanh khấu trừ: ghi thuế suất 8% trên hóa đơn; phương pháp trực tiếp: giảm 20% mức tỷ lệ % để tính GTGT.","Không quy định gia hạn sau 31/12/2026 trong các nguồn đã kiểm tra - từ 01/01/2027 mặc định trở lại 10% trừ khi có văn bản mới. THEO DÕI mục «Văn bản mới»."]},
 {h:"Thời điểm xác định thuế suất",l:["Hàng hóa: thời điểm chuyển giao quyền sở hữu/ quyền sử dụng. Dịch vụ: thời điểm hoàn thành hoặc xuất hóa đơn (nếu lập hóa đơn trước).","Nguyên tắc thực hành: hóa đơn lập tháng 12/2026 cho giao dịch phát sinh tháng 12/2026 → 8% (nếu thuộc diện giảm); giao dịch sang 2027 → 10%.","Lập hóa đơn trước thời điểm giao hàng/dịch vụ để hưởng thuế suất thấp mà thực tế phát sinh sau là rủi ro bị truy thu."]}
 ],
 ex:"Công ty bán lô hàng giá chưa thuế 500.000.000 đ vào ngày 20/12/2026, thuộc diện giảm: VAT = 500.000.000 × 8% = 40.000.000 đ, tổng thanh toán 540.000.000 đ. Cùng lô hàng nếu thời điểm chuyển giao là 05/01/2027 và không có gia hạn: 10% = 50.000.000 đ.",
 tip:"Kiểm tra phần mềm hóa đơn/kế toán đã cấu hình đúng 8% - 10% theo ngày hóa đơn, tránh dùng thuế suất cố định cho cả năm.",
 q:"Bán hàng ngày 31/12/2026 nhưng xuất hóa đơn ngày 02/01/2027. Thuế suất nào áp dụng? Căn cứ gì?",chk:["thoi diem","chuyen giao","8","10"]},

{id:"gtgt3",d:"thue",t:"GTGT 3 - Khấu trừ thuế đầu vào: điều kiện và các cạm bẫy",conf:2,v:"11/2026",
 law:"Luật 48/2024 Điều 14; NĐ 181/2025; Luật Quản lý thuế 108/2025; NĐ 254/2026 (hóa đơn)",
 sec:[
 {h:"Điều kiện khấu trừ",l:["Có hóa đơn GTGT hợp pháp (hoặc chứng từ nộp thuế nhập khẩu, chứng từ khấu trừ thay) của hàng hóa/dịch vụ mua vào phục vụ hoạt động chịu thuế GTGT.","Có chứng từ thanh toán không dùng tiền mặt cho hóa đơn từ 5 triệu đồng trở lên (hạ từ 20 triệu từ 01/07/2025). Thanh toán qua tài khoản của chính người mua cho tài khoản của bên bán; trường hợp bù trừ công nợ, ủy quyền cần đủ hồ sơ theo hướng dẫn.","Hóa đơn đúng kỳ: kê khai trong kỳ phát sinh hoặc các kỳ tiếp theo theo thời hạn quy định (kiểm tra thời hạn kê khai sót hiện hành - Luật QLT mới)."]},
 {h:"Cạm bẫy phổ biến",l:["Hóa đơn của nhà cung cấp «ma»/bỏ trốn: giữ hồ sơ chứng minh giao dịch thực (hợp đồng, nghiệm thu, chuyển tiền, nguồn gốc hàng).","Chi tiêu cá nhân, quà biếu không hợp lệ: không khấu trừ.","Ô tô chở người ≤ 9 chỗ: khấu trừ bị khống chế theo giá trị (theo hướng dẫn hiện hành - kiểm tra ngưỡng).","Hàng hóa dùng chung cho hoạt động chịu thuế và không chịu thuế: phân bổ theo tỷ lệ doanh thu."]},
 {h:"Hoàn thuế",l:["Xuất khẩu: hoàn khi đủ hồ sơ; dự án đầu tư; số thuế chưa khấu trừ hết sau thời gian quy định... Rủi ro: hoàn trước - kiểm sau hoặc kiểm trước - hoàn sau tùy mức rủi ro.","Hồ sơ hoàn phải khớp: hóa đơn, tờ khai hải quan, chứng từ thanh toán qua ngân hàng, hợp đồng."]}
 ],
 ex:"Mua văn phòng phẩm 12.000.000 đ + VAT 960.000 đ (8%), thanh toán tiền mặt → VAT 960.000 đ KHÔNG được khấu trừ (từ 5 triệu phải chuyển khoản). Hạch toán chi phí 12.960.000 đ; nếu chi phí vẫn được trừ TNDN hay không phụ thuộc Luật TNDN 67/2025 và NĐ 320/2025 (kiểm tra điều kiện chứng từ).",
 warn:"Mức 5 triệu áp dụng cho từng hóa đơn (hóa đơn có giá trị thanh toán gồm cả thuế). Chia nhỏ hóa đơn để né ngưỡng là hành vi rủi ro.",
 tip:"Thiết kế quy trình: kế toán chặn không cho thanh toán tiền mặt hóa đơn ≥ 5 triệu - hơn là sửa sau khi đã kê khai.",
 q:"Mua 2 hóa đơn cùng NCC trong ngày, mỗi hóa đơn 4,8 triệu, trả tiền mặt cùng lúc. Có được khấu trừ không? Lập luận?",chk:["tung hoa don","5 trieu","chia nho","khau tru"]},

{id:"gtgt4",d:"thue",t:"GTGT 4 - Tờ khai, kê khai và hạch toán cuối kỳ",conf:2,v:"11/2026",
 law:"Luật QLT 108/2025; NĐ 252/2026/NĐ-CP; TT 89/2026/TT-BTC; mẫu 01/GTGT (kiểm tra mẫu hiện hành)",
 sec:[
 {h:"Kê khai tháng/quý",l:["Doanh nghiệp quy mô nhỏ có thể khai quý; điều kiện theo doanh thu năm trước liền kề (kiểm tra ngưỡng theo văn bản hiện hành). Chuyển sang khai tháng/quý theo năm dương lịch; không đổi giữa năm.","Hạn nộp tờ khai tháng: ngày 20 tháng sau; quý: ngày cuối của tháng đầu quý sau (theo cơ chế Luật 38/2019 - cần kiểm tra thay đổi ở Luật 108/2025 và NĐ 252/2026)."]},
 {h:"Cấu trúc tờ khai 01/GTGT (khấu trừ)",l:["Phụ lục 01-1/GTGT: bảng kê bán ra; 01-2/GTGT: bảng kê mua vào (theo cơ chế mới, bảng kê có thể được hệ thống tự tổng hợp từ hóa đơn điện tử - đọc hướng dẫn mới).","Các chỉ tiêu chính: thuế còn được khấu trừ kỳ trước chuyển sang; tổng thuế đầu vào được khấu trừ kỳ này; thuế đầu ra; thuế phải nộp hoặc thuế còn được khấu trừ chuyển kỳ sau."]},
 {h:"Hạch toán cuối kỳ",l:["Khấu trừ: Nợ 3331 / Có 133 (số nhỏ hơn giữa đầu ra và đầu vào đủ điều kiện).","Nộp tiền: Nợ 3331 / Có 112.","Thuế đầu vào không đủ điều kiện: tính vào chi phí/giá trị hàng tồn kho, không để lại ở 133."]}
 ],
 warn:"Khi lập tờ khai phải đối chiếu: (1) doanh thu trên tờ khai GTGT với doanh thu trên BCKQKD; (2) hóa đơn đầu vào trên hệ thống thuế với sổ chi tiết 133; (3) số dư 133 cuối kỳ với tờ khai.",
 tip:"Chốt 3 bảng đối chiếu hằng tháng: bán ra (HĐĐT vs 511 vs tờ khai), mua vào (HĐĐT vs 133 vs tờ khai), số dư 3331/133.",
 q:"Cuối tháng thuế đầu ra 300 triệu, đầu vào đủ điều kiện 340 triệu. Hạch toán thế nào và số dư chuyển kỳ sau?",chk:["300","40","3331","133"]},

{id:"gtgt5",d:"thue",t:"GTGT 5 - Hộ kinh doanh, cá nhân kinh doanh",conf:2,v:"11/2026",
 law:"NĐ 68/2026/NĐ-CP (05/03/2026); NĐ 141/2026/NĐ-CP (29/04/2026); TT 18/2026/TT-BTC; Luật QLT 108/2025",
 sec:[
 {h:"Điểm mới 2026 (đã kiểm chứng từ nhiều nguồn)",l:["Từ 01/01/2026 bỏ phương thức thuế khoán; hộ kinh doanh kê khai theo doanh thu thực tế.","NĐ 68/2026 đặt ngưỡng 500 triệu đồng/năm; NĐ 141/2026 sửa lên 01 tỷ đồng/năm: doanh thu từ 01 tỷ đồng/năm trở xuống không chịu thuế GTGT và TNCN. Các nguồn báo chí ghi áp dụng từ 01/01/2026 - đối chiếu điều khoản hiệu lực của NĐ 141.","Hộ có doanh thu trên 01 tỷ đồng/năm phải dùng hóa đơn điện tử (có mã hoặc khởi tạo từ máy tính tiền).","Hộ chọn tính thuế theo thu nhập (thay vì theo tỷ lệ % doanh thu) phải áp dụng tối thiểu 2 năm liên tục."]},
 {h:"Cách tính (khái quát)",l:["GTGT = doanh thu tính thuế × tỷ lệ % theo ngành (phần doanh thu vượt ngưỡng miễn thuế).","TNCN: phần doanh thu vượt ngưỡng nhân tỷ lệ theo ngành, hoặc (thu nhập tính thuế) × thuế suất nếu chọn phương pháp lợi nhuận (cần sổ sách).","Doanh nghiệp có tổng doanh thu năm dưới 01 tỷ đồng được miễn thuế TNDN (bổ sung bởi NĐ 141/2026 vào NĐ 320/2025)."]}
 ],
 warn:"Mục này thay đổi liên tục (2 nghị định trong 2 tháng). Luôn đọc bản hợp nhất mới nhất và công văn hướng dẫn của Cục Thuế.",
 tip:"Hộ kinh doanh sát ngưỡng 01 tỷ: theo dõi doanh thu lũy kế từng ngày và sẵn sàng hóa đơn điện tử trước khi vượt.",
 q:"Hộ kinh doanh bán lẻ doanh thu lũy kế đạt 0,98 tỷ vào tháng 11. Cần chuẩn bị gì trước khi vượt ngưỡng?",chk:["hoa don","1 ty","ke khai","may tinh tien"]}
);
