import React, {useState} from 'react';
import classes from "../styles/Components/MobileNavBar.module.scss";
import navClasses from '../styles/Components/NavBar.module.scss'
import UIButton from "../UIKit/UIButton";
import {openCallModal} from "../store/ActionCreators/ModalActionCreators";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {AnimatePresence, motion} from "framer-motion";
import {useLocation, useNavigate} from "react-router-dom";
import {FaBars, FaTimes} from "react-icons/fa";

const MobileNavBar = ({title}: {title: string}) => {
    const dispatch = useAppDispatch()
    const {user} = useAppSelector(state => state.userReducer)
    const navigate = useNavigate()
    const location = useLocation()
    const [mobileNavActive, setMobileNavActive] = useState<boolean>(false)

    return (
		<>
			<div className={classes['MobileNavBar']}>
				{location.key && (
					<UIButton onClick={() => navigate(-1)} type={'back'}>
						Назад
					</UIButton>
				)}
				{mobileNavActive ? (
					<motion.div
						className={navClasses['NavBar__bars']}
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						onClick={() => setMobileNavActive(!mobileNavActive)}
					>
						<FaTimes />
					</motion.div>
				) : (
					<motion.div
						className={navClasses['NavBar__bars']}
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						onClick={() => setMobileNavActive(!mobileNavActive)}
					>
						<FaBars />
					</motion.div>
				)}
				<UIButton onClick={() => dispatch(openCallModal(title))} type={'text'}>
					Обратный звонок
				</UIButton>
			</div>
			<AnimatePresence>
				{mobileNavActive && (
					<motion.div
						className={classes['MobileNav']}
						initial={{ opacity: 0, y: -500 }}
						animate={{ opacity: 1, y: 0, transition: { duration: 0.7 } }}
						exit={{ opacity: 0, y: -500, transition: { duration: 0.7 } }}
					>
						<div className={classes['MobileNav__nav']}>
							<div>ООО "МОНТАЖСТРОЙ ПОДРЯД"</div>
							<motion.div
								className={classes['MobileNav__nav-item']}
								whileHover={{ scale: 0.99 }}
								whileTap={{ scale: 0.97 }}
								onClick={() => navigate('/')}
							>
								Главная
							</motion.div>
							<motion.div
								className={classes['MobileNav__nav-item']}
								whileHover={{ scale: 0.99 }}
								whileTap={{ scale: 0.97 }}
								onClick={() => navigate('/vehicle')}
							>
								Аренда спецтехники
							</motion.div>
							<motion.div
								className={classes['MobileNav__nav-item']}
								whileHover={{ scale: 0.99 }}
								whileTap={{ scale: 0.97 }}
								onClick={() => navigate('/metal')}
							>
								Металлоконструкции
							</motion.div>
							<motion.div
								className={classes['MobileNav__nav-item']}
								whileHover={{ scale: 0.99 }}
								whileTap={{ scale: 0.97 }}
								onClick={() => navigate('/buildings')}
							>
								Быстровозводимые здания
							</motion.div>
							<motion.div
								className={classes['MobileNav__nav-item']}
								whileHover={{ scale: 0.99 }}
								whileTap={{ scale: 0.97 }}
								onClick={() => navigate('/protection')}
							>
								Гидроизоляция и защитные покрытия
							</motion.div>
							<motion.div
								className={classes['MobileNav__nav-item']}
								whileHover={{ scale: 0.99 }}
								whileTap={{ scale: 0.97 }}
								onClick={() => navigate('/complex')}
							>
								Подрядные услуги
							</motion.div>
							<motion.div
								className={classes['MobileNav__nav-item']}
								whileHover={{ scale: 0.99 }}
								whileTap={{ scale: 0.97 }}
								onClick={() => navigate('/materials')}
							>
								Товары
							</motion.div>
							<motion.div
								className={classes['MobileNav__nav-item']}
								whileHover={{ scale: 0.99 }}
								whileTap={{ scale: 0.97 }}
								onClick={() => navigate('/price-list')}
							>
								Прайс-лист
							</motion.div>
							<motion.div
								className={classes['MobileNav__nav-item']}
								whileHover={{ scale: 0.99 }}
								whileTap={{ scale: 0.97 }}
								onClick={() => navigate('/reviews')}
							>
								Отзывы
							</motion.div>
							<motion.div
								className={classes['MobileNav__nav-item']}
								whileHover={{ scale: 0.99 }}
								whileTap={{ scale: 0.97 }}
								onClick={() => navigate('/contacts')}
							>
								Контакты
							</motion.div>
							{!user && (
								<motion.div
									className={classes['MobileNav__nav-item']}
									whileHover={{ scale: 0.99 }}
									whileTap={{ scale: 0.97 }}
									onClick={() => navigate('/auth')}
								>
									Авторизация
								</motion.div>
							)}
							{user === 'Admin' && (
								<motion.div
									className={classes['MobileNav__nav-item']}
									whileHover={{ scale: 0.99 }}
									whileTap={{ scale: 0.97 }}
									onClick={() => navigate('/admin')}
								>
									Админ-панель
								</motion.div>
							)}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default MobileNavBar;