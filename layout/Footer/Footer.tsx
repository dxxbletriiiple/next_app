import cn from 'classnames';
import { FooterProps } from './Footer.props';
import styles from './Footer.module.scss';

export const Footer = ({ className, children }: FooterProps): JSX.Element => {
	return (
		<footer className={cn(className, styles.footer)}>
			<div>OwlTop © 2020 - {new Date().getFullYear()} Все права защищены</div>
			<a href='#!' target='_blank' rel='noopener noreferrer'>
				Пользовательское соглашение
			</a>
			<a href='#!' target='_blank' rel='noopener noreferrer'>
				Политика конфиденциальности
			</a>
		</footer>
	);
};
