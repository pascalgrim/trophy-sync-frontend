"use client"

import GameProgressBar from '@/components/GameProgressBar'
import { TrophyTitle } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import TrophyProgress from '../TrophyProgress'

type GameCardProps = {
    game: TrophyTitle,
    userID: string
}

function GameCard({ game, userID }: GameCardProps) {
    return (
        <Link href={`/${userID}/${game.npCommunicationId}?platform=${game.trophyTitlePlatform}&titleIconUrl=${game.trophyTitleIconUrl}&titleProgress=${game.progress}`} className='border-b-[1px] border-gray-800 hover:border-[1px] h-32 px-4 w-full flex justify-between items-center'>
            <div className='flex'>
                <div className='w-16 items-center flex '>
                    <Image src={game.trophyTitleIconUrl} alt='' width={90} height={90} />
                </div>
                <div className='ml-4 flex flex-col justify-center gap-2'>
                    <h3 className='text-lg  '>
                        {game.trophyTitleName}
                    </h3>
                    <div className='border border-white w-fit px-2 py-1 text-xs'>
                        {game.trophyTitlePlatform}
                    </div>
                </div>
            </div>
            {/* RIGHT */}
            <div>
                <div className='flex gap-2 items-center'>
                    <GameProgressBar progress={game.progress} />
                    <TrophyProgress earnedTrophies={game.earnedTrophies} />
                </div>
            </div>


        </Link>
    )
}

export default GameCard