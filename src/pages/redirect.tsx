import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getTargetUrl } from '@/lib/links';
import { Loader2 } from 'lucide-react';

export default function RedirectPage() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  const [countdown, setCountdown] = useState(5);
  const [targetUrl, setTargetUrl] = useState('');

  useEffect(() => {
    if (id) {
      const url = getTargetUrl(id);
      if (url) setTargetUrl(url);
    }
  }, [id]);

  useEffect(() => {
    if (!targetUrl) return;
    const interval = setInterval(() => {
      setCountdown((c) => {
        if (c <= 1) {
          clearInterval(interval);
          window.open(targetUrl, '_blank', 'noopener,noreferrer');
        }
        return c - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [targetUrl]);

  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/20">
          <div className="text-center space-y-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <Loader2 className="w-12 h-12 text-blue-500 animate-spin" />
              </div> 
              <div className="relative">
                <h1 className="text-3xl font-bold text-white mb-2">Hold on!</h1>
                <div className="text-4xl font-bold text-blue-500 animate-pulse">
                  {countdown}
                </div>
              </div>
            </div>
            
            <p className="text-gray-300 text-lg">
              Redirecting to an external offer...
            </p>
            
            <div className="space-y-2">
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-blue-500 h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${(countdown / 5) * 100}%` }}
                />
              </div>
              <p className="text-sm text-gray-400">
                We are not responsible for third-party content
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
