import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as roadmapService from '../services/roadmapService';
import { useRoadmap } from '../context/RoadmapContext';
import RoadmapCard from '../components/RoadmapCard';
import LoadingSpinner from '../components/LoadingSpinner';

export default function RoadmapPage() {
  const navigate = useNavigate();
  const { roadmapData, generateRoadmap } = useRoadmap();
  const [tab, setTab] = useState('must-do');
  const [loading, setLoading] = useState(!roadmapData.generated);

  useEffect(() => {
    if (!roadmapData.generated) {
      roadmapService.generateRoadmap().then((d) => { generateRoadmap(d); setLoading(false); });
    }
  }, [roadmapData.generated, generateRoadmap]);

  if (loading) return <div className="flex min-h-[50vh] items-center justify-center"><LoadingSpinner text="Building your mission plan..." /></div>;

  const { mustDo, recommended, milestones, estimatedTimeline, readinessScore, gapAnalysis } = roadmapData;

  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      <div className="mx-auto max-w-3xl">
        <div className="mb-6 flex items-start justify-between flex-wrap gap-3">
          <div>
            <h1 className="text-[22px] font-semibold tracking-tight text-[var(--color-text-0)] mb-1">Mission plan</h1>
            <p className="text-[13px] text-[var(--color-text-2)]">Your personalized career development roadmap.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-[10px] text-[var(--color-text-3)]">Readiness</p>
              <p className="text-[18px] font-semibold text-[var(--color-text-0)] tabular-nums">{readinessScore}</p>
            </div>
            <div className="text-right">
              <p className="text-[10px] text-[var(--color-text-3)]">Timeline</p>
              <p className="text-[14px] font-medium text-[var(--color-accent)]">{estimatedTimeline}</p>
            </div>
          </div>
        </div>

        <div className="surface-2 rounded-xl p-4 mb-6">
          <p className="text-[11px] font-medium text-[var(--color-text-0)] mb-2">Key gaps to close</p>
          <div className="flex flex-wrap gap-1.5">
            {gapAnalysis.missingSkills.slice(0, 5).map((s) => (
              <span key={s} className="tag bg-[var(--color-rose-muted)] text-[var(--color-rose)]">{s}</span>
            ))}
            {gapAnalysis.improvementAreas.slice(0, 3).map((s) => (
              <span key={s} className="tag bg-[var(--color-amber-muted)] text-[var(--color-amber)]">{s}</span>
            ))}
          </div>
        </div>
        <div className="mb-4 flex gap-1 bg-[var(--color-surface-2)] rounded-lg p-1 w-fit">
          {[{ k: 'must-do', l: 'Required', c: mustDo.length }, { k: 'recommended', l: 'Suggested', c: recommended.length }].map((t) => (
            <button
              key={t.k}
              onClick={() => setTab(t.k)}
              className={`rounded-md px-3.5 py-1.5 text-[12px] font-medium transition-all cursor-pointer border-none ${
                tab === t.k ? 'bg-[var(--color-surface-3)] text-[var(--color-text-0)]' : 'text-[var(--color-text-3)] hover:text-[var(--color-text-1)]'
              }`}
            >
              {t.l} <span className="ml-1 text-[10px] opacity-60">{t.c}</span>
            </button>
          ))}
        </div>
        <div className="surface-2 rounded-xl mb-6 divide-y divide-[var(--color-border)]">
          {(tab === 'must-do' ? mustDo : recommended).map((task, i) => (
            <motion.div key={task.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.05 }}>
              <RoadmapCard title={task.title} description={task.description} priority={tab === 'must-do' ? 'must-do' : 'recommended'} status={task.status} duration={task.duration} category={task.category} />
            </motion.div>
          ))}
        </div>
        <div className="surface-2 rounded-xl p-5 mb-6">
          <p className="text-[12px] font-medium text-[var(--color-text-0)] mb-5">Milestones</p>
          <div className="relative">
            <div className="absolute left-[5px] top-0 bottom-0 w-px bg-[var(--color-border)]" />
            <div className="space-y-5">
              {milestones.map((m, i) => (
                <motion.div key={m.month} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08 }} className="relative flex gap-4 pl-0">
                  <div className={`relative z-10 mt-1 h-[10px] w-[10px] flex-shrink-0 rounded-full border-2 ${m.completed ? 'border-[var(--color-emerald)] bg-[var(--color-emerald)]' : 'border-[var(--color-text-3)] bg-[var(--color-surface-0)]'}`} />
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="text-[10px] font-medium text-[var(--color-accent)] tabular-nums">Month {m.month}</p>
                    </div>
                    <p className="text-[13px] font-medium text-[var(--color-text-0)]">{m.title}</p>
                    <p className="text-[11px] text-[var(--color-text-3)] mt-0.5">{m.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <button onClick={() => navigate('/mentor')} className="btn-primary w-full !py-2.5">Talk to AI mentor →</button>
      </div>
    </motion.div>
  );
}
