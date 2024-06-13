import { GrInstagram } from "react-icons/gr";
import { BsTwitterX } from "react-icons/bs";
import { ImFacebook2 } from "react-icons/im";
import { SiLinkedin } from "react-icons/si";
import { FaTelegram } from "react-icons/fa";

function Contact() {
  return (
    <div>
      <h1 className='text-center text-7xl mt-6 font-bold uppercase'>let's <span className='text-purple-700'>chat</span></h1>
      <p className='capitalize text-center mt-7 text-3xl font-medium'>
        we are only happy to serve you (≧∇≦)ﾉ
      </p>
      <div className="flex gap-5 mt-10 justify-center">
        <GrInstagram className="cursor-pointer" />
        <BsTwitterX className="cursor-pointer" />
        <ImFacebook2 className="cursor-pointer" />
        <SiLinkedin className="cursor-pointer" />
        <FaTelegram className="cursor-pointer" />
      </div>
    </div>
  )
}

export default Contact