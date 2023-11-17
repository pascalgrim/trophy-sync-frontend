
import { capitalizeFirstLetter } from '@/helper/capitalizeFirstLetter'
import { formatTimestamp } from '@/helper/formatTimestamp'
import { cn } from '@/lib/utils'
import { Trophy, TrophyS } from '@/types'
import React from 'react'
import TrophyImage from '../TrophyImage'


type TrophyCardProps = {
    trophy: TrophyS
    visible?: boolean
}
function TrophyCard({ trophy, visible = true }: TrophyCardProps) {
    const opacity = trophy.isEarned ? "opacity-100" : "opacity-30"
    const formattedDate = formatTimestamp(trophy.earnedOn)
    if (!visible) {
        return <></>
    }
    return (
        <div className={cn('border border-gray-800 flex items-center p-6 gap-4 justify-between h-36 rounded-lg z-0', opacity)}>
            <div className='flex h-full'>
                <img src={trophy.trophyIconUrl} alt="" className='h-full' />
                <div className='pl-4 flex flex-col gap-1 text-gray-400'>
                    <div className='text-xl font-bold text-primary-foreground'>{trophy.trophyName}</div>
                    <div className='flex gap-2 ' >
                        <TrophyImage type={trophy.type} size='small' />
                        <div>{capitalizeFirstLetter(trophy.type)}</div>
                    </div>
                    <div className=''>
                        {trophy.rarity} | {trophy.earnedRate}% of players earned
                    </div>
                </div>
            </div>
            <div className='flex h-full text-sm font-light items-start gap-4 w-1/3 justify-end text-gray-400'>
                {formattedDate !== "Invalid Date" &&
                    <>
                        <div>{formattedDate}</div>
                        <div className='w-[1px] h-full bg-gray-500' />
                    </>
                }
                <div className='w-1/2'>{trophy.detail} </div>
            </div>




        </div>
    )
}

export default TrophyCard