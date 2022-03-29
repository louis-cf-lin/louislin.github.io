// this file should be deleted once _middleware.ts is working

import Router from "next/router";
import { useEffect } from "react";

const Projects = () => {
  useEffect(() => {
    Router.push("/projects/createbase");
  }, []);
  return null;
};

export default Projects;
