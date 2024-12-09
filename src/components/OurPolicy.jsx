import React from "react";
import { assets } from "../assets/images/assets";

export default function OurPolicy() {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 text-center p-20 text-xs sm:text-sm md:text-base textga700">
      <div>
        <img src={assets.exchange_icon} className="w-12 m-auto mb-5" alt="" />
        <p className="font-semibold">Kebijakan Penukaran yang Mudah</p>
        <p className="text-gray-400">
          Dengan kebijakan penukaran yang super gampang, kamu bisa request penukaran barang hanya dalam beberapa langkah simpel.
        </p>
      </div>
      <div>
        <img src={assets.quality_icon} className="w-12 m-auto mb-5" alt="" />
        <p className="font-semibold">Kebijakan Pengembalian 7 Hari</p>
        <p className="text-gray-400">
          Belanja tenang, tanpa rasa khawatir! Di platform kami, kamu punya waktu 7 hari setelah barang diterima untuk mengembalikannya jika nggak sesuai ekspektasi.
        </p>
      </div>
      <div>
        <img src={assets.support_img} className="w-12 m-auto mb-5" alt="" />
        <p className="font-semibold">Dukungan Pelanggan Terbaik</p>
        <p className="text-gray-400">
          Kami selalu siap bantu kamu kapan pun dibutuhkan! Dengan tim customer service yang ramah dan profesional, semua pertanyaan, keluhan, atau masalah belanja kamu bakal ditangani dengan cepat dan tuntas.
        </p>
      </div>
    </div>
  );
}
