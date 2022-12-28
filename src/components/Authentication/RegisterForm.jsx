import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { Row, Col, CardBody, Card, Container, Label } from 'reactstrap'

import styles from '../../assets/styles/Login.module.css'
import { schema } from '../../Utils/ResisterValidation'
import { useMutation } from '@apollo/client'
import userMutations from '../../Apollo/Mutation/userMutations'
import registerimg from '../../assets/img/Capturedjdsk.JPG'
import { toast } from 'react-toastify'
import {
  AUTH_TOKEN,
  USER_ID

} from '../../constants/auth'

const RegisterForm = () => {
  // apollo mutation
  const [register, { data, loading }] = useMutation(userMutations.CREATEUSER)
  if (!loading && data) {
    if (data.createUser == null) {
    } else if (data.createUser) {
      window.localStorage.setItem(AUTH_TOKEN, JSON.stringify(data.createUser.token))
      window.localStorage.setItem(USER_ID, JSON.stringify(data.createUser.userId))
      toast.success('ثبت‌نام شما موفق‌آمیز بود')
      window.location.href = '/login'
    }
  }

  return (
    <div className={styles.bgCss}>
      <div className='account-pages my-3  pt-sm-5'>
        <Container>
          <Row className='justify-content-center  '>
            <Col md={8} lg={6} xl={5}>
              <Card className='overflow-hidden ' style={{ border: 'none', boxShadow: ' 0 0 4px 1px #ddd' }}>
                <div>
                  <img src={registerimg} alt='' className={styles.imgCss} />
                  <span className={styles.spancss}>ثبت نام</span>

                </div>
                <CardBody>
                  <div className='p-2'>

                    <Formik
                      initialValues={{
                        fullName: '',
                        username: '',
                        password: '',
                        email: '',
                        birthdate: '',
                        nationalcode: ''
                      }}
                      validationSchema={schema}
                      enableReinitialize
                      className='form-horizontal'
                      onSubmit={(values) => {
                        register({
                          variables: {
                            fullName: values.fullName,
                            username: values.username,
                            password: values.password,
                            email: values.email,
                            birthdate: values.birthdate,
                            nationalcode: values.nationalcode
                          }

                        })
                      }}
                    >
                      <Form>
                        <div className='mb-3'>
                          <Label>نام   ونام خانوادگی</Label>
                          <Field
                            name='fullName'
                            className={styles.filedcss}
                            placeholder='نام ونام خانوادگی خود را وارد کنید'
                            type='text'
                          />
                          <ErrorMessage
                            className='alert alert-danger p-2 mt-1'
                            component='div'
                            name='fullName'
                          />
                        </div>

                        <div className='mb-3'>
                          <Label>نام کاربری</Label>
                          <Field
                            name='username'
                            className={styles.filedcss}
                            placeholder='نام کاربری را وراد کنید'
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
                            className={styles.filedcss}
                            placeholder='رمز عبور را وارد کنید'
                            type='password'
                          />
                          <ErrorMessage
                            className='alert alert-danger p-2 mt-1'
                            component='div'
                            name='password'
                          />
                        </div>

                        <div className='mb-3'>
                          <Label>ایمیل</Label>
                          <Field
                            name='email'
                            className={styles.filedcss}
                            placeholder='ایمیل خود را وارد کنید'
                            type='email'
                          />
                          <ErrorMessage
                            className='alert alert-danger p-2 mt-1'
                            component='div'
                            name='email'
                          />
                        </div>
                        <div className='mb-3'>
                          <Label>تاریخ تولد</Label>
                          <Field
                            name='birthdate'
                            className={styles.filedcss}
                            placeholder='تاریخ تولد خود را وارد کنید'
                            type='text'
                          />
                          <ErrorMessage
                            className='alert alert-danger p-2 mt-1'
                            component='div'
                            name='birthdate'
                          />
                        </div>

                        <div className='mb-3'>

                          <Label> کدملی</Label>
                          <Field
                            name='nationalcode'
                            className={styles.filedcss}
                            placeholder='کدملی خود را وارد کنید'
                            type='text'
                          />
                          <ErrorMessage
                            className='alert alert-danger p-2 mt-1'
                            component='div'
                            name='nationalcode'
                          />
                        </div>

                        <div className='mt-5'>
                          <button
                            className='btn  py-2 col-12'
                            style={{ backgroundColor: '#f49107f1', fontFamily: 'Vazir', fontSize: '20px' }}
                            type='submit'
                          >
                            ثبت نام
                          </button>

                        </div>

                      </Form>
                    </Formik>

                  </div>

                  <div className='mt-5 text-center'>
                    <p>
                      آیا قبلا ثبت نام کرده اید؟
                      <a href='/login'>
                        <label
                          className='font-weight-medium text-primary ms-1'
                          style={{ cursor: 'pointer' }}
                        >
                          ورود
                        </label>
                      </a>
                    </p>
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

export default RegisterForm
