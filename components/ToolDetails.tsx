
import React, { useState } from 'react';
import { ToolDefinition, ToolCategory } from '../types';
import { ChevronLeft, Share2, Info, Check, Copy, Download, RefreshCw, Smartphone } from 'lucide-react';
import EngagementCalculator from './tools/EngagementCalculator';
import CharacterCounter from './tools/CharacterCounter';
import ProfilePicDownloader from './tools/ProfilePicDownloader';
import GiveawayWinner from './tools/GiveawayWinner';
import UnicodeGenerator from './tools/UnicodeGenerator';
import TextConverter from './tools/TextConverter';
import AdsCalculator from './tools/AdsCalculator';
import MediaDownloader from './tools/MediaDownloader';
import URLUtility from './tools/URLUtility';
import DesignTool from './tools/DesignTool';
import CreatorTools from './tools/CreatorTools';

interface ToolDetailsProps {
  tool: ToolDefinition;
  onBack: () => void;
  initialUrl?: string;
}

const ToolDetails: React.FC<ToolDetailsProps> = ({ tool, onBack, initialUrl }) => {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const defaultUsageSteps = [
    'Copy the relevant content from X.',
    'Paste it into the tool\'s input field above.',
    'Click "Process" or the action button for instant results.'
  ];

  const usageSteps = tool.usageSteps || defaultUsageSteps;

  const renderToolComponent = () => {
    switch (tool.id) {
      case 'eng-calc': return <EngagementCalculator />;
      case 'pfp-dl': return <ProfilePicDownloader initialValue={initialUrl} />;
      case 'winner-picker': return <GiveawayWinner />;
      case 'unicode-gen': return <UnicodeGenerator />;
      
      // Text Tools
      case 'case-conv':
      case 'tweet-cleaner':
      case 'line-breaker':
      case 'char-counter':
      case 'bio-formatter':
      case 'thread-fmt':
      case 'bio-link-gen':
        return <TextConverter type={tool.id} />;
      
      // Ads/Growth Tools
      case 'roi-calc':
      case 'cpm-calc':
      case 'growth-calc':
      case 'deal-est':
      case 'earnings-est':
      case 'imp-est':
      case 'rt-like-ratio':
      case 'monetize-elig':
        return <AdsCalculator type={tool.id} />;
      
      // URL Tools
      case 'url-cleaner':
      case 'id-finder':
      case 'profile-gen':
      case 'qr-gen':
      case 'utm-builder':
      case 'share-gen':
      case 'hashtag-link':
      case 'thread-link':
      case 'user-avail':
      case 'reply-builder':
      case 'card-preview':
        return <URLUtility type={tool.id} initialValue={initialUrl} />;

      // Media Tools
      case 'video-dl':
      case 'gif-dl':
      case 'img-dl':
      case 'space-dl':
      case 'media-ext':
      case 'header-dl':
      case 'thread-dl':
      case 'bookmark-export':
      case 'screenshot-gen':
        return <MediaDownloader type={tool.id} initialUrl={initialUrl} />;

      // Design Tools
      case 'img-resizer':
      case 'crop-tool':
      case 'pfp-crop':
      case 'header-safe':
      case 'aspect-ratio':
      case 'mockup-gen':
      case 'img-splitter':
      case 'grid-preview':
      case 'space-cover':
        return <DesignTool type={tool.id} />;

      // Creator Tools
      case 'calendar-gen':
      case 'time-planner':
      case 'template-gen':
      case 'idea-spinner':
      case 'limit-checker':
      case 'word-blocker':
      case 'rules-template':
      case 'pinned-planner':
      case 'audit-checklist':
        return <CreatorTools type={tool.id} />;

      default:
        return (
          <div className="bg-slate-900/50 rounded-2xl border border-slate-800 p-8 text-center">
            <div className="text-6xl mb-6">{tool.icon}</div>
            <h3 className="text-2xl font-bold mb-4">{tool.name}</h3>
            <p className="text-slate-400 max-w-md mx-auto mb-8">
              This specialized tool logic is currently being optimized for high-speed client-side performance. 
              Check back in a few minutes!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-lg mx-auto">
                <div className="p-4 bg-slate-800 rounded-xl border border-slate-700 text-left">
                    <h4 className="font-semibold text-sm mb-2">Pure Client Logic</h4>
                    <p className="text-xs text-slate-500">Fast processing without external requests.</p>
                </div>
                <div className="p-4 bg-slate-800 rounded-xl border border-slate-700 text-left">
                    <h4 className="font-semibold text-sm mb-2">Privacy First</h4>
                    <p className="text-xs text-slate-500">100% data secure. No tracking or storage.</p>
                </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <button 
          onClick={onBack}
          className="inline-flex items-center text-slate-400 hover:text-slate-200 transition-colors font-medium group"
        >
          <ChevronLeft className="mr-1 group-hover:-translate-x-1 transition-transform" /> 
          Back to all tools
        </button>
        <div className="flex items-center gap-2">
           <button 
            onClick={handleShare}
            className="p-2 bg-slate-900 border border-slate-800 text-slate-400 rounded-lg hover:text-sky-400 hover:border-sky-500/50 transition-all flex items-center gap-2 px-3"
           >
             {copied ? <Check size={18} /> : <Share2 size={18} />}
             <span className="text-sm font-medium">{copied ? 'Copied' : 'Share'}</span>
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-sky-500/20 rounded-2xl flex items-center justify-center text-3xl shadow-inner">
              {tool.icon}
            </div>
            <div>
              <h1 className="text-3xl font-bold mb-2">{tool.name}</h1>
              <p className="text-slate-400 leading-relaxed">{tool.description}</p>
            </div>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden min-h-[400px]">
            {renderToolComponent()}
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <h3 className="font-bold flex items-center gap-2 mb-4 text-slate-200">
              <Info size={18} className="text-sky-400" /> How to use
            </h3>
            <ul className="space-y-4">
              {usageSteps.map((step, index) => (
                <li key={index} className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-slate-800 text-sky-400 flex items-center justify-center text-xs font-bold flex-shrink-0">
                    {index + 1}
                  </span>
                  <p className="text-sm text-slate-400">{step}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-sky-500/10 to-indigo-500/10 border border-sky-500/20 rounded-2xl p-6">
            <h3 className="font-bold mb-2">Professional Grade</h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Clip X processes everything in your browser. No server-side storage, no data leaks. 
            </p>
            <div className="space-y-2">
               <div className="flex items-center gap-2 text-xs text-sky-400 font-medium">
                 <Check size={14} /> 100% Privacy
               </div>
               <div className="flex items-center gap-2 text-xs text-sky-400 font-medium">
                 <Check size={14} /> Browser Native Speed
               </div>
               <div className="flex items-center gap-2 text-xs text-sky-400 font-medium">
                 <Check size={14} /> Zero API Latency
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolDetails;
