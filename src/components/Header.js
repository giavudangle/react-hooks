import React from 'react';
import Link from './Link';

const Header = () => {
    return (
        <div className='ui secondary pointing menu'>
            <Link className='item' href='/' children='Accordion'/>
            <Link className='item' href='/translate' children='Translate'/>
            <Link className='item' href='/list' children='Search'/>
            <Link className='item' href='/dropdown' children='Dropdown'/>

        </div>
    )
}

export default Header;