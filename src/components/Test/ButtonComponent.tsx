import React from 'react'
import  { RevealLinks } from './AnimatedButton'

const ButtonComponent = () => {
    return (
        <div className="relative bg-black h-screen ">
            <RevealLinks
                links={[
                    { href: "#", label: "BUTTONBUTTON" }
                ]}
                textColor="text-white"
                duration={1}
                />
        </div>
    )
}

export default ButtonComponent

