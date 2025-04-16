"use server";

import Container from "@/components/Ui/Shared/Container/Container";
import Image from "next/image";

const BlogDetailsPage = async ({ params }) => {
  const { slug } = await params;
  const slugInNum = parseInt(slug);

  const res = await fetch("http://localhost:3000/blogs-data.json");
  const blogData = await res.json();

  const blog = blogData.find((blog) => blog.id === slugInNum);
  //   console.log(blog);

  if (!blog) {
    return (
      <Container>
        <div className="min-h-screen flex items-center justify-center">
          <h3 className="text-xl font-semibold">Blog not found!</h3>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <div className="min-h-screen py-10">
        <Image
          src={blog.coverImage}
          alt={blog.title}
          width={800}
          height={400}
          className="rounded-lg mb-6 w-full h-96 object-cover"
        />
        <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
        <p className="text-gray-500 mb-4">
          By {blog.author} •{" "}
          {new Date(blog.publishedDate).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <p className="text-lg text-gray-700 mb-6">{blog.excerpt}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {blog.tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-xs bg-gray-200 px-2 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default BlogDetailsPage;
