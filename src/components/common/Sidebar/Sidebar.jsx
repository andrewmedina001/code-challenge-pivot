import './Sidebar.scss';
import { IoGridOutline, IoListOutline } from 'react-icons/io5';
import { HiOutlineStar } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='Sidebar'>
            <div className='Sidebar-title'>MODA</div>
            <ul className='Sidebar-nav-list'>
                <li className='Sidebar-nav-item'>
                    <NavLink
                        to={'/dashboard'}
                        className={(route) => {
                            if (route.isActive) return 'Sidebar-nav-item-link active'
                            else return 'Sidebar-nav-item-link'
                        }}
                    >
                        <IoGridOutline />
                        <span>Dashboard</span>
                    </NavLink>
                </li>
                <li className='Sidebar-nav-item'>
                    <NavLink
                        to={'/products'}
                        className={(route) => {
                            if (route.isActive) return 'Sidebar-nav-item-link active'
                            else return 'Sidebar-nav-item-link'
                        }}
                    >
                        <IoListOutline />
                        <span>Products</span>
                    </NavLink>
                </li>
                <li className='Sidebar-nav-item'>
                    <NavLink
                        to={'/'}
                        className={(route) => {
                            if (route.isActive) return 'Sidebar-nav-item-link active'
                            else return 'Sidebar-nav-item-link'
                        }}
                    >
                        <HiOutlineStar />
                        <span>Home</span>
                    </NavLink>
                </li>
            </ul>
        </div >
    )
}

export { Sidebar };