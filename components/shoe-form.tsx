// 'use client';

// import { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { z } from 'zod';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Card } from '@/components/ui/card';
// import { AlertCircle, Loader, CheckCircle2 } from 'lucide-react';
// import { Alert, AlertDescription } from '@/components/ui/alert';
// import Image from 'next/image';

// const formSchema = z.object({
//   name: z.string().min(2, 'Name must be at least 2 characters'),
//   email: z.string().email('Invalid email address'),
//   shoeSize: z.string().min(1, 'Please select a shoe size'),
//   shoeType: z.string().min(1, 'Please select a shoe type'),
// });

// type FormData = z.infer<typeof formSchema>;

// interface ShoeFormProps {
//   onSuccess: (recommendations: string) => void;
// }

// export default function ShoeForm({ onSuccess }: ShoeFormProps) {
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [showSizeWarning, setShowSizeWarning] = useState(false);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     watch,
//   } = useForm<FormData>({
//     resolver: zodResolver(formSchema),
//   });

//   const shoeSize = watch('shoeSize');

//   const onSubmit = async (data: FormData) => {
//     try {
//       setIsLoading(true);
//       setError('');

//       const response = await fetch('/api/shoes/submit', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(data),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.error || 'Failed to submit form');
//       }

//       const result = await response.json();
//       onSuccess(result.recommendations);
//     } catch (err) {
//       setError(err instanceof Error ? err.message : 'Something went wrong');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const shoeTypes = [
//     'Sneakers',
//     'Running Shoes',
//     'Basketball Shoes',
//     'Casual/Slip-ons',
//     'Boots',
//     'Formal Shoes',
//     'Athletic',
//     'Skateboard Shoes',
//   ];

//   const shoeSizes = [
//     '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48',
//   ];

//   return (
//     <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-6 sm:py-8 md:py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-6xl mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
//           {/* Form Section */}
//           <Card className="w-full p-5 sm:p-6 md:p-8 lg:p-10 bg-white dark:bg-slate-800 shadow-2xl rounded-xl sm:rounded-2xl">
//             <div className="space-y-1.5 sm:space-y-2 mb-6 sm:mb-8">
//               <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
//                 Find Your Perfect Fit
//               </h2>
//               <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base md:text-lg">
//                 Tell us about your shoe preferences and we'll find perfect recommendations just for you.
//               </p>
//             </div>

//             {error && (
//               <Alert variant="destructive" className="mb-6 border-red-200 dark:border-red-900">
//                 <AlertCircle className="h-4 w-4" />
//                 <AlertDescription>{error}</AlertDescription>
//               </Alert>
//             )}

//             <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-5">
//               {/* Name */}
//               <div>
//                 <label className="block text-xs sm:text-sm font-semibold text-slate-900 dark:text-white mb-2">
//                   Full Name *
//                 </label>
//                 <Input
//                   placeholder="e.g. Sarah Johnson"
//                   {...register('name')}
//                   className="h-10 sm:h-11 text-sm sm:text-base border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:border-amber-500 focus:ring-amber-500"
//                 />
//                 {errors.name && (
//                   <p className="text-red-500 text-xs sm:text-sm mt-1.5 flex items-center gap-1">
//                     <span className="text-base sm:text-lg">!</span> {errors.name.message}
//                   </p>
//                 )}
//               </div>

//               {/* Email */}
//               <div>
//                 <label className="block text-xs sm:text-sm font-semibold text-slate-900 dark:text-white mb-2">
//                   Email Address *
//                 </label>
//                 <Input
//                   type="email"
//                   placeholder="your.email@example.com"
//                   {...register('email')}
//                   className="h-10 sm:h-11 text-sm sm:text-base border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:border-amber-500 focus:ring-amber-500"
//                 />
//                 {errors.email && (
//                   <p className="text-red-500 text-xs sm:text-sm mt-1.5 flex items-center gap-1">
//                     <span className="text-base sm:text-lg">!</span> {errors.email.message}
//                   </p>
//                 )}
//               </div>

//               {/* Shoe Size */}
//               <div>
//                 <label className="block text-xs sm:text-sm font-semibold text-slate-900 dark:text-white mb-2">
//                   Shoe Size (EU) *
//                 </label>
//                 <select
//                   {...register('shoeSize')}
//                   onChange={(e) => {
//                     if (e.target.value) {
//                       setShowSizeWarning(true);
//                       setTimeout(() => setShowSizeWarning(false), 4000);
//                     }
//                   }}
//                   className="w-full h-10 sm:h-11 px-3 text-sm sm:text-base border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:border-amber-500 focus:ring-amber-500"
//                 >
//                   <option value="">Select your shoe size</option>
//                   {shoeSizes.map((size) => (
//                     <option key={size} value={size}>
//                       Size EU {size}
//                     </option>
//                   ))}
//                 </select>
//                 {showSizeWarning && shoeSize && (
//                   <div className="flex items-center gap-2 text-amber-600 dark:text-amber-500 text-xs sm:text-sm mt-2 p-2 sm:p-2.5 bg-amber-50 dark:bg-amber-900/20 rounded-md font-semibold">
//                     <AlertCircle className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
//                     Make sure this is your actual shoe size!
//                   </div>
//                 )}
//                 {errors.shoeSize && (
//                   <p className="text-red-500 text-xs sm:text-sm mt-1.5 flex items-center gap-1">
//                     <span className="text-base sm:text-lg">!</span> {errors.shoeSize.message}
//                   </p>
//                 )}
//               </div>

//               {/* Shoe Type */}
//               <div>
//                 <label className="block text-xs sm:text-sm font-semibold text-slate-900 dark:text-white mb-2">
//                   Favorite Shoe Type *
//                 </label>
//                 <select
//                   {...register('shoeType')}
//                   className="w-full h-10 sm:h-11 px-3 text-sm sm:text-base border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:border-amber-500 focus:ring-amber-500"
//                 >
//                   <option value="">Select a shoe type</option>
//                   {shoeTypes.map((type) => (
//                     <option key={type} value={type}>
//                       {type}
//                     </option>
//                   ))}
//                 </select>
//                 {errors.shoeType && (
//                   <p className="text-red-500 text-xs sm:text-sm mt-1.5 flex items-center gap-1">
//                     <span className="text-base sm:text-lg">!</span> {errors.shoeType.message}
//                   </p>
//                 )}
//               </div>

//               {/* Submit Button */}
//               <Button
//                 type="submit"
//                 disabled={isLoading}
//                 className="w-full h-11 sm:h-12 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-900 py-2 font-bold mt-6 sm:mt-8 flex items-center justify-center gap-2 rounded-lg shadow-lg hover:shadow-amber-500/50 transition-all text-sm sm:text-base"
//               >
//                 {isLoading ? (
//                   <>
//                     <Loader className="h-4 w-4 sm:h-5 sm:w-5 animate-spin" />
//                     <span className="hidden sm:inline">Finding Your Perfect Match...</span>
//                     <span className="sm:hidden">Finding Match...</span>
//                   </>
//                 ) : (
//                   <>
//                     <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5" />
//                     <span className="hidden sm:inline">Get My Shoe Recommendations</span>
//                     <span className="sm:hidden">Get Recommendations</span>
//                   </>
//                 )}
//               </Button>

//               <p className="text-center text-slate-500 dark:text-slate-400 text-xs mt-3 sm:mt-4">
//                 Your data is secure and will only be used for recommendations
//               </p>
//             </form>
//           </Card>

//           {/* Image Section */}
//           <div className="hidden lg:block relative">
//             <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/30 to-transparent rounded-2xl blur-2xl"></div>
//             <Image
//               src="/form-shoes.jpg"
//               alt="Diverse shoe collection"
//               width={600}
//               height={600}
//               className="relative rounded-2xl shadow-2xl object-cover w-full h-auto"
//             />
//             {/* Feature badges */}
//             <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 right-6 sm:right-8 space-y-2 sm:space-y-3">
//               <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 sm:p-4 shadow-lg">
//                 <p className="text-slate-900 font-semibold text-xs sm:text-sm">✓ 50+ Premium Brands</p>
//               </div>
//               <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 sm:p-4 shadow-lg">
//                 <p className="text-slate-900 font-semibold text-xs sm:text-sm">✓ AI-Powered Matching</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { AlertCircle, Loader, CheckCircle2 } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import Image from 'next/image';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  shoeSize: z.string().min(1, 'Please select a shoe size'),
  shoeType: z.string().min(1, 'Please select a shoe type'),
});

type FormData = z.infer<typeof formSchema>;

interface ShoeFormProps {
  onSuccess: (recommendations: string) => void;
}

export default function ShoeForm({ onSuccess }: ShoeFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [showSizeWarning, setShowSizeWarning] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const shoeSize = watch('shoeSize');

  const onSubmit = async (data: FormData) => {
    try {
      setIsLoading(true);
      setError('');

      const response = await fetch('/api/shoes/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to submit form');
      }

      const result = await response.json();
      onSuccess(result.recommendations);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  const shoeTypes = [
    'Sneakers',
    'Running Shoes',
    'Basketball Shoes',
    'Casual/Slip-ons',
    'Boots',
    'Formal Shoes',
    'Athletic',
    'Skateboard Shoes',
  ];

  const shoeSizes = [
    '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48',
  ];

  return (
    <div className="w-full bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-6 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-6 lg:gap-12 lg:items-center">
          {/* Image Section - Now on bottom for mobile */}
          <div className="relative order-2 lg:order-2">
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/30 to-transparent rounded-2xl blur-2xl"></div>
            <Image
              src="/form-shoes.jpg"
              alt="Diverse shoe collection"
              width={600}
              height={600}
              className="relative rounded-xl sm:rounded-2xl shadow-2xl object-cover w-full h-auto"
            />
            {/* Feature badges - Show on all screens but responsive */}
            <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8 space-y-2 sm:space-y-3">
              <div className="bg-white/95 backdrop-blur-sm rounded-lg p-2 sm:p-4 shadow-lg">
                <p className="text-slate-900 font-semibold text-xs sm:text-sm">✓ 50+ Premium Brands</p>
              </div>
              <div className="bg-white/95 backdrop-blur-sm rounded-lg p-2 sm:p-4 shadow-lg">
                <p className="text-slate-900 font-semibold text-xs sm:text-sm">✓ AI-Powered Matching</p>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <Card className="w-full p-5 sm:p-8 lg:p-10 bg-white dark:bg-slate-800 shadow-2xl rounded-2xl order-1 lg:order-1">
            <div className="space-y-2 mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
                Find Your Perfect Fit
              </h2>
              <p className="text-xs sm:text-sm lg:text-base text-slate-600 dark:text-slate-400">
                Tell us about your shoe preferences and we'll find perfect recommendations just for you.
              </p>
            </div>

            {error && (
              <Alert variant="destructive" className="mb-4 sm:mb-6 border-red-200 dark:border-red-900">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription className="text-xs sm:text-sm">{error}</AlertDescription>
              </Alert>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-5">
              {/* Name */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-slate-900 dark:text-white mb-2">
                  Full Name *
                </label>
                <Input
                  placeholder="e.g. Sarah Johnson"
                  {...register('name')}
                  className="h-10 sm:h-11 text-sm border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:border-amber-500 focus:ring-amber-500"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs sm:text-sm mt-1 flex items-center gap-1">
                    <span>!</span> {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-slate-900 dark:text-white mb-2">
                  Email Address *
                </label>
                <Input
                  type="email"
                  placeholder="your.email@example.com"
                  {...register('email')}
                  className="h-10 sm:h-11 text-sm border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:border-amber-500 focus:ring-amber-500"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs sm:text-sm mt-1 flex items-center gap-1">
                    <span>!</span> {errors.email.message}
                  </p>
                )}
              </div>

              {/* Shoe Size */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-slate-900 dark:text-white mb-2">
                  Shoe Size (EU) *
                </label>
                <select
                  {...register('shoeSize')}
                  onChange={(e) => {
                    if (e.target.value) {
                      setShowSizeWarning(true);
                      setTimeout(() => setShowSizeWarning(false), 4000);
                    }
                  }}
                  className="w-full h-10 sm:h-11 px-3 text-sm border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:border-amber-500 focus:ring-amber-500"
                >
                  <option value="">Select your shoe size</option>
                  {shoeSizes.map((size) => (
                    <option key={size} value={size}>
                      Size EU {size}
                    </option>
                  ))}
                </select>
                {showSizeWarning && shoeSize && (
                  <div className="flex items-start gap-2 text-amber-600 dark:text-amber-500 text-xs sm:text-sm mt-2 p-2 bg-amber-50 dark:bg-amber-900/20 rounded-md font-semibold">
                    <AlertCircle className="h-3 w-3 mt-0.5 flex-shrink-0" />
                    <span>Make sure this is your actual shoe size!</span>
                  </div>
                )}
                {errors.shoeSize && (
                  <p className="text-red-500 text-xs sm:text-sm mt-1 flex items-center gap-1">
                    <span>!</span> {errors.shoeSize.message}
                  </p>
                )}
              </div>

              {/* Shoe Type */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-slate-900 dark:text-white mb-2">
                  Favorite Shoe Type *
                </label>
                <select
                  {...register('shoeType')}
                  className="w-full h-10 sm:h-11 px-3 text-sm border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:border-amber-500 focus:ring-amber-500"
                >
                  <option value="">Select a shoe type</option>
                  {shoeTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                {errors.shoeType && (
                  <p className="text-red-500 text-xs sm:text-sm mt-1 flex items-center gap-1">
                    <span>!</span> {errors.shoeType.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-11 sm:h-12 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-900 py-2 font-bold mt-6 sm:mt-8 flex items-center justify-center gap-2 rounded-lg shadow-lg hover:shadow-amber-500/50 transition-all text-sm sm:text-base"
              >
                {isLoading ? (
                  <>
                    <Loader className="h-4 w-4 sm:h-5 sm:w-5 animate-spin" />
                    <span>Finding Match...</span>
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span>Get Recommendations</span>
                  </>
                )}
              </Button>

              <p className="text-center text-slate-500 dark:text-slate-400 text-xs mt-4">
                Your data is secure and only used for recommendations
              </p>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}