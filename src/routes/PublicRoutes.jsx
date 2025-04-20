import React from 'react'
import PropTypes from 'prop-types'
import { Navigate, Outlet } from 'react-router-dom'
import MainLayout from '../layouts/main-layout/index'

function PublicRoute() {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  )
}

PublicRoute.propTypes = {
  element: PropTypes.element
}
export default PublicRoute
