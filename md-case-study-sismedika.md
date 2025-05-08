## Bagian A – Pengetahuan Dasar QA (Pilihan Ganda & Singkat )
### 1. Jelaskan Perbedaan antara bug, defect dan error 
- Bug adalah Kesalahan dalam logika program yang menyebabkan hasil tidak sesuai harapan, tetapi program tetap bisa dijalankan. 

- Defect adalah istilah dalam pengujian perangkat lunak yang merujuk pada perbedaan antara hasil aktual dan hasil yang diharapkan dalam suatu sistem. Defect biasanya ditemukan selama proses pengujian dan menunjukkan bahwa ada sesuatu yang tidak bekerja sesuai dengan spesifikasi atau kebutuhan pengguna.

- Error adalah kesalahan yang terjadi saat program dijalankan, yang menyebabkan program tidak dapat bekerja dengan benar. Dalam konteks pemrograman, error bisa terjadi karena berbagai hal, seperti kesalahan sintaks, kesalahan logika, atau kesalahan saat program dijalankan (runtime).

### 2. Apa yang dimaksud dengan regression testing dan kapan biasanya dilakukan
Regression Testing merupakan pengetesan pada fitur existing yang mungkin terdampak oleh pengembangan kode yang dilakukan oleh developer. Selain itu, regression testing juga pengetesan pada business usecase existing untuk memastikan alur bisnis berjalan tanpa gangguan.

### 3. Sebutkan lifecycle dari bug/defect dari ditemukan hingga ditutup
#### New (Baru):
Bug atau defect pertama kali ditemukan dan dilaporkan. Status ini menunjukkan bahwa masalah tersebut belum diinvestigasi atau ditangani oleh tim pengembang.
#### Open (Terbuka):
Setelah laporan bug diterima dan divalidasi (dinyatakan sebagai bug yang valid), statusnya berubah menjadi "Open". Ini menandakan bahwa bug tersebut perlu ditangani dan akan ditugaskan kepada seorang developer untuk diperbaiki.
#### Assigned (Ditugaskan):
Bug yang berstatus "Open" ditugaskan kepada anggota tim pengembang tertentu yang bertanggung jawab untuk memperbaikinya.
#### In Progress (Dalam Pengerjaan):
Developer yang ditugaskan mulai menganalisis penyebab bug dan menulis kode untuk memperbaikinya. Status ini menunjukkan bahwa perbaikan sedang berlangsung.
#### Fixed (Diperbaiki):
Setelah developer selesai menulis kode perbaikan dan melakukan pengujian awal untuk memastikan perbaikan berfungsi, status bug diubah menjadi "Fixed".
#### Pending Verification (Menunggu Verifikasi):
Bug yang telah diperbaiki dikirim kembali ke tim penguji untuk diverifikasi. Status ini menunjukkan bahwa perbaikan telah dilakukan dan siap untuk diuji oleh tim penguji.
#### Verified (Diverifikasi):
Tim penguji melakukan pengujian ulang untuk memastikan bahwa bug yang dilaporkan telah benar-benar diperbaiki dan tidak ada masalah baru yang muncul akibat perbaikan tersebut.
Jika pengujian berhasil, status bug diubah menjadi "Verified".
#### Closed (Ditutup):
Setelah bug diverifikasi dan dipastikan telah diperbaiki dengan benar, statusnya diubah menjadi "Closed".
### 4. Apa itu test case dan test scenario? Jelaskan perbedaannya dan berikan contohnya.
- Test Scenario adalah deskripsi umum tentang apa yang ingin diuji. Fokusnya adalah alur fungsional dari aplikasi tanpa detail teknis dan memastikan bahwa fitur berfungsi sesuai kebutuhan dari sudut pandang pengguna.
  - contoh Test Scenario: "Uji logout dari akun pengguna"
- Test Case adalah Detail dari langkah-langkah untuk menguji suatu skenario. Termasuk input, langkah uji, data uji, hasil yang diharapkan, dan status (pass/fail).
- Contoh :
- Test Case ID : TC01
- Judul Test Case : Verifikasi proses logout dari akun pengguna  
- Pre-condition   : Pengguna sudah login ke dalam aplikasi
- Langkah Uji	    : Login ke aplikasi dengan kredensial valid -> Klik tombol/logout link ->  Cek apakah pengguna diarahkan ke halaman login/home -> Coba akses halaman dashboard melalui URL langsung
- Data Uji	      : Email: user@test.com, Password: Test1234
- Hasil yang Diharapkan	: Pengguna berhasil keluar dan diarahkan ke halaman login dan tidak dapat mengakses halaman dashboard tanpa login ulang
- Status	        : Pass / Fail
- Prioritas	      : Tinggi
#### 5. Apa yang dimaksud dengan severity dan priority dalam konteks bug? Berikan masing-masing contohnya.
- Severity adalah menggambarkan seberapa besar dampak teknis dari bug terhadap sistem/aplikasi.

| Severity             | contoh bug                                                                 |
|----------------------|----------------------------------------------------------------------------|
| high                 | form login tidak bisa di-submit meski data sudah benar                     |
| medium               | Validasi email tidak bekerja, tapi bisa lanjut ke halaman berikutnya       |    


| Link di Markdown                   | Format: `[teks](https://link.com)`                                     |
| Gambar di Markdown                 | Format: `![alt](https://link.com/gambar.jpg)`                          |
| Tampilkan kode (inline)            | Gunakan `` `kode` ``                                                   |
| Blok kode (multi-line)             | Gunakan tiga backtick: ```python (lalu isi kode) ```                   |
| Tambahkan garis pemisah           | Gunakan `---` atau `***`                                               |
| Simpan file markdown               | Simpan dengan ekstensi `.md`                                           |
| Preview di VS Code                 | Tekan `Ctrl + Shift + V`                                               |
