import React from 'react';

const date = new Date();

function Footer() {
    return (
        <div className='footer'>
            &#9400; Copyright: {date.getDate()}.{date.getMonth()}.{date.getFullYear()}
        </div>
    )
}

export default Footer;