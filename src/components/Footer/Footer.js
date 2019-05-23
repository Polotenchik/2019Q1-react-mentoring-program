import React from 'react';
import { Logo } from '../index';
import styled from 'styled-components';

const ContainerFooter = styled.footer`
    height: 60px;
    width: 1150px;
    background: #434343;
    flex: 0 0 auto;
    margin: 0 auto;
`;

const Footer = () => (
     <ContainerFooter>
         <Logo />
     </ContainerFooter>
);


// const Footer = () => (
//     <footer className={'footer'}>
//         <Logo />
//     </footer>
// );

export default Footer;
