import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position: relative;
    display: flex;
    align-items: stretch;
    input {
        padding: 0px 8px;
        border: 1px solid ${(props) => props.theme.colors.inputBorder};
        border-radius: 4px;
        width: 100%;
        font-size: 1rem;
        height: 56px;
        box-sizing: border-box;
        background: ${(props) => props.theme.colors.secondary_background};
        color: ${(props) => props.theme.colors.primary_text};
    }
`;

const Wrapper = styled.div``;

class Input extends React.PureComponent {
    state = {
        inFocus: false,
    };

    onChange = (e) => {
        this.props.onChange(e);
    };
    render() {
        const { error, value, type = 'text', placeholder, ...rest } = this.props;

        const { inFocus } = this.state;

        return (
            <Wrapper>
                <Container className={`${error ? 'inputError' : ''}`}>
                    <input type={type} {...rest} value={value} onChange={this.onChange} placeholder={placeholder} />
                </Container>
            </Wrapper>
        );
    }
}
export default Input;
