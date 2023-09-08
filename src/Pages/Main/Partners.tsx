import React from 'react';
import Layout from "../../Components/Layout";
import classes from '../../styles/Main/Partners.module.scss'
import p1 from '../../assets/Mask group.png'
import p2 from '../../assets/Mask group1.png'
import {AnimatePresence, motion} from 'framer-motion';
import {itemAnimation} from "../../animations/animations";


const Partners = () => {
    return (
        <Layout>
            <AnimatePresence>
                <div className={classes['Partners']}>
                    <motion.div className={classes['Partners-title']}
                                viewport={{once: true}}  initial={{x: -100, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 1}}
                    >
                        Нам доверяют:
                    </motion.div>
                    <div className={classes['Partners-items']}>
                        <motion.div viewport={{once: true}} initial={'hidden'} whileInView={'visible'} custom={1} variants={itemAnimation}>
                            <img src={p2} alt=""/>
                        </motion.div>
                        <motion.div viewport={{once: true}} initial={'hidden'} whileInView={'visible'} custom={2} variants={itemAnimation}>
                            <img src={p1} alt=""/>
                        </motion.div>
                        <motion.div viewport={{once: true}} initial={'hidden'} whileInView={'visible'} custom={3} variants={itemAnimation}>
                            <img src={p2} alt=""/>
                        </motion.div>
                        <motion.div viewport={{once: true}} initial={'hidden'} whileInView={'visible'} custom={4} variants={itemAnimation}>
                            <img src={p1} alt=""/>
                        </motion.div>
                        <motion.div viewport={{once: true}} initial={'hidden'} whileInView={'visible'} custom={5} variants={itemAnimation}>
                            <img src={p2} alt=""/>
                        </motion.div>
                        <motion.div viewport={{once: true}} initial={'hidden'} whileInView={'visible'} custom={6} variants={itemAnimation}>
                            <img src={p1} alt=""/>
                        </motion.div>
                        <motion.div viewport={{once: true}} initial={'hidden'} whileInView={'visible'} custom={7} variants={itemAnimation}>
                            <img src={p2} alt=""/>
                        </motion.div>
                        <motion.div viewport={{once: true}} initial={'hidden'} whileInView={'visible'} custom={8} variants={itemAnimation}>
                            <img src={p1} alt=""/>
                        </motion.div>
                        <motion.div viewport={{once: true}} initial={'hidden'} whileInView={'visible'} custom={9} variants={itemAnimation}>
                            <img src={p2} alt=""/>
                        </motion.div>
                        <motion.div viewport={{once: true}} initial={'hidden'} whileInView={'visible'} custom={10} variants={itemAnimation}>
                            <img src={p1} alt=""/>
                        </motion.div>
                    </div>
                </div>
            </AnimatePresence>
        </Layout>
    );
};

export default Partners;