/* Câu luyện tập đã đối chiếu nguyên văn VBHN 2026: Luật GTGT, TNDN, TNCN, Quản lý thuế, Kế toán. Thêm vào CUỐI bảng QUIZ. */
(function(){
function sh(a){a=a.slice();for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1)),t=a[i];a[i]=a[j];a[j]=t;}return a;}
function uniq(a){var s={},r=[];a.forEach(function(x){if(!s[x]){s[x]=1;r.push(x);}});return r;}
function Q(t,q,right,wrongs,e){wrongs=uniq(wrongs).filter(function(w){return w!==right;});
  var o=sh([{t:right,ok:1}].concat(wrongs.slice(0,3).map(function(w){return {t:w,ok:0};})));
  QUIZ.push({t:t,q:q,o:o.map(function(x){return x.t;}),a:o.findIndex(function(x){return x.ok;}),e:(e||"")+" [đã đối chiếu nguyên văn VBHN 2026]"});}
function fm(n){return String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g,".");}
function R(a,b){return a+Math.floor(Math.random()*(b-a+1));}
/* GTGT */
Q("gtgt","Doanh nghiệp có doanh thu hằng năm từ bao nhiêu trở lên bắt buộc dùng phương pháp khấu trừ GTGT (trừ hộ, cá nhân kinh doanh)?","01 tỷ đồng",["500 triệu đồng","03 tỷ đồng","10 tỷ đồng"],"Điều 11 khoản 1 điểm a Luật GTGT.");
Q("gtgt","Doanh nghiệp doanh thu năm dưới 01 tỷ đồng (không chọn khấu trừ) tính GTGT bán hàng hóa theo:","Tỷ lệ 1% nhân doanh thu (phân phối, cung cấp hàng hóa)",["10% trừ thuế đầu vào","5% doanh thu","2% giá trị gia tăng"],"Điều 12 khoản 2 điểm a1, b1.");
Q("gtgt","Tỷ lệ % GTGT tính trực tiếp theo doanh thu đối với dịch vụ, xây dựng không bao thầu nguyên vật liệu:","5%",["1%","2%","3%"],"Điều 12 khoản 2 điểm b2.");
Q("gtgt","Tỷ lệ % GTGT tính trực tiếp theo doanh thu đối với sản xuất, vận tải, dịch vụ gắn với hàng hóa, xây dựng có bao thầu nguyên vật liệu:","3%",["1%","2%","5%"],"Điều 12 khoản 2 điểm b3.");
Q("gtgt","Hoạt động kinh doanh khác (không thuộc ba nhóm đầu) tính GTGT trực tiếp theo tỷ lệ:","2%",["1%","3%","5%"],"Điều 12 khoản 2 điểm b4.");
Q("gtgt","Thuốc chữa bệnh, thiết bị y tế, nước sạch, phân bón chịu thuế suất GTGT:","5%",["0%","8%","10%"],"Điều 9 khoản 2.");
Q("gtgt","Hàng hóa, dịch vụ không thuộc nhóm 0% và 5% chịu thuế suất GTGT:","10% (mức giảm 2% là chính sách riêng theo nghị quyết, nghị định)",["8% cố định","12%","15%"],"Điều 9 khoản 3.");
Q("gtgt","Cơ sở kinh doanh không xác định được thuế suất từng loại hàng hóa, dịch vụ phải tính thuế theo:","Mức thuế suất cao nhất của hàng hóa, dịch vụ mà cơ sở kinh doanh",["Mức thấp nhất","Mức bình quân","Mức 5%"],"Điều 9 khoản 4.");
Q("gtgt","Hoàn thuế GTGT xuất khẩu theo tháng, quý khi số thuế đầu vào chưa khấu trừ hết từ:","300 triệu đồng trở lên",["100 triệu đồng","200 triệu đồng","500 triệu đồng"],"Điều 15 khoản 1 điểm a.");
Q("gtgt","Số thuế GTGT được hoàn của hàng hóa, dịch vụ xuất khẩu không vượt quá bao nhiêu doanh thu xuất khẩu của kỳ hoàn?","10% doanh thu xuất khẩu của kỳ hoàn thuế",["5%","15%","20%"],"Điều 15 khoản 1 điểm b.");
Q("gtgt","Dự án đầu tư đã hoàn thành chưa hoàn thuế đầu vào: nộp hồ sơ hoàn trong thời hạn:","01 năm kể từ ngày dự án (giai đoạn, hạng mục) hoàn thành",["06 tháng","02 năm","05 năm"],"Điều 15 khoản 2 điểm a.");
Q("gtgt","Thuế GTGT đầu vào không được khấu trừ (có chứng từ hợp lệ) được xử lý:","Tính vào chi phí tính thuế TNDN hoặc nguyên giá TSCĐ, trừ phần không có chứng từ thanh toán không dùng tiền mặt",["Luôn được khấu trừ kỳ sau","Luôn bị loại hoàn toàn","Chuyển sang thuế TNCN"],"Điều 14 khoản 1 điểm e.");
Q("gtgt","Đầu vào dùng chung cho hoạt động chịu thuế và không chịu thuế nhưng không hạch toán riêng được thì khấu trừ theo:","Tỷ lệ doanh thu chịu thuế trên tổng doanh thu bán ra",["Tỷ lệ chi phí","Tỷ lệ 50%","Tỷ lệ tài sản"],"Điều 14 khoản 1 điểm b.");
Q("gtgt","Hộ, cá nhân kinh doanh có doanh thu năm bằng hoặc dưới mức quy định thì hàng hóa, dịch vụ:","Không chịu thuế GTGT; mức do Chính phủ quy định (Điều 5 khoản 25, hiệu lực 01/01/2026)",["Chịu thuế 1%","Chịu thuế 5%","Phải khấu trừ đầu vào"],"Điều 5 khoản 25.");
/* TNDN */
Q("tndn","Thuế suất TNDN mặc định theo Luật 67/2025:","20%",["15%","17%","25%"],"Điều 10 khoản 1.");
Q("tndn","Doanh nghiệp tổng doanh thu năm không quá 03 tỷ đồng chịu thuế suất:","15%",["10%","17%","20%"],"Điều 10 khoản 2.");
Q("tndn","Doanh nghiệp tổng doanh thu năm trên 03 tỷ đến không quá 50 tỷ đồng chịu thuế suất:","17%",["15%","18%","20%"],"Điều 10 khoản 3.");
Q("tndn","Doanh thu làm căn cứ xác định thuế suất 15% và 17% là doanh thu của:","Kỳ tính thuế TNDN liền trước",["Kỳ tính thuế hiện tại","Trung bình 3 năm","Quý gần nhất"],"Điều 10 khoản 3.");
Q("tndn","Thời gian chuyển lỗ tối đa theo Luật TNDN 67/2025:","05 năm liên tục kể từ năm sau năm phát sinh lỗ",["03 năm","07 năm","10 năm"],"Điều 16 khoản 1.");
Q("tndn","Khoản chi nào KHÔNG được trừ khi xác định thu nhập chịu thuế TNDN?","Tiền phạt do vi phạm hành chính",["Chi đào tạo nghề cho người lao động","Chi tài trợ giáo dục, y tế theo quy định","Chi nghiên cứu khoa học, chuyển đổi số"],"Điều 9 khoản 2 điểm b; khoản 1 điểm b3, b5, b6.");
Q("tndn","Tiền chậm nộp thuế theo quy định về quản lý thuế khi tính TNDN:","Không được trừ",["Được trừ toàn bộ","Được trừ 50%","Được trừ khi nộp trong năm"],"Điều 9 khoản 2 điểm l.");
Q("tndn","Tiền lương, tiền công của chủ doanh nghiệp tư nhân, chủ công ty TNHH một thành viên do cá nhân làm chủ:","Không được trừ khi tính TNDN",["Được trừ toàn bộ","Được trừ tối đa 10 triệu/tháng","Được trừ nếu có bảng lương"],"Điều 9 khoản 2 điểm h.");
Q("tndn","Thuế GTGT đầu vào đã được khấu trừ có được tính vào chi phí được trừ TNDN không?","Không",["Có","Có 50%","Có nếu doanh thu dưới 3 tỷ"],"Điều 9 khoản 2 điểm l.");
Q("tndn","Luật TNDN 67/2025 có hiệu lực từ 01/10/2025 và áp dụng từ kỳ tính thuế:","Năm 2025",["Năm 2024","Năm 2026","Năm 2027"],"Điều 19 khoản 1.");
Q("tndn","Doanh nghiệp có tổng doanh thu năm từ mức Chính phủ quy định trở xuống được:","Miễn thuế TNDN (khoản 14a Điều 4, từ 01/01/2026)",["Giảm 50% thuế TNDN","Nộp thuế 1% doanh thu","Không phải khai thuế"],"Luật 09/2026/QH16.");
/* TNCN */
Q("tncn","Mức giảm trừ gia cảnh đối với người nộp thuế theo Luật TNCN 109/2025:","15,5 triệu đồng/tháng",["11 triệu đồng/tháng","13 triệu đồng/tháng","17 triệu đồng/tháng"],"Điều 10 khoản 1 điểm a.");
Q("tncn","Mức giảm trừ đối với mỗi người phụ thuộc:","6,2 triệu đồng/tháng",["4,4 triệu đồng/tháng","5,5 triệu đồng/tháng","7 triệu đồng/tháng"],"Điều 10 khoản 1 điểm b.");
Q("tncn","Biểu thuế lũy tiến từng phần đối với tiền lương, tiền công có mấy bậc?","5 bậc: 5%, 10%, 20%, 30%, 35%",["7 bậc","4 bậc","6 bậc"],"Điều 9 khoản 2.");
Q("tncn","Bậc 3 của biểu thuế (tháng) là phần thu nhập tính thuế:","Trên 30 đến 60 triệu đồng, thuế suất 20%",["Trên 30 đến 60 triệu đồng, thuế suất 15%","Trên 18 đến 32 triệu đồng, thuế suất 20%","Trên 60 đến 100 triệu đồng, thuế suất 20%"],"Điều 9 khoản 2.");
Q("tncn","Thuế TNCN từ chuyển nhượng chứng khoán:","Giá chuyển nhượng nhân 0,1% theo từng lần",["Thu nhập tính thuế 20%","Giá chuyển nhượng nhân 2%","5% cổ tức"],"Điều 13 khoản 2.");
Q("tncn","Thuế TNCN từ chuyển nhượng bất động sản:","Giá chuyển nhượng nhân 2%",["Thu nhập tính thuế 20%","Giá chuyển nhượng nhân 0,1%","Giá chuyển nhượng nhân 5%"],"Điều 14 khoản 1.");
Q("tncn","Thuế TNCN từ đầu tư vốn (cổ tức, lãi) của cá nhân cư trú:","5%",["10%","15%","20%"],"Điều 12 khoản 1.");
Q("tncn","Cá nhân kinh doanh doanh thu năm trên mức miễn đến 03 tỷ đồng tính thuế theo lợi nhuận với thuế suất:","15%",["10%","17%","20%"],"Điều 7 khoản 2 điểm b.");
Q("tncn","Cá nhân kinh doanh có doanh thu năm trên 03 đến 50 tỷ đồng, thuế suất tính trên thu nhập là:","17%",["15%","20%","25%"],"Điều 7 khoản 2 điểm c.");
Q("tncn","Cá nhân cho thuê bất động sản (không kể lưu trú) nộp thuế TNCN bằng phần doanh thu vượt mức miễn nhân:","5%",["2%","10%","15%"],"Điều 7 khoản 4.");
Q("tncn","Quy định mới về thu nhập từ tiền lương, kinh doanh của cá nhân cư trú áp dụng từ:","Kỳ tính thuế năm 2026",["01/01/2025","01/07/2026 cho từng tháng","01/01/2027"],"Điều 29 khoản 2 Luật TNCN 109/2025.");
/* QLT */
Q("qlt","Tiền chậm nộp theo Luật Quản lý thuế 108/2025 là:","0,03%/ngày trên số tiền chậm nộp",["0,05%/ngày","0,03%/tháng","0,1%/ngày"],"Điều 16 khoản 2.");
Q("qlt","Thời hạn khai bổ sung hồ sơ khai thuế (khi chưa có quyết định thanh tra, kiểm tra) tính từ ngày hết hạn nộp hồ sơ của kỳ sai, sót:","05 năm",["03 năm","10 năm","02 năm"],"Điều 12 khoản 5.");
Q("qlt","Bất khả kháng: gia hạn nộp hồ sơ khai thuế (tháng, quý, năm) tối đa:","30 ngày",["15 ngày","60 ngày","90 ngày"],"Điều 12 khoản 4 điểm a.");
Q("qlt","Bất khả kháng: gia hạn nộp hồ sơ quyết toán thuế tối đa:","60 ngày",["30 ngày","90 ngày","120 ngày"],"Điều 12 khoản 4 điểm a.");
Q("qlt","Luật Quản lý thuế 108/2025 có hiệu lực chung từ:","01/07/2026 (Điều 13 và Điều 26 về hóa đơn điện tử của hộ kinh doanh từ 01/01/2026)",["01/01/2026 cho tất cả","01/01/2027","01/07/2025"],"Điều 52 khoản 1, 2.");
Q("qlt","Kinh doanh trên sàn thương mại điện tử có chức năng đặt hàng và thanh toán: ai khấu trừ, nộp thuế thay hộ kinh doanh?","Chủ quản sàn, nền tảng",["Hộ kinh doanh tự nộp","Ngân hàng","Cơ quan hải quan"],"Điều 13 khoản 4 điểm a.");
Q("qlt","Người nộp thuế bị kiểm tra có thể giải trình để điều chỉnh hồ sơ liên quan thời kỳ đã thanh tra, kiểm tra nhờ cơ chế nào?","Bổ sung hồ sơ giải trình; cơ quan thuế chấp thuận thì ban hành thông báo cho điều chỉnh",["Không được điều chỉnh","Chỉ qua Tòa án","Chỉ nộp phạt"],"Điều 12 khoản 5 điểm d.");
/* Kế toán */
Q("ketoan","Kỳ kế toán năm theo Luật Kế toán là:","12 tháng, 01/01 đến 31/12 dương lịch (đơn vị đặc thù được chọn 12 tháng tròn bắt đầu từ đầu quý, phải thông báo)",["12 tháng bất kỳ tự chọn không cần thông báo","06 tháng","15 tháng"],"Điều 12.");
Q("ketoan","Tài liệu kế toán dùng trực tiếp để ghi sổ, lập báo cáo tài chính phải lưu trữ tối thiểu:","10 năm",["05 năm","07 năm","15 năm"],"Điều 41 khoản 5 điểm b.");
Q("ketoan","Tài liệu kế toán dùng cho quản lý, điều hành, chứng từ không trực tiếp ghi sổ lưu trữ tối thiểu:","05 năm",["03 năm","10 năm","vĩnh viễn"],"Điều 41 khoản 5 điểm a.");
Q("ketoan","Tài liệu kế toán phải đưa vào lưu trữ trong thời hạn:","12 tháng kể từ ngày kết thúc kỳ kế toán năm hoặc kết thúc công việc kế toán",["30 ngày","03 tháng","24 tháng"],"Điều 41 khoản 3.");
Q("ketoan","Hành vi nào bị cấm theo Luật Kế toán?","Lập hai hệ thống sổ kế toán tài chính trở lên hoặc công bố báo cáo tài chính số liệu không đồng nhất trong cùng kỳ",["Lập sổ kế toán điện tử","Dùng chữ ký số","Kiểm kê định kỳ"],"Điều 13 khoản 10.");
Q("ketoan","Chênh lệch kiểm kê giữa thực tế và sổ kế toán phải xử lý như thế nào?","Xác định nguyên nhân, xử lý và phản ánh vào sổ trước khi lập báo cáo tài chính",["Để lại sang kỳ sau","Ghi thẳng vào chi phí khác không cần giải thích","Chỉ ghi chú ngoài sổ"],"Điều 40 khoản 3.");
Q("ketoan","Người quản lý, điều hành đơn vị kế toán được kiêm làm kế toán, thủ quỹ trong trường hợp nào?","Doanh nghiệp tư nhân và công ty TNHH một thành viên do cá nhân làm chủ sở hữu",["Mọi công ty cổ phần","Công ty nhỏ dưới 10 lao động","Không có trường hợp nào"],"Điều 13 khoản 7.");
/* Số ngẫu nhiên */
(function(){var i;
 for(i=0;i<8;i++){var dt=R(5,40)*1e8,tl=[[1,"phân phối, cung cấp hàng hóa"],[5,"dịch vụ, xây dựng không bao thầu nguyên vật liệu"],[3,"sản xuất, vận tải, xây dựng có bao thầu nguyên vật liệu"],[2,"hoạt động kinh doanh khác"]][i%4];
  var dt2=Math.min(dt,9.9e8),t=Math.round(dt2*tl[0]/100);
  Q("gtgt","Doanh nghiệp doanh thu năm dưới 01 tỷ ("+fm(dt2)+" đồng), hoạt động "+tl[1]+", không chọn khấu trừ. GTGT tính trực tiếp là bao nhiêu?",fm(t)+" đồng",[fm(Math.round(dt2*0.1))+" đồng",fm(Math.round(dt2*(tl[0]===1?0.02:0.01)))+" đồng",fm(Math.round(dt2*0.05*(tl[0]===5?2:1)))+" đồng",fm(Math.round(dt2*0.03*(tl[0]===3?2:1)))+" đồng"],"Điều 12 khoản 2: "+tl[0]+"% × "+fm(dt2)+" = "+fm(t)+" đồng.");}
 for(i=0;i<8;i++){var ln=R(10,60)*1e6,pt=R(0,3),tn=ln-ln*0.105-15.5e6-6.2e6*pt;
  if(tn<=0)continue;
  var th=0,b=[[10e6,.05],[30e6,.10],[60e6,.20],[100e6,.30],[1e18,.35]],pre=0;
  for(var k=0;k<b.length;k++){var up=b[k][0];if(tn>pre){th+=(Math.min(tn,up)-pre)*b[k][1];}pre=up;}
  th=Math.round(th/1000)*1000;
  Q("tncn","Lương gross "+fm(ln)+" đồng/tháng, bảo hiểm bắt buộc NLĐ 10,5% (chưa chạm trần), "+pt+" người phụ thuộc, kỳ tính thuế 2026 (biểu 5 bậc, giảm trừ 15,5 và 6,2 triệu). Thuế TNCN gần đúng (làm tròn nghìn đồng)?",fm(th)+" đồng",[fm(Math.round(th*1.35/1000)*1000)+" đồng",fm(Math.round(th*0.7/1000)*1000)+" đồng",fm(Math.round(tn*0.1/1000)*1000)+" đồng"],"Thu nhập tính thuế = "+fm(ln)+" - "+fm(ln*0.105)+" - 15.500.000 - "+pt+" × 6.200.000 = "+fm(tn)+" đồng, áp biểu lũy tiến 5 bậc → "+fm(th)+" đồng.");}
 for(i=0;i<8;i++){var tien=R(5,80)*1e7,ng=R(5,60),cn=Math.round(tien*0.0003*ng);
  Q("qlt","Chậm nộp "+fm(tien)+" đồng thuế trong "+ng+" ngày. Tiền chậm nộp (0,03%/ngày)?",fm(cn)+" đồng",[fm(Math.round(tien*0.0005*ng))+" đồng",fm(Math.round(tien*0.0003*ng*2))+" đồng",fm(Math.round(tien*0.003*ng))+" đồng"],"Điều 16 khoản 2: "+fm(tien)+" × 0,03% × "+ng+" = "+fm(cn)+" đồng.");}
})();
})();
