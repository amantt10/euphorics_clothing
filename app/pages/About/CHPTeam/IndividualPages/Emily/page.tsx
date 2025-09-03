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
            Emily Leonard
            </h1>
          </div>
        </div>
      </div>

      {/* Responsive layout for image and info */}
      <div className='flex flex-col md:flex-row items-center justify-center gap-8 mb-10 px-4'>
        <img
          src="/members/Emily.jpg"
          alt="Emily"
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
            <p>Vocational Counselor, CHP Service Region #2 Central-Northern  </p>
          </div>
          <div>
            <h3 className='text-lg md:text-xl font-semibold'>Contact</h3>
            <p className="flex items-center gap-2 text-[#5D1725] hover:cursor-pointer">
              <MdEmail className="text-[#5D1725] text-xl" />
              eleonard@miod.msstate.edu
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
              Emily Leonard is one of the vocational counselors for the Career Horizons Project (CHP). She will support the CHP in the competitive integrated employment (CIE) placement and retention service delivery among individuals with disabilities impacted by Long COVID in the central-northern region of Mississippi. Ms. Leonard will recruit and enroll participants, conduct intake meetings, implement CIE placement and retention interventions to unemployed or underemployed participants, and conduct exit interviews and follow up surveys.<br/><br/> 
 
            Prior to serving in this role, Ms. Leonard served individuals with disabilities for 3 years at Mississippi Department of Rehabilitation Services (MDRS). For the first year and a half, Ms. Leonard served as a vocational counselor for Mississippi State University students with disabilities. She worked with students throughout the entire vocational rehabilitation process from intake to employment status. Ms. Leonard assured each student had the proper accommodations to succeed in the classroom and to achieve CIE. For the last year and a half, Ms. Leonard served as a business development representative for the golden triangle area at MDRS. In this role, she was responsible for promoting workforce diversity and inclusion by building strong partnerships with businesses to support the hiring, retention, and accommodation of individuals with disabilities. Ms. Leonard also assisted with job placements, internships, and work-based learning opportunities in CIE settings for all clients referred. 

              </p>
            </div>
          )}
          {activeTab === 'education' && (
            <div className="px-2 md:px-6">
              <ul className="list-disc pl-6 md:pl-8">
                <li>Bachelor of Science: Educational Psychology (2019), Mississippi State University  </li>
                <li>Master of Science: Counselor Education (concentration: rehabilitation counseling) (2021), Mississippi State University </li>
                <li>Certified Rehabilitation Counselor (CRC) (2021) </li>
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