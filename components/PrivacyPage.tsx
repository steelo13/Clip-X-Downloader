
import React from 'react';
import { ChevronLeft, Lock } from 'lucide-react';

interface PrivacyPageProps {
  onBack: () => void;
}

const PrivacyPage: React.FC<PrivacyPageProps> = ({ onBack }) => {
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
            <Lock size={24} />
          </div>
          <h1 className="text-3xl font-bold">Privacy Policy</h1>
        </div>

        <div className="space-y-6 text-slate-400 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-slate-200 mb-3">1. Privacy First</h2>
            <p>
              Clip X Downloader is built with a "Privacy First" philosophy. We believe that your data belongs to you, and we have designed our tools to ensure it stays that way.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-200 mb-3">2. No Data Collection</h2>
            <p>
              We do not collect, store, or transmit any personal information, tweet content, or media files to our servers. All tool logic is executed entirely within your web browser. 
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-200 mb-3">3. Local Browser Processing</h2>
            <p>
              When you paste a link, format text, or calculate engagement rates, the computation happens on your device. Your inputs and outputs never leave your browser environment.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-200 mb-3">4. Third-Party Links</h2>
            <p>
              Our tools interact with public content hosted by X (Twitter). When downloading media or profile pictures, your browser communicates directly with X's content delivery networks. We recommend reviewing X's own Privacy Policy for how they handle your requests.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-200 mb-3">5. Cookies and Analytics</h2>
            <p>
              We do not use tracking cookies or persistent identifiers. We may use anonymous, privacy-respecting analytics to understand general usage patterns without identifying individual users.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-200 mb-3">6. Security</h2>
            <p>
              Because no data is stored on our servers, there is no central database that could be compromised. The security of your data is as robust as your own web browser and device security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-200 mb-3">7. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please reach out to us via our support channels.
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

export default PrivacyPage;
