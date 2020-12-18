import React from 'react';
import * as IoIcons from 'react-icons/io5';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
    {
        title: 'Registration',
        path: '/Registration',
        icon: <IoIcons.IoShieldCheckmarkSharp />,
        cName: 'nav-text',

    },
    {
        title: 'Dashboard',
        path: '/',
        icon: <RiIcons.RiDashboardFill />,
        cName: 'nav-text',

    },
    {
        title: 'Logout',
        path: '/',
        icon: <RiIcons.RiLogoutBoxLine />,
        cName: 'nav-text',

    },
]