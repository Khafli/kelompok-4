let ulang = true;

while (ulang) {

    // Input pengguna
    let berat = parseFloat(prompt("Masukkan berat paket (kg):"));
    let jarak = parseFloat(prompt("Masukkan jarak pengiriman (km):"));

    let pilihan;
    do{
        pilihan = prompt(
        "Pilih jenis layanan:\n1. Regular\n2. Express\n\nMasukkan pilihan (1/2):"
    );
    if(pilihan !== "1" && pilihan !== "2") {
        alert("Pilihan invalid coba lagi");
    }
} while (pilihan !== "1" && pilihan !== "2");

    
    let layanan, biayaDasar, biayaBerat = 0, biayaJarak = 0;

    // Menentukan layanan
    if (pilihan === "1") {
        layanan = "Regular";
        biayaDasar = 5;
    } else if (pilihan === "2") {
        layanan = "Express";
        biayaDasar = 10;
    } else {
        alert("Pilihan layanan tidak valid!");
        continue;
    }

    // Menghitung biaya berat
    if (berat <= 1) {
        biayaBerat = 1;
    }
    if (berat > 1) {
        if (pilihan === "1") {
            biayaBerat = Math.trunc((berat - 1) * 2);
        } else {
            biayaBerat = Math.trunc((berat - 1) * 3);
        }
    }

    if (jarak <= 10) {
        biayaJarak = 1;
    }
    if (jarak <= 10) {
        biayaJarak = 1;
    }
    if (jarak > 10)// Menghitung biaya jarak
     {
        if (pilihan === "10") {
            biayaJarak = Math.trunc((jarak - 10) / 10) * 1;
        } else {
            biayaJarak = Math.trunc((jarak - 10) / 10) * 2;
        }
    }

    // Total biaya
    let total = biayaDasar + biayaBerat + biayaJarak;

    // Menampilkan rincian
    let hasil =
        "===== RINCIAN BIAYA PENGIRIMAN =====\n" +
        "Layanan       : " + layanan + "\n" +
        "Berat Paket   : " + berat + " kg\n" +
        "Jarak         : " + jarak + " km\n\n" +
        "Biaya Dasar   : $" + biayaDasar + "\n" +
        "Biaya Berat   : $" + biayaBerat + "\n" +
        "Biaya Jarak   : $" + biayaJarak + "\n" +
        "-----------------------------------\n" +
        "Total Biaya   : $" + total;

    alert(hasil);
  
    let lagi;
do {
    lagi = prompt("Hitung biaya paket lain? (y/n)\n = ");
    if (lagi === null) {
         lagi = "n";
        break;
    }
    lagi = lagi.toLowerCase();
    if (lagi !== "y" && lagi !== "n") {
        alert("Pilihan invalid, coba lagi");
    }
} while (lagi !== "y" && lagi !== "n");

if (lagi !== "y") {
    ulang = false;
    alert("Terima kasih telah menggunakan kalkulator pengiriman!");
}
}1