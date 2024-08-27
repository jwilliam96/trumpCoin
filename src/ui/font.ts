import { Oswald } from 'next/font/google'

// If loading a variable font, you don't need to specify the font weight
export const texto = Oswald({
    subsets: ['latin'],
    display: 'swap',
    weight: ["200", "300", "400"]
})