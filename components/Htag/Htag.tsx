import { HtagProps } from './Htag.props';
import styles from './Htag.module.scss';

export const Htag = ({ tag, children }: HtagProps): JSX.Element => {
	console.log(styles);
	const tags = {
		h1: <h1 className={styles.h1}>{children}</h1>,
		h2: <h2 className={styles.h2}>{children}</h2>,
		h3: <h3 className={styles.h3}>{children}</h3>,
	};
	return tag ? tags[tag] : <></>;
};
