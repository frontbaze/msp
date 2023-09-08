import React, {useEffect, useState} from 'react';
import classes from '../../styles/Reviews/Reviews.module.scss'
import Background from "../../Components/Background";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import TextareaAutosize from "react-textarea-autosize";
import Layout from "../../Components/Layout";
import UIButton from "../../UIKit/UIButton";
import {createReview, deleteReview, fetchReviews} from "../../store/ActionCreators/UserActionCreators";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {useDocumentTitle} from "../../hooks/useDocumentTitle";
import MobileNavBar from "../../Components/MobileNavBar";

const Reviews = () => {
    const {reviews, user} = useAppSelector(state => state.userReducer)
    const [review, setReview] = useState<string>('')
    const dispatch = useAppDispatch()

    const reviewHandler = () => {
        if (review){
            dispatch(createReview(review)).then(() => dispatch(fetchReviews()))
            setReview('')
        }
    }

    useEffect(() => {
        dispatch(fetchReviews())
    }, [])
    useDocumentTitle('МСП - Отзывы')
    return (
        <Background>
            <Navbar/>
            <MobileNavBar title={''}/>
            <Layout>
                <div className={classes['Reviews']}>
                    <div className={classes['Reviews__title']}>
                        Отзывы о нашей компании
                    </div>
                    <div className={classes['Reviews__setter']}>
                        <div className={classes['Reviews__setter-title']}>
                            Оставить отзыв
                        </div>
                        <div className={classes['Reviews__setter-form']}>
                            <div className={'UIInput'}>
                                <TextareaAutosize required value={review} onChange={e => setReview(e.currentTarget.value)}/>
                                <div className={'UIInput-placeholder'}>Комментарий</div>
                            </div>
                            <UIButton type={"outline"} onClick={() => reviewHandler()}>
                                Отправить
                            </UIButton>
                        </div>

                    </div>
                    <div className={classes['Reviews__items']}>
                        {reviews.map(i =>
                            <div className={classes['Reviews__items-item']} key={i.id}>
                                {i.message}
                                {user === 'Admin' &&
                                <UIButton type={'text'} onClick={() => {
                                    dispatch(deleteReview(i.id)).then(() => dispatch(fetchReviews()))
                                }}>Удалить</UIButton>
                                }
                            </div>
                        )}
                    </div>
                </div>
            </Layout>
            <Footer/>
        </Background>

    );
};

export default Reviews;