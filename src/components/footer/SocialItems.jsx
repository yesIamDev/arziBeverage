import React from 'react'

export default function SocialItems({Icons}) {
  return (
    <div className='text-white mb-3'>
      {
        Icons.map((icon) => (
          <span key={icon.name} className=' cursor-pointer inline-flex items-center rounded-ful mx-1.5 text-3xl hover:text-gray-100 duration-300'>
            <ion-icon name={icon.name}></ion-icon>
          </span>
        ))
      }
    </div>
  )
}
