import React from 'react'
import './SocialHandles.css'
import { socialHandles } from '../../data'

export default function SocialHandles() {
  return (
    <div className='flex social__handles'>
        {
            socialHandles.map((handle, index) => (
                <a href={handle.link} target='_blank' className='flex__center icon__container' key={index}>
                    {handle.icon}
                </a>
            ))
        }
    </div>
  )
}
