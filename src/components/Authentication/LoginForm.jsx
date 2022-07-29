import React from 'react'
// import { useMutation } from '@apollo/client'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { Card, CardBody, Col, Container, Row, Label } from 'reactstrap'
import loginimg from '../../assets/img/lo.JPG'
import styles from '../../assets/styles/Login.module.css'
// import { toast } from 'react-toastify'

const LoginForm = () => {
  return (
    <div className={styles.bgCss}>
      <div className='account-pages mt-3 mb-3 pt-sm-5' style={{ cursor: 'pointer' }}>
        <Container>
          <Row className='justify-content-center'>
            <Col md={8} lg={6} xl={5}>
              <Card className='overflow-hidden'>
                <div>
                  <img src={loginimg} alt='' className={styles.imgCss} />

                </div>
                <CardBody>
                  <div className='p-2'>
                    <Formik
                      initialValues={{
                        login: {
                          username: '',
                          password: ''
                        }
                      }}
                      enableReinitialize
                      className='form-horizontal'
                    >
                      <Form>
                        <div className='mb-3'>
                          <Label>نام کاربری</Label>
                          <Field
                            name='username'
                            className='form-control'
                            placeholder='نام کاربری را وارد کنید'
                            type='text'
                          />
                          <ErrorMessage
                            className='alert alert-danger p-2 mt-1'
                            component='div'
                            name='username'
                          />
                        </div>

                        <div className='mb-3'>
                          <Label>رمز عبور</Label>
                          <Field
                            name='password'
                            className='form-control'
                            placeholder='رمز عبور را وراد کنید'
                            type='password'
                          />
                          <ErrorMessage
                            className='alert alert-danger p-2 mt-1'
                            component='div'
                            name='password'
                          />
                        </div>

                        {/* <div className='form-check'>
                              <input
                                type='checkbox'
                                className='form-check-input'
                                id='customControlInline'
                              />
                              <Label
                                className='form-check-label'
                                htmlFor='customControlInline'
                              >
                                Remember me
                              </Label>
                            </div> */}

                        <div className='mt-4'>
                          <button
                            className='btn btn-primary col-12'
                            type='submit'
                          >
                            ورود
                          </button>
                        </div>
                      </Form>
                    </Formik>
                  </div>

                  <div className='mt-5 text-center'>
                    <p>
                      رمز عبور را فراموش کرده اید؟
                      <label
                        className='font-weight-medium text-primary ms-1'
                      >
                        بازیابی رمز عبور
                      </label>
                    </p>

                    <a href='register'>
                      <label
                        className='font-weight-medium text-primary ms-1'
                        style={{ cursor: 'pointer' }}
                      >
                        ثبت نام در تریپنو
                      </label>
                    </a>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default LoginForm
