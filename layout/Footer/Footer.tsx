import cn from 'classnames';
import { FooterProps } from './Footer.props';
import styles from './Footer.module.scss';

export const Footer = ({ children }: FooterProps): JSX.Element => {
	return (
		<div>
			footer
			{children}
		</div>
	);
};
