import { PrismaClient } from "@prisma/client";
import { Button } from "../components/Button";

const prisma = new PrismaClient();

export default async function Home() {
  const posts = await prisma.post.findMany();

  return (
    <div>
      <h1>Hello world</h1>
      <Button>Foobar</Button>

      <ul>
        {posts.map((post, index) => (
          <li key={`${post.id}-${index}`}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
