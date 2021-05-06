import React from 'react';
import styled from 'styled-components';
import enhanceWithClickOutside from 'react-click-outside';
import { Button } from '../index';

const Container = styled.div`
    position: relative;
    border: 1px solid white;
    border-radius: 4px;
`;

const IconCtr = styled.div`
    padding: 5px 0 5px 0;
    margin: -6px 0;
    padding-left: 10px;
`;

const BtnCtr = styled.div`
    display: flex;
    align-items: center;
    margin: 0 -8px;
    height: 35px;
    justify-content: space-between;
    &.header {
        height: 18px;
        font-size: 1rem;
    }
    .clear {
        width: 8px;
    }
    .dropdownChevron {
        transform: rotate(90deg);
        &.openedChevron {
            transform: rotate(-90deg);
            transition: transform 150ms ease;
        }
    }
    .noTransform {
        transform: none;
    }
    .gg-chevron-down {
        box-sizing: border-box;
        position: relative;
        display: block;
        transform: scale(var(--ggs, 1));
        width: 22px;
        height: 22px;
        border: 2px solid transparent;
        border-radius: 100px;
    }
    .gg-chevron-down::after {
        content: '';
        display: block;
        box-sizing: border-box;
        position: absolute;
        width: 10px;
        height: 10px;
        border-bottom: 2px solid;
        border-right: 2px solid;
        transform: rotate(45deg);
        left: 4px;
        top: 2px;
    }
`;

const Content = styled.div`
    position: absolute;
    background-color: ${(props) => props.theme.colors.primary_background};
    height: 0;
    width: 0;
    top: calc(100% + 15px);
    right: 0;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: ${(props) => props.theme.boxShadow.componentShadow};
    z-index: 11;
    &.active {
        height: auto;
        width: auto;
        min-width: ${(props) => (props.clearWidth ? '100%' : '220px')};
        padding: 8px 0;
        max-height: ${(props) => props.maxHeight || '350px'};
        overflow-y: scroll;
        box-sizing: border-box;
        animation: fadeIn 0.3s ease-in both;
    }
`;

const List = styled.div`
    display: flex;
    align-items: center;
    padding: 8px;
    cursor: pointer;
    color: ${(props) => props.theme.colors.primary_text};
    .countryLabel {
        padding: 0 10px;
        font-size: 0.95rem;
    }
    &:hover,
    &.current {
        background-color: ${(props) => props.theme.colors.secondary_background};
        color: ${(props) => props.theme.colors.primary_text};
    }
`;

class Dropdown extends React.PureComponent {
    state = {
        showList: false,
    };
    toggleList = () => {
        this.setState((prevState) => ({
            showList: !prevState.showList,
        }));
    };
    selectOption = (value) => {
        this.props.onDropdownChange(value);
        this.handleClickOutside();
    };
    handleClickOutside = () => {
        this.setState({ showList: false });
    };

    render() {
        const {
            options,
            color,
            position = 'bottom',
            value,
            clearWidth,
            disabled,
            withArrow,
            placeholder,
            light,
            header,
            label,
            solid,
            transparent,
            onDropdownChange,
            maxHeight = '350px',
            buttonClassName,
        } = this.props;
        const { showList } = this.state;

        const list =
            options &&
            options.map((option, index) => {
                return (
                    <List
                        className={value === option.value ? 'current' : ''}
                        onClick={onDropdownChange ? () => this.selectOption(option.value) : () => {}}
                        color={color}
                        key={index}
                    >
                        <div className="countryLabel">{option.label}</div>
                    </List>
                );
            });

        const match = options && options.find((option) => option && option.value === value);

        const selectedLabel = match && match.label;

        return (
            <Container>
                <Button
                    color={color}
                    light={light}
                    transparent={transparent}
                    solid={(!light && !transparent && showList) || solid}
                    onClick={this.toggleList}
                    disabled={disabled}
                    className={buttonClassName}
                >
                    <BtnCtr className={header ? 'header' : ''}>
                        {label ? `${label}:` : ''}
                        {label ? <div className="clear" /> : ''}
                        {selectedLabel || placeholder}
                        <i className="gg-chevron-down"></i>
                    </BtnCtr>
                </Button>
                <Content
                    position={position}
                    clearWidth={clearWidth}
                    className={showList ? 'active' : ''}
                    maxHeight={maxHeight}
                >
                    {list}
                </Content>
            </Container>
        );
    }
}
export default enhanceWithClickOutside(Dropdown);
