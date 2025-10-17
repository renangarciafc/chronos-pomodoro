import { Container } from './components/Container/index';
import { CountDown } from './components/CountDown/index';
import { Heading } from './components/Heading/index';
import { Input } from './components/Input/index';
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
                <Menu />
            </Container>

            <Container>
                <CountDown />
            </Container>

            <Container>
                <form className='form' action="">
                    <div className="formRow">
                        <Input
                            type="text"
                            placeholder="Enter your task"
                            id="task"
                            label="Task"
                            required
                        />
                    </div>

                    <div className="formRow">
                        <p>
                            Lorem ipsum dolor sit amet.
                        </p>
                    </div>

                    <div className="formRow">
                        <p>
                            Ciclos
                        </p>
                        <p>
                            0 0 0 0 0
                        </p>
                    </div>

                    <div className="formRow">
                        <button>Enviar</button>
                    </div>
                </form>
            </Container>
        </>
    )

}

export default App
