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
- Priority Menunjukkan urgensi bug tersebut untuk diperbaiki
- contoh :

| bug                                            | saverity                      | priority              |
|------------------------------------------------|-------------------------------|-----------------------|
| Aplikasi tidak bisa dibuka sama sekali         | Critical                      | high                  |
| Salah ejaan pada halaman bantuan               |low                            |  low                  |

## Bagian B – Praktik Manual Testing 
- Buat 10 test case untuk halaman login (dengan format: Test Case ID, Deskripsi, Langkah, Input, Expected Result).

| Test Case ID | Deskripsi                                     | Langkah                                                                 | Input                                  | Expected Result                                   |
|--------------|-----------------------------------------------|-------------------------------------------------------------------------|----------------------------------------|---------------------------------------------------|
| TC01         | Login berhasil dengan email & password valid | 1. Buka halaman login<br>2. Masukkan email & password<br>3. Klik Login | Email: user@example.com<br>Password: 123456 | User diarahkan ke dashboard                      |
| TC02         | Gagal login dengan email salah                | 1. Buka halaman login<br>2. Masukkan email salah<br>3. Klik Login      | Email: salah@example.com<br>Password: 123456 | Muncul pesan error: "Email atau password salah"  |
| TC03         | Gagal login dengan password salah             | 1. Masukkan email benar<br>2. Masukkan password salah<br>3. Klik Login | Email: user@example.com<br>Password: salah | Muncul pesan error                               |
| TC04         | Gagal login dengan kolom email kosong         | 1. Kosongkan email<br>2. Isi password<br>3. Klik Login                 | Email: _(kosong)_<br>Password: 123456  | Validasi: "Email tidak boleh kosong"             |
| TC05         | Gagal login dengan kolom password kosong      | 1. Isi email<br>2. Kosongkan password<br>3. Klik Login                 | Email: user@example.com<br>Password: _(kosong)_ | Validasi: "Password tidak boleh kosong"          |
| TC06         | Validasi format email tidak sesuai            | 1. Isi email tanpa `@`<br>2. Isi password<br>3. Klik Login             | Email: userexample.com<br>Password: 123456 | Validasi: "Format email tidak valid"             |
| TC07         | Cek batas minimum karakter password           | 1. Isi email<br>2. Isi password 3 karakter<br>3. Klik Login            | Email: user@example.com<br>Password: 123 | Validasi: "Password terlalu pendek"              |
| TC08         | Cek input case sensitivity pada password      | 1. Isi email benar<br>2. Password huruf kapital                        | Email: user@example.com<br>Password: 123ABC | Login gagal jika password case sensitive         |
| TC09         | Coba login dengan spasi di depan/belakang     | 1. Isi email dengan spasi<br>2. Isi password<br>3. Klik Login          | Email: ` user@example.com `<br>Password: 123456 | Email harus di-trim, login berhasil              |
| TC10         | Tombol login tidak aktif saat input kosong    | 1. Buka halaman login tanpa isi data                                  | _(semua kosong)_                        | Tombol login dalam keadaan nonaktif               |


- Buat 3 skenario untuk negative testing.

| Test Case ID | Judul                               | Deskripsi                                                              | Tipe Skenario | Langkah                                                              | Input                                            | Expected Result                                |
|--------------|-------------------------------------|------------------------------------------------------------------------|----------------|----------------------------------------------------------------------|--------------------------------------------------|--------------------------------------------------|
| TC11         | Email pakai karakter spesial        | Pengguna memasukkan email dengan karakter tidak valid                 | Negatif        | 1. Masukkan email dengan karakter aneh<br>2. Isi password<br>3. Klik Login  | Email: user!#$@example.com<br>Password: 123456     | Muncul pesan "Format email tidak valid"         |
| TC12         | SQL Injection di kolom email        | Uji input berbahaya (SQL Injection) di kolom email                    | Negatif        | 1. Masukkan `' OR '1'='1` di kolom email<br>2. Isi password<br>3. Klik Login | Email: `' OR '1'='1`<br>Password: bebas          | Login ditolak, input dianggap tidak valid       |
| TC14         | Email dengan domain tidak valid     | Email mengandung domain palsu atau tidak lengkap                      | Negatif        | 1. Masukkan email tidak lengkap<br>2. Klik Login                    | Email: user@abc<br>Password: 123456              | Validasi: "Format email tidak valid"            |
| TC15         | Karakter emoji di email             | Email mengandung karakter emoji                                       | Negatif        | 1. Masukkan emoji di kolom email<br>2. Klik Login                   | Email: 😀@example.com<br>Password: 123456        | Validasi: "Email tidak valid"                   |
| TC16         | Password hanya spasi                | Password hanya berisi spasi kosong                                    | Negatif        | 1. Isi password dengan spasi<br>2. Klik Login                      | Email: user@example.com<br>Password: `      `    | Validasi: "Password wajib diisi"                |

- Buat 2 skenario boundary testing untuk field password.
#### Skenario 1: Password panjang minimal
- Judul: Uji batas bawah panjang password (minimal 6 karakter)
- Deskripsi: Memastikan sistem menerima password tepat 6 karakter dan menolak kurang dari itu.
- Langkah:
  1. Masukkan email valid.
  2. Masukkan password 5 karakter.
  3. Klik Login → Harus gagal.
  4. Masukkan password 6 karakter.
  5. Klik Login → Harus berhasil (jika valid).
- Expected Result:
  - Password 5 karakter → Muncul validasi: **"Password minimal 6 karakter"**
  - Password 6 karakter → **Login berhasil** jika email dan password valid

#### Skenario 2: Password panjang maksimal
- Judul: Uji batas atas panjang password (maksimal 20 karakter)
- Deskripsi: Memastikan sistem menolak password lebih dari 20 karakter dan menerima tepat 20 karakter.
- Langkah:
  1. Masukkan email valid.
  2. Masukkan password 21 karakter.
  3. Klik Login → Harus gagal.
  4. Masukkan password 20 karakter.
  5. Klik Login → Harus berhasil (jika valid).
- Expected Result:
  - Password 21 karakter → Validasi: **"Password maksimal 20 karakter"**
  - Password 20 karakter → **Login berhasil** jika kombinasi valid
