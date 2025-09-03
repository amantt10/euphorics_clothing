"use client"

import Footer from '@/components/Footer'
import Mainnavbar from '@/components/Navbar'
import Link from 'next/link'
import React, { useState } from 'react'
import { MdEmail, MdPhone } from 'react-icons/md'

const page = () => {
  const [activeTab, setActiveTab] = useState<'biography' | 'education' | 'more'>('biography')

  return (
    <>
      <Mainnavbar />
      {/* Responsive container for the header and border */}
      <div className="flex justify-center mb-10">
        <div className="w-full max-w-4xl flex flex-col items-center">
          {/* Responsive border that matches the width of the content below */}
          <div className="w-full md:w-[calc(32rem+2rem)] lg:w-[calc(32rem+2rem)] border-b border-gray-300 flex justify-center px-4">
            <h1 className='text-3xl md:text-4xl font-bold text-center text-gray-800 py-2'>
            Abigail Long
            </h1>
          </div>
        </div>
      </div>

      {/* Responsive layout for image and info */}
      <div className='flex flex-col md:flex-row items-center justify-center gap-8 mb-10 px-4'>
        <img
          src="/members/Abigail.jpg"
          alt="Abigail Long"
          role="Vocational Counselor"
          className="w-50 object-cover rounded-lg shadow-lg mb-6 md:mb-0"
        />
        <div className='flex flex-col gap-4 w-full max-w-md'>
          <div>
            <h3 className='text-lg md:text-xl font-semibold'>Division</h3>
            <p className='text-md'>Mississippi Institute on Disabilities</p>
          </div>
          <div>
            <h3 className='text-lg md:text-xl font-semibold'>Title</h3>
            <p>Vocational Counselor, CHP Service Region #6 Coastal & Southern</p>
          </div>
          <div>
            <h3 className='text-lg md:text-xl font-semibold'>Contact</h3>
            <p className="flex items-center gap-2 text-[#5D1725] hover:cursor-pointer">
              <MdEmail className="text-[#5D1725] text-xl" />
             along@miod.msstate.edu
            </p>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="w-full flex flex-col items-center my-8 px-4">
        <div className="flex border-b mb-4 w-full max-w-2xl">
          <button
            className={`px-4 py-2 font-semibold transition-colors duration-200 ${activeTab === 'biography' ? 'border-b-2 border-[#5D1725] text-[#5D1725]' : 'text-gray-600'}`}
            onClick={() => setActiveTab('biography')}
          >
            Biography
          </button>
          <button
            className={`px-4 py-2 font-semibold transition-colors duration-200 ${activeTab === 'education' ? 'border-b-2 border-[#5D1725] text-[#5D1725]' : 'text-gray-600'}`}
            onClick={() => setActiveTab('education')}
          >
            Educational Background
          </button>
        </div>
        <div className="w-full max-w-2xl p-4 bg-gray-50 rounded-lg shadow">
          {activeTab === 'biography' && (
            <div>
              <p>
              As a southern/coastal Mississippi native, I am beyond excited for the opportunity to expand my career and take on a new role as a vocational counselor for the Career Horizon's Project with Mississippi Institute on Disabilities. I have had friends and family members experience vocational hardships due to the lasting effects of Long COVID which is what initially sparked my interest. With this project, we will be able to assist participants with gaining back their educational and vocational independence by fostering support, resources, accommodations, and rehabilitation to not only acquire placement, but successfully retain their positions - all while being able to help those in our local communities.<br/><br/>
 

I've been fortunate to have been able to perform in many different roles within my field thus far in my career. I began as a Registered Behavior Technician/Therapist in the clinical setting working with children and adults with ASD to gain relevant experience while I finished my bachelor's degree. Once I began my master's program, I expanded into the educational realm as an Assistant Behavior Specialist/Counselor for high school students. From there, I was able to take on a district-wide role as the Behavior Specialist/Counselor for a PK-12 school district. These experiences have led me to this new journey working with a new population of individuals, and I cannot wait to see what the future holds! 

              </p>
            </div>
          )}
          {activeTab === 'education' && (
            <div className="px-2 md:px-6">
              <ul className="list-disc pl-6 md:pl-8">
                <li>B.S. in Psychology from The University of Southern Mississippi, 2021</li>
                <li>M.S. in Educational Psychology with an emphasis in Applied Behavior Analysis from Mississippi State University, 2024 </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  )
}

export default page