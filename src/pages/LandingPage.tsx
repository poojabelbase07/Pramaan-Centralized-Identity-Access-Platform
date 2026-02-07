import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Shield, Users, Globe2 } from 'lucide-react';
import LanguageToggle from '../components/LanguageToggle';

export default function LandingPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <LanguageToggle />

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] 
                        from-red-50 via-transparent to-transparent opacity-40" />
        
        <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-32">
          {/* Logo & Organization Name */}
          <div className="text-center mb-12 animate-fade-in">
            {/* Logo Circle */}
            <div className="inline-flex items-center justify-center w-24 h-24 
                            bg-gradient-to-br from-red-600 to-red-700 
                            rounded-full mb-6 shadow-2xl shadow-red-600/30">
              <svg className="w-14 h-14 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
              </svg>
            </div>

            {/* Organization Name */}
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 
                           tracking-tight leading-tight">
              {t('landing.orgName')}
            </h1>
          </div>

          {/* System Name - Big & Bold */}
          <div className="text-center mb-8">
            <h2 className="text-5xl md:text-7xl font-black text-transparent 
                           bg-clip-text bg-gradient-to-r from-red-600 via-red-700 to-red-800
                           tracking-tighter leading-none mb-4">
              {t('landing.systemName')}
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 font-light">
              {t('landing.tagline')}
            </p>
          </div>

          {/* Description */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              {t('landing.description')}
            </p>
            <p className="text-base text-red-700 font-medium italic">
              {t('landing.mission')}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <button
              onClick={() => navigate('/register')}
              className="group px-8 py-4 bg-red-600 text-white rounded-full 
                       font-semibold text-lg shadow-lg shadow-red-600/30
                       hover:bg-red-700 hover:shadow-xl hover:shadow-red-600/40
                       transition-all duration-300 hover:scale-105 active:scale-95
                       flex items-center gap-2"
            >
              {t('landing.getStarted')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => navigate('/login')}
              className="px-8 py-4 bg-white text-gray-700 rounded-full 
                       font-semibold text-lg border-2 border-gray-200
                       hover:border-red-600 hover:text-red-600
                       transition-all duration-300 hover:scale-105 active:scale-95"
            >
              {t('landing.signIn')}
            </button>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <FeatureCard
              icon={<Shield className="w-8 h-8" />}
              title="Secure & Verified"
              description="Government-grade security for your digital identity"
            />
            <FeatureCard
              icon={<Users className="w-8 h-8" />}
              title="Community First"
              description="Connecting Nepali diaspora across India"
            />
            <FeatureCard
              icon={<Globe2 className="w-8 h-8" />}
              title="Instant Access"
              description="Download your ID card anytime, anywhere"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string 
}) {
  return (
    <div className="group p-6 bg-white/60 backdrop-blur-sm rounded-2xl 
                    border border-gray-200 hover:border-red-200
                    hover:shadow-lg transition-all duration-300">
      <div className="text-red-600 mb-4 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}