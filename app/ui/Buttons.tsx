interface ButtonProps {
  children: React.ReactNode | React.ReactNode[]
}

export function Button({ children }: ButtonProps) {
  return (
    <button type="button" className="inline-flex justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500">
      {children}
    </button>
  )
}

export function OutlineButton({ children }: ButtonProps) {
  return (
    <button type="button" className="inline-flex justify-center rounded-md px-3 py-2 text-sm font-semibold text-gray-900 dark:text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300">
      {children}
    </button>
  )
}
