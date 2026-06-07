import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';

export default function LoginPage() {
  const navigate = useNavigate();
  const { login, loading } = useAuth();

  const handleLogin = async () => {
    await login();
    navigate('/goal-setup');
  };

  return (
    <div className="flex min-h-[calc(100vh-3.5rem)] items-center justify-center px-4">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="w-full max-w-sm">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-accent)]">
            <span className="text-sm font-bold text-white">A</span>
          </div>
          <h1 className="text-[22px] font-semibold tracking-tight text-[var(--color-text-0)] mb-1.5">Welcome back</h1>
          <p className="text-[13px] text-[var(--color-text-2)]">Sign in to continue your career analysis</p>
        </div>

        <div className="surface-2 rounded-xl p-6">
          <button
            onClick={handleLogin}
            disabled={loading}
            className="flex w-full items-center justify-center gap-2.5 rounded-lg border border-[var(--color-border-strong)] bg-white/[0.02] px-4 py-2.5 text-[13px] font-medium text-[var(--color-text-0)] transition-all hover:bg-white/[0.05] cursor-pointer disabled:opacity-50"
          >
            {loading ? (
              <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-[var(--color-text-3)] border-t-[var(--color-text-0)]" />
            ) : (
              <svg className="h-4 w-4" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
            )}
            Continue with Google
          </button>

          <div className="my-4 flex items-center gap-3">
            <div className="h-px flex-1 bg-[var(--color-border)]" />
            <span className="text-[11px] text-[var(--color-text-3)]">or</span>
            <div className="h-px flex-1 bg-[var(--color-border)]" />
          </div>

          <button onClick={handleLogin} disabled={loading} className="btn-primary w-full disabled:opacity-50">
            Try demo account
          </button>
        </div>

        <p className="mt-4 text-center text-[11px] text-[var(--color-text-3)]">
          By continuing, you agree to our Terms and Privacy Policy.
        </p>
      </motion.div>
    </div>
  );
}
