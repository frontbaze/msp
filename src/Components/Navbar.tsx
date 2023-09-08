import React from 'react';
import classes from '../styles/Components/NavBar.module.scss'
import Layout from "./Layout";
import {useNavigate} from "react-router-dom";
import {useAppSelector} from "../hooks/redux";
import {motion} from 'framer-motion';
import useWindowSize from "../hooks/useWindowSize";

const Navbar = () => {
    const navigate = useNavigate()
    const {user} = useAppSelector(state => state.userReducer)
    const { width } = useWindowSize()

    return (
		<Layout>
			<div className={classes['NavBar']}>
				<motion.div
					className={classes['NavBar__logo']}
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					onClick={() => navigate('/')}
				>
					{width > 1000 ? `ООО "МОНТАЖСТРОЙ ПОДРЯД"` : 'ООО "МСП"'}
				</motion.div>
				{width > 1000 && (
					<div className={classes['NavBar__nav']}>
						<motion.div
							className={classes['NavBar__nav-item']}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							onClick={() => navigate('/')}
						>
							Главная
						</motion.div>
						<motion.div
							className={classes['NavBar__nav-item']}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							onClick={() => navigate('/price-list')}
						>
							Прайс-лист
						</motion.div>
						<motion.div
							className={classes['NavBar__nav-item']}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							onClick={() => navigate('/reviews')}
						>
							Отзывы
						</motion.div>
						<motion.div
							className={classes['NavBar__nav-item']}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							onClick={() => navigate('/contacts')}
						>
							Контакты
						</motion.div>
						{!user && (
							<motion.div
								className={classes['NavBar__nav-item']}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								onClick={() => navigate('/auth')}
							>
								Авторизация
							</motion.div>
						)}
						{user === 'Admin' && (
							<motion.div
								className={classes['NavBar__nav-item']}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								onClick={() => navigate('/admin')}
							>
								Админ-панель
							</motion.div>
						)}
					</div>
				)}

				<motion.div
					className={classes['NavBar__phone']}
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					onClick={() => window.open('tel:+79020500477', '_self')}
				>
					+7 (902) 050-04-77
				</motion.div>
			</div>
		</Layout>
	);
};

export default Navbar;
