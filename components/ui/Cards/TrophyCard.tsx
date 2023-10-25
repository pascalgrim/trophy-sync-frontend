import { cn } from '@/lib/utils'
import { Trophy, TrophyS } from '@/types'
import React from 'react'

type TrophyCardProps = {
    trophy: TrophyS
}
function TrophyCard({ trophy }: TrophyCardProps) {
    const opacity = trophy.isEarned ? "opacity-100" : "opacity-30"
    const date = new Date(trophy.earnedOn)
    return (
        <div className={cn('border border-gray-800 flex items-center p-4 gap-4 justify-between', opacity)}>
            <div className='flex '>
                <img src={trophy.trophyIconUrl} alt="" className='h-16' />
                <div className='pl-4'>
                    <div>{trophy.trophyName}</div>
                    <div className='text-gray-500'>{trophy.detail} </div>
                </div>
            </div>
            <div>{trophy.earnedRate}%</div>
            {/* <div>{date.getDate()}.{date.getMonth()}.{date.getFullYear()}</div> */}

        </div>
    )
}

export default TrophyCard