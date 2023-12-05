import { type Tecnology } from './../types'

interface Props {
  technologies: Tecnology[]
}

export default function ProjectIconsList({ technologies }: Props) {
  return (
    <div className='flex items-center gap-2 mt-4'>
      {technologies.map((technology, index) => (
        <div key={index} className='flex items-center gap-2'>
          {technology.icon}
        </div>
      ))}
    </div>
  )
}
