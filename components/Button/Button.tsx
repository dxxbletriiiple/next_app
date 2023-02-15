import { ButtonProps } from './Button.props';
import cn from 'classnames';
import styles from './Button.module.scss';

export const Button = ({ appearance, children, arrow = 'none', ...props }: ButtonProps): JSX.Element => {
	return (
		<button
			className={cn(styles.button, {
				[styles.primary]: appearance == 'primary',
				[styles.ghost]: appearance == 'ghost',
			})}
			{...props}
		>
			{children}
			{arrow != 'none' && (
				<span
					className={cn(styles.arrow, {
						[styles.down]: arrow == 'down',
					})}
				></span>
			)}
		</button>
	);
};
