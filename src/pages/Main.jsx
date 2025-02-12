import Footer from "../components/Footer"
import { Header } from "../components/mainpage/Header"
import Hero from "../components/mainpage/Hero"
import Project from "../components/mainpage/Project"
import SkillIntro from "../components/mainpage/SkillIntro"

const Main = () => {
  return (
    <div className="h-max bg-blue-300">
        <Header />
        <Hero />
        <SkillIntro />
        <Footer />
    </div>
  )
}

export default Main