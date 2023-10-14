import { Button } from "@nextui-org/button";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import NextImage from "next/image";
import { Image } from "@nextui-org/image";
// import {}

const Introduction = () => {
  return (
    <div className=" mx-auto flex flex-col gap-4 px-10 py-5 md:p-14">
      <h1 className=" font-bold text-4xl  ">Front-End React Developer</h1>
      <p>
        I am a Front-End / Full-Stack Developer. I am currently working at One
        Direction Companies Limited as a Front-End Developer
      </p>
      <div className=" flex gap-2">
        <BsGithub size={30} /> <BsLinkedin size={30} />
      </div>
      <div className=" flex gap-3">
        <Button color="secondary" className="  basis-1/4 ">
          Resume
        </Button>
        <Button color="secondary" className="  basis-1/4 ">
          Contact Me
        </Button>
      </div>
    </div>
  );
};
const Photographs = () => {
  return (
    <>
      <Image
        src="tamjid.png"
        width={300}
        height={300}
        className="rounded-full w-full h-full"
      />
    </>
  );
};
const HeroPortfolio = () => {
  return (
    <div className="container mx-auto max-w-7xl grid md:grid-cols-2 items-center justify-items-center py-8">
      <div className=" w-[85%] max-w-[308px]">
        <Photographs />
      </div>
      <div className="">
        <Introduction />
      </div>
    </div>
  );
};
export default HeroPortfolio;
