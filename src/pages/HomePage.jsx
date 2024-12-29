import { Link } from 'react-router-dom';

// pages/HomePage.jsx
import React from 'react';
import Lottie from 'lottie-react';
import a1 from '../animations/a1.json'; // Replace with your animation file
import hs from '../animations/hs.json'; // Replace with your animation file
import ms from '../animations/ms.json'; // Replace with your animation file
import to from '../animations/to.json'; // Replace with your animation file
import dn from '../animations/dn.json'; // Replace with your animation file




const HomePage = () => {
  return (
    <main className="container mx-auto p-4">




     <section className="flex flex-col md:flex-row items-center justify-between py-8">
  <div className="text-center md:text-left md:w-1/2">
    <h2 className="text-6xl font-bold mb-4">Effortlessly Build Your Dream Team</h2>
    <p className="text-2xl mb-6">
      Discover and hire top-tier medical professionals who seamlessly integrate into your workflow, ensuring exceptional patient care and operational excellence.
    </p>
    <Link
      to="/schedule-demo"
      className="bg-[#8D0B41] text-white py-4 px-6 rounded-lg shadow-md hover:bg-blue-700 text-lg"
    >
      Book Demo
    </Link>
  </div>
  <div className="md:w-1/2 flex justify-center mt-8 md:mt-0 rounded-2xl overflow-hidden">
    <Lottie animationData={a1} style={{ width: '100%', height: '100%' }} />
  </div>
</section>







      <section className="py-8">
        <h2 className="text-4xl font-bold mb-16 mt-16 text-center">Learn how Vertex can help solve your most pressing workforce challenges.</h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div className="  rounded shadow-md">
          <Lottie animationData={hs} style={{ width: '100%', height: '100%'}}  />       
          </div>
          <div className="  rounded shadow-md">
          <Lottie animationData={ms} style={{ width: '100%', height: '100%'}}  />       

          </div>
          <div className="  rounded shadow-md">
          <Lottie animationData={to} style={{ width: '100%', height: '100%'}}  />       

          </div>
        </div>
      </section>




      <section className="text-center py-8">
        <div className="grid gap-4 grid-cols-2 justify-center">
          <Link to="/medical" className="bg-gray-200 p-0 rounded-lg shadow-md hover:bg-[#8D0B41] bg-opacity-74 hover:text-white cursor-pointer relative block w-full aspect-square">
            <img src="/medical.jpg" alt="Medical" className="absolute inset-0 w-full h-full object-cover opacity-50 hover:opacity-0 transition duration-300 rounded-lg" />
            <span className="relative text-xl font-bold flex justify-center items-center h-full">Medical</span>
          </Link>
          <Link to="/dental" className="bg-gray-200 p-0 rounded-lg shadow-md hover:bg-[#8D0B41] bg-opacity-74 hover:text-white cursor-pointer relative block w-full aspect-square">
            <img src="/dental.jpg" alt="Dental" className="absolute inset-0 w-full h-full object-cover opacity-50 hover:opacity-0 transition duration-300 rounded-lg" />
            <span className="relative text-xl font-bold flex justify-center items-center h-full">Dental</span>
          </Link>
        </div>
      </section>








      <section className="flex flex-col md:flex-row items-center justify-between py-16 my-16">
        <div className="md:w-1/2">
          <h3 className="text-4xl font-bold mb-4">We Are the Only Remote Medical Staffing Company That Signs BAA on a Corporate Level</h3>
          <p className="text-xl">
            Ensuring privacy and HIPAA compliance is critical. When you partner with us, you are assured of unmatched security and peace of mind. Unlike other companies that either do not sign a BAA or make foreign employees sign it, we handle it on a corporate level, ensuring your safety.
          </p>
        </div>
        <div className="md:w-1/2">
          <img src="/BAA.png" alt="Corporate Privacy" className="rounded-lg shadow-md" />
        </div>
      </section>




      <section className="py-8 text-center mt-16">
        <h3 className="text-4xl font-bold mb-4">Redefining Excellence</h3>
        <p className="text-2xl">
          Empowering businesses with an innovative, superior approach to achieving success through our worldwide network of top-tier, dependable, full-time professionals. Let us revolutionize how your work gets done.
        </p>
      </section>

      <section className="relative w-full mt-8 mb-12">
      <div className=" w-full h-64 md:h-max rounded shadow-md overflow-hidden">
        <div className="w-full h-full flex items-center justify-center transform md:scale-100 scale-150 -translate-y-10 md:translate-y-0">
          <Lottie
            animationData={dn}
            className="sm:w-3/4 sm:h-3/4 w-full h-full"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </div>
    </section>




    </main>
  );
};

export default HomePage;



/*

<section className="bg-gray-200 w-full h-max mt-8 rounded shadow-md mb-12">
<Lottie animationData={dn} style={{ width: '100%', height: '100%'}}  />       
</section>
*/





/*import React from 'react';

const HomePage = () => {
  return (
    <main className="container mx-auto p-4">
      <section className="text-center py-8">
        <h2 className="text-3xl font-bold mb-4">Hire Fast. Grow Faster.</h2>
        <p className="text-lg mb-6">
          Hire vetted, qualified, reliable talent within a week.
        </p>
        <button className="bg-blue-600 text-white py-2 px-4 rounded shadow-md hover:bg-blue-700">
          Book Demo
        </button>
      </section>
      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 py-8">*/
        {/* Placeholder for images */}
       /* <div className="bg-gray-200 aspect-square rounded shadow-md"></div>
        <div className="bg-gray-200 aspect-square rounded shadow-md"></div>
        <div className="bg-gray-200 aspect-square rounded shadow-md"></div>
      </section>
    </main>
  );
};

export default HomePage; */