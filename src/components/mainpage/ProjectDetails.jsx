import React from 'react'

import GithubIcon from '../../assets/github.png';

const ProjectDetails = ({project}) => {
  return (
    <div className='p-10 block lg:flex justify-items-center gap-10'>
      <div className="flex flex-col gap-10 group relative shadow-lg text-white rounded-xl px-6 py-8 w-[300px] h-fit lg:h-[300px] lg:w-[500px] overflow-hidden cursor-pointer">
        <div
          className="absolute inset-0 bg-cover bg-center bg-blue-400 opacity-70 border-2"/>
        <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
        <div className="relative flex flex-col gap-3">
          <div className='flex justify-center'>
            <img src={project.icon} alt="" width={65} height={65}
            className='rounded-full w-half border-1 border-white' />
          </div>
          <h1 className="text-m lg:text-xl">{project.title} </h1>
          <p className="text-sm lg:text-lg">{project.content} </p>
          <p className="text-xs lg:text-m">{project.description} </p>
        </div>
      </div>
      <div className='p-10 block justify-items-center lg:justify-items-start'>
        <p>If available, video demonstration will be put here.</p>
        {project.githubLink 
          ? <a href={project.githubLink} target="_blank" className=''>
              <img src={GithubIcon} alt="" width={35} height={35}
              className='border-1 hover:border-blue-600 rounded-full' />
            </a>
          : <></>
        }
      </div>
    </div>
  )
}

export default ProjectDetails