import { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import { motion } from "framer-motion";
import { ButtonGroup, Button, Form, FormGroup } from "react-bootstrap";
import { pageTransition } from "./styles/pageTransition";

export default function Write() {

    const [ emailStatus, setEmailStatus ] = useState();

    const form = useRef();

    const sendEmail = (e) => {

        e.preventDefault();
    
        emailjs.sendForm('default_service', 'template_ne7zdb6', form.current, 'user_poWWoinK2iJ1Hp97xibOt')
          .then(() => {
            setEmailStatus("success");
          }, () => {
            setEmailStatus("failed");
        });
    }

    const EmailStatusMsg = () => {
        if (emailStatus === "success") 
            return <p className="text-primary">Submited Successfully</p>;
        else if (emailStatus === "failed")
            return <p className="text-danger">Submit Failed</p>;
        else return null;
    }

    return(
        <motion.section
            className="write"
            exit="out"
            animate="in"
            initial="out"
            variants={pageTransition}
        >
            <h2>Alu emn ekta dua koren amar jonno,, Jeta pele ami sob cheye khusi hobo..!<span>&#128522;</span></h2>
            <p>NB: Ami kintu dekhbo na ki dua krchen<span>&#128556;</span></p>
            <Form ref={form} onSubmit={sendEmail}>
                <FormGroup>
                    <Form.Label>Your Name :</Form.Label>
                    <Form.Control type="text" placeholder="E.x Shawkat Hossain Maruf" name="user_name" value="Sanjida Jahan Mridula" />
                </FormGroup>
                <FormGroup>
                    <Form.Label>Enter your text :</Form.Label>
                    <Form.Control as="textarea" type="submit" rows={5} placeholder="Ja ichha lekhen ekhane" />
                </FormGroup>
                <section className="email-status-msg"><EmailStatusMsg /></section>
                <section className="write-button">
                    <ButtonGroup>
                        <Button variant="primary" type="submit">SUBMIT</Button>
                    </ButtonGroup>
                </section>
            </Form>
        </motion.section>
    );
}