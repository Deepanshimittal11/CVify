import Header from "@/components/custom/Header";
import React, { useEffect } from "react";
import heroSnapshot from "@/assets/heroSnapshot.png";
import { useNavigate } from "react-router-dom";
import { FaGithub, FaCircle, FaInfoCircle } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { startUser } from "../../Services/login.js";
import { useDispatch, useSelector } from "react-redux";
import { addUserData } from "@/features/user/userFeatures.js";

function HomePage() {
  const user = useSelector((state) => state.editUser.userData);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = () => {
    window.open(
      "https://github.com/Deepanshimittal11",
      "_blank"
    );
  };

  useEffect(() => {
    const fetchResponse = async () => {
      try {
        const response = await startUser();
        if (response.statusCode == 200) {
          dispatch(addUserData(response.data));
        } else {
          dispatch(addUserData(""));
        }
      } catch (error) {
        console.log(
          "Printing from Home Page there was a error ->",
          error.message
        );
        dispatch(addUserData(""));
      }
    };
    fetchResponse();
  }, []);

  const hadnleGetStartedClick = () => {
    if (user) {
      console.log("Printing from Homepage User is There ");
      navigate("/dashboard");
    } else {
      console.log("Printing for Homepage User Not Found");
      navigate("/auth/sign-in");
    }
  };
  return (
    <>
      <Header user={user} />
      <section className="pt-24 pb-20 bg-gradient-to-b from-white via-gray-50 to-gray-100 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        
        <div className="px-12 mx-auto max-w-7xl relative z-10">
          <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
            <h1 className="mb-8 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
              <span>Start</span>{" "}
              <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-400 via-purple-500 to-pink-500 lg:inline">
                building a Resume
              </span>{" "}
              <span>for your next Job</span>
            </h1>
            <p className="px-0 mb-8 text-lg text-gray-600 md:text-xl lg:px-24 font-medium">
              Build. Refine. Shine. With AI-Driven Resumes
            </p>
            <div className="mb-4 space-x-0 md:space-x-3 md:mb-8 flex flex-col sm:flex-row justify-center gap-4">
              <a
                className="inline-flex items-center justify-center w-full px-8 py-4 mb-2 text-lg font-semibold text-white bg-gradient-to-r from-green-400 to-green-500 rounded-xl sm:w-auto sm:mb-0 hover:cursor-pointer shadow-lg hover:shadow-2xl hover:scale-105 transform transition duration-300 ease-out"
                onClick={hadnleGetStartedClick}
              >
                Get Started
                <svg
                  className="w-4 h-4 ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
              <a
                onClick={handleClick}
                className="inline-flex items-center justify-center w-full px-8 py-4 mb-2 text-lg font-semibold text-gray-700 bg-white border-2 border-gray-300 rounded-xl sm:w-auto sm:mb-0 cursor-pointer shadow-md hover:shadow-lg hover:border-green-400 hover:bg-gray-50 transition duration-300 ease-out"
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="w-full mx-auto mt-24 text-center md:w-10/12">
            <div className="relative z-0 w-full mt-8">
              <div className="relative overflow-hidden shadow-2xl rounded-2xl bg-white">
                <div className="flex items-center justify-between px-4 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 h-11 rounded-t-2xl">
                  <div className="flex space-x-1.5">
                    <FaCircle className="w-3 h-3 text-white hover:text-gray-300 transition duration-300 transform hover:scale-125 cursor-pointer" />
                    <FaCircle className="w-3 h-3 text-white hover:text-gray-300 transition duration-300 transform hover:scale-125 cursor-pointer" />
                    <FaCircle className="w-3 h-3 text-white hover:text-gray-300 transition duration-300 transform hover:scale-125 cursor-pointer" />
                  </div>
                  <FaInfoCircle className="text-white hover:text-gray-300 transition duration-300 transform hover:rotate-45 cursor-pointer" />
                </div>
                <img
                  className="object-cover py-2 px-4 rounded-b-2xl transition duration-300 transform hover:scale-105 cursor-pointer"
                  src={heroSnapshot}
                  alt="Dashboard"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="px-12 mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Resume Builder?
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to create a professional resume in minutes
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="bg-green-400 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Professional Templates</h3>
              <p className="text-gray-700">
                Choose from a variety of expertly designed resume templates that match industry standards.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="bg-purple-500 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5.951-1.429 5.951 1.429a1 1 0 001.169-1.409l-7-14z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI-Powered Assistance</h3>
              <p className="text-gray-700">
                Get intelligent suggestions and content recommendations powered by artificial intelligence.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="bg-blue-500 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 000-2H6V3a1 1 0 01-1-1zM3 5a2 2 0 114 0 2 2 0 01-4 0zm9.773-5.773a1 1 0 011.414 0l4.243 4.243a1 1 0 010 1.414l-4.243 4.243a1 1 0 01-1.414-1.414L15.586 9 12.414 5.828a1 1 0 010-1.414zM5 12a2 2 0 114 0 2 2 0 01-4 0z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Real-Time Preview</h3>
              <p className="text-gray-700">
                See instant updates as you edit your resume with a live preview feature.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="bg-pink-500 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 1 1 0 000-2H6a6 6 0 016 6v3h3a3 3 0 013 3v6a3 3 0 01-3 3H4a3 3 0 01-3-3v-6a3 3 0 013-3h3V7a4 4 0 00-4-4H2a1 1 0 000 2h2z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Easy Download</h3>
              <p className="text-gray-700">
                Export your resume in PDF or other formats for easy sharing with employers.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="bg-yellow-500 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.929-1.49c.494.123.996.199 1.505.231m0 0a4.5 4.5 0 00-8.564 2.5m0 2.25a4.5 4.5 0 008.564-2.5m0 0c.3.38.645.643 1.228.643 1.003 0 1.5-1.341 1.5-2.5a1.5 1.5 0 00-1.5-1.5c-.583 0-.928.263-1.228.643m5.5 0a3 3 0 01-.967 2.25M15 12a3 3 0 01-6 0m6 0a3 3 0 00-6 0m6 0a3 3 0 01-6 0m6 0a3 3 0 00-6 0"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Completely Free</h3>
              <p className="text-gray-700">
                Create unlimited resumes without any hidden charges or premium subscriptions.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="bg-red-500 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 000-2H6V3a1 1 0 01-1-1zM3 5a2 2 0 114 0 2 2 0 01-4 0zm2 8a1 1 0 110-2 1 1 0 010 2zm9.773-5.773a1 1 0 011.414 0l3.85 3.85a1 1 0 010 1.415l-3.85 3.85a1 1 0 01-1.414-1.415L15.586 10l-2.828-2.828a1 1 0 010-1.415zm2.827 9.414a1 1 0 110-2 1 1 0 010 2zM5 12a2 2 0 114 0 2 2 0 01-4 0z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quick & Easy</h3>
              <p className="text-gray-700">
                Create a professional resume in just a few minutes with our intuitive interface.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="px-12 mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Three simple steps to your perfect resume
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg h-full">
                <div className="bg-gradient-to-r from-green-400 to-green-500 rounded-full w-16 h-16 flex items-center justify-center mb-6 text-white text-2xl font-bold shadow-lg">
                  1
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Fill Your Details</h3>
                <p className="text-gray-700">
                  Enter your personal information, education, experience, and skills into our user-friendly form.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 right-0 w-8 h-1 bg-gradient-to-r from-green-400 to-transparent transform translate-x-1/2"></div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg h-full">
                <div className="bg-gradient-to-r from-purple-400 to-purple-500 rounded-full w-16 h-16 flex items-center justify-center mb-6 text-white text-2xl font-bold shadow-lg">
                  2
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Choose & Customize</h3>
                <p className="text-gray-700">
                  Pick a template that matches your style and customize colors, fonts, and layout to your preference.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 right-0 w-8 h-1 bg-gradient-to-r from-purple-400 to-transparent transform translate-x-1/2"></div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg h-full">
                <div className="bg-gradient-to-r from-blue-400 to-blue-500 rounded-full w-16 h-16 flex items-center justify-center mb-6 text-white text-2xl font-bold shadow-lg">
                  3
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Download & Share</h3>
                <p className="text-gray-700">
                  Download your resume as PDF and share it with employers, or keep it saved for future use.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-400 to-purple-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
        <div className="px-12 mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Build Your Perfect Resume?
          </h2>
          <p className="text-xl text-white mb-8 opacity-90">
            Join thousands of job seekers who've created stunning resumes with our AI-powered builder.
          </p>
          <button
            onClick={hadnleGetStartedClick}
            className="inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-green-500 bg-white rounded-xl hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            Get Started Now
            <svg
              className="w-5 h-5 ml-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </section>
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white" aria-labelledby="footer-heading">
        <div className="mt-16 border-t border-gray-700 pt-8 sm:mt-20 lg:mt-24 p-5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm leading-5 text-gray-400">
            &copy; 2024 Ai-Resume-Builder. All rights reserved.
          </p>
          <div>
            <Button 
              onClick={handleClick}
              className="bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <FaGithub className="w-4 h-4 mr-2" />
              GitHub
            </Button>
          </div>
        </div>
      </footer>
    </>
  );
}

export default HomePage;
