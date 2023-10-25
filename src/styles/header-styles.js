

export const logoVariants = {
    animate: {
        rotate: [0, 90, 180, 270, 360],
        x: [-200, -150, -100, -50, 0],
    
        transition: {
            type: "spring", 
            duration: 1.5
        }
    }
}

export const headingVariants = {
    animate: {
        x: [-30, 0],
    
        transition: {type: "spring", delay: 0.35}
    }
}