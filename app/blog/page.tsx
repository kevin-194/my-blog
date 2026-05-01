import LikeButton from '../components/LikeButton'

export default async function BlogPage() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
  const posts = await response.json()

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Blog</h1>
      {posts.map((post: { id: number; title: string; body: string }) => (
        <div key={post.id} style={{ borderBottom: '1px solid #eee', padding: '1rem 0' }}>
          <h2 style={{ fontSize: '1rem' }}>{post.title}</h2>
          <p style={{ color: '#666' }}>{post.body}</p>
          <LikeButton />
        </div>
      ))}
    </main>
  )
}