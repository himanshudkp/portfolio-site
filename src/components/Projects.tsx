import React from "react";
import { SectionHeading } from "./SectionHeading";
import { projectsData } from "@/data/data";

export const Projects = () => {
  return (
    <section>
      <SectionHeading title="My projects" />
      <div>
        {projectsData.map((project) => {
          return <Project project={project} key={project.title} />;
        })}
      </div>
    </section>
  );
};

const Project = ({ project }: { project: any }) => {
  return <div>{project.description}</div>;
};
