"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="py-4">
        <div className="flex flex-row justify-between">
          <Link href="#">Produk</Link>
          <Link href="#">Kontak</Link>
          <Link href="#">Media Sosial</Link>
        </div>
      </nav>
    </>
  );
}
