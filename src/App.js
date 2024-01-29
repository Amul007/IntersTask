import React from 'react'
import Newheader from './components/newHearder'
import Footer from './components/footer'
import Sidebar from './components/sidebar'


const App = () => {
  return (
    <div>
      {/* <Header/> */}
      <Newheader/>
      <Footer/>
      <Sidebar/>
    </div>
  )
}

export default App