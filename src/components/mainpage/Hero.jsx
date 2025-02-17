import { BsGithub, BsLinkedin } from 'react-icons/bs';
import HeroPic from '../../assets/hyouka-icon.png';
import { MdEmail } from 'react-icons/md';
import { DiGoogleAnalytics } from 'react-icons/di';
import GithubIcon from "../../assets/github.png";
import LinkedinIcon from "../../assets/linkedin.png";
import EmailIcon from "../../assets/email.png";
import CvIcon from "../../assets/cv.png";

const Hero = () => {
  return (
    <section className="flex justify-around items-center h-screen">
      <div className="w-2/6 sm:w-[350px]">
        <h1 className="text-3xl lg:text-6xl text-slate-100">Jordan Nathanael</h1>
        <hr/>
        <p className="mt-4 text-xs lg:text-base text-slate-100 ">Junior Software Developer, Assistant Lecturer, and Computer Science Graduate</p>
        <div className='flex mt-5 space-x-4 cursor-pointer'>
          <a href='https://github.com/XrayenJn' target="_blank">
            <img src={GithubIcon} alt="" width={35} height={35}
            className='border-1 hover:border-blue-600 rounded-full' />
          </a>
          <a href='https://au.linkedin.com/in/jordan-nathanael' target="_blank"><img src={LinkedinIcon} alt="" width={35} height={50}
            className='border-1 hover:border-blue-600 rounded-full' /></a>
          <a href='mailto:jordannathanael0@gmail.com' target="_blank"><img src={EmailIcon} alt="" width={35} height={35}
            className='border-1 hover:border-blue-600 rounded-full' /></a>
          <a href='https://drive.google.com/file/d/12SjD0fpeww_Ul1K5a5Dj4p0rhvDqsv3x/view?usp=drive_link' target="_blank"><img src={CvIcon} alt="" width={35} height={35}
            className='border-1 hover:border-blue-600 rounded-full' /></a>          
        </div>
      </div>
      <div className='w-1/6 hidden sm:flex'>
        <a href='https://en.wikipedia.org/wiki/Hyouka#:~:text=An%20unsung%20tragic,Jun%27s%20silent%20anguish.' target="_blank">
          <img src={HeroPic} alt="" width={350} height={350}
          className='rounded-full w-half border-3 border-white hidden sm:block' />
        </a>
      </div>
    </section>
  )
}

export default Hero