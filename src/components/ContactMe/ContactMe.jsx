import Button from "../UI/Button";

import classes from "./ContactMe.module.css";

//icons
import { UilPhone, UilEnvelope } from '@iconscout/react-unicons'

export default function ContactMe() {
  return (
    <>
      <section className="greybg">
        <div className={"container"}>
          <div>
            <div>
              <h3> Get In Touch!</h3>
              <p>Lets Discuss Your Project</p>
            </div>
            <div className={classes.form_container}>
              <div className={classes.formBg}>
                <form action="">
                  <div className={classes.form_grid}>
                    <div className={classes.name}>
                      <input type="text" placeholder="Name:" />
                    </div>
                    <div className={classes.email}>
                      <input type="text" placeholder="Email:" />
                    </div>
                    <div className={classes.subject}>
                      <input type="text" placeholder="Subject:" />
                    </div>
                    <div className={classes.message}>
                      <textarea
                        name="comments"
                        id="commentss"
                        cols="30"
                        rows="10"
                        placeholder="Message:"
                      ></textarea>
                    </div>
                  </div>
                  <div>
                    <Button>Send Message</Button>
                  </div>
                </form>
              </div>
              <div className={classes.info_container}>
                <div style={{display:"flex", flexDirection:"row", alignItems:"center", gap:"20px"}}>
                  <div><UilPhone size="20" color="#000"/></div>
                  <div>
                    <h5>Phone</h5>
                    <a href="tel:+506 60377784">+506 6037-7784</a>
                  </div>
                </div>
                <div style={{display:"flex", flexDirection:"row", alignItems:"center", gap:"20px"}}>
                  <div><UilEnvelope size="20" color="#000"></UilEnvelope></div>
                  <div>
                    <h5>Phone</h5>
                    <a href="tel:+506 60377784">+506 6037-7784</a>
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
