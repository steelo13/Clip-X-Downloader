
import React from 'react';
import { ChevronLeft, Shield } from 'lucide-react';

interface TermsPageProps {
  onBack: () => void;
}

const TermsPage: React.FC<TermsPageProps> = ({ onBack }) => {
  return (
    <div className="max-w-4xl mx-auto py-8 animate-in fade-in slide-in-from-bottom-4 duration-300">
      <button 
        onClick={onBack}
        className="inline-flex items-center text-slate-400 hover:text-slate-200 transition-colors font-medium group mb-8"
      >
        <ChevronLeft className="mr-1 group-hover:-translate-x-1 transition-transform" /> 
        Back to home
      </button>

      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 bg-sky-500/20 rounded-xl flex items-center justify-center text-sky-400">
            <Shield size={24} />
          </div>
          <h1 className="text-3xl font-bold">Terms of Service</h1>
        </div>

        <div className="space-y-6 text-slate-400 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-slate-200 mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing and using Clip X Downloader ("the Service"), you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you must not use our tools.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-200 mb-3">2. Description of Service</h2>
            <p>
              Clip X Downloader provides browser-based utilities for Twitter (X) users, including media downloading, text formatting, and analytics calculators. All processing is performed client-side in your browser.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-200 mb-3">3. Intellectual Property</h2>
            <p>
              Clip X Downloader is an independent project and is not affiliated, associated, authorized, endorsed by, or in any way officially connected with X Corp (Twitter). All trademarks and brand names belong to their respective owners.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-200 mb-3">4. User Responsibilities</h2>
            <p>
              Users are solely responsible for ensuring that their use of downloaded media complies with relevant copyright laws and the Terms of Service of X (Twitter). You must not use the Service for any illegal or unauthorized purpose.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-200 mb-3">5. Disclaimer of Warranties</h2>
            <p>
              The Service is provided "as is" and "as available" without any warranties of any kind. We do not guarantee that the Service will be uninterrupted, secure, or error-free.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-200 mb-3">6. Limitation of Liability</h2>
            <p>
              In no event shall Clip X Downloader be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of the Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-200 mb-3">7. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Your continued use of the Service following any changes constitutes your acceptance of the new terms.
            </p>
          </section>

          <p className="text-sm pt-8 border-t border-slate-800">
            Last updated: January 15, 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
