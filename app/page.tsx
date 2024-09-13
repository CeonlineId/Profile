import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Layers, Mail, Star, WandSparkles, Zap } from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="space-y-8">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:m-8 lg:items-center lg:border-l-2 border-l-ceonline" id="home">
          <div className="flex flex-col px-4 lg:p-8 py-4 space-y-4">
            <div>
              <Button>
                <Mail className="mr-2 h-4 w-4" /> Buat undangan sekarang!
              </Button>
            </div>
            <h1 className="text-4xl lg:text-5xl">Buat Undangan Digital Anda Dengan Mudah</h1>
            <p className="text-md">
              Pilih Berbagai Template Yang Tersedia Untuk Undangan Anda Dengan Harga Yang Murah, <span className="font-semibold">Produk Terbatas!</span>
            </p>
            <div className="space-y-2">
              <div className="flex flex-row space-x-2 items-center">
                <Star size={16} className="text-ceonline"></Star>
                <p className="text-sm">Design modern</p>
              </div>
              <div className="flex flex-row space-x-2 items-center">
                <Zap size={16} className="text-ceonline"></Zap>
                <p className="text-sm">Full Responsif (Tablet/Handphone/Desktop)</p>
              </div>
              <div className="flex flex-row space-x-2 items-center">
                <WandSparkles size={16} className="text-ceonline"></WandSparkles>
                <p className="text-sm">Bisa Request Seseuai Keinginan</p>
              </div>
              <div className="flex flex-row space-x-2 items-center">
                <Layers size={16} className="text-ceonline"></Layers>
                <p className="text-sm">Jangka Waktu Link 3 hari (free)</p>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex justify-center w-1/2">
            <Carousel className="w-full max-w-xs">
              <CarouselContent>
                <CarouselItem>
                  <div className="p-1">
                    <img src="https://framerusercontent.com/images/JFjvYU2ZdmaflLALcAfF5c5kC2A.jpg" alt="" />
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
        <div className="flex flex-col px-4 py-4 space-y-4" id="product"></div>
      </div>
    </>
  );
}
