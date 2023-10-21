import ReactDOM from 'react-dom/client';
import { extendTheme, ChakraProvider } from '@chakra-ui/react';
import { colors, sizes } from './theme.ts';
 import { Input } from './input.ts';
import App from './App.tsx'
import './index.css'

const theme = extendTheme({
  colors,
  sizes,
  components: { Input },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>,
)
