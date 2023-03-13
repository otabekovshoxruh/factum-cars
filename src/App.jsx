import React from 'react';

// import routes end route
import { Routes, Route } from 'react-router-dom'

// import components
import Header from './components/Header/Header'
import CatalogAuto from './components/main/CatalogAuto';
import Contact from './page/contact'



//

export default function App() {

  return (
  <div className='bg-'>
    <Header />
    <CatalogAuto  />
    <Routes>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
  </div>
  )
}
