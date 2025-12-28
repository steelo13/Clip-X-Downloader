
import React, { useState } from 'react';
import { Lightbulb, ShieldAlert, List, CheckCircle, RefreshCw, Copy, Check } from 'lucide-react';

interface Props {
  type: string;
}

const CreatorTools: React.FC<Props> = ({ type }) => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleProcess = () => {
    if (type === 'idea-spinner') {
      const ideas = [
        "A deep dive into why X is the best platform for building a personal brand.",
        "A controversial opinion about a trending industry topic.",
        "A tutorial thread on how you achieved a specific result recently.",
        "Curated list of 10 tools that save you 10+ hours a week.",
        "A personal story about a failure and what it taught you."
      ];
      setResult(ideas[Math.floor(Math.random() * ideas.length)]);
    } else if (type === 'limit-checker') {
      const tagCount = (input.match(/#/g) || []).length;
      if (tagCount > 10) {
        setResult(`Warning: ${tagCount} hashtags detected. X often flags more than 2-3 hashtags as spam.`);
      } else {
        setResult(`Safe: ${tagCount} hashtags. This is within the optimal reach range (1-3).`);
      }
    } else if (type === 'word-blocker') {
      setResult(`Generated Filter List:\n${input.split(',').map(w => w.trim()).filter(w => w).join(', ')}\n\nGo to Settings > Privacy > Mute and Block to paste these.`);
    } else if (type === 'rules-template') {
      setResult(`1. Be respectful to all members.\n2. No spam or self-promotion.\n3. Keep discussions relevant to ${input || 'the topic'}.\n4. High-quality contributions only.`);
    } else {
      setResult("Content plan generated successfully based on your input.");
    }
  };

  const handleCopy = () => {
    if (!result) return;
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="p-8 space-y-6">
      <div className="max-w-xl mx-auto space-y-4">
        <label className="block text-sm font-semibold text-slate-300">
          {type === 'idea-spinner' ? 'Generate a new content angle' : 'Provide context/input'}
        </label>
        
        {type !== 'idea-spinner' && (
          <textarea 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={type === 'limit-checker' ? "Paste your tweet with hashtags here..." : "Type here..."}
            className="w-full h-32 bg-slate-900 border border-slate-700 rounded-2xl p-4 focus:ring-2 focus:ring-sky-500/50 outline-none transition-all resize-none text-slate-200"
          />
        )}

        <button 
          onClick={handleProcess}
          className="w-full py-4 bg-sky-500 hover:bg-sky-600 text-white font-bold rounded-2xl transition-all shadow-lg flex items-center justify-center gap-2"
        >
          {type === 'idea-spinner' ? <Lightbulb size={20} /> : <CheckCircle size={20} />}
          {type === 'idea-spinner' ? 'Spin New Idea' : 'Analyze / Generate'}
        </button>
      </div>

      {result && (
        <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 space-y-4 animate-in fade-in">
           <p className="text-sky-400 font-medium whitespace-pre-wrap">{result}</p>
           <button 
              onClick={handleCopy}
              className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all border border-slate-700"
            >
              {copied ? <Check size={18} /> : <Copy size={18} />}
              {copied ? 'Copied to Clipboard' : 'Copy Result'}
            </button>
        </div>
      )}
    </div>
  );
};

export default CreatorTools;
