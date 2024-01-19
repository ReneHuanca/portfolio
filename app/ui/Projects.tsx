import Image from 'next/image'
import ProjectIconsList from './ProjectIconsList'
import { AlpineIcon, ChatgptIcon, LaravelIcon, ReactIcon, SvelteIcon, TailwindCSSIcon, GitHubIcon, LinkIcon } from './Icons'
import { type Project } from './../types'
import { OutlineButton } from './Buttons'
import { raleway, poppins } from './fonts'

export const TECNOLOGIES = {
  react: {
    name: 'React',
    icon: <ReactIcon classes='w-6 h-6' />
  },
  chatGPT: {
    name: 'ChatGPT',
    icon: <ChatgptIcon classes='w-6 h-6' />
  },
  tailwindCSS: {
    name: 'TailwindCSS',
    icon: <TailwindCSSIcon classes='w-6 h-6' />
  },
  laravel: {
    name: 'Laravel',
    icon: <LaravelIcon classes='w-6 h-6' />
  },
  alpinejs: {
    name: 'Laravel',
    icon: <AlpineIcon classes='w-6 h-6' />
  },
  svelte: {
    name: 'Svelte',
    icon: <SvelteIcon classes='w-6 h-6' />
  }
}

const projects: Project[] = [
  {
    title: 'Beauty Salon',
    description: 'App para un salon de belleza backend y frontend.',
    image: 'beauty-salon-api-thumbnail.png',
    technologies: [
      TECNOLOGIES.react,
      TECNOLOGIES.laravel
    ],
    githubUrl: 'https://github.com/renehuanca/beauty-salon-api',
    liveUrl: ''
  },
  {
    title: 'Aprende Ingles Tecleando',
    description: 'Mejora tus hailidades de ingles escribiendo.',
    image: 'aprende-ingles-tecleando-thumbnail.png',
    technologies: [
      TECNOLOGIES.react,
      TECNOLOGIES.tailwindCSS
    ],
    githubUrl: 'https://github.com/renehuanca/aprende-ingles-tecleando',
    liveUrl: 'https://renehuanca.github.io/aprende-ingles-tecleando/'
  },
  {
    title: 'Google Translate Clone',
    description: 'Un clon de Google Translate usando useReducer de react.',
    image: 'google-translate-clone-thumbnail.png',
    technologies: [
      TECNOLOGIES.react,
      TECNOLOGIES.chatGPT,
      TECNOLOGIES.tailwindCSS
    ],
    githubUrl: 'https://github.com/renehuanca/google-translate-clone',
    liveUrl: 'https://renehuanca.github.io/google-translate-clone/'
  },
  {
    title: 'Restaurant Reservations',
    description: 'Sitio web para realizar reservas a un restaurante.',
    image: 'restaurant-reservation-app-dark.png',
    technologies: [
      TECNOLOGIES.laravel,
      TECNOLOGIES.alpinejs,
      TECNOLOGIES.tailwindCSS
    ],
    githubUrl: 'https://github.com/renehuanca/restaurant-reservation-app',
    liveUrl: 'https://restaurant-reservation-app-production.up.railway.app/'
  },
  {
    title: 'Image to Sepia Converter',
    description: 'Conversor de imágenes a un estilo sepia con Cloudinary.',
    image: 'image-to-sepia-thumbnail.png',
    technologies: [
      TECNOLOGIES.svelte,
      TECNOLOGIES.tailwindCSS
    ],
    githubUrl: 'https://github.com/renehuanca/image-to-sepia',
    liveUrl: 'https://renehuanca.github.io/image-to-sepia/'
  }
  // {
  //   title: 'Memory Game',
  //   description: 'Memory game with cards for anime fans.',
  //   image: '/images/retaku-app-thumbnail.png',
  //   technologies: [
  //     TECNOLOGIES.laravel,
  //     TECNOLOGIES.alpinejs,
  //     TECNOLOGIES.tailwindCSS
  //   ],
  //   githubUrl: 'https://github.com/renehuanca/retaku-ap',
  //   liveUrl: 'phttps://retaku-app.onrender.com'
  // }
]

export default function Projects() {
  return (
    <section className='max-w-5xl w-full mx-auto pt-16 md:pt-[80px] px-4 flex flex-col' id='Projects'>
      <h2 className={`${poppins.className} text-3xl md:text-4xl dark:text-gray-300 font-medium`}>PROYECTOS</h2>
      <div className='mt-8 md:mt-16 grid sm:grid-cols-2 gap-4 lg:grid-cols-3 justify-center'>
        {projects.map((project) => (
          <article key={project.title} className='w-80 bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden'>
            <Image
              src={`/img/${project.image}`}
              alt='nextjs'
              width={450}
              height={350}
              className='object-cover object-top h-[200px]'
            />
            <div className='py-4 px-6'>
              <h3 className='text-lg font-medium text-gray-800 dark:text-white'>
                <a href={project.liveUrl} className={`${poppins.className} hover:text-primary`} target='_blank'>
                  {project.title}
                  <LinkIcon classes='ml-1' />
                </a>
              </h3>
              <p className={`${raleway.className} mt-2 text-gray-600 dark:text-gray-400 text-base`}>
                {project.description}
              </p>
              <ProjectIconsList technologies={project.technologies} />
              <div className='mt-8 flex justify-end'>
                <a href={project.githubUrl} target='_blank'>
                  <OutlineButton>
                    <GitHubIcon classes='mr-2 dark:invert' />
                    Github
                  </OutlineButton>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
