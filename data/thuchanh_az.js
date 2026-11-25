/* THỰC HÀNH A-Z: một tháng làm kế toán trọn vẹn cho 3 loại hình: THƯƠNG MẠI, DỊCH VỤ, SẢN XUẤT.
   Người học tự định khoản từng nghiệp vụ (chọn Nợ/Có, tài khoản, số tiền), app chấm, giải thích, rồi tự sinh sổ cái, bảng cân đối số phát sinh,
   báo cáo kết quả kinh doanh, bảng cân đối kế toán rút gọn và số liệu tờ khai GTGT từ chính các bút toán đúng.
   Quy ước chung: thuế GTGT 10%, phương pháp khấu trừ; thuế TNDN 20%; BHXH doanh nghiệp 17% (3% + 14%), BHYT 3%, BHTN 1%;
   người lao động 8%, 1,5%, 1%; bỏ qua bảo hiểm TNLĐ-BNN, kinh phí công đoàn và thuế TNCN để tập trung vào luồng nghiệp vụ.
   Tài khoản theo hệ thống TT 200 / TT 99/2025 (kiểm tra tên và số hiệu theo phần mềm đang dùng). Số liệu đơn vị: đồng; viết tắt "tr" = triệu. */
var AZ_ACC={"111":"Tiền mặt","112":"Tiền gửi ngân hàng","131":"Phải thu của khách hàng","133":"Thuế GTGT được khấu trừ","141":"Tạm ứng","152":"Nguyên liệu, vật liệu","154":"Chi phí sản xuất kinh doanh dở dang","155":"Thành phẩm","156":"Hàng hóa","211":"Tài sản cố định hữu hình","214":"Hao mòn TSCĐ","242":"Chi phí trả trước","331":"Phải trả người bán","3331":"Thuế GTGT phải nộp","3334":"Thuế thu nhập doanh nghiệp","334":"Phải trả người lao động","3383":"Bảo hiểm xã hội","3384":"Bảo hiểm y tế","3386":"Bảo hiểm thất nghiệp","3387":"Doanh thu chưa thực hiện","411":"Vốn đầu tư của chủ sở hữu","421":"Lợi nhuận sau thuế chưa phân phối","511":"Doanh thu bán hàng và cung cấp dịch vụ","621":"Chi phí nguyên liệu, vật liệu trực tiếp","622":"Chi phí nhân công trực tiếp","627":"Chi phí sản xuất chung","632":"Giá vốn hàng bán","641":"Chi phí bán hàng","642":"Chi phí quản lý doanh nghiệp","821":"Chi phí thuế TNDN hiện hành","911":"Xác định kết quả kinh doanh"};
var AZ_CASES=[

/* ============ A. THƯƠNG MẠI ============ */
{id:"tm",name:"Công ty TNHH Thương mại An Phát - bán buôn thiết bị điện gia dụng",kind:"Thương mại",
 desc:"Mua hàng của nhà cung cấp, nhập kho, bán buôn và bán lẻ, giá vốn bình quân gia quyền. Một tháng làm đủ: mua - bán - thu chi - lương và bảo hiểm - khấu hao - khấu trừ GTGT - xác định kết quả.",
 open:[["111","D",50e6],["112","D",600e6],["131","D",300e6],["156","D",800e6],["211","D",400e6],["214","C",100e6],["331","C",250e6],["411","C",1500e6],["421","C",300e6]],
 tasks:[
  {h:"Mua hàng",docs:"Đơn đặt hàng, hợp đồng, hóa đơn GTGT, biên bản giao nhận, phiếu nhập kho",ctl:"Ba bên khớp: đơn hàng - phiếu nhập - hóa đơn; kiểm tra trạng thái hóa đơn trên cổng hóa đơn điện tử; hóa đơn từ 5 triệu cần chứng từ chuyển khoản.",err:"Hàng nhập ghi thẳng chi phí; thuế đầu vào ghi vào giá hàng; chi phí vận chuyển ghi chi phí bán hàng thay vì giá gốc."},
  {h:"Bán hàng và thu tiền",docs:"Hợp đồng, đơn hàng, phiếu xuất kho, hóa đơn GTGT, biên bản giao hàng, giấy báo có",ctl:"Hóa đơn lập đúng thời điểm chuyển giao; doanh thu và giá vốn ghi cùng kỳ; đối chiếu công nợ hằng tháng.",err:"Thiếu bút toán giá vốn; ghi doanh thu sai kỳ; thuế đầu ra sai tài khoản."},
  {h:"Lương và bảo hiểm",docs:"Bảng chấm công, bảng lương, hợp đồng lao động, thông báo đóng BHXH",ctl:"Bảng lương khớp chấm công; BHXH tách phần doanh nghiệp và phần người lao động; nộp đúng hạn.",err:"Gộp BHTN vào BHYT; ghi phần bảo hiểm người lao động vào chi phí."},
  {h:"TSCĐ và khấu hao",docs:"Thẻ TSCĐ, bảng tính khấu hao",ctl:"Khấu hao tính theo bộ phận sử dụng; không trích sau khi TSCĐ đã hết khấu hao.",err:"Ghi giảm nguyên giá thay vì tăng hao mòn."},
  {h:"Thuế GTGT và kết quả",docs:"Bảng kê hóa đơn mua vào, bán ra; tờ khai 01/GTGT",ctl:"Thuế đầu ra, đầu vào trên sổ khớp bảng kê và tờ khai; khấu trừ bằng số nhỏ hơn.",err:"Khấu trừ vượt đầu ra; không khớp 3331, 133 với tờ khai."}
 ],
 txns:[
  {date:"Ngày 02",desc:"Mua hàng của Công ty Sao Mai nhập kho: giá chưa thuế 400.000.000 đồng, thuế GTGT 10% là 40.000.000 đồng. Chưa thanh toán.",docs:["Hóa đơn GTGT","Phiếu nhập kho"],lines:[["D","156",400e6],["D","133",40e6],["C","331",440e6]],ex:"Hàng mua để bán là hàng tồn kho (156); thuế đầu vào đủ điều kiện ghi riêng Nợ 133; mua chịu ghi Có 331 theo tổng thanh toán."},
  {date:"Ngày 03",desc:"Trả tiền vận chuyển hàng mua về kho, chuyển khoản: giá chưa thuế 10.000.000 đồng, thuế GTGT 1.000.000 đồng.",docs:["Hóa đơn cước vận chuyển","Giấy báo nợ"],lines:[["D","156",10e6],["D","133",1e6],["C","112",11e6]],ex:"Chi phí vận chuyển hàng mua là chi phí mua, tính vào giá gốc hàng tồn kho (ghi 156), không ghi chi phí bán hàng."},
  {date:"Ngày 05",desc:"Bán hàng cho Công ty Hoàng Long, giá chưa thuế 900.000.000 đồng, thuế GTGT 10% là 90.000.000 đồng, chưa thu tiền.",docs:["Hóa đơn GTGT","Phiếu xuất kho"],lines:[["D","131",990e6],["C","511",900e6],["C","3331",90e6]],ex:"Phải thu theo tổng thanh toán; doanh thu chưa thuế vào 511; thuế đầu ra vào Có 3331."},
  {date:"Ngày 05",desc:"Giá vốn của lô hàng bán ngày 05 là 650.000.000 đồng (giá bình quân gia quyền đã tính).",docs:["Phiếu xuất kho","Bảng tính giá vốn"],lines:[["D","632",650e6],["C","156",650e6]],ex:"Ghi doanh thu thì phải ghi ngay giá vốn cùng kỳ (nguyên tắc phù hợp)."},
  {date:"Ngày 08",desc:"Khách hàng Công ty Minh Khang trả nợ kỳ trước 300.000.000 đồng bằng chuyển khoản.",docs:["Giấy báo có"],lines:[["D","112",300e6],["C","131",300e6]],ex:"Thu nợ làm tăng tiền gửi, giảm khoản phải thu; không phát sinh doanh thu mới."},
  {date:"Ngày 10",desc:"Trả nợ nhà cung cấp kỳ trước 250.000.000 đồng bằng chuyển khoản.",docs:["Ủy nhiệm chi","Giấy báo nợ"],lines:[["D","331",250e6],["C","112",250e6]],ex:"Trả nợ giảm phải trả (Nợ 331), giảm tiền gửi (Có 112)."},
  {date:"Ngày 12",desc:"Trả tiền thuê văn phòng tháng này bằng chuyển khoản: giá chưa thuế 20.000.000 đồng, thuế GTGT 2.000.000 đồng.",docs:["Hóa đơn GTGT","Giấy báo nợ"],lines:[["D","642",20e6],["D","133",2e6],["C","112",22e6]],ex:"Thuê văn phòng quản lý: chi phí quản lý doanh nghiệp (642); thuế đầu vào được khấu trừ vì có chuyển khoản."},
  {date:"Ngày 14",desc:"Chi phí quảng cáo chuyển khoản: giá chưa thuế 15.000.000 đồng, thuế GTGT 1.500.000 đồng.",docs:["Hóa đơn GTGT","Giấy báo nợ"],lines:[["D","641",15e6],["D","133",1.5e6],["C","112",16.5e6]],ex:"Quảng cáo phục vụ bán hàng ghi chi phí bán hàng (641)."},
  {date:"Ngày 18",desc:"Bán lẻ thu tiền mặt: giá chưa thuế 100.000.000 đồng, thuế GTGT 10% là 10.000.000 đồng.",docs:["Hóa đơn GTGT từ máy tính tiền","Phiếu thu"],lines:[["D","111",110e6],["C","511",100e6],["C","3331",10e6]],ex:"Thu tiền ngay: Nợ 111 theo tổng; doanh thu và thuế đầu ra tách riêng."},
  {date:"Ngày 18",desc:"Giá vốn lô hàng bán lẻ ngày 18 là 70.000.000 đồng.",docs:["Phiếu xuất kho"],lines:[["D","632",70e6],["C","156",70e6]],ex:"Mỗi nghiệp vụ bán hàng có một bút toán giá vốn."},
  {date:"Ngày 30",desc:"Tính lương tháng: nhân viên bán hàng 60.000.000 đồng, nhân viên quản lý 40.000.000 đồng.",docs:["Bảng lương"],lines:[["D","641",60e6],["D","642",40e6],["C","334",100e6]],ex:"Chi phí lương theo bộ phận sử dụng lao động; ghi Có 334 tổng lương phải trả."},
  {date:"Ngày 30",desc:"Trích bảo hiểm tính vào chi phí doanh nghiệp. Lương làm căn cứ đóng: bán hàng 48.000.000 đồng, quản lý 32.000.000 đồng (tổng 80.000.000 đồng). Tỷ lệ doanh nghiệp: BHXH 17%, BHYT 3%, BHTN 1%.",docs:["Bảng tính bảo hiểm"],lines:[["D","641",10.08e6],["D","642",6.72e6],["C","3383",13.6e6],["C","3384",2.4e6],["C","3386",0.8e6]],ex:"21% × 48 triệu = 10,08 triệu (bán hàng); 21% × 32 triệu = 6,72 triệu (quản lý). Credits: BHXH 17% × 80 = 13,6 triệu; BHYT 3% = 2,4 triệu; BHTN 1% = 0,8 triệu."},
  {date:"Ngày 30",desc:"Khấu trừ bảo hiểm phần người lao động vào lương (lương làm căn cứ 80.000.000 đồng): BHXH 8%, BHYT 1,5%, BHTN 1%.",docs:["Bảng lương"],lines:[["D","334",8.4e6],["C","3383",6.4e6],["C","3384",1.2e6],["C","3386",0.8e6]],ex:"Phần người lao động đóng trừ vào lương (Nợ 334), không phải chi phí của công ty: 10,5% × 80 triệu = 8,4 triệu."},
  {date:"Ngày 30",desc:"Chi trả lương thực lĩnh cho nhân viên qua ngân hàng.",docs:["Ủy nhiệm chi","Bảng lương"],lines:[["D","334",91.6e6],["C","112",91.6e6]],ex:"Thực lĩnh = 100 triệu - 8,4 triệu = 91,6 triệu."},
  {date:"Ngày 30",desc:"Nộp bảo hiểm (cả phần doanh nghiệp và người lao động) cho cơ quan bảo hiểm bằng chuyển khoản.",docs:["Ủy nhiệm chi","Thông báo đóng bảo hiểm"],lines:[["D","3383",20e6],["D","3384",3.6e6],["D","3386",1.6e6],["C","112",25.2e6]],ex:"BHXH: 13,6 + 6,4 = 20 triệu; BHYT: 2,4 + 1,2 = 3,6 triệu; BHTN: 0,8 + 0,8 = 1,6 triệu; tổng 25,2 triệu."},
  {date:"Ngày 30",desc:"Trích khấu hao TSCĐ tháng này (phục vụ quản lý): 4.000.000 đồng.",docs:["Bảng tính khấu hao"],lines:[["D","642",4e6],["C","214",4e6]],ex:"Khấu hao tăng hao mòn lũy kế (Có 214), không giảm nguyên giá 211."},
  {date:"Cuối tháng",desc:"Khấu trừ thuế GTGT: thuế đầu ra phát sinh 100.000.000 đồng; thuế đầu vào đủ điều kiện khấu trừ 44.500.000 đồng.",docs:["Bảng kê hóa đơn","Tờ khai 01/GTGT"],lines:[["D","3331",44.5e6],["C","133",44.5e6]],ex:"Khấu trừ bằng số nhỏ hơn: 44,5 triệu. Còn phải nộp 55,5 triệu (số dư 3331)."},
  {date:"Cuối tháng",desc:"Kết chuyển doanh thu thuần của tháng vào tài khoản xác định kết quả.",docs:["Bút toán kết chuyển"],close:true,lines:[["D","511",1000e6],["C","911",1000e6]],ex:"Doanh thu 900 + 100 = 1.000 triệu."},
  {date:"Cuối tháng",desc:"Kết chuyển giá vốn, chi phí bán hàng, chi phí quản lý vào tài khoản xác định kết quả.",docs:["Bút toán kết chuyển"],close:true,lines:[["D","911",875.8e6],["C","632",720e6],["C","641",85.08e6],["C","642",70.72e6]],ex:"Giá vốn 720; bán hàng 15 + 60 + 10,08 = 85,08; quản lý 20 + 40 + 6,72 + 4 = 70,72; tổng 875,8 triệu."},
  {date:"Cuối tháng",desc:"Tính chi phí thuế TNDN tạm tính 20% trên lợi nhuận trước thuế của tháng.",docs:["Bảng tính thuế TNDN tạm tính"],lines:[["D","821",24.84e6],["C","3334",24.84e6]],ex:"Lợi nhuận trước thuế = 1.000 - 875,8 = 124,2 triệu; 20% = 24,84 triệu."},
  {date:"Cuối tháng",desc:"Kết chuyển chi phí thuế TNDN và lợi nhuận sau thuế vào lợi nhuận chưa phân phối.",docs:["Bút toán kết chuyển"],close:true,lines:[["D","911",124.2e6],["C","821",24.84e6],["C","421",99.36e6]],ex:"Lãi sau thuế = 124,2 - 24,84 = 99,36 triệu chuyển sang 421."}
 ]},

/* ============ B. DỊCH VỤ ============ */
{id:"dv",name:"Công ty TNHH Tư vấn và Đào tạo Minh Trí - dịch vụ tư vấn, đào tạo",kind:"Dịch vụ",
 desc:"Doanh thu dịch vụ, nhận tiền trước theo hợp đồng đào tạo (doanh thu chưa thực hiện), chi phí giảng viên thuê ngoài, chi phí trả trước phân bổ, lương và bảo hiểm, xác định kết quả. Chi phí trực tiếp của dịch vụ quy ước ghi thẳng 632.",
 open:[["112","D",400e6],["131","D",150e6],["242","D",12e6],["211","D",300e6],["214","C",60e6],["331","C",40e6],["3387","C",30e6],["411","C",600e6],["421","C",132e6]],
 tasks:[
  {h:"Doanh thu dịch vụ",docs:"Hợp đồng, biên bản nghiệm thu, hóa đơn GTGT, bảng chấm công giảng dạy",ctl:"Doanh thu ghi theo mức độ hoàn thành; hóa đơn lập đúng thời điểm hoàn thành hoặc thu tiền.",err:"Ghi nhận toàn bộ tiền nhận trước là doanh thu ngay; ghi nhận doanh thu khi chưa cung cấp dịch vụ."},
  {h:"Doanh thu chưa thực hiện",docs:"Hợp đồng nhiều kỳ, biên bản thực hiện từng kỳ",ctl:"Mỗi tháng phân bổ phần dịch vụ đã thực hiện từ 3387 sang 511; số dư 3387 khớp phần dịch vụ còn lại.",err:"Quên kết chuyển 3387; đưa cả thuế vào 3387."},
  {h:"Chi phí dịch vụ mua ngoài",docs:"Hợp đồng, biên bản nghiệm thu, hóa đơn GTGT, chứng từ chuyển khoản",ctl:"Chi phí gắn với doanh thu cùng kỳ; hóa đơn từ 5 triệu có chuyển khoản.",err:"Thanh toán tiền mặt khiến mất khấu trừ GTGT và chi phí TNDN."},
  {h:"Chi phí trả trước",docs:"Hợp đồng mua, bảng phân bổ",ctl:"Phân bổ đều theo thời gian sử dụng; theo dõi số dư 242.",err:"Phân bổ hết một lần."},
  {h:"Lương, bảo hiểm, khấu hao",docs:"Bảng lương, bảng bảo hiểm, bảng khấu hao",ctl:"Bộ phận chuyên môn ghi 632, bộ phận quản lý ghi 642.",err:"Lẫn chi phí chuyên môn và quản lý."}
 ],
 txns:[
  {date:"Ngày 03",desc:"Hoàn thành hợp đồng tư vấn, xuất hóa đơn: giá chưa thuế 500.000.000 đồng, thuế GTGT 50.000.000 đồng; khách chưa thanh toán.",docs:["Hóa đơn GTGT","Biên bản nghiệm thu"],lines:[["D","131",550e6],["C","511",500e6],["C","3331",50e6]],ex:"Dịch vụ đã hoàn thành: ghi doanh thu và thuế đầu ra, phải thu theo tổng."},
  {date:"Ngày 05",desc:"Khách hàng ký hợp đồng đào tạo 3 tháng và thanh toán trước toàn bộ 330.000.000 đồng (giá chưa thuế 300.000.000 đồng, thuế GTGT 30.000.000 đồng) vào tài khoản ngân hàng; công ty xuất hóa đơn khi thu tiền.",docs:["Hóa đơn GTGT","Giấy báo có","Hợp đồng"],lines:[["D","112",330e6],["C","3387",300e6],["C","3331",30e6]],ex:"Tiền nhận trước chưa phải doanh thu: ghi 3387 (doanh thu chưa thực hiện) theo giá chưa thuế; thuế phát sinh khi lập hóa đơn thu tiền."},
  {date:"Ngày 30",desc:"Ghi nhận doanh thu tháng này của hợp đồng đào tạo nhận trước (1/3 thời gian đã thực hiện).",docs:["Biên bản thực hiện"],lines:[["D","3387",100e6],["C","511",100e6]],ex:"1/3 × 300 triệu = 100 triệu chuyển từ 3387 sang 511."},
  {date:"Ngày 30",desc:"Ghi nhận doanh thu của phần dịch vụ đã nhận tiền trước từ kỳ trước, tháng này hoàn thành (số dư đầu kỳ 3387 là 30.000.000 đồng).",docs:["Biên bản hoàn thành"],lines:[["D","3387",30e6],["C","511",30e6]],ex:"Thuế của khoản này đã kê khai khi lập hóa đơn thu tiền kỳ trước nên không ghi lại."},
  {date:"Ngày 08",desc:"Khách hàng trả nợ kỳ trước 150.000.000 đồng bằng chuyển khoản.",docs:["Giấy báo có"],lines:[["D","112",150e6],["C","131",150e6]],ex:"Thu nợ: Nợ 112, Có 131."},
  {date:"Ngày 10",desc:"Trả thù lao giảng viên thuê ngoài chuyển khoản: giá chưa thuế 120.000.000 đồng, thuế GTGT 12.000.000 đồng (có hóa đơn).",docs:["Hóa đơn GTGT","Biên bản nghiệm thu","Giấy báo nợ"],lines:[["D","632",120e6],["D","133",12e6],["C","112",132e6]],ex:"Chi phí trực tiếp của dịch vụ vào giá vốn dịch vụ (632 theo quy ước bài tập); thuế đầu vào khấu trừ nhờ có chuyển khoản."},
  {date:"Ngày 30",desc:"Tính lương: nhân viên chuyên môn 150.000.000 đồng, nhân viên quản lý 50.000.000 đồng.",docs:["Bảng lương"],lines:[["D","632",150e6],["D","642",50e6],["C","334",200e6]],ex:"Lương nhân viên trực tiếp cung cấp dịch vụ vào 632; lương quản lý vào 642."},
  {date:"Ngày 30",desc:"Trích bảo hiểm phần doanh nghiệp. Lương làm căn cứ đóng 160.000.000 đồng: chuyên môn 120.000.000 đồng, quản lý 40.000.000 đồng. Tỷ lệ doanh nghiệp: BHXH 17%, BHYT 3%, BHTN 1%.",docs:["Bảng tính bảo hiểm"],lines:[["D","632",25.2e6],["D","642",8.4e6],["C","3383",27.2e6],["C","3384",4.8e6],["C","3386",1.6e6]],ex:"21% × 120 = 25,2 triệu; 21% × 40 = 8,4 triệu; BHXH 17% × 160 = 27,2; BHYT 3% = 4,8; BHTN 1% = 1,6 triệu."},
  {date:"Ngày 30",desc:"Khấu trừ bảo hiểm phần người lao động vào lương (lương làm căn cứ 160.000.000 đồng): BHXH 8%, BHYT 1,5%, BHTN 1%.",docs:["Bảng lương"],lines:[["D","334",16.8e6],["C","3383",12.8e6],["C","3384",2.4e6],["C","3386",1.6e6]],ex:"10,5% × 160 triệu = 16,8 triệu."},
  {date:"Ngày 30",desc:"Chi trả lương thực lĩnh qua ngân hàng.",docs:["Ủy nhiệm chi"],lines:[["D","334",183.2e6],["C","112",183.2e6]],ex:"200 - 16,8 = 183,2 triệu."},
  {date:"Ngày 30",desc:"Nộp bảo hiểm (doanh nghiệp và người lao động) bằng chuyển khoản.",docs:["Ủy nhiệm chi"],lines:[["D","3383",40e6],["D","3384",7.2e6],["D","3386",3.2e6],["C","112",50.4e6]],ex:"BHXH 27,2 + 12,8 = 40; BHYT 4,8 + 2,4 = 7,2; BHTN 1,6 + 1,6 = 3,2; tổng 50,4 triệu."},
  {date:"Ngày 30",desc:"Phân bổ chi phí trả trước (công cụ dụng cụ văn phòng, số dư đầu kỳ 12.000.000 đồng, phân bổ đều 6 tháng) cho tháng này.",docs:["Bảng phân bổ"],lines:[["D","642",2e6],["C","242",2e6]],ex:"12 triệu / 6 tháng = 2 triệu mỗi tháng."},
  {date:"Ngày 30",desc:"Trích khấu hao TSCĐ tháng này (phục vụ quản lý): 5.000.000 đồng.",docs:["Bảng khấu hao"],lines:[["D","642",5e6],["C","214",5e6]],ex:"Nợ chi phí, Có hao mòn lũy kế."},
  {date:"Ngày 25",desc:"Trả chi phí thuê văn phòng và điện nước chuyển khoản: giá chưa thuế 30.000.000 đồng, thuế GTGT 3.000.000 đồng.",docs:["Hóa đơn GTGT","Giấy báo nợ"],lines:[["D","642",30e6],["D","133",3e6],["C","112",33e6]],ex:"Chi phí văn phòng vào 642; thuế đầu vào được khấu trừ."},
  {date:"Cuối tháng",desc:"Khấu trừ thuế GTGT: đầu ra 80.000.000 đồng, đầu vào 15.000.000 đồng.",docs:["Bảng kê","Tờ khai 01/GTGT"],lines:[["D","3331",15e6],["C","133",15e6]],ex:"Khấu trừ 15 triệu; phải nộp 65 triệu."},
  {date:"Cuối tháng",desc:"Kết chuyển doanh thu vào tài khoản xác định kết quả.",docs:["Bút toán kết chuyển"],close:true,lines:[["D","511",630e6],["C","911",630e6]],ex:"Doanh thu 500 + 100 + 30 = 630 triệu."},
  {date:"Cuối tháng",desc:"Kết chuyển giá vốn dịch vụ và chi phí quản lý vào tài khoản xác định kết quả.",docs:["Bút toán kết chuyển"],close:true,lines:[["D","911",390.6e6],["C","632",295.2e6],["C","642",95.4e6]],ex:"632: 120 + 150 + 25,2 = 295,2; 642: 50 + 8,4 + 2 + 5 + 30 = 95,4; tổng 390,6 triệu."},
  {date:"Cuối tháng",desc:"Tính chi phí thuế TNDN tạm tính 20% trên lợi nhuận trước thuế.",docs:["Bảng tính thuế"],lines:[["D","821",47.88e6],["C","3334",47.88e6]],ex:"Lợi nhuận trước thuế = 630 - 390,6 = 239,4 triệu; 20% = 47,88 triệu."},
  {date:"Cuối tháng",desc:"Kết chuyển chi phí thuế TNDN và lợi nhuận sau thuế vào lợi nhuận chưa phân phối.",docs:["Bút toán kết chuyển"],close:true,lines:[["D","911",239.4e6],["C","821",47.88e6],["C","421",191.52e6]],ex:"239,4 - 47,88 = 191,52 triệu."}
 ]},

/* ============ C. SẢN XUẤT ============ */
{id:"sx",name:"Công ty TNHH Sản xuất Bao bì Hải Đăng - sản xuất và bán thành phẩm",kind:"Sản xuất",
 desc:"Mua nguyên vật liệu - xuất sản xuất - nhân công trực tiếp - chi phí sản xuất chung - tính giá thành giản đơn - nhập kho thành phẩm - bán hàng - giá vốn - thuế - xác định kết quả. Sản xuất 9.000 sản phẩm hoàn thành, không có sản phẩm dở dang.",
 open:[["111","D",30e6],["112","D",500e6],["131","D",200e6],["152","D",300e6],["155","D",200e6],["211","D",800e6],["214","C",200e6],["331","C",150e6],["411","C",1200e6],["421","C",480e6]],
 tasks:[
  {h:"Nguyên vật liệu",docs:"Hóa đơn, phiếu nhập kho, phiếu xuất kho, định mức NVL",ctl:"Xuất NVL theo lệnh sản xuất và định mức; kiểm kê định kỳ; hao hụt trong định mức.",err:"Xuất NVL không có lệnh sản xuất; hao hụt ngoài định mức không xử lý."},
  {h:"Nhân công và chi phí chung",docs:"Bảng chấm công theo phân xưởng, bảng lương, bảng khấu hao, hóa đơn điện nước",ctl:"Phân loại lương theo bộ phận: trực tiếp 622, quản lý phân xưởng 627, bán hàng 641, quản lý 642.",err:"Đưa lương quản lý vào giá thành hoặc lương công nhân vào chi phí quản lý."},
  {h:"Giá thành",docs:"Bảng tập hợp chi phí, báo cáo sản lượng, bảng tính giá thành",ctl:"Tập hợp 621, 622, 627 vào 154; giá thành đơn vị = tổng chi phí / sản lượng hoàn thành; so với định mức.",err:"Bỏ sót chi phí chung; sản phẩm dở dang không đánh giá."},
  {h:"Thành phẩm và giá vốn",docs:"Phiếu nhập kho thành phẩm, phiếu xuất kho, bảng tính giá xuất",ctl:"Giá xuất kho bình quân nhất quán; tồn kho thành phẩm khớp kiểm kê.",err:"Đổi phương pháp tính giá giữa các kỳ."},
  {h:"Thuế và kết quả",docs:"Bảng kê hóa đơn, tờ khai GTGT, bảng tính TNDN",ctl:"Khấu trừ thuế GTGT theo số nhỏ hơn; xác định kết quả qua 911.",err:"Quên kết chuyển 154 sang 155 trước khi tính giá vốn."}
 ],
 txns:[
  {date:"Ngày 02",desc:"Mua nguyên vật liệu nhập kho: giá chưa thuế 500.000.000 đồng, thuế GTGT 10% là 50.000.000 đồng. Chưa thanh toán nhà cung cấp.",docs:["Hóa đơn GTGT","Phiếu nhập kho"],lines:[["D","152",500e6],["D","133",50e6],["C","331",550e6]],ex:"NVL mua về nhập kho ghi 152; thuế đầu vào ghi riêng; chưa trả ghi Có 331."},
  {date:"Ngày 05",desc:"Xuất nguyên vật liệu cho sản xuất trong tháng: 620.000.000 đồng.",docs:["Phiếu xuất kho","Lệnh sản xuất"],lines:[["D","621",620e6],["C","152",620e6]],ex:"NVL xuất trực tiếp sản xuất sản phẩm ghi 621 (chi phí NVL trực tiếp)."},
  {date:"Ngày 30",desc:"Tính lương: công nhân trực tiếp sản xuất 150.000.000 đồng; quản lý phân xưởng 40.000.000 đồng; nhân viên bán hàng 30.000.000 đồng; quản lý doanh nghiệp 50.000.000 đồng.",docs:["Bảng lương"],lines:[["D","622",150e6],["D","627",40e6],["D","641",30e6],["D","642",50e6],["C","334",270e6]],ex:"Phân loại lương theo bộ phận: công nhân trực tiếp 622; quản lý phân xưởng 627; bán hàng 641; quản lý doanh nghiệp 642."},
  {date:"Ngày 30",desc:"Trích bảo hiểm phần doanh nghiệp. Lương làm căn cứ đóng 200.000.000 đồng: công nhân trực tiếp 120.000.000; quản lý phân xưởng 30.000.000; bán hàng 20.000.000; quản lý doanh nghiệp 30.000.000. Tỷ lệ BHXH 17%, BHYT 3%, BHTN 1%.",docs:["Bảng tính bảo hiểm"],lines:[["D","622",25.2e6],["D","627",6.3e6],["D","641",4.2e6],["D","642",6.3e6],["C","3383",34e6],["C","3384",6e6],["C","3386",2e6]],ex:"21% × 120 = 25,2; × 30 = 6,3; × 20 = 4,2; × 30 = 6,3; tổng 42 triệu = BHXH 34 + BHYT 6 + BHTN 2."},
  {date:"Ngày 30",desc:"Khấu trừ bảo hiểm phần người lao động vào lương (lương làm căn cứ 200.000.000 đồng): BHXH 8%, BHYT 1,5%, BHTN 1%.",docs:["Bảng lương"],lines:[["D","334",21e6],["C","3383",16e6],["C","3384",3e6],["C","3386",2e6]],ex:"10,5% × 200 = 21 triệu."},
  {date:"Ngày 30",desc:"Trả lương thực lĩnh qua ngân hàng.",docs:["Ủy nhiệm chi"],lines:[["D","334",249e6],["C","112",249e6]],ex:"270 - 21 = 249 triệu."},
  {date:"Ngày 30",desc:"Nộp bảo hiểm (doanh nghiệp và người lao động) bằng chuyển khoản.",docs:["Ủy nhiệm chi"],lines:[["D","3383",50e6],["D","3384",9e6],["D","3386",4e6],["C","112",63e6]],ex:"BHXH 34 + 16 = 50; BHYT 6 + 3 = 9; BHTN 2 + 2 = 4; tổng 63 triệu."},
  {date:"Ngày 30",desc:"Trích khấu hao TSCĐ tháng này: máy móc phân xưởng 12.000.000 đồng; thiết bị văn phòng 3.000.000 đồng.",docs:["Bảng khấu hao"],lines:[["D","627",12e6],["D","642",3e6],["C","214",15e6]],ex:"Khấu hao máy sản xuất vào chi phí sản xuất chung (627); văn phòng vào 642."},
  {date:"Ngày 28",desc:"Trả tiền điện nước phân xưởng chuyển khoản: giá chưa thuế 46.500.000 đồng, thuế GTGT 4.650.000 đồng.",docs:["Hóa đơn GTGT","Giấy báo nợ"],lines:[["D","627",46.5e6],["D","133",4.65e6],["C","112",51.15e6]],ex:"Điện nước dùng cho sản xuất là chi phí sản xuất chung (627)."},
  {date:"Cuối tháng",desc:"Kết chuyển chi phí sản xuất (621, 622, 627) vào 154 để tính giá thành.",docs:["Bảng tập hợp chi phí"],lines:[["D","154",900e6],["C","621",620e6],["C","622",175.2e6],["C","627",104.8e6]],ex:"621 = 620; 622 = 150 + 25,2 = 175,2; 627 = 40 + 6,3 + 12 + 46,5 = 104,8; tổng 900 triệu."},
  {date:"Cuối tháng",desc:"Sản xuất hoàn thành 9.000 sản phẩm nhập kho, không có sản phẩm dở dang. Ghi nhận giá thành nhập kho thành phẩm.",docs:["Phiếu nhập kho thành phẩm","Bảng tính giá thành"],lines:[["D","155",900e6],["C","154",900e6]],ex:"Giá thành đơn vị = 900 triệu / 9.000 = 100.000 đồng/sản phẩm."},
  {date:"Ngày 20",desc:"Bán 10.000 sản phẩm cho khách hàng, giá chưa thuế 150.000 đồng/sản phẩm, thuế GTGT 10%. Chưa thu tiền.",docs:["Hóa đơn GTGT","Phiếu xuất kho"],lines:[["D","131",1650e6],["C","511",1500e6],["C","3331",150e6]],ex:"Doanh thu = 10.000 × 150.000 = 1.500 triệu; thuế 150 triệu; phải thu 1.650 triệu."},
  {date:"Ngày 20",desc:"Ghi giá vốn của 10.000 sản phẩm đã bán. Tồn đầu kỳ 2.000 sản phẩm giá 100.000 đồng; nhập trong kỳ 9.000 sản phẩm giá 100.000 đồng (bình quân gia quyền).",docs:["Phiếu xuất kho","Bảng tính giá xuất"],lines:[["D","632",1000e6],["C","155",1000e6]],ex:"Giá bình quân = (200 + 900) / 11.000 = 100.000 đồng; giá vốn = 10.000 × 100.000 = 1.000 triệu."},
  {date:"Ngày 22",desc:"Khách hàng trả nợ kỳ trước 200.000.000 đồng bằng chuyển khoản.",docs:["Giấy báo có"],lines:[["D","112",200e6],["C","131",200e6]],ex:"Thu nợ: Nợ 112, Có 131."},
  {date:"Ngày 24",desc:"Trả nợ nhà cung cấp kỳ trước 150.000.000 đồng bằng chuyển khoản.",docs:["Ủy nhiệm chi"],lines:[["D","331",150e6],["C","112",150e6]],ex:"Nợ 331, Có 112."},
  {date:"Ngày 26",desc:"Chi phí quảng cáo và vận chuyển bán hàng chuyển khoản: giá chưa thuế 10.000.000 đồng, thuế GTGT 1.000.000 đồng.",docs:["Hóa đơn GTGT","Giấy báo nợ"],lines:[["D","641",10e6],["D","133",1e6],["C","112",11e6]],ex:"Chi phí bán hàng (641)."},
  {date:"Cuối tháng",desc:"Khấu trừ thuế GTGT: thuế đầu ra 150.000.000 đồng; thuế đầu vào đủ điều kiện khấu trừ 55.650.000 đồng.",docs:["Bảng kê","Tờ khai 01/GTGT"],lines:[["D","3331",55.65e6],["C","133",55.65e6]],ex:"Đầu vào 50 + 4,65 + 1 = 55,65 triệu; còn phải nộp 94,35 triệu."},
  {date:"Cuối tháng",desc:"Kết chuyển doanh thu vào tài khoản xác định kết quả.",docs:["Bút toán kết chuyển"],close:true,lines:[["D","511",1500e6],["C","911",1500e6]],ex:"Doanh thu 1.500 triệu."},
  {date:"Cuối tháng",desc:"Kết chuyển giá vốn, chi phí bán hàng, chi phí quản lý vào tài khoản xác định kết quả.",docs:["Bút toán kết chuyển"],close:true,lines:[["D","911",1103.5e6],["C","632",1000e6],["C","641",44.2e6],["C","642",59.3e6]],ex:"641: 30 + 4,2 + 10 = 44,2; 642: 50 + 6,3 + 3 = 59,3; tổng 1.103,5 triệu."},
  {date:"Cuối tháng",desc:"Tính chi phí thuế TNDN tạm tính 20% trên lợi nhuận trước thuế.",docs:["Bảng tính thuế"],lines:[["D","821",79.3e6],["C","3334",79.3e6]],ex:"Lợi nhuận trước thuế = 1.500 - 1.103,5 = 396,5 triệu; 20% = 79,3 triệu."},
  {date:"Cuối tháng",desc:"Kết chuyển chi phí thuế TNDN và lợi nhuận sau thuế vào lợi nhuận chưa phân phối.",docs:["Bút toán kết chuyển"],close:true,lines:[["D","911",396.5e6],["C","821",79.3e6],["C","421",317.2e6]],ex:"396,5 - 79,3 = 317,2 triệu."}
 ]}

];

/* ===== Lõi tính toán ===== */
function azMerge(lines){var m={};lines.forEach(function(l){var k=l[0]+"|"+l[1];m[k]=(m[k]||0)+Math.round(l[2]);});return m;}
function azSame(a,b){var ka=Object.keys(a).filter(function(k){return a[k];}),kb=Object.keys(b).filter(function(k){return b[k];});if(ka.length!==kb.length)return false;return ka.every(function(k){return Math.abs((a[k]||0)-(b[k]||0))<1;});}
function azLedger(c,upTo,skipClose){
  var bal={},ps={};
  function add(a){bal[a]=bal[a]||0;ps[a]=ps[a]||[0,0];}
  c.open.forEach(function(o){add(o[1]===undefined?o[0]:o[0]);bal[o[0]]=(bal[o[0]]||0)+(o[1]==="D"?o[2]:-o[2]);});
  c.txns.forEach(function(t,i){if(upTo!==undefined&&i>upTo)return;if(skipClose&&t.close)return;t.lines.forEach(function(l){add(l[1]);if(l[0]==="D"){bal[l[1]]+=l[2];ps[l[1]][0]+=l[2];}else{bal[l[1]]-=l[2];ps[l[1]][1]+=l[2];}});});
  var open={};c.open.forEach(function(o){open[o[0]]=(o[1]==="D"?1:-1)*o[2];});
  return {bal:bal,ps:ps,open:open};
}
function azM(n){return money(Math.abs(n));}
function azParse(s){
  s=String(s||"").trim().toLowerCase().replace(/\s/g,"");if(!s)return NaN;
  var tr=/(tr|triệu|trieu)$/.test(s);s=s.replace(/(tr|triệu|trieu)$/,"");
  if(tr){var n;if(s.indexOf(",")>=0)n=parseFloat(s.replace(/\./g,"").replace(",","."));else if(/^\d+\.\d{1,2}$/.test(s))n=parseFloat(s);else n=parseFloat(s.replace(/\./g,""));return Math.round(n*1e6);}
  return Math.round(parseFloat(s.replace(/[.\s]/g,"").replace(",",".")));
}

/* ===== Giao diện ===== */
var azCase=null,azIdx=0,azRows=[],azFb=null,azTry=0,azView="list";
function azKey(c){return "az_"+c.id;}
function azProg(c){var p=store(azKey(c));return p||{res:[]};}
function viewAZ(){
  setTimeout(azRender,0);
  return '<div class="card"><b>Thực hành A-Z: một tháng làm kế toán trọn vẹn</b><div class="law">Chọn một công ty (thương mại, dịch vụ, sản xuất). Làm lần lượt từng nghiệp vụ: tự định khoản (chọn bên Nợ hoặc Có, tài khoản, số tiền), app chấm và giải thích. Làm xong thì app dựng sổ cái, bảng cân đối số phát sinh, báo cáo kết quả kinh doanh, bảng cân đối kế toán và số liệu tờ khai GTGT từ chính các bút toán của bạn.</div></div><div id="azbox"></div>';
}
function azRender(){
  var box=$("azbox");if(!box)return;
  if(azView==="list"||!azCase){
    var h="";AZ_CASES.forEach(function(c){var p=azProg(c),done=p.res.filter(function(x){return x;}).length;
      h+='<div class="card"><span class="tag g">'+esc(c.kind)+'</span><h3>'+esc(c.name)+'</h3><div class="law">'+esc(c.desc)+'</div><div class="law">'+c.txns.length+' nghiệp vụ · đã làm '+done+'/'+c.txns.length+'</div><p><button class="b" onclick="azStart(\''+c.id+'\')">'+(done?'Tiếp tục':'Bắt đầu')+'</button> '+(done?'<button class="b alt" onclick="azReset(\''+c.id+'\')">Làm lại từ đầu</button>':'')+'</p></div>';});
    box.innerHTML=h;return;
  }
  var c=azCase;
  if(azView==="intro"){
    var oh='<table><tr><th>Tài khoản</th><th>Tên</th><th style="text-align:right">Dư Nợ</th><th style="text-align:right">Dư Có</th></tr>';
    c.open.forEach(function(o){oh+='<tr><td>'+o[0]+'</td><td>'+esc(AZ_ACC[o[0]]||"")+'</td><td class="n" style="text-align:right">'+(o[1]==="D"?money(o[2]):'')+'</td><td class="n" style="text-align:right">'+(o[1]==="C"?money(o[2]):'')+'</td></tr>';});oh+='</table>';
    var th=c.tasks.map(function(t){return '<div class="card" style="margin:6px 0"><b>'+esc(t.h)+'</b><div class="law"><b>Chứng từ:</b> '+esc(t.docs)+'</div><div class="law"><b>Kiểm soát:</b> '+esc(t.ctl)+'</div><div class="law"><b>Sai sót thường gặp:</b> '+esc(t.err)+'</div></div>';}).join("");
    box.innerHTML='<div class="card"><span class="tag g">'+esc(c.kind)+'</span><h3>'+esc(c.name)+'</h3><div class="law">'+esc(c.desc)+'</div><h4>Số dư đầu kỳ</h4>'+oh+'<h4>Quy ước bài tập</h4><div class="law">Thuế GTGT 10% (khấu trừ); thuế TNDN 20%; BHXH doanh nghiệp 17%, BHYT 3%, BHTN 1%; người lao động 8%, 1,5%, 1%; bỏ qua bảo hiểm tai nạn lao động, kinh phí công đoàn, thuế TNCN. Tài khoản theo TT 200/TT 99/2025: đối chiếu số hiệu với phần mềm bạn dùng.</div><h4>Các phần hành và điểm kiểm soát</h4>'+th+'<p><button class="b" onclick="azView=\'do\';azRender()">Vào làm nghiệp vụ 1</button> <button class="b alt" onclick="azView=\'list\';azRender()">Chọn công ty khác</button></p></div>';
    return;
  }
  if(azView==="report"){azReport(box);return;}
  /* làm nghiệp vụ */
  var t=c.txns[azIdx],p=azProg(c),h2='<div class="card"><span class="tag">'+esc(c.kind)+'</span><span class="tag g">Nghiệp vụ '+(azIdx+1)+'/'+c.txns.length+'</span><span class="tag">'+esc(t.date)+'</span><div style="margin:8px 0"><b>'+esc(t.desc)+'</b></div><div class="law">Chứng từ: '+esc(t.docs.join(", "))+'</div>';
  if(!azRows.length)azRows=[{s:"D",a:"",m:""},{s:"C",a:"",m:""}];
  h2+='<h4>Định khoản của bạn</h4><datalist id="azacc">'+Object.keys(AZ_ACC).map(function(k){return '<option value="'+k+'">'+esc(AZ_ACC[k])+'</option>';}).join("")+'</datalist><table>';
  azRows.forEach(function(r,i){h2+='<tr><td style="width:84px"><select onchange="azRows['+i+'].s=this.value" '+(azFb?'disabled':'')+'><option value="D"'+(r.s==="D"?' selected':'')+'>Nợ</option><option value="C"'+(r.s==="C"?' selected':'')+'>Có</option></select></td><td><input list="azacc" placeholder="Tài khoản (vd 156)" value="'+esc(r.a)+'" oninput="azRows['+i+'].a=this.value" '+(azFb?'disabled':'')+'></td><td><input placeholder="Số tiền (đồng hoặc 25,2tr)" value="'+esc(r.m)+'" oninput="azRows['+i+'].m=this.value" '+(azFb?'disabled':'')+'></td></tr>';});
  h2+='</table>';
  if(!azFb){h2+='<p><button class="b alt sm" onclick="azRows.push({s:\'D\',a:\'\',m:\'\'});azRender()">+ Thêm dòng</button> <button class="b alt sm" onclick="if(azRows.length>1){azRows.pop();azRender()}">- Bớt dòng</button></p><p><button class="b" onclick="azCheck()">Kiểm tra</button> '+(azTry>=1?'<button class="b alt" onclick="azReveal()">Xem đáp án</button> ':'')+'</p>';}
  if(azFb){
    h2+='<div class="'+(azFb.ok?'ex':'warn')+'"><b>'+(azFb.ok?'Đúng.':'Chưa đúng.')+'</b> '+esc(azFb.msg)+'</div><h4>Đáp án</h4><table>'+t.lines.map(function(l){return '<tr><td><b>'+(l[0]==="D"?"Nợ":"Có")+' '+l[1]+'</b></td><td>'+esc(AZ_ACC[l[1]]||"")+'</td><td class="n" style="text-align:right">'+money(l[2])+'</td></tr>';}).join("")+'</table><div style="margin-top:6px">'+esc(t.ex)+'</div><p><button class="b" onclick="azNext()">'+(azIdx+1<c.txns.length?'Nghiệp vụ tiếp theo':'Xem báo cáo cuối kỳ')+'</button></p>';
  }
  h2+='<p class="law"><a href="#" onclick="azView=\'intro\';azRender();return false">Hồ sơ công ty</a> · <a href="#" onclick="azView=\'list\';azRender();return false">Danh sách</a></p></div>';
  box.innerHTML=h2;
}
function azStart(id){azCase=AZ_CASES.filter(function(c){return c.id===id;})[0];var p=azProg(azCase),n=0;while(n<azCase.txns.length&&p.res[n])n++;azIdx=Math.min(n,azCase.txns.length-1);azRows=[];azFb=null;azTry=0;azView=n===0?"intro":"do";azRender();}
function azReset(id){var c=AZ_CASES.filter(function(x){return x.id===id;})[0];store(azKey(c),{res:[]});azCase=null;azView="list";azRender();}
function azCheck(){
  var c=azCase,t=c.txns[azIdx],rows=azRows.filter(function(r){return r.a||r.m;}),lines=[],bad=false;
  rows.forEach(function(r){var m=azParse(r.m);if(!r.a||isNaN(m)){bad=true;}else lines.push([r.s,String(r.a).trim(),m]);});
  if(bad||!lines.length){alert("Mỗi dòng cần có tài khoản và số tiền hợp lệ.");return;}
  var ok=azSame(azMerge(lines),azMerge(t.lines));
  azTry++;
  if(ok){var p=azProg(c);p.res[azIdx]=azTry===1?2:1;store(azKey(c),p);record("ketoan","az:"+c.id+":"+azIdx,azTry===1,"az");azFb={ok:true,msg:azTry===1?'Làm đúng ngay lần đầu.':'Đã đúng sau '+azTry+' lần.'};}
  else{
    var dr=0,cr=0;lines.forEach(function(l){if(l[0]==="D")dr+=l[2];else cr+=l[2];});
    var hint=Math.abs(dr-cr)>0.5?'Tổng Nợ ('+money(dr)+') khác tổng Có ('+money(cr)+'): bút toán chưa cân.':'Bút toán cân nhưng tài khoản hoặc số tiền chưa đúng bản chất nghiệp vụ. Đọc lại nội dung, xác định tài khoản của từng đối tượng, rồi tính lại số tiền.';
    azFb=null;alert("Chưa đúng. "+hint+(azTry>=2?" Bạn có thể bấm Xem đáp án.":""));if(azTry===1)record("ketoan","az:"+c.id+":"+azIdx,false,"az");
  }
  azRender();
}
function azReveal(){var c=azCase,p=azProg(c);p.res[azIdx]=p.res[azIdx]||1;store(azKey(c),p);azFb={ok:false,msg:'Đáp án được hiển thị; hãy tự làm lại nghiệp vụ tương tự trước khi sang bài sau.'};azRender();}
function azNext(){var c=azCase;azRows=[];azFb=null;azTry=0;if(azIdx+1<c.txns.length){azIdx++;}else{azView="report";}azRender();}
function azReport(box){
  var c=azCase,L=azLedger(c),Lpre=azLedger(c,undefined,true),accs=Object.keys(L.bal).sort();
  var tb='<table><tr><th>TK</th><th>Tên</th><th style="text-align:right">Dư đầu Nợ</th><th style="text-align:right">Dư đầu Có</th><th style="text-align:right">PS Nợ</th><th style="text-align:right">PS Có</th><th style="text-align:right">Dư cuối Nợ</th><th style="text-align:right">Dư cuối Có</th></tr>',s=[0,0,0,0,0,0];
  accs.forEach(function(a){var o=L.open[a]||0,p=L.ps[a]||[0,0],e=L.bal[a],cell=function(v,side){return v!==0&&((side==="D"&&v>0)||(side==="C"&&v<0))?money(Math.abs(v)):'';};
    var row=[o>0?o:0,o<0?-o:0,p[0],p[1],e>0?e:0,e<0?-e:0];row.forEach(function(v,i){s[i]+=v;});
    tb+='<tr><td>'+a+'</td><td>'+esc(AZ_ACC[a]||"")+'</td>'+row.map(function(v){return '<td class="n" style="text-align:right">'+(v?money(v):'')+'</td>';}).join("")+'</tr>';});
  tb+='<tr><th colspan="2">Cộng</th>'+s.map(function(v){return '<th style="text-align:right">'+money(v)+'</th>';}).join("")+'</tr></table>';
  var b=Lpre.bal,ps=Lpre.ps,rev=(ps["511"]||[0,0])[1]-(ps["511"]||[0,0])[0],cogs=(ps["632"]||[0,0])[0]-(ps["632"]||[0,0])[1],sell=(ps["641"]||[0,0])[0]-(ps["641"]||[0,0])[1],adm=(ps["642"]||[0,0])[0]-(ps["642"]||[0,0])[1],gp=rev-cogs,pbt=gp-sell-adm,tax=(ps["821"]||[0,0])[0]-(ps["821"]||[0,0])[1],pat=pbt-tax;
  var kq='<table><tr><td>Doanh thu bán hàng và cung cấp dịch vụ</td><td class="n" style="text-align:right">'+money(rev)+'</td></tr><tr><td>Giá vốn hàng bán</td><td class="n" style="text-align:right">'+money(cogs)+'</td></tr><tr><td><b>Lợi nhuận gộp</b></td><td class="n" style="text-align:right"><b>'+money(gp)+'</b></td></tr><tr><td>Chi phí bán hàng</td><td class="n" style="text-align:right">'+money(sell)+'</td></tr><tr><td>Chi phí quản lý doanh nghiệp</td><td class="n" style="text-align:right">'+money(adm)+'</td></tr><tr><td><b>Lợi nhuận trước thuế</b></td><td class="n" style="text-align:right"><b>'+money(pbt)+'</b></td></tr><tr><td>Chi phí thuế TNDN</td><td class="n" style="text-align:right">'+money(tax)+'</td></tr><tr><td><b>Lợi nhuận sau thuế</b></td><td class="n" style="text-align:right"><b>'+money(pat)+'</b></td></tr></table>';
  var E=L.bal,sum=function(list,sign){return list.reduce(function(t,a){return t+(E[a]||0)*sign;},0);};
  var cash=(E["111"]||0)+(E["112"]||0),recv=E["131"]||0,inv=(E["152"]||0)+(E["154"]||0)+(E["155"]||0)+(E["156"]||0),ppd=E["242"]||0,fa=(E["211"]||0)+(E["214"]||0),ass=cash+recv+(E["133"]||0)+inv+ppd+fa;
  var pay=-(E["331"]||0),taxp=-((E["3331"]||0)+(E["3334"]||0)),emp=-((E["334"]||0)+(E["3383"]||0)+(E["3384"]||0)+(E["3386"]||0)),unr=-(E["3387"]||0),cap=-(E["411"]||0),re=-(E["421"]||0),src=pay+taxp+emp+unr+cap+re;
  var bs='<table><tr><th colspan="2">Tài sản</th></tr><tr><td>Tiền (111, 112)</td><td class="n" style="text-align:right">'+money(cash)+'</td></tr><tr><td>Phải thu khách hàng</td><td class="n" style="text-align:right">'+money(recv)+'</td></tr><tr><td>Thuế GTGT được khấu trừ</td><td class="n" style="text-align:right">'+money(E["133"]||0)+'</td></tr><tr><td>Hàng tồn kho</td><td class="n" style="text-align:right">'+money(inv)+'</td></tr><tr><td>Chi phí trả trước</td><td class="n" style="text-align:right">'+money(ppd)+'</td></tr><tr><td>TSCĐ (nguyên giá trừ hao mòn)</td><td class="n" style="text-align:right">'+money(fa)+'</td></tr><tr><th>Tổng tài sản</th><th style="text-align:right">'+money(ass)+'</th></tr><tr><th colspan="2">Nguồn vốn</th></tr><tr><td>Phải trả người bán</td><td class="n" style="text-align:right">'+money(pay)+'</td></tr><tr><td>Thuế và các khoản phải nộp (GTGT, TNDN)</td><td class="n" style="text-align:right">'+money(taxp)+'</td></tr><tr><td>Phải trả người lao động và bảo hiểm</td><td class="n" style="text-align:right">'+money(emp)+'</td></tr><tr><td>Doanh thu chưa thực hiện</td><td class="n" style="text-align:right">'+money(unr)+'</td></tr><tr><td>Vốn đầu tư của chủ sở hữu</td><td class="n" style="text-align:right">'+money(cap)+'</td></tr><tr><td>Lợi nhuận sau thuế chưa phân phối</td><td class="n" style="text-align:right">'+money(re)+'</td></tr><tr><th>Tổng nguồn vốn</th><th style="text-align:right">'+money(src)+'</th></tr></table>';
  var out=(Lpre.ps["3331"]||[0,0])[1],inn=(Lpre.ps["133"]||[0,0])[0],due=-(E["3331"]||0);
  var gt='<table><tr><td>Thuế GTGT đầu ra (Có 3331)</td><td class="n" style="text-align:right">'+money(out)+'</td></tr><tr><td>Thuế GTGT đầu vào được khấu trừ (Nợ 133)</td><td class="n" style="text-align:right">'+money(inn)+'</td></tr><tr><td><b>Thuế GTGT phải nộp</b></td><td class="n" style="text-align:right"><b>'+money(due)+'</b></td></tr></table>';
  var okbal=Math.abs(ass-src)<1&&Math.abs(s[0]-s[1])<1&&Math.abs(s[2]-s[3])<1&&Math.abs(s[4]-s[5])<1;
  box.innerHTML='<div class="card"><span class="tag g">'+esc(c.kind)+'</span><h3>Báo cáo cuối kỳ: '+esc(c.name)+'</h3><div class="'+(okbal?'ex':'warn')+'"><b>'+(okbal?'Các báo cáo cân đối: tổng tài sản bằng tổng nguồn vốn, bảng cân đối số phát sinh cân.':'Số liệu chưa cân.')+'</b></div><h4>Bảng cân đối số phát sinh</h4>'+tb+'<h4>Báo cáo kết quả kinh doanh (rút gọn)</h4>'+kq+'<h4>Bảng cân đối kế toán (rút gọn)</h4>'+bs+'<h4>Số liệu tờ khai thuế GTGT của kỳ</h4>'+gt+'<h4>Câu hỏi phân tích để làm như chuyên gia</h4><ul><li>Tỷ suất lợi nhuận gộp = '+(rev?Math.round(1000*gp/rev)/10:0)+'%. Có hợp lý so với ngành không? Biến động so với tháng trước vì sao?</li><li>Thuế GTGT phải nộp '+money(due)+' đồng: đối chiếu số đầu ra, đầu vào với bảng kê hóa đơn và tờ khai trước khi nộp.</li><li>Doanh thu, giá vốn, tồn kho có khớp nhau không (bán bao nhiêu thì giá vốn tương ứng)?</li><li>Cơ quan thuế sẽ hỏi gì: công nợ phải thu, hóa đơn lớn cuối kỳ, chi phí quản lý tăng bất thường, hóa đơn từ 5 triệu có chuyển khoản không?</li></ul><p><button class="b" onclick="azView=\'list\';azRender()">Về danh sách</button> <button class="b alt" onclick="azIdx=0;azView=\'do\';azRender()">Xem lại nghiệp vụ</button></p></div>';
}
