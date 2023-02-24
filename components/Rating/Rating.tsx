import { useState, useEffect, KeyboardEvent } from 'react';
import cn from 'classnames';
import { RatingProps } from './Rating.props';
import styles from './Rating.module.scss';
import StarIcon from './star.svg';

export const Rating = ({ isEditable = false, rating, setRating, ...props }: RatingProps): JSX.Element => {
	const [ratingArr, setRatingArr] = useState<JSX.Element[]>(new Array(5).fill(<></>));

	useEffect(() => {
		constructRating(rating);
	}, [rating]);

	const constructRating = (currentRating: number) => {
		const newArr = ratingArr.map((r: JSX.Element, i: number) => {
			return (
				<span
					className={cn(styles.star, {
						[styles.filled]: i < currentRating,
						[styles.editable]: isEditable,
					})}
					key={crypto.randomUUID()}
					onMouseEnter={() => changeDisplay(i + 1)}
					onMouseLeave={() => changeDisplay(rating)}
					onClick={() => setRating && setRating(i + 1)}
				>
					<StarIcon
						tabIndex={isEditable ? 0 : -1}
						onKeyDown={(e: KeyboardEvent<SVGElement>) => isEditable && handleSpace(i + 1, e)}
					/>
				</span>
			);
		});
		setRatingArr(newArr);
	};

	const changeDisplay = (n: number) => {
		if (!isEditable) return;
		constructRating(n);
	};

	const handleSpace = (i: number, e: KeyboardEvent<SVGElement>) => {
		if (e.code != 'Space' || !setRating) {
			return;
		}
		setRating(i);
	};

	return <div {...props}>{ratingArr}</div>;
};
