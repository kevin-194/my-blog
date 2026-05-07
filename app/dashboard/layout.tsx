import Link from 'next/link'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>

      <aside style={{
        width: '200px',
        borderRight: '1px solid #eee',
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
      }}>
        <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Dashboard</p>
        <Link href="/dashboard">Home</Link>
        <Link href="/dashboard/settings">Settings</Link>
        <Link href="/dashboard/profile">Profile</Link>
      </aside>

      <main style={{ flex: 1, padding: '2rem' }}>
        {children}
      </main>

    </div>
  )
}