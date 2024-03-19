import classes from "./AboutMe.module.css";

import aboutmeimg from "../../assets/aboutme.svg";

export default function Table() {
  return (
    <>
      <div className={classes.tableContainer}>
        <div>
          <div>
            <h3>Experience</h3>
          </div>
          <div className={classes.dataContainer}>
            <div className={classes.dataItemContainer}>
              <div className={classes.dataItem}>
                <div>
                  <div className={classes.year}>3M</div>
                  <div>2019 - Today</div>
                </div>
              </div>
              <div className={classes.dataItem}>
                <div className={classes.jobTitle}>Web Developer</div>
                <div className={classes.description}>
                  Build and maintain critical components used in 3M.com page.
                  Work closely with agile teams to implement and advocate for
                  best practices in web accessibility.
                </div>
              </div>
            </div>
            <div className={classes.dataItemContainer}>
              <div className={classes.dataItem}>
                <div>
                  <div className={classes.year}>Bosch</div>
                  <div>2018 - 2019</div>
                </div>
              </div>
              <div className={classes.dataItem}>
                <div className={classes.jobTitle}>Junior Developer</div>
                <div className={classes.description}>
                  Led, designed and built the new email tracker tool for the
                  company used in 3 countries.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h3>Education</h3>
          </div>
          <div className={classes.dataContainer}>
            <div className={classes.dataItemContainer}>
              <div className={classes.dataItem}>
                <div>
                  <div className={classes.year}>Bachelor</div>
                  <div>2020 - 2026</div>
                </div>
              </div>
              <div className={classes.dataItem}>
                <div className={classes.jobTitle}>Computer Science</div>
                <div className={classes.description}>
                  Designed, developed, and implemented software products for
                  local computers, web, or mobile devices that responded to the
                  environment's needs and international parameters of good
                  practices, aiming to maximize business performance.
                </div>
              </div>
            </div>
            <div className={classes.dataItemContainer}>
              <div className={classes.dataItem}>
                <div>
                  <div className={classes.year}>Course</div>
                  <div>2023</div>
                </div>
              </div>
              <div className={classes.dataItem}>
                <div className={classes.jobTitle}>UX Full Stack</div>
                <div className={classes.description}>
                  Learned why experience design and user-centered design is the
                  right way to design, not just products and services, but to
                  transform entire businesses and improve people's lives.
                </div>
              </div>
            </div>
            <div className={classes.dataItemContainer}>
              <div className={classes.dataItem}>
                <div>
                  <div className={classes.year}>Technician</div>
                  <div>2016 - 2018</div>
                </div>
              </div>
              <div className={classes.dataItem}>
                <div className={classes.jobTitle}>Software Development</div>
                <div className={classes.description}>
                  Learned to design, implement, and analyze solutions to
                  problems that arise in everyday life - with computers.
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div>
          <div>
            <img src={aboutmeimg} alt="Memoji apple" />
          </div>
        </div> */}
      </div>
    </>
  );
}
