import React, {useEffect, useState} from 'react';
import Layout from "../../Components/Layout";
import Background from "../../Components/Background";
import classes from '../../styles/Auth/Auth.module.scss'
import {useForm} from "react-hook-form";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {login, registration} from "../../store/ActionCreators/UserActionCreators";
import UIButton from "../../UIKit/UIButton";
import {useNavigate} from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import {useDocumentTitle} from "../../hooks/useDocumentTitle";

const Auth = () => {
    const {register, formState: {errors}, reset, handleSubmit,} = useForm()
    const [action, setAction] = useState<'register' | 'login'>('login')
    const {user} = useAppSelector(state => state.userReducer)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const onSubmit = (data: any) => {
        action === 'login' ?
            dispatch(login(data.number, data.password))
            :
            dispatch(registration(data.number, data.password))
    }
    useEffect(() => {
        user && navigate('/')
    }, [user])
    useDocumentTitle('МСП - Авторизация')
    return (
        <Background>
            <Navbar/>
            <Layout>
                <div className={classes['Auth']}>
                    <div className={classes['Auth__container']}>
                        <div className={classes['Auth__container-title']}>{action === 'login' ? 'Авторизация' : 'Регистрация'}</div>
                        <form>
                            <div className={classes['Auth__container-form']}>
                                <div className={classes['Auth__container-form-item']}>
                                    <label>
                                        Номер телефона:
                                    </label>
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
                                                   }
                                               })}
                                        />
                                        <div className={'UIInput-placeholder'}>+ 7 (___) ______</div>
                                    </div>
                                    <div>
                                        {/*@ts-ignore*/}
                                        {errors?.number && <p className={classes['error']}>{errors?.number?.message}</p>}
                                    </div>
                                </div>
                                <div className={classes['Auth__container-form-item']}>
                                    <label>
                                        Пароль:
                                    </label>
                                    <div className={'UIInput'}>
                                        <input required
                                               {...register('password', {
                                                   required: 'Заполните поле',
                                                   minLength: {
                                                       value: 5,
                                                       message: 'Введите более 4 символов',
                                                   }
                                               })}
                                        />
                                        <div className={'UIInput-placeholder'}>xxxxx</div>
                                    </div>
                                    <div>
                                        {/*@ts-ignore*/}
                                        {errors?.password && <p className={classes['error']}>{errors?.password?.message}</p>}
                                    </div>
                                </div>

                                <div className={classes['Auth__container-form-button']}>
                                    <UIButton type={"outline"} onClick={handleSubmit(onSubmit)}>
                                        {action === 'login' ? 'Войти' : 'Регистрация'}
                                    </UIButton>
                                </div>
                            </div>
                        </form>
                        <div className={classes['Auth__container-action']}>
                            {action === 'login' ? <p>нет аккаунта ?</p> : <p> есть аккаунт ?</p>}
                            {action === 'login' ?
                                <UIButton type={'text-small'} onClick={() => setAction('register')}>Регистрация</UIButton>
                                :
                                <UIButton type={'text-small'} onClick={() => setAction('login')}>Вход</UIButton>
                            }
                        </div>
                    </div>
                </div>
            </Layout>
            <Footer/>
        </Background>
    );
};

export default Auth;