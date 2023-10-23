import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'
const code = `
import gsap from 'gsap'

import { useEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin'
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

import {
  SiTailwindcss,
  SiReact,
  SiPreact,
  SiAstro,
  SiNextdotjs
} from 'react-icons/si'
const Header = () => {
  const app = useRef(null)

  useEffect(() => {
    let ctx = gsap.context(() => {}, app)

    return () => ctx.revert()
  }, [])

  return (
    <div className='overflow-hidden bg-black'>
      <div className='absolute z-20   left-64 flex items-center justify-center flex-col gap-2 opacity-50 top-full 2xl:top-1/2 rotate-12 -translate-x-1/2 -translate-y-1/2'>
        <span className='block px-6 py-1 bg-gradient-to-r from-neutral-700/70 backdrop-blur-md to-neutral-700/70 border border-neutral-400 text-white z-20 rounded-full'>
          Best SSG framework
        </span>
        <SiAstro className='w-32 h-32 fill-neutral-600 relative top-2' />
      </div>
      <div className='relative z-10 overflow-hidden'>
        <img
          src='/pattern1.png'
          className={
            '-z-10 absolute opacity-60 w-full select-none object-cover h-full'
          }
          alt={''}
        />
        {/* <div className='absolute left-1/2 top-96 z-10 w-10/12 -tranneutral-x-1/2 -tranneutral-y-1/2 h-[50rem]  rotate-12 opacity-60 blur-[144px]'></div> */}
        <div className='max-w-7xl mx-auto flex flex-col z-20'>
          <div className='px-8 py-56'>
            <div className={'relative'}>
              <div className='flex flex-col justify-center items-center'>
                <div
                  class={
                    'p-[1px] mb-8 relative bg-gradient-to-tr from-blue-700 to-violet-600 border border-neutral-400 border-dashed rounded-full'
                  }
                >
                  <span className='block px-6 py-1  z-20 rounded-full text-white'>
                    Turwind 1.0 now released!
                  </span>
                </div>
                <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl  2xl:text-7xl 2xl:max-w-6xl text-center max-w-5xl  pb-2  font-inter font-black text-white'>
                  We created the modern UI blocks for you
                </h1>
                <p className='max-w-2xl  text-2xl mt-6 mb-8 text-neutral-200 font-sans font-thin text-center mx-auto'>
                  Quaerat, commodi accusamus! Quibusdam deserunt dolorem nemo
                  esse? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Est, voluptates.
                </p>
                <div className='hidden sm:flex h-16 w-full max-w-2xl mx-auto'>
                  <button className='rounded-l-full bg-blue-600 text-white border border-blue-700 px-12 hover:bg-blue-800 transition-colors font-medium'>
                    Get Started
                  </button>
                  <input
                    type='text'
                    className='w-full flex-1 bg-blue-950/40 h-full rounded-r-full border-l-0 placeholder:text-blue-400 text-neutral-200 outline-none px-6'
                    placeholder='...'
                  />
                </div>
              </div>
            </div>

            <div className='mt-6 md:mt-12 w-full'>
              <h3 className='text-center text-2xl text-white/20 font-black mb-4'>
                {' '}
                powered by{' '}
              </h3>
              <div className='flex justify-center items-center gap-4 text-4xl sm:text-4xl text-white opacity-30 hover:opacity-100 transition-opacity'>
                <SiAstro />
                <SiReact />
                <SiTailwindcss />
                <SiPreact />
                <SiNextdotjs />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          'px-6 py-12 sm:p-8 sm:py-16 md:px-16 md:py-20 lg:px-24 lg:p-24 overflow-hidden features-pattern space-y-12'
        }
      >
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-6xl 2xl:max-w-6xl text-center max-w-5xl  mx-auto pb-2 font-inter font-black text-white'>
          <span
            className={
              'font-black underline decoration-neutral-800 decoration-8 underline-offset-[12px]'
            }
          >
            {' '}
            Everything
          </span>{' '}
          you need is here
        </h1>
        <div className='h-full sm:grid grid-cols-[repeat(auto-fit,minmax(325px,1fr))] max-w-5xl mx-auto py-12  space-y-8 sm:space-y-0 sm:gap-8'>
          <div
            className={
              'bg-gradient-to-tr from-black sm:from-neutral-950/70 flex flex-col justify-between max-w-xl mx-auto from-85% to-5% sm:to-black border border-neutral-800 rounded-md opacity-90 hover:brightness-125 transition-[filter] p-8'
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
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex,
              nemo.
            </p>
            <a
              href={"#blocks"}
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
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex,
              nemo.
            </p>
            <a
            href={"#blocks"}
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
    </div>
  )
}

export default Header

`
const Block = () => {
  return (
    <div className={'bg-white h-64'}>
      <SyntaxHighlighter language='javascript' style={atomDark}>
        {code}
      </SyntaxHighlighter>
    </div>
  )
}

export default Block
