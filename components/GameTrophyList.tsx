import { TrophyS } from '@/types';
import React from 'react'
import TrophyCard from './ui/Cards/TrophyCard';
type GameTrophyListProps = {
  trophies: TrophyS[]
}
function GameTrophyList({ trophies }: GameTrophyListProps) {
  function sortByEarned() {
    const earned: TrophyS[] = [];
    const unEarned: TrophyS[] = [];
    trophies.forEach((trophy) => {
      if (trophy.isEarned) earned.push(trophy)
      else unEarned.push(trophy)
    })
    sortArrByTime(earned)
    return earned.concat(unEarned)
  }

  function sortArrByTime(arr: TrophyS[]) {
    arr.sort(function (a, b) {
      const dateA = new Date(a.earnedOn)
      const dateB = new Date(b.earnedOn)

      return dateA < dateB ? 0 : a ? -1 : 1
    })
  }

  const sorted = sortByEarned()
  return (
    <div className='grid grid-cols-4'>
      {sorted.map((trophy: TrophyS) => <TrophyCard trophy={trophy} />)}
    </div>
  )
}

export default GameTrophyList