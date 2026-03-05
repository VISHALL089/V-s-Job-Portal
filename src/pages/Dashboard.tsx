import { useState, useMemo } from 'react'
import { JOBS, Job } from '../data/jobs'
import { JobCard, JobModal } from '../components/JobComponents'

export default function Dashboard() {
    const [keyword, setKeyword] = useState('');
    const [locationStr, setLocationStr] = useState('');
    const [mode, setMode] = useState('');
    const [experience, setExperience] = useState('');
    const [source, setSource] = useState('');
    const [sortBy, setSortBy] = useState('latest');

    const [selectedJob, setSelectedJob] = useState<Job | null>(null);
    const [savedJobIds, setSavedJobIds] = useState<string[]>(() => {
        const saved = localStorage.getItem('savedJobs');
        return saved ? JSON.parse(saved) : [];
    });

    const toggleSaveJob = (jobId: string) => {
        setSavedJobIds(prev => {
            const isSaved = prev.includes(jobId);
            const updated = isSaved ? prev.filter(id => id !== jobId) : [...prev, jobId];
            localStorage.setItem('savedJobs', JSON.stringify(updated));
            return updated;
        });
    };

    const filteredJobs = useMemo(() => {
        return JOBS.filter(job => {
            const matchesKeyword = keyword === '' ||
                job.title.toLowerCase().includes(keyword.toLowerCase()) ||
                job.company.toLowerCase().includes(keyword.toLowerCase());
            const matchesLocation = locationStr === '' || job.location.toLowerCase().includes(locationStr.toLowerCase());
            const matchesMode = mode === '' || job.mode === mode;
            const matchesExp = experience === '' || job.experience === experience;
            const matchesSource = source === '' || job.source === source;

            return matchesKeyword && matchesLocation && matchesMode && matchesExp && matchesSource;
        }).sort((a, b) => {
            if (sortBy === 'latest') return a.postedDaysAgo - b.postedDaysAgo;
            // 'company' sort alphabetical
            if (sortBy === 'company') return a.company.localeCompare(b.company);
            return 0; // Default
        });
    }, [keyword, locationStr, mode, experience, source, sortBy]);

    return (
        <div>
            <div className="context-header" style={{ textAlign: 'left', marginBottom: 'var(--space-40)' }}>
                <h1 style={{ marginBottom: 'var(--space-8)' }}>Dashboard</h1>
                <p style={{ margin: 0 }}>Discover your precision-matched opportunities.</p>
            </div>

            {/* FILTER BAR UI */}
            <div className="card" style={{ padding: 'var(--space-16)', marginBottom: 'var(--space-24)' }}>
                <div style={{ display: 'flex', gap: 'var(--space-16)', flexWrap: 'wrap', alignItems: 'flex-end' }}>
                    <div style={{ flex: '1 1 200px' }}>
                        <label className="input-label" htmlFor="search-keyword">Keyword Search</label>
                        <input id="search-keyword" className="input-field" placeholder="Job title or company" value={keyword} onChange={e => setKeyword(e.target.value)} />
                    </div>
                    <div style={{ flex: '1 1 200px' }}>
                        <label className="input-label" htmlFor="location-filter">Location</label>
                        <input id="location-filter" className="input-field" placeholder="City" value={locationStr} onChange={e => setLocationStr(e.target.value)} />
                    </div>
                    <div style={{ flex: '1 1 120px' }}>
                        <label className="input-label" htmlFor="mode-filter">Mode</label>
                        <select id="mode-filter" className="input-field" value={mode} onChange={e => setMode(e.target.value)} style={{ appearance: 'auto' }}>
                            <option value="">All</option>
                            <option value="Remote">Remote</option>
                            <option value="Hybrid">Hybrid</option>
                            <option value="Onsite">Onsite</option>
                        </select>
                    </div>
                    <div style={{ flex: '1 1 120px' }}>
                        <label className="input-label" htmlFor="exp-filter">Experience</label>
                        <select id="exp-filter" className="input-field" value={experience} onChange={e => setExperience(e.target.value)} style={{ appearance: 'auto' }}>
                            <option value="">All</option>
                            <option value="Fresher">Fresher</option>
                            <option value="0-1">0-1 yrs</option>
                            <option value="1-3">1-3 yrs</option>
                            <option value="3-5">3-5 yrs</option>
                        </select>
                    </div>
                    <div style={{ flex: '1 1 120px' }}>
                        <label className="input-label" htmlFor="source-filter">Source</label>
                        <select id="source-filter" className="input-field" value={source} onChange={e => setSource(e.target.value)} style={{ appearance: 'auto' }}>
                            <option value="">All</option>
                            <option value="LinkedIn">LinkedIn</option>
                            <option value="Naukri">Naukri</option>
                            <option value="Indeed">Indeed</option>
                        </select>
                    </div>
                    <div style={{ flex: '1 1 120px' }}>
                        <label className="input-label" htmlFor="sort-filter">Sort</label>
                        <select id="sort-filter" className="input-field" value={sortBy} onChange={e => setSortBy(e.target.value)} style={{ appearance: 'auto' }}>
                            <option value="latest">Latest First</option>
                            <option value="company">Company</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* RENDER JOBS */}
            {filteredJobs.length === 0 ? (
                <div className="empty-state">
                    <div style={{ fontSize: '1.25rem', fontWeight: 500, color: 'var(--text-primary)', marginBottom: 'var(--space-8)' }}>
                        No matching jobs found.
                    </div>
                    <div>Try adjusting your filters to see more opportunities.</div>
                </div>
            ) : (
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
                    gap: 'var(--space-24)',
                    alignItems: 'stretch'
                }}>
                    {filteredJobs.map(job => (
                        <JobCard
                            key={job.id}
                            job={job}
                            onView={setSelectedJob}
                            onSave={toggleSaveJob}
                            isSaved={savedJobIds.includes(job.id)}
                        />
                    ))}
                </div>
            )}

            {/* MODAL */}
            <JobModal job={selectedJob} onClose={() => setSelectedJob(null)} />
        </div>
    )
}
