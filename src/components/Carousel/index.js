import React, { useCallback, useEffect, useState } from "react"
import { PAGES } from "../../constants";
import apiConnection from "../../services/api";
import { slidesByWidthPage } from "../../utils";
import { PageSheets } from "../PageSheets";

import { CardVideo } from "../CardVideo";

import { Container, CarouselContent, Cards, RowCarousel, SpaceMissingButton } from './style'
import { CarouselButton } from "../Buttons/CarouselButton";



export const Carousel = () => {
  const [loading, setLoading] = useState(true)
  const [rowsSheets, setrowsSheets] = useState([])
  const [widthPage, setWidthPage] = useState(window.innerWidth)

  const [numberOfSlides, setNumberOfSlides] = useState(slidesByWidthPage(widthPage));

  useEffect(() => {
    setWidthPage(window.innerWidth);
    window.addEventListener('resize', () => {
      setWidthPage(window.innerWidth);
      setNumberOfSlides(slidesByWidthPage(window.innerWidth))
    });
  }, [])


  const [change,] = useState({})

  const [dataRange, setDataRange] = useState({})


  const [reRender, setReRender] = useState(0)

  const dataRangePageHandle = useCallback((page, rowLen, next = true) => {
    const getDataRange = sessionStorage.getItem(`dataRange_${page}`)
    const valueDataRange = parseInt(getDataRange)
    setDataRange(Object.assign(dataRange, { [`dataRange_${page}`]: valueDataRange }))
    // const rowLen = rowsSheets.length > 0 ? rowsSheets.filter(row => row.title === page).length[0].data.length : 0
    if (next && numberOfSlides + (rowLen - valueDataRange) <= rowLen) {
      // setChange({ [page]: Math.random() })
      setReRender(Math.random())
    } else {
      setReRender(Math.random())

      // setChange({ [page]: Math.random() })
    }
  }, [dataRange, numberOfSlides])



  useEffect(() => {
    const getDataRange = sessionStorage.getItem('dataRange')

    PAGES.forEach(page => {
      if (!getDataRange || parseInt(getDataRange) <= 0) {
        sessionStorage.setItem(`dataRange_${page}`, JSON.stringify(0))
      }
      dataRangePageHandle(page)

    }
    )

    // setDataRange({ dataRange: parseInt(getDataRange) })

    const loadData = async () => {
      setLoading(false)
      const pages = [];
      for (let page of PAGES) {
        const { data } = await apiConnection.get(`/rows/${page}`)
        pages.push({
          title: page,
          data,
        })

      }
      setrowsSheets(pages)
    }
    loadData()
    setLoading(false)
  }, [dataRangePageHandle])


  return (
    <>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <Container>
          {rowsSheets.map((rowSheet) => (
            <RowCarousel key={rowSheet.title}>
              <PageSheets title={rowSheet.title} />
              <CarouselContent >

                {
                  !!dataRange[`dataRange_${rowSheet.title}`] ? (<button onClick={() => dataRangePageHandle(rowSheet.title, rowSheet.data.length, false)} style={{ zIndex: 0, cursor: 'default' }}>
                    <CarouselButton
                      direction="left"
                      numberOfSlides={numberOfSlides}
                      page={rowSheet.title}
                      rowsLength={rowSheet.data.length}
                      key={rowSheet.title}
                    />
                  </button>)
                    : <SpaceMissingButton />
                }



                <Cards key={change[rowSheet.title] === 'MUSIC' && reRender} id={rowSheet.title}>
                  {rowSheet.data.slice(dataRange[`dataRange_${rowSheet.title}`], numberOfSlides + dataRange[`dataRange_${rowSheet.title}`]).map(row => (
                    <CardVideo row={row} />
                  ))
                  }
                </Cards>
                {rowSheet.data.length > numberOfSlides + dataRange[`dataRange_${rowSheet.title}`] && (
                  <button onClick={() => dataRangePageHandle(rowSheet.title, rowSheet.data.length)} >
                    <CarouselButton
                      direction="right"
                      numberOfSlides={numberOfSlides}
                      page={rowSheet.title}
                      rowsLength={rowSheet.data.length}
                      key={rowSheet.title}
                    />
                  </button>
                )}

              </CarouselContent>
            </RowCarousel>
          ))}
        </Container>
      )
      }
    </>
  )
}

