import { poppins } from './fonts'

const aboutMe = [
  'Apasionado por el desarrollo web.',
  'Con experiencia en proyectos individuales.',
  'Partidario de las buenas prácticas, principios SOLID, minimalismo y dark mode.',
  'Me gusta compartir los conocimientos que tengo mediante mi blog.',
  'Siempre dispuesto a recibir y dar Feedback.'
]

export default function About() {
  return (
    <section className='max-w-5xl w-full mx-auto pt-16 md:pt-[80px] px-4 flex flex-col' id='About'>
      <h2 className={`${poppins.className} text-3xl md:text-4xl dark:text-gray-300 font-medium`}>SOBRE MÍ</h2>
      <div className='w-full p-4 md:px-10 md:py-8 bg-gray-100 dark:bg-gray-800 rounded-xl mt-8 md:mt-16'>
        <ul className='list-image-[url("/img/list-image.png")] ml-6 space-y-4 dark:text-textcolor'>
          {aboutMe.map((item, index) => (
            <li key={index}>
              <span className="ml-2">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
