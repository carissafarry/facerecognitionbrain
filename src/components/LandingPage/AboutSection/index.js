import React from 'react';
import Icon1 from '../../../images/svg-1.svg';
import Icon2 from '../../../images/svg-2.svg';
import Icon3 from '../../../images/svg-3.svg';
import {
    AboutContainer,
    AboutH1,
    AboutWrapper,
    AboutCard,
    AboutIcon,
    AboutH2,
    AboutP
} from './AboutElements';

const AboutSection = () => {
    return (
        <AboutContainer id="about">
            <AboutH1>Tentang Kami</AboutH1>
            <AboutWrapper>
                <AboutCard>
                    <AboutIcon src={Icon1}/>
                    <AboutH2>Proses Cepat</AboutH2>
                    <AboutP>Tidak perlu mengantri. Cukup daftarkan diri secara online dan tunggu verifikasi.</AboutP>
                </AboutCard>
                <AboutCard>
                    <AboutIcon src={Icon2}/>
                    <AboutH2>Tenaga Professional</AboutH2>
                    <AboutP>Bantuan kesehatan diberikan atas rekomendasi langsung dari tenaga ahli terkait.</AboutP>
                </AboutCard>
                <AboutCard>
                    <AboutIcon src={Icon3}/>
                    <AboutH2>Aman, Resmi, dan Efisien</AboutH2>
                    <AboutP>Bantuan diantar ke tempat masing-masing sesuai kebutuhan.</AboutP>
                </AboutCard>
            </AboutWrapper>
        </AboutContainer>
    )
}

export default AboutSection;
