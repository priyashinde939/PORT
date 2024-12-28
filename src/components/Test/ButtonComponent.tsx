import React from 'react'
import  { RevealLinks } from './AnimatedButton'

const ButtonComponent = () => {
    return (
        <div className="relative bg-white h-screen ">
            <RevealLinks
                links={[
                    { href: "#", label: "Twitter and twitter" }
                ]}
                textColor="text-black"
                />
        </div>
    )
}

export default ButtonComponent

