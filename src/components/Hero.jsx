import { BsGithub, BsLinkedin } from 'react-icons/bs';
import HeroPic from '../assets/hyouka-icon.png';
import { MdEmail } from 'react-icons/md';
import { DiGoogleAnalytics } from 'react-icons/di';

const Hero = () => {
  return (
    <section className="flex justify-around items-center p-8 space-x-10 m:flex-row ssm:flex-col space-y-10 py-50">
      <div className="w-1/3 ssm:w-fit">
        <h1 className="text-6xl text-slate-100">Jordan Nathanael</h1>
        <hr/>
        <p className="mt-10 text-lg text-slate-100 font-sans">A Computer Science Graduate and over a year of hands-on experience as Teaching Associate in Object-Oriented Programming, Functional Programming, and Parallel Computing.</p>
        <div className='flex mt-5 space-x-4 cursor-pointer'>
          <a href='https://github.com/XrayenJn'><BsGithub href='https://github.com/XrayenJn' size={35} className='border-3 hover:border-blue-600 rounded-full' /></a>
          <a href='https://au.linkedin.com/in/jordan-nathanael'><BsLinkedin size={35} className='border-3 hover:border-blue-600 rounded-full' /></a>
          <a href='mailto:jordannathanael0@gmail.com'><MdEmail size={35} className='border-3 hover:border-blue-600 rounded-full' /></a>
          <a href='https://drive.google.com/file/d/12SjD0fpeww_Ul1K5a5Dj4p0rhvDqsv3x/view?usp=drive_link'><DiGoogleAnalytics size={35} className='border-3 hover:border-blue-600 rounded-full' /></a>
        </div>
        <div className='flex mt-5 space-x-4 cursor-pointer'>
          
        </div>
        <div className='flex mt-5 space-x-4 cursor-pointer'>
          
        </div>
      </div>
      <div className='w-1/3 ssm:w-fit'>
        <img src={HeroPic} alt="" width={250} height={250}
        className='rounded-full w-full border-3 border-white'></img>
      </div>
    </section>
  )
}

export default Hero