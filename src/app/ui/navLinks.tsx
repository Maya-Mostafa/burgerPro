'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import styles from "../page.module.css";

export default function NavLinks() {

    const links = [
        {href: '/', text: 'Home'},
        {href: '/account', text: 'Account', children: [
            {href: '/account/info', text: 'Account Info'},
            {href: '/account/recent-orders', text: 'Recent Orders'},
            {href: '/account/submit-feedback', text: 'Submit Feedback'}
        ]},
        {href: '/menu', text: 'Menu'},
        {href: '/cart', text: 'Cart'}   
    ];

    const pathname = usePathname();

    return (
        <ul>
            {links.map((link) => (
                <li key={link.href} className={clsx({[styles['activeNavLink']]: pathname === link.href})}>  
                    <Link href={link.href}>{link.text}</Link>
                    {link.children && 
                        <ul>
                            {link.children.map((child) => (
                                <li key={child.href} className={clsx({[styles['activeNavLink']]: pathname === child.href})}>
                                    <Link href={child.href}>{child.text}</Link>
                                </li>
                            ))} 
                        </ul>
                    }
                </li>   
            ))}
        </ul>
    );
}
