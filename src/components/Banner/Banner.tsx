import React from 'react';
import styled from '@emotion/styled';
import {StyleVariables} from '../../helpers/styles/style-variables';

const variables: StyleVariables = StyleVariables.instance;

const StyledH1 = styled.h1`
  background-color: var(--banner);
  color: var(--on-banner);
  transition: ${(props: { variables: StyleVariables }) => props.variables.transitionDelay};
  padding: 0.5rem;
  border-radius: 5px;
  text-align: center;
  font-size: 1.5rem;
`;

function Banner({position}: { position: string }): React.JSX.Element {
    return (
        <section>
            <StyledH1 variables={variables}>{position}</StyledH1>
        </section>
    );
}

export default Banner;
