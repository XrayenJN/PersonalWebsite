import { MdEmail } from "react-icons/md"

const Footer = () => {
  return (
    <div className="flex justify-around p-5 space-x-10 m:flex-row ssm:flex-col space-y-2">
      <div className="items-center">
          <h1 className="text-center text-2xl">Contact</h1> 
          <p className="text-center">Please contact me for more details at 
          <p className="inline text-red-900 font-bold"> jordannathanael0@gmail.com</p>
        </p>
      </div>
    </div>
  )
}

export default Footer