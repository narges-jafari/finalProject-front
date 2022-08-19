import HomePage from '../pages/Common/HomePage'

// Authentication
import RegisterPage from '../pages/Authentication/RegisterPage'
import LoginPage from '../pages/Authentication/LoginPage'
// import ForgotPasswordPage from '../pages/Authentication/ForgotPasswordPage'
// import Error404 from '../pages/Common/Error404Page'

// TEMPORARY
// import TeamManagementPage from '../pages/TeamManagement/TeamManagementPage'

const publicRoutes = [
  { path: '/register', component: RegisterPage },
  { path: '/login', component: LoginPage },
  // { path: '/forgot-password', component: ForgotPasswordPage },
  // { path: '/not-found', component: Error404 },

  { path: '/', component: HomePage }

  // { path: '/team-management', component: TeamManagementPage }
]

export default publicRoutes
