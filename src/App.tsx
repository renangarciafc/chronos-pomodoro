import { Container } from './components/Container/index';
import { CountDown } from './components/CountDown/CountDown';
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
                <Menu />
            </Container>

            <Container>
                <CountDown />
            </Container>

            <Container>
                <form className='form' action="">
                    <div className="formRow">
                        <label htmlFor="task">Task</label>
                        <input type="text" id="task" />
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
