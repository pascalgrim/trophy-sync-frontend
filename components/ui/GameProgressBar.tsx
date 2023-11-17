import { cn } from '@/lib/utils'
import React from 'react'

type GameProgressBarProps = {
    progress: number,
    small?: boolean

}
function GameProgressBar({ progress, small = false }: GameProgressBarProps) {
    const progressPercentage = Math.floor(progress / 100 * 100) + "%"
    const fontSize = small ? "text-lg" : "text-2xl"
    const itemAlignment = small ? "items-start" : "items-end"
    return (
        <div className={cn('flex flex-col gap-1 ', itemAlignment)}>
            <span className={cn('font-light', fontSize)}>{progress}%</span>
            <div className='bg-gray-400 w-16 h-[1px] rounded-full'>
                <div className='bg-white h-full' style={{ width: progressPercentage }}></div>
            </div>
        </div>
    )
}

export default GameProgressBar