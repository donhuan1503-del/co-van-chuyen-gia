/* Bổ sung: kiểm tra thuế, lập BCTC, định khoản loại 7-8, thuế TNDN, thuế hoãn lại, kết chuyển */
TOPICS.kiemtra = "Kiểm tra thuế & rủi ro";
TOPICS.bctc = "Lập & soát BCTC";
TOPICS.dk_loai8 = "Định khoản: loại 7-8, TNDN & hoãn lại";
QUIZ.push(
{t:"kiemtra",q:"Cơ quan thuế phát hiện rủi ro chủ yếu bằng cách nào?",o:["Chỉ nghe tố giác","Đối chiếu dữ liệu giữa các nguồn (hóa đơn, tờ khai, ngân hàng...) rồi chấm điểm rủi ro","Chỉ kiểm tra ngẫu nhiên","Chỉ dựa vào BCTC kiểm toán"],a:1,e:"Quản lý rủi ro dựa trên đối chiếu dữ liệu (Luật QLT 2025, TT 94/2026)."},
{t:"kiemtra",q:"Thời hạn kiểm tra thuế tại trụ sở (Luật QLT 2025, theo nguồn đã tra) tối đa:",o:["10 ngày","20 ngày, gia hạn một lần không quá 20 ngày","60 ngày","90 ngày"],a:1,e:"Không quá 20 ngày, có thể gia hạn 1 lần không quá 20 ngày."},
{t:"kiemtra",q:"Dấu hiệu nào KHÔNG thường bị coi là rủi ro cao về thuế đối với doanh nghiệp?",o:["Lỗ nhiều năm nhưng vẫn mở rộng","Doanh thu trên BCTC khác tờ khai GTGT không giải thích được","Hàng tồn kho âm trong sổ","Thanh toán chuyển khoản đầy đủ, hồ sơ nhất quán"],a:3,e:"Hồ sơ nhất quán, dữ liệu khớp nhau là dấu hiệu tuân thủ tốt."},
{t:"kiemtra",q:"Hộ kinh doanh khai doanh thu 900 triệu nhưng dòng tiền vào tài khoản kinh doanh 1,6 tỷ. Việc đầu tiên hộ nên làm khi bị hỏi?",o:["Phủ nhận","Đối chiếu sao kê, tách khoản không phải doanh thu có chứng từ, khai bổ sung nếu thiếu","Đóng tài khoản","Bỏ qua thông báo"],a:1,e:"Giải trình bằng chứng từ; sai thì khai bổ sung sớm để giảm xử phạt."},
{t:"kiemtra",q:"Thời hạn khai bổ sung hồ sơ khai thuế theo Luật QLT 2025:",o:["3 năm","5 năm","7 năm","10 năm"],a:1,e:"Rút từ 10 năm còn 5 năm."},
{t:"bctc",q:"Thứ tự đúng khi khóa sổ cuối năm:",o:["Kết chuyển 911 → tính thuế TNDN → khấu hao","Khấu hao/ phân bổ/ trích trước → 711, 811 → thuế TNDN → kết chuyển 911 → 421","Lập B01 trước rồi tính thuế","Tính thuế TNDN trước khi hạch toán chi phí"],a:1,e:"Phải hoàn tất mọi điều chỉnh (kể cả thuế TNDN) trước khi kết chuyển 911."},
{t:"bctc",q:"TK 8212 trong chế độ kế toán đối ứng chủ yếu với:",o:["111, 112","243 và 347","331 và 131","421 và 411"],a:1,e:"Thuế TNDN hoãn lại: 243 (tài sản) và 347 (phải trả)."},
{t:"bctc",q:"Dự phòng phải thu khó đòi 100 triệu mà thuế không cho trừ ở năm này; thuế suất 20%. Định khoản thuế hoãn lại:",o:["Nợ 243 20tr / Có 8212 20tr","Nợ 347 20tr / Có 8212 20tr","Nợ 8212 20tr / Có 243 20tr","Không định khoản"],a:0,e:"Chênh lệch tạm thời được khấu trừ → tài sản thuế hoãn lại (Nợ 243, Có 8212)."},
{t:"bctc",q:"Tổng LN kế toán trước thuế 320, thuế hiện hành 60, thuế hoãn lại (chi phí) 10. LNST là:",o:["320","260","250","310"],a:2,e:"320 - 60 - 10 = 250."},
{t:"bctc",q:"Sau khi kết chuyển cuối năm, các TK nào phải có số dư bằng 0?",o:["Chỉ 911","Loại 5, 6, 7, 8 và 911","Loại 1, 2","Loại 4"],a:1,e:"Tất cả TK doanh thu-chi phí (5, 6, 7, 8) và 911 phải hết số dư."},
{t:"bctc",q:"Điều nào là lỗi chắc chắn (không phải chỉ cảnh báo) của BCTC?",o:["Phải thu tăng nhanh hơn doanh thu","Tổng tài sản khác tổng nguồn vốn","Biên lợi nhuận thấp hơn ngành","Tồn kho tăng"],a:1,e:"Đẳng thức kế toán TS = NV là điều kiện toán học bắt buộc."},
{t:"bctc",q:"LNST trên B02 là 500 triệu, không chia cổ tức, nhưng 421 chỉ tăng 300 triệu. Hướng kiểm tra đầu tiên:",o:["Bỏ qua","Tìm bút toán điều chỉnh/ chia lợi nhuận/ sai sót năm trước, đối chiếu sổ cái 421","Sửa B02","Tăng vốn góp"],a:1,e:"421 phải khớp với LNST và các khoản phân phối; chênh lệch có nguyên nhân cụ thể."},
{t:"tndn",q:"Khoản nào cộng vào thu nhập tính thuế khi quyết toán TNDN (điều chỉnh tăng)?",o:["Cổ tức nhận từ công ty trong nước đã nộp thuế","Tiền phạt vi phạm hành chính đã ghi chi phí","Hoàn nhập dự phòng đã bị loại","Lỗ năm trước chuyển sang"],a:1,e:"Phạt vi phạm hành chính không được trừ - cộng lại vào thu nhập tính thuế."},
{t:"tndn",q:"LNTT 1,5 tỷ; điều chỉnh tăng 220 triệu; giảm 70 triệu; thuế suất 20%. Thuế TNDN phải nộp:",o:["300 triệu","330 triệu","350 triệu","375 triệu"],a:1,e:"(1.500+220-70) = 1.650 × 20% = 330 triệu."}
);
DK.push(
{t:"dk_loai8",id:"dk28",s:"Thanh lý TSCĐ: nguyên giá 120.000.000, hao mòn lũy kế 100.000.000. Ghi giảm TSCĐ và giá trị còn lại.",ans:[["214","N",100000000],["811","N",20000000],["211","C",120000000]],h:"Giá trị còn lại = chi phí khác 811."},
{t:"dk_loai8",id:"dk29",s:"Thu tiền thanh lý TSCĐ qua ngân hàng: giá bán 30.000.000, VAT 10% (3.000.000).",ans:[["112","N",33000000],["711","C",30000000],["3331","C",3000000]],h:"Thu nhập khác = 711 (giá chưa thuế)."},
{t:"dk_loai8",id:"dk30",s:"Chi phí tháo dỡ, thanh lý TSCĐ trả bằng tiền mặt 2.000.000 (không VAT).",ans:[["811","N",2000000],["111","C",2000000]],h:"Chi phí thanh lý ghi 811."},
{t:"dk_loai8",id:"dk31",s:"Bị phạt chậm nộp thuế 5.000.000 đã chuyển khoản (ghi nhận chi phí kế toán).",ans:[["811","N",5000000],["112","C",5000000]],h:"Phạt vi phạm: 811 (không được trừ khi tính thuế TNDN)."},
{t:"dk_loai8",id:"dk32",s:"Ghi nhận chi phí thuế TNDN hiện hành của năm 216.000.000.",ans:[["8211","N",216000000],["3334","C",216000000]],h:"8211: chi phí thuế TNDN hiện hành."},
{t:"dk_loai8",id:"dk33",s:"Tạm nộp thuế TNDN quý bằng chuyển khoản 45.000.000.",ans:[["3334","N",45000000],["112","C",45000000]],h:"Tạm nộp: Nợ 3334."},
{t:"dk_loai8",id:"dk34",s:"Ghi nhận tài sản thuế TNDN hoãn lại 20.000.000 từ dự phòng phải thu khó đòi chưa được trừ thuế.",ans:[["243","N",20000000],["8212","C",20000000]],h:"Tài sản thuế hoãn lại = 243."},
{t:"dk_loai8",id:"dk35",s:"Ghi nhận thuế TNDN hoãn lại phải trả 10.000.000 do chênh lệch tạm thời chịu thuế.",ans:[["8212","N",10000000],["347","C",10000000]],h:"Thuế hoãn lại phải trả = 347."},
{t:"dk_loai8",id:"dk36",s:"Trích trước lãi vay phải trả cuối kỳ 2.000.000 (chưa có chứng từ).",ans:[["635","N",2000000],["335","C",2000000]],h:"Chi phí phải trả = 335."},
{t:"dk_loai8",id:"dk37",s:"Trích lập dự phòng phải thu khó đòi 10.000.000 (hạch toán vào chi phí quản lý).",ans:[["642","N",10000000],["2293","C",10000000]],h:"Dự phòng phải thu khó đòi = 2293."},
{t:"dk_ketchuyen",id:"dk38",s:"Kết chuyển thu nhập khác 20.000.000 sang xác định kết quả.",ans:[["711","N",20000000],["911","C",20000000]],h:"Doanh thu/thu nhập kết chuyển Nợ."},
{t:"dk_ketchuyen",id:"dk39",s:"Kết chuyển chi phí khác 30.000.000 sang xác định kết quả.",ans:[["911","N",30000000],["811","C",30000000]],h:"Chi phí kết chuyển Có."},
{t:"dk_ketchuyen",id:"dk40",s:"Kết chuyển chi phí thuế TNDN hiện hành 60.000.000 sang xác định kết quả.",ans:[["911","N",60000000],["8211","C",60000000]],h:"Chi phí thuế TNDN kết chuyển Có 8211."},
{t:"dk_ketchuyen",id:"dk41",s:"Kết chuyển thu nhập thuế TNDN hoãn lại (số dư Có 8212) 15.000.000.",ans:[["8212","N",15000000],["911","C",15000000]],h:"Thu nhập thuế hoãn lại: Nợ 8212, Có 911."},
{t:"dk_ketchuyen",id:"dk42",s:"Doanh nghiệp lỗ sau thuế 80.000.000: kết chuyển lỗ vào lợi nhuận chưa phân phối.",ans:[["421","N",80000000],["911","C",80000000]],h:"Lỗ: Nợ 421, Có 911."},
{t:"dk_ketchuyen",id:"dk43",s:"Quyết định chia cổ tức 100.000.000 (chưa chi trả).",ans:[["421","N",100000000],["3388","C",100000000]],h:"Cổ tức phải trả = 3388."}
);

QUIZ.push(
{t:"kiemtra",q:"Đoàn thuế đến cửa hàng, việc ĐẦU TIÊN hộ cần làm là:",o:["Đưa ngay mọi sổ sách","Đề nghị xuất trình thẻ công chức và quyết định kiểm tra, đọc phạm vi, thời hạn, thẩm quyền","Từ chối vào","Sửa lại sổ sách cho khớp"],a:1,e:"Kiểm tra tính hợp lệ của quyết định/thẩm quyền và phạm vi trước khi cung cấp hồ sơ; không được sửa sổ sách."},
{t:"kiemtra",q:"Không đồng ý với một nội dung trong biên bản kiểm tra, hộ nên:",o:["Ký luôn cho nhanh","Không ký và bỏ về","Ghi ý kiến bảo lưu vào biên bản kèm lý do và hẹn bổ sung chứng cứ","Xé biên bản"],a:2,e:"Ghi ý kiến bảo lưu trong biên bản, sau đó giải trình bằng văn bản có chứng cứ."},
{t:"kiemtra",q:"Tiền vào tài khoản kinh doanh lớn hơn doanh thu kê khai. Cách chứng minh khoản không phải doanh thu đúng nhất:",o:["Nói miệng là tiền người thân","Có chứng cứ từng khoản: hợp đồng vay, sao kê bên chuyển, biên nhận","Đóng tài khoản","Khai thêm ngẫu nhiên"],a:1,e:"Cần chứng từ từng khoản; không có thì có thể bị tính vào doanh thu."},
{t:"kiemtra",q:"Một người đứng tên hai hộ kinh doanh, mỗi hộ dưới ngưỡng, thu tiền chung tài khoản. Rủi ro chính:",o:["Không có rủi ro","Bị xác định là chia nhỏ để né ngưỡng, tính gộp doanh thu và truy thu","Được giảm thuế","Chỉ bị nhắc nhở"],a:1,e:"Một cá nhân chỉ là một hộ kinh doanh; nhiều địa điểm thì cộng doanh thu."},
{t:"kiemtra",q:"Hộ bán cả cửa hàng và sàn thương mại điện tử nên khai doanh thu:",o:["Chỉ cửa hàng","Tổng doanh thu mọi kênh, đối chiếu báo cáo đối soát sàn với sao kê","Chỉ sàn","Tùy ý"],a:1,e:"Cơ quan thuế nhận dữ liệu sàn/ví/ngân hàng; phải gộp mọi kênh."},
{t:"kiemtra",q:"Hóa đơn mua vào của nhà cung cấp bỏ trốn: hộ cần chứng minh:",o:["Không cần gì","Giao dịch có thật: hợp đồng, phiếu giao nhận, thanh toán, vận chuyển","Chỉ cần giữ hóa đơn","Hủy hóa đơn"],a:1,e:"Giao dịch thật và chứng từ thanh toán là điểm mấu chốt."}
);

QUIZ.push(
{t:"bhxh",q:"Doanh nghiệp kê khai lương đóng BHXH thấp hơn thực tế và sau 60 ngày vẫn không khắc phục. Theo NĐ 274/2025 (tóm tắt), hành vi là:",o:["Chậm đóng","Trốn đóng","Không vi phạm","Chỉ sai sót kế toán"],a:1,e:"Quá 60 ngày không khắc phục là trốn đóng; vẫn phải nộp đủ và lãi 0,03%/ngày."},
{t:"bhxh",q:"Lãi chậm đóng, trốn đóng BHXH theo NĐ 274/2025 (tóm tắt) là:",o:["0,01%/ngày","0,03%/ngày","0,05%/ngày","Theo lãi suất ngân hàng"],a:1,e:"0,03%/ngày trên số tiền và số ngày chậm."},
{t:"laodong",q:"Doanh nghiệp có từ bao nhiêu người lao động trở lên phải có nội quy lao động bằng văn bản?",o:["5","10","20","50"],a:1,e:"BLLĐ 2019: từ 10 người lao động trở lên, và phải đăng ký."},
{t:"luong",q:"Trả lương chậm từ bao nhiêu ngày trở lên thì phải trả thêm khoản tiền tương ứng lãi suất tiền gửi 12 tháng?",o:["3 ngày","7 ngày","15 ngày","30 ngày"],a:2,e:"BLLĐ 2019 Điều 97: từ 15 ngày trở lên."},
{t:"chamcong",q:"Giới hạn giờ làm thêm tối đa (ngành thông thường):",o:["30 giờ/tháng, 100 giờ/năm","40 giờ/tháng, 200 giờ/năm","60 giờ/tháng, 300 giờ/năm","Không giới hạn"],a:1,e:"Trừ ngành nghề đặc thù được tối đa 300 giờ/năm."}
);
