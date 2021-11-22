import React from 'react'
import styled from 'styled-components'

const StyledStepsColumn = styled.div`
    background-color: var(--white);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    .inner {
        max-width: 535px;
        margin: auto;
    }
`

export const StepsColumn = () => {
    return (
        <StyledStepsColumn>
            <div className="inner">
                <h1 className="h2">Let's set up your account</h1>
            </div>
        </StyledStepsColumn>
    )
}


