import React from 'react';
import styled from 'styled-components';

const SwitchButton = styled.label`
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;

    input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    span {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: ${(props) => props.theme.colors.switcher};
        -webkit-transition: 0.4s;
        transition: 0.4s;
        border-radius: 34px;
    }

    span:before {
        position: absolute;
        content: '';
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: ${(props) => props.theme.colors.primary_background};
        -webkit-transition: 0.4s;
        transition: 0.4s;
        border-radius: 50%;
    }

    input:checked + span {
        background-color: ${(props) => props.theme.colors.switcher};
    }

    input:focus + span {
        box-shadow: 0 0 1px ${(props) => props.theme.colors.blue};
    }

    input:checked + span:before {
        transform: translateX(26px);
    }
`;

const Switcher = (props) => {
    const { themeToggler } = props;
    return (
        <SwitchButton>
            <input type="checkbox" onChange={() => themeToggler()} />
            <span></span>
        </SwitchButton>
    );
};
export default Switcher;
