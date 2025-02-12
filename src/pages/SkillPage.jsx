import Footer from "../components/Footer"
import { Header } from "../components/mainpage/Header"
import SkillLists from "../components/skillpage/SkillLists"

const SkillPage = () => {
  return (
    <div className="bg-blue-300">
      <SkillLists />
      <Footer />
    </div>
  )
}

export default SkillPage