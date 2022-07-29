import React from 'react';
import '@styles/NotFound.scss';

const NotFound = () => {
    return(
        <div className='glitch-container'>
            <h1 className="glitch appear">
                <span aria-hidden="true">Error 404</span>
                Error 404
                <span aria-hidden="true">Error 404</span>
            </h1>
            
            <h1 className="glitch hide">
                <span aria-hidden="true">Not found</span>
                Not found
                <span aria-hidden="true">Not found</span>
            </h1>
            
        </div>
        
    
    )
}

export { NotFound };