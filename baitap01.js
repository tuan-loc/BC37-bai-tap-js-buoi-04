/**
 * Input: 3 số nguyên
 *
 * Process:
 * 1. Lấy 3 số nguyên, gán vào 3 biến a, b, c
 * 2. Lần lượt so sánh 2 số, nếu a lớn hơn b thì hoán đổi giá trị của a và b thông qua biến tạm (temp) và gán lại giá trị cho a và b. Ngược lại, giữ nguyên giá trị a và b
 * 3. Tiếp tục so sánh 2 số b và c, nếu b lớn hơn c thì hoán đổi giá trị của b và c thông qua biến tạm (temp) và gán lại giá trị cho b và c. Ngược lại, giữ nguyên giá trị b và c
 * 4. So sánh 2 số a và b, nếu a lớn hơn b thì hoán đổi giá trị của a và b thông qua biến tạm (temp) và gán lại giá trị cho a và b. Ngược lại, giữ nguyên giá trị a và b
 *  => Ta thu được kết quả, in kết quả ra màn hình => console.log(a, b, c)
 *
 * Output: sắp xếp 3 số theo thứ tự tăng dần
 */

var a = 7;
var b = 4;
var c = 2;
if (a > b) {
  var temp = a;
  a = b;
  b = temp;
}
if (b > c) {
  var temp = b;
  b = c;
  c = temp;
}
if (a > b) {
  var temp = a;
  a = b;
  b = temp;
}
console.log(a, b, c);
