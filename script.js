function cekJawaban(nomorSoal, status) {
    // Mengambil elemen sesuai nomor soal (hasil-quiz-1 atau hasil-quiz-2)
    const teksHasil = document.getElementById("hasil-quiz-" + nomorSoal);
    
    if (!teksHasil) return; // Mencegah error jika elemen tidak ditemukan

    if (nomorSoal === 1) {
        if (status === 'benar') {
            teksHasil.textContent = "🎉 Luar biasa! Jawaban Anda Benar (5/4 atau 1 1/4 kg).";
            teksHasil.style.color = "green";
        } else {
            teksHasil.textContent = "❌ Belum tepat. Coba ingat kembali cara menyamakan penyebut penjumlahan pecahan!";
            teksHasil.style.color = "red";
        }
    } else if (nomorSoal === 2) {
        if (status === 'benar') {
            teksHasil.textContent = "🎉 Benar! (2 × 20.000 = 40.000. Kembalian: 40.000 - 12.500 = 27.500).";
            teksHasil.style.color = "green";
        } else {
            teksHasil.textContent = "❌ Belum tepat. Hitung total uang Kenna (2 lembar 20.000) dikurangi 12.500!";
            teksHasil.style.color = "red";
        }
    }
}