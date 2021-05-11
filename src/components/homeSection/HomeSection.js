import styled from 'styled-components';
import {FaArrowAltCircleRight, FaLongArrowAltRight} from 'react-icons/fa';
import {
Link as LinkRouter
} from "react-router-dom";
import {
Link as LinkS
} from "react-scroll";

export const HomeContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content:center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;


`

export const HomeBackGround = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const VideoBackGround = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`

export const HomeContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;

   
`
;

export const HomeImg = styled.img`
    width: 20%;
    float: left;
    margin-right: 10px;
    border-radius: 100%;
    transition: .5s ease;
    backface-visibility: hidden;

    &:hover{
        width: 30%;
    }
`
;

export const HomeH1 = styled.h1`
    color: #fff;
    font-size: 48px;
    text-align: center;

    @media screen and (max-width: 768px){
        font-size: 48px;
    }

    @media screen and (max-width: 480px){
        font-size: 32px;
    }


`;

export const HomeP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px){
        font-size: 24px;
    }

    @media screen and (max-width: 480px){
        font-size: 16px;
    }
`;

export const HomeBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
;

 export const ArrowFoward = styled(FaArrowAltCircleRight)`
    margin-left: 8px;
    font-size: 20px;
    color: #40A497;
 `;

 export const Flash = styled(FaLongArrowAltRight)`
    margin-left: 8px;
    font-size: 20px;
 `