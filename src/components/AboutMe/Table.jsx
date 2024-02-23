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
                <div>Web Developer</div>
                <div>Descripcion de puesto.</div>
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
                <div>Junior Developer</div>
                <div>Descripcion de puesto.</div>
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
                <div>Computer Science</div>
                <div>Descripcion de puesto.</div>
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
                <div>UX/UI</div>
                <div>Descripcion de puesto.</div>
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
                <div>Software Development</div>
                <div>Descripcion de puesto.</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <img src={aboutmeimg} alt="Memoji apple" />
          </div>
        </div>
      </div>
    </>
  );
}
