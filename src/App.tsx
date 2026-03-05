import React from 'react'
import {
    CheckCircle,
    Copy,
    Wrench,
    Check,
    XCircle,
    Camera
} from 'lucide-react'

function App() {
    return (
        <div className="layout-container">
            {/* TOP BAR */}
            <header className="top-bar">
                <div className="top-bar-title">KodNest Premium Build System</div>
                <div className="top-bar-progress">Step 1 / 10</div>
                <div className="status-badge">In Progress</div>
            </header>

            {/* MAIN CONTENT */}
            <main className="main-content">
                {/* CONTEXT HEADER */}
                <div className="context-header">
                    <h1>System Initialization</h1>
                    <p style={{ margin: '0 auto' }}>
                        Establishing the absolute foundation of the design system. Calm, coherent, and perfectly aligned.
                    </p>
                </div>

                {/* WORKSPACE LAYOUT */}
                <div className="workspace-layout">
                    {/* PRIMARY WORKSPACE (70%) */}
                    <section className="primary-workspace card">
                        <h2 style={{ fontFamily: 'var(--font-body)', fontSize: '1.25rem' }}>Design System Validation</h2>
                        <p>Ensure all tokens are loading effectively. No gradients. No shadows. Maximum coherence.</p>

                        <div style={{ marginTop: 'var(--space-24)', padding: 'var(--space-24)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius)' }}>
                            <label className="input-label" htmlFor="demo-input">Example Calm Input</label>
                            <input id="demo-input" className="input-field" type="text" placeholder="Type precisely here..." />
                        </div>

                        <div style={{ marginTop: 'var(--space-24)' }} className="error-state">
                            <h3>System Error Detected</h3>
                            <p style={{ margin: 0, fontSize: '0.875rem' }}>The API key provided is not authenticated. Please navigate to settings and update the key to continue building.</p>
                        </div>

                        <div style={{ marginTop: 'var(--space-24)' }} className="empty-state">
                            <div>No elements have been dragged into the workspace.</div>
                            <button className="btn btn-secondary" style={{ marginTop: 'var(--space-16)' }}>
                                Initialize First Element
                            </button>
                        </div>
                    </section>

                    {/* SECONDARY PANEL (30%) */}
                    <aside className="secondary-panel">
                        <div className="card">
                            <h3 style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', marginBottom: 'var(--space-8)' }}>Step Explanation</h3>
                            <p style={{ fontSize: '0.875rem', marginBottom: 0 }}>
                                This step configures the global CSS variables and applies the structural layout framework. It establishes the Top Bar, Context Header, and Split Screen format.
                            </p>
                        </div>

                        <div className="card" style={{ padding: 'var(--space-16)' }}>
                            <h3 style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>System Prompt Box</h3>
                            <div className="prompt-box">
                                {`/* Base Variables Set */\nbackground: #F7F6F3;\ncolor: #111111;\naccent: #8B0000;`}
                            </div>
                        </div>

                        <div className="utility-buttons">
                            <button className="btn btn-primary" style={{ width: '100%' }}>
                                <Copy size={16} /> Copy Implementation
                            </button>
                            <button className="btn btn-secondary" style={{ width: '100%' }}>
                                <Wrench size={16} /> Build in Lovable
                            </button>
                            <button className="btn btn-secondary" style={{ width: '100%' }}>
                                <Check size={16} /> It Worked
                            </button>
                            <button className="btn btn-secondary" style={{ width: '100%' }}>
                                <XCircle size={16} /> Error
                            </button>
                            <button className="btn btn-secondary" style={{ width: '100%' }}>
                                <Camera size={16} /> Add Screenshot
                            </button>
                        </div>
                    </aside>
                </div>
            </main>

            {/* PROOF FOOTER */}
            <footer className="proof-footer">
                <label className="checkbox-item">
                    <input type="checkbox" defaultChecked />
                    <CheckCircle size={14} color="var(--success-color)" /> UI Built
                </label>
                <label className="checkbox-item">
                    <input type="checkbox" defaultChecked />
                    <CheckCircle size={14} color="var(--success-color)" /> Logic Working
                </label>
                <label className="checkbox-item">
                    <input type="checkbox" />
                    <CheckCircle size={14} /> Test Passed
                </label>
                <label className="checkbox-item">
                    <input type="checkbox" />
                    <CheckCircle size={14} /> Deployed
                </label>
            </footer>
        </div>
    )
}

export default App
