/**
 * Input: Nhập vào vai trò người sử dụng máy
 *
 * Process:
 * 1. Lấy ra thông tin vai trò người sử dụng máy
 * 2. Nếu là Bố thì in ra màn hình "Xin chào Bố !!!"
 * Nếu là Mẹ thì in ra màn hình "Xin chào Mẹ !!!"
 * Nếu là Anh Trai thì in ra màn hình "Xin chào Anh Trai !!!"
 * Nếu là Em Gái thì in ra màn hình "Xin chào Em Gái !!!"
 *
 * Output: In ra lời chào hỏi các thành viên trong gia đình
 */

var who = "Mother";

switch (who) {
  case "Father":
    console.log("Xin chào Bố !!!");
    break;

  case "Mother":
    console.log("Xin chào Mẹ !!!");
    break;
  case "Elder Brother":
    console.log("Xin chào Anh Trai !!!");
    break;

  case "Younger Sister":
    console.log("Xin chào Em Gái !!!");
    break;

  default:
    console.log("Xin vui lòng nhập lại vai trò người sử dụng máy. Cảm ơn !!!");
    break;
}
