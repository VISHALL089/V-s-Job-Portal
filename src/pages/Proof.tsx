import { CheckCircle } from 'lucide-react'

export default function Proof() {
    return (
        <div>
            <div className="context-header" style={{ textAlign: 'left', marginBottom: 'var(--space-40)' }}>
                <h1 style={{ marginBottom: 'var(--space-8)' }}>System Proof</h1>
                <p style={{ margin: 0 }}>Artifact collection and validation.</p>
            </div>

            <div className="card">
                <h2 style={{ fontFamily: 'var(--font-body)', fontSize: '1.125rem', marginBottom: 'var(--space-24)' }}>Validation Checklist</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-16)' }}>
                    <label className="checkbox-item">
                        <input type="checkbox" defaultChecked />
                        <CheckCircle size={14} color="var(--success-color)" /> Routing System Built
                    </label>
                    <label className="checkbox-item">
                        <input type="checkbox" defaultChecked />
                        <CheckCircle size={14} color="var(--success-color)" /> Landing Page Crafted
                    </label>
                    <label className="checkbox-item">
                        <input type="checkbox" defaultChecked />
                        <CheckCircle size={14} color="var(--success-color)" /> Settings Skeleton Built
                    </label>
                    <label className="checkbox-item">
                        <input type="checkbox" defaultChecked />
                        <CheckCircle size={14} color="var(--success-color)" /> Premium Empty States Built
                    </label>
                    <label className="checkbox-item">
                        <input type="checkbox" />
                        <CheckCircle size={14} color="var(--border-color)" /> Dataset Loaded (Next)
                    </label>
                </div>
            </div>
        </div>
    )
}
