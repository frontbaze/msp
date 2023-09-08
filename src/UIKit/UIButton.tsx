import React from 'react';
import classes from '../styles/UIKit/UIButton.module.scss'
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";
import { motion } from 'framer-motion';

interface IUIButton{
    children: React.ReactNode
    onClick: (e: React.MouseEvent<HTMLDivElement>) => void
    type: 'outline' | 'solid' | 'text' | 'text-small' | 'back'
}

const UIButton = (props: IUIButton) => {
    return (
        <motion.div className={`${classes['UIButton']} ${classes[props.type]}`} onClick={e => {
            e.stopPropagation()
            props.onClick(e)
        }}
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
        >
            {props.type === 'back' && <IoIosArrowBack/>}
            <p>{props.children}</p>
            {props.type === 'text' && <IoIosArrowForward/>}
        </motion.div>
    );
};

export default UIButton;