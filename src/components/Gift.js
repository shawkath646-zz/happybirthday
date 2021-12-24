import { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, ButtonGroup, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { pageTransition } from './styles/pageTransition';

import './styles/gift.scss';

export default function Gift() {

    const [ giftOpened, setGiftOpened ] = useState(false);

    return(
        <motion.section
            className="gift"
            exit="out"
            animate="in"
            initial="out"
            variants={pageTransition}
        >
            <Container>
            <div className="light">
                <div className="wire"></div>
                <div className="bulb">
                    <span></span>
                    <span></span>
                </div>
            </div>
                <Row>
                    <Col sm={12}>
                        <h3 className="gift-title text-center text-light my-5">Box ta open koren alu <span>&#128513;</span></h3>
                    </Col>
                    <Col sm={12} className="mt-5 d-flex justify-content-center">
                        <div className="box">
                            <div className={giftOpened ? "box-body-opened box-body" : "box-body box-body-closed"}>
                                <div className="gift-card">
                                    <p>Alu onek vabchi bujsen !<span>&#128528;</span> Kintu bujtei parchi na je ki dei.<span>&#128556;</span> Alu apnie bolen je apnar ki lagbe,,<span>&#128519;</span> Obossoi bolben naile rag krbo kintu sottie<span>&#128548;</span></p>
                                </div>
                                <div className="box-lid">
                                    <div className="box-bowtie"></div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <motion.section
                className="gift-button"
            >
                <ButtonGroup>
                    <Button variant="primary" onClick={() => setGiftOpened(!giftOpened)} disabled={giftOpened}>Open Box</Button>
                    <Button variant="success" disabled={!giftOpened}><Link to="/happybirthday/page-05">Next Page</Link></Button>
                </ButtonGroup>
            </motion.section>
        </motion.section>
    );
}