import { TrophyTitle } from '@/types'
import React from 'react'
import GameCard from './ui/Cards/GameCard'

type UserTrophyListProps = {
    userID: string,
    trophies: TrophyTitle[],
}
function UserTrophyList({ trophies, userID }: UserTrophyListProps) {
    return (
        <div className='flex flex-col px-12'>{trophies.map((game) => <GameCard game={game} key={game.trophyTitleName} userID={userID} />)}</div>
    )
}

export default UserTrophyList