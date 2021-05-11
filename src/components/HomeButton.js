import styled from 'styled-components';
import {FaArrowAltCircleRight, FaLongArrowAltRight} from 'react-icons/fa';
import {
Link as LinkRouter
} from "react-router-dom";
import {
Link as LinkS
} from "react-scroll";

export const Button = styled(LinkRouter)`
    border-radius: 50px;
    background: ${({primary}) => (primary? '#01BF71' : '#010606')};
    white-space: nowrap;
    padding: ${({big}) => (big ?'14px 8px': '12px 30px')};
    color: ${({dark}) => (dark ?'#40A497': '#fff')};
    font-size : ${({fontBig}) => (fontBig ?'20px': '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary? '#fff' : '#40A497')}; 
        color: #40A497;
        
    }
`
;