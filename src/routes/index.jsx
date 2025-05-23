import React, { Suspense } from 'react'
import { Spinner } from 'react-bootstrap'
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom'
import Router from './Router'

function AllRoutes() {
  function allPaths(children) {
    return children?.map(({ path, Component, exact, props, children: child }, index) => {
      return child?.length ? (
        <Route element={<Component />} key={index}>
          {allPaths(child)}
        </Route>
      ) : (
        <Route
          key={path}
          path={path}
          element={
            <Suspense fallback={
              <div className='d-flex align-items-center justify-content-center top-0 left-0 position-fixed h-100 w-100'>
                <Spinner animation='border' size='lg' variant='success' />
              </div>
            }>
              <Component {...props} />
            </Suspense>
          }
          exact={exact}
        />
      )
    })
  }
  return (
    <>
      {/* <Toaster limit={5} /> */}
      <BrowserRouter>
        <Routes>
          {Router?.map(({ isPrivateRoute, children, Component }) => {
            return (
              <Route key={isPrivateRoute ? 'private' : 'public'} element={<Component />}>
                {allPaths(children)}
              </Route>
            )
          })}
          <Route path='*' element={<Navigate to='/home' />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default React.memo(AllRoutes)
