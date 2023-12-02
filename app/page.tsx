import UserIDInputForm from "@/components/forms/UserIDInputForm";
import Image from "next/image";

export default async function Home() {
  return (
    <main className="h-screen">
      <div className="max-w-7xl mx-auto flex flex-col justify-center items-center h-full gap-4">
        <Image src={"/trophies/platinum.png"} width={9999} height={9999} className="w-32 h-32" alt="" />
        <UserIDInputForm />
      </div>
    </main>
  )
}
