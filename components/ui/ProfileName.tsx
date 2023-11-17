import Image from 'next/image'
import React from 'react'

function ProfileName({ userId }: { userId: string }) {
    return (
        <div className='bg-secondary flex gap-2 rounded-full px-4 py-1 items-center'>
            <Image src={"/playstation-logo.png"} alt="ps-icon" width={1000} height={1000} className='w-6 h-6' />
            <span className='text-black font-semibold text-sm'>{userId}</span>
        </div>
    )
}

export default ProfileName