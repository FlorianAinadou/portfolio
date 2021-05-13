import React, {useEffect} from 'react';
import Aos from 'aos';
import {BoxWrapperTechno,BoxCardTechno,Techno,TechnoContainer} from './Techno';
import 'aos/dist/aos.css';
import vscode from '../../resources/images/techno/vscode.png';
import docker from '../../resources/images/techno/docker.jpg';
import htmlCss from '../../resources/images/techno/htmlCss.svg';
import java from '../../resources/images/techno/Java.jpg';
import react from '../../resources/images/techno/react.jpg';
import node from '../../resources/images/techno/nodejs.png';
import theia from '../../resources/images/techno/theia.svg';
import travis from '../../resources/images/techno/travis.png';
import kafka from '../../resources/images/techno/kafka.jpg';
import python from '../../resources/images/techno/python.jpg';
import JavaEE from '../../resources/images/techno/javaEE.png';


const Technos = () => {

    useEffect(() =>{
        Aos.init({duration: 2000})
    })
    return (
        <>
            <TechnoContainer id='technos'>
                <BoxWrapperTechno>
                    <BoxCardTechno data-aos='flip-left'>
                        <Techno src={JavaEE}/>
                    </BoxCardTechno>
                </BoxWrapperTechno>
                <BoxWrapperTechno>
                    <BoxCardTechno data-aos='flip-left'>
                        <Techno src={vscode}/>
                    </BoxCardTechno>
                </BoxWrapperTechno>
                <BoxWrapperTechno>
                    <BoxCardTechno data-aos='flip-left'>
                        <Techno src={docker}/>
                    </BoxCardTechno>
                </BoxWrapperTechno>
                <BoxWrapperTechno>
                    <BoxCardTechno data-aos='flip-left'>
                        <Techno src={htmlCss}/>
                    </BoxCardTechno>
                </BoxWrapperTechno>
                <BoxWrapperTechno>
                    <BoxCardTechno data-aos='flip-left'>
                        <Techno src={java}/>
                    </BoxCardTechno>
                </BoxWrapperTechno>
                <BoxWrapperTechno>
                    <BoxCardTechno data-aos='flip-left'>
                        <Techno src={react}/>
                    </BoxCardTechno>
                </BoxWrapperTechno>
                <BoxWrapperTechno>
                    <BoxCardTechno data-aos='flip-left'>
                        <Techno src={node}/>
                    </BoxCardTechno>
                </BoxWrapperTechno>
                <BoxWrapperTechno>
                    <BoxCardTechno data-aos='flip-left'>
                        <Techno src={theia}/>
                    </BoxCardTechno>
                </BoxWrapperTechno>
                <BoxWrapperTechno>
                    <BoxCardTechno data-aos='flip-left'>
                        <Techno src={travis}/>
                    </BoxCardTechno>
                </BoxWrapperTechno>
                <BoxWrapperTechno>
                    <BoxCardTechno data-aos='flip-left'>
                        <Techno src={kafka}/>
                    </BoxCardTechno>
                </BoxWrapperTechno>
                <BoxWrapperTechno>
                    <BoxCardTechno data-aos='flip-left'>
                        <Techno src={python}/>
                    </BoxCardTechno>
                </BoxWrapperTechno>
            </TechnoContainer>
        </>
    )
}

export default Technos
