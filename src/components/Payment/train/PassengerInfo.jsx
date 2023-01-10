import React, { useState, useRef } from 'react'
import styles from '../../../assets/styles/PassengerInfo.module.css'
import { useMutation, useQuery } from '@apollo/client'
import seatnumberQueries from '../../../Apollo/Query/seatnumberQueries'
import trainMutations from '../../../Apollo/Mutation/trainMutations'

import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { USER_ID, TRAINBUY_ID } from '../../../constants/auth'
import { showGender, showGenderwomen, showGendermen } from '../../../constants/payment'
import ReactTooltip from 'react-tooltip'
import trainQueries from '../../../Apollo/Query/trainQueries'

const PassengerInfo = () => {
  // const passenger = window.localStorage.getItem('Capacity').replace(/"/g, '')
  const capacity = parseInt(window.localStorage.getItem('Capacity').replace(/"/g, ''))
  const capacity1 = parseInt(window.localStorage.getItem('Capacity1').replace(/"/g, ''))
  const capacity2 = parseInt(window.localStorage.getItem('Capacity2').replace(/"/g, ''))
  const allCapacity = capacity + capacity1 + capacity2
  const trainId = window.localStorage.getItem('TRAINID').replace(/"/g, '')
  const trainClass = window.localStorage.getItem('TrainClass').replace(/"/g, '')
  const [formValues, setFormValues] = useState([{ name: '', gen: '', nationalcode: '', birthDate: '', gen: '' }])
  const [error, setError] = useState('')
  const [clicked, setClicked] = useState(false)
  const [price, setPrice] = useState([])

  function iaValidDate (code) {
    return /^1[34][0-9][0-9]\/((0[1-6]\/(0[1-9]|[1-2][0-9]|3[0-1]))|(0[7-9]\/(0[1-9]|[1-2][0-9]|30))|(1[0-1]\/(0[1-9]|[1-2][0-9]|30))|(12\/(0[1-9]|[1-2][0-9])))/.test(code)
  }
  const firstUpdate = useRef(true)

  const showAllCapacity = () => {
    if (!capacity2 && capacity && !capacity1) {
      return (
        capacity
      )
    } else if (!capacity1 && !capacity2 && !capacity) {
      return 1
    } else if (capacity1 && !capacity2 && capacity) {
      return capacity + capacity1
    } else if (!capacity1 && capacity2 && capacity) {
      return capacity + capacity2
    } else {
      return (
        allCapacity
      )
    }
  }

  let [count, setCount] = useState(showAllCapacity() - 1)

  const handleChange = (i, e) => {
    const newFormValues = [...formValues]
    newFormValues[i][e.target.name] = e.target.value
    if (!iaValidDate(e.target.value)) {
      setError('فرمت صحیح:YYYY/MM/DD')
    } else {
      setError(null)
    }

    setFormValues(newFormValues)
  }

  const addFormFields = () => {
    setFormValues([...formValues, { name: '', gen: '', nationalcode: '', birthDate: null, gen: '' }])
    count = count - 1
    setCount(count)
  }
  const removeFormFields = (i) => {
    const newFormValues = [...formValues]
    newFormValues.splice(i, 1)
    setFormValues(newFormValues)
    count = count + 1
    setCount(count)
  }
  const userId = window.localStorage.getItem(USER_ID)

  useQuery(trainQueries.SEARCHTRAINBYID, {
    variables: {
      id: trainId
    },

    onCompleted: (res) => {
      setPrice(res.searchTrainbyId.price)
    },
    onError: () => {
      setPrice([])
    }
  })

  // const showAllCapacity = () => {
  //   if (allCapacity == 0) {
  //     return 1
  //   } else return (allCapacity)
  // }

  const showAllPrice = () => {
    if (showAllCapacity() == capacity) {
      return price * capacity
    } else if (!showAllCapacity()) {
      return price
    } else if (showAllCapacity() == 1) {
      return price
    } else if (showAllCapacity() == capacity + capacity1) {
      return (price * capacity) + (price - price * 50 / 100) * capacity1
    } else if (showAllCapacity() == capacity + capacity2) {
      return (price * capacity) + (price - price * 75 / 100) * capacity2
    } else {
      return (
        price * capacity + (price - price * 75 / 100) * capacity2 + (price - price * 50 / 100) * capacity1
      )
    }
  }
  // console.log(showAllCapacity(), trainId, showAllPrice(), 'kkkkkkkkk', capacity, capacity1, capacity2, allCapacity, 'price')

  const [createBuyTrain] = useMutation(trainMutations.TRAINBUY)
  const handleCreateBuyTrain = (e) => {
    if (clicked == true) {
      e.preventDefault()
      createBuyTrain({
        variables: {
          trainId: trainId,
          user: JSON.parse(userId),
          name: formValues.map(item => item.name),
          date: formValues.map(item => item.birthDate),
          nationalcode: formValues.map(item => item.nationalcode),
          gen: formValues.map(item => item.gen),
          price: showAllPrice()
        }
      })
        .then(({ data }) => {
          if (data.trainBuy !== null) {
            toast.success('بلیط قطار با موفقیت خریداری شد')
            window.localStorage.setItem(TRAINBUY_ID, JSON.stringify(data.trainBuy._id))
            window.location.href = '/finishtrain'

          // resetFields()
          } else {
            toast.error(
              'خطایی در برقراری با سرور اتفاق افتاد'
            )
          }
        })
    } else {
      toast.warning('اطلاعات را تایید نکرده‌اید')
    }
  }

  return (
    <>
      <div className='d-flex flex-row flex-wrap my-2 justify-content-lg-around  '>

        <div className={styles.content}>

          <form>
            {count > 0
              ? <i
                  data-tip=' ستون جدید'
                  data-place='bottom'
                  className='btn  mt-4 fa-lg px-1 btn-outline-success  fa fa-plus-circle' onClick={() => addFormFields()}
                >
                افزودن مسافر
              </i>
              : null}
            {formValues.map((element, index) => (
              <div key={index}>
                <div className={styles.contentItem}>
                  <div className={styles.contentItem1}>
                    <label>نام ونام خانوادگی</label>
                    <input
                      className={styles.inputCss}
                      type='text' name='name' value={element.name || ''} onChange={e => handleChange(index, e)}
                    />

                  </div>
                  <div className={styles.contentItem1}>
                    <label> تاریخ تولد </label>
                    <input
                      type='text'
                      name='birthDate'
                    // defaultValue=''
                      className={styles.inputCss}
                      value={element.birthDate || ''}
                      onChange={e => handleChange(index, e)}
                    />

                    {element.birthDate && element.birthDate && !element.nationalcode
                      ? <div className={styles.fontcss}><small className='text-danger rounded-3 p-2  mt-1'>{error}</small> </div>
                      : null}

                  </div>

                  <div className={styles.contentItem1}>
                    <label>کدملی</label>
                    <input
                      className={styles.inputCss}
                      type='text' name='nationalcode' value={element.nationalcode || ''} onChange={e => handleChange(index, e)}
                    />

                  </div>
                  <div className={styles.contentItem1}>

                    <label> جنسیت </label>

                    {(() => {
                      if (trainClass == 'ویژه خواهران') {
                        return (
                          <select
                            name='gen'
                            value={element.gen}
                            onChange={e => {
                              firstUpdate.current = false
                              // setShowAirplaneCompany(e.target.value)
                              handleChange(index, e)
                            }}
                          >

                            {showGenderwomen.map((name, index) => (
                              <option value={name} key={index}>{name}
                              </option>
                            ))}
                          </select>
                        )
                      } else if (trainClass == 'ویژه برادران') {
                        return (
                          <select
                            name='gen'
                            value={element.gen}
                            onChange={e => {
                              firstUpdate.current = false
                              // setShowAirplaneCompany(e.target.value)
                              handleChange(index, e)
                            }}
                          >

                            {showGendermen.map((name, index) => (
                              <option value={name} key={index}>{name}
                              </option>
                            ))}
                          </select>
                        )
                      } else {
                        return (
                          <select
                            name='gen'
                            value={element.gen}
                            onChange={e => {
                              firstUpdate.current = false
                              // setShowAirplaneCompany(e.target.value)
                              handleChange(index, e)
                            }}
                          >

                            {showGender.map((name, index) => (
                              <option value={name} key={index}>{name}
                              </option>
                            ))}
                          </select>
                        )
                      }
                    })()}

                  </div>

                  <ReactTooltip className='bg-light text-secondary' />
                  <div className='  mt-4 '>
                    {
                index
                  ? <i
                      data-tip='حذف ستون'
                      data-place='bottom'
                      className=' btn mt-4 mx-1 btn-danger rounded-circle fa-lg px-1 fa fa-trash-o button remove' onClick={() => removeFormFields(index)}
                    />
                  : null
              }

                  </div>
                </div>

              </div>

            ))}

          </form>
          <div />

        </div>

        <div style={{ width: '70%', margin: '10px auto' }}>
          <div className={styles.content1}>
            <div className='d-flex flex-row flex-wrap  my-2 text-danger justify-content-between'>
              <span> مبلغ  کل </span>
              <span>
                {price * showAllCapacity()} تومان
              </span>
            </div>
            {capacity
              ? <div className='d-flex flex-row flex-wrap  my-2 text-secondary justify-content-between'>
                <span>   مسافر بزرگسال  {capacity}</span>
                <span>
                  {price * capacity} تومان
                </span>
                </div>
              : null}
            {capacity1
              ? <div className='d-flex flex-row flex-wrap  my-2 text-secondary justify-content-between'>
                <span>   مسافر کودک  {capacity1}</span>
                <span>
                  {(price - price * 50 / 100) * capacity1} تومان
                </span>
                </div>
              : null}
            {capacity2
              ? <div className='d-flex flex-row flex-wrap  my-2 text-secondary justify-content-between'>
                <span>   مسافر نوزاد  {capacity2}</span>
                <span>
                  {(price - price * 75 / 100) * capacity2} تومان
                </span>
                </div>
              : null}

            <div className='d-flex flex-row flex-wrap  my-2 text-success justify-content-between'>
              <span> مبلغ  قابل پرداخت </span>
              <span>
                {showAllPrice()} تومان
              </span>
            </div>
          </div>

          <div className={styles.content1}>
            <div>
              <input
                type='checkbox'
                className='mx-4 my-4'
                checked={clicked}
                onChange={e => setClicked(e.target.checked)}
              />
              تمامی
              اطلاعات فوق را تایید می‌کنم
            </div>

          </div>
          <div className={styles.content1}>
            <button
              onClick={handleCreateBuyTrain}
              className='btn btn-success rounded-3 my-3'
            >
              پرداخت

            </button>
            <ToastContainer />
          </div>

        </div>
      </div>
    </>
  )
}

export default PassengerInfo
