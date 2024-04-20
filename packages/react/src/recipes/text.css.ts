import { recipe, RecipeVariants } from '@vanilla-extract/recipes'

export const textRecipe = recipe({
  variants: {
    size: {
      xs: {
        fontSize: '0.75rem',
      },
      sm: {
        fontSize: '0.875rem',
      },
      md: {
        fontSize: '1rem',
      },
      lg: {
        fontSize: '1.125rem',
      },
      xl: {
        fontSize: '1.25rem',
      },
      xxl: {
        fontSize: '1.5rem',
      },
    },
    color: {
      black: {
        color: '#333333',
      },
    },
    link: {
      true: {
        cursor: 'pointer',
        textDecoration: 'underline',
      },
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'black',
  },
})
export type TextRecipeVariants = NonNullable<RecipeVariants<typeof textRecipe>>
