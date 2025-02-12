const SkillLists = () => {
  return (
    <section className="flex justify-around p-15 space-x-20 m:flex-row ssm:flex-col space-y-10">
      <div className="w-1/2 ssm:w-fit">
        <div className="py-3">
          <div className="border-2 border-solid border-white-800">
            {/* Preferred Languages */}
            <h1 className="text-xl text-slate-100 px-1">Preferred Languages</h1>
            <ul className="list-disc px-6">
              <li>Java</li>
              <li>Javascript</li>
              <li>Swift</li>
              <li>Python</li>
            </ul>
          </div>
        </div>
        <div className="py-3">
          <div className="border-2 border-solid border-white-800">        
            {/* Other known languages */}
            <h1 className="text-xl text-slate-100 px-1">Other Known Languages</h1>
            <ul className="list-disc px-6">
              <li>C++</li>
              <li>C</li>
              <li>C#</li>
              <li>Typescript</li>
              <li>Kotlin</li>
              <li>Bash and Shell Script</li>
            </ul>
          </div>
        </div>
        <div className="py-3">
          <div className="border-2 border-solid border-white-800">        
            {/* Professional Experiences */}
            <h1 className="text-xl text-slate-100 px-1">Professional Experiences</h1>
            <ul className="list-disc px-6">
              <li>Newly Appointed Assistant Lecturer</li>
              <li>Almost 2 years of Teaching Associate Experience</li>
              <li>Full Stack Web Development</li>
            </ul>
          </div>
        </div>
        <div className="py-3">
          <div className="border-2 border-solid border-white-800">        
            {/* Other Skills */}
            <h1 className="text-xl text-slate-100 px-1">Other Skills</h1>
            <ul className="list-disc px-6">
              <li>3D Modeling</li>
              <li>Pixel Art</li>
              <li>Teaching</li>
              <li>Music (Organ, Trumpet)</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-1/2 ssm:w-fit">
        <div className="py-3">
          <div className="border-2 border-solid border-white-800">        
            {/* Technologies */}
            <h1 className="text-xl text-slate-100 px-1">Technologies</h1>
            <ul className="list-disc px-6">
              <li>WebDev:</li>
              <li>Databases:</li>
              <li>Mobile App Development:</li>
              <li>Source Control:</li>
              <li>Gamedev:</li>
            </ul>
          </div>
        </div>
        <div className="py-3">
          <div className="border-2 border-solid border-white-800">        
            {/* Achievements */}
            <h1 className="text-xl text-slate-100 px-1">Achievements</h1>
            <ul className="list-disc px-6">
              <li>Awarded for highest grade achiever for a third level unit in University</li>
              <li>Awarded for highest average mark for diploma student for that batch</li>
              <li>Awarded for highest grade achievers for 5 units in College</li>
              <li>Awarded for an exceptional work ethic</li>
            </ul>
          </div>
        </div>
        <div className="py-3">
          <div className="border-2 border-solid border-white-800">        
            {/* Education */}
            <h1 className="text-xl text-slate-100 px-1">Education</h1>
            <ul className="list-disc px-6">
              <li>Bachelor of Computer Science (3.625 GPA - 83.29 WAM)</li>
              <li>Diploma of Information Technology (92.1 WAM)</li>
              <li>Self Taught</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillLists