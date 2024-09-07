import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="flex flex-col px-4 py-4 space-y-2" id="home">
        <Button className="">
          <Mail className="mr-2 h-4 w-4" /> Buat undangan sekarang!
        </Button>
        <h1 className="text-3xl">Buat Undangan Digital Anda Dengan Mudah</h1>
      </div>
    </>
  );
}
