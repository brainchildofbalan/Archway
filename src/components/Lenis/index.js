import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import React from 'react'

const Lenis = ({ children }) => {
    const lenis = useLenis(({ scroll }) => {
        
    })
    
    return (
        <ReactLenis root>
            {children}
        </ReactLenis>
    )
}

export default Lenis