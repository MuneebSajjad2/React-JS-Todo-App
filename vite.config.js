import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // [1] Add this import

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // [2] Add this to the list
  ],
})


// export default defineConfig({
//   base: "/Todo-App-with-React-Js-Tailwind/",
// })