'use client';

import { useState } from 'react';
import { Slide } from "../animation/Slide";

export default function ProtectedResumeAccess() {
  const [step, setStep] = useState('unlocked');
  const [email] = useState('test@example.com');

  if (step === 'unlocked') {
    return (
      <main className="max-w-7xl mx-auto md:px-16 px-6 lg:mt-32 mt-20">
        <Slide>
          <div className="mb-8">
            <h1 className="font-incognito font-semibold tracking-tight text-3xl sm:text-5xl mb-2">
              Resume
            </h1>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Verified: {email}
            </p>
          </div>

          <div className="border dark:border-zinc-800 rounded-lg overflow-hidden bg-white dark:bg-zinc-900 mb-6">
            <iframe
              src="/Moulica_Software_Engineer2.pdf" 
              className="w-full min-h-screen"
              title="Resume"
            />
          </div>

          <div className="flex gap-4">
            
              href="/Moulica_Software_Engineer2.pdf"
              download="Moulica_Goli_Resume.pdf"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Download Resume
            </a>
          </div>
        </Slide>
      </main>
    );
  }

  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6 lg:mt-32 mt-20">
      <div>Access Resume Form (simplified for testing)</div>
    </main>
  );
}
