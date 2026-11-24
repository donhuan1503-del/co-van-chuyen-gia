/* Quản lý thuế - kê khai - hóa đơn - đối chiếu nguồn 11/2026 */
KB.push(
{id:"qlt1",d:"thue",t:"Quản lý thuế 1 - Luật 108/2025 và NĐ 252/2026: điểm mới cần nắm",conf:2,v:"11/2026",
 law:"Luật Quản lý thuế 108/2025/QH15 (hiệu lực 01/07/2026, một số điều từ 01/01/2026); NĐ 252/2026/NĐ-CP (30/06/2026, 7 chương 76 điều, thay NĐ 126/2020); TT 89/2026/TT-BTC",
 sec:[
 {h:"Văn bản",l:["Luật 108/2025 thay Luật 38/2019. Hiệu lực chung từ 01/07/2026; khoản 2 Điều 52 quy định một số nội dung sớm hơn (ví dụ Điều 13 và việc dùng hóa đơn điện tử của hộ kinh doanh - Điều 26 - từ 01/01/2026).","NĐ 252/2026 hướng dẫn, thay NĐ 126/2020 và 4 nghị định sửa đổi. TT 89/2026/TT-BTC hướng dẫn chi tiết."]},
 {h:"Điểm mới đã xác nhận",l:["Thời hạn khai bổ sung hồ sơ khai thuế rút từ 10 năm xuống 5 năm.","Tiền chậm nộp: 0,03%/ngày trên số tiền thuế chậm nộp (nhiều nguồn xác nhận; có 7 trường hợp không tính tiền chậm nộp - khoản 3 Điều 26 NĐ 252).","Khoản 4 Điều 45 Luật 108/2025 liệt kê 10 hành vi bị coi là trốn thuế (đọc trực tiếp văn bản).","Xóa nợ thuế: Điều 35 NĐ 252/2026.","Các khoản nợ đến hết ngày 30/06/2026 được xử lý theo Luật 108/2025 (theo điều khoản chuyển tiếp - kiểm tra)."]},
 {h:"Việc cần làm ngay",l:["Rà soát quy trình khai bổ sung, cung cấp hồ sơ, giải trình với cơ quan thuế theo mốc thời gian mới.","Cập nhật mẫu biểu theo TT 89/2026 và các công văn mới của Cục Thuế (xem tab «Văn bản mới»)."]}
 ],
 warn:"Mỗi tuần có văn bản/công văn mới; tab «Văn bản mới» (cập nhật tự động) là nơi theo dõi.",
 tip:"Lưu bản PDF văn bản gốc vào hồ sơ pháp lý của công ty, ghi chú ngày hiệu lực.",
 q:"Năm 2022 doanh nghiệp phát hiện kê khai thiếu thuế. Còn khai bổ sung được không theo Luật 108/2025 (5 năm)? Hệ quả?",chk:["5 nam","bo sung","cham nop","phat"]},

{id:"qlt2",d:"thue",t:"Quản lý thuế 2 - Hạn nộp tờ khai và cách tính tiền chậm nộp",conf:2,v:"11/2026",
 law:"Luật 108/2025; NĐ 252/2026 Điều 26; TT 89/2026",
 sec:[
 {h:"Hạn nộp (khung thường dùng - cần đối chiếu mốc mới)",l:["GTGT tháng: ngày 20 tháng sau; GTGT quý: ngày 30 tháng đầu quý sau.","TNCN tháng/quý theo đăng ký; quyết toán: 90 ngày (tổ chức), cuối tháng 4 (cá nhân).","TNDN quyết toán: 90 ngày sau kết thúc năm tài chính.","Lệ phí môn bài (nếu còn áp dụng): theo luật phí/lệ phí hiện hành.","Nếu hạn rơi vào ngày nghỉ: dời sang ngày làm việc kế tiếp. Có thông tin về «10 mốc thời hạn nộp hồ sơ khai thuế từ 01/07/2026» - đọc Điều tương ứng của Luật/NĐ 252."]},
 {h:"Tính tiền chậm nộp",l:["Công thức: Tiền chậm nộp = Số tiền thuế chậm nộp × 0,03% × Số ngày chậm nộp.","Số ngày: từ ngày liền sau ngày hết hạn nộp đến ngày nộp tiền vào ngân sách (ngày nộp tiền được tính).","Tiền chậm nộp không được trừ khi tính thuế TNDN."]},
 {h:"Xử phạt vi phạm hành chính về thuế",l:["Nộp hồ sơ khai thuế chậm: phạt cảnh cáo hoặc phạt tiền theo số ngày chậm (khung và mức theo nghị định xử phạt hiện hành - kiểm tra mới thay thế NĐ 125/2020).","Khai sai dẫn đến thiếu thuế: phạt 20% số thuế khai thiếu (nguyên tắc cũ - kiểm tra)."]}
 ],
 ex:"Nộp chậm khoản thuế 200.000.000 đ trong 15 ngày: tiền chậm nộp = 200.000.000 × 0,03% × 15 = 900.000 đ.",
 tip:"Đặt nhắc việc 3 ngày trước hạn; kiểm tra số thuế qua Cổng thuế điện tử (eTax) trước khi nộp.",
 q:"Chậm nộp 350 triệu thuế trong 22 ngày. Tiền chậm nộp bao nhiêu?",chk:["2.310.000","0,03","22","350"]},

{id:"qlt3",d:"thue",t:"Kê khai thuế thực hành: quy trình tháng của kế toán thuế",conf:1,v:"11/2026",
 law:"Thực hành nghiệp vụ; đối chiếu Luật QLT 108/2025",
 sec:[
 {h:"Quy trình chuẩn hằng tháng",l:["Ngày 1-5: khóa sổ mua vào/bán ra; tải hóa đơn điện tử đầu vào từ Tổng cục Thuế; đối chiếu hóa đơn đầu ra đã phát hành.","Ngày 6-10: kiểm tra hóa đơn đầu vào (trạng thái NCC, điều kiện thanh toán, mục đích sử dụng); phân loại hàng hóa chịu thuế/không chịu thuế.","Ngày 10-15: lập tờ khai GTGT (nếu khai tháng) và tờ khai TNCN khấu trừ; đối chiếu với sổ cái.","Ngày 15-20: duyệt nội bộ, ký số, nộp tờ khai; nộp tiền thuế; lưu thông báo chấp nhận (mẫu 01/TB-TNĐT...)."]},
 {h:"Các bước kiểm soát",l:["Trước khi nộp: kiểm tra chỉ tiêu bất thường (thuế đầu vào tăng đột biến, hóa đơn lớn cuối kỳ, hóa đơn NCC mới).","Sau khi nộp: lưu bộ hồ sơ gồm tờ khai, bảng kê, thông báo chấp nhận, chứng từ nộp tiền.","Khi phát hiện sai: khai bổ sung đúng mẫu (01/KHBS), nộp thêm tiền thuế và tiền chậm nộp nếu có."]}
 ],
 tip:"Tách người lập - người duyệt - người nộp để phòng sai sót và gian lận.",
 q:"Tờ khai GTGT đã nộp thiếu 25 triệu thuế đầu ra do sót hóa đơn. Quy trình khai bổ sung thế nào?",chk:["khai bo sung","01/khbs","cham nop","nop them"]},

{id:"hd1",d:"ketoan",t:"Hóa đơn điện tử 2026: NĐ 254/2026 và TT 91/2026",conf:2,v:"11/2026",
 law:"NĐ 254/2026/NĐ-CP (30/06/2026; thay NĐ 123/2020 đã sửa bởi NĐ 70/2025); TT 91/2026/TT-BTC (hiệu lực 01/07/2026); Luật QLT 108/2025",
 sec:[
 {h:"Khung pháp lý hiện hành",l:["Từ 01/07/2026: NĐ 254/2026 là văn bản chính về hóa đơn điện tử và chứng từ điện tử; TT 91/2026 hướng dẫn.","TT 32/2025/TT-BTC (có hiệu lực từ 01/06/2025, thay TT 78/2021) - cần kiểm tra điều khoản hiệu lực của TT 91/2026 đối với từng nội dung.","Hộ kinh doanh có doanh thu trên 1 tỷ đồng/năm: bắt buộc hóa đơn điện tử (có mã hoặc khởi tạo từ máy tính tiền)."]},
 {h:"Xử lý hóa đơn sai sót (điểm mới đã ghi nhận)",l:["TT 91/2026: người bán lập hóa đơn THAY THẾ cho hóa đơn đã lập sai (thay vì điều chỉnh như trước) trong nhiều trường hợp, nhất là hóa đơn khởi tạo từ máy tính tiền; một hóa đơn thay thế có thể thay cho nhiều hóa đơn sai trong cùng tháng kèm bảng kê.","Người mua là hộ kinh doanh: trước khi điều chỉnh/thay thế, hai bên lập văn bản thỏa thuận xác định rõ nội dung sai.","Vẫn phải thực hiện thông báo/giải trình với cơ quan thuế theo mẫu hiện hành (đọc TT 91 để biết mẫu mới)."]},
 {h:"Nguyên tắc nền tảng (ổn định)",l:["Thời điểm lập hóa đơn: bán hàng - khi chuyển giao quyền sở hữu/sử dụng; dịch vụ - khi hoàn thành hoặc khi thu tiền (nếu thu trước).","Không xóa hóa đơn đã phát hành; xử lý bằng thay thế/điều chỉnh/hủy theo thủ tục.","Hóa đơn có thông tin người mua (tên, MST, địa chỉ); kiểm tra MST trên cơ sở dữ liệu thuế."]}
 ],
 warn:"Trước đây tài liệu này (và nhiều bài trên mạng) dẫn NĐ 123/2020, TT 78/2021, NĐ 70/2025 - các văn bản đã bị thay thế một phần/toàn bộ. Dùng văn bản mới và kiểm tra hiệu lực từng điều.",
 tip:"Cập nhật phần mềm hóa đơn lên phiên bản mới nhất; kiểm tra mẫu biên bản thỏa thuận điều chỉnh/thay thế.",
 q:"Hóa đơn bán lẻ từ máy tính tiền lập sai số tiền 12 hóa đơn trong tháng. Xử lý theo TT 91/2026 như thế nào?",chk:["thay the","bang ke","cung thang","thong bao"]}
);
