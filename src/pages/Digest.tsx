import { Mail } from 'lucide-react'

export default function Digest() {
    return (
        <div>
            <div className="context-header" style={{ textAlign: 'left', marginBottom: 'var(--space-40)' }}>
                <h1 style={{ marginBottom: 'var(--space-8)' }}>Daily Digest</h1>
                <p style={{ margin: 0 }}>Your curated 9AM delivery.</p>
            </div>

            <div className="empty-state" style={{ padding: 'var(--space-64)' }}>
                <Mail size={48} color="var(--border-color)" style={{ marginBottom: 'var(--space-16)' }} />
                <div style={{ fontSize: '1.25rem', fontWeight: 500, color: 'var(--text-primary)', marginBottom: 'var(--space-8)' }}>
                    No digest generated today.
                </div>
                <div>Configure your settings to start receiving your daily matches.</div>
            </div>
        </div>
    )
}
