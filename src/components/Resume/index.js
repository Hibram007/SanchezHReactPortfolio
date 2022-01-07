
import resume from "../../assets/files/resume.pdf";

function Resume() {
    return (
      <section>
        <div className="proficiency-container">
          <h3 className="proficiency-title">Proficiencies:</h3>
          <ul> <br></br>
            <li className="proficiency">* React</li>
            <li className="proficiency">* HTML, CSS, Git</li>
            <li className="proficiency">* Web API's</li>
            <li className="proficiency">* JavaScript</li>
            <li className="proficiency">* JQuery</li>
            <li className="proficiency">* Handlebars,js</li>
            <li className="proficiency">* Express</li>
            <li className="proficiency">* Node</li>
            <li className="proficiency">* MongoDB</li>
            <li className="proficiency">* SQL</li>
            <li className="proficiency">* NoSQL</li>
            <li className="proficiency">* PWA's </li>
          </ul>
        </div>
        <div className="resume-container">
          <a className="resume-download" href={resume} download>
            Download resume here ✉️ .
          </a>
        </div>
      </section>
    );
  }
  
  export default Resume;