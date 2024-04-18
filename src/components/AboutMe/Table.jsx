//components
import Text from "../UI/Text/Text";
//css
import classes from "./AboutMe.module.css";

export default function Table() {
  return (
    <>
      <div className={classes.tableContainer}>
        <div>
          <div>
            <Text Tag={"h3"}>Experience</Text>
          </div>
          <div className={classes.dataContainer}>
            <div className={classes.dataItemContainer}>
              <div className={classes.dataItem}>
                <div>
                  <div className={classes.year}>
                    <Text Tag={"p"}>Joe dev</Text>
                  </div>
                  <div>
                    <Text Tag={"p"}>2023 - today</Text>
                  </div>
                </div>
              </div>
              <div className={classes.dataItem}>
                <div className={classes.jobTitle}>
                  <Text Tag={"p"}>Freelancer Developer</Text>
                </div>
                <div className={classes.description}>
                  <Text Tag={"p"}>
                    Designed and develop high quality apps based on clients
                    requirements using react as main tool.
                  </Text>
                </div>
              </div>
            </div>
            <div className={classes.dataItemContainer}>
              <div className={classes.dataItem}>
                <div>
                  <div className={classes.year}>
                    <Text Tag={"p"}>3M</Text>
                  </div>
                  <div>
                    <Text Tag={"p"}>2019 - Today</Text>
                  </div>
                </div>
              </div>
              <div className={classes.dataItem}>
                <div className={classes.jobTitle}>
                  <Text Tag={"p"}>Web Developer</Text>
                </div>
                <div className={classes.description}>
                  <Text Tag={"p"}>
                    Build and maintain critical components used in 3M.com page.
                    Work closely with agile teams to implement and advocate for
                    best practices in web accessibility.
                  </Text>
                </div>
              </div>
            </div>
            <div className={classes.dataItemContainer}>
              <div className={classes.dataItem}>
                <div>
                  <div className={classes.year}>
                    <Text Tag={"p"}>Bosch</Text>
                  </div>
                  <div>
                    <Text Tag={"p"}>2018 - 2019</Text>
                  </div>
                </div>
              </div>
              <div className={classes.dataItem}>
                <div className={classes.jobTitle}>
                  <Text Tag={"p"}>Junior Developer</Text>
                </div>
                <div className={classes.description}>
                  <Text Tag={"p"}>
                    Led, designed and built the new email tracker tool for the
                    company used in 3 countries.
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <Text Tag={"h3"}>Education</Text>
          </div>
          <div className={classes.dataContainer}>
            <div className={classes.dataItemContainer}>
              <div className={classes.dataItem}>
                <div>
                  <div className={classes.year}>
                    <Text Tag={"p"}>Bachelor</Text>
                  </div>
                  <div>
                    <Text Tag={"p"}>2020 - 2026</Text>
                  </div>
                </div>
              </div>
              <div className={classes.dataItem}>
                <div className={classes.jobTitle}>
                  <Text Tag={"p"}>Computer Science</Text>
                </div>
                <div className={classes.description}>
                  <Text Tag={"p"}>
                    Designed, developed, and implemented software products for
                    local computers, web, or mobile devices that responded to
                    the environment's needs and international parameters of good
                    practices, aiming to maximize business performance.
                  </Text>
                </div>
              </div>
            </div>
            <div className={classes.dataItemContainer}>
              <div className={classes.dataItem}>
                <div>
                  <div className={classes.year}>
                    <Text Tag={"p"}>Course</Text>
                  </div>
                  <div>
                    <Text Tag={"p"}>2023</Text>
                  </div>
                </div>
              </div>
              <div className={classes.dataItem}>
                <div className={classes.jobTitle}>
                  <Text Tag={"p"}>UX Full Stack</Text>
                </div>
                <div className={classes.description}>
                  <Text Tag={"p"}>
                    Learned why experience design and user-centered design is
                    the right way to design, not just products and services, but
                    to transform entire businesses and improve people's lives.
                  </Text>
                </div>
              </div>
            </div>
            <div className={classes.dataItemContainer}>
              <div className={classes.dataItem}>
                <div>
                  <div className={classes.year}>
                    <Text Tag={"p"}>Technician</Text>
                  </div>
                  <div>
                    <Text Tag={"p"}>2016 - 2018</Text>
                  </div>
                </div>
              </div>
              <div className={classes.dataItem}>
                <div className={classes.jobTitle}>
                  <Text Tag={"p"}>Software Development</Text>
                </div>
                <div className={classes.description}>
                  <Text Tag={"p"}>
                    Learned to design, implement, and analyze solutions to
                    problems that arise in everyday life - with computers.
                  </Text>
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
