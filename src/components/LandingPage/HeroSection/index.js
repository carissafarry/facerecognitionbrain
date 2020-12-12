import React, { useState } from 'react';
import Image from '../../../images/bg.svg';
import { Button } from '../../ButtonElements';
import {
    HeroContainer, 
    HeroBg, 
    ImageBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from './HeroElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };

    return (
        <HeroContainer>
            <HeroBg>
                <ImageBg 
                    src={Image} 
                    type='image/svg'
                    style={{ 
                        marginTop: '146px',
                        marginLeft: '-180px'
                    }}
                />
            </HeroBg>
            <HeroContent>
                <HeroH1>Safe for Care</HeroH1>
                <HeroP>
                    Dapatkan bantuan kesehatan dengan lebih mudah, aman, dan transparan.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to='about' onMouseEnter={onHover} 
                    onMouseLeave={onHover}
                    primary='true'
                    dark='true'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-30}
                    >
                        Mulai {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;
