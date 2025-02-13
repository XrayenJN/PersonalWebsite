import React from 'react'

const ProjectDetails = ({project}) => {


  return (
    <div className='p-10 items-start'>
      <div className="flex flex-col gap-10 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[300px] w-[200px] lg:h-[500px] lg:w-[500px] overflow-hidden cursor-pointer">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: project.backgroundImage }}
        />
        <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
        <div className="relative flex flex-col gap-3">
          <project.icon className="text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]" />
          <h1 className="text-xl lg:text-2xl">{project.title} </h1>
          <p className="lg:text-[18px]">{project.content} </p>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails