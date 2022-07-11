import React, { useState, useRef } from 'react'
import { Carousel, Button, Container, Row, Col } from 'react-bootstrap'
// import Cards from "../cards";
// import "./slider.css";
import BusyRoutes from './BusyRoutes'

const BusyRoutsSlide = () => {
  const [index, setIndex] = useState(0)
  const ref = useRef(null)
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }

  const onPrevClick = () => {
    ref.current.prev()
  }
  const onNextClick = () => {
    ref.current.next()
  }

  return (
    <>

      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        indicators={false}
        controls={false}
        ref={ref}
      >
        <Carousel.Item>
          <BusyRoutes />
        </Carousel.Item>
        <Carousel.Item>
          <BusyRoutes />
        </Carousel.Item>
      </Carousel>
      <div className='button-container mt-4'>
        <Container>
          <div className='d-flex flex-row  justify-content-center'>
            <div>
              <button className='btn btn-sm btn-primary mx-1 rounded-circle' onClick={onPrevClick}>
                <i className='fa fa-angle-right fa-lg' />
              </button>
            </div>
            <div>
              <button className='btn btn-sm btn-primary mx-1 rounded-circle' onClick={onNextClick}>
                <i className='fa fa-angle-left fa-lg ' />
              </button>
            </div>

          </div>
        </Container>
      </div>
    </>
  )
}

export default BusyRoutsSlide
