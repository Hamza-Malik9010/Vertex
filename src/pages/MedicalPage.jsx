import React from 'react';
import Lottie from 'lottie-react';
import r1 from '../animations/r1.json'; // Replace with your animation files
import r2 from '../animations/r2.json';
import r3 from '../animations/r3.json';
import harvard from '../animations/harvard.json';
import medden from '../animations/med-den.json';
import { Link } from 'react-router-dom';



const MedicalPage = () => {
  return (
    <main className="container mx-auto p-4">



<section className="flex flex-col md:flex-row items-center justify-between py-12 px-8 bg-[#8D0B41] text-white rounded-3xl">
  <div className="text-center md:text-left md:w-1/2 px-4">
    <h2 className="text-lg font-semibold">Medical</h2>
    <h1 className="text-4xl md:text-6xl font-bold mb-4">Elevate Your Practice. Simplify Your Staffing.</h1>
    <p className="text-lg mb-6">
      Partner with us to ensure a steady supply of highly trained, HIPAA-compliant professionals, empowering your clinic to achieve more with less stress. Let us handle the staffing, so you can focus on delivering exceptional care.
    </p>
    <Link
      to="/schedule-demo"
      className="bg-[#69002C] text-white py-3 px-8 rounded-lg shadow-md hover:bg-blue-700 text-lg inline-block"
    >
      Book Demo
    </Link>
  </div>
  <div className="md:w-1/2 relative">
    <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden mx-auto relative bg-gray-300">
      <img src="/medical.jpg" alt="Training" />
    </div>
  </div>
</section>








      {/* Section 2: Top Three Reasons */}
      <section className="py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Here are the top three reasons modern medical practices trust us:
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="text-center">
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <Lottie animationData={r1} style={{ width: '100%', height: '100%'}} className="w-full h-48 mx-auto" />
            </div>
           
          </div>
          <div className="text-center">
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <Lottie animationData={r2} style={{ width: '100%', height: '100%'}} className="w-full h-48 mx-auto" />
            </div>
            
          </div>
          <div className="text-center">
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <Lottie animationData={r3} style={{ width: '100%', height: '100%'}} className="w-full h-48 mx-auto" />
            </div>
           
          </div>
        </div>
      </section>


            {/* Section 3: Training and Screening */}

      <section className="py-16 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Want high-quality talent? Our acceptance rate is lower than Harvard’s.</h2>
          <p className="text-2xl mb-6">
            Our rigorous vetting process guarantees you get highly qualified, pre-trained candidates for every position.
          </p>
          <img
            src="/training-placeholder.png"
            alt="Training"
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="md:w-1/2">
          <Lottie animationData={harvard} style={{ width: '100%', height: '100%' }} />
        </div>
      </section>

      {/* Section 4: Privacy and Compliance */}
      <section className="bg-gray-100 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">We Sign BAAs Because We Trust Our Employees</h2>
        <p className="text-lg md:text-2xl max-w-3xl mx-auto text-gray-700">
          Most agencies either don’t sign BAAs or pass the responsibility to foreign employees, leaving your practice exposed. We take full responsibility at a corporate level, ensuring 100% HIPAA compliance and giving you peace of mind.
        </p>
      </section>

      {/* Section 5: Placeholder for Images */}
      <section className="py-16 grid gap-8 md:grid-cols-3">
        <img
          src="/con1.png"
          alt="Placeholder 1"
          className="rounded-lg shadow-md"
        />
        <img
          src="/con2.png"
          alt="Placeholder 2"
          className="rounded-lg shadow-md"
        />
        <img
          src="/con3.png"
          alt="Placeholder 3"
          className="rounded-lg shadow-md"
        />
      </section>

      {/* Section 6: Closing Statement */}
      <section className="text-center py-16">
        <h3 className="text-4xl md:text-4xl font-bold">
          Focus on patients. Not piles of resumes.
        </h3>
        <p className="text-2xl mt-4 text-gray-600">
          Front-office efficiency can work wonders for your practice—and your personal blood pressure.
        </p>
      </section>


      <section className="relative w-full mt-8 mb-12">
      <div className="bg-gray-50 w-full h-64 md:h-max rounded shadow-md overflow-hidden">
        <div className="w-full h-full flex items-center justify-center transform md:scale-100 scale-150 -translate-y-6 md:translate-y-0">
          <Lottie
            animationData={medden}
            className="sm:w-3/4 sm:h-3/4 w-full h-full"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </div>
    </section>





    <section className="bg-[#8D0B41] text-white py-12 p-12 rounded-2xl">
  <div className="container mx-auto text-center">
    <h2 className="text-4xl font-bold mb-4">How It Works: Seamless Hiring Made Simple</h2>
    <p className="text-2xl mb-8">
      We streamline the process so you can focus on delivering exceptional care to your patients.
      From understanding your needs to onboarding your team, we’ve got you covered every step of the way.
    </p>
  </div>
  <div className="container mx-auto grid gap-8 md:grid-cols-3">
    {/* Image 1 */}
    <div className="rounded-lg overflow-hidden shadow-lg">
      <img src="/tellus1.png" alt="Step 1" className="w-full h-auto" />
    </div>
    {/* Image 2 */}
    <div className="rounded-lg overflow-hidden shadow-lg">
      <img src="/tellus2.png" alt="Step 2" className="w-full h-auto" />
    </div>
    {/* Image 3 */}
    <div className="rounded-lg overflow-hidden shadow-lg">
      <img src="/tellus3.png" alt="Step 3" className="w-full h-auto" />
    </div>
  </div>


{/* Pulsating Button */}
<div className="mt-12 flex justify-center">
  <Link
    to="/schedule-demo"
    className="bg-[#69002C] text-white py-10 px-10 rounded-full shadow-lg hover:bg-blue-700 text-2xl animate-pulse text-center"
  >
    Book Demo
  </Link>
 </div>

</section>






<section className="bg-[#F8F9FA] text-black py-12">
      <div className="container mx-auto text-center mb-8">
        <h2 className="text-4xl font-bold">Recent Articles</h2>
        <p className="text-lg text-gray-600">
          Discover how Vertex empowers medical practices through innovative remote staffing solutions.
        </p>
      </div>
      <div className="container mx-auto grid gap-6 md:grid-cols-2">
        {/* Article 1 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src="/article1.webp"
            alt="How Remote Employees Ease Staff Workloads"
            className="w-full h-52 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-2">
              Empower Your Team: How Remote Employees Revolutionize Workloads
            </h3>
            <p className="text-gray-700 mb-4">
              Discover how Vertex’s remote employees handle critical tasks, streamline workflows, and reduce burnout in healthcare teams.
            </p>
            <Link
              to="/empower-your-team"
              className="text-blue-600 hover:underline"
            >
              Read More →
            </Link>
          </div>
        </div>
        {/* Article 2 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src="/article2.webp"
            alt="How Vertex Ensures HIPAA Compliance"
            className="w-full h-52 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-2">
              Protect Patient Data with Vertex’s HIPAA-Compliant Solutions
            </h3>
            <p className="text-gray-700 mb-4">
              Learn how Vertex guarantees secure remote staffing, safeguarding sensitive healthcare data with industry-leading compliance measures.
            </p>
            <Link
              to="/protect-patient-data"
              className="text-blue-600 hover:underline"
            >
              Read More →
            </Link>
          </div>
        </div>
      </div>
    </section>










    </main>
  );
};

export default MedicalPage;
