import UserTrophyList from '@/components/UserTrophyList'

import { DefinedEarnedTrophies, TrophyTitle } from '@/types'
import axios from 'axios'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { calcNumbers } from './calculateNumbersOfTrophies'

async function getTrophies(username: string) {
    const res = await axios.get("http://localhost:3001/trophies/user/" + username)
    const trophies: TrophyTitle[] = res.data
    return trophies
}

async function UserPage({
    params
}: { params: { userID: string } }) {
    const trophies = await getTrophies(params.userID)
    const numbers = calcNumbers(trophies)

    return (
        <div className='bg-black text-white px-12'>
            <Header numbers={numbers} />

            <UserTrophyList trophies={trophies} userID={params.userID} />
        </div>
    )
}

export default UserPage

type HeaderProps = {
    numbers: DefinedEarnedTrophies
}
export function Header({ numbers }: HeaderProps) {
    const iconSize = 54
    return (
        <div className='flex justify-between items-center h-36'>
            <h1 className='text-3xl font-light'>Trophies</h1>
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