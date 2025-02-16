import Footer from "../components/Footer"
import { Header } from "../components/mainpage/Header"
import SkillLists from "../components/skillpage/SkillLists"

const SkillPage = () => {
  return (
    <div className="h-max bg-sky-600 text-slate-100 font-mono">
      <Header />
      <SkillLists />
      <Footer />
    </div>
  )
}

export default SkillPage