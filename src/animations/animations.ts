export const itemAnimation = {
    hidden: {
        opacity: 0,
        scale: 0
    },
    visible: (v: number) => ({
        opacity: 1,
        scale: 1,
        transition: {delay: v * 0.1}
    }),
}
export const moduleItemAnimation = {
    default: {
        opacity: 0
    },
    scaled: (i: number) => ({
        opacity: 1,
        transition: {duration: 1, delay: i*0.2}
    }),
}
export const moduleImageMainAnimation = {
    hidden: {
        opacity: 0.5,
        scale: 0.8,
    },
    visible:{
        opacity: 1,
        scale: 1,
        transition: {duration: 1}
    },
}
export const moduleImageAddAnimation = {
    hidden: {
        opacity: 0,
        y: 100
    },
    visible:{
        opacity: 1,
        y: 0,
        transition: {duration: 1}
    },
}
export const slider = {
    enter: (direction: number) => {
        return {
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        };
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1
    },
    exit: (direction: number) => {
        return {
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        };
    }
};
export const navAnimation = {
    hidden: {y: 50, opacity: 0},
    visible: (v: number) => ({y: 0, opacity: 1, transition: {delay: v * 0.1}}),
}
export const titleAnimation = {
    hidden: {x: 300, opacity: 0},
    visible: {x: 0, opacity: 1, transition: {duration: 1}}
}

export const mobileMenuAnimation = {
    open: { opacity: 1},
    closed: { opacity: 0},
}