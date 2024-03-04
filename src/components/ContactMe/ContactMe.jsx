import React, { useRef } from "react";

import Button from "../UI/Button";

import classes from "./ContactMe.module.css";

import emailjs from "@emailjs/browser";

//icons
import { UilPhone, UilEnvelope } from "@iconscout/react-unicons";

export default function ContactMe() {
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
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <section className="greybg" id="contact">
        <div className={"container"}>
          <div>
            <div className={classes.titleContainer}>
              <h3>Get In Touch!</h3>
              <p>Lets Discuss Your Project</p>
            </div>
            <div className={classes.form_container}>
              <div className={classes.formBg}>
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
              </div>
              <div className={classes.info_container}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "20px",
                  }}
                >
                  <div>
                    <UilPhone size="20" color="#000" />
                  </div>
                  <div>
                    <h5>Phone</h5>
                    <a href="tel:+506 60377784">+506 6037-7784</a>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "20px",
                  }}
                >
                  <div>
                    <UilEnvelope size="20" color="#000"></UilEnvelope>
                  </div>
                  <div>
                    <h5>Email</h5>
                    <a href="mailto:jcamposp10@gmail.com">
                      jcamposp10@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p style={{ textAlign: "center" }}>Section on construction</p>
      </section>
    </>
  );
}
