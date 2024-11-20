import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles'
import PageRoutes from './routes'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <GlobalStyle />
      <PageRoutes />
      <Footer />
    </BrowserRouter>
  )
}

export default App
