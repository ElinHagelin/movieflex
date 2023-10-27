import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Menu from './Menu.jsx';
import Hamburger from './Hamburger.jsx';
import { logoVariants, headingVariants } from '../styles/header-styles.js';
import { animate } from '../data/constants.js';

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<header>
			<motion.img
				className='logo'
				src='./images/logo.png'
				alt='logo'
				variants={logoVariants}
				animate={animate}
			/>

			<motion.h1
				className='heading'
				variants={headingVariants}
				animate={animate}
			>
				ovieFlex
			</motion.h1>

			<Hamburger menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

			<AnimatePresence>
				{menuOpen && (
					<Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
				)}
			</AnimatePresence>
		</header>
	);
};

export default Header;
