import { assets } from "../assets/images/assets";

export default function Footer() {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt40 text-sm">
        <div>
          <img src={assets.logo2} className="mt-5 w-12" alt="" />
          <p className="w-full md:2/3 text-gray-600">
            LOKAMART didirikan pada tahun 2024, bertujuan untuk lebih mengembangkan
            serta memajukan penjualan produk lokal Indonesia baik di dalam negeri ataupun
            luar negeri. Produk Lokal Go Digital
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+628 1234 5678</li>
            <li>lokamart@ecommerce.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright &copy; 2024 Lokamart - All Rights Reserved
        </p>
      </div>
    </div>
  );
}
