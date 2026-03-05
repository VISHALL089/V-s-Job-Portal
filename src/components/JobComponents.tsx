import { useState, useEffect } from 'react'
import { Briefcase, MapPin, Clock, DollarSign, Bookmark, ExternalLink } from 'lucide-react'
import { Job } from '../data/jobs'

interface JobCardProps {
    job: Job;
    onView: (job: Job) => void;
    onSave: (jobId: string) => void;
    isSaved?: boolean;
}

export function JobCard({ job, onView, onSave, isSaved = false }: JobCardProps) {
    const sourceColor =
        job.source === 'LinkedIn' ? '#0077b5' :
            job.source === 'Naukri' ? '#072e61' : '#003a9b';

    return (
        <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-16)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                    <h3 style={{ margin: 0, fontSize: '1.125rem', color: 'var(--text-primary)' }}>{job.title}</h3>
                    <div style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>{job.company}</div>
                </div>
                <span
                    style={{
                        fontSize: '0.75rem',
                        padding: '2px 8px',
                        borderRadius: '12px',
                        backgroundColor: `${sourceColor}20`,
                        color: sourceColor,
                        fontWeight: 600
                    }}>
                    {job.source}
                </span>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-16)', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <MapPin size={16} /> {job.location} • {job.mode}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Briefcase size={16} /> {job.experience}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <DollarSign size={16} /> {job.salaryRange}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Clock size={16} /> {job.postedDaysAgo === 0 ? 'Today' : `${job.postedDaysAgo} days ago`}
                </div>
            </div>

            <div style={{ display: 'flex', gap: 'var(--space-8)', marginTop: 'auto', paddingTop: 'var(--space-16)' }}>
                <button className="btn btn-secondary" style={{ flex: 1 }} onClick={() => onView(job)}>
                    View
                </button>
                <button
                    className="btn btn-secondary"
                    style={{
                        flex: 1,
                        borderColor: isSaved ? 'var(--accent-color)' : '',
                        color: isSaved ? 'var(--accent-color)' : ''
                    }}
                    onClick={() => onSave(job.id)}
                >
                    <Bookmark size={16} fill={isSaved ? 'var(--accent-color)' : 'none'} color={isSaved ? 'var(--accent-color)' : 'currentColor'} />
                    {isSaved ? 'Saved' : 'Save'}
                </button>
                <a href={job.applyUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ flex: 1 }}>
                    Apply <ExternalLink size={16} />
                </a>
            </div>
        </div>
    )
}

export function JobModal({ job, onClose }: { job: Job | null, onClose: () => void }) {
    // Lock body scroll when modal is open
    useEffect(() => {
        if (job) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; }
    }, [job]);

    if (!job) return null;

    return (
        <div style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 50,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: 'var(--space-24)'
        }}>
            <div className="card" style={{ width: '100%', maxWidth: '600px', maxHeight: '90vh', overflowY: 'auto' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--space-24)' }}>
                    <div>
                        <h2 style={{ margin: 0, fontSize: '1.5rem', fontFamily: 'var(--font-heading)' }}>{job.title}</h2>
                        <div style={{ fontSize: '1.125rem', color: 'var(--text-secondary)' }}>{job.company}</div>
                    </div>
                    <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.5rem', color: 'var(--text-secondary)' }}>&times;</button>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-16)', marginBottom: 'var(--space-24)' }}>
                    <div style={{ display: 'flex', gap: 'var(--space-16)', flexWrap: 'wrap', paddingBottom: 'var(--space-16)', borderBottom: '1px solid var(--border-color)' }}>
                        <div><strong>Location:</strong> {job.location} ({job.mode})</div>
                        <div><strong>Experience:</strong> {job.experience}</div>
                        <div><strong>Salary:</strong> {job.salaryRange}</div>
                        <div><strong>Posted:</strong> {job.postedDaysAgo === 0 ? 'Today' : `${job.postedDaysAgo} days ago`}</div>
                        <div><strong>Source:</strong> {job.source}</div>
                    </div>

                    <div>
                        <h3 style={{ fontSize: '1rem', marginBottom: 'var(--space-8)' }}>Description</h3>
                        <p style={{ margin: 0, color: 'var(--text-secondary)' }}>{job.description}</p>
                    </div>

                    <div>
                        <h3 style={{ fontSize: '1rem', marginBottom: 'var(--space-8)' }}>Key Skills</h3>
                        <div style={{ display: 'flex', gap: 'var(--space-8)', flexWrap: 'wrap' }}>
                            {job.skills.map(skill => (
                                <span key={skill} style={{ padding: '4px 12px', backgroundColor: 'var(--bg-color)', border: '1px solid var(--border-color)', borderRadius: '16px', fontSize: '0.875rem' }}>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div style={{ display: 'flex', gap: 'var(--space-16)', justifyContent: 'flex-end', paddingTop: 'var(--space-16)', borderTop: '1px solid var(--border-color)' }}>
                    <button className="btn btn-secondary" onClick={onClose}>Close</button>
                    <a href={job.applyUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                        Apply Now
                    </a>
                </div>
            </div>
        </div>
    )
}
