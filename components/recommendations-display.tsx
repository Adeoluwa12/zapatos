// 'use client';

// import { Card } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Sparkles, RotateCcw, Share2, Mail } from 'lucide-react';
// import Image from 'next/image';

// interface RecommendationsDisplayProps {
//   recommendations: string;
//   onReset: () => void;
// }

// export default function RecommendationsDisplay({
//   recommendations,
//   onReset,
// }: RecommendationsDisplayProps) {
//   const handleShare = () => {
//     if (navigator.share) {
//       navigator.share({
//         title: 'Zapatos - My Shoe Recommendations',
//         text: recommendations,
//       });
//     }
//   };

//   return (
//     <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-slate-800 to-black py-6 sm:py-8 md:py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-6xl mx-auto">
//         {/* Success Header */}
//         <div className="text-center mb-8 sm:mb-10 md:mb-12 space-y-4 sm:space-y-6">
//           <div className="flex justify-center">
//             <div className="relative inline-block">
//               <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full blur-xl sm:blur-2xl opacity-50 animate-pulse"></div>
//               <div className="relative bg-gradient-to-r from-amber-500 to-orange-500 rounded-full p-4 sm:p-5 md:p-6 shadow-2xl">
//                 <Sparkles className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-slate-900 animate-bounce" />
//               </div>
//             </div>
//           </div>
//           <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white text-balance px-4">
//             Perfect Matches Found! 🎉
//           </h1>
//           <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
//             Based on your preferences, we've curated personalized shoe recommendations just for you.
//           </p>
//         </div>

//         {/* Recommendations Card */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-10 md:mb-12">
//           {/* Main Recommendation */}
//           <div className="lg:col-span-2">
//             <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 p-5 sm:p-6 md:p-8 lg:p-10 rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden">
//               <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
//                 <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center flex-shrink-0">
//                   <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-slate-900" />
//                 </div>
//                 <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white flex-1">
//                   Your AI-Curated Shoe Picks
//                 </h2>
//               </div>

//               <div className="bg-slate-700/50 rounded-lg p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 border border-slate-600">
//                 <p className="text-slate-200 text-sm sm:text-base md:text-lg leading-relaxed whitespace-pre-wrap font-medium">
//                   {recommendations}
//                 </p>
//               </div>

//               {/* Email Confirmation */}
//               <div className="flex items-start gap-2 sm:gap-3 bg-green-500/20 border border-green-500/50 rounded-lg p-3 sm:p-4 md:p-6">
//                 <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 mt-0.5 flex-shrink-0" />
//                 <div>
//                   <p className="text-green-300 text-xs sm:text-sm md:text-base font-semibold">
//                     Email Sent Successfully!
//                   </p>
//                   <p className="text-green-200 text-xs sm:text-sm mt-1">
//                     Check your inbox for the full recommendations and exclusive offers.
//                   </p>
//                 </div>
//               </div>
//             </Card>
//           </div>

//           {/* Side Image */}
//           <div className="hidden lg:flex flex-col gap-6">
//             <Image
//               src="/shoe-styles.jpg"
//               alt="Premium shoe selection"
//               width={400}
//               height={400}
//               className="rounded-2xl shadow-2xl object-cover w-full h-auto"
//             />
//             <Card className="bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/50 p-6 rounded-lg">
//               <p className="text-amber-100 text-sm font-semibold leading-relaxed">
//                 💡 Next Step: Visit the brand websites and explore these amazing shoes in detail!
//               </p>
//             </Card>
//           </div>
//         </div>

//         {/* Action Buttons */}
//         <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-10 md:mb-12">
//           <Button
//             onClick={handleShare}
//             className="px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg flex items-center justify-center gap-2 transition-all border border-slate-700 text-sm sm:text-base"
//           >
//             <Share2 className="h-4 w-4 sm:h-5 sm:w-5" />
//             <span>Share Recommendations</span>
//           </Button>
//           <Button
//             onClick={onReset}
//             className="px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-900 font-semibold rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-amber-500/50 text-sm sm:text-base"
//           >
//             <RotateCcw className="h-4 w-4 sm:h-5 sm:w-5" />
//             <span>Find More Shoes</span>
//           </Button>
//         </div>

//         {/* Mobile Image */}
//         <div className="lg:hidden">
//           <Image
//             src="/shoe-styles.jpg"
//             alt="Premium shoe selection"
//             width={600}
//             height={400}
//             className="rounded-xl sm:rounded-2xl shadow-2xl object-cover w-full h-auto mb-6 sm:mb-8"
//           />
//           <Card className="bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/50 p-4 sm:p-6 rounded-lg">
//             <p className="text-amber-100 text-xs sm:text-sm font-semibold leading-relaxed">
//               💡 Next Step: Visit the brand websites and explore these amazing shoes in detail!
//             </p>
//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// }



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
    <div className="w-full bg-gradient-to-br from-slate-900 via-slate-800 to-black py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Success Header */}
        <div className="text-center mb-8 sm:mb-12 space-y-4 sm:space-y-6">
          <div className="flex justify-center">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full blur-2xl opacity-50 animate-pulse"></div>
              <div className="relative bg-gradient-to-r from-amber-500 to-orange-500 rounded-full p-4 sm:p-6 shadow-2xl">
                <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-slate-900 animate-bounce" />
              </div>
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white text-balance">
            Perfect Matches Found!
          </h1>
          <p className="text-slate-300 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-2">
            Based on your preferences, we've curated personalized shoe recommendations just for you.
          </p>
        </div>

        {/* Recommendations Card */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-8 sm:mb-12">
          {/* Main Recommendation */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 p-5 sm:p-8 lg:p-10 rounded-2xl shadow-2xl overflow-hidden">
              <div className="flex items-start gap-3 sm:gap-4 mb-5 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-slate-900" />
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white flex-1">
                  Your AI-Curated Picks
                </h2>
              </div>

              <div className="bg-slate-700/50 rounded-lg p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8 border border-slate-600">
                <p className="text-slate-200 text-sm sm:text-base lg:text-lg leading-relaxed whitespace-pre-wrap font-medium">
                  {recommendations}
                </p>
              </div>

              {/* Email Confirmation */}
              <div className="flex items-start gap-3 bg-green-500/20 border border-green-500/50 rounded-lg p-3 sm:p-4 lg:p-6">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-green-300 text-xs sm:text-sm lg:text-base font-semibold">
                    Email Sent Successfully!
                  </p>
                  <p className="text-green-200 text-xs sm:text-sm mt-1">
                    Check your inbox for full recommendations and exclusive offers.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Side Image - Hidden on mobile */}
          <div className="hidden lg:flex flex-col gap-6">
            <Image
              src="/shoe-styles.jpg"
              alt="Premium shoe selection"
              width={400}
              height={400}
              className="rounded-2xl shadow-2xl object-cover w-full h-auto"
            />
            <Card className="bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/50 p-4 lg:p-6 rounded-lg">
              <p className="text-amber-100 text-sm font-semibold leading-relaxed">
                Next Step: Visit the brand websites and explore these amazing shoes in detail!
              </p>
            </Card>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12">
          <Button
            onClick={handleShare}
            className="w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-5 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg flex items-center justify-center gap-2 transition-all border border-slate-700 text-sm sm:text-base"
          >
            <Share2 className="h-4 w-4" />
            <span>Share</span>
          </Button>
          <Button
            onClick={onReset}
            className="w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-900 font-semibold rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-amber-500/50 text-sm sm:text-base"
          >
            <RotateCcw className="h-4 w-4" />
            <span>Find More Shoes</span>
          </Button>
        </div>

        {/* Mobile Image - Shows on mobile only */}
        <div className="lg:hidden">
          <Image
            src="/shoe-styles.jpg"
            alt="Premium shoe selection"
            width={600}
            height={400}
            className="rounded-2xl shadow-2xl object-cover w-full h-auto mb-6"
          />
          <Card className="bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/50 p-4 rounded-lg">
            <p className="text-amber-100 text-xs sm:text-sm font-semibold leading-relaxed">
              Next Step: Visit the brand websites and explore these amazing shoes!
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}