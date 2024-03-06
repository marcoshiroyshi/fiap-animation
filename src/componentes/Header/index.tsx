'use client'

import Logo from '../../../public/logo.svg'
import LogoMobile from '../../../public/logo-mobile.svg'
import Image from 'next/image'
import { ProgressBar, SHeader } from './Header.style'
import { useCallback, useEffect, useState } from 'react'

interface IHeader {
    target: React.RefObject<HTMLElement>
}


const Header = ({target}:IHeader) => {
    const [readingProgress, setReadingProgress] = useState(0);
    


    const scrollListener = useCallback(() => {
        if (!target.current) {
            return;
        }

        const element = target.current;
        const totalHeight = element.clientHeight - element.offsetTop - window.innerHeight;
        const windowScrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop; 
    
        if (windowScrollTop === 0 ) {
            return setReadingProgress(0);

        } 

        if (windowScrollTop > totalHeight) {
            return setReadingProgress(100)
        }



        setReadingProgress((windowScrollTop / totalHeight) *100)
    }, [])

    useEffect(() => {
        window.addEventListener('scroll',scrollListener)

        return () => window.removeEventListener('scroll',scrollListener)
    }, [scrollListener])

    let background = '';

    if (readingProgress === 0) {
        background = '#000'
    } else {
        background = '#202121'
    }
     

    return(
        <SHeader
        style={{
            backgroundColor:`${background}`
        }}
        >
            <div id="logo-desktop">
                <Image
                src={Logo} 
                width={144} 
                height={39}
                alt="Logo"
                />
            </div>
            <div id="logo-mobile">
                <Image
                src={LogoMobile} 
                width={200} 
                height={80}
                alt="Logo"
                />
            </div>
            <ProgressBar style={{
                width: `${readingProgress}%`
            }}/>
        </SHeader>
    );
}

export default Header