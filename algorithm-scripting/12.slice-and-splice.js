/* 
You are given two arrays and an index.

Copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.

*/

function frankenSplice(arr1, arr2, n) {
  let localArr = arr2.slice();
  localArr.splice(n, 0, ...arr1);
  return localArr;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

/*  
HINT 1 :
Buat salinan array kedua di dalam fungsi. Ini akan memastikan bahwa array asli tidak bermutasi. Ini dapat dilakukan dengan menggunakan operasi slice pada larik kedua, dan menugaskannya ke sebuah variabel.

HINT 2 :
Ulangi semua item dalam larik pertama. Untuk setiap item dalam larik pertama, sambungkan ke dalam larik yang disalin dalam indeks yang diberikan sebagai argumen.

HINT 3 :
Tingkatkan indeks setelah melakukan sambungan.
*/