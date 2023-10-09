// Contoh penggunaan if-else
let input_nilai = 75;

if (input_nilai >= 70) {
    console.log("Lulus");
} else {
    console.log("Tidak Lulus");
}

// Contoh nested if
let input_angka = 10;

if (angka > 0) {
    if (input_angka % 2 === 0) {
        console.log("Angka genap");
    } else {
        console.log("Angka ganjil");
    }
} else {
    console.log("Angka nol atau negatif");
}
// Contoh switch case
let masukkan_hari = "Senin";

switch (masukkan_hari) {
    case "Senin":
        console.log("Hari kerja");
        break;
    case "Sabtu":
    case "Minggu":
        console.log("Hari libur");
        break;
    default:
        console.log("Hari tidak valid");
}

// Contoh for statement
for (let data = 1; data <= 5; data++) {
    console.log(data);
}

// Contoh while
let data = 0;
while (data < 5) {
    console.log("Iterasi ke-" + data);
    data++;
}

// Contoh do while
let data2 = 0;
do {
    console.log("Iterasi ke-" + data2);
    data2++;
} while (data2 < 5);

// Contoh function
function penjumlahan(a, b) {
    return a + b;
}

let hasil = penjumlahan(3, 5);
console.log("Hasil penjumlahan: " + hasil);