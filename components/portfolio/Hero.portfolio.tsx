import { Button } from "@nextui-org/button";
import {BsGithub , BsLinkedin} from "react-icons/bs"
import NextImage from "next/image"
import { Image } from "@nextui-org/image";
// import {}

const Introduction = () => {
    return (
        <div className=" mx-auto flex flex-col gap-2 p-20">
            <h1 className=" font-bold text-4xl  ">Front-End React Developer</h1>
            <p>
                I am a Front-End / Full-Stack Developer. I am currently working at One Direction Companies Limited as a Front-End Developer
            </p>
            <div className=" flex gap-2">  <BsGithub size={30}/> <BsLinkedin size={30}/></div>
           <div className=" flex gap-1">
           <Button  className="bg-gradient-to-tr from-slate-800 to-slate-300 text-white shadow-lg w-[fit-content]"> Resume </Button>
            <Button  className="bg-gradient-to-tr from-slate-800 to-slate-400 text-white shadow-lg w-[fit-content]"> Contact Me </Button>
           </div>
            

        </div>
    )
}
const Photographs = () => {
    return (<>
        <Image 
        src="tamjid.png"
        width={300}
        height={300}
        />
        
    </>)
}
const HeroPortfolio = () => {
    return (
        <div className="container mx-auto max-w-7xl grid grid-cols-2 items-center justify-items-center ">
            <div className="">
                <Introduction />
            </div>
            <div className=" w-[50%] max-w-[308px]">
                <Photographs />
            </div>
        </div>
    )
}
export default HeroPortfolio