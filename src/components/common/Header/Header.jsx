import './Header.scss'
import { BiSearch } from 'react-icons/bi'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='Header'>
            <div className="u_wrapper">
                <nav className='Header-container'>
                    <div className="Header-icon">
                        MODA
                    </div>
                    <ul className='Header-nav-list'>
                        <li className='Header-nav-item'>Home</li>
                        <li className='Header-nav-item'>Lorem</li>
                        <li className='Header-nav-item'>Ipsum</li>
                        <NavLink to={"/dashboard"}>
                            <li className='Header-nav-item'>Dashboard</li>
                        </NavLink>
                    </ul>
                    <div className='Header-search-product'>
                        <div className='Header-search-container'>
                            <BiSearch className='Header-search-icon' />
                            <input className='Header-search-input' type="text" placeholder="Search" />
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export { Header };