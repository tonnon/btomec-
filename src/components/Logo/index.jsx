import React from 'react'
import './Logo.css'

import {logo} from '../../assets'

export default function Logo() {
  return (
      <div className='flex__center logo__container'>
          <img src={logo} alt="" />
      </div>
  )
}
