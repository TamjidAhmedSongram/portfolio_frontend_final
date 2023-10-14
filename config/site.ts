export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Next.js + NextUI",
	description: "Make beautiful websites regardless of your design experience.",
	navItems: [
		{
			label: "Portfolio",
			href: "/",
		},
		{
			label: "Blog",
			href: "/blog",
		},
		{
			label: "Services",
			href: "/services",
		},
		{
			label: "Contact Me",
			href: "/contact-me",
		},

	],
	navMenuItems:  [
		{
			label: "Portfolio",
			href: "/",
		},
		{
			label: "Blog",
			href: "/blog",
		},
		{
			label: "Services",
			href: "/services",
		},
		{
			label: "Contact Me",
			href: "/contact-me",
		},

	],
	links: {
		github: "https://github.com/nextui-org/nextui",
		twitter: "https://twitter.com/getnextui",
		docs: "https://nextui.org",
		discord: "https://discord.gg/9b6yyZKmH4",
		sponsor: "https://patreon.com/jrgarciadev"
	},
	portfolioPage:{
		skills:[{
			src:"/skills/react-svgrepo-com_c.svg",
			skill:"React"
		},{
			src:"/skills/react-svgrepo-com_c.svg",
			skill:"React"
		},{
			src:"/skills/react-svgrepo-com_c.svg",
			skill:"React"
		},{
			src:"/skills/react-svgrepo-com_c.svg",
			skill:"React"
		},{
			src:"/skills/react-svgrepo-com_c.svg",
			skill:"React"
		},{
			src:"/skills/react-svgrepo-com_c.svg",
			skill:"React"
		},{
			src:"/skills/react-svgrepo-com_c.svg",
			skill:"React"
		},{
			src:"/skills/react-svgrepo-com_c.svg",
			skill:"React"
		},{
			src:"/skills/react-svgrepo-com_c.svg",
			skill:"React"
		},]
	},
	experience:[{
		year:"2022",
		startMonth:"Jan",
		endMonth:"Apr",
		companyName:"Tau Research Ltd.",
		postion:"Inten",
		jobDescription:"Built and improved a React dashboard for data visualization and analysis, using custom components, hooks, APIs, and best practices. Also worked with AWS EC2 services."
	},{
		year:"2022",
		startMonth:"Apr",
		endMonth:"Jun ",
		companyName:"Digital Gregg LLC. ",
		postion:"React Developer",
		jobDescription:"Enhanced a admin dashboard using React, Tailwind CSS, and Next.js, optimizing UI with Tailwind, custom components, React hooks, and API integrations." 
	},{
		year:"2022",
		startMonth:"Jun",
		endMonth:"Now",
		companyName:"One Direction Companies Limited",
		postion:"React Developer",
		jobDescription:"Designed captivating animations for Walton Digitech, crafted an elegant e-commerce frontend with Material UI and ReactJS, and developed a feature-rich Stockmate website."
	},]
};

