import React, { useState } from "react";

import photo from '../../assets/images/1.jpeg';

function ProjectList() {
//   const [projects] = useState([
//     {
//         name:"dailymoods",
//         deployedLink: "https://hibram007.github.io/dailymoods/",
//         githubLink:"https://github.com/Hibram007/dailymoods",
//     },
//     {
//         name:"Cartalk2021",
//         deployedLink: "https://cartalk2021v1.herokuapp.com/",
//         githubLink:"https://github.com/Hibram007/Cartalk2021",
//     },
//     {
//         name:"run-buddy",
//         deployedLink: "https://hibram007.github.io/run-buddy/",
//         githubLink:"https://github.com/Hibram007/run-buddy",
//     },
//     {
//         name:"NoteTakerV2",
//         deployedLink: "https://salty-peak-47105.herokuapp.com/",
//         githubLink:"https://github.com/Hibram007/NoteTakerV2",
//     },
// ]);


// return (
//     <div>
//       <h1 className="project-list-title">Previous Projects:</h1>
//       <div className="flex-row project-list">
//         {projects.map((project, i) => (
//           <div className="mx-1 project" key={project.name}>
//             <img
//               src={require(`../../assets/images/${i}.jpeg`).default}
//               alt={project.name}
//               className="img-thumbnail"
//             />
//             <h3 className="block">{project.name}</h3>
//             <a className="block" href={project.deployedLink}>Deployed Link</a>
//             <a className="block" href={project.githubLink}>GitHub Repo</a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );

return (
  <div>
      <img
        src={photo}
        alt="Commercial Example"
      />
  </div>
)
}


export default ProjectList;