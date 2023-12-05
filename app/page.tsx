import About from './ui/About'
import Hero from './ui/Hero'
import Projects from './ui/Projects'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <>
        <div
          className="absolute inset-x-0 -top-40 transform-gpu overflow-hidden blur-3xl sm:-top-80 sm:-left-96 hidden dark:block"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-1rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#3e3cca] to-sky-400 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
            }}
          />
        </div>
      </>
      <Hero />
      <About />
      <Projects />
    </main>
  )
}
