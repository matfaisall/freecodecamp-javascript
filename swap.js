// tukar nilai dari variabel yang ada

function swap() {
  let a = 1;
  let b = 2;
  console.log("a awal = ", a);
  console.log("b awal = ", b);

  // dibalik
  // ubah dulu yang b
  a -= b;
  b += a;
  a = b - a;

  console.log("a final = ", a);
  console.log("b final = ", b);
}

swap();
