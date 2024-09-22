import React from 'react'
import Navbar from './_components/Navbar'

const layout = ({children}) => {
  return (
    <div>
        <div>
            <Navbar />
        </div>
        {children}
    </div>
  )
}

export default layout