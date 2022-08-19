
import Footer from '../Footer/Footer'

import SearchEntertainment from './SearchEntertainment'
import Magazine from './Magazine'
const MagazineResult = () => {
  return (
    <>
      <div style={{ padding: '60px 0px 0px 0px' }}>
        <Magazine />

      </div>
      <SearchEntertainment />
      <div className='bg-white ' style={{ marginTop: '-10px' }}>
        <Footer />

      </div>
    </>
  )
}

export default MagazineResult
