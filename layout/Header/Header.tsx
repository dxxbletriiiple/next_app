import cn from 'classnames';
import { HeaderProps } from './Header.props';
import styles from './Header.module.scss';

export const Header = ({ className, children }: HeaderProps): JSX.Element => {
	return (
		<div className={className}>
			header
			{children}
		</div>
	);
};
