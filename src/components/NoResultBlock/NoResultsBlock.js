import React from 'react';
import styled from 'styled-components';

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
);

export default NoResultsBlock;
