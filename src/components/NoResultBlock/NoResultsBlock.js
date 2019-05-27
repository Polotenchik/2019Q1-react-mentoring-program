import React from 'react';
import styled from 'styled-components';

<<<<<<< HEAD
const NoResultsBlock = () => (
    <div className={'no-results'}>
        No films found
    </div>
=======
const Wrapper = styled.div`
    min-height: 110px;
    width: inherit;
    text-align: center;
    font-size: 40px;
    padding-top: 200px;    
`;


const NoResultsBlock = () => (
    <Wrapper>
        No films found
    </Wrapper>
>>>>>>> master
);

export default NoResultsBlock;
