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
    hover: {
      scale: 1.2,
      backgroundColor: "#aad3a2",
    },
    tap: {
        scale: 0.9,
        backgroundColor: "#aad3a2",
    }
}; 
    
const dotsVariants = {
    initial: {
        y: 0,
    },
    animate: {
        y: -5,
        scale: 1.3,
        transition: { type: "spring", stiffness: 1000, damping: "10" },
    },
    hover: {
        scale: 1.3,
        transition: { duration: 0.2 },
    },
};

    export {slideVariants, slidersVariants, dotsVariants}