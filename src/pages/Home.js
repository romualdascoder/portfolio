import React from "react";
import Header from "../components/Header";
import Projects from "../components/Projects";
import { projectsData, projectsDataTitle } from "../data/ProjectsData";
import Banner from "../components/Banner";
import Technologies from "../components/Technologies";

function Home() {
  return (
    <div>
      <Header />
      <Projects projects={projectsData} {...projectsDataTitle} />
      <Banner />
      <Technologies />
    </div>
  );
}

export default Home;
