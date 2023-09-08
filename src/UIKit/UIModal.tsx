import React, {useEffect} from 'react';
import { FaTimes } from 'react-icons/fa';
import classes from '../styles/UIKit/UIModal.module.scss'
import {useForm} from "react-hook-form";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {closeCallModal, closeOfferModal} from "../store/ActionCreators/ModalActionCreators";
import UIButton from "./UIButton";
import useLockedBody from "../hooks/useLockedBody";
import {AnimatePresence, motion} from "framer-motion";
import {postOffer} from "../store/ActionCreators/UserActionCreators";

const UIModal = () => {
    const {register, formState: {errors}, reset, handleSubmit,} = useForm()
    const {offer,call,selectedService} = useAppSelector(state => state.modalReducer)
    const dispatch = useAppDispatch()
    const [locked, setLocked] = useLockedBody(false, 'root')

    const onSubmit = (data: any) => {
        if (call) {
            const message: any = {title: 'Обратный звонок', theme: selectedService, fio: data.fio, number: data.number}
            dispatch(postOffer(message))
                .catch(() => alert('Ошибка, попробуйте позже!'))
                .then(() => alert('Заявка отправлена !'))
            reset()
            dispatch(closeCallModal())
        }
        if (offer) {
            const message: any = {title: 'Заявка', theme: selectedService, fio: data.fio, number: data.number}
            dispatch(postOffer(message))
                .catch(() => alert('Ошибка, попробуйте позже!'))
                .then(() => alert('Заявка отправлена !'))
            reset()
            dispatch(closeOfferModal())
        }
        setLocked(false)
    }

    useEffect(() => {
        (call || offer) && setLocked(true)
    }, [call,offer])

    return (
        <AnimatePresence>
            <motion.div className={classes['UIModal']}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1}}
                        exit={{ opacity: 0}}
            >
                <motion.div className={classes['UIModal__content']}
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0,  scale: 0.5 }}
                >
                    <div className={classes['UIModal__content-exit']} onClick={() => {
                        call && dispatch(closeCallModal())
                        offer && dispatch(closeOfferModal())
                    }}>
                        <FaTimes/>
                    </div>
                    <div className={classes['UIModal__content-container']}>
                        <div className={classes['UIModal__content-title']}>
                            {call && 'Заказать обратный звонок'} {offer && 'Заявка' }
                        </div>
                        {selectedService &&
                            <div className={classes['UIModal__content-service']}>
                                Выбранная услуга:
                                <span> {selectedService}</span>
                            </div>
                        }
                        <div className={classes['UIModal__content-form-item']}>
                            <form>
                                <label>Номер телефона:</label>
                                <div className={'UIInput'}>
                                    <input required
                                           {...register('number', {
                                               required: 'Заполните поле',
                                               minLength: {
                                                   value: 11,
                                                   message: 'Введите более 11 символов',
                                               },
                                               pattern: {
                                                   value: /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g,
                                                   message: 'Недопустимые символы'
                                               },
                                               maxLength: {
                                                   value: 18,
                                                   message: 'Слишком большое значение'
                                               },
                                           })}
                                    />
                                    <div className={'UIInput-placeholder'}>+ 7 (___) ______</div>
                                </div>
                                <div className={classes['error']}>
                                    {/*@ts-ignore*/}
                                    {errors?.number && <p className={classes['error']}>{errors?.number?.message}</p>}
                                </div>
                                <label>ФИО:</label>
                                <div className={'UIInput'}>
                                    <input required
                                           {...register('fio', {
                                               required: 'Заполните поле',
                                               minLength: {
                                                   value: 5,
                                                   message: 'Введите более 11 символов',
                                               },
                                               maxLength: {
                                                   value: 50,
                                                   message: 'Слишком большое значение'
                                               }
                                           })}
                                    />
                                    <div className={'UIInput-placeholder'}>Попов Иван Иванович</div>
                                </div>
                                <div className={classes['error']}>
                                    {/*@ts-ignore*/}
                                    {errors?.fio && <p className={classes['error']}>{errors?.fio?.message}</p>}
                                </div>
                                <div className={classes['button']}>
                                    <UIButton type={'outline'} onClick={handleSubmit(onSubmit)}>
                                        Отправить
                                    </UIButton>
                                </div>
                            </form>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>

    );
};

export default UIModal;