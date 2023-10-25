import GameCard from "@/components/ui/Cards/GameCard";
import UserTrophyList from "@/components/UserTrophyList";
import { Button } from "@/components/ui/button";
import { TrophyTitle, UserTitlesResponse } from "@/types";
import { ChevronRight } from "lucide-react"
import Link from "next/link";


export default async function Home() {
  const res = await fetch("http://localhost:3001/trophies/user/pepega_passi", {
    cache: "no-store"
  })
  const trophies: TrophyTitle[] = await res.json();

  return (
    <main className="flex justify-center items-center min-h-screen ">
      <div className="flex flex-col items-center gap-4">
        <UserTrophyList trophies={trophies} />
      </div>



    </main>
  )
}
