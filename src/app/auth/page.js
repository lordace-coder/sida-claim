"use client";
import Image from 'next/image';
import Link from 'next/link';
import logo from '../assets/logo.png';
import {useRouter} from "next/navigation"
import kyclogo from "../assets/kycport.png";

export default function AuthPage() {
    const navigate = useRouter();
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#0b0f19] p-4">
      <div className="w-full max-w-md bg-[#1c1917]/90 backdrop-blur-lg rounded-2xl p-8 space-y-8">
        {/* Logo Section */}
        <div className="flex flex-col items-center space-y-4">
          <div className="relative w-24 h-24">
            <Image
              src={logo}
              alt="Sidra Chain Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="text-center space-y-2">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-[#f97316] to-[#DAA520] bg-clip-text text-transparent">
              Sidra Chain
            </h1>
            <p className="text-gray-400 text-sm">
              Secure. Decentralized. Future.
            </p>
          </div>
        </div>

        {/* Welcome Text */}
        <div className="text-center">
          <p className="text-gray-300 text-sm">
            Welcome back! Please login with your KYCPORT account to continue.
          </p>
        </div>

        {/* Login Button */}
        <button 
          className="w-full bg-[#f97316] hover:bg-[#ea580c] text-white rounded-lg py-3 px-4 flex items-center justify-center space-x-2 transition-colors duration-200"
          onClick={() => {
           navigate.push("/login");
          }}
        >
          <Image src={kyclogo} className='w-7'/>
          <span>Login with KYCPORT</span>
        </button>

        {/* Terms and Privacy */}
        <div className="text-center text-xs text-gray-500">
          <p>
            By logging in, you agree to our{' '}
            <Link href="/terms" className="text-[#f97316] hover:text-[#ea580c]">
              Terms of Service
            </Link>
            {' '}and{' '}
            <Link href="/privacy" className="text-[#f97316] hover:text-[#ea580c]">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
