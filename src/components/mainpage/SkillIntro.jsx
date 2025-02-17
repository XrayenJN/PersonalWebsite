import DarkBlueBackground from '../../assets/blue-dark-background.jpg'

const SkillIntro = () => {
  return (
    <div 
      className='bg-cover border-t-2'
      style={{backgroundImage: `url(${DarkBlueBackground})`}}
      >
      <div 
        className="flex justify-around items-center p-8 space-x-10 m:flex-row ssm:flex-col space-y-2 backdrop-blur-md"
        >
        <div>
          <h1 className="text-center text-2xl">Assistant Lecturer</h1>
          <p className="text-center">I'm an assistant lecturer by trade, but I do enjoy programming!</p>
          <hr/>
          <a href="/#/skills">
            <p className="text-center py-5 text-red-600 font-bold">Check my Skillset</p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default SkillIntro