export default function Settings() {
    return (
        <div>
            <div className="context-header" style={{ textAlign: 'left', marginBottom: 'var(--space-40)' }}>
                <h1 style={{ marginBottom: 'var(--space-8)' }}>Tracking Settings</h1>
                <p style={{ margin: 0 }}>Define your perfect opportunity profile.</p>
            </div>

            <div className="workspace-layout">
                <div className="primary-workspace card">
                    <div style={{ display: 'grid', gap: 'var(--space-24)' }}>
                        <div>
                            <label className="input-label" htmlFor="role-keywords">Role Keywords</label>
                            <input id="role-keywords" className="input-field" type="text" placeholder="e.g. Frontend, React, Product Designer" />
                        </div>

                        <div>
                            <label className="input-label" htmlFor="locations">Preferred Locations</label>
                            <input id="locations" className="input-field" type="text" placeholder="e.g. San Francisco, New York, London" />
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-24)' }}>
                            <div>
                                <label className="input-label" htmlFor="mode">Mode</label>
                                <select id="mode" className="input-field" style={{ appearance: 'auto' }}>
                                    <option value="">Select Mode...</option>
                                    <option value="remote">Remote</option>
                                    <option value="hybrid">Hybrid</option>
                                    <option value="onsite">Onsite</option>
                                </select>
                            </div>

                            <div>
                                <label className="input-label" htmlFor="experience">Experience Level</label>
                                <select id="experience" className="input-field" style={{ appearance: 'auto' }}>
                                    <option value="">Select Level...</option>
                                    <option value="junior">Junior (0-2 yrs)</option>
                                    <option value="mid">Mid-Level (3-5 yrs)</option>
                                    <option value="senior">Senior (5+ yrs)</option>
                                    <option value="lead">Lead / Staff</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div style={{ marginTop: 'var(--space-40)', display: 'flex', justifyContent: 'flex-end' }}>
                        <button className="btn btn-primary">Save Preferences</button>
                    </div>
                </div>

                <div className="secondary-panel">
                    <div className="card">
                        <h3 style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', marginBottom: 'var(--space-8)' }}>Why this matters</h3>
                        <p style={{ fontSize: '0.875rem', marginBottom: 0 }}>
                            Your preferences act as strict filters for the daily digest. The more precise you are, the higher the signal-to-noise ratio in your matches.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
