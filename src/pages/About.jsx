import Title from "../components/Title";
import { assets } from "../assets/images/assets";
import NewsLetterBox from "../components/NewsletterBox";

export default function About() {
  return (
    <div>
      <div className="text-2xl text-start pt-8 border-t">
        <Title title={"About"} subtitle={"Us"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          src={assets.about_img}
          className="w-full md:max-w-[450px]"
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            LOKAMART
          </p>
          <b className="text-gray-800">Our Misson</b>
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
          <b>Pengiriman Cepat:</b>
          <p className="text-gray-600">
            Kami menyediakan layanan pengiriman cepat dan aman ke seluruh penjuru negeri.
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Keamanan Terjamin:</b>
          <p className="text-gray-600">
            Jaminan keamanan untuk semua transaksi dan privasi pelanggan.
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Garansi Pengembalian:</b>
          <p className="text-gray-600">
            Nikmati layanan pengembalian produk dalam 30 hari tanpa syarat.
          </p>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  );
}
