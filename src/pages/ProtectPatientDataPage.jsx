// pages/ProtectPatientDataPage.jsx
import React from 'react';

const ProtectPatientDataPage = () => {
  return (
    <main className="bg-[#f7f9fc] text-gray-900 min-h-screen py-12 px-4">
      <div className="container mx-auto">
        {/* Header Section */}
        <section className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6 text-[#69002C]">
            Protect Patient Data with Vertex’s HIPAA-Compliant Solutions
          </h1>
          <p className="text-lg leading-relaxed">
            In an industry built on trust, safeguarding patient data is more than just a legal requirement—it’s a moral imperative. Vertex stands at the forefront of this transformation, offering a level of security and professionalism that sets us apart from the competition.
          </p>
        </section>

        {/* Risks Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-[#69002C]">The Risks of Non-Compliance</h2>
          <p className="text-lg leading-relaxed mb-6">
            Remote work has introduced new challenges for maintaining HIPAA compliance. Practices face risks such as unauthorized access, insecure communication channels, and insufficient training. Even a single breach can result in costly penalties, reputational damage, and a loss of patient trust.
          </p>
          <p className="text-lg leading-relaxed">
            Vertex eliminates these risks with a comprehensive approach to HIPAA compliance, ensuring that your practice remains secure, no matter where your team is located.
          </p>
        </section>

        {/* Framework Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-[#69002C]">Vertex’s Industry-Leading HIPAA Compliance Framework</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Comprehensive Training for Remote Employees:</h3>
              <p className="text-lg leading-relaxed">
                Every Vertex remote employee undergoes rigorous HIPAA training before starting their role. This includes understanding the nuances of Protected Health Information (PHI), identifying potential breaches, and adhering to strict protocols for secure communication.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">State-of-the-Art Security Tools:</h3>
              <p className="text-lg leading-relaxed">
                Our remote employees use only HIPAA-compliant technologies for communication and data handling. From encrypted email systems to secure video conferencing, every interaction is protected. All client data is stored and transmitted using advanced encryption methods, ensuring that sensitive information is never compromised.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Regular Compliance Audits:</h3>
              <p className="text-lg leading-relaxed">
                Vertex doesn’t just meet HIPAA standards; we exceed them. Our dedicated compliance officers conduct routine audits and provide ongoing training to ensure that every team member is up-to-date on the latest regulations.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Proactive Data Protection Protocols:</h3>
              <p className="text-lg leading-relaxed">
                Access to patient data is restricted to authorized personnel only, with multi-layered authentication systems in place to prevent unauthorized access. Regular software updates and vulnerability assessments ensure that our systems remain secure against evolving threats.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Vertex Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-[#69002C]">Why Choose Vertex for HIPAA-Compliant Remote Staffing?</h2>
          <ul className="list-disc pl-8 space-y-4">
            <li>
              <span className="font-semibold">Peace of Mind:</span> Unlike other staffing firms that outsource compliance responsibilities, Vertex takes full ownership. Our commitment to HIPAA compliance ensures that your practice is protected at every level.
            </li>
            <li>
              <span className="font-semibold">Unmatched Expertise:</span> Our remote employees are not just assistants; they are highly skilled professionals trained to integrate seamlessly into your practice while maintaining the highest standards of security.
            </li>
            <li>
              <span className="font-semibold">Cost-Effective Solutions:</span> Achieve HIPAA compliance without the overhead costs of hiring and training in-house staff. Vertex provides a scalable, budget-friendly solution tailored to your needs.
            </li>
            <li>
              <span className="font-semibold">Focus on Patient Care:</span> By partnering with Vertex, you can focus on what matters most—delivering exceptional care—while we handle the complexities of compliance.
            </li>
          </ul>
        </section>

        {/* Closing Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#69002C]">Elevate Your Practice with Vertex</h2>
          <p className="text-lg leading-relaxed mb-8">
            When you choose Vertex, you’re not just hiring remote employees—you’re investing in a partnership that prioritizes your success. Our commitment to HIPAA compliance, coupled with our dedication to exceptional service, ensures that your practice operates at the highest level of security and efficiency.
          </p>
         
        </section>
      </div>
    </main>
  );
};

export default ProtectPatientDataPage;
