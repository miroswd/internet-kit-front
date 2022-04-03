import React, { useCallback, useState } from "react"
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi'

import { Button } from './style'


/**
 * @param {Object} data
 * @param {('left'|'right')} data.direction
 * @param {String} data.page
 * @param {Number} data.numberOfSlides
 * @param {Number} data.rowsLength
 */
export const CarouselButton = ({ direction, page, numberOfSlides, rowsLength }) => {
  const [initialSlide, setInitialSlide] = useState(0)



  const leftControlHandle = useCallback((e) => {
    const carousel = document.getElementById(page)

    carousel.scrollLeft -= carousel.offsetWidth

    const dataRange = sessionStorage.getItem(`dataRange_${page}`)
    const value = parseInt(dataRange) && parseInt(dataRange) - numberOfSlides
    sessionStorage.setItem(`dataRange_${page}`, JSON.stringify(value))
    setInitialSlide(value)
  }, [page, numberOfSlides])

  const rightControlHandle = useCallback((e) => {
    const carousel = document.getElementById(page)

    carousel.scrollLeft += carousel.offsetWidth

    const dataRange = sessionStorage.getItem(`dataRange_${page}`)

    const value = initialSlide + numberOfSlides < rowsLength ? parseInt(dataRange) + numberOfSlides : initialSlide

    sessionStorage.setItem(`dataRange_${page}`, JSON.stringify(value))
    setInitialSlide(value)
  }, [page, numberOfSlides, initialSlide, rowsLength])

  return (
    <Button onClick={direction === 'left' ? leftControlHandle : rightControlHandle} isLeft={direction === 'left'} >
      {direction === 'left' ? (
        <BiLeftArrow />
      ) : (
        <BiRightArrow />
      )}
    </Button>
  )


}