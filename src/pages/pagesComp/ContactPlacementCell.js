import React from 'react'
import { Mail, Phone } from 'lucide-react'

const ContactPlacementCell = () => {
    return (
        <div className="px-2 rounded-xl text-black">
            <h1 className="text-4xl font-novaReg mb-8 max-md:text-3xl max-sm:text-2xl max-md:mb-6 max-sm:mb-4">Contact Information of Placement Cell</h1>
            <div className="grid md:grid-cols-2 gap-10 max-lg:gap-8 max-md:gap-6 max-sm:gap-4">
                <div className="space-y-6 max-md:space-y-4 max-sm:space-y-3">
                    <h2 className="text-2xl font-novaReg max-md:text-xl max-sm:text-lg">Dr. Rakesh Srivastava</h2>
                    <p className="text-base font-novaReg max-sm:text-sm">Dean - Training & Placement</p>
                    <div className="flex items-center space-x-3">
                        <Mail className="w-6 h-6" />
                        <a
                            href="mailto:tpo@akgec.ac.in"
                            className="cursor-pointer font-novaBold"
                            aria-label="Email to TPO"
                        >
                            tpo@akgec.ac.in
                        </a>
                    </div>
                    <div className="flex items-center space-x-3">
                        <Phone className="w-6 h-6" />
                        <a
                            href="tel:+91-7290034978"
                            className="cursor-pointer font-novaBold"
                            aria-label="Call Dr. Rakesh Srivastava"
                        >
                            +91-7290034978
                        </a>
                    </div>
                </div>
                <div className="max-sm:pb-6 space-y-6 max-md:space-y-5 max-sm:space-y-4">
                    <h2 className="text-2xl font-novaReg max-md:text-xl max-sm:text-lg">Dr. Hemant Ahuja</h2>
                    <p className="text-base font-novaReg max-sm:text-sm">Joint Director AKGU, Training and Placement Department</p>
                    <div className="flex flex-col space-y-2">
                        <div className="flex items-center space-x-3">
                            <Mail className="w-6 h-6" />
                            <a
                                href="mailto:info@akgec.ac.in"
                                className="cursor-pointer font-novaBold"
                                aria-label="Email AKGEU Placement"
                            >
                                info@akgec.ac.in
                            </a>
                        </div>
                        <div className="flex items-center space-x-3">
                            <Mail className="w-6 h-6" />
                            <a
                                href="mailto:tpo@akgec.ac.in"
                                className="cursor-pointer font-novaBold"
                                aria-label="Email to TPO"
                            >
                                tpo@akgec.ac.in
                            </a>
                        </div>
                    </div>
                    <div className="flex items-center space-x-3">
                        <Phone className="w-6 h-6" />
                        <a
                            href="tel:1800-200-0777"
                            className="cursor-pointer font-novaBold"
                            aria-label="Call Dr. Hemant Ahuja"
                        >
                            1800-200-0777
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactPlacementCell