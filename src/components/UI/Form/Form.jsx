import React, { useRef, useState } from "react";

import Button from "../Button/Button";

import classes from "./Form.module.css";

import emailjs from "@emailjs/browser";

//icons
import { UilCheckCircle, UilMultiply } from "@iconscout/react-unicons";

export default function Form({ send }) {
  const [success, setSuccess] = useState();

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_usi4sqd", "template_fh16k5o", form.current, {
        publicKey: "dY4Ajk2IGCmaO5nkj",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setSuccess(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setSuccess(false);
        }
      );
  };

  function Feedback({ message }) {
    return (
      <>
        <div className={classes.successContainer}>
          <div className={classes.success}>
            {success ? (
              <UilCheckCircle size="100" color="#04AB45" />
            ) : (
              <UilMultiply size="100" color="#FF0000" />
            )}
          </div>
          <p>{message}</p>
        </div>
      </>
    );
  }

  function ContactForm() {
    return (
      <>
        <form ref={form} onSubmit={sendEmail}>
          <div className={classes.form_grid}>
            <div className={classes.name}>
              <input type="text" placeholder="Name:" name="name" />
            </div>
            <div className={classes.email}>
              <input type="email" placeholder="Email:" name="email" />
            </div>
            <div className={classes.subject}>
              <input type="text" placeholder="Subject:" />
            </div>
            <div className={classes.message}>
              <textarea
                name="message"
                id="commentss"
                cols="30"
                rows="10"
                placeholder="Message:"
              ></textarea>
            </div>
          </div>
          <div>
            <Button type="submit">Send Message</Button>
          </div>
        </form>
      </>
    );
  }
  console.log(success);
  return (
    <>
      {success === undefined ? (
        <ContactForm />
      ) : (
        <Feedback
          message={
            success
              ? "Email sent, I'll get back to you soon!"
              : "Ops, something went wrong, please send an email to: jcamposp10@gmail.com"
          }
        />
      )}
    </>
  );
}
