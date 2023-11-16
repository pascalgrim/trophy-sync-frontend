import GameProgressBar from '@/components/GameProgressBar'
import GameTrophyList from '@/components/GameTrophyList'
import ProfileName from '@/components/ProfileName'
import TrophyImage from '@/components/TrophyImage'
import TrophyCard from '@/components/ui/Cards/TrophyCard'
import TrophyProgress from '@/components/ui/TrophyProgress'
import { calculateNumberOfTrophies } from '@/helper/calculateNumberOfTrophies'
import { Trophy, TrophyS, TrophyTitle, TrophyTitleS } from '@/types'
import Image from 'next/image'
import React from 'react'

async function DetailGamePage({ params, searchParams }: {
    params: {
        userID: string,
        gameID: string,
    }, searchParams: {
        titleIconUrl: string
        titleProgress: string
    }
}) {
    const url = `http://localhost:3001/trophies/user/${params.userID}/${decodeURI(params.gameID)}`
    const res = await fetch(url)
    const trophyTitle: TrophyTitleS = await res.json()

    return (
        <div className=' text-white  px-12 '>
            <Header searchParams={searchParams} trophyTitle={trophyTitle} userId={params.userID} />
            <GameTrophyList trophies={trophyTitle.trophyList} />
        </div>
    )
}

export default DetailGamePage





type HeaderProps = {
    searchParams: any,
    trophyTitle: TrophyTitleS
    userId: string
}
const Header = ({ searchParams, trophyTitle, userId }: HeaderProps) => {
    return (<div className='flex justify-between items-cente h-36'>
        <div className='text-xl flex items-center gap-2'>
            <img src={searchParams.titleIconUrl} alt="" className='h-12' />
            {trophyTitle.gameName}
        </div>
        <div className='flex gap-8 items-center'>
            {trophyTitle.earnedCounts.platinum > 0 && <TrophyImage type='platinum' size='big' />}
            <div className='flex gap-4 '>
                <div className='flex flex-col'>
                    <span className='text-sm'>Progress</span>
                    <GameProgressBar small progress={parseFloat(searchParams.titleProgress)} />
                </div>
                <div className='flex flex-col '>
                    <span className='text-sm'>Earned</span>
                    {calculateNumberOfTrophies(trophyTitle.earnedCounts)} / {calculateNumberOfTrophies(trophyTitle.trophyTypeCounts)}
                </div>
            </div>
            <TrophyProgress earnedTrophies={trophyTitle.earnedCounts} disablePlatinum />
        </div>
    </div>)
}