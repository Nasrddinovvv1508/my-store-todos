import { GrInstagram } from "react-icons/gr";
import { BsTwitterX } from "react-icons/bs";
import { ImFacebook2 } from "react-icons/im";
import { SiLinkedin } from "react-icons/si";
import { FaTelegram } from "react-icons/fa";

function About() {
  return (
    <div className='mb-20'>
      <h1 className='text-center text-7xl mt-6 font-semibold capitalize'>About <span className='text-purple-700'>us</span></h1>
      <p className="capitalize mt-10 text-3xl ml-20 text-orange-600">
        our customers are satisfied with us <b> ;) </b>
      </p>
      <div className='mt-16 flex gap-4 flex-col'>
        <div className='flex gap-4'>
          <div className='w-1/2 h-[400px] bg-base-100 rounded-3xl border-2 p-16'>
            <div className='flex items-center gap-9'>
              <img width={80} src="../assets/user1.png" alt="user" />
              <h3 className='text-3xl font-semibold'>Robert Williams</h3>
            </div>
            <div className='mt-7'>
              <p className='text-lg opacity-65 ml-5'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, pariatur reiciendis. Totam ut architecto qui ducimus, dolores minima cum, aspernatur eius, corporis maxime earum eum animi suscipit repudiandae deserunt sapiente odio libero eveniet illo sint.
              </p>
            </div>
            <div className="mt-7 flex items-center gap-3 ml-10">
              <GrInstagram className="cursor-pointer" />
              <BsTwitterX className="cursor-pointer" />
              <ImFacebook2 className="cursor-pointer" />
              <SiLinkedin className="cursor-pointer" />
              <FaTelegram className="cursor-pointer" />
            </div>
          </div>
          <div className='w-1/2 h-[400px] bg-base-100 rounded-3xl border-2 p-16'>
            <div className='flex items-center gap-9'>
              <img width={80} className="rounded-full" src="../assets/user2.png" alt="user" />
              <h3 className='text-3xl font-semibold'>David Garcia</h3>
            </div>
            <div className='mt-7'>
              <p className='text-lg opacity-65 ml-5'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, pariatur reiciendis. Totam ut architecto qui ducimus, dolores minima cum, aspernatur eius, corporis maxime earum eum animi suscipit repudiandae deserunt sapiente odio libero eveniet illo sint.
              </p>
            </div>
            <div className="mt-7 flex items-center gap-3 ml-10">
              <GrInstagram className="cursor-pointer" />
              <BsTwitterX className="cursor-pointer" />
              <ImFacebook2 className="cursor-pointer" />
              <SiLinkedin className="cursor-pointer" />
              <FaTelegram className="cursor-pointer" />
            </div>
          </div>
        </div>
        <div className='flex gap-4'>
          <div className='w-1/2 h-[400px] bg-base-100 rounded-3xl border-2 p-16'>
            <div className='flex items-center gap-9'>
              <img width={80} className="rounded-full" src="../assets/user3.png" alt="user" />
              <h3 className='text-3xl font-semibold'>Linda Brown</h3>
            </div>
            <div className='mt-7'>
              <p className='text-lg opacity-65 ml-5'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, pariatur reiciendis. Totam ut architecto qui ducimus, dolores minima cum, aspernatur eius, corporis maxime earum eum animi suscipit repudiandae deserunt sapiente odio libero eveniet illo sint.
              </p>
            </div>
            <div className="mt-7 flex items-center gap-3 ml-10">
              <GrInstagram className="cursor-pointer" />
              <BsTwitterX className="cursor-pointer" />
              <ImFacebook2 className="cursor-pointer" />
              <SiLinkedin className="cursor-pointer" />
              <FaTelegram className="cursor-pointer" />
            </div>
          </div>
          <div className='w-1/2 h-[400px] bg-base-100 rounded-3xl border-2 p-16'>
            <div className='flex items-center gap-9'>
              <img width={80} className="rounded-full" src="../assets/user4.png" alt="user" />
              <h3 className='text-3xl font-semibold'>Elizabeth Jones</h3>
            </div>
            <div className='mt-7'>
              <p className='text-lg opacity-65 ml-5'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, pariatur reiciendis. Totam ut architecto qui ducimus, dolores minima cum, aspernatur eius, corporis maxime earum eum animi suscipit repudiandae deserunt sapiente odio libero eveniet illo sint.
              </p>
            </div>
            <div className="mt-7 flex items-center gap-3 ml-10">
              <GrInstagram className="cursor-pointer" />
              <BsTwitterX className="cursor-pointer" />
              <ImFacebook2 className="cursor-pointer" />
              <SiLinkedin className="cursor-pointer" />
              <FaTelegram className="cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About