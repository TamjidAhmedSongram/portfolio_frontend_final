
import BlogPosts from "@/components/portfolio/BlogPosts.portfolio";
import ContactMe from "@/components/portfolio/ContactMe.portfolio";
import Educations from "@/components/portfolio/Educations.portfolio";
import Experience from "@/components/portfolio/Experience.portfolio";
import HeroPortfolio from "@/components/portfolio/Hero.portfolio";
import Projects from "@/components/portfolio/Projects.portfolio";
import Skills from "@/components/portfolio/Skills.porfolio";

export default function Home() {
	return (
	<>
		<HeroPortfolio />
		<Skills />
		<Experience />
		{/* <Educations/> */}
		<Projects/>
		<BlogPosts/>
		<ContactMe/>
	</>
	);
}
