import GameProgressBar from '@/components/ui/GameProgressBar'
import GameTrophyList from '@/components/ui/GameTrophyList'
import ProfileName from '@/components/ui/ProfileName'
import TrophyImage from '@/components/ui/TrophyImage'
import TrophyCard from '@/components/ui/Cards/TrophyCard'
import TrophyProgress from '@/components/ui/TrophyProgress'
import api from '@/helper/axios'
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

    const res = await api.get(`/trophies/user/${params.userID}/${decodeURI(params.gameID)}`)
    const trophyTitle: TrophyTitleS = await res.data
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
    return (
        <div className='flex justify-between items-cente h-36 sticky top-0 bg-background z-10'>
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