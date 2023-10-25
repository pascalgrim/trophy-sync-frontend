"use client"

import { TrophyTitle } from '@/types'
import Link from 'next/link'
import React from 'react'

type GameCardProps = {
    game: TrophyTitle
}

function GameCard({ game }: GameCardProps) {

    return (
        <div className='border border-gray-800 h-24 p-4 w-full flex justify-between items-center'>
            <div className='flex'>
                <div className='w-16 items-center flex '>
                    <img src={game.trophyTitleIconUrl} alt='' className=' w-full' />
                </div>
                <div className='ml-4 flex flex-col'>
                    <h3 className='text-lg font-bold '>
                        {game.trophyTitleName}
                    </h3>
                    {game.progress} %
                </div>
            </div>

            <Link href={`/game/${game.npCommunicationId}?platform=${game.trophyTitlePlatform}`} className='bg-white text-black py-2 px-4 rounded-lg text-sm font-bold'>Open</Link>
        </div>
    )
}

export default GameCard