const slideVariants = {
    hiddenRight: {
        x: "100%",
        opacity: 0,
    },
    hiddenLeft: {
        x: "-100%",
        opacity: 0,
    },
    visible: {
        x: "0",
        opacity: 1,
        transition: {
            duration: 0.7,
            delay: 0.3
        }
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.3,
        }
    },
};

const slidersVariants = {
    initial: {
        backgroundColor: '#29442e'
    },
    hover: {
        scale: 1.2,
        backgroundColor: "#0f1a11",
    },
    tap: {
        scale: 0.9,
        backgroundColor: "#0f1a11",
    }
}; 
    
const dotsVariants = {
    initial: {
        y: 0,
        backgroundColor: '#29442e',
    },
    animate: {
        y: -5,
        scale: 1.3,
        transition: { type: "spring", stiffness: 1000, damping: "10" },
        backgroundColor: '#0f1a11'
    },
    hover: {
        scale: 1.3,
        transition: { duration: 0.2 },
    },
};

    export {slideVariants, slidersVariants, dotsVariants}