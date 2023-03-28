// Cari bilangan prima

let bilangan_prima = [];

for(let i = 1; i <= 100; i++) {
    let bilangan = 0;
    for(let j = 1; j <= i; j++) {
        if(i % j == 0) {
            bilangan = bilangan+1;
        }
    }

    if(bilangan == 2) {
        bilangan_prima = [...bilangan_prima, i];
    }
    
}

console.log(bilangan_prima);