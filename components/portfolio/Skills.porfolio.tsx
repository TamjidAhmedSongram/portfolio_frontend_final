const Skills =()=>{
    return (<div className="container mx-auto max-w-7xl py-12 flex flex-col gap-8">
        <h2 className=" text-4xl font-bold text-center"> Skills </h2>
        <div className=" grid grid-cols-6 gap-6">
            <SkillsCard/>
            <SkillsCard/>
            <SkillsCard/>
            <SkillsCard/>
            <SkillsCard/><SkillsCard/>
            <SkillsCard/>
            <SkillsCard/>
            <SkillsCard/>
            
        </div>
    </div>)
}
const SkillsCard = () =>{
    return <div className=" flex flex-col align-middle items-center">
        <img src="/skills/react-svgrepo-com_bw.svg" alt="" width={50} height={50}  />
        <p>React</p>
    </div>
}


export default Skills