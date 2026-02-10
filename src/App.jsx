import './App.css'
import { Banner } from './components/BannerCSS/Banner'

//1. Crear una función, darle el nombre y exportar
//2. Retornar html
//3. Agregar logica de javascript (si es necesario)

const App = () => {
  return (
    <div className='banners'>
      <Banner title='Get 500 coins by referring' button='Refer a friend'subtitle='Games are fun with friends!' cancelButton='Cancel'/>
      
      <Banner subtitle='hola' title='adios' button='chau' />
    </div>
  )
}
//<Card title="hola"></Card> //Web component

export default App