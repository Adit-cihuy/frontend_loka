import Title from "../components/Title";
import { assets } from "../assets/images/assets";
import NewsLetterBox from "../components/NewsLetterBox"

export default function About() {
  return (
    <div>
      <div className="text-2xl text-start pt-8 border-t">
        <Title title={"Tentang"} subtitle={"Kami"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          src={assets.kontakloka}
          className="w-full md:max-w-[450px]"
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-800">
          <p>
          Lokamart, platform belanja online yang berkomitmen untuk mengangkat dan memperkenalkan produk-produk lokal berkualitas ke seluruh Indonesia. 
          Dengan berbelanja di Lokamart, Anda turut berkontribusi dalam memajukan usaha kecil dan menengah di Indonesia.
          </p>
          <b className="text-gray-800">Visi & Misi Kami</b>
          <p>
          Menjadi pasar online yang terpercaya untuk produk-produk lokal di Indonesia, 
          serta menginspirasi masyarakat untuk lebih mencintai dan mengonsumsi produk dalam negeri.
          </p>
        </div>
      </div>

      <div className="text-4xl py-4">
        <Title title={"Kenapa"} subtitle={"Memilih Kami ?"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Tampilan Website Simple dan Nyaman:</b>
          <p className="text-gray-600">
          Tampil dengan desain yang minimalis, UI Website Simple dan Nyaman dirancang untuk memberikan pengalaman pengguna yang intuitif dan bebas ribet. 
          Fokusnya adalah mempermudah navigasi, sehingga pengguna bisa menemukan apa yang mereka cari dengan cepat dan efisien.
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Negosiasi:</b>
          <p className="text-gray-600">
          Fitur Negosiasi hadir untuk mempermudah kamu mendapatkan harga terbaik dengan cara yang fleksibel dan nyaman. 
          Dengan fitur ini, kamu bisa langsung berinteraksi dengan penjual untuk menyepakati harga yang sesuai, tanpa ribet dan tetap transparan.
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
