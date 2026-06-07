import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import ProgressBar from '../components/ProgressBar';

const fade = (d = 0) => ({ initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.4, delay: d } });

const ACTIVITIES = [
  { text: 'Resume analyzed — ATS score 72', time: '2h ago', type: 'resume' },
  { text: 'GitHub profile analyzed — 78/100', time: '3h ago', type: 'github' },
  { text: 'Assessment completed — 65/100', time: '5h ago', type: 'assessment' },
  { text: 'Personalized roadmap generated', time: '5h ago', type: 'roadmap' },
  { text: 'Career goals configured', time: '1d ago', type: 'goal' },
];

const RECOMMENDATIONS = [
  { text: 'Start with "Complete DSA Course" — highest impact task on your roadmap', priority: 'high' },
  { text: 'Add cloud platform experience to your resume to close the biggest skill gap', priority: 'high' },
  { text: 'Your GitHub consistency score is your strongest metric — maintain it', priority: 'medium' },
];

const WEAK = ['System Design', 'Cloud Services', 'Operating Systems'];
const STRONG = ['JavaScript', 'React', 'GitHub Consistency'];

export default function DashboardPage() {
  const { user } = useAuth();

  return (
    <motion.div {...fade()}>
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <motion.div {...fade(0)} className="mb-8">
          <h1 className="text-[22px] font-semibold tracking-tight text-[var(--color-text-0)]">
            Welcome, {user?.name?.split(' ')[0] || 'there'}
          </h1>
          <p className="text-[13px] text-[var(--color-text-2)] mt-1">Your career intelligence at a glance.</p>
        </motion.div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 mb-6">

          <motion.div {...fade(0.05)} className="lg:col-span-1 surface-2 rounded-xl p-5 flex flex-col items-center justify-center text-center">
            <p className="text-[10px] uppercase tracking-wider text-[var(--color-text-3)] mb-1">Readiness</p>
            <p className="text-[40px] font-semibold text-[var(--color-text-0)] tabular-nums leading-none">71</p>
            <p className="text-[11px] text-[var(--color-amber)] mt-1">Developing</p>
          </motion.div>
          <motion.div {...fade(0.1)} className="lg:col-span-3 surface-2 rounded-xl p-5">
            <p className="text-[12px] font-medium text-[var(--color-text-0)] mb-3">Scores</p>
            <div className="space-y-2.5">
              <ProgressBar value={72} label="Resume" color="accent" />
              <ProgressBar value={78} label="GitHub" color="teal" />
              <ProgressBar value={65} label="Assessment" color="amber" />
            </div>
          </motion.div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 mb-6">
          <motion.div {...fade(0.15)} className="lg:col-span-2 surface-2 rounded-xl p-5">
            <p className="text-[12px] font-medium text-[var(--color-text-0)] mb-3">AI recommendations</p>
            <div className="space-y-2.5">
              {RECOMMENDATIONS.map((r, i) => (
                <div key={i} className="flex gap-2.5">
                  <span className={`mt-1 h-1.5 w-1.5 rounded-full flex-shrink-0 ${r.priority === 'high' ? 'bg-[var(--color-amber)]' : 'bg-[var(--color-text-3)]'}`} />
                  <p className="text-[12px] text-[var(--color-text-2)] leading-relaxed">{r.text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fade(0.2)} className="surface-2 rounded-xl p-5">
            <p className="text-[12px] font-medium text-[var(--color-text-0)] mb-3">Next milestone</p>
            <p className="text-[11px] text-[var(--color-accent)] mb-1">Month 1</p>
            <p className="text-[14px] font-medium text-[var(--color-text-0)] mb-1">Foundation & DSA</p>
            <p className="text-[11px] text-[var(--color-text-3)] leading-relaxed">Complete core data structures and algorithm fundamentals</p>
            <Link to="/roadmap" className="mt-3 inline-block text-[11px] text-[var(--color-accent)] no-underline hover:underline">View roadmap →</Link>
          </motion.div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 mb-6">
          <motion.div {...fade(0.25)} className="lg:col-span-2 surface-2 rounded-xl p-5">
            <p className="text-[12px] font-medium text-[var(--color-text-0)] mb-3">Recent activity</p>
            <div className="space-y-0">
              {ACTIVITIES.map((a, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-[var(--color-border)] last:border-0">
                  <p className="text-[12px] text-[var(--color-text-2)]">{a.text}</p>
                  <span className="text-[10px] text-[var(--color-text-3)] flex-shrink-0 ml-3">{a.time}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fade(0.3)} className="surface-2 rounded-xl p-5">
            <div className="mb-4">
              <p className="text-[12px] font-medium text-[var(--color-emerald)] mb-2">Strong areas</p>
              {STRONG.map((s) => <p key={s} className="text-[12px] text-[var(--color-text-2)] py-0.5">· {s}</p>)}
            </div>
            <div>
              <p className="text-[12px] font-medium text-[var(--color-rose)] mb-2">Needs work</p>
              {WEAK.map((s) => <p key={s} className="text-[12px] text-[var(--color-text-2)] py-0.5">· {s}</p>)}
            </div>
          </motion.div>
        </div>
        <motion.div {...fade(0.35)} className="grid gap-2 sm:grid-cols-3">
          {[
            { label: 'Update resume', to: '/resume-upload' },
            { label: 'Retake assessment', to: '/assessment' },
            { label: 'Talk to mentor', to: '/mentor' },
          ].map((a) => (
            <Link key={a.to} to={a.to} className="surface-2 rounded-xl px-5 py-3.5 text-[13px] font-medium text-[var(--color-text-2)] transition-all hover:text-[var(--color-text-0)] hover:border-[var(--color-border-strong)] no-underline text-center">
              {a.label}
            </Link>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
