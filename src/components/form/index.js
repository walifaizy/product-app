import React from 'react';
import styled from 'styled-components';
import { Input, Button, Dropdown, Spinner } from '../common';
import { device } from '../../theme/globalStyles';
import { CheckWrapper, RadioWrapper } from '../../theme/commonStyles';

const Ctr = styled.div`
    box-sizing: border-box;
    background-color: ${(props) => props.theme.colors.secondary_background};
    border-radius: 4px;
    width: 100%;
    margin-bottom: 20px;
    box-shadow: ${(props) => props.theme.boxShadow.componentShadow};
`;

const InputFormCtr = styled.div`
    display: flex;
    padding: 20px;
    flex: 1;
    flex-wrap: wrap;
    @media ${device.desktop} {
        flex-wrap: nowrap;
    }
    .spacebetween {
        @media ${device.desktop} {
            width: 20px;
        }
    }
`;

const InputCtr = styled.div`
    padding: 10px 0;
    width: 100%;
    .eachInput {
        width: 100%;
        .flexBtn {
            display: flex;
            justify-content: center;
            align-items: center;
            flex: 1;
        }
    }
    .spacer {
        height: 8px;
    }
    .label {
        flex: 1;
        font-weight: 500;
        line-height: 1.5;
        font-size: 0.9rem;
        color: ${(props) => props.theme.colors.primary_text};
    }
    .inputInfo {
        font-size: 0.8rem;
        line-height: 1.5;
        margin-top: 8px;
        color: ${(props) => props.theme.colors.primary_text};
    }
    &.desktopLocationCtr {
        display: none;
    }
    @media ${device.desktop} {
        &.mobileLocationCtr {
            display: none;
        }
        &.desktopLocationCtr {
            display: block;
        }
    }
`;

const InputFlexer = styled.div`
    width: 100%;
    @media ${device.desktop} {
        flex: 1;
        width: unset;
    }
`;

const BtnCtr = styled.div`
    padding: 0 20px 20px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;
const BtnText = styled.div`
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const RadioInput = styled.div`
    display: flex;
    margin-top: 15px;
`;

const Hspacer = styled.div`
    width: 30px;
`;
const IconWrapper = styled.div`
    margin: 0 0 15px 0;
    display: flex;
    cursor: pointer;
    color: ${(props) => props.theme.colors.blue};
    .gg-chevron-left {
        box-sizing: border-box;
        position: relative;
        display: block;
        transform: scale(var(--ggs, 1));
        width: 22px;
        height: 22px;
        border: 2px solid transparent;
        border-radius: 100px;
    }
    .gg-chevron-left::after {
        content: '';
        display: block;
        box-sizing: border-box;
        position: absolute;
        width: 10px;
        height: 10px;
        border-bottom: 2px solid;
        border-left: 2px solid;
        transform: rotate(45deg);
        left: 6px;
        top: 4px;
    }
`;

const Form = (props) => {
    const { values, onFormChange, options, postForm, onDropdownChange, isPosting, onBack } = props;
    const disabled =
        !values['product_name'] ||
        !values['weight'] ||
        !values['url'] ||
        !values['isEditable'] ||
        !values['price_range'] ||
        !values['price_tier'];
    return (
        <>
            <IconWrapper onClick={onBack}>
                {' '}
                <i class="gg-chevron-left"></i>
                go back
            </IconWrapper>

            <Ctr>
                <InputFormCtr>
                    <InputFlexer>
                        <InputCtr>
                            <div className="label">{'name'}</div>
                            <div className="spacer"></div>
                            <div className="eachInput">
                                <Input
                                    placeholder={'name'}
                                    name="product_name"
                                    onChange={onFormChange}
                                    value={values['product_name']}
                                />
                            </div>
                        </InputCtr>
                        <InputCtr>
                            <div className="label">{'weight'}</div>
                            <div className="spacer"></div>
                            <div className="eachInput">
                                <Input
                                    placeholder={'weight'}
                                    name="weight"
                                    onChange={onFormChange}
                                    value={values['weight']}
                                />
                            </div>
                        </InputCtr>
                        <InputCtr>
                            <div className="label">{'Product URL'}</div>
                            <div className="spacer"></div>
                            <div className="eachInput">
                                <Input
                                    placeholder={'Product URL'}
                                    name="url"
                                    onChange={onFormChange}
                                    value={values['url']}
                                />
                            </div>
                        </InputCtr>
                        <InputCtr>
                            <div className="label">{'Editable'}</div>
                            <div className="spacer"></div>
                            <div className="eachInput">
                                <CheckWrapper>
                                    <label className="container">
                                        <input
                                            onChange={onFormChange}
                                            type="checkbox"
                                            name="isEditable"
                                            key={'isEditable'}
                                        ></input>
                                        <span className="checkmark"></span>
                                    </label>
                                </CheckWrapper>
                            </div>
                        </InputCtr>
                    </InputFlexer>
                    <div className="spacebetween"></div>
                    <InputFlexer>
                        <InputCtr>
                            <div className="label">{'Availability'}</div>
                            <div className="spacer"></div>
                            <div className="eachInput">
                                <Input
                                    placeholder={'Availability'}
                                    name="availability"
                                    onChange={onFormChange}
                                    value={values['avilability']}
                                    type={'number'}
                                />
                            </div>
                        </InputCtr>
                        <InputCtr>
                            <div className="label">{'Price Range'}</div>
                            <div className="spacer"></div>
                            <div className="eachInput">
                                <Dropdown
                                    clearWidth
                                    value={values['price_range']}
                                    transparent
                                    color={(props) => props.theme.colors.blue}
                                    placeholder={'Select Price Range'}
                                    options={options}
                                    onDropdownChange={(val) => onDropdownChange('price_range', val)}
                                />
                            </div>
                        </InputCtr>
                        <InputCtr>
                            <div className="label">{'Price Range'}</div>
                            <div className="spacer"></div>
                            <div className="eachInput">
                                <RadioInput>
                                    {' '}
                                    <RadioWrapper>
                                        {' '}
                                        <label className="container">
                                            {' '}
                                            Budget
                                            <input
                                                value={'budget'}
                                                name="price_tier"
                                                type="radio"
                                                onChange={onFormChange}
                                            />
                                            <span className="checkmark"></span>
                                        </label>
                                    </RadioWrapper>
                                    <Hspacer />
                                    <RadioWrapper>
                                        {' '}
                                        <label className="container">
                                            {' '}
                                            Premium
                                            <input
                                                value={'premium'}
                                                name="price_tier"
                                                type="radio"
                                                onChange={onFormChange}
                                            />
                                            <span className="checkmark"></span>
                                        </label>
                                    </RadioWrapper>
                                </RadioInput>
                            </div>
                        </InputCtr>
                    </InputFlexer>
                </InputFormCtr>
                <BtnCtr>
                    <Button
                        disabled={disabled}
                        color={(props) => props.theme.colors.blue}
                        transparent
                        onClick={postForm}
                    >
                        <BtnText>{isPosting ? <Spinner size={10} /> : 'Submit'}</BtnText>
                    </Button>
                </BtnCtr>
            </Ctr>
        </>
    );
};

export default Form;
