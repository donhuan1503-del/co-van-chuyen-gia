/* Câu luyện tập NGHỊ ĐỊNH ĐẤT ĐAI, đối chiếu nguyên văn NĐ 103/2024, 291/2025, 230/2025, 123/2024, 281/2026, 151/2025 (Công báo). Thêm vào CUỐI bảng QUIZ. */
(function(){
function sh(a){a=a.slice();for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1)),t=a[i];a[i]=a[j];a[j]=t;}return a;}
function uniq(a){var s={},r=[];a.forEach(function(x){if(!s[x]){s[x]=1;r.push(x);}});return r;}
function Q(t,q,right,wrongs,e){wrongs=uniq(wrongs).filter(function(w){return w!==right;});
  var o=sh([{t:right,ok:1}].concat(wrongs.slice(0,3).map(function(w){return {t:w,ok:0};})));
  QUIZ.push({t:t,q:q,o:o.map(function(x){return x.t;}),a:o.findIndex(function(x){return x.ok;}),e:(e||"")+" [đã đối chiếu nguyên văn nghị định đăng Công báo]"});}

Q("qlt","Đơn giá thuê đất hằng năm không đấu giá = tỷ lệ % nhân giá đất trong Bảng giá đất; tỷ lệ % một năm theo NĐ 103/2024 là:","Từ 0,25% đến 3%",["Từ 1% đến 5%","Từ 0,5% đến 2%","Cố định 1%"],"NĐ 103/2024 Điều 26 khoản 1 điểm a.");
Q("qlt","Chậm nộp tiền thuê đất, tiền sử dụng đất thì phải nộp tiền chậm nộp theo:","Mức quy định của Luật Quản lý thuế (trừ trường hợp ghi nợ tiền sử dụng đất)",["Lãi vay ngân hàng","Phạt cố định 10%","Không phải nộp"],"NĐ 103/2024 Điều 45.");
Q("qlt","NĐ 230/2025 Điều 6: tiền thuê đất phải nộp của năm 2025 (thuê trả tiền hằng năm) được giảm:","30%, không giảm trên nợ các năm trước và tiền chậm nộp",["50% kể cả nợ cũ","10%","100%"],"NĐ 230/2025 Điều 6 khoản 1, 2.");
Q("qlt","Tiền thuê đất hằng năm chu kỳ sau tăng: tỷ lệ điều chỉnh theo Điều 32 NĐ 103/2024 bằng:","Tổng CPI hằng năm cả nước của 05 năm liền kề trước thời điểm điều chỉnh",["10% cố định","Lạm phát năm gần nhất","Giá đất thị trường"],"NĐ 103/2024 Điều 32 khoản 2.");
})();
