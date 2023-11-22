import { getAllPosts } from './lib/notionAPI'

export default async function Home() {
  const allPosts = await getAllPosts();
  console.log(allPosts);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
<div className="text-3xl text-red-800">
  test
</div>
    </main>
  )
}
