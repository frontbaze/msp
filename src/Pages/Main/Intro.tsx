import React from 'react';
import classes from '../../styles/Main/Intro.module.scss'
import {BsArrowDownRight} from "react-icons/bs";
import {useNavigate} from "react-router-dom";
import {AnimatePresence, motion} from 'framer-motion';
import {navAnimation, titleAnimation} from "../../animations/animations";
import sample from '../../assets/videos/0.mp4'
import useWindowSize from "../../hooks/useWindowSize";
import image from '../../assets/modules/m2m.png'

const Intro = () => {
    const navigate = useNavigate()
    const {width} = useWindowSize()
    return (
        <div className={classes['Intro']}>
            {width > 1000 ?
                <div className={classes['Intro-video']}>
                    <video className='videoTag' autoPlay loop muted>
                        <source src={sample} type='video/mp4' />
                    </video>
                </div>
                :
                <div className={classes['Intro-image']}
                     style={{backgroundImage: `url(${image})`}}
                />
            }
            <div className={classes['Intro__content']}>
                <motion.div className={classes['Intro__content-title']}
                            initial={'hidden'} animate={'visible'} variants={titleAnimation}
                            viewport={{once: true}}
                >
                    МОНТАЖСТРОЙ ПОДРЯД
                </motion.div>
                <div className={classes['Intro__content-nav']}>
                    <AnimatePresence>
                        <motion.div className={classes['Intro__content-nav-item']}
                                    initial={'hidden'} animate={'visible'} custom={6} variants={navAnimation}
                                    viewport={{once: true}}
                                    onClick={() => navigate('/vehicle')}
                        >
                            <p>Аренда спецтехники</p>
                            <p><BsArrowDownRight/></p>
                        </motion.div>
                    </AnimatePresence>
                    <AnimatePresence>
                        <motion.div className={classes['Intro__content-nav-item']}
                                    initial={'hidden'} animate={'visible'} custom={5} variants={navAnimation}
                                    viewport={{once: true}}
                                    onClick={() => navigate('/metal')}
                        >
                            <p>Металлоконструкции</p>
                            <p><BsArrowDownRight/></p>
                        </motion.div>
                    </AnimatePresence>
                    <AnimatePresence>
                        <motion.div  className={classes['Intro__content-nav-item']}
                                     initial={'hidden'} animate={'visible'} custom={4} variants={navAnimation} viewport={{once: true}}
                                     onClick={() => navigate('/buildings')}
                        >
                            <p>Быстровозводимые здания</p>
                            <p><BsArrowDownRight/></p>
                        </motion.div>
                    </AnimatePresence>
                    <AnimatePresence>
                        <motion.div className={classes['Intro__content-nav-item']}
                                    initial={'hidden'} animate={'visible'} custom={3} variants={navAnimation} viewport={{once: true}}
                                    onClick={() => navigate('/protection')}
                        >
                            <p>Гидроизоляция и защитные покрытия</p>
                            <p><BsArrowDownRight/></p>
                        </motion.div>
                    </AnimatePresence>
                    <AnimatePresence>
                        <motion.div className={classes['Intro__content-nav-item']}
                                    initial={'hidden'} animate={'visible'} custom={2} variants={navAnimation}
                                    viewport={{once: true}}
                                    onClick={() => navigate('/complex')}
                        >
                            <p>Подрядные услуги</p>
                            <p><BsArrowDownRight/></p>
                        </motion.div>
                    </AnimatePresence>
                    <AnimatePresence>
                        <motion.div className={classes['Intro__content-nav-item']}
                                    initial={'hidden'} animate={'visible'} custom={1} variants={navAnimation}
                                    viewport={{once: true}}
                                    onClick={() => navigate('/materials')}
                        >
                            <p>Товары</p>
                            <p><BsArrowDownRight/></p>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default Intro;