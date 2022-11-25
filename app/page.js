import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function Home() {
  const posts = await prisma.post.findMany();

  return (
    <div>
      <h1>Hello world</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
