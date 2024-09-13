"use client";

import React, { useState } from "react";
import Image from "next/image";
import logo from "./image/Dolphin.png";
import Link from "next/link";

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fungsi untuk membuka modal
  const openModal = () => setIsModalOpen(true);

  // Fungsi untuk menutup modal
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <nav className="py-4 border-b border-white border-opacity-5">
        <div className="flex flex-row justify-between  px-10 pt-2 ">
          <div className=" flex justify-start">
            <Link href="#home">
              <Image src={logo} alt="Logo" className="h-15 w-10" />
            </Link>
          </div>
          <div className="flex gap-6 items-center">
            <Link href="#" className=" hover:text-gray-500 transition-colors duration-300">
              Produk
            </Link>
            <Link href="#" className=" hover:text-gray-500 transition-colors duration-300">
              Kontak
            </Link>
            <Link href="#" className=" hover:text-gray-500 transition-colors duration-300">
              Media Sosial
            </Link>
          </div>
          <div className="flex justify-end items-center">
            <Link href="#" onClick={openModal} className=" hover:text-gray-500 transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </Link>
          </div>
        </div>
      </nav>
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40" onClick={closeModal}>
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <input type="text" placeholder="This is the input field" className="border p-2 w-full " />
          </div>
        </div>
      )}
    </>
  );
}
