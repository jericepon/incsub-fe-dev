import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button<{ variant: string }>`
    border: 0;
    border-radius: 4px;
    background-color: #EDEDED;
    color: #AAAAAA;
    padding: calc(4.5px + 1.133vw) 15px;
    width: ${(props) => props.variant === 'block' ? '100%' : 'auto'};
    cursor: pointer;
    
    &:not(:disabled) {
        background-color: var(--primary);
        color: var(--white);
    }
    
    &:active {
        opacity: 0.7;
    }

    &:hover {
        opacity: 0.9;
    }

    @media (min-width: 1024px) {
        padding: 17px 15px;
    }
`

const Button = ({ text, variant, disabled }: { text: string, variant: string, disabled: boolean }) => {
    return (
        <StyledButton disabled={disabled} variant={variant}>
            {text}
        </StyledButton>
    )
}

export default Button
