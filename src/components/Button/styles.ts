import { tv, type VariantProps } from "tailwind-variants"

export const styles = tv({
  base: "px-4 py-2 rounded-md bg-white text-zinc-800",
  variants: {
    schema: {
      default: "bg-white text-zinc-800",
      success: "bg-green-500 text-white",
      error: "bg-red-500 text-white"
    }
  }
})

export type ButtonVariants = VariantProps<typeof styles>