import { useState, useMemo } from 'react'
import { Bookmark } from 'lucide-react'
import { JOBS, Job } from '../data/jobs'
import { JobCard, JobModal } from '../components/JobComponents'

export default function Saved() {
    const [selectedJob, setSelectedJob] = useState<Job | null>(null);

    // State initialization matching Dashboard
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

    const savedJobs = useMemo(() => {
        return JOBS.filter(job => savedJobIds.includes(job.id));
    }, [savedJobIds]);

    return (
        <div>
            <div className="context-header" style={{ textAlign: 'left', marginBottom: 'var(--space-40)' }}>
                <h1 style={{ marginBottom: 'var(--space-8)' }}>Saved Opportunities</h1>
                <p style={{ margin: 0 }}>Jobs you have bookmarked for later consideration.</p>
            </div>

            {savedJobs.length === 0 ? (
                <div className="empty-state" style={{ padding: 'var(--space-64)' }}>
                    <Bookmark size={48} color="var(--border-color)" style={{ marginBottom: 'var(--space-16)' }} />
                    <div style={{ fontSize: '1.25rem', fontWeight: 500, color: 'var(--text-primary)', marginBottom: 'var(--space-8)' }}>
                        Your saved list is calm and empty.
                    </div>
                    <div>When you bookmark a job, it will appear here for deep review.</div>
                </div>
            ) : (
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
                    gap: 'var(--space-24)',
                    alignItems: 'stretch'
                }}>
                    {savedJobs.map(job => (
                        <JobCard
                            key={job.id}
                            job={job}
                            onView={setSelectedJob}
                            onSave={toggleSaveJob}
                            isSaved={true}
                        />
                    ))}
                </div>
            )}

            {/* MODAL */}
            <JobModal job={selectedJob} onClose={() => setSelectedJob(null)} />
        </div>
    )
}
