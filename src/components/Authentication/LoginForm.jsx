import React from 'react'
import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import loginimg from '../../assets/img/Capturedjdsk.JPG'
import styles from '../../assets/styles/Login.module.css'
import { useLazyQuery } from '@apollo/client'
import userQueries from '../../Apollo/Query/userQueries'
import { toast } from 'react-toastify'
import { Formik, Form, Field, ErrorMessage } from 'formik'

import {
  USER_ID,
  AUTH_TOKEN
} from '../../constants/auth'

const LoginForm = () => {
  // apollo query
  const [Login, { loading, data }] = useLazyQuery(userQueries.LOGIN)
  if (!loading && data) {
    window.localStorage.setItem(AUTH_TOKEN, JSON.stringify(data.login.token))

    window.localStorage.setItem(USER_ID, JSON.stringify(data.login.userId))

    if (data.login.token) {
      toast.success('   ورود موفق‌آمیز')

      // window.localStorage.setItem(USER_ID, JSON.stringify(data.login.userId))
      window.location.href = '/'
      window.localStorage.setItem(AUTH_TOKEN, JSON.stringify(data.login.token))

      window.localStorage.setItem(USER_ID, JSON.stringify(data.login.userId))
    }
  }
  console.log(window.localStorage.getItem(AUTH_TOKEN))

  return (
    <>
      <div className='account-pages mt-3 mb-3 pt-sm-5'>
        <Container>
          <Row className='justify-content-center'>
            <Col md={8} lg={6} xl={5}>
              <Card className='overflow-hidden ' style={{ border: 'none', boxShadow: ' 0 0 4px 1px #ddd' }}>
                <div>

                  <img src={loginimg} alt='' className={styles.imgCsslogin} />
                  <div className={styles.spancss1}>
                    به تریپنو خوش امدید
                    {Login.token}
                  </div>
                  <div className={styles.fontcss}>
                    برای شروع وارد حساب کاربری شوید
                  </div>
                </div>

                <CardBody className='pt-0'>
                  <div className='p-2'>
                    <Formik
                      initialValues={{

                        username: '',
                        password: ''

                      }}
                      enableReinitialize
                      className='form-horizontal'
                      onSubmit={(values) => {
                        Login({
                          variables: {
                            // login:{
                            username: values.username,
                            password: values.password
                            // }
                          }

                        })
                      }}
                    >
                      <Form>
                        <div className='mb-3'>
                          <label>نام کاربری</label>
                          <Field
                            name='username'
                            className={styles.filedcss}
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
                          <label> پسوورد</label>
                          <Field
                            name='password'
                            className={styles.filedcss}
                            placeholder='رمز عبور را وراد کنید'
                            type='password'
                          />
                          <ErrorMessage
                            className='alert alert-danger p-2 mt-1'
                            component='div'
                            name='password'
                          />
                        </div>

                        <button
                          className='btn  py-2  col-12'
                          style={{ backgroundColor: '#f49107f1', border: ' none ', fontFamily: 'Vazir', fontSize: '20px' }}
                          type='submit'
                        >
                          ورود
                        </button>
                      </Form>
                    </Formik>
                  </div>

                  <div className='mt-5 text-center'>

                    <a href='register'>
                      <label
    // className='font-weight-medium  ms-1'
                        style={{ cursor: 'pointer', color: '#fb9208' }}
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
    </>
  )
}

export default LoginForm
