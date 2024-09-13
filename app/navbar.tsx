"use client";

import Image from "next/image";
import logo from "./image/Dolphin.png";
import Link from "next/link";
import { AlertDialog, AlertDialogContent, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function Navbar() {
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
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Search></Search>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <Input></Input>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      </nav>
    </>
  );
}
