import TrophyImage from '@/components/TrophyImage'
import { capitalizeFirstLetter } from '@/helper/capitalizeFirstLetter'
import { formatTimestamp } from '@/helper/formatTimestamp'
import { cn } from '@/lib/utils'
import { Trophy, TrophyS } from '@/types'
import Image from 'next/image'
import React from 'react'


type TrophyCardProps = {
    trophy: TrophyS
}
function TrophyCard({ trophy }: TrophyCardProps) {
    const opacity = trophy.isEarned ? "opacity-100" : "opacity-30"
    const date = new Date(trophy.earnedOn)
    console.log(trophy.type)
    return (
        <div className={cn('border border-gray-800 flex items-center p-6 gap-4 justify-between h-36 rounded-lg', opacity)}>
            <div className='flex h-full'>
                <img src={trophy.trophyIconUrl} alt="" className='h-full' />
                {/* TODO: Rarity Dreieck, text color*/}
                <div className='pl-4 flex flex-col gap-1'>
                    <div className='text-xl font-bold'>{trophy.trophyName}</div>
                    <div className='flex gap-2'>
                        <TrophyImage type={trophy.type} size='small' />
                        <div>{capitalizeFirstLetter(trophy.type)}</div>
                    </div>
                    <div>
                        {trophy.rarity} | {trophy.earnedRate}% of players earned
                    </div>
                </div>
            </div>
            <div className='flex h-full text-sm font-light justify-left items-start gap-4 w-1/3'>
                <div>{formatTimestamp(trophy.earnedOn)}</div>
                <div className='w-[1px] h-full bg-gray-500' />
                <div className=''>{trophy.detail} </div>
            </div>




        </div>
    )
}

export default TrophyCard