export const menuVariants = {
	closed: {
		left: '-16em',
	},
	open: {
		left: 0,
		transition: {
			staggerChildren: 1,
		},
		boxShadow: '0.3em 0.3em 0.6em #070c08',
	},
};

export const linkVariants = {
	closed: {
		opacity: 0,
		x: -30,
	},
	open: {
		opacity: 1,
		x: 1,
	},
	hover: {
		scale: 1.1,
		x: 1,
		transition: {
			duration: 0.3,
		},
	},
};

export const linkAnimationDelay = 0.3;
