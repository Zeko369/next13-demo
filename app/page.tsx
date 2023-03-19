// import { PrismaClient } from "@prisma/client";
import { PostType } from "@prisma/client";
import Link, { LinkProps } from "next/link";
import { Button } from "../components/Button";
import { ClientComponent } from "./client";
import { Graph } from "./graph";

// const prisma = new PrismaClient();

const a = <T,>(args: LinkProps<T>) => {};

export default async function Home() {
  const posts = []; //await prisma.post.findMany();

  return (
    <div>
      <h1>Hello world</h1>
      <Button>Foobar</Button>

      <h2>Server component: {Object.keys(PostType).join(", ")}</h2>
      <ClientComponent />
      <Graph />

      <Link href="/?foo=bar">Foobar</Link>

      <ul>
        {posts.map((post, index) => (
          <li key={`${post.id}-${index}`}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
