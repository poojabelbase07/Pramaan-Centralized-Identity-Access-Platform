import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Mail, Lock, ArrowLeft, AlertCircle } from 'lucide-react';
import LanguageToggle from '../components/LanguageToggle';

export default function LoginPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // TODO: Call backend API
      console.log('Login:', formData);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-red-50 
                    flex items-center justify-center px-4">
      <LanguageToggle />

      {/* Back Button */}
      <button
        onClick={() => navigate('/')}
        className="fixed top-6 left-6 flex items-center gap-2 text-gray-600 
                   hover:text-red-600 transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        <span className="font-medium">Back</span>
      </button>

      {/* Login Card */}
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 
                          bg-gradient-to-br from-red-600 to-red-700 
                          rounded-full mb-4 shadow-lg shadow-red-600/30">
            <svg className="w-9 h-9 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {t('auth.login.title')}
          </h1>
          <p className="text-gray-600">{t('auth.login.subtitle')}</p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl 
                            flex items-center gap-3 text-red-700">
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <p className="text-sm">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('auth.login.email')}
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl
                           focus:border-red-500 focus:outline-none transition-colors
                           text-gray-800 placeholder-gray-400"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('auth.login.password')}
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl
                           focus:border-red-500 focus:outline-none transition-colors
                           text-gray-800"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-red-600 text-white rounded-xl font-semibold
                       hover:bg-red-700 transition-all duration-300
                       hover:shadow-lg hover:shadow-red-600/30
                       disabled:bg-gray-400 disabled:cursor-not-allowed
                       active:scale-95"
            >
              {loading ? 'Signing in...' : t('auth.login.submit')}
            </button>
          </form>

          {/* Register Link */}
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              {t('auth.login.noAccount')}{' '}
              <Link
                to="/register"
                className="text-red-600 font-semibold hover:text-red-700 
                         hover:underline transition-colors"
              >
                {t('auth.login.createAccount')}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}