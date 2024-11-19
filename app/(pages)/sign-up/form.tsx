// components/ContactForm.js
'use client';

import { useState } from 'react';

const SignUpForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [school, setSchool] = useState('');
  const [yearLevel, setYearLevel] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setStatus('loading');

    const intYear = parseInt(yearLevel)

    const res = await fetch('/api/sign-up', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ firstName, lastName, email, phoneNumber, school, intYear }),
    });

    if (res.ok) {
      setStatus('success');
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhoneNumber('');
      setSchool('');
      setYearLevel('');
    } else {
      setStatus('error');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex justify-center items-center">
    <div className="relative w-64 flex-shrink-0">
      <label htmlFor="first-name" className="text-5xl font-semibold tracking-tighter">
        First Name
      </label>
      <span className="absolute -left-12 bottom-[0.375rem] h-[0.0625rem] bg-black w-[48rem]"></span>
      <span className="absolute right-[-2px] -bottom-4 h-24 bg-black w-[0.0625rem]"></span>
    </div>
    <input
      type="text"
      name="first-name"
      autoComplete="given-name"
      placeholder="Triumvirs"
      value={firstName}
      onChange={(e) => setFirstName(e.target.value)}
      className="ml-4 w-96 text-5xl font-serif tracking-tighter focus:outline-none"
      required
    />
  </div>

  <div className="flex justify-center items-center">
    <div className="relative w-64 flex-shrink-0">
      <label htmlFor="last-name" className="text-5xl font-semibold tracking-tighter">
        Last Name
      </label>
      <span className="absolute -left-12 bottom-[0.375rem] h-[0.0625rem] bg-black w-[48rem]"></span>
      <span className="absolute right-[-2px] -bottom-4 h-24 bg-black w-[0.0625rem]"></span>
    </div>
    <input
      type="text"
      name="last-name"
      autoComplete="family-name"
      placeholder='Academia'
      value={lastName}
      onChange={(e) => setLastName(e.target.value)}
      className="ml-4 w-96 text-5xl font-serif tracking-tighter focus:outline-none"
      required
    />
  </div>

  <div className="flex justify-center items-center">
    <div className="relative w-64 flex-shrink-0">
      <label htmlFor="email" className="text-5xl font-semibold tracking-tighter">
        Email
      </label>
      <span className="absolute -left-12 bottom-[0.375rem] h-[0.0625rem] bg-black w-[48rem]"></span>
      <span className="absolute right-[-2px] -bottom-4 h-24 bg-black w-[0.0625rem]"></span>
    </div>
    <input
      type="email"
      name="email"
      autoComplete="email"
      placeholder='triumvirsacademia@gmail.com'
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className="ml-4 w-96 text-3xl pt-3 font-serif tracking-tighter focus:outline-none"
      required
    />
  </div>
        
  <div className="flex justify-center items-center">
    <div className="relative w-64 flex-shrink-0">
      <label htmlFor="phone" className="text-5xl font-semibold tracking-tighter">
        Phone
      </label>
      <span className="absolute -left-12 bottom-[0.375rem] h-[0.0625rem] bg-black w-[48rem]"></span>
      <span className="absolute right-[-2px] -bottom-4 h-24 bg-black w-[0.0625rem]"></span>
    </div>
    <input
      type="tel"
      name="phone"
      autoComplete="tel"
      placeholder='0412356789'
      value={phoneNumber}
      onChange={(e) => setPhoneNumber(e.target.value)}
      className="ml-4 w-96 text-5xl font-serif tracking-tighter focus:outline-none" // Adjust as needed
      required
    />
  </div>

  <div className="flex justify-center items-center">
    <div className="relative w-64 flex-shrink-0">
      <label htmlFor="school" className="text-5xl font-semibold tracking-tighter">
        School
      </label>
      <span className="absolute -left-12 bottom-[0.375rem] h-[0.0625rem] bg-black w-[48rem]"></span>
      <span className="absolute right-[-2px] -bottom-4 h-24 bg-black w-[0.0625rem]"></span>
    </div>
    <input
      type="text"
      name="school"
      placeholder='Triumvirate'
      value={school}
      onChange={(e) => setSchool(e.target.value)}
      className="ml-4 w-96 text-3xl pt-3 font-serif tracking-tighter focus:outline-none" // Adjust as needed
      required
    />
  </div>

  <div className="flex justify-center items-center">
    <div className="relative w-64 flex-shrink-0">
      <label htmlFor="year-level" className="text-5xl font-semibold tracking-tighter">
        Year Level
      </label>
      <span className="absolute -left-12 bottom-[0.375rem] h-[0.0625rem] bg-black w-[48rem]"></span>
      <span className="absolute right-[-2px] -bottom-6 h-24 bg-black w-[0.0625rem]"></span>
    </div>
    <input
      type="number"
      name="year-level"
      placeholder='12'
      value={yearLevel}
      onChange={(e) => setYearLevel(e.target.value)}
      className="ml-4 w-96 text-5xl font-serif tracking-tighter focus:outline-none" // Adjust as needed
      required
    />
  </div>
  <div className='flex justify-center items-center'>

    <div className='p-8 border border-black w-72 h-32 rounded-[4rem] flex justify-center items-center bg-white z-10'>

            <button type="submit" className="text-7xl font-bold tracking-tighter hover:text-accent">
            Register
            </button>
    </div>
  </div>
      </form>

      {status === 'success' && (
        <p className="text-green-500 mt-4">Thank you for your message!</p>
      )}
      {status === 'error' && (
        <p className="text-red-500 mt-4">An error occurred. Please try again.</p>
      )}
      {status === 'loading' && <p className="text-blue-500 mt-4">Sending...</p>}
    </div>
  );
};

export default SignUpForm;