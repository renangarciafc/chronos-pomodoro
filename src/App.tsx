import { PlayCircleIcon } from 'lucide-react';
import { Container } from './components/Container/index';
import { CountDown } from './components/CountDown/index';
import { Cycles } from './components/Cycles/index';
import { DefaultButton } from './components/DefaultButton';
import { Heading } from './components/Heading/index';
import { Input } from './components/Input/index';
import { Logo } from './components/Logo/index';
import { Menu } from './components/Menu/index';
import './styles/global.css';
import './styles/theme.css';
import { Footer } from './components/Footer';

function App() {
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
                        <Cycles />
                    </div>

                    <div className="formRow">
                        <DefaultButton icon={<PlayCircleIcon />} />
                    </div>
                </form>
            </Container>

            <Container>
                <Footer />
            </Container>
        </>
    )

}

export default App
