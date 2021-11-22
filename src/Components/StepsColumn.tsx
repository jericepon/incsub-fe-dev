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

    .signin-text-helper,
    .terms-text-helper {
        font-weight: 500;
        
        & > a {
            color: var(--primary);
            text-decoration: none;
        }
    }

    .signin-text-helper {
        & > a {
            margin-left: 8px;
        }
    }

    .terms-text-helper {
        font-size: 0.8125rem;
    }
`

export const StepsColumn = () => {
    return (
        <StyledStepsColumn>
            <div className="inner">
                <h1 className="h2">Let's set up your account</h1>
                <p className="signin-text-helper">
                    Already have an account?
                    <a href="/">Sign in</a>
                </p>

                <p className="terms-text-helper">
                    By clicking the "Next" button, you agree to creating a free account, and to <a href="/">Terms of Service</a> and <a href="/">Privacy Policy</a>.
                    <a href="/">Sign in</a>
                </p>

            </div>
        </StyledStepsColumn>
    )
}


