import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

const WORKFLOW = [
  { step: '01', title: 'Resume uploaded', desc: 'AI extracts skills, experience, and career signals', status: 'complete' },
  { step: '02', title: 'GitHub analyzed', desc: 'Repository quality, consistency, and tech breadth scored', status: 'complete' },
  { step: '03', title: 'Skills mapped', desc: '8 technical skills detected across 4 proficiency levels', status: 'complete' },
  { step: '04', title: 'Gaps detected', desc: 'System Design, Cloud, CI/CD identified as critical gaps', status: 'active' },
  { step: '05', title: 'Roadmap generated', desc: 'Personalized 6-month plan with weekly milestones', status: 'pending' },
];

const AGENTS = [
  { name: 'Resume Agent', role: 'Extracts career signals from resumes' },
  { name: 'GitHub Agent', role: 'Scores coding portfolio across 7 dimensions' },
  { name: 'Assessment Agent', role: 'Evaluates knowledge in DSA, OOP, OS, DBMS, CN' },
  { name: 'Gap Agent', role: 'Identifies missing skills for target role' },
  { name: 'Roadmap Agent', role: 'Generates milestone-based career plans' },
  { name: 'Mentor Agent', role: 'Provides contextual career guidance' },
];

export default function LandingPage() {
  return (
    <div>
      <section className="relative px-4 pt-24 pb-20 sm:pt-32 sm:pb-28">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-[var(--color-accent)]/[0.04] blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-3xl text-center">
          <motion.div {...fade(0)}>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border-strong)] bg-[var(--color-surface-2)] px-3 py-1 text-[11px] font-medium text-[var(--color-text-2)] mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-emerald)] animate-pulse-dot" />
              6 AI agents working in parallel
            </span>
          </motion.div>

          <motion.h1 {...fade(0.05)} className="text-[36px] sm:text-[48px] lg:text-[56px] font-semibold tracking-tight leading-[1.1] text-[var(--color-text-0)] mb-5">
            Your career{' '}
            <span className="gradient-text">command center</span>
          </motion.h1>

          <motion.p {...fade(0.1)} className="mx-auto max-w-lg text-[15px] leading-relaxed text-[var(--color-text-2)] mb-8">
            Ascend AI analyzes your resume, GitHub, and technical skills to build a roadmap that gets you to your target role. Not a template — a system that thinks.
          </motion.p>

          <motion.div {...fade(0.15)} className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link to="/login" className="btn-primary !px-6 !py-2.5 !text-[13px] no-underline">
              Start analysis →
            </Link>
            <a href="#how-it-works" className="btn-secondary !px-6 !py-2.5 !text-[13px] no-underline">
              See how it works
            </a>
          </motion.div>
        </div>
      </section>
      <section id="how-it-works" className="px-4 py-20 border-t border-[var(--color-border)]">
        <div className="mx-auto max-w-2xl">
          <motion.div {...fade()}>
            <p className="text-[11px] font-medium uppercase tracking-widest text-[var(--color-accent)] mb-3">How it works</p>
            <h2 className="text-[24px] sm:text-[30px] font-semibold tracking-tight text-[var(--color-text-0)] mb-3">Intelligence pipeline</h2>
            <p className="text-[14px] text-[var(--color-text-2)] mb-10 max-w-md">Your data flows through 6 specialized agents. Each one analyzes a different dimension of your career readiness.</p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-[11px] top-0 bottom-0 w-px bg-[var(--color-border)]" />

            <div className="space-y-0">
              {WORKFLOW.map((w, i) => (
                <motion.div key={w.step} {...fade(i * 0.08)} className="relative flex gap-5 pb-8 last:pb-0">
                  <div className={`relative z-10 mt-0.5 flex h-[22px] w-[22px] flex-shrink-0 items-center justify-center rounded-full border-2 text-[9px] font-bold ${
                    w.status === 'complete' ? 'border-[var(--color-emerald)] bg-[var(--color-emerald)] text-white' :
                    w.status === 'active' ? 'border-[var(--color-accent)] bg-[var(--color-surface-0)] text-[var(--color-accent)]' :
                    'border-[var(--color-text-3)] bg-[var(--color-surface-0)] text-[var(--color-text-3)]'
                  }`}>
                    {w.status === 'complete' ? '✓' : w.step}
                  </div>
                  <div>
                    <p className={`text-[14px] font-medium ${w.status === 'pending' ? 'text-[var(--color-text-3)]' : 'text-[var(--color-text-0)]'}`}>{w.title}</p>
                    <p className="text-[12px] text-[var(--color-text-3)] mt-0.5">{w.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section id="features" className="px-4 py-20 bg-[var(--color-surface-1)] border-t border-b border-[var(--color-border)]">
        <div className="mx-auto max-w-4xl">
          <motion.div {...fade()} className="mb-12">
            <p className="text-[11px] font-medium uppercase tracking-widest text-[var(--color-accent)] mb-3">Features</p>
            <h2 className="text-[24px] sm:text-[30px] font-semibold tracking-tight text-[var(--color-text-0)]">Not just analysis — intelligence</h2>
          </motion.div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <motion.div {...fade(0.05)} className="sm:col-span-2 surface-2 rounded-xl p-6">
              <p className="text-[11px] font-medium uppercase tracking-wider text-[var(--color-teal)] mb-2">Resume Intelligence</p>
              <p className="text-[15px] font-medium text-[var(--color-text-0)] mb-2">ATS scoring with keyword heatmap</p>
              <p className="text-[12px] text-[var(--color-text-3)] leading-relaxed mb-4">See exactly why your resume scores what it does. Keyword matching, career signal detection, and prioritized improvement suggestions.</p>
              <div className="flex gap-2 flex-wrap">
                {['ATS Score', 'Keyword Match', 'Skill Map', 'Career Signals'].map(t => (
                  <span key={t} className="tag bg-[var(--color-teal-muted)] text-[var(--color-teal)]">{t}</span>
                ))}
              </div>
            </motion.div>

            <motion.div {...fade(0.1)} className="surface-2 rounded-xl p-6">
              <p className="text-[11px] font-medium uppercase tracking-wider text-[var(--color-accent)] mb-2">GitHub Analysis</p>
              <p className="text-[15px] font-medium text-[var(--color-text-0)] mb-2">7-dimension developer scoring</p>
              <p className="text-[12px] text-[var(--color-text-3)] leading-relaxed">Repository quality, consistency, open-source, complexity, breadth, and contribution scores.</p>
            </motion.div>

            <motion.div {...fade(0.15)} className="surface-2 rounded-xl p-6">
              <p className="text-[11px] font-medium uppercase tracking-wider text-[var(--color-amber)] mb-2">Assessment</p>
              <p className="text-[15px] font-medium text-[var(--color-text-0)] mb-2">5-subject technical evaluation</p>
              <p className="text-[12px] text-[var(--color-text-3)] leading-relaxed">DSA, OOP, OS, DBMS, and Computer Networks with per-topic strength analysis.</p>
            </motion.div>

            <motion.div {...fade(0.2)} className="surface-2 rounded-xl p-6">
              <p className="text-[11px] font-medium uppercase tracking-wider text-[var(--color-emerald)] mb-2">Roadmap</p>
              <p className="text-[15px] font-medium text-[var(--color-text-0)] mb-2">Mission-plan career development</p>
              <p className="text-[12px] text-[var(--color-text-3)] leading-relaxed">Milestones, weekly goals, skill dependencies, and interview prep phases.</p>
            </motion.div>

            <motion.div {...fade(0.25)} className="surface-2 rounded-xl p-6">
              <p className="text-[11px] font-medium uppercase tracking-wider text-[var(--color-rose)] mb-2">AI Mentor</p>
              <p className="text-[15px] font-medium text-[var(--color-text-0)] mb-2">Context-aware career guidance</p>
              <p className="text-[12px] text-[var(--color-text-3)] leading-relaxed">Your mentor knows your profile, gaps, and roadmap. Every recommendation is personalized.</p>
            </motion.div>
          </div>
        </div>
      </section>
      <section id="agents" className="px-4 py-20">
        <div className="mx-auto max-w-3xl">
          <motion.div {...fade()} className="mb-10">
            <p className="text-[11px] font-medium uppercase tracking-widest text-[var(--color-accent)] mb-3">Architecture</p>
            <h2 className="text-[24px] sm:text-[30px] font-semibold tracking-tight text-[var(--color-text-0)] mb-3">Orchestrated multi-agent system</h2>
            <p className="text-[14px] text-[var(--color-text-2)] max-w-md">Six specialized agents coordinated by an orchestrator. Each masters one dimension of career intelligence.</p>
          </motion.div>

          <div className="surface-2 rounded-xl divide-y divide-[var(--color-border)]">
            {AGENTS.map((a, i) => (
              <motion.div key={a.name} {...fade(i * 0.05)} className="flex items-center justify-between px-5 py-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[var(--color-accent-muted)] text-[11px] font-bold text-[var(--color-accent)] tabular-nums">{String(i + 1).padStart(2, '0')}</span>
                  <p className="text-[13px] font-medium text-[var(--color-text-0)]">{a.name}</p>
                </div>
                <p className="text-[12px] text-[var(--color-text-3)] hidden sm:block">{a.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="px-4 py-20 border-t border-[var(--color-border)]">
        <motion.div {...fade()} className="mx-auto max-w-lg text-center">
          <h2 className="text-[24px] sm:text-[30px] font-semibold tracking-tight text-[var(--color-text-0)] mb-3">Ready to start?</h2>
          <p className="text-[14px] text-[var(--color-text-2)] mb-6">Takes 10 minutes. Get your complete career intelligence report.</p>
          <Link to="/login" className="btn-primary !px-8 !py-3 no-underline">Begin analysis</Link>
        </motion.div>
      </section>
    </div>
  );
}
