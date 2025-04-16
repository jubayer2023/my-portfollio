"use server";

import Container from "@/components/Ui/Shared/Container/Container";
import Image from "next/image";
import Link from "next/link";

const BlogPage = async () => {
  const res = await fetch("http://localhost:3000/blogs-data.json");
  const blogData = await res.json();

  return (
    <Container>
      <div className="min-h-[calc(100vh-70px)]">
        <h3 className="pb-5 text-2xl font-bold">This is Blog Page</h3>
        <div className="py-5 grid grid-cols-1 md:grid-cols-2 gap-10">
          {blogData.map((post) => (
            <div
              key={post.id}
              className="p-5 rounded-xl border shadow-sm hover:shadow-md transition"
            >
              <Image
                src={post.coverImage}
                alt={post.title}
                className="rounded-lg mb-4  h-48 object-cover"
                width={500}
                height={190}
              />
              <h4 className="text-xl font-semibold">{post.title}</h4>
              <p className="text-sm text-gray-500 mb-2">
                By {post.author} • {new Date(post.publishedDate).toDateString()}
              </p>
              <p className="text-gray-600">{post.excerpt}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {post.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-gray-200 px-2 py-1 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
                <div className="">
                  <Link
                    href={`/blog/${post.id}`}
                    className="px-4 py-1 bg-green-500 text-white hover:cursor-pointer rounded-md "
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default BlogPage;
