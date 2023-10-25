import { TrophyTitle } from '@/types'
import React from 'react'
import GameCard from './ui/Cards/GameCard'

type UserTrophyListProps = {
    trophies: TrophyTitle[]
}
function UserTrophyList({ trophies }: UserTrophyListProps) {
    return (
        <div className='grid grid-cols-2'>{trophies.map((game) => <GameCard game={game} />)}</div>
    )
}

export default UserTrophyList