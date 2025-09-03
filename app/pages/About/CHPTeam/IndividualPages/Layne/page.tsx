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
            Layne LeBlanc
            </h1>
          </div>
        </div>
      </div>

      {/* Responsive layout for image and info */}
      <div className='flex flex-col md:flex-row items-center justify-center gap-8 mb-10 px-4'>
        <img
          src="/members/Layne.png"
          alt="Layne LeBlanc"
          role="Graduate Research Assistant"
          className="w-50 object-cover rounded-lg shadow-lg mb-6 md:mb-0"
        />
        <div className='flex flex-col gap-4 w-full max-w-md'>
          <div>
            <h3 className='text-lg md:text-xl font-semibold'>Division</h3>
            <p className='text-md'>Mississippi Institute on Disabilities</p>
          </div>
          <div>
            <h3 className='text-lg md:text-xl font-semibold'>Title</h3>
            <p>Graduate Research Assistant </p>
          </div>
          <div>
            <h3 className='text-lg md:text-xl font-semibold'>Contact</h3>
            <p className="flex items-center gap-2 text-[#5D1725] hover:cursor-pointer">
              <MdEmail className="text-[#5D1725] text-xl" />
              ll1314@msstate.edu  
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
              Layne LeBlanc is a Graduate Research Assistant for the Career Horizons Project (CHP) and a Master of Science in Rehabilitation Counseling student at Mississippi State University, set to graduate in Summer 2025. She currently holds a Bachelor of Arts in Psychology with a minor in General Business from the University of Mississippi, which she earned in May 2023. Layne completed both her practicum and internship during her master’s training at Louisiana Rehabilitation Services, where she gained hands-on experience in state vocational rehabilitation practices and client-centered service delivery. Her growing knowledge and passion for research in the field are further reflected in her presentation at the Rehabilitation Association of Mississippi Conference, where she co-presented on “Generation Z and Vocational Rehabilitation Service Needs: What Vocational Rehabilitation Counselors (VRCs) Need to Know.” <br/><br/>
 

As a GRA for the CHP, Layne will contribute to the implementation of research, data collection, and the dissemination of project findings. Her academic training has equipped her with a strong foundation in research methodology, disability policy and advocacy, and the application of assistive technology in vocational settings. Committed to bettering the field of rehabilitation, Layne will continue her training as a Ph.D. student in Counselor Education and Supervision at Mississippi State University beginning in Fall 2025. Her passion for advocacy, inclusive service development, and research makes her a valuable member of the CHP team.

              </p>
            </div>
          )}
          {activeTab === 'education' && (
            <div className="px-2 md:px-6">
              <ul className="list-disc pl-6 md:pl-8">
                <li>B.A. Psychology </li>
                <li>Current M.S. Rehabilitation Counseling Student (Complete Summer 2025)</li>
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