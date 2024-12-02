import React from "react";
import { assets } from "../assets/images/assets";
import { Truck, Shield, RefreshCw } from 'lucide-react';
export default function OurPolicy() {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 text-center p-20 text-xs sm:text-sm md:text-base textga700">
      <div>
        <Truck className="w-12 m-auto mb-5 size-16" />,
        <p className="font-semibold">Pengiriman Cepat</p>
        <p className="text-gray-400">
          Kami menyediakan layanan pengiriman cepat dan aman ke seluruh penjuru negeri.
        </p>
      </div>
      <div>
        <Shield className="w-12 m-auto mb-5 size-16" />,
        <p className="font-semibold">Keamanan Terjamin</p>
        <p className="text-gray-400">
          Jaminan keamanan untuk semua transaksi dan privasi pelanggan.
        </p>
      </div>
      <div>
        <RefreshCw className="w-12 m-auto mb-5 size-16" />,
        <p className="font-semibold">Garansi Pengembalian</p>
        <p className="text-gray-400">
          Nikmati layanan pengembalian produk dalam 30 hari tanpa syarat.
        </p>
      </div>
    </div>
  );
}
