/**
 * Input: Nhập vào 3 cạnh của tam giác
 *
 * Process:
 * 1. Lấy giá trị 3 cạnh của tam giác (edge1, edge2, edge3)
 * 2. Sắp xếp giá trị 3 cạnh tam giác theo thứ tự tăng dần
 * 3. Kiểm tra tam giác, tổng 2 cạnh nhỏ hơn phải lớn hơn cạnh còn lại
 * 4. Nếu cạnh 1 bằng cạnh 2 bằng cạnh 3 thì tam giác đó là tam giác đều
 *    Nếu cạnh dài nhất bình phương bằng tổng 2 cạnh còn lại, thì tam giác đó là tam giác vuông
 *    Nếu 2 cạnh bất kì của tam giác bằng nhau và khác với cạnh còn lại thì tam giác đó là tam giác cân
 * 5. In ra màn hình kết quả
 *
 * Output: Cho biết tam giác đó là tam giác gì
 */

var edge1 = 6;
var edge2 = 7;
var edge3 = 8;

// Sắp xếp 3 cạnh của tam giác theo thứ tự tăng dần
if (edge1 > edge2) {
  var temp = edge1;
  edge1 = edge2;
  edge2 = temp;
}
if (edge2 > edge3) {
  var temp = edge2;
  edge2 = edge3;
  edge3 = temp;
}
if (edge1 > edge2) {
  var temp = edge1;
  edge1 = edge2;
  edge2 = temp;
}

// Kiểm tra tam giác cân
var flag = false;
if (edge1 === edge2 && edge1 !== edge3) {
  flag = true;
} else if (edge2 === edge3 && edge2 !== edge1) {
  flag = true;
} else if (edge1 === edge3 && edge1 !== edge2) {
  flag = true;
} else {
  flag = false;
}

if (edge1 + edge2 < edge3) {
  console.log("Không phải là tam giác"); // Kiểm tra xem có phải là tam giác hay không?
} else if (edge1 === edge2 && edge1 === edge3) {
  console.log("Tam giác đều");
} else if (edge3 * edge3 === edge1 * edge1 + edge2 * edge2) {
  console.log("Tam giác vuông");
} else if (flag) {
  console.log("Tam giác cân");
} else {
  console.log("Tam giác thường");
}
