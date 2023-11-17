import Image from 'next/image'
import React from 'react'

type TrophyImageProps = {
    type: "bronze" | "silver" | "gold" | "platinum"
    size?: "big" | "medium" | "small"
}
function TrophyImage({ type, size = "medium" }: TrophyImageProps) {
    const getSize = () => {
        switch (size) {
            case 'big': return 64
            case 'medium': return 40
            case 'small': return 16
            default: return 40
        }
    }
    return (
        <Image src={`/trophies/${type}.png`} alt="" width={getSize()} height={getSize()} />
    )
}

export default TrophyImage