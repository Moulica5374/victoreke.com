'use client';

import { useState } from 'react';
import { Slide } from "../animation/Slide";

export default function ProtectedResumeAccess() {
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [step, setStep] = useState('email');
  const [error, setError] = useState('');
  const [sentCode, setSentCode] = useState('');

  const blockedDomains = [
    'gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com',
    'aol.com', 'icloud.com', 'protonmail.com', 'mail.com',
    'live.com', 'msn.com'
  ];

  const educationalPatterns = ['.edu', '.ac.', 'university', 'college'];

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return { valid: false, message: 'Please enter a valid email address' };
    }

    const domain = email.split('@')[1]?.toLowerCase();
    
    if (blockedDomains.includes(domain)) {
      return { 
        valid: false, 
        message: 'Please use your corporate email address. Personal emails are not accepted.' 
      };
    }

    if (educationalPatterns.some(pattern => domain.includes(pattern))) {
      return { 
        valid: false, 
        message: 'Please use your corporate email address. Educational emails are not accepted.' 
      };
    }

    return { valid: true, message: '' };
  };

  const generateCode = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  const handleEmailSubmit = async () => {
    const validation = validateEmail(email);
    
    if (!validation.valid) {
      setError(validation.message);
      return;
    }

    setError('Sending verification code...');
    
    const code = generateCode();
    setSentCode(code);
    
    try {
      const response = await fetch('/api/send-verification', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, code }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send verification email');
      }

      setError('');
      setStep('verification');
    } catch (err) {
      setError('Failed to send verification code. Please try again or contact me directly.');
      console.error('Email send error:', err);
    }
  };

  const handleVerificationSubmit = () => {
    if (verificationCode === sentCode) {
      setError('');
      setStep('unlocked');
    } else {
      setError('Invalid verification code. Please try again.');
      setVerificationCode('');
    }
  };

  if (step === 'unlocked') {
    return (
      <main className="max-w-7xl mx-auto md:px-16 px-6 lg:mt-32 mt-20">
        <Slide>
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="font-incognito font-semibold tracking-tight text-3xl sm:text-5xl mb-2">
                Resume
              </h1>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Verified: {email}
              </p>
            </div>
            <button
              onClick={() => {
                setStep('email');
                setEmail('');
                setVerificationCode('');
                setSentCode('');
              }}
              className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
            >
              Sign Out
            </button>
          </div>
        </Slide>

        <Slide delay={0.1}>
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

  if (step === 'verification') {
    return (
      <main className="max-w-7xl mx-auto md:px-16 px-6 lg:mt-32 mt-20">
        <div className="max-w-md mx-auto">
          <Slide>
            <div className="border dark:border-zinc-800 rounded-lg p-8 bg-white dark:bg-zinc-900">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h1 className="text-2xl font-bold mb-2">Check Your Email</h1>
                <p className="text-zinc-600 dark:text-zinc-400">
                  We&apos;ve sent a verification code to
                </p>
                <p className="font-medium text-blue-600 dark:text-blue-400 mt-1">
                  {email}
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Verification Code
                  </label>
                  <input
                    type="text"
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        handleVerificationSubmit();
                      }
                    }}
                    className="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800 text-center text-2xl tracking-widest font-mono"
                    placeholder="000000"
                    maxLength={6}
                  />
                </div>

                {error && (
                  <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-sm text-red-600 dark:text-red-400">
                    {error}
                  </div>
                )}

                <button
                  onClick={handleVerificationSubmit}
                  className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Verify & Access Resume
                </button>

                <button
                  onClick={() => setStep('email')}
                  className="w-full px-4 py-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
                >
                  ← Use Different Email
                </button>
              </div>
            </div>
          </Slide>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6 lg:mt-32 mt-20">
      <div className="max-w-md mx-auto">
        <Slide>
          <div className="border dark:border-zinc-800 rounded-lg p-8 bg-white dark:bg-zinc-900">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h1 className="text-2xl font-bold mb-2">Access Resume</h1>
              <p className="text-zinc-600 dark:text-zinc-400">
                For recruiters and hiring managers
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Corporate Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleEmailSubmit();
                    }
                  }}
                  className="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800"
                  placeholder="you@company.com"
                />
                <p className="text-xs text-zinc-500 dark:text-zinc-500 mt-2">
                  Please use your work email address
                </p>
              </div>

              {error && (
                <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-sm text-red-600 dark:text-red-400">
                  {error}
                </div>
              )}

              <button
                onClick={handleEmailSubmit}
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Send Verification Code
              </button>
            </div>

            <div className="mt-6 pt-6 border-t border-zinc-200 dark:border-zinc-800">
              <div className="space-y-2 text-xs text-zinc-600 dark:text-zinc-400">
                <div className="flex items-start gap-2">
                  <span>✅ Corporate email domains accepted</span>
                </div>
                <div className="flex items-start gap-2">
                  <span>❌ Personal emails (Gmail, Yahoo, etc.) not accepted</span>
                </div>
                <div className="flex items-start gap-2">
                  <span>❌ Educational emails (.edu) not accepted</span>
                </div>
              </div>
            </div>
          </div>
        </Slide>
      </div>
    </main>
  );
}