export default function Dashboard() {
    return (
        <div>
            <div className="context-header" style={{ textAlign: 'left', marginBottom: 'var(--space-40)' }}>
                <h1 style={{ marginBottom: 'var(--space-8)' }}>Dashboard</h1>
                <p style={{ margin: 0 }}>Your precision-matched opportunities.</p>
            </div>

            <div className="empty-state">
                <div style={{ fontSize: '1.25rem', fontWeight: 500, color: 'var(--text-primary)', marginBottom: 'var(--space-8)' }}>
                    No jobs yet.
                </div>
                <div>In the next step, you will load a realistic dataset.</div>
            </div>
        </div>
    )
}
