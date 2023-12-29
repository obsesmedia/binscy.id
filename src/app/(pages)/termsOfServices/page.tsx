import NavbarHeader from "@/app/navbarFooter";

export default function TermsOfServices() {
  const data = [
    {
      title: "Ketentuan Umum",
      subContent: [
        {
          title: "Pendahuluan",
          text: "Binscy Store menyediakan layanan pembayaran online bagi pelanggannya. Dengan menggunakan layanan kami, pelanggan setuju untuk terikat oleh syarat dan ketentuan ini.",
        },
        {
          title: "Layanan",
          text: "Binscy Store menyediakan layanan pembayaran untuk memfasilitasi transaksi ke pelanggan. Kami berhak untuk menolak atau membatalkan transaksi apa pun tanpa pemberitahuan sebelumnya dan tanpa memberikan alasan apa pun.",
        },
        {
          title: "Pembayaran",
          text: "Pelanggan setuju untuk membayar jumlah yang ditentukan untuk produk atau layanan yang dibeli melalui Binscy Store. Kami berhak untuk mengubah harga kami kapan saja tanpa pemberitahuan sebelumnya.",
        },
        {
          title: "Pembatalan",
          text: "Pelanggan dapat membatalkan transaksi mereka kapan saja sebelum produk atau layanan diterima. Setelah produk atau layanan diterima, pembatalan tidak lagi dapat dilakukan.",
        },
        {
          title: "Kembalian",
          text: "Kembalian tidak diperbolehkan kecuali jika produk atau layanan yang diterima tidak sesuai dengan deskripsi yang diberikan. Dalam hal ini, pelanggan harus menghubungi Binscy Store segera setelah menerima produk atau layanan untuk meminta pengembalian.",
        },
        {
          title: "Batasan Tanggung Jawab",
          text: "Binscy Store tidak bertanggung jawab atas kerugian atau kerusakan yang disebabkan oleh penggunaan layanannya.",
        },
        {
          title: "Hukum Yang Berlaku",
          text: "Syarat dan ketentuan ini akan diatur dan diterapkan sesuai dengan hukum yang berlaku di Republik Indonesia. Dengan menggunakan layanan Binscy Store, pelanggan setuju untuk terikat oleh syarat dan ketentuan ini.",
        },
      ],
    },
    {
      title: "Akun Pengguna Binscy Store",
      subContent: [
        {
          title: "Pendahuluan",
          text: "Binscy Store menyediakan layanan pembayaran online bagi pelanggannya. Dengan membuka dan menggunakan akun Binscy Store, pengguna setuju untuk terikat oleh syarat dan ketentuan ini.",
        },
        {
          title: "Pendaftaran Akun",
          text: "Untuk menggunakan layanan Binscy Store, pengguna harus membuka akun dengan memberikan informasi pribadi yang benar dan akurat. Binscy Store berhak untuk menolak atau membatalkan akun apa pun tanpa pemberitahuan sebelumnya dan tanpa memberikan alasan apa pun.",
        },
        {
          title: "Keamanan Akun",
          text: "Pengguna bertanggung jawab untuk menjaga kerahasiaan informasi akun mereka, termasuk kata sandi. Binscy Store tidak bertanggung jawab atas kerugian atau kerusakan yang disebabkan oleh penggunaan informasi akun oleh pihak yang tidak berwenang.",
        },
        {
          title: "Penggunaan Akun",
          text: "Pengguna setuju untuk hanya menggunakan akun mereka untuk tujuan yang legal dan tidak melakukan kegiatan yang merugikan Binscy Store atau pihak lain.",
        },
        {
          title: "Pembatalan Akun",
          text: "Binscy Store berhak untuk membatalkan akun apa pun tanpa pemberitahuan sebelumnya dan tanpa memberikan alasan apa pun.",
        },
        {
          title: "Batasan Tanggung Jawab",
          text: "Binscy Store tidak bertanggung jawab atas kerugian atau kerusakan yang disebabkan oleh penggunaan akun oleh pengguna.",
        },
        {
          title: "Hukum Yang berlaku",
          text: "Syarat dan ketentuan ini akan diatur dan diterapkan sesuai dengan hukum yang berlaku di Republik Indonesia. Dengan membuka dan menggunakan akun Binscy Store, pengguna setuju untuk terikat oleh syarat dan ketentuan ini.",
        },
      ],
    },
    {
      title: "Penggunaan dan Kepemilikan Kekayaan Intelektual",
      subContent: [
        {
          title: "Pendahuluan",
          text: "Binscy Store memiliki hak atas semua aset intelektual, termasuk namun tidak terbatas pada merek dagang, nama dagang, logo, dan konten. Pengguna setuju untuk tidak menggunakan aset intelektual Binscy Store tanpa izin tertulis dari Binscy Store.",
        },
        {
          title: "Kepemilikan Kekayaan Intelektual",
          text: "Semua aset intelektual Binscy Store adalah kekayaan intelektual Binscy Store dan dilindungi oleh hukum kekayaan intelektual yang berlaku.",
        },
        {
          title: "Penggunaan Aset Intelektual",
          text: "Pengguna setuju untuk tidak menggunakan aset intelektual Binscy Store tanpa izin tertulis dari Binscy Store. Pengguna juga setuju untuk tidak mengubah, memodifikasi, atau membuat turunan dari aset intelektual Binscy Store.",
        },
        {
          title: "Batasan Tanggung Jawab",
          text: "Binscy Store tidak bertanggung jawab atas kerugian atau kerusakan yang disebabkan oleh penggunaan yang tidak sah dari aset intelektual Binscy Store.",
        },
        {
          title: "Hukum Yang berlaku",
          text: "Syarat dan ketentuan ini akan diatur dan diterapkan sesuai dengan hukum yang berlaku di Republik Indonesia. Dengan menggunakan layanan Binscy Store, pengguna setuju untuk terikat oleh syarat dan ketentuan ini.",
        },
      ],
    },
  ];

  return (
    <NavbarHeader>
      <div className="tracking-wider">
        <div
          style={{
            backgroundImage: "url(/bgAboutUs.jpg)",
          }}
          className="bg-center text-slate-100 text-2xl font-semibold h-52 rounded-xl overflow-hidden"
        >
          <div className="w-full h-full backdrop-blur-sm text-center flex items-center justify-center">
            <h1>SYARAT & KETENTUAN PENGGUNA</h1>
          </div>
        </div>

        <div className="mx-auto my-10 text-justify">
          <div className="flex flex-col gap-8 p-6 rounded-xl bg-slate-900 text-white md:p-8">
            {data.map((doc, index) => (
              <ol className="flex flex-col gap-3" key={index}>
                <li className="font-medium">
                  {index + 1}. {doc.title}
                </li>
                {doc.subContent.map((subDoc, subIndex) => (
                  <ol className="flex flex-col gap-2" key={subIndex}>
                    <li className="pl-4">
                      {index + 1}.{subIndex + 1}. {subDoc.title}
                    </li>
                    <p className="pl-8 text-sm font-light">{subDoc.text}</p>
                  </ol>
                ))}
              </ol>
            ))}
          </div>
        </div>
      </div>
    </NavbarHeader>
  );
}
