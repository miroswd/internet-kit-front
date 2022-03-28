import styled from 'styled-components';


export const Container = styled.div`
  max-width: 335px;
  &:not(:last-child) {
    margin-right: 44px;
  }

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  height: 260px;
`;

export const Video = styled.iframe`
  width: 335px;
  height: 190px;
    
  border: 2px solid #dddddd80;
  border-radius: 8px;
  margin-bottom: 16px;

`;

export const TitleVideo = styled.h3`
  color: #eee;
  font-size: 16px;
  text-transform: capitalize;
`;