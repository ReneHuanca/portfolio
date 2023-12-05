export interface Tecnology {
  name: string
  icon: React.ReactNode
}

export interface Project {
  title: string
  description: string
  image: string
  technologies: Tecnology[]
  githubUrl: string
  liveUrl: string
}
