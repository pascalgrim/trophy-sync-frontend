"use client"
import React from 'react'
import { Button } from './ui/button'
import api from '@/helper/axiosHelper';


function TestApiButton() {
    async function handleClick() {
        try {
            const res = await api.get("/users/me")
            console.log(res)
        } catch (error: any) {
            console.log(error)
        }
    }
    return (
        <Button onClick={handleClick}>Log Res</Button>
    )
}

export default TestApiButton