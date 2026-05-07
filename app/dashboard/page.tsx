export default async function DashboardPage() {
  const [postsResponse, usersResponse] = await Promise.all([
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=3'),
    fetch('https://jsonplaceholder.typicode.com/users?_limit=3')
  ])

  const posts = await postsResponse.json()
  const users = await usersResponse.json()

  return (
    <div>
      <h1>Dashboard</h1>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '1rem' }}>
        
        <div>
          <h2 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Recent Posts</h2>
          {posts.map((post: { id: number; title: string }) => (
            <div key={post.id} style={{ padding: '0.5rem 0', borderBottom: '1px solid #eee' }}>
              <p style={{ fontSize: '0.9rem' }}>{post.title}</p>
            </div>
          ))}
        </div>

        <div>
          <h2 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Recent Users</h2>
          {users.map((user: { id: number; name: string; email: string }) => (
            <div key={user.id} style={{ padding: '0.5rem 0', borderBottom: '1px solid #eee' }}>
              <p style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>{user.name}</p>
              <p style={{ fontSize: '0.8rem', color: '#666' }}>{user.email}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}