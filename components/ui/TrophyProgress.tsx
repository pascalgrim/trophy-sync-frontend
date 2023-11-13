import { DefinedEarnedTrophies } from '@/types'
import Image from 'next/image'
import React from 'react'
import TrophyImage from '../TrophyImage'

type TrophyProgressProps = {
    earnedTrophies: DefinedEarnedTrophies,
    disablePlatinum?: boolean
}
function TrophyProgress({ earnedTrophies, disablePlatinum = false }: TrophyProgressProps) {
    const iconSize = 40
    return (
        <div className='flex gap-8'>
            {!disablePlatinum && <div className='flex items-end w-12'>
                <TrophyImage type='platinum' />
                <div>{earnedTrophies.platinum}</div>
            </div>}

            <div className='flex items-end w-12'>
                <TrophyImage type='gold' />
                <div>{earnedTrophies.gold}</div>
            </div>
            <div className='flex items-end w-12'>
                <TrophyImage type='silver' />
                <div>{earnedTrophies.silver}</div>
            </div>
            <div className='flex items-end w-12'>
                <TrophyImage type='bronze' />
                <div>{earnedTrophies.bronze}</div>
            </div>
        </div>
    )
}

export default TrophyProgress