"use client"

import { useState, useEffect, useRef } from "react"
import { Check } from 'lucide-react'

export default function HowToApply() {
    const [currentStep, setCurrentStep] = useState(1);
    const timerRef = useRef(null)
    const componentRef = useRef(null)

    const steps = [
        {
          number: 1,
          title: "Registration",
          description: "Register for your desired program at AKG University by providing basic details such as Name, Email ID, Mobile No., State, Gender, and Password. Your Email ID will serve as your Username, and you will set your own password during registration.",
          subText: "Once registered, you'll receive a confirmation message on your registered email and mobile number. Use your Username and Password to log into your AKG University account."
        },
        {
          number: 2,
          title: "Program Application",
          subtitle: "(Eligibility & Admission Form)",
          description: "After completing your registration, log into your AKG University account and select your desired program. Fill out the admission form and provide the required documents. Complete your application and submit it for review."
        },
        {
          number: 3,
          title: "Admission Confirmation",
          description: "Upon successful review of your application and documents, you will receive your admission confirmation. Based on the eligibility and merit, you may also be eligible for scholarships offered by AKG University."
        }
      ]
      

    const startTimer = () => {
        if (timerRef.current) clearInterval(timerRef.current)
        timerRef.current = setInterval(() => {
            setCurrentStep((prevStep) => (prevStep % 3) + 1)
        }, 4000)
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
            component.addEventListener('mouseenter', stopTimer)
            component.addEventListener('mouseleave', startTimer)
            return () => {
                component.removeEventListener('mouseenter', stopTimer)
                component.removeEventListener('mouseleave', startTimer)
            }
        }
    }, [])

    return (
        <div ref={componentRef} className="py-12 max-lg:py-0">
            <h2 className="text-3xl font-novaReg text-center mb-16">How to Apply?</h2>

            <div className="relative">
                {/* Progress Line */}
                <div className="absolute top-5 left-0 right-0 h-[1px] bg-gray-200" />

                {/* Steps */}
                <div className="relative flex justify-between mb-16">
                    {steps.map((step) => (
                        <div
                            key={step.number}
                            className="flex flex-col items-center cursor-pointer"
                            onClick={() => setCurrentStep(step.number)}
                        >
                            <div
                                className={`w-10 h-10 rounded-full flex items-center justify-center border-2 z-10 mb-4 ${step.number === currentStep
                                    ? "bg-[#1a237e] border-[#1a237e] text-white"
                                    : "bg-gray-200 border-gray-200"
                                    }`}
                            >
                                {step.number === currentStep ? (
                                    <Check className="w-5 h-5" />
                                ) : (
                                    <Check className="w-5 h-5 text-gray-400" />
                                )}
                            </div>

                            <div className="text-center">
                                <p className="text-sm font-novaReg text-gray-600 mb-1">Step {step.number}</p>
                                <h3 className="font-novaSemi mb-1">{step.title}</h3>
                                {step.subtitle && (
                                    <p className="text-xs font-novaReg">{step.subtitle}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {steps.map((step) => (
                    <div
                        key={step.number}
                        className={step.number === currentStep ? "block" : "hidden"}
                    >
                        <h3 className="text-xl font-novaSemi mb-4">Step {step.number} - {step.title}</h3>
                        <p className="text-gray-800 font-novaReg mb-4">{step.description}</p>
                        {step.subText && (
                            <p className="text-gray-700 font-novaReg">{step.subText}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

