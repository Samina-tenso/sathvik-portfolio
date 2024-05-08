import React from 'react'
import CustomLink from './CustomLink'

const Card = ({ title, content, url }) => {
    return (
        <div>
            <div className='flex flex-row justify-end mb-4'>  <CustomLink url={''} label={'Go to blog post'} /></div>

            <div className=' h-full grid grid-cols-2 pb-10  '>
                <h3 className='text-h2 pb-6 font-light '>{title} </h3>
                <p className='text-par ml-auto mb-4'>{content}</p>

            </div>
        </div>

    )
}

export default Card