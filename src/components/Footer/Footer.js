import React from 'react';
import styled from 'styled-components';
import { Logo } from '../index';

const ContainerFooter = styled.footer`
    height: 60px;
    width: 1150px;
    background: #434343;
    flex: 0 0 auto;
    margin: 0 auto;

    img {
        margin: 20px auto auto 50px; 
    }
`;

const Footer = () => (
     <ContainerFooter>
         <Logo />
     </ContainerFooter>
);

<<<<<<< HEAD

// const Footer = () => (
//     <footer className={'footer'}>
//         <Logo />
//     </footer>
// );

=======
>>>>>>> master
export default Footer;
