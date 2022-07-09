import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import { AUTH_USER } from '../constants/auth'

const AuthMiddleware = ({
  component: Component,
  layout: Layout,
  isAuthProtected,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) => {
      if (isAuthProtected && !window.localStorage.getItem(AUTH_USER)) {
        return (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
      }

      return (
        <Layout>
          <Component {...props} />
        </Layout>
      )
    }}
  />
)

AuthMiddleware.propTypes = {
  isAuthProtected: PropTypes.bool,
  component: PropTypes.any,
  location: PropTypes.object,
  layout: PropTypes.any
}

export default AuthMiddleware
