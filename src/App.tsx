import { Heading } from './components/Heading';
import './styles/global.css';
import './styles/theme.css';

function App() {

    function teste() {
        console.log('teste');
    }
    teste();

  return (
    <>
      <Heading> Olá mundo </Heading>
      <p>Teste</p>
    </>
  )

}

export default App
