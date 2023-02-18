import { DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from 'react';

export interface PProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
	children: ReactNode;
	fz?: 's' | 'm' | 'l';
}
