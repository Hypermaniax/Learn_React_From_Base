import { useState } from "react";
import ProjectSidebar from "./components/ProjectSideBar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProject: undefined,
    project: [],
  });
  
  function handleStartProject() {
    setProjectState((prev) => {      
      return {
        ...prev,
        selectedProject: null,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectState((prev) => {
      const projectId = Math.random()
      
      const newProject = {
        ...projectData,
        id: projectId,
      };
      
      return {
        ...prev,
        project: [...prev.project, newProject],
        selectedProject:undefined,
      };

    });
  }
  
  let content;
  
  if (projectState.selectedProject === null) {
    content = <NewProject  onAdd={handleAddProject} />;
  } else if (projectState.selectedProject === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar projects={projectState.project} onClick={handleStartProject} />
      {content}
    </main>
  );
}

export default App;
