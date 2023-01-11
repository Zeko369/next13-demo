// import { PrismaClient } from "@prisma/client";
import { PostType } from "@prisma/client";
import { Button } from "../components/Button";
import { ClientComponent } from "./client";

// const prisma = new PrismaClient();

export default async function Home() {
  const posts = []; //await prisma.post.findMany();

  return (
    <div>
      <h1>Hello world</h1>
      <Button>Foobar</Button>

      <h2>Server component: {Object.keys(PostType).join(", ")}</h2>
      <ClientComponent />

      <ul>
        {posts.map((post, index) => (
          <li key={`${post.id}-${index}`}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
