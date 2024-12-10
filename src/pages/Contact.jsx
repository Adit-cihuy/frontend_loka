import Title from "../components/Title";
import {assets} from "../assets/images/assets";
import NewsletterBox from "../components/NewsletterBox";
export default function Contact() {
  return (
    <div>
      <div className="text-start text-2xl pt-10 border-t">
        <Title title={"Kontak"} subtitle={"Kami"} />
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img
          className="w-full md:max-w-[480px]"
          src={assets.logo1}
          alt=""
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Toko Kami</p>
          <p className="text-gray-500">Jendral Sudirman, Thehok  <br /> Jambi 36138, Indonesia</p>
          <p className="text-gray-500">Telp: (+628) 123 45678 <br /> Email: lokamart@ecommerce.com</p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
}
