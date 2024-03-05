import Form from "../UI/Form/Form";

import classes from "./ContactMe.module.css";

//icons
import { UilPhone, UilEnvelope } from "@iconscout/react-unicons";

export default function ContactMe() {
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
                <Form />
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
      </section>
    </>
  );
}
