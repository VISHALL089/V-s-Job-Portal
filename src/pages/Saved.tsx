import { Bookmark } from 'lucide-react'

export default function Saved() {
    return (
        <div>
            <div className="context-header" style={{ textAlign: 'left', marginBottom: 'var(--space-40)' }}>
                <h1 style={{ marginBottom: 'var(--space-8)' }}>Saved Opportunities</h1>
                <p style={{ margin: 0 }}>Jobs you have bookmarked for later consideration.</p>
            </div>

            <div className="empty-state" style={{ padding: 'var(--space-64)' }}>
                <Bookmark size={48} color="var(--border-color)" style={{ marginBottom: 'var(--space-16)' }} />
                <div style={{ fontSize: '1.25rem', fontWeight: 500, color: 'var(--text-primary)', marginBottom: 'var(--space-8)' }}>
                    Your saved list is calm and empty.
                </div>
                <div>When you bookmark a job, it will appear here for deep review.</div>
            </div>
        </div>
    )
}
