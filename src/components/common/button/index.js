import React from 'react';
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
    padding: 0;
    margin: 0;
    border: none;
    background-color: ${(props) => props.color}22;
    color: ${(props) => props.color};
    outline: none;
    padding: 9px 20px;
    border-radius: 4px;
    text-align: center;
    text-transform: capitalize;
    font-size: 0.9rem;
    font-weight: 500;
    line-height: 1;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transform: translate3d(0, 0, 0);
    transition: all ease-in 0.2s;
    user-select: none;
    &.solid {
        background-color: ${(props) => props.color};
        color: #fff;
    }
    &.light {
        background: none;
    }
    &.disabled {
        opacity: 0.4;
        cursor: not-allowed;
        pointer-events: none;
    }
    &:after {
        content: '';
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        pointer-events: none;
        background-repeat: no-repeat;
        background-position: 50%;
        transform: scale(10, 10);
        opacity: 0;
        transition: transform 0.5s, opacity 1s;
    }
    &:active:after {
        transform: scale(0, 0);
        opacity: 0.2;
        transition: 0s;
    }
`;

const Button = (props) => {
    const { color, children = 'Button', solid, transparent, light, className = '', disabled, noHover, ...rest } = props;

    return (
        <Container
            {...rest}
            className={`${solid ? 'solid' : ''} ${disabled ? 'disabled' : ''}   ${className} `}
            color={color}
        >
            {children}
        </Container>
    );
};

export default Button;
