import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { pageTransition } from './styles/pageTransition';
import { Button, ButtonGroup, Card } from 'react-bootstrap';

import cardImage from './images/Card_Image.jpg'

export default function Cards() {
    return(
        <motion.section
            className="cards"
            exit="out"
            animate="in"
            initial="out"
            variants={pageTransition}
        >
            <motion.div
                initial={{ x: 70 }}
                animate={{ x: 0 }}
                out={{ x: 70 }}
                transition={{ ease: "easeOut", duration: 2 }}
            >
                <Card>
                    <Card.Body>
                        <h2>Happy Birthday MRIDULA<span>&#128525;</span></h2>
                    </Card.Body>
                </Card>
            </motion.div>
            <motion.div
                initial={{ x: -70 }}
                animate={{ x: 0 }}
                out={{ x: -70 }}
                transition={{ ease: "easeOut", duration: 2 }}
            >
                <img src={cardImage} alt="Card Pic"></img>
            </motion.div>
            <motion.div
                initial={{ x: 70 }}
                animate={{ x: 0 }}
                out={{ x: 70 }}
                transition={{ ease: "easeOut", duration: 2 }}
            >
                <Card>
                    <Card.Body>
                        <p><b>Happy Birthday to you</b>🎂 Many many returns of the day.💜</p>
                    </Card.Body>
                </Card>
            </motion.div>
            <motion.div
                initial={{ x: -70 }}
                animate={{ x: 0 }}
                out={{ x: -70 }}
                transition={{ ease: "easeOut", duration: 2 }}
            >
                <Card>
                    <Card.Body>
                        <p>On a beautiful day like today, you came to this world and lighting the house of Uncle and Aunty.👪 Really they are very lucky that they got a girl with a beautiful mind like an angel.😍 Always listen to Uncle, Aunty and Apu.😊</p>
                    </Card.Body>
                </Card>
            </motion.div>
            <motion.section
                initial={{ x: 70 }}
                animate={{ x: 0 }}
                out={{ x: 70 }}
                transition={{ ease: "easeOut", duration: 2 }}
            >
                <ButtonGroup><Button variant="success"><Link to="/happybirthday/page-03">Get Your Birthday Cake</Link></Button></ButtonGroup>
            </motion.section>
        </motion.section>
    );
}