
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
		<Educations/>
		<Projects/>
		<BlogPosts/>
		<ContactMe/>
		<div className="dark dark:bg-gray-800 dark:text-white bg-white text-black">
  ...
  <div>Text color changes based on theme</div>
</div>

<div className="light light:bg-gray-100 light:text-black bg-black text-white">
  ...
  <div>Text color changes based on theme</div>
</div>
	</>
	);
}
