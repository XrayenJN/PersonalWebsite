import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'

import { FreeMode, Pagination } from 'swiper/modules'
import { RxArrowTopRight } from 'react-icons/rx'
import { ProjectsData } from '../../constants/projects'
import ProjectDetails from './ProjectDetails'
import { useState } from 'react'

import NatureBackground from "../../assets/nature_background.jpg"
import HeroPic from '../../assets/hyouka-icon.png';

const Project = () => {
  const [chosenProject, setChosenProject] = useState(ProjectsData[0]);

  return (
    <div 
      className='bg-cover'
      style={{ 
        backgroundImage: `url(${NatureBackground})`
      }}>
      <div className='backdrop-blur-md'>
        <div 
          className="p-10 flex items-center justify-center flex-col h-fit border-t-2">
          <Swiper
            breakpoints={{
              500: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              900: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1500: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
            }}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="max-w-[80%] lg:max-w-[80%]"
          >
            {ProjectsData.map((item) => (
              <SwiperSlide onClick={() => setChosenProject(item)}key={item.title}>
                <div className="flex flex-col gap-10 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[300px] w-[200px] lg:h-[300px] lg:w-[300px] overflow-hidden cursor-pointer">
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-blue-400 opacity-70 border-2"
                  />
                  <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
                  <div className="relative flex flex-col gap-3">
                    <div className='flex justify-center'>
                      <img src={HeroPic} alt="" width={65} height={65}
                      className='rounded-full w-half border-1 border-white' />
                    </div>
                    <h1 className="text-xl lg:text-2xl">{item.title} </h1>
                    <p className="lg:text-[18px]">{item.content} </p>
                  </div>
                  <RxArrowTopRight className="absolute bottom-5 left-5 w-[25px] h-[25px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className='border-t-2 bg-gray-800 opacity-75'>
          <ProjectDetails project={chosenProject}/>
        </div>
      </div>
    </div>
  )
}

export default Project