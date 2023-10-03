import React from 'react'

export default function SocialItems({Icons}) {
  return (
    <div className='text-white mb-3'>
      {
        Icons.map((icon) => (
          <span key={icon.name} className='p-2 cursor-pointer inline-flex items-center rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 duration-300'>
            <ion-icon name={icon.name}></ion-icon>
          </span>
        ))
      }
    </div>
  )
}
