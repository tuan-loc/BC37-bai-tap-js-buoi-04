/**
 * Input: cho 3 số nguyên num1, num2, num3
 *
 * Process:
 * 1. Lấy giá trị 3 số nguyên
 * 2. Tạo biến đếm countEvenNumber (đếm số chẵn) và countOddNumber (đếm số lẻ)
 * 3. Kiểm tra từng số, nếu số chia cho 2 dư 0 => số chẵn => biến countEvenNumber tăng lên 1
 *           Ngược lại, nếu số chia cho 2 có dư => số lẻ => biến countOddNumber tăng lên 1
 * 4. In kết quả ra màn hình
 *
 * Output: Có bao nhiêu số lẻ, bao nhiêu số chẵn
 */

var num1 = 33;
var num2 = 34;
var num3 = 44;
var countEvenNumber = 0;
var countOddNumber = 0;

if (num1 % 2 === 0) {
  countEvenNumber++;
} else {
  countOddNumber++;
}

if (num2 % 2 === 0) {
  countEvenNumber++;
} else {
  countOddNumber++;
}

if (num3 % 2 === 0) {
  countEvenNumber++;
} else {
  countOddNumber++;
}

console.log(countEvenNumber, "số chẵn;", countOddNumber, "số lẻ");
