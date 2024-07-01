import React from "react";
import Clients from "../components/Clients";
import Projects from "../components/Projects";
import AddClientModal from "../components/AddClientModal";
import AddProjectModal from "../components/AddProjectModal";

export default function Home() {
  return (
    <>
      <div className="center-div">
        <h1 className="graphql-color">Presentation on GraphQL</h1>
      </div>
      <div className="d-flex gap-3 mb-4 mt-5">
        <AddClientModal />
        <AddProjectModal />
      </div>
      <Projects />
      <hr />
      <Clients />
    </>
  );
}
