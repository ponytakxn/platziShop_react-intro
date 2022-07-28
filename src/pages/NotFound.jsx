import React from 'react';
import '@styles/NotFound.scss';

const NotFound = () => {
    return(
        <div className='glitch-container'>
            <h1 class="glitch">
                <span aria-hidden="true">404 Not found</span>
                404 Not found
                <span aria-hidden="true">404 Not found</span>
            </h1>
        </div>
    )
}

export { NotFound };