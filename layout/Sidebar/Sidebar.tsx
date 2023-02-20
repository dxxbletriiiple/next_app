import cn from 'classnames';
import { SidebarProps } from './Sidebar.props';
import styles from './Sidebar.module.scss';

export const Sidebar = ({ className, children }: SidebarProps): JSX.Element => {
	return <div className={className}>{children}</div>;
};
