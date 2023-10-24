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
      <div className='relative z-10 overflow-hidden bg-black'>
        <div className='absolute z-20  left-80 flex items-center justify-center flex-col gap-2 opacity-50 top-full 2xl:top-1/2 rotate-12 -translate-x-1/2 -translate-y-1/2'>
          <span className='block px-6 py-1 bg-gradient-to-r from-neutral-700/70 backdrop-blur-md to-neutral-700/70 border border-neutral-400 text-white z-20 rounded-full'>
            Best SSG framework
          </span>
          <SiAstro className='w-32 h-32 fill-neutral-600 relative top-2' />
        </div>
        <img
          src='/header.svg'
          className={'-z-10 absolute  w-full select-none object-cover h-full'}
          alt={''}
        />{' '}
        <div className='max-w-7xl mx-auto flex flex-col z-20'>
          <nav className='flex z-50  gap-4 rounded-full justify-between items-center h-24 p-4 xs:p-6 md:p-8 container mx-auto'>
            <h1 className='text-2xl md:text-3xl text-white font-noto font-black'>
              TurwindUI
            </h1>
            <div className='flex'>
              <button className='text-white  px-4 py-2 sm:px-6 sm:py-3 border bg-blue-600 border-blue-500 rounded-xl font-medium hover:bg-blue-700 transition-colors active:bg-opacity-75'>
                Send <br class='xs:hidden' /> Feedback
              </button>
            </div>
          </nav>
          <div className='pb-52 pt-24 px-4 xs:px-6 sm:px-8 '>
            <div className={'relative'}>
              <div className='flex flex-col justify-center items-center'>
                <div
                  class={
                    'p-[1px] mb-8 relative bg-white/20  border border-violet-400/50 rounded-full'
                  }
                >
                  <span className='block px-6 py-1  font-dm font-medium z-20 rounded-full text-white'>
                    Turwind 1.0 now released!
                  </span>
                </div>
                <h1 className='text-4xl max-w-[18rem] xs:text-5xl xs:max-w-sm sm:text-6xl sm:max-w-xl md:text-7xl md:max-w-3xl   text-center mx-auto font-noto font-black text-white'>
                  Created modern blocks with Tailwind
                </h1>
                <p className='max-w-md sm:max-w-lg lg:max-w-xl xl:max-w-3xl font-noto  text-lg sm:text-xl lg:text-2xl mt-6 mb-8 text-neutral-100 font-thin text-center mx-auto'>
                  Quaerat, commodi accusamus! Quibusdam deserunt dolorem nemo
                  esse? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Est, voluptates.
                </p>
                <div className='hidden sm:flex w-full max-w-2xl mx-auto'>
                  <button
                    className='rounded-l-3xl  mx-auto bg-primary-100  text-primary-500 border border-primary-400 
                  rounded-3xl py-4 px-12 hover:bg-white font-medium hover:shadow-none transition-all active:scale-95
                  shadow-[5px_5px_rgba(110,_111,_245,_0.75),10px_10px_rgba(110,_111,_245,_0.50),15px_15px_rgba(110,_111,_245,_0.25)]
                  '
                  >
                    Show Blocks
                  </button>
                </div>
              </div>
            </div>

            <div className='mt-6 md:mt-12 w-full'>
              <h3 className='text-center text-2xl text-primary-100 font-black mb-4'>
                {' '}
                powered with{' '}
              </h3>
              <div className='flex justify-center items-center gap-4 text-4xl sm:text-4xl text-primary-300 opacity-50 hover:opacity-100 transition-opacity'>
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
