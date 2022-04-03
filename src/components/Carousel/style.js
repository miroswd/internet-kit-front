import styled from 'styled-components'



export const Container = styled.div`
  margin-top: 20px;  
 ;
  `

export const Cards = styled.div`
  margin-top: 32px;
  /* margin-left: 80px; */
  width:  78vw;
  display: flex;
  align-items: flex-start;

  overflow-x: auto;
  scroll-behavior: smooth;

  height: 260px;

  &::-webkit-scrollbar{
    display: none;
  }
`

export const CarouselContent = styled.div`
  display: flex;
  align-items: center;

  button {
    margin-bottom: 16px;
  }
`

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  
`

export const RowCarousel = styled.div`
  margin-bottom: 40px;
`

export const SpaceMissingButton = styled.div`
  margin-left: 50px;
  
`

