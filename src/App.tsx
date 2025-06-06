import { TimerIcon } from 'lucide-react';
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
            <Heading>
                teste
                <button>
                    <TimerIcon />
                </button>
                <button>
                    <TimerIcon />
                </button>
                <button>
                    <TimerIcon />
                </button>
                <button>
                    <TimerIcon />
                </button>
            </Heading>
        </>
    )

}

export default App
