import styled, { css } from 'styled-components'


export const Button = styled.button`
  width: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 100px;
    color: #eee200;
    
    ${props => (
    props.isLeft ?
      css`
        margin-right: 10px ;
        ` : css`
        margin-left: 10px ;
        `
  )}
  }
`