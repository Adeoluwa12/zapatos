'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Star } from 'lucide-react';
import Image from 'next/image';

interface LandingHeroProps {
  onGetStarted: () => void;
}

export default function LandingHero({ onGetStarted }: LandingHeroProps) {
  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white overflow-hidden relative flex items-center">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        {/* Content Grid */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Side - Text */}
            <div className="space-y-6 md:space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 border border-amber-500/50 w-fit">
                <Sparkles className="h-4 w-4 text-amber-400" />
                <span className="text-sm font-semibold text-amber-300">AI-Powered Recommendations</span>
              </div>

              {/* Logo/Header */}
              <div>
                <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tighter text-balance">
                  ZAPATOS
                </h1>
                <div className="h-1.5 w-32 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500"></div>
              </div>

              {/* Tagline */}
              <div>
                <h2 className="text-2xl md:text-4xl font-bold text-balance leading-tight mb-6">
                  Your Perfect Shoe Awaits
                </h2>
                <p className="text-slate-300 text-base md:text-lg leading-relaxed">
                  Discover footwear that matches your style and comfort. Our AI-powered recommendation engine learns what you love and finds your ideal match in seconds.
                </p>
              </div>

              {/* Features */}
              <div className="space-y-3 pt-4">
                <div className="flex items-start gap-3">
                  <Star className="h-5 w-5 text-amber-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Personalized recommendations based on your preferences</span>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="h-5 w-5 text-amber-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Access to 50+ premium shoe brands worldwide</span>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="h-5 w-5 text-amber-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">100% satisfaction guarantee on all matches</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-6">
                <Button
                  onClick={onGetStarted}
                  className="px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-semibold bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-900 rounded-lg flex items-center justify-center gap-2 transition-all hover:gap-3 shadow-lg hover:shadow-amber-500/50"
                >
                  Find Your Shoes
                  <ArrowRight className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  className="px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-semibold border-2 border-white hover:bg-white hover:text-slate-900 text-black rounded-lg flex items-center justify-center gap-2 transition-all hover:gap-3 shadow-lg hover:shadow-amber-500/50"
                >
                  Learn More
                </Button>
              </div>

              {/* Social Proof */}
              <div className="pt-8 border-t border-slate-700">
                <p className="text-slate-400 text-sm mb-4">Trusted by shoe enthusiasts worldwide</p>
                <div className="flex items-center gap-4">
                  <div>
                    <p className="text-2xl sm:text-3xl font-bold text-amber-400">10K+</p>
                    <p className="text-slate-400 text-xs sm:text-sm">Happy Customers</p>
                  </div>
                  <div className="w-px h-12 bg-slate-600"></div>
                  <div>
                    <p className="text-2xl sm:text-3xl font-bold text-amber-400">50+</p>
                    <p className="text-slate-400 text-xs sm:text-sm">Shoe Brands</p>
                  </div>
                  <div className="w-px h-12 bg-slate-600"></div>
                  <div>
                    <p className="text-2xl sm:text-3xl font-bold text-amber-400">100%</p>
                    <p className="text-slate-400 text-xs sm:text-sm">Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="hidden md:block relative h-full min-h-96">
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-transparent rounded-2xl"></div>
              <Image
                src="/hero-shoes-premium.jpg"
                alt="Premium shoe collection"
                width={600}
                height={600}
                className="w-full h-auto rounded-2xl shadow-2xl object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Mobile Image - Shows below on mobile */}
        <div className="md:hidden relative w-full mt-8">
          <Image
            src="/hero-shoes-premium.jpg"
            alt="Premium shoe collection"
            width={500}
            height={500}
            className="w-full h-auto rounded-2xl shadow-2xl object-cover"
            priority
          />
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <div className="w-6 h-10 border-2 border-slate-500 rounded-full flex items-start justify-center pt-2">
            <div className="w-1 h-2 bg-slate-500 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
