import React from 'react';
import styled from '@emotion/styled';

/** STYLED */
const StyledTag = styled.span`
	height: 38px;
	position: relative;
	padding: 10px 38px 10px 15px;
	background-color: #009ad8;
	color: #fff;
	font-size: 1.6rem;
	margin: 10px 10px 0 0;
	cursor: pointer;
	border-radius: 19px;
`;

const StyledTagRemoveButton = styled.button`
	width: 38px;
	height: 38px;
	position: absolute;
	top: 0;
	right: 0;
	display: block;
	background: url('/assets/images/icons/icon-remove.svg') no-repeat scroll center center;
	background-size: auto 10px;
	border: none;
	outline: none;
	cursor: pointer;
`;
/** END STYLED */

function Tag({ onClick, onRemove, text }) {
	return (
		<StyledTag onClick={(e) => onClick(e, text)}>
			{text}
			<StyledTagRemoveButton onClick={e => onRemove(e, text)} />
		</StyledTag>
	)
}

export default Tag;