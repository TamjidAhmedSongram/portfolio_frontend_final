import { siteConfig } from "@/config/site"

const Skills =()=>{
    return (<div className="container mx-auto max-w-7xl py-12 flex flex-col gap-8">
        <h2 className=" text-4xl font-bold text-center"> Skills </h2>
        <div className=" grid grid-cols-3 md:grid-cols-6 gap-6">
            {siteConfig.portfolioPage.skills.map((item,index)=>{
                return <SkillsCard src={item.src} skillname={item.skill} key={index}/>
            })}
            
        </div>
    </div>)
}
const SkillsCard = ({src,skillname}:any) =>{
    return <div className=" flex flex-col align-middle items-center">
        <img src={src} alt={skillname} width={50} height={50}  />
        <p>{skillname}</p>
    </div>
}


export default Skills