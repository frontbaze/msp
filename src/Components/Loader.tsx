import React, {useEffect, useState} from 'react';
import classes from '../styles/Components/Loader.module.scss'
import {AnimatePresence, motion, transform, useAnimation, useIsPresent} from 'framer-motion';
import useLockedBody from "../hooks/useLockedBody";

const Loader = () => {
    const [visible, setVisible] = useState<boolean>(true)
    const [locked, setLocked] = useLockedBody(true, 'root')
    const [index, setIndex] = useState<number>(0)
    const mapColors = transform([0, 5], ["#00D1FF", "#D16FFF"]);
    const mapSpringVelocity = transform([50, 50], [80, 20]);
    const controls = useAnimation();
    const data =
        [
            'Аренда спецтехники',
            'Металлоконструкции',
            'Быстровозводимые здания',
            'Гидроизоляция и покрытия',
            'Подрядные услуги',
            'Монтажстрой подряд'
        ];

    if (index < 5) {
        (() => setTimeout(() => {
            setIndex(index + 1)
        }, 1000))()
    }

    useEffect(() => {
        if (index === 5) {
            setTimeout(() => {
                setVisible(false)
                setLocked(false)
                // alert('dispatch -> end')
            }, 1000)
        }

        controls.start({
            scale: 1,
            transition: {
                type: "spring",
                velocity: mapSpringVelocity(index),
                stiffness: 500,
                damping: 70
            }
        });
    }, [index]);

    return (
        <AnimatePresence>
            {visible &&
                <motion.div className={classes['Loader']}
                            initial={{opacity: 1}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                >
                    <div className={classes['Loader__container']}>
                        <motion.p animate={controls}
                                  style={{ color: mapColors(index) }}
                        >
                            {data[index]}
                        </motion.p>
                    </div>
                </motion.div>
            }
        </AnimatePresence>

    );
};

export default Loader;