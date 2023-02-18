import cn from 'classnames';
import { LayoutProps } from './Layout.props';
import styles from './P.module.scss';

export const Layout = ({ children }: LayoutProps): JSX.Element => {
	return <div>{children}</div>;
};
