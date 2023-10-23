import {
  SiTailwindcss,
  SiReact,
  SiPreact,
  SiAstro,
  SiNextdotjs
} from 'react-icons/si'
const Header = () => {
  return (
    <>
      <div className='absolute z-20   left-80 flex items-center justify-center flex-col gap-2 opacity-50 top-full 2xl:top-1/2 rotate-12 -translate-x-1/2 -translate-y-1/2'>
        <span className='block px-6 py-1 bg-gradient-to-r from-neutral-700/70 backdrop-blur-md to-neutral-700/70 border border-neutral-400 text-white z-20 rounded-full'>
          Best SSG framework
        </span>
        <SiAstro className='w-32 h-32 fill-neutral-600 relative top-2' />
      </div>
      <div className='relative z-10 overflow-hidden bg-black'>
        <img
          src='/header.svg'
          className={
            '-z-10 absolute  w-full select-none opacity-75 object-cover h-full'
          }
          alt={''}
        />{' '}
        <div className='max-w-7xl mx-auto flex flex-col z-20'>
          <div className='flex z-50 backdrop-blur-lg rounded-full justify-between items-center h-24 p-8 container mx-auto'>
            <h1 className='text-3xl text-white  bg-clip-text text-transparent bg-gradient-to-tr from-blue-200 font-noto to-white font-black'>
              TurwindUI
            </h1>
            <div className='flex'>
              <button className='text-white px-6 py-3 border bg-blue-950 border-blue-800 rounded-full active:bg-opacity-75'>
                Send Feedback
              </button>
            </div>
          </div>
          <div className='px-8 pt-28 pb-36'>
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
                <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl  2xl:text-[5rem] tracking-tight 2xl:max-w-6xl text-center max-w-5xl  pb-2  font-noto font-black text-white'>
                  We created the modern UI blocks for you
                </h1>
                <p className='max-w-2xl font-noto  text-2xl mt-6 mb-8 text-neutral-200 font-thin text-center mx-auto'>
                  Quaerat, commodi accusamus! Quibusdam deserunt dolorem nemo
                  esse? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Est, voluptates.
                </p>
                <div className='hidden sm:flex h-16 w-full max-w-2xl mx-auto'>
                  <button className='rounded-l-full bg-white text-blue-700 border border-blue-950 hover:text-white px-12 hover:bg-blue-700 transition-colors font-medium'>
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
                powered with{' '}
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
    </>
  )
}

export default Header
