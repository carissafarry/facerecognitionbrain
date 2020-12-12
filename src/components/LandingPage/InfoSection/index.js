import React from 'react';
import { Button } from '../../ButtonElements';
import svg1 from '../../../images/svg-1.svg';
import svg2 from '../../../images/svg-2.svg';
import svg3 from '../../../images/svg-3.svg';
import {
    Img, 
    ImgWrap,
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
} from './InfoElements';

const InfoSection = ({
    // lightBg, 
    // id, 
    // imgStart, 
    // topLine, 
    // lightText, 
    // headLine, 
    // darkText, 
    // description, 
    // buttonLabel, 
    // img, 
    alt,
    // primary,
    // dark,
    // dark2
}) => {
    return (
        <>
            <InfoContainer lightBg={false} id='register'>
                <InfoWrapper>
                    <InfoRow imgStart={true}>
                        <Column1>
                        <TextWrapper>
                            <TopLine>Gampang</TopLine>
                            <Heading lightText={true}>Daftarkan akun Anda</Heading>
                            <Subtitle darkText={false}>Daftarkan data diri Anda dan keluarga Anda sebagai calon penerima bantuan.</Subtitle>
                            <BtnWrap>
                                <Button to='home'
                                    smooth={true}
                                    duration={true}
                                    spy={true}
                                    exact="true"
                                    offset={-80}
                                    // primary={primary ? 1 : 0}
                                    primary={true}
                                    // dark={dark ? 1 : 0}
                                    dark={1}
                                    // dark2={dark ? 1 : 0} (darkText)
                                    dark2={0}
                                >
                                    Daftar
                                </Button>
                            </BtnWrap>
                        </TextWrapper>
                        </Column1>
                        <Column2
                            style={{
                                marginRight: '70px',
                                marginLeft: '-30px'
                            }}
                        >
                            <ImgWrap
                                style={{ 
                                    width: '95%',
                                    marginRight: '60px',
                                    marginLeft: '-30px'
                                }}
                            >
                                <Img src={svg1} alt={alt}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>

            <InfoContainer lightBg={true} id='procedure'>
                <InfoWrapper>
                    <InfoRow imgStart={false}>
                        <Column1>
                        <TextWrapper>
                            <TopLine>Mudah</TopLine>
                            <Heading lightText={false}>Verifikasi lebih lanjut</Heading>
                            <Subtitle darkText={true}>Proses verifikasi dilakukan dengan tenaga kesehatan yang ada agar kebutuhan kesehatan masyarakat dapat terpenuhi dengan baik.</Subtitle>
                            <BtnWrap>
                                <Button to='home'
                                    smooth={true}
                                    duration={true}
                                    spy={true}
                                    exact="true"
                                    offset={-80}
                                    primary={0}
                                    dark={0}
                                    dark2={0}
                                >
                                    Learn More
                                </Button>
                            </BtnWrap>
                        </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap
                                style={{ 
                                    width: '120%'
                                }}
                            >
                                <Img src={svg2} alt={alt}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>

            <InfoContainer lightBg={false} id='services'>
                <InfoWrapper>
                    <InfoRow imgStart={true}>
                        <Column1>
                        <TextWrapper>
                            <TopLine>Eifisien</TopLine>
                            <Heading lightText={true}>Tunggu bantuan Anda diterima</Heading>
                            <Subtitle darkText={false}>Bantuan akan dikirimkan pada periode tertentu melalui perangkat daerah masing-masing.</Subtitle>
                            <BtnWrap>
                                <Button to='home'
                                    smooth={true}
                                    duration={true}
                                    spy={true}
                                    exact="true"
                                    offset={-80}
                                    primary={1}
                                    dark={1}
                                    dark2={0}
                                >
                                    Start Now
                                </Button>
                            </BtnWrap>
                        </TextWrapper>
                        </Column1>
                        <Column2
                            style={{
                                marginRight: '70px',
                                marginLeft: '-30px'
                            }}
                        >
                            <ImgWrap>
                                <Img src={svg3} alt={alt}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
        
    )
}

export default InfoSection;
