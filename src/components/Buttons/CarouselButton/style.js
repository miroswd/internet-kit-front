import styled, { css } from 'styled-components'


export const Button = styled.button`

  svg {
    font-size: 22px;
    color: #eee200;
    ${props => (props.isLeft ? css`margin-right: 28px ;` : css`margin-left: 10px ;`)}
  }
`