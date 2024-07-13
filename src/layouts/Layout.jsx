import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../components/NavBar';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import './styles.css'

export default function Layout() {

    const location = useLocation();

    return (
        <div>
            <Navbar />
            <SwitchTransition>
                <CSSTransition timeout={200} classNames='fade' key={location.pathname}>
                    <div className='container mx-auto'>
                        <Outlet />
                    </div>
                </CSSTransition>
            </SwitchTransition>

        </div>
    )
}
