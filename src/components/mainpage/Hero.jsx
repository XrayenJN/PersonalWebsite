import { BsGithub, BsLinkedin } from 'react-icons/bs';
import HeroPic from '../../assets/hyouka-icon.png';
import { MdEmail } from 'react-icons/md';
import { DiGoogleAnalytics } from 'react-icons/di';

const Hero = () => {
  return (
    <section className="flex justify-around items-center p-8 space-x-10 m:flex-row ssm:flex-col space-y-10 py-50">
      <div className="w-1/3 ssm:w-fit">
        <h1 className="text-6xl text-slate-100">Jordan Nathanael</h1>
        <hr/>
        <p className="mt-4 text-md text-slate-100 ">Junior Software Developer, Assistant Lecturer, and Computer Science Graduate</p>
        <div className='flex mt-5 space-x-4 cursor-pointer'>
          <a href='https://github.com/XrayenJn' target="_blank"><BsGithub size={35} className='border-3 hover:border-blue-600 rounded-full' /></a>
          <a href='https://au.linkedin.com/in/jordan-nathanael' target="_blank"><BsLinkedin size={35} className='border-3 hover:border-blue-600 rounded-full' /></a>
          <a href='mailto:jordannathanael0@gmail.com' target="_blank"><MdEmail size={35} className='border-3 hover:border-blue-600 rounded-full' /></a>
          <a href='https://drive.google.com/file/d/12SjD0fpeww_Ul1K5a5Dj4p0rhvDqsv3x/view?usp=drive_link' target="_blank"><DiGoogleAnalytics size={35} className='border-3 hover:border-blue-600 rounded-full' /></a>          
        </div>
      </div>
      <div className='w-1/6 ssm:w-fit'>
        <a href='https://en.wikipedia.org/wiki/Hyouka#:~:text=An%20unsung%20tragic,Jun%27s%20silent%20anguish.' target="_blank">
          <img src={HeroPic} alt="" width={350} height={350}
          className='rounded-full w-half border-3 border-white' />
        </a>
      </div>
    </section>
  )
}

export default Hero