import cn from 'classnames';
import { HeaderProps } from './Header.props';
import styles from './Header.module.scss';

export const Header = ({ children }: HeaderProps): JSX.Element => {
	return (
		<div>
			header
			{children}
		</div>
	);
};
