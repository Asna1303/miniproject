import React ,{Component}from "react";
import "./cs2.css";
import Accordion from "./Accordtion";
import { Link } from "react-router-dom";
import Navbar from "../../../navbar/navbar";
class Cs2 extends Component{
    render(){
        return(
<div className="contain">
<Navbar/>
<div className="con1">
<div className="company1">
<Link to="#">IBM</Link>

</div><br/>
<div className="company2"><Link to="#">CISCO</Link></div><br/>
<div className="company3"><Link to="/department/cs/TCS">TCS</Link></div><br/>
<div className="company4"><Link to="#">AMAZON</Link></div><br/>
<div className="company5"><Link to="#">GOOGLE</Link></div><br/>
</div>

<div className="accdata">
<h2>THE PLACEMENT PROCESS HERE FOLLOWS AN 4-STEP PROCESS, WHICH INVOLVES THE FOLLOWING STAGES:</h2>
      <Accordion
        title="1:Data collection"
        content=" The student placement coordinators (SPCs) of each branch receive notification of the companies that will be coming for the placement. The SPCs then forward this information to the students in their respective classes. To facilitate this process, it is recommended that the SPCs create a Google Group to share the information with students. They are also required to collect the details of interested students in the format provided by the placement cell. This can be done using spreadsheets, forms, etc. It is recommended to create a dedicated WhatsApp group or Discord server for sharing placement details.
"
      />
      <Accordion
        title="2:Screening rounds"
        content="   Based on the data provided by the SPCs, the company may or may not screen the students based on various criteria, such as GPA, active backlogs, resume, etc. Having no backlog is important, as last year only 3-4 companies allowed students to sit for further placements if they had any active backlogs.
The shortlisted students are then screened based on their aptitude and technical knowledge. This is done in the format of a test, which may be conducted online or at the university labs based on the company's requirements.

               "
      /> 
      <Accordion
        title="  3: Technical Round"
        content="        Upon qualifying for further rounds, there would mainly be two rounds - Technical Round and HR Round. In the Technical Round, students would be interviewed on their technical knowledge in various areas such as Object-Oriented Programming (OOPS), Data Structures and Algorithms (DSA), Database Management Systems (DBMS), Operating Systems (OS), Computer Networks (CN), etc. The interviewer may also ask the student to code during the interview, and there may be multiple technical rounds. Depending upon the company, this interview may be done online or on-campus in the placement cell.
              "
      />
      <Accordion
        title="  4:HR rounds"
        content="      Once a candidate has cleared the technical round, they would move on to the HR round, where they would be tested on their communication skills, problem-solving abilities, and other soft skills. This round is conducted to assess the candidate's fit with the company's culture and values.

"
      />
</div>
</div>

        )
    };
};
export default Cs2;