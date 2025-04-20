import React, { Suspense, useState } from 'react'
import PropTypes from 'prop-types'
// import Breadcrumbs from '../../shared/components/'
import useMediaQuery from '../../shared/hooks/useMediaQuery'
import { Spinner } from 'react-bootstrap'
import Header from '../../shared/components/Header'
import Footer from '../../shared/components/Footer'

function MainLayout({ children }) {
    const [isOpen, setIsOpen] = useState(true)
    const width = useMediaQuery('(max-width: 300px)')

    return (
        <div className='main-layout container'>
            <div className='main-layout-background'></div>
            <div className={`main-container ${width ? !isOpen && 'active' : isOpen && 'active'}`}>
                <div className='container-fluid'>
                    {/* <Breadcrumbs /> */}
                    <Suspense fallback={
                        <div className='d-flex align-items-center justify-content-center top-0 left-0 position-fixed h-100 w-100'>
                            <Spinner animation='border' size='sm' variant='success' />
                        </div>
                    }>
                        <Header />
                        {children}
                        <Footer />
                    </Suspense>
                </div>
            </div>
        </div>
    )
}
MainLayout.propTypes = {
    children: PropTypes.node.isRequired
}
export default MainLayout
