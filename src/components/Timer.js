import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { pageTransition } from './styles/pageTransition';
import { CSSTransition } from 'react-transition-group';
import Countdown from 'react-countdown';
import { AiOutlineClockCircle } from 'react-icons/ai';



export default function Timer() {

    const [ timerCompleted, setTimerCompleted ] = useState(false);
    const [ animationCompleted, setAnimationCompleted ] = useState(false);
    const [ nextPage, setNextPage ] = useState(false);

    const CountdownLayout = ({days, hours, minutes, seconds}) => {

        const timerFilter = (value) => {
            if (value < 10) return "0" + value;
            else return value;
        }

        return(
            <div className="timer-table">
                <section>
                    <p>{timerFilter(days)}</p>
                    <small>DAYS</small>
                </section>
                <section>
                    <p>{timerFilter(hours)}</p>
                    <small>HOURS</small>
                </section>
                <section>
                    <p>{timerFilter(minutes)}</p>
                    <small>MINUTES</small>
                </section>
                <section>
                    <p>{timerFilter(seconds)}</p>
                    <small>SECONDS</small>
                </section>
            </div>
        );
    }

    return(
        <motion.div className="timer" exit="out" animate="in" initial="out" variants={pageTransition}>
            <h1 className="timer-logo"><AiOutlineClockCircle /></h1>
            <h2 className="timer-title">JUST...</h2>
            <CSSTransition
                in={!timerCompleted}
                timeout={300}
                classNames="slide"
                mountOnEnter
                unmountOnExit
                onExited={() => setAnimationCompleted(true)}
            >
                <Countdown
                    date={new Date("Dec 25, 2021  00:00:00").getTime()}
                    renderer={CountdownLayout}
                    onComplete={() => setTimerCompleted(true)}
                />
            </CSSTransition>
            <CSSTransition
                in={animationCompleted}
                timeout={300}
                classNames="popup"
                mountOnEnter
                unmountOnExit
                onEntered={() => setTimeout(() => {
                    setNextPage(true)
                }, 2000)}
            >
                <section className="timer-complete"><h2>Completed !</h2></section>
            </CSSTransition>
            <p className="last-text">Wait a few moments only. A surprise is waiting for you</p>
            {nextPage && <Navigate to="/happybirthday/page-01" />}
        </motion.div>
    );
}