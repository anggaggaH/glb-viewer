/** @jsxImportSource @emotion/react */
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';

export default function NotFound() {
	const parentStyle = css`
		position: relative;
		width: 100svw;
		height: 100svh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		&:hover {
			color: #999999;
		}
		p {
			font: bold 24px Inter;
		}
	`;
	return (
		<Link to='/' css={parentStyle}>
			<p>404</p>
			<p>NOT FOUND</p>
		</Link>
	);
}
