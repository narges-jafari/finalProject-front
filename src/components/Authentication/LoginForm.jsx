import React, { useState } from 'react'

import { Card, CardBody, Col, Container, Row, Label } from 'reactstrap'
import loginimg from '../../assets/img/Capturedjdsk.JPG'
import styles from '../../assets/styles/Login.module.css'
import { useQuery } from '@apollo/client'
import userQueries from '../../Apollo/Query/userQueries'


const LoginForm = () => {
  const [email1, setEmail1] = useState(false)
  const [password1, setPassword1] = useState(false)
  const [userInfo, setUserInfo] = useState([])

  // const [login, { loading, data }] = useQuery(userQueries.LOGIN)

  // if (!loading && data) {
  //   window.localStorage.setItem(AUTH_USER_INFO, JSON.stringify(data.login.user))
  //   if (data.login.token) {
  //     // toast.success('You successfully logged in.')
  //     console.log(data.login.user)
  //   }
  // }
  useQuery(userQueries.LOGIN, {
    variables: {
      email: email1,
      password: password1

    },
    onCompleted: (res) => {
      setUserInfo(res.login)
      // window.localStorage.setItem(AUTH_USER_INFO, JSON.stringify(res.login.userId))
      // console.log(res.login.userId)
    },
    onError: () => {
      setUserInfo([])
      // <div>1233</div>
    }
  })
  return (
    <div className={styles.bgCss}>
      <div className='account-pages mt-3 mb-3 pt-sm-5' style={{ cursor: 'pointer' }}>
        <Container>
          <Row className='justify-content-center'>
            <Col md={8} lg={6} xl={5}>
              <Card className='overflow-hidden ' style={{ border: 'none', boxShadow: ' 0 0 4px 1px #ddd' }}>
                <div>

                  <img src={loginimg} alt='' className={styles.imgCsslogin} />
                  <div className={styles.spancss1}>
                    به تریپنو خوش امدید

                  </div>
                  <div className={styles.fontcss}>
                    برای شروع وارد حساب کاربری شوید
                  </div>
                </div>
                <CardBody>
                  <div className='p-2'>
                    {/* <Formik
                      initialValues={{
                        login: {
                          username: '',
                          password: ''
                        }
                      }}
                      enableReinitialize
                      className='form-horizontal'
                    > */}
                    {/* <Form> */}
                    <div className='mb-3'>
                      <label>نام کاربری</label>
                      <input
                        name='username'
                        className={styles.filedcss}
                        placeholder='نام کاربری را وارد کنید'
                        type='text'
                        value={email1}
                        onChange={e => { setEmail1(e.target.value) }}
                      />
                      {/* <ErrorMessage
                            className='alert alert-danger p-2 mt-1'
                            component='div'
                            name='username'
                          /> */}
                    </div>

                    <div className='mb-3'>
                      <label>رمز عبور</label>
                      <input
                        name='password'
                        className={styles.filedcss}
                        placeholder='رمز عبور را وراد کنید'
                        type='password'
                        value={password1}
                        onChange={e => { setPassword1(e.target.value) }}
                      />
                      {/* <ErrorMessage
                            className='alert alert-danger p-2 mt-1'
                            component='div'
                            name='password'
                          /> */}
                    </div>

                    <div className='mt-4'>
                      <button
                        className='btn  py-2  col-12'
                        style={{ backgroundColor: '#f49107f1', border: ' none ', fontFamily: 'Vazir', fontSize: '20px' }}
                        value={userInfo}
                        onChange={e => { setUserInfo(e.target.value) }}
                        type='submit'
                      >
                        ورود
                      </button>
                    </div>
                    {/* </Form> */}
                    {/* </Formik> */}
                  </div>

                  <div className='mt-5 text-center'>

                    <a href='register'>
                      <label
                        className='font-weight-medium  ms-1'
                        style={{ cursor: 'pointer', color: '#fb9208' }}
                      >
                        ثبت نام در تریپنو
                      </label>
                    </a>
                  </div>
                  <div>
                    mmmmmmmmm
                    {userInfo.map((userinfo, id) => {
                      return (
                        <div key={id}>{userinfo.userId}nnnnnnnn</div>
                      )
                    })}
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
