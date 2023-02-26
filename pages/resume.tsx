import { Fragment, useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import Page from "../components/Page";
import classes from "../styles/resume.module.scss";
import Head from "next/head";
import { NextPage } from "next";

const EXPERIENCES = [
  {
    id: "vxt",
    company: "VXT",
    position: "Software Engineer",
    location: "Christchurch, NZ",
    startDate: "Jun 2022",
    endDate: "Feb 2023",
    description:
      "VXT is a B2B startup that focuses on communication solutions for small- to medium-sized businesses globally. I built end-to-end integrations with various software—which included coordination with integration partners, API authorisation, database migrations, middleware and UI implementation. Additionally, I supervised a summer intern for the entire duration, and worked on several miscellaneous front-end redesigns, refactors, and rebuilds.",
  },
  {
    id: "createbase",
    company: "CreateBase",
    position: "Co-Founder & Web Dev",
    location: "Auckland, NZ",
    startDate: "Dec 2019",
    endDate: "Mar 2022",
    description:
      "CreateBase was an EdTech startup that leveraged 3D simulations and programming tools to make tech education more accessible for schools. I worked on various tasks—from customer engagement, to product design, to implementation, but primarily focused on web development. HTML/CSS/JS and React were all self-taught to develop the website and app. We won first place in NZ for Red Bull Basement 2020, a global competition for university innovation, entrepreneurship, and startup ideas.",
  },
  {
    id: "fpt",
    company: "Fisher & Paykel Technologies",
    position: "Machine Learning Intern",
    location: "Auckland, NZ",
    startDate: "Nov 2019",
    endDate: "Feb 2020",
    description:
      "I was tasked with improving prediction accuracy of horizontal-axis washing machine run times. I collaborated with the product design team to understand the sampled signal data, then preprocessed, imputed, and feature engineered using Boruta random forest, XGBoost, and lasso regression. The extracted data was used to train a deep neural network. All programmes were written in R.",
  },
  {
    id: "nthu",
    company: "National Tsing Hua University",
    position: "RL Research Assistant",
    location: "Hsinchu, TW",
    startDate: "Nov 2018",
    endDate: "Jan 2019",
    description:
      "I applied deep reinforcement learning to robotic arms for improved efficiency in precision manufacturing. The agents were trained with a deep Q-learning policy using PyTorch and simulated in CoppeliaSim (written in Lua). I implemented a server-synchronous interface between client and server using the native simulation remote API.",
  },
  {
    id: "kessler",
    company: "Kessler",
    position: "Tether Operations Crew",
    location: "Auckland, NZ",
    startDate: "Aug 2018",
    endDate: "Oct 2020",
    description:
      "Kessler is a student-run project aimed at launching a 1U CubeSat into LEO to verify the feasibility of electrodynamic tethers for rapid deorbiting. I wrote MATLAB code to calculate the power budget based on GMAT orbital simulations, and calculated accelerometer specs based on hardware, atmospheric drag, and plasma density in LEO. I also wrote the Orbital Debris Mitigation Plan for the mission.",
  },
];

const DEGREES = [
  {
    id: "msc",
    name: "Master of Science in Computer Science",
    grade: "Second class honours",
    startYear: 2021,
    endYear: 2022,
  },
  {
    id: "behons",
    name: "Bachelor of Engineering (Honours) in Engineering Science",
    grade: "First class honours (8.6/9 GPA)",
    startYear: 2017,
    endYear: 2020,
  },
];

const AWARDS = [
  {
    title: "Sir Colin Maiden Scholar",
    items: [{ label: "Dean's Leadership Programme", years: [2020] }],
  },
  {
    title: "Red Bull Basement NZ Winner",
    items: [{ label: "Global entrepreneurship competition", years: [2020] }],
  },
  {
    title: "First in Course Award",
    items: [
      { label: "COMPSCI 762", years: [2020] },
      { label: "ENGSCI 403", years: [2020] },
      { label: "ENGSCI 314", years: [2019] },
    ],
  },
  {
    title: "Dean's Honours List",
    items: [
      { label: "Faculty of Engineering", years: [2020, 2019, 2018, 2017] },
    ],
  },
];

const SKILLS = [
  "Git version control, OAuth 2.0, performance optimisation, type-checking, communication",
  ,
  "Building predictive models, data pre- and post-processing, feature engineering, statistical analysis",
  ,
  "User research, product design, rapid prototyping, graphic design, videography, film editing",
  ,
];

const TOOLS = [
  "Typescript / JavaScript",
  "NextJS / React / React Native",
  "HTML / CSS / SASS",
  "NodeJS / Express",
  "Python",
  "R",
  "MATLAB",
  "Lua",
  "Figma",
  "Photoshop",
  "Weka 3",
  "Microsoft VBA",
  "Premiere Pro",
  "After Effects",
  "Illustrator",
  "Lightroom",
];

const Resume: NextPage = () => {
  return (
    <Page>
      <Head>
        <title>Résumé - .l</title>
        <meta
          name="description"
          content="Louis Lin - Formal education in statistics and machine-learning. Self-taught in web development. Passion for design."
        />
      </Head>
      <Header />
      <main className={classes.main}>
        <h2>Bio</h2>
        <div>
          <p>
            Formal education in statistics and machine-learning. Self-taught in
            web development. Passion for design.
          </p>
          <p>
            With a degree in Engineering Science, I have spent several years on
            software-related work, such as mathematical modelling, machine
            learning, data science, and web development. Nowadays, I work on
            full-stack web development with a heavy emphasis on front-end due to
            my strength in graphic design
          </p>
        </div>
        <h2>Experience</h2>
        <div>
          {EXPERIENCES.map((exp) => (
            <div key={exp.id} className={classes.expWrapper}>
              <div className={classes.expMeta}>
                <h3>{exp.company}</h3>
                <h4>{exp.position}</h4>
                <small>{exp.location}</small>
                <small>
                  {exp.startDate}&ndash;{exp.endDate}
                </small>
              </div>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
        <h2>Education</h2>
        <div>
          <h3>The University of Auckland</h3>
          {DEGREES.map((degree) => (
            <div key={degree.id} className={classes.degreeWrapper}>
              <h4>{degree.name}</h4>
              <small>{degree.grade}</small>
              <small>
                {degree.startYear}&ndash;{degree.endYear}
              </small>
            </div>
          ))}
        </div>
        <h2>Awards</h2>
        <div>
          {AWARDS.map((award) => (
            <div key={award.title} className={classes.awardWrapper}>
              <h3>{award.title}</h3>
              <div className={classes.awardItemContainer}>
                {award.items.map((item) => (
                  <Fragment key={item.label}>
                    <h4>{item.label}</h4>
                    <small>{item.years.join(", ")}</small>
                  </Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>
        <h2>Skills</h2>
        <div>
          {SKILLS.map((skill) => (
            <p key={skill}>{skill}</p>
          ))}
        </div>
        <h2>Tools</h2>
        <div className={classes.toolContainer}>
          {TOOLS.map((tool) => (
            <p key={tool}>{tool}</p>
          ))}
        </div>
      </main>
    </Page>
  );
};

export default Resume;
