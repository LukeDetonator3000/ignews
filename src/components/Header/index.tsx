import styles from './styles.module.scss';
import Image from 'next/image'
import img from '../../../public/images/ignews.svg';
import React from 'react';
import { SignInButton } from '../SignInButton';

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Image src={img} alt="ignews" />
                <nav>
                    <a className={styles.active}>Home</a>
                    <a>Posts</a>
                    <a>Home</a>
                </nav>
                <SignInButton />
            </div>
        </header>
    );
}