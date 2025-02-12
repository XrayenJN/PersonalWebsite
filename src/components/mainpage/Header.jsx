import { AiOutlineClose } from "react-icons/ai"
import { useState } from "react"
import { HiMenuAlt1 } from "react-icons/hi"

const NavItems = () => {
  return (
    <>
      <a href="#" className="hover:bg-blue-600 rounded-full px-3 py-2 text-l">Projects</a>
      <a href="#" className="hover:bg-blue-600 rounded-full px-3 py-2 text-l">Skills</a>
      <a href="#" className="hover:bg-blue-600 rounded-full px-3 py-2 text-l">Contact Me</a>
    </>
  )
}

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
    console.log(isOpen)
  }

  return (
    <>
      <div className="flex justify-between p-4 lg:flex-row">
        <div className="tracking-wider flex items-center">LOGO</div>
        <div className="space-x-4">
          <div className="hidden md:flex">
            <NavItems />
          </div>
          <div className="md:hidden hover:bg-blue-600 rounded-full px-1">
            <button onClick={toggleIsOpen}>
              {isOpen 
              ? <AiOutlineClose />
              : <HiMenuAlt1 />
            }</button>
          </div>
        </div>
      </div>
      <div>
          {isOpen
            ? (
              <div className="md:hidden flex justify-between ml-6">
                <ul>
                  <li className="text-sm mb-2 cursor-pointer">Projects</li>
                  <li className="text-sm mb-2 cursor-pointer">Skills</li>
                  <li className="text-sm mb-2 cursor-pointer">Contact Me</li>
                </ul>
              </div>
            )
            : <div></div>
          }
        </div>
    </>
  )
}
