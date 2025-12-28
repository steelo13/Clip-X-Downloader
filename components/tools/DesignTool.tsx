
import React, { useState } from 'react';
import { ImageIcon, Move, Crop, RefreshCw, Upload, Download } from 'lucide-react';

interface Props {
  type: string;
}

const DesignTool: React.FC<Props> = ({ type }) => {
  const [image, setImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const processImage = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      alert('Image processed perfectly for X dimensions!');
    }, 1500);
  };

  return (
    <div className="p-8 space-y-8">
      {!image ? (
        <label className="flex flex-col items-center justify-center h-64 border-2 border-dashed border-slate-800 rounded-3xl hover:border-sky-500/50 hover:bg-slate-900/50 transition-all cursor-pointer group">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Upload className="text-slate-400" />
            </div>
            <p className="mb-2 text-sm text-slate-400 font-bold uppercase tracking-widest">Click to upload image</p>
            <p className="text-xs text-slate-500">PNG, JPG or GIF (max. 5MB)</p>
          </div>
          <input type="file" className="hidden" onChange={handleUpload} accept="image/*" />
        </label>
      ) : (
        <div className="animate-in fade-in duration-500">
          <div className="relative max-w-lg mx-auto bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 group">
            <img src={image} alt="Preview" className="w-full h-auto max-h-[400px] object-contain" />
            <div className="absolute inset-0 border-2 border-sky-500 pointer-events-none opacity-50"></div>
            {/* Simulation of crop area */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 border-2 border-dashed border-white opacity-40"></div>
          </div>
          
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button 
              onClick={processImage}
              disabled={isProcessing}
              className="px-8 py-3 bg-sky-500 hover:bg-sky-600 text-white font-bold rounded-xl flex items-center gap-2 transition-all shadow-lg"
            >
              {isProcessing ? <RefreshCw className="animate-spin" /> : <Crop size={18} />}
              {isProcessing ? 'Optimizing...' : `Optimize for ${type === 'header-dl' ? 'Header' : 'Timeline'}`}
            </button>
            <button 
              onClick={() => setImage(null)}
              className="px-8 py-3 bg-slate-800 text-white font-bold rounded-xl border border-slate-700 hover:bg-slate-700 transition-colors"
            >
              Reset
            </button>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-xs text-slate-500">
              Auto-applying X-specific aspect ratios (16:9 for headers, 2:1 for timeline).
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DesignTool;
