import { Container } from './components/Container/index';
import { Heading } from './components/Heading/index';
import { Logo } from './components/Logo/index';
import { Menu } from './components/Menu/index';
import './styles/global.css';
import './styles/theme.css';

function App() {

    function teste() {
        console.log('teste');
    }
    teste();

    return (
        <>
            <Container>
                <Heading>
                    <Logo>Chronos</Logo>
                </Heading>
            </Container>

            <Container>
                <Heading><Menu/></Heading>
            </Container>

            <Container>
                <Heading>CONTENT</Heading>
            </Container>
        </>
    )

}

export default App
