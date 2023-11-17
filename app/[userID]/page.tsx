import UserTrophyList from '@/components/ui/UserTrophyList'

import { DefinedEarnedTrophies, TrophyTitle } from '@/types'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { calcEarnedTrophies } from '../../helper/calculateEarnedTrophies'
import ProfileName from '@/components/ui/ProfileName'
import api from '@/helper/axios'

async function getTrophies(username: string) {
    const res = await api.get("/trophies/user/" + username)
    const trophies: TrophyTitle[] = res.data
    return trophies
}

async function UserPage({
    params
}: { params: { userID: string } }) {
    const trophies = await getTrophies(params.userID)
    const numbers = calcEarnedTrophies(trophies)

    return (
        <div className='text-white px-12'>
            <Header numbers={numbers} userId={params.userID} />
            <UserTrophyList trophies={trophies} userID={params.userID} />
        </div>
    )
}

export default UserPage

type HeaderProps = {
    numbers: DefinedEarnedTrophies
    userId: string,
}
export function Header({ numbers, userId }: HeaderProps) {
    const iconSize = 54
    return (
        <div className='flex justify-between items-center h-36'>
            <div className='flex gap-4'>
                <h1 className='text-3xl font-light'>Trophies</h1>
                <ProfileName userId={userId} />
            </div>
            <div className='flex gap-4'>
                <div className='flex flex-col justify-end items-center font-light'>
                    <span>Total</span>
                    <span>{numbers.platinum + numbers.gold + numbers.silver + numbers.bronze}</span>
                </div>
                <div className='flex items-end'>
                    <Image src={"/trophies/platinum.png"} alt='' width={iconSize} height={iconSize} />
                    <div>{numbers.platinum}</div>
                </div>
                <div className='flex items-end'>
                    <Image src={"/trophies/gold.png"} alt='' width={iconSize} height={iconSize} />
                    <div>{numbers.gold}</div>
                </div>
                <div className='flex items-end'>
                    <Image src={"/trophies/silver.png"} alt='' width={iconSize} height={iconSize} />
                    <div>{numbers.silver}</div>
                </div>
                <div className='flex items-end'>
                    <Image src={"/trophies/bronze.png"} alt='' width={iconSize} height={iconSize} />
                    <div>{numbers.bronze}</div>
                </div>
            </div>

        </div>
    )
}