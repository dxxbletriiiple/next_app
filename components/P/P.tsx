import cn from 'classnames';
import { PProps } from './P.props';
import styles from './P.module.scss';

export const P = ({ children, fz = 'm', className, ...props }: PProps): JSX.Element => {
	return (
		<p
			className={cn(styles.p, className, {
				[styles.s]: fz == 's',
				[styles.m]: fz == 'm',
				[styles.l]: fz == 'l',
			})}
			{...props}
		>
			{children}
		</p>
	);
};
