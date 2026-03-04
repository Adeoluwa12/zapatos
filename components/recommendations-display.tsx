'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sparkles, RotateCcw, Share2, Mail } from 'lucide-react';
import Image from 'next/image';

interface RecommendationsDisplayProps {
  recommendations: string;
  onReset: () => void;
}

export default function RecommendationsDisplay({
  recommendations,
  onReset,
}: RecommendationsDisplayProps) {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Zapatos - My Shoe Recommendations',
        text: recommendations,
      });
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-slate-800 to-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Success Header */}
        <div className="text-center mb-12 space-y-6">
          <div className="flex justify-center">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full blur-2xl opacity-50 animate-pulse"></div>
              <div className="relative bg-gradient-to-r from-amber-500 to-orange-500 rounded-full p-6 shadow-2xl">
                <Sparkles className="h-8 w-8 text-slate-900 animate-bounce" />
              </div>
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white text-balance">
            Perfect Matches Found! 🎉
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Based on your preferences, we've curated personalized shoe recommendations just for you.
          </p>
        </div>

        {/* Recommendations Card */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Main Recommendation */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 p-8 sm:p-10 rounded-2xl shadow-2xl overflow-hidden">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="h-6 w-6 text-slate-900" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white flex-1">
                  Your AI-Curated Shoe Picks
                </h2>
              </div>

              <div className="bg-slate-700/50 rounded-lg p-6 sm:p-8 mb-8 border border-slate-600">
                <p className="text-slate-200 text-base sm:text-lg leading-relaxed whitespace-pre-wrap font-medium">
                  {recommendations}
                </p>
              </div>

              {/* Email Confirmation */}
              <div className="flex items-start gap-3 bg-green-500/20 border border-green-500/50 rounded-lg p-4 sm:p-6">
                <Mail className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-green-300 text-sm sm:text-base font-semibold">
                    Email Sent Successfully!
                  </p>
                  <p className="text-green-200 text-xs sm:text-sm mt-1">
                    Check your inbox for the full recommendations and exclusive offers.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Side Image */}
          <div className="hidden lg:flex flex-col gap-6">
            <Image
              src="/shoe-styles.jpg"
              alt="Premium shoe selection"
              width={400}
              height={400}
              className="rounded-2xl shadow-2xl object-cover w-full h-auto"
            />
            <Card className="bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/50 p-6 rounded-lg">
              <p className="text-amber-100 text-sm font-semibold leading-relaxed">
                💡 Next Step: Visit the brand websites and explore these amazing shoes in detail!
              </p>
            </Card>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            onClick={handleShare}
            className="px-6 sm:px-8 py-5 sm:py-6 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg flex items-center justify-center gap-2 transition-all border border-slate-700 text-base"
          >
            <Share2 className="h-5 w-5" />
            <span>Share Recommendations</span>
          </Button>
          <Button
            onClick={onReset}
            className="px-6 sm:px-8 py-5 sm:py-6 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-900 font-semibold rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-amber-500/50 text-base"
          >
            <RotateCcw className="h-5 w-5" />
            <span>Find More Shoes</span>
          </Button>
        </div>

        {/* Mobile Image */}
        <div className="lg:hidden">
          <Image
            src="/shoe-styles.jpg"
            alt="Premium shoe selection"
            width={600}
            height={400}
            className="rounded-2xl shadow-2xl object-cover w-full h-auto mb-8"
          />
          <Card className="bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/50 p-6 rounded-lg">
            <p className="text-amber-100 text-sm font-semibold leading-relaxed">
              💡 Next Step: Visit the brand websites and explore these amazing shoes in detail!
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
