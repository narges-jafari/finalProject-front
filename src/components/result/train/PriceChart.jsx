import Chart from 'react-apexcharts'
import { Modal } from 'reactstrap'

const PriceChart = (props) => {
  const series = [
    {
      name: "قیمت", //will be displayed on the y-axis
      data: [600000, 5610000, 1250000, 3450000],

    },
   

  ];
  const options = {
    chart: {
      id: "simple-bar",
      // backgroundColor:'red!important',

    },

    xaxis: {
      categories: ['کوثر','رجا','فدک','نور'] ,//will be displayed on the x-asis

    }
  };
  return (
  
    <>
    
    <Modal
    isOpen={props.isOpen}
    toggle={() => {
      props.setIsOpen()
    }}
    centered
    size='lg-sm'
  >
      <div className='modal-header py-2'>
        <h6 className='modal-title mt-0'> مشاهده قیمت ها </h6>
        <button
          type='button'
          onClick={() => {
            props.setIsOpen(false)
          }}
          className='close p-0 px-3 rounded-3 btn btn-sm btn-danger'
          data-dismiss='modal'
          aria-label='Close'
        >
          <span aria-hidden='true'>&times;</span>
        </button>
      </div>
      <div className='modal-body'>
      <div>
      <Chart options={options} type="bar" series={series} />
    </div>

      </div>
      <div className='modal-footer d-flex justify-content-center border-0'>
        <button
          type='button'
          className='btn bg-white text-dark border border-1 border-primary py-1'
          onClick={() => {
            props.setIsOpen(false)
          }}
          data-dismiss='modal'
        >
          بستن
        </button>

      </div>

    </Modal>

    </>
  );
}
export default PriceChart
