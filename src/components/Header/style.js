

import styled from 'styled-components';


export const Container = styled.h2`
  width: 19%;
  height: 88px;
  margin-left: 48px;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  margin-top: 32px;
`

export const Logo = styled.img`
width: 80px;
height: 80px;

`

export const TextContent = styled.div`
  color: #eee;
  display: flex;
  flex-direction: column;
`

export const Text = styled.span`
  font-size: 32px;

`

export const Description = styled.p`
  color: #eee;
  opacity: 40%;
  font-size: 24px;
  font-weight: 500;
`

export const Author = styled.p`
  color: #eee;
  opacity: 40%;
  font-size: 12px;
  font-weight: 100;

  a {
    color: #fff;

    border-bottom: 1px solid #ffffff65;
  }
 ` 