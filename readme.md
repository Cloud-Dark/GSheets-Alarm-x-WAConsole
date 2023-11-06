Saat ini, dalam dunia yang semakin sibuk dan penuh dengan berbagai tuntutan, seringkali kita membutuhkan bantuan untuk mengingat berbagai tugas dan tenggat waktu yang penting. Untungnya, teknologi modern memberikan solusi yang memudahkan kita dalam mengatur jadwal dan mengingatkan kita tentang hal-hal yang perlu dilakukan.
[![](https://blogger.googleusercontent.com/img/a/AVvXsEi7-3FVwWMgHQcw0BLQkbghkcbgC6-r6Y6_UsSS39U63ZkHELdaqn44e3CzCa2yxbZDa66X8W98lIYcMFC7MvE3UR9wHnF63yuWcQu4SovZfyM57FCYoNjSrupIDxRj37jS63FraSVsOPdlhkzKxuVCgMkW5BA1CQCRPhIcrenw34idXuZT7Dpi3u1vG3U)](https://blogger.googleusercontent.com/img/a/AVvXsEi7-3FVwWMgHQcw0BLQkbghkcbgC6-r6Y6_UsSS39U63ZkHELdaqn44e3CzCa2yxbZDa66X8W98lIYcMFC7MvE3UR9wHnF63yuWcQu4SovZfyM57FCYoNjSrupIDxRj37jS63FraSVsOPdlhkzKxuVCgMkW5BA1CQCRPhIcrenw34idXuZT7Dpi3u1vG3U)
Salah satu cara yang efektif untuk mengatur pengingat adalah dengan menggunakan spreadsheet, seperti Google Sheets, dan mengintegrasikannya dengan layanan pesan instan seperti WhatsApp melalui WhatsApp Business API dan WAConsole. Dengan menggabungkan kedua platform ini, kita dapat membuat alarm pengingat yang dapat mengirimkan pesan otomatis ke nomor WhatsApp yang ditentukan pada waktu yang telah ditentukan.

**Persiapan**

1.  Pastikan sudah memiliki akun WAConsole.
2.  Pastikan juga sudah membuat aplikasi di aplikasi WAConsole.
3.  Kode Library: 1HcF8WxaPMarFU909bgx9hxH_xHcUCqJeNq9XZ04XO1P5YYYUddDno20A

**Eksekusi**

**A. Pembuatan di Spreadsheet**

1.  Buka [sheets.new](http://sheets.new).
2.  Simpan kode id sheets yang muncul

    [![](https://blogger.googleusercontent.com/img/a/AVvXsEhz6KVt7_C1uShxoSIDUlK31qSGwNh0gl8v4KyUbn2Q_qiWNTAgT1vRS0X3tEIOCxOIJihlRVIvS8DKUaQJMUdNRKfJOS1eKrnYujQKVAgRNHUM5Q_hIW4MXPxHfi1BxNFwVLNXIJmx6vLqDo0IQyc7AgTnPeTg1ncoMLjzhApADSheW4yE5Y_oup3p3-g)](https://blogger.googleusercontent.com/img/a/AVvXsEhz6KVt7_C1uShxoSIDUlK31qSGwNh0gl8v4KyUbn2Q_qiWNTAgT1vRS0X3tEIOCxOIJihlRVIvS8DKUaQJMUdNRKfJOS1eKrnYujQKVAgRNHUM5Q_hIW4MXPxHfi1BxNFwVLNXIJmx6vLqDo0IQyc7AgTnPeTg1ncoMLjzhApADSheW4yE5Y_oup3p3-g)

3.  Buat tabel seperti ini:
    | id | text | datetime | receiver |
    |----------|--------------|--------------------|----------------|
    | cwetvte | makan siang | 11/6/2023 11:28:52 | 628998937095 |
    | by4v4c45 | makan malam | 11/6/2023 11:28:52 | 628998937095 |
    | 4v5y45y4 | makan sore | 11/6/2023 11:28:52 | 628998937095 |

Keterangan:

- id: Kode acak, pastikan setiap id memiliki nilai yang berbeda.
- text: Pesan yang akan dikirimkan.
- datetime: Waktu pengiriman pesan.
- receiver: Penerima pesan.

**B. coding di google apps script**

1.  Buka lembar Google Sheets yang ingin Anda gunakan.
2.  Klik menu "Extension" di atas lembar kerja.
3.  Pilih submenu "Google Apps Script" dari daftar opsi yang muncul. Ini akan membuka editor skrip terpisah.
4.  Buka repositori GitHub yang diberikan di tautan berikut: [GitHub - Cloud-Dark/GSheets-Alarm-x-WAConsole](https://github.com/Cloud-Dark/GSheets-Alarm-x-WAConsole/).
5.  Salin seluruh kode dari repositori tersebut. Anda dapat melakukannya dengan mengklik tombol "View code" di bagian atas halaman GitHub dan menyalin kode dari setiap file yang ada (misalnya, `code.gs` dan `helper.gs`).
6.  Kembali ke editor skrip Google Apps Script yang telah Anda buka sebelumnya.
7.  Tempelkan kode yang telah Anda salin dari repositori GitHub ke dalam editor skrip tersebut, menggantikan kode yang ada di sana.
8.  Setelah Anda menempelkan kode, pastikan untuk memperbaiki configugasi yang perlu diperbaiki sesuai dengan kebutuhan Anda.
9.  Setelah Anda selesai memperbaiki ejaan dan melakukan perubahan lain yang diperlukan, klik menu "File" di atas editor skrip dan pilih "Save" untuk menyimpan perubahan.
10. Selanjutnya anda bisa melakukan instalasi library seperti pad agambar berikut

[![]()](https://blogger.googleusercontent.com/img/a/AVvXsEi6U327pYVlovqrC-vP_RzIxn3R94A_RmE6pUohyCUgZfNHWJEUELJhx-uCSEKfKKAAFOwyfBueZHqhGEmRZG_1DsPmo6mEgKP8nd23T2DZRE9zvYRypevj8EbNBgZBdBH2q5aIRSs1o3EFsXyJ-eKYlTfqyQ_NExOIHGy7OtZKujbVvoR8XIIoey-WsC0)

11. Klik tombol run, dan pastikan tidak ada error yang muncul

[![](https://blogger.googleusercontent.com/img/a/AVvXsEiBTIs6npj_hrh-wHV0NzYEID37BHPSXTPNKg91H0pZY05BwZVHcEbBFTCgPGHoELgEwFvcmtotG_LvrjRYu_2-Ig-NfrXbhr0rkZPb2W3b_hQ3sFn6eLHbsij2hDvkLFOye-pR8sf_QgmkKGYOo4YKpmFU7mxXGenXbk8aGLOeuSY7RoKR30IaSjdaBXo)](https://blogger.googleusercontent.com/img/a/AVvXsEiBTIs6npj_hrh-wHV0NzYEID37BHPSXTPNKg91H0pZY05BwZVHcEbBFTCgPGHoELgEwFvcmtotG_LvrjRYu_2-Ig-NfrXbhr0rkZPb2W3b_hQ3sFn6eLHbsij2hDvkLFOye-pR8sf_QgmkKGYOo4YKpmFU7mxXGenXbk8aGLOeuSY7RoKR30IaSjdaBXo)

selanjutnya anda bisa mengarah ke menu trigger dan silahkan atur seperti ini

[![](https://blogger.googleusercontent.com/img/a/AVvXsEg6E9ZQ5WY4FbmGPiXSNx3g_Rzmv2jfRwmKIaVfV03vQeoeunfiveuzxq6NNSY4zVQecTbbzdoIuJqDSAf9c1YTvQIizESQXA31-f32wdXtqSnHhWBa2KhEfRgh2PTykWd7MumwyDmiKaP1lMcZOVxvuib6qLjByFIVNWkuMTyqxC3sNbwxVHtD6RQUATI)](https://blogger.googleusercontent.com/img/a/AVvXsEg6E9ZQ5WY4FbmGPiXSNx3g_Rzmv2jfRwmKIaVfV03vQeoeunfiveuzxq6NNSY4zVQecTbbzdoIuJqDSAf9c1YTvQIizESQXA31-f32wdXtqSnHhWBa2KhEfRgh2PTykWd7MumwyDmiKaP1lMcZOVxvuib6qLjByFIVNWkuMTyqxC3sNbwxVHtD6RQUATI)

Dengan mengikuti langkah-langkah di atas, Anda akan dapat membuat sistem alarm pengingat yang terintegrasi antara Google Sheets dan WhatsApp menggunakan WAConsole. Langkah-langkah tersebut termasuk dalam URL yang telah Anda berikan, namun, kontennya terpotong dan tidak lengkap. Jika Anda membutuhkan bantuan lebih lanjut atau informasi lebih detail, silakan berikan informasi yang diperlukan dari URL atau jelaskan bagian yang ingin Anda ketahui. Saya akan dengan senang hati membantu Anda lebih lanjut.
