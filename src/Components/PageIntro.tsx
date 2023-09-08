import React from 'react';
import classes from '../styles/Components/PageIntro.module.scss'
import Layout from "./Layout";
import useWindowSize from "../hooks/useWindowSize";
import MobileNavBar from "./MobileNavBar";

interface IDataset {
    icon: React.ReactNode
    title: string,
    text: string,
}

const PageIntro = ({title, video, dataset, image}: {title: string, image: string, video: string, dataset: IDataset[]} ) => {
    const {width} = useWindowSize()

    return (
        <>
            <MobileNavBar title={title}/>
            <div className={classes['PageIntro']}>
                {width > 1000 ?
                    <video className='videoTag' autoPlay loop muted>
                        <source src={video} type='video/mp4' />
                    </video>
                    :
                    <div className={classes['PageIntro-image']} style={{backgroundImage: `url(${image})`}}/>
                }

                <Layout>
                    <p>{title}</p>
                </Layout>
            </div>
            <Layout>
                <div className={classes['PageIntro__advantages']}>
                    {dataset.map((i, index) =>
                        <div className={classes['PageIntro__advantages-item']} key={index}>
                            <div className={classes['PageIntro__advantages-item-icon']}>{i.icon}</div>
                            <div className={classes['PageIntro__advantages-item-title']}>{i.title}</div>
                            <div className={classes['PageIntro__advantages-item-text']}>{i.text}</div>
                        </div>
                    )}
                </div>
            </Layout>
        </>
    );
};

export default PageIntro;