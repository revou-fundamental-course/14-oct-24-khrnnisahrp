// Fungsi untuk menghitung BMI
function hitungBMI() {
    // Ambil nilai input
    const berat = parseFloat(document.getElementById("berat").value);
    const tinggi = parseFloat(document.getElementById("tinggi").value) / 100; // Konversi cm ke meter

    // Validasi input
    if (isNaN(berat) || isNaN(tinggi) || berat <= 0 || tinggi <= 0) {
        alert("Masukkan nilai yang valid untuk berat dan tinggi!");
        return;
    }

    // Hitung BMI
    const bmi = berat / (tinggi * tinggi);
    const roundedBMI = bmi.toFixed(1);

    // Tentukan status berat badan
    let status = "";
    if (bmi < 18.5) {
        status = "Kekurangan berat badan";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        status = "Normal (ideal)";
    } else if (bmi >= 25 && bmi <= 29.9) {
        status = "Kelebihan berat badan";
    } else {
        status = "Kegemukan (Obesitas)";
    }

    // Tampilkan hasil
    document.getElementById("hasil").style.display = "block";
    document.getElementById("nilaiBMI").innerText = `BMI: ${roundedBMI}`;
    document.getElementById("statusBMI").innerText = `Status Berat Badan: ${status}`;
}
