import Footer from '@/components/Footer'
import Mainnavbar from '@/components/Navbar'
import { LinkPreview } from '@/components/ui/link-preview'
import React from 'react'

const page = () => {
  return (
    <>
      <Mainnavbar />

      <div className="xl:container mx-auto md:max-w-5xl max-w-lg w-full px-4 py-10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-gray-800">Subawards</h1>

        {/* University of Wisconsin–Madison Section */}
        <div className="mb-16 p-6 shadow-lg rounded-lg bg-white">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-6">
            Sub-Awardee Partner: University of Wisconsin–Madison <br />
            <span className="text-xl md:text-2xl font-semibold">Leadership in Training, Intervention, and Evaluation Activities</span>
          </h2>
          {/* Use flow-root to contain the floated image properly */}
          <div className="text-gray-700 leading-relaxed flow-root">
            <img
              src="/wispngimg.png"
              alt="UW Madison Logo"
              role='none'
              className="float-right ml-6 mb-4 w-32 md:w-128" // Adjusted size, float right, added margins
            />
            <p className="mb-4">
              The CHP is pleased to partner with the University of Wisconsin–Madison, under the leadership of <span className="font-semibold">Dr. Malachy Bishop</span>, to support the development, training, and evaluation components of our project.
            </p>
            <p className="mb-4">
              As part of this partnership, the University of Wisconsin–Madison will collaborate with the CHP Principal Investigator and project team, and supported employment consultant, Dr. Wehman to lead the development of the assessment protocols for participants with Long COVID, intervention protocols, and deliver training to project counselors and personnel engaged in the implementation of the project’s Competitive Integrated Employment (CIE) Placement and Retention intervention. The university will lead formative and summative evaluation activities, and also work in partnership with the external evaluator, Dr. Mykal Leslie to direct evaluation efforts to assess project fidelity, outcomes, and impact, ensuring alignment with RSA priorities.
            </p>
            <p className="mb-4">
              <span className="font-semibold">Dr. Bishop</span>, the Norman L. and Barbara M. Berven Professor of Rehabilitation Psychology in the Department of Rehabilitation Psychology and Special Education at the University of Wisconsin–Madison, will direct the sub-awardee activities. He holds a Ph.D. in Rehabilitation Psychology from the University of Wisconsin-Madison and Masters in Rehabilitation Counseling from Portland State University. His extensive expertise in program evaluation, vocational rehabilitation, and long-term employment outcomes for individuals with disabilities will be integral to the project’s implementation and knowledge translation efforts. Dr. Bishop’s national leadership in rehabilitation counseling includes his role as Co-Principal Investigator of the RSA-funded Vocational Rehabilitation Technical Assistance Center for Quality Employment (VRTAC–QE). He brings experience in systems-level technical assistance and applied research focused on employment and psychosocial outcomes for individuals with complex health conditions. His clinical background spans rehabilitation counseling, psychology, and neuropsychology across health care and rehabilitation settings.
            </p>
            <div>
              To learn more about Dr. Bishop’s professional background and scholarly contributions and awards, visit his University of Wisconsin–Madison faculty  <LinkPreview url="https://rpse.education.wisc.edu/fac-staff/bishop-malachy/" className="font-bold"> profile.</LinkPreview>
            </div>
          </div>
        </div>

        {/* WVU / JAN Section */}
        <div className="mt-12 p-6 shadow-lg rounded-lg bg-white">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-6">
            Sub-Awardee Partner: Center for Disability Information, West Virginia University <br/>
            
            <span className="text-xl md:text-2xl font-semibold"> CHP Acquired Disabilities and Employment Portal Development</span>
          </h2>
          {/* Use flow-root to contain the floated image properly */}
          <div className="text-gray-700 leading-relaxed flow-root">
            <img
              src="/westvirg.png"
              alt="WVU"
              role='none'
              className="float-right ml-6 mb-4 w-32 md:w-128" // Adjusted size, float right, added margins
            />

            <p className="mb-4">
              In partnership with the Center for Disability Information (CDI) at West Virginia University (WVU), the CHP team will develop an Acquired Disabilities and Employment Portal.  The portal will be a fully accessible, plain-language, and largely text-based resource populated with our own project findings as well as other information and resources related to the employment situation for people with disabilities experiencing Long COVID. Visitors to the portal will indicate their roles as workers with disabilities, employers, healthcare professionals, rehabilitation practitioners, etc. and be able to select the particular types of subject matter in which they are interested. The portal will provide visitors with example accommodations, research results, and other materials relevant to their needs. The portal will feature multiple filters that may be applied to target users’ most immediate needs. Links will be provided to other accommodation and ADA implementation resources. 
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default page