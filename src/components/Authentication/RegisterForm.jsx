import React from 'react'
// import { useMutation } from '@apollo/client'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { Row, Col, CardBody, Card, Container, Label } from 'reactstrap'
// import { toast } from 'react-toastify'
// import loginimg from '../../assets/img/lo.JPG'
import styles from '../../assets/styles/Login.module.css'

import registerimg from '../../assets/img/register1.JPG'
// import { schema } from '../../utils/registerFormValidation'

// import userMutations from '../../apollo/mutations/userMutations'

// import {
//   AUTH_USER,
//   AUTH_USER_INFO,
//   AUTH_USER_TEAM_ID,
//   USERNAME,
//   SELECTED_TEAM,
//   DEFAULT_TEAM_NAME,
//   DEFAULT_TEAM_ID
// } from '../../constants/auth'

const RegisterForm = () => {
//   const [register, { loading, data }] = useMutation(userMutations.SIGNUP)

  //   if (!loading && data) {
  //     if (data.signup == null) {
  //     } else if (data.signup.token) {
  //       toast.success('Your account has been created.')

  //       window.localStorage.removeItem(AUTH_USER)

  //       window.localStorage.setItem(AUTH_USER, data.signup.token)
  //       window.localStorage.setItem(
  //         AUTH_USER_TEAM_ID,
  //         '<PERSONAL>'
  //       )
  //       window.localStorage.setItem(
  //         AUTH_USER_INFO,
  //         JSON.stringify(data.signup.user)
  //       )
  //       window.localStorage.setItem(USERNAME, data.signup.user.username)
  //       window.localStorage.setItem(
  //         DEFAULT_TEAM_NAME,
  //         '<PERSONAL>'
  //       )
  //       window.localStorage.setItem(
  //         DEFAULT_TEAM_ID,
  //         '<PERSONAL>'
  //       )
  //       window.localStorage.setItem(
  //         SELECTED_TEAM,
  //         '<PERSONAL>'
  //       )

  //       props.setIsLoggedIn(true)
  //     }
  //   }

  return (

    <div className={styles.bgCss}>
      <div className='account-pages my-3  pt-sm-5'>
        <Container>
          <Row className='justify-content-center'>
            <Col md={8} lg={6} xl={5}>
              <Card className='overflow-hidden'>
                <div>
                  <img src={registerimg} alt='' className={styles.imgCss} />

                </div>
                <CardBody>
                  <div className='p-2'>
                    <Formik
                      initialValues={{
                        firstName: '',
                        lastName: '',
                        username: '',
                        password: '',
                        emailAddress: ''
                      }}
                    //   validationSchema={schema}
                      enableReinitialize
                      className='form-horizontal'
                    //   onSubmit={(values) => {
                    //     console.log(values)
                    //     register({
                    //       variables: {
                    //         username: values.username,
                    //         password: values.password,
                    //         firstName: values.firstName,
                    //         lastName: values.lastName,
                    //         email: values.emailAddress
                    //       }
                    //       // update(cache, result) {
                    //       //   cache.writeQuery({
                    //       //     query: queries.GET_USER_ITEM,
                    //       //     data: { userItem: result.data.signup }
                    //       //   })
                    //       // }
                    //     })
                    //   }}
                    >
                      <Form>
                        <div className='mb-3'>
                          <Label>نام</Label>
                          <Field
                            name='firstName'
                            className='form-control'
                            placeholder='نام خود را وارد کنید'
                            type='text'
                          />
                          <ErrorMessage
                            className='alert alert-danger p-2 mt-1'
                            component='div'
                            name='firstName'
                          />
                        </div>

                        <div className='mb-3'>
                          <Label>نام خانوادگی</Label>
                          <Field
                            name='lastName'
                            className='form-control'
                            placeholder='نام خانوادگی خود را وارد کنید'
                            type='text'
                          />
                          <ErrorMessage
                            className='alert alert-danger p-2 mt-1'
                            component='div'
                            name='lastName'
                          />
                        </div>

                        <div className='mb-3'>
                          <Label>نام کاربری</Label>
                          <Field
                            name='username'
                            className='form-control'
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
                            className='form-control'
                            placeholder='رمز عبور را وارد کنید'
                            type='password'
                          />
                          <ErrorMessage
                            className='alert alert-danger p-2 mt-1'
                            component='div'
                            name='password'
                          />
                        </div>

                        {/* <div className='mb-3'>
                          <Label>Repeat Password</Label>
                          <Field
                            name='repeatPassword'
                            className='form-control'
                            placeholder='Re-enter your password'
                            type='password'
                          />
                          <ErrorMessage
                            className='alert alert-danger p-2 mt-1'
                            component='div'
                            name='repeat-password'
                          />
                        </div> */}

                        <div className='mb-3'>
                          <Label>ایمیل</Label>
                          <Field
                            name='emailAddress'
                            className='form-control'
                            placeholder='ایمیل خود را وارد کنید'
                            type='email'
                          />
                          <ErrorMessage
                            className='alert alert-danger p-2 mt-1'
                            component='div'
                            name='emailAddress'
                          />
                        </div>

                        {/* <div className='mb-3'>
                          <Label>Repeat Email Address</Label>
                          <Field
                            name='repeatEmailAddress'
                            className='form-control'
                            placeholder='Re-enter your email address'
                            type='email'
                          />
                          <ErrorMessage
                            className='alert alert-danger p-2 mt-1'
                            component='div'
                            name='repeat-emailAddress'
                          />
                        </div> */}

                        <div className='mt-5'>
                          <button
                            className='btn btn-primary col-12'
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
