import Title from "../components/Title";
import { assets } from "../assets/images/assets";
import NewsLetterBox from "../components/NewsletterBox";

export default function About() {
  return (
    <div>
      <div className="text-2xl text-start pt-8 border-t">
        <Title title={"Tentang"} subtitle={"Kami"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          src={assets.about_img}
          className="w-full md:max-w-[450px]"
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            LOKAMART didirikan pada tahun 2024
          </p>
          <b className="text-gray-800">Misi Kami</b>
          <p>
            bertujuan untuk lebih mengembangkan
            serta memajukan penjualan produk lokal Indonesia baik di dalam negeri ataupun
            luar negeri. Produk Lokal Go Digital
          </p>
        </div>
      </div>

      <div className="text-4xl py-4">
        <Title title={"WHY"} subtitle={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Asuransi yang Berkualitas:</b>
          <p className="text-gray-600">
            Belanja tanpa cemas! Kami menawarkan layanan asuransi berkualitas untuk melindungi pesananmu selama proses pengiriman. 
            Kalau ada barang hilang, rusak, atau masalah lain saat perjalanan, kamu bisa klaim dengan mudah dan cepat.
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Nyaman:</b>
          <p className="text-gray-600">
          Nikmati pengalaman belanja yang mulus dengan desain antarmuka yang super nyaman! 
          Kami bikin semuanya simpel dan user-friendly—mulai dari navigasi yang jelas, kategori yang tertata rapi, sampai tombol yang gampang diakses.
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Layanan Pelanggan yang Luar Biasa:</b>
          <p className="text-gray-600">
          Kepuasan kamu adalah prioritas kami! 
          Dengan tim layanan pelanggan yang sigap, ramah, dan selalu siap membantu, semua masalah atau pertanyaanmu bakal ditangani dengan cepat dan solusi terbaik.
          </p>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  );
}
