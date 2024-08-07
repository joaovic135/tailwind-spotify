import { ReactNode } from "react"
import { ButtonVariants, styles } from "./styles"

interface ButtonProps extends ButtonVariants {
  children: ReactNode
  className?: string
}

// Default branco / sucesso verde / falha vermelho

export function Button({children, schema, className}: ButtonProps){
  return(
    <button className={styles({schema, className})}>
      {children}
    </button>
  )
}