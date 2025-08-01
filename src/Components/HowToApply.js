"use client"
import { useState, useEffect, useRef } from "react"
import { Check, MoveRight, GraduationCap, FileText, Award } from "lucide-react"

export default function HowToApply() {
  const [currentStep, setCurrentStep] = useState(1)
  const timerRef = useRef(null)
  const componentRef = useRef(null)

  const steps = [
    {
      number: 1,
      title: "Registration",
      icon: <GraduationCap className="w-6 h-6" />,
      description:
        "Register for your desired program at AKG University by providing basic details such as Name, Email ID, Mobile No., State, Gender, and Password. Your Email ID will serve as your Username, and you will set your own password during registration.",
      subText:
        "Once registered, you'll receive a confirmation message on your registered email and mobile number. Use your Username and Password to log into your AKG University account.",
      color: "from-blue-600 to-indigo-700",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      number: 2,
      title: "Program Application",
      subtitle: "(Eligibility & Admission Form)",
      icon: <FileText className="w-6 h-6" />,
      description:
        "After completing your registration, log into your AKG University account and select your desired program. Fill out the admission form and provide the required documents. Complete your application and submit it for review.",
      color: "from-purple-600 to-violet-700",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
    {
      number: 3,
      title: "Admission Confirmation",
      icon: <Award className="w-6 h-6" />,
      description:
        "Upon successful review of your application and documents, you will receive your admission confirmation. Based on the eligibility and merit, you may also be eligible for scholarships offered by AKG University.",
      color: "from-emerald-600 to-teal-700",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
    },
  ]

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setCurrentStep((prevStep) => (prevStep % 3) + 1)
    }, 5000)
  }

  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
  }

  useEffect(() => {
    startTimer()
    return () => stopTimer()
  }, [])

  useEffect(() => {
    const component = componentRef.current
    if (component) {
      component.addEventListener("mouseenter", stopTimer)
      component.addEventListener("mouseleave", startTimer)
      return () => {
        component.removeEventListener("mouseenter", stopTimer)
        component.removeEventListener("mouseleave", startTimer)
      }
    }
  }, [])

  return (
    <div className="max-w-[1400px] mx-auto px-2 sm:px-6 py-16 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Section - Steps */}
        <div className="lg:col-span-7">
          <div ref={componentRef} className="space-y-8">
            {/* Header */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm font-novaSemi mb-4">
                <GraduationCap className="w-4 h-4 mr-2" />
                Application Process
              </div>
              <h2 className="text-4xl lg:text-5xl font-novaBold text-gray-900 mb-4">
                How to{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Apply?
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl font-novaReg">
                Follow these simple steps to begin your academic journey with us
              </p>
            </div>

            {/* Steps Navigation */}
            <div className="relative">
              {/* Progress Line */}
              <div className="absolute top-8 left-8 right-8 h-0.5 bg-gray-200 hidden md:block" />
              <div
                className="absolute top-8 left-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-1000 ease-in-out hidden md:block"
                style={{ width: `${((currentStep - 1) / 2) * 100}%`, maxWidth: "calc(100% - 6rem)" }}
              />

              {/* Step Indicators */}
              <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 relative z-10">
                {steps.map((step, index) => (
                  <div
                    key={step.number}
                    className={`flex items-center md:flex-col cursor-pointer transition-all duration-300`}
                    onClick={() => setCurrentStep(step.number)}
                  >
                    <div className="flex items-center md:flex-col">
                      <div
                        className={`h-12 w-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-lg ${step.number === currentStep
                          ? `bg-gradient-to-br ${step.color} text-white shadow-xl`
                          : step.number < currentStep
                            ? "bg-gradient-to-br from-green-500 to-emerald-600 text-white"
                            : "bg-white border-2 border-gray-200 text-gray-400"
                          }`}
                      >
                        {step.number < currentStep ? (
                          <Check className="w-5 h-5 sm:w-7 sm:h-7" />
                        ) : step.number === currentStep ? (
                          step.icon
                        ) : (
                          <span className="text-xl font-novaBold">{step.number}</span>
                        )}
                      </div>
                      <div className="ml-4 md:ml-0 md:mt-4 text-left md:text-center">
                        <p className="text-sm font-novaReg text-gray-500 mb-1">Step {step.number}</p>
                        <h3
                          className={`font-novaBold text-lg ${step.number === currentStep ? "text-gray-900" : "text-gray-600"
                            }`}
                        >
                          {step.title}
                        </h3>
                        {step.subtitle && <p className="text-xs text-gray-500 mt-1">{step.subtitle}</p>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Step Content */}
            <div className="mt-12">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className={`transition-all duration-500 ${step.number === currentStep
                    ? "opacity-100 transform translate-y-0"
                    : "opacity-0 transform translate-y-4 absolute"
                    }`}
                >
                  <div className={`rounded-3xl p-4 sm:p-8 ${step.bgColor} border ${step.borderColor} shadow-sm`}>
                    <div className="flex flex-col items-start">
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-lg`}
                        >
                          {step.icon}
                        </div>
                        <h3 className="text-xl md:text-2xl font-novaBold text-gray-900">
                          Step {step.number} - {step.title}
                        </h3>
                      </div>
                      <div className="mt-5">
                        <p className="text-gray-700 text-lg leading-relaxed mb-4 font-novaReg">{step.description}</p>
                        {step.subText && (
                          <div className="bg-white/70 rounded-xl p-4 border border-white/50">
                            <p className="text-gray-600 font-novaReg leading-relaxed">{step.subText}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section - CTA */}
        <div className="lg:col-span-5">
          <div className="relative">
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 rounded-3xl transform rotate-3 opacity-10"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-800 rounded-3xl transform -rotate-3 opacity-10"></div>

            {/* Main Content */}
            <div className="relative bg-white rounded-3xl p-8 lg:p-10 shadow-2xl border border-gray-100">
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-orange-100 to-red-100 text-orange-800 text-sm font-novaSemi mb-6">
                  <Award className="w-4 h-4 mr-2" />
                  Start Your Journey
                </div>

                <h2 className="text-3xl lg:text-4xl font-novaBold text-gray-900 mb-6 leading-tight">
                  Ready to Master Your
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                    {" "}
                    Professional Field?
                  </span>
                </h2>

                <p className="text-lg text-gray-600 mb-8 leading-relaxed font-novaReg">
                  Stay Confident and Prepare to Dominate Your Studies. According to the U.S. Bureau of Labor Statistics,
                  total employment is expected to increase by 165.4 million by 2030, resulting in an addition of 11.9
                  million new jobs.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
                    <div className="text-2xl font-novaBold text-blue-600">165.4M</div>
                    <div className="text-sm text-gray-600 font-novaReg">Expected Employment</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-100">
                    <div className="text-2xl font-novaBold text-green-600">11.9M</div>
                    <div className="text-sm text-gray-600 font-novaReg">New Jobs by 2030</div>
                  </div>
                </div>

                <button className="group relative w-full lg:w-auto inline-flex items-center justify-center px-8 py-4 text-lg font-novaBold text-white bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative flex items-center space-x-2">
                    <span>Apply Today</span>
                    <MoveRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>

                <p className="text-sm text-gray-500 mt-4 font-novaReg">🎓 Join thousands of successful graduates</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
