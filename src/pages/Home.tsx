import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div style={{ textAlign: 'center', paddingTop: 'var(--space-64)' }}>
            <h1 style={{ fontSize: '4rem', marginBottom: 'var(--space-16)' }}>Stop Missing The Right Jobs.</h1>
            <p style={{ fontSize: '1.25rem', margin: '0 auto var(--space-40)', maxWidth: '600px' }}>
                Precision-matched job discovery delivered daily at 9AM.
            </p>
            <Link to="/settings" className="btn btn-primary" style={{ padding: '16px 32px', fontSize: '1.125rem' }}>
                Start Tracking
            </Link>
        </div>
    )
}
