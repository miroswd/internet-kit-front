import React, { useCallback, useState } from 'react';

import Carousel, { slidesToShowPlugin, arrowsPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { CardVideo } from '../CardVideo';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi'

import '@brainhubeu/react-carousel/lib/style.css';


export const CarouselVideos = ({ rowsSheets, numberOfSlides, page }) => {
  const [initialSlide, setInitialSlide] = useState(0)

  const styleLeft = {
    width: '60px',
    color: '#eee200',
    marginRight: '8px'
  }

  const styleRight = Object.assign(delete styleLeft.marginRight, styleLeft, {
    marginLeft: '8px'
  })

  const leftControlHandle = useCallback(() => {
    const dataRange = sessionStorage.getItem(`dataRange_${page}`)
    const value = parseInt(dataRange) && parseInt(dataRange) - numberOfSlides
    sessionStorage.setItem(`dataRange_${page}`, JSON.stringify(value))
    setInitialSlide(value)
  }, [page, numberOfSlides])

  const rightControlHandle = useCallback(() => {
    const dataRange = sessionStorage.getItem(`dataRange_${page}`)
    const value = initialSlide + numberOfSlides < rowsSheets.length ? parseInt(dataRange) + numberOfSlides : initialSlide
    sessionStorage.setItem(`dataRange_${page}`, JSON.stringify(value))
    setInitialSlide(value)
  }, [page, numberOfSlides, initialSlide, rowsSheets.length])

  return (
    <Carousel
      // draggable={false}
      itemWidth={1600}
      plugins={[
        {
          resolve: slidesToShowPlugin,
          options: {
            numberOfSlides: numberOfSlides
          }
        },
        {
          resolve: arrowsPlugin,
          options: {
            arrowLeft: <button onClick={leftControlHandle}><BiLeftArrow style={styleLeft} /></button>,
            arrowLeftDisabled: <button><BiLeftArrow style={styleLeft} color={'#eee20020'} /></button>,
            arrowRight: <button onClick={rightControlHandle}><BiRightArrow style={styleRight} /></button>,
            arrowRightDisabled: <button><BiRightArrow style={styleRight} color={'#eee20020'} /></button>,
            addArrowClickHandler: true,
          }
        },]}
    >
      {console.log(rowsSheets.slice(initialSlide, initialSlide + numberOfSlides))}
      {
        rowsSheets.length > 0 && rowsSheets.slice(initialSlide, initialSlide + numberOfSlides).map(row =>
          <CardVideo key={row.id} row={row} />
        )
      }

    </Carousel>
  )
}