"use client"
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { useRouter } from 'next/navigation'
import api from '@/helper/axios'
import { Spinner } from "@nextui-org/react";
import { useToast } from "@/components/ui/use-toast"
import { cn } from '@/lib/utils'


function UserIDInputForm() {
    const router = useRouter()
    const [userID, setUserID] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const { toast } = useToast()
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)
        try {
            const res = await api.get("/user/" + userID)
            if (res) {
                router.push(userID)
            }

        } catch (error: any) {
            if (error.response.status === 400) {
                toast({
                    title: "User not found",
                    description: `${userID} could not be found. Try again.`,
                })
            } else {
                toast({
                    title: "Error",
                    description: `An unexpected error happened. Try again later.`,
                })

            }
        }
        setIsLoading(false)
    }
    return (
        <form onSubmit={(e) => handleSubmit(e)} className='flex items-center gap-2 flex-col'>
            <Input placeholder='PSN Name' value={userID} onChange={(e) => setUserID(e.target.value)} />
            <Button type="submit" variant={"secondary"} className={cn("w-full", isLoading && "animate-pulse")}>Find Trophies </Button>
        </form>
    )
}

export default UserIDInputForm