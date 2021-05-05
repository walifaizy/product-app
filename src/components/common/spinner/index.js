import React from 'react';
import styled, { keyframes } from 'styled-components';
import { COLORS } from '../../../constants';

const spin = keyframes`
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    `;

const Loader = styled.div`
    border: ${(props) => props.width} solid ${(props) => props.color};
    border-top: ${(props) => props.width} solid ${COLORS.primary_background};
    border-radius: 50%;
    width: ${(props) => props.size};
    height: ${(props) => props.size};
    animation: ${spin} 0.7s linear infinite;
`;

const Spinner = (props) => {
    const { color, size, width } = props;
    return <Loader color={color} size={size} width={width} />;
};

export default Spinner;
