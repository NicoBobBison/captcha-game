import './Window.css'
import Level1 from './captcha/Level1.tsx'
import Level2 from './captcha/Level2.tsx'
import Level3 from './captcha/Level3.tsx'
import Level4 from './captcha/Level4.tsx'
import Poly from './captcha/Poly.tsx'
import Waldo from './captcha/Waldo.tsx'
import { useState } from 'react'
import { SpeechRecognition } from './captcha/SpeechRecognition.tsx'
import { RotatingEmail } from './captcha/RotatingEmail.tsx'

interface Props {
    fade: string;
    username: string;
}

function Window(props: Props) {
    const [success, setSuccess] = useState(false);
    const [index, setIndex] = useState(0);
    const [showFailureMessage, setShowFailureMessage] = useState(false);

    const [p, setP] = useState("");
    const [l, setL] = useState("");

    const levels = [
        <Waldo setL={setL} setP={setP} setSuccess={setSuccess}/>,
        <Poly setL={setL} setP={setP} setSuccess={setSuccess} />,
        <RotatingEmail setL={setL} setP={setP} setSuccess={setSuccess} username={props.username} />,
        <SpeechRecognition setL={setL} setP={setP} setSuccess={setSuccess} index={0} />,
        <SpeechRecognition setL={setL} setP={setP} setSuccess={setSuccess} index={1} />,
        <SpeechRecognition setL={setL} setP={setP} setSuccess={setSuccess} index={2} />,
        <SpeechRecognition setL={setL} setP={setP} setSuccess={setSuccess} index={3} />,
        <Level1 setL={setL} setP={setP} setSuccess={setSuccess}/>,
        <Level2 setL={setL} setP={setP} setSuccess={setSuccess}/>,
        <Level3 setL={setL} setP={setP} setSuccess={setSuccess}/>,
        <Level4 setL={setL} setP={setP} setSuccess={setSuccess}/>
    ]

    const handleVerifyClick = () => {
        if (success) {
            if (index < levels.length - 1) {
                setIndex(index + 1);
            } else {
                alert("End of levels, direct to leaderboard");
            }
        } else {
            setShowFailureMessage(true);

            setTimeout(() => {
                setShowFailureMessage(false);
            }, 2000);
        }
    };

    return (
        <div className={"window " + props.fade}>
            <header className="title">
                <p>{p}</p>
                <h2>{l}</h2>
            </header>

            <main className="content">
                {levels[index]}
            </main>

            {showFailureMessage && (
                <div className="failure-message">
                    Please try again
                </div>
            )}

            <footer>
                <div className="verify" onClick={handleVerifyClick}>
                    Verify
                </div>
            </footer>
        </div>
    );
}

export default Window;
