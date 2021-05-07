import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    `;

const Loader = styled.div`
    border: 2px solid ${(props) => props.color};
    border-top: 2px solid ${(props) => props.theme.colors.primary_background};
    border-radius: 50%;
    width: ${(props) => props.size}px;
    height: ${(props) => props.size}px;
    animation: ${spin} 0.7s linear infinite;
`;

const Spinner = (props) => {
    const { color, size, width } = props;
    return <Loader color={color} size={size} width={width} />;
};

export default Spinner;
