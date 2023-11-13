"use client"
import React, { useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { useRouter } from 'next/navigation'


function UserIDInputForm() {
    const router = useRouter()
    const [userID, setUserID] = useState("")
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        //TODO: CHECK IF USER EXISTS
        router.push(userID)

    }
    return (
        <form onSubmit={(e) => handleSubmit(e)} className='flex items-center gap-2'>
            <Input placeholder='Username' value={userID} onChange={(e) => setUserID(e.target.value)} />
            <Button type="submit">Find Trophies</Button>
        </form>
    )
}

export default UserIDInputForm