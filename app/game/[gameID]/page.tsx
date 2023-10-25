import GameTrophyList from '@/components/GameTrophyList'
import TrophyCard from '@/components/ui/Cards/TrophyCard'
import { Trophy, TrophyS, TrophyTitle, TrophyTitleS } from '@/types'
import React from 'react'

async function DetailGamePage({ params }: {
    params: {
        gameID: string,
    }
}) {
    const url = `http://localhost:3001/trophies/user/pepega_passi/${decodeURI(params.gameID)}`
    const res = await fetch(url)
    const trophyTitle: TrophyTitleS = await res.json()


    return (
        <div>
            <div className='text-xl font-bold'>
                {trophyTitle.gameName}
            </div>
            <GameTrophyList trophies={trophyTitle.trophyList} />
        </div>
    )
}

export default DetailGamePage