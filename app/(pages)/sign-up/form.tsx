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
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const options = [
    "Specialist Mathematics 34",
    "Biology 34",
    "Mathematical Methods 34",
    "Chemistry 34",
    "English 34",
    "Physics 34",
    "Biology Olympiad",
    "Chemistry Olympiad",
    "SAT Preparation",
  ]

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setStatus('loading');

    const intYear = Number(yearLevel)

    const res = await fetch('/api/sign-up', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ firstName, lastName, email, phoneNumber, school, intYear, subjects: selectedOptions }),
    });

    if (res.ok) {
      setStatus('success');
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhoneNumber('');
      setSchool('');
      setYearLevel('');
      setSelectedOptions([]);
    } else {
      setStatus('error');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex justify-center items-center">
    <div className="relative w-48 flex-shrink-0">
      <label htmlFor="first-name" className="text-3xl font-semibold tracking-tighter">
        First Name
      </label>
      <span className="absolute -left-12 bottom-[0.375rem] h-[0.0625rem] bg-black w-[44rem]"></span>
      <span className="absolute right-[-2px] -bottom-8 h-24 bg-black w-[0.0625rem]"></span>
    </div>
    <input
      type="text"
      name="first-name"
      autoComplete="given-name"
      placeholder="Triumvirs"
      value={firstName}
      onChange={(e) => setFirstName(e.target.value)}
      className="ml-4 w-96 text-3xl font-serif tracking-tighter focus:outline-none"
      required
    />
  </div>

  <div className="flex justify-center items-center">
    <div className="relative w-48 flex-shrink-0">
      <label htmlFor="last-name" className="text-3xl font-semibold tracking-tighter">
        Last Name
      </label>
      <span className="absolute -left-12 bottom-[0.375rem] h-[0.0625rem] bg-black w-[44rem]"></span>
      <span className="absolute right-[-2px] -bottom-8 h-24 bg-black w-[0.0625rem]"></span>
    </div>
    <input
      type="text"
      name="last-name"
      autoComplete="family-name"
      placeholder='Academia'
      value={lastName}
      onChange={(e) => setLastName(e.target.value)}
      className="ml-4 w-96 text-3xl font-serif tracking-tighter focus:outline-none"
      required
    />
  </div>

  <div className="flex justify-center items-center">
    <div className="relative w-48 flex-shrink-0">
      <label htmlFor="email" className="text-3xl font-semibold tracking-tighter">
        Email
      </label>
      <span className="absolute -left-12 bottom-[0.375rem] h-[0.0625rem] bg-black w-[44rem]"></span>
      <span className="absolute right-[-2px] -bottom-8 h-24 bg-black w-[0.0625rem]"></span>
    </div>
    <input
      type="email"
      name="email"
      autoComplete="email"
      placeholder='triumvirsacademia@gmail.com'
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className="ml-4 w-96 text-3xl font-serif tracking-tighter focus:outline-none"
      required
    />
  </div>
        
  <div className="flex justify-center items-center">
    <div className="relative w-48 flex-shrink-0">
      <label htmlFor="phone" className="text-3xl font-semibold tracking-tighter">
        Phone
      </label>
      <span className="absolute -left-12 bottom-[0.375rem] h-[0.0625rem] bg-black w-[44rem]"></span>
      <span className="absolute right-[-2px] -bottom-8 h-24 bg-black w-[0.0625rem]"></span>
    </div>
    <input
      type="tel"
      name="phone"
      autoComplete="tel"
      placeholder='0412356789'
      value={phoneNumber}
      onChange={(e) => setPhoneNumber(e.target.value)}
      className="ml-4 w-96 text-3xl font-serif tracking-tighter focus:outline-none" 
      required
    />
  </div>

  <div className="flex justify-center items-center">
    <div className="relative w-48 flex-shrink-0">
      <label htmlFor="school" className="text-3xl font-semibold tracking-tighter">
        School
      </label>
      <span className="absolute -left-12 bottom-[0.375rem] h-[0.0625rem] bg-black w-[44rem]"></span>
      <span className="absolute right-[-2px] -bottom-8 h-24 bg-black w-[0.0625rem]"></span>
    </div>
    <input
      type="text"
      name="school"
      placeholder='Triumvirate'
      value={school}
      onChange={(e) => setSchool(e.target.value)}
      className="ml-4 w-96 text-3xl font-serif tracking-tighter focus:outline-none" 
      required
    />
  </div>

  <div className="flex justify-center items-center">
    <div className="relative w-48 flex-shrink-0">
      <label htmlFor="year-level" className="text-3xl font-semibold tracking-tighter">
        Year Level
      </label>
      <span className="absolute -left-12 bottom-[0.375rem] h-[0.0625rem] bg-black w-[44rem]"></span>
      <span className="absolute right-[-2px] -bottom-6 h-24 bg-black w-[0.0625rem]"></span>
    </div>
    <input
      type="number"
      min={1}
      max={12}
      name="year-level"
      placeholder='12'
      value={yearLevel}
      onChange={(e) => setYearLevel(e.target.value)}
      className="ml-4 w-96 text-3xl font-serif tracking-tighter focus:outline-none" 
      required
    />
  </div>
    <div className='flex justify-center py-16'>
        <div className='w-[10vw]'></div>
        <div className='w-[50vw]'>
            <div className='relative mb-8'>
                <h1 className='text-5xl font-semibold tracking-tighter'>Subjects</h1>
                <span className="absolute -left-8 bottom-[0.375rem] h-[0.0625rem] bg-black w-64"></span>
                <span className="absolute left-[0.0625rem] -bottom-2 h-16 bg-black w-[0.0625rem]"></span>
            </div>
            <div className="grid grid-cols-2">
                {options.map((option) => (
                    <div key={option}>
                    <button
                    type="button"
                    className={`text-3xl font-serif tracking-tighter ${
                        selectedOptions.includes(option)
                        ? "text-accent"
                        : "line-through"
                    }`}
                    onClick={() =>
                        setSelectedOptions((prev) =>
                        prev.includes(option)
                            ? prev.filter((o) => o !== option)
                            : [...prev, option]
                        )
                    }
                    >
                    {option}
                    </button>
                    </div>
                ))}
            </div>
        </div>
    </div>
  <div className='flex justify-center items-center mt-16'>
    <div className='w-[20vw]'></div>
    <div className='relative w-[40vw] flex justify-end'>

            <button type="submit" className="text-5xl font-bold tracking-tighter hover:text-accent">
            {status === 'success' && <p>Welcome to the Triumvirate.</p>}
            {status === 'error' && <p>An error occurred. Please try again.</p>}
            {status === 'loading' && <p>Signing up...</p>}
            {status === '' && <p className='flex items-center justify-end'>Register<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-12 pt-2">
                                    <path fillRule="evenodd" d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                </svg></p>}
            <span className="absolute -right-16 bottom-[0.375rem] h-[0.0625rem] bg-black w-[40rem]"></span>
            </button>

    </div>
  </div>
      </form>
    </div>
  );
};

export default SignUpForm;