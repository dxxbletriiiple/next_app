import { FunctionComponent } from 'react';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { Sidebar } from './Sidebar/Sidebar';
import { LayoutProps } from './Layout.props';
import st from './Layout.module.scss';

export const Layout = ({ children }: LayoutProps): JSX.Element => {
	return (
		<div className={st.wrapper}>
			<Header className={st.header} />
			<Sidebar className={st.sidebar} />
			<div className={st.body}>
				<div>{children}</div>
			</div>
			<Footer className={st.footer} />
		</div>
	);
};

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
	return function withLayoutComponent(props: T): JSX.Element {
		return (
			<Layout>
				<Component {...props} />
			</Layout>
		);
	};
};
