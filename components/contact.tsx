"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { CheckCircle2, XCircle, Loader2 } from "lucide-react";

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus('loading');

    const form = e.currentTarget;
    const formDataToSend = new FormData(form);

    try {
      const response = await fetch('https://submit.jotform.com/submit/252711820252347', {
        method: 'POST',
        body: formDataToSend,
        mode: 'no-cors', // JotForm requires this
      });

      // Since no-cors doesn't give us response status, we assume success
      setSubmitStatus('success');
      
      // Reset form after 2 seconds
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setSubmitStatus('idle');
      }, 3000);

    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      
      // Reset error state after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }
  };

  return (
    <section id="contact" className="py-20 max-lg:px-6 px-10 min-2xl:px-0 xl:max-w-[90rem] mx-auto">
      <h2 className="text-7xl max-md:text-5xl max-sm:text-4xl font-medium xl:w-1/2 mb-20">
        We&apos;re Here for You Let&apos;s Connect
      </h2>
      <div className="grid lg:grid-cols-2 gap-4 lg:gap-0">
        <div className="flex gap-4 flex-col">
          <p className="font-semibold">Contact us at</p>
          <p className="text-[#778088]">(254) 700719943</p>
          <p className="text-[#778088]">info@interstatekenya.com</p>
          <p className="text-[#778088]">
            KIRICHWA GARDENS RD, SUITE C4(P.O. BOX 20634) NAIROBI, KENYA
          </p>
          <p className="text-[#778088]">Reg.No: BN/2014/282720</p>
          
          <form onSubmit={handleSubmit} className="mt-6 space-y-6 relative">
            {/* Success/Error Overlay */}
            {submitStatus === 'success' && (
              <div className="absolute inset-0 bg-white/95 backdrop-blur-sm z-10 flex items-center justify-center animate-in fade-in duration-300">
                <div className="text-center space-y-3">
                  <CheckCircle2 className="w-14 h-14 text-green-600 mx-auto animate-in zoom-in duration-500" />
                  <div>
                    <h3 className="text-xl font-semibold text-green-600">Message Sent!</h3>
                    <p className="text-gray-600 text-sm mt-1">We&apos;ll get back to you soon.</p>
                  </div>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="absolute inset-0 bg-white/95 backdrop-blur-sm z-10 flex items-center justify-center animate-in fade-in duration-300">
                <div className="text-center space-y-3">
                  <XCircle className="w-16 h-16 text-red-600 mx-auto animate-in zoom-in duration-500" />
                  <div>
                    <h3 className="text-xl font-semibold text-red-600">Oops! Something went wrong</h3>
                    <p className="text-gray-600 text-sm mt-1">Please try again or email us directly.</p>
                  </div>
                </div>
              </div>
            )}

            <div className="grid w-full max-w-sm items-center gap-3">
              <Label htmlFor="name">Name</Label>
              <Input 
                type="text" 
                id="name" 
                name="q22_fullName"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="John Doe"
                required
                disabled={submitStatus === 'loading'}
                className="transition-all duration-200"
              />
            </div>
            
            <div className="grid w-full max-w-sm items-center gap-3">
              <Label htmlFor="email">Email</Label>
              <Input 
                type="email" 
                id="email" 
                name="q7_email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="john@email.com"
                required
                disabled={submitStatus === 'loading'}
                className="transition-all duration-200"
              />
            </div>
            
            <div className="grid w-full max-w-sm items-center gap-3">
              <Label htmlFor="message">Message</Label>
              <Textarea 
                id="message" 
                name="q4_message4"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Type message here"
                rows={5}
                required
                disabled={submitStatus === 'loading'}
                className="transition-all duration-200"
              />
            </div>
            
            <Button 
              type="submit"
              className="w-1/2 relative transition-all duration-200"
              disabled={submitStatus === 'loading'}
            >
              {submitStatus === 'loading' ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Sending...
                </>
              ) : (
                'Submit'
              )}
            </Button>

            {submitStatus === 'error' && (
              <div className="flex items-center gap-2 text-red-600 animate-in slide-in-from-top duration-300">
                <XCircle className="w-5 h-5" />
                <p className="text-sm font-medium">Failed to send. Please try again.</p>
              </div>
            )}
          </form>
        </div>
        
        <div className="w-full overflow-hidden rounded-2xl">
          <Image
            src="/assets/images/phone.png"
            width={800}
            height={500}
            alt="red phone"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}