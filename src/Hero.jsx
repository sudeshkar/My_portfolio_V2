import HeroImg from './assets/Profilepicture.png';
import { FaLinkedin } from "react-icons/fa6";
import { SiGeeksforgeeks,SiLeetcode  } from "react-icons/si";
import { FaFacebook,FaInstagram,FaGithub } from "react-icons/fa";

function Hero(){
  const config={
    subtitle : "I'm a Full-Stack Developer",
    social:{
      linkedIn:"https://www.linkedin.com/in/sathieskumar-sudeshkar",
      github:"https://github.com/sudeshkar",
      facebook:"https://www.facebook.com/sk.sudesh.7927",
      instagram:"https://www.instagram.com/sk_sudesh_/",
      leetcode:"https://leetcode.com/u/sudeshkar/",
      geeksforgeeks:"https://www.geeksforgeeks.org/profile/sudeshkah7lq"
    }
  };
    return(
      <section className="flex flex-col md:flex-row px-5 py-32 bg-primary justify-center border-[#2b2D77]"  id='hero'>
        <div className='md:w-1/2 flex flex-col'>
            <h1 className=' text-white text-8xl font-Bebas'>Hi, <br/>I'm <span className='text-black'>Sk</span> Sudeshkar
            <p className='text-2xl'>{config.subtitle}</p>
            </h1>
            <div className='flex md:gap-4 gap-5 mt-8'>
                <a href={config.social.linkedIn} target='_blank' className="transition-transform duration-300 hover:scale-125 hover:text-white"><FaLinkedin size={40}/> </a>
                <a href={config.social.geeksforgeeks} target='_blank' className="transition-transform duration-300 hover:scale-125 hover:text-white"><SiGeeksforgeeks size={40}/> </a>
                <a href={config.social.github} target='_blank' className="transition-transform duration-300 hover:scale-125 hover:text-white"><FaGithub size={40}/> </a>
                <a href={config.social.facebook} target='_blank' className="transition-transform duration-300 hover:scale-125 hover:text-white"><FaFacebook size={40}/> </a>
                <a href={config.social.instagram} target='_blank' className="transition-transform duration-300 hover:scale-125 hover:text-white"><FaInstagram size={40}/> </a>
                <a href={config.social.leetcode} target='_blank' className="transition-transform duration-300 hover:scale-125 hover:text-white"><SiLeetcode size={40}/> </a>
            </div>

        </div>
        
        <img src={HeroImg} alt="HeroSectionImg" className='md:w-1/3 mt-15 md:mt-0 rounded-full '/>
      </section>
    );
}
export default Hero;