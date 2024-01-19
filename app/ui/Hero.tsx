import Image from 'next/image'
import { CVIcon, FigmaIcon, GitHubIcon, LaravelIcon, ReactIcon, TailwindCSSIcon } from './Icons'
import { Button, OutlineButton } from './Buttons'
import { poppins } from './fonts'

export default function Hero() {
  return (
    <section className='pt-16 md:pt-[80px] max-w-5xl w-full mx-auto md:px-4 flex flex-col-reverse md:flex-row md:justify-between items-center' id="Home">
      <div className='flex flex-col justify-center items-center md:items-start'>
        <p className='py-2 px-6 sm:mb-4 rounded-full border border-gray-500 text-xs text-gray-500' style={{ letterSpacing: '.5rem' }}>DESARROLLADOR WEB</p>
        <h1 className={`${poppins.className} text-gray-900 dark:text-primary text-4xl font-semibold md:text-6xl mt-6 md:mt-0`}>René Huanca</h1>
        <p className='mt-4 md:mt-8 dark:text-textcolor text-center md:text-left text-lg md:text-2xl max-w-md px-4 md:px-0 md:max-w-lg'>Construyendo el futuro con React: Código claro, soluciones poderosas.</p>
        <div className='flex gap-3 mt-4 md:mt-8'>
          <a href="/docs/Rene Gonzalo Huanca Mamani - CV.pdf" rel="noopener noreferrer" target={'_blank'}>
            <Button>
              <CVIcon classes='mr-2' />
              Curriculum
            </Button>
          </a>
          <a href="https://github.com/renehuanca" rel="noopener noreferrer" target={'_blank'}>
            <OutlineButton>
              <GitHubIcon classes='mr-2 dark:invert' />
              Github
            </OutlineButton>
          </a>
        </div>
      </div>
      <div className='max-w-[360px] h-[360px] w-full flex items-center justify-center mt-4 md:my-24 relative'>
        <div className='relative animate-rotate w-[254px] h-[254px] lg:w-[360px] lg:h-[360px] rounded-full border border-gray-300 dark:border-gray-700' >
          <div className=' dark:bg-transparent rounded-full absolute top-0 left-0 w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] flex items-center justify-center animate-rotateReverse pl-2'>
            <LaravelIcon classes='lg:w-[60px] lg:h-[60px]' />
          </div>
          <div className='dark:bg-transparent rounded-full absolute top-0 right-0 w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] flex items-center justify-center animate-rotateReverse'>
            <ReactIcon classes='lg:w-[60px] lg:h-[60px]' />
          </div>
          <div className='dark:bg-transparent rounded-full absolute bottom-0 left-0 w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] flex items-center justify-center animate-rotateReverse'>
            <FigmaIcon classes='w-[40px] h-[40px] lg:w-[50px] lg:h-[50px]' />
          </div>
          <div className='dark:bg-transparent rounded-full absolute bottom-0 right-0 w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] flex items-center justify-center animate-rotateReverse'>
            <TailwindCSSIcon classes='w-[40px] h-[40px] lg:w-[55px] lg:h-[55px]' />
          </div>
        </div>
        <div className="absolute w-[124px] h-[124px] lg:w-[180px] lg:h-[180px] flex justify-center items-center rounded-full bg-white dark:bg-gray-900/10 border border-gray-300 dark:border-gray-700 pl-4">
          <Image
            className="dark:drop-shadow-[0_0_0.4rem_#ffffff70]"
            src="/logo.svg"
            alt="Rene huanca Logo"
            width={64}
            height={64}
            priority
          />
        </div>
      </div>
    </section>
  )
}
