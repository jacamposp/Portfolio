import Skills from './Skills'

import classes from "./AboutMe.module.css";
import Table from './Table';

export default function AboutMe() {
  return (
    <>
      <section className={`whitebg`} id='about'>
        <div className={`container`}>
          <div className={classes.AboutMeContainer}>
            <div className={classes.AboutMe}>
            <p className={classes.AboutMeSubtitle}>I am a web developer</p>
              <h3 className={classes.AboutMeTitle}>About Me</h3>
              <p>
                My name is Joel, a passionate software developer with over 5
                years of experience specializing in web development. My focus
                lies in accessibility projects, React, and website maintenance.
              </p>
              <p>
                I possess strong skills in technologies such as React, HTML,
                jQuery, CSS, among others. My work experience has been in agile
                teams, highlighting my ability to collaborate efficiently.
              </p>
              <p>
                If you're looking for professionalism, dedication, and a
                constant desire for improvement in the field, you can count on
                me to bring value to your project!
              </p>
            </div>
            <Skills/>
          </div>
          <div>
            <Table/>
          </div>
        </div>
      </section>
    </>
  );
}
