import React from 'react';

const CompanyPage = () => {
  // Data for paragraphs and sections
  const companyInfo = [
    {
      title: "User Agreement",
      paragraphs: [
        "By using this website, you agree to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern Raijin Tech Hub's relationship with you in relation to this website.",
        "The term 'Raijin Tech Hub' or 'us' or 'we' refers to the owner of the website whose registered office is located in [Company Address]. The term 'you' refers to the user or viewer of our website.",
        "Your use of this website is subject to the following terms of use, which are subject to change without notice."
      ]
    },
    {
      title: "Privacy Policy",
      paragraphs: [
        "At Raijin Tech Hub, we are committed to protecting your privacy. We use the information we collect about you to provide a better user experience.",
        "We may collect personal information such as your name, email address, and other details to serve you better. We will never sell your personal information to third parties.",
        "By using our website, you consent to the collection and use of your information in accordance with this policy."
      ]
    },
    {
      title: "Terms of Service",
      paragraphs: [
        "By accessing this website, you agree to comply with the terms and conditions set forth by Raijin Tech Hub.",
        "You may not use any content from this website for commercial purposes without obtaining prior consent from Raijin Tech Hub.",
        "We reserve the right to modify these terms at any time, and such modifications will be effective immediately upon posting."
      ]
    },
    {
      title: "Disclaimer",
      paragraphs: [
        "All information provided on this website is for general informational purposes only. Raijin Tech Hub makes no representations or warranties about the accuracy, reliability, or completeness of any information on this site.",
        "We are not liable for any errors or omissions, or for any losses, injuries, or damages arising from the use of the information on this site."
      ]
    }
  ];

  return (
    <div className="bg-gray-100 py-16 relative w-full h-full flex flex-col space-y-0 overflow-x-hidden">
      <div className="container mx-auto px-6 sm:px-8 lg:px-16 text-center">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-purple-600 mb-10">
          Raijin Tech Hub - Company Information
        </h1>

        {/* Company Info Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {companyInfo.map((section, index) => (
            <div key={index} className="bg-white shadow-xl rounded-lg p-8 mb-10">
              <h2 className="text-3xl font-bold text-teal-600 mb-6">{section.title}</h2>
              {section.paragraphs.map((para, index) => (
                <p key={index} className="text-gray-700 text-base mb-4 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="bg-white p-8 rounded-lg shadow-xl mt-16 max-w-lg mx-auto">
          <h3 className="text-3xl font-bold text-teal-600 mb-6">Contact Us</h3>
          <p className="text-gray-700 text-base mb-4">
            For more information, you can reach us at:
          </p>
          <p className="text-gray-700 text-base font-semibold">Email: raijintechug@gmail.com</p>
          <p className="text-gray-700 text-base font-semibold">Phone: +256 777 982066</p>
        </div>
      </div>
    </div>
  );
};

export default CompanyPage;
