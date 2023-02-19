import cn from 'classnames';
import { SidebarProps } from './Sidebar.props';
import styles from './Sidebar.module.scss';

export const Sidebar = ({ children }: SidebarProps): JSX.Element => {
	return <div>{children}</div>;
};
