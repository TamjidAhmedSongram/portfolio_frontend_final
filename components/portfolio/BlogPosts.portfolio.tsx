import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";
const BlogHead = () => {
  return <h1 className=" text-3xl font-bold text-center mb-5">Blogs</h1>;
};
const BlogsCard = () => {
  return (
    <>
      <Card className="py-4 w-[fit-content]">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold">Daily Mix</p>
          <small className="text-default-500">12 Tracks</small>
          <h4 className="font-bold text-large">Frontend Radio</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src="/projects/hero-card-complete.jpeg"
            width={270}
          />
        </CardBody>
      </Card>
    </>
  );
};

const BlogPosts = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <BlogHead />
      <div className=" text-right mb-2 mr-10">
        <Link href="#" color="primary" showAnchorIcon>
          See More
        </Link>
      </div>
      <div className=" grid gap-6 md:gap-0 mb-8 md:grid-cols-3 items-center justify-items-center">
        <BlogsCard />
        <BlogsCard />
        <BlogsCard />
      </div>
    </div>
  );
};
export default BlogPosts;
