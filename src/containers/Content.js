import React from 'react';

export const Content = (props) => {
    return (
        <div className='results'>
            {/* <WelcomeMessage /> */}
            { props.content }
        </div>
    );
};