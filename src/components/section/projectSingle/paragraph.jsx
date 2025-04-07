import React from 'react'

const Paragraph = ({content}) => {
    return (
        <div className='container sm:py-30 py-16'>
            <div className='relative after:absolute sm:after:-left-12.5 after:-left-5 after:top-1/2 after:-translate-y-1/2 after:w-[1px] sm:after:h-[130%] after:h-[115%] after:bg-primary sm:ml-12.5 ml-5 max-w-[895px]'>
                <p className='text-primary-foreground lg:pr-4'>{content}</p>
            </div>
        </div>
    )
}

export default Paragraph