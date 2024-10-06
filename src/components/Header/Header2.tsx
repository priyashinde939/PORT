'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Header2.module.scss';
import Social from './Ham/Ham';

const menuVariants = {
  closed: { opacity: 0, x: '100%' },
  open: { opacity: 1, x: 0 },
};

const itemVariants = {
  closed: { opacity: 0, y: 20 },
  open: { opacity: 1, y: 0 },
};

const navItems = [
  { title: 'Home', href: '/' },
  { title: 'Work', href: '/work' },
  { title: 'About', href: '/about' },
  { title: 'Contact', href: '/contact' },
];

const Header2: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className={styles.hamburger} onClick={toggleMenu}>
        <span className={`${styles.burger} ${isOpen ? styles.burgerActive : ''}`}></span>
      </button>

      <motion.nav
        className={styles.fullScreenMenu}
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        variants={menuVariants}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        {/* <ul className={styles.navList}>
          {navItems.map((item, index) => (
            <motion.li
              key={index}
              className={styles.navItem}
              variants={itemVariants}
              transition={{ delay: index * 0.1 }}
              onClick={toggleMenu}  // Close menu on click
            >
              <a href={item.href}>{item.title}</a>
            </motion.li>
          ))}
        </ul> */}
        <Social />
      </motion.nav>
    </>
  );
};

export default Header2;
