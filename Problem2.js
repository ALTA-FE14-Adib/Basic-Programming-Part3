//Problem 2 - Join Array Remove Duplicate
//Buatlah sebuah program menggabungkan 2 array input, dalam problem ini jika terdapat nama yang sama
//di dalam 2 array tersebut, maka kamu hanya boleh memasukkan satu nilai saja.

//function starts here karena functionnya join, pasti butuh dua parameter
function joinArrayRemoveDuplicate(arrayA, arrayB) {
  //kita deklarasikan variabel untuk menampung arraynya
  const index = [];
  //karena ada remove duplicate nih, yang saya pikir pertama kali pasti pake looping. nah kita coba dulu
  for (let i = 0; i < arrayA.length; i++) {
    // ini untuk mengakses array yang diinput nanti di console.log
    if (!index.includes(arrayA[i])) {
      // terus kita coba kasih kondisi nih, kalo hasil arrayA itu ada ga di index
      index.push(arrayA[i]); // kalo ga ada di push lah elemen di arrayA[i] tadi ke variabel index diatas
    }
  }
  //oke berhasil tinggal buat array satu lagi sesuai soal
  for (let j = 0; j < arrayB.length; j++) {
    if (!index.includes(arrayB[j])) {
      index.push(arrayB[j]);
    }
  }
  return index;
}
console.log(
  joinArrayRemoveDuplicate(
    ["apple", "xiaomi"],
    ["apple", "samsung", "motorolla"]
  )
);
console.log(
  joinArrayRemoveDuplicate(["apel", "anggur"], ["lemon", "leci", "nanas"])
);
console.log(joinArrayRemoveDuplicate(["football","basketball"],["basketball", "football"]))