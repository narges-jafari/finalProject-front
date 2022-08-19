import AirplaneQuestion from '../../Question/AirplaneQuestion'
import HotelQuestion from '../../Question/HotelQuestion'
import TrainQuestion from '../../Question/TrainQuestion'
import Footer from './Footer'

const Questions = () => {
  return (
    <>
      <AirplaneQuestion />
      <HotelQuestion />
      <TrainQuestion />
      <div className='bg-white'>
        <Footer />

      </div>
    </>
  )
}

export default Questions
