import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Verify from '../views/Verify.vue'
import Signup from '../views/Signup.vue'
import Profile from '../views/Profile.vue'
import d from '../views/d.vue'
import Index from '../views/Index.vue'
import Student from '../views/Student.vue'
import Teacher from '../views/Teacher.vue'
import Otp from '../views/Otp.vue'
import Session from '../views/Session.vue'
import Student_session from '../views/Student_session.vue'
const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/verify',
    name: 'Verify',
    component: Verify
  },
  {
    path: '/sign-up',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/otp',
    name: 'Otp',
    component: Otp
  },
  {
    path: '/d',
    name: 'd',
    component: d
  },
  {
    path: '/index',
    name: 'Index',
    component: Index
  },
  {
    path: '/student',
    name: 'Student',
    component: Student
  },
  {
    path: '/teacher',
    name: 'Teacher',
    component: Teacher
  },
  {
    path: '/session',
    name: 'Session',
    component: Session
  },
  {
    path: '/Student_session',
    name: 'Student_session',
    component: Student_session
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
