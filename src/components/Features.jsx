import React from 'react'

const Features = () => {
  return (
    <div
      className={
        'px-6 py-12 relative sm:p-8 sm:py-16 md:px-16 md:py-20 lg:px-24 lg:p-24 overflow-hidden space-y-12'
      }
    >
      <img
        src='/features.png'
        className={
          'absolute inset-0 -z-10 select-none brightness-50'
        }
        alt={''}
      />
      <h1 className='z-20 text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-6xl 2xl:max-w-6xl text-center max-w-5xl  mx-auto pb-2 font-inter font-black text-blue-100'>
        <span
          className={
            'font-black underline decoration-blue-800 decoration-8 underline-offset-[12px]'
          }
        >
          {' '}
          Everything
        </span>{' '}
        you need is here
      </h1>
      <div className='relative h-full sm:grid grid-cols-[repeat(auto-fit,minmax(325px,1fr))] max-w-5xl mx-auto py-12  space-y-8 sm:space-y-0 sm:gap-8'>
        <div
          className={
            'bg-gradient-to-tr from-black/60 sm:from-neutral-950 flex flex-col justify-between max-w-xl mx-auto from-85% to-5% sm:to-blue-700/50 border border-neutral-800 rounded-md opacity-90 hover:brightness-125 transition-[filter] p-8'
          }
        >
          <div className={'text-neutral-400'}>Mode</div>
          <h3
            className={
              'text-2xl sm:text-3xl md:text-4xl tracking-tight mt-4 mb-2 font-semibold max-w-xs xl:max-w-sm text-white'
            }
          >
            Dark mode, that's what you want
          </h3>{' '}
          <p className={'text-neutral-300'}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, nemo.
          </p>
          <a
            href={`/#blocks`}
            className={
              'flex justify-between items-center bg-blue-600 hover:bg-blue-700 rounded-md transition-all mt-12 pl-8 pr-4 py-4 text-white'
            }
          >
            <span className='flex'>Show Blocks</span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-7 h-7'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75'
              />
            </svg>
          </a>
        </div>
        <div
          className={
            'flex flex-col justify-between max-w-xl mx-auto  bg-gradient-to-tr from-blue-700/70  to-violet-700/70 rounded-md transition-[filter] p-8'
          }
        >
          <div className={'text-neutral-300'}>Feature</div>
          <h3
            className={
              'text-2xl sm:text-3xl md:text-4xl tracking-tight mt-4 mb-2 font-semibold max-w-xs xl:max-w-sm text-white'
            }
          >
            Support LTR and RTL class
          </h3>{' '}
          <p className={'text-neutral-300'}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, nemo.
          </p>
          <a
            href={`/#blocks`}
            className={
              'flex justify-between items-center bg-neutral-100 hover:bg-white rounded-md transition-all mt-12 pl-8 pr-4 py-4 text-neutral-700'
            }
          >
            <span className='flex'>Show Blocks</span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-7 h-7'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75'
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Features
