import React, { useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/NavBar';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import './styles.css';

export default function Layout() {
    const location = useLocation();
    const nodeRef = useRef(null);

    return (
        <div>
            <Navbar />
            <SwitchTransition>
                <CSSTransition
                    nodeRef={nodeRef}
                    timeout={200}
                    classNames='fade'
                    key={location.pathname}
                >
                    <div ref={nodeRef} className='container w-full mx-auto'>
                        <Outlet />
                    </div>
                </CSSTransition>
            </SwitchTransition>
        </div>
    );
}
