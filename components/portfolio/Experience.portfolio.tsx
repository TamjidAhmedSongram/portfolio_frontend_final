import { siteConfig } from "@/config/site"
const Experience = () => {
    return (<div className="container mx-auto max-w-7xl px-10 md:px-4">
    <h1 className="font-bold  mb-10 text-3xl text-center">Experiences</h1>

    <div className="relative mt-5 text-left md:grid md:grid-cols-3 md:gap-12">
        
        {siteConfig.experience.map((item,index)=>{
            return<div className="flex items-center relative" key={index}>
            <div className="hidden md:block w-20">
                <div className="font-bold italic">{item.year}</div>
                <div className="md:flex space-x-1 text-xs">
                    <div>{item.startMonth}</div>
                    <div>-</div>
                    <div>{item.endMonth}</div>
                </div>                        
            </div>
            
            <div className="border-r-2 border-black dark:border-slate-100 absolute h-full md:h-4/5  left-1 md:left-20 top-2 md:top-auto z-[10]">
                <div className="absolute w-5 h-5 rounded-full bg-black dark:bg-slate-100 -top-1 md:top-[50%] transform translate-y-[-50%]  -ml-2 "></div>
            </div>
            <div className="ml-10">
                <div className="font-bold">{item.companyName}</div>
                <div className="italic md:mb-4">{item.postion}</div>
                <div className="mb-4 mt-2 md:hidden">
                    <div className="font-bold">{item.year}</div>
                    <div className="text-xs">{item.startMonth} - {item.endMonth}</div>
                </div>
                <div className="mb-10 text-justify">{item.jobDescription}</div>
            </div>
        </div>
        })}
    </div>
</div>)
}
export default Experience