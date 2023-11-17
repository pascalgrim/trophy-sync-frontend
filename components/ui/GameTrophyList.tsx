"use client"
import { TrophyS } from '@/types';
import React, { useState } from 'react'
import TrophyCard from './Cards/TrophyCard';
import { Input } from './input';
import { Toggle } from "@/components/ui/toggle"
import { Eye, EyeOff } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { sortByEarned, sortByEarnedOn, sortByRarity, sortTrophiesByName } from '@/helper/sort';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

type GameTrophyListProps = {
  trophies: TrophyS[]
}
function GameTrophyList({ trophies }: GameTrophyListProps) {
  const [search, setSearch] = useState("")
  const [hideUnearned, setHideUnearned] = useState(false)
  const [trophyArray, setTrophyArray] = useState(sortByEarned(trophies))
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value)
  }
  function getVisibleState(trophy: TrophyS) {
    const isInSearchArray = trophy.trophyName.toLowerCase().includes(search.toLowerCase())
    if (hideUnearned && !trophy.isEarned) {
      return false
    }
    return isInSearchArray
  }
  function handleFilterChange(e: string) {
    switch (e) {
      case "name": {
        setTrophyArray(sortTrophiesByName(trophyArray))
        break
      }
      case "earnedOn": {
        setTrophyArray(sortByEarnedOn(trophyArray))
        break
      }
      case "rarity": {
        setTrophyArray(sortByRarity(trophyArray))
        break;
      }

      default:
        setTrophyArray(sortTrophiesByName(trophyArray))
    }

  }
  return (
    <div className='px-12 flex flex-col gap-4 '>
      <div className='flex gap-2 justify-end'>
        <Input placeholder='Trophy Name...' onChange={(e) => handleChange(e)} value={search} className='w-fit' />
        <Select onValueChange={(e) => handleFilterChange(e)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="earnedOn" >Earned on</SelectItem>
            <SelectItem value="name">Name</SelectItem>
            <SelectItem value="rarity">Rarity</SelectItem>
          </SelectContent>
        </Select>
        <Toggle onClick={() => setHideUnearned(!hideUnearned)} variant={"outline"} className='flex gap-2' >
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>{hideUnearned ? <EyeOff size={20} /> : <Eye size={20} />}</TooltipTrigger>
              <TooltipContent>
                <span>Show unearned trophies</span>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

        </Toggle>
      </div>

      <div className='flex flex-col gap-4 '>
        {trophyArray.map((trophy: TrophyS) => {
          const visible = getVisibleState(trophy)
          return (<TrophyCard trophy={trophy} key={trophy.trophyName} visible={visible} />)
        })}
      </div>
    </div>
  )
}

export default GameTrophyList