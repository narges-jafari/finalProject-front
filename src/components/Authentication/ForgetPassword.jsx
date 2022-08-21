import React, { useState } from 'react'
import classnames from 'classnames'
import { Card, CardTitle, CardBody, Col, Label, Input, Row, Container } from 'reactstrap'
import styles from '../../assets/styles/Login.module.css'

const ForgetPassword = () => {
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [visibleCurrentPass, setVisibleCurrentPass] = useState(false)
  const [visibleNewPass, setVisibleNewPass] = useState(false)
  const [visibleConfirmPass, setVisibleConfirmPass] = useState(false)
  const [currentPassInputType, setCurrentPassInputType] = useState('password')
  const [newPassInputType, setNewPassInputType] = useState('password')
  const [confirmPassInputType, setConfirmPassInputType] = useState('password')

  // FUNCTIONS FOR TOGGLING PASSWORD VISIBILITY

  const toggleCurrentPassVisibility = () => {
    setVisibleCurrentPass(!visibleCurrentPass)
    if (!visibleCurrentPass) {
      setCurrentPassInputType('text')
    } else setCurrentPassInputType('password')
  }
  const toggleNewPassVisibility = () => {
    setVisibleNewPass(!visibleNewPass)
    if (!visibleNewPass) {
      setNewPassInputType('text')
    } else setNewPassInputType('password')
  }
  const toggleConfirmPassVisibility = () => {
    setVisibleConfirmPass(!visibleConfirmPass)
    if (!visibleConfirmPass) {
      setConfirmPassInputType('text')
    } else setConfirmPassInputType('password')
  }
  return (
    <div>
      <div className='account-pages mt-3 mb-3 pt-sm-5' style={{ cursor: 'pointer' }}>
        <Container>
          <Row className='justify-content-center'>
            <Col md={8} lg={6} xl={5}>
              <Card className='shadow-sm '>
                <div>
                  {/* <img src={loginimg} alt='' className={styles.imgCss} /> */}
                  <CardTitle className='text-danger primary fw-bold fs-6 mb-4' style={{ textAlign: 'center', marginTop: '-32px' }}>
                    بازیابی رمز عبور
                  </CardTitle>
                </div>
                <CardBody>

                  <form>
                    <div className='col'>
                      <Label htmlFor='changePassword' className='col-sm-3 col-form-label'>
                        رمز عبور فعلی
                      </Label>
                      <Col sm={12}>
                        <Input
                          type={currentPassInputType}
                          className='form-control px-4'
                          id='changePassword'
                          placeholder='لطفا رمز عبور فعلی را وراد کنید '
                          value={oldPassword}
                          onChange={(e) => {
                            setOldPassword(e.target.value)
                          }}
                          style={{ direction: 'ltr', textAlign: 'center' }}
                          required
                        />
                        <span
                          className={styles.eyeIconPosition}
                          onClick={() => toggleCurrentPassVisibility()}
                        >
                          <i
                            className={
                    visibleCurrentPass
                      ? 'fa fa-eye text-muted fs-5 mx-2'
                      : 'fa fa-eye-slash text-muted fs-5 mx-2'
                  }
                            style={{ cursor: 'pointer', marginTop: '-30px', position: 'absolute' }}
                          />
                        </span>
                      </Col>
                    </div>
                    <div className='col'>
                      <Label htmlFor='newPassword' className='col-sm-3 col-form-label'>

                        رمز عبور جدید
                      </Label>
                      <Col sm={12}>

                        <Input
                          type={newPassInputType}
                          className='form-control'
                          id='newPassword'
                          placeholder='رمز عبور جدید را وارد کنید'
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                          style={{ direction: 'ltr', textAlign: 'center' }}
                          required
                        />
                        <span
                          className={styles.eyeIconPosition}
                          onClick={() => toggleNewPassVisibility()}
                        >
                          <i
                            className={
                    visibleNewPass
                      ? 'fa fa-eye text-muted fs-5 mx-2'
                      : 'fa fa-eye-slash text-muted fs-5 mx-2'
                  }
                            style={{ cursor: 'pointer', marginTop: '-30px', position: 'absolute' }}
                          />
                        </span>
                      </Col>
                    </div>
                    <div className='col mb-4'>
                      <Label
                        htmlFor='confirmPassword'
                        className='col-sm-3 col-form-label'
                      >
                        تکرار رمز عبور
                      </Label>
                      <Col sm={12}>
                        <Input
                          type={confirmPassInputType}
                          className={classnames('form-control', {
                            'border border-danger':
                    confirmPassword && newPassword !== confirmPassword
                          })}
                          id='confirmPassword'
                          placeholder='رمز عبور جدید را دوباره وارد کنید'
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          style={{ direction: 'ltr', textAlign: 'center' }}
                          required
                        />

                        <span
                          className={styles.eyeIconPosition}
                          onClick={() => toggleConfirmPassVisibility()}
                        >
                          <i
                            className={
                    visibleConfirmPass
                      ? 'fa fa-eye text-muted fs-5 mx-2'
                      : 'fa fa-eye-slash text-muted fs-5 mx-2'
                  }
                            style={{ cursor: 'pointer', marginTop: '-30px', position: 'absolute' }}
                          />
                        </span>
                      </Col>
                      {confirmPassword && newPassword !== confirmPassword && (
                        <div className='row'>
                          <Col sm={3} />
                          <Col sm={12}>
                            <div
                              className={
                      'd-flex text-danger bg-soft ' + styles.validationErrorField
                    }
                            >
                              تکرار رمز عبور استباه است!
                            </div>
                          </Col>
                        </div>
                      )}
                    </div>

                    <div className='d-flex justify-content-center'>
                      <button
                        type='button'
                        className='w-md btn btn-outline-primary btn-sm me-3 mx-2'
                      >
                        پاک کردن اطلاعات
                      </button>
                      <button type='submit' className='btn btn-primary btn-sm'>
                        بازیابی
                      </button>
                    </div>
                  </form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default ForgetPassword
