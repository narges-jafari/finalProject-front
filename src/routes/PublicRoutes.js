import HomePage from '../pages/Common/HomePage'

// Authentication
// import RegisterPage from '../pages/Authentication/RegisterPage'
// import LoginPage from '../pages/Authentication/LoginPage'
// import ForgotPasswordPage from '../pages/Authentication/ForgotPasswordPage'
// import Error404 from '../pages/Common/Error404Page'
// import TeamManagementPage from '../pages/TeamManagement/TeamManagementPage'
// TEMPORARY

import TransportationPage from '../pages/Transport/TransportationPage'

const publicRoutes = [

  { path: '/', component: HomePage },

  { path: '/transport-search', component: TransportationPage }
]

export default publicRoutes
