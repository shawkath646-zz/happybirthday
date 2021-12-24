import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { motion } from 'framer-motion';
import { pageTransition, fadeTransition } from './styles/pageTransition';
import Confetti from 'react-confetti';


export default function Wish() {

    const [ overlayIn, setOverlayIn ] = useState(false);
    const [ text, setText ] = useState(0);

    useEffect(() => {
        const textInterval = setInterval(() => {
            setOverlayIn(true);
        }, 5000);
        return () => clearInterval(textInterval);
    }, []);


    const LastText = () => {
        if (text === 0) return <h1>YO<span>U</span></h1>;
        else if (text === 1) return <h1>YO<span>U</span></h1>;
        else if (text === 2) return <h1>AL<span>U</span></h1>;
        else if (text === 3) return <h1>MRI<span>DU</span>LA</h1>;
        else if (text === 4) return <h1>YO<span>U</span></h1>;
        else if (text === 5) return <Navigate  to="/happybirthday/page-02" />;
    }

    return(
        <motion.div
            className="wish"
            exit="out" animate="in"
            initial="out"
            variants={pageTransition}
        >
            <CSSTransition
                in={overlayIn}
                timeout={300}
                classNames="black-overlay"
                mountOnEnter
                unmountOnExit
                onEntered={() => {
                    setText(text + 1);
                    setTimeout(() => {
                        setOverlayIn(false);
                    }, 1000)
                }}
            >
                <div className="black-overlay"></div>
            </CSSTransition>
            <Confetti />
            <motion.div className="text-section w-75 text-center" exit="out" animate="in" initial="out" variants={fadeTransition}>
                <section className="pb-2">
                    <h1><span>HA</span>PPY</h1>
                </section>
                <section className="pb-2">
                    <h1>BIR<span>TH</span>DAY</h1>
                </section>

                <section className="pb-2">
                    <h1>T<span>O</span></h1>
                </section>
                <section className="pb-2">
                    <LastText />
                </section>
            </motion.div>
        </motion.div>
    );
}