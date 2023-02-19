import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { Sidebar } from './Sidebar/Sidebar';
import { LayoutProps } from './Layout.props';
import styles from './Layout.module.scss';

export const Layout = ({ children }: LayoutProps): JSX.Element => {
	return (
		<div>
			<Header />
			<div>
				<Sidebar />
				<div>{children}</div>
			</div>
			<Footer />
		</div>
	);
};
