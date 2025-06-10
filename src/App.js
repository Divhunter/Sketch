import React, { useEffect } from 'react'
import ScrollToTop from './functions/ScrollToTop'
import { Routes, Route } from 'react-router-dom'
import SketchBanner from './pages/SketchBanner'
import SketchCrea from './pages/SketchCrea'
import SketchHeader from './pages/SketchHeader'
import SketchFooter from './pages/SketchFooter'
import SketchInfo from './pages/SketchInfo'
import SketchTchat from './pages/SketchTchat'
import  CGU from './pages/CGU'
import Error from './_utils/Error'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// styles
import './styles/m-app.css'
import './styles/t-d-app.css'

const App = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <SketchHeader />
                <Routes>
                    <Route exact path='/' element={ <SketchBanner /> } />
                    <Route path='/SketchInfo' element={ <SketchInfo /> } />
                    <Route path='/SketchCrea' element={ <SketchCrea /> } />
                    <Route path='/SketchTchat' element={ <SketchTchat /> } />
                    <Route path='/CGU' element={ <CGU /> } />
                    <Route path='/*' element={ <Error /> } />
                </Routes>
            <SketchFooter />
            <ScrollToTop />
        </div>
    )
}

export default App