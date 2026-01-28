"use client";

import { CloudUpload, HelpCircle } from "lucide-react";
import { useRef } from "react";

const NationalAcademicDepository = () => {
    const fileInputRef = useRef(null);

    const handleCloudUploadClick = () => {
        fileInputRef.current.click();
    };

    return (
        <>
            <div className="p-8 mb-2 rounded-2xl max-sm:p-4 bg-white shadow-md border border-gray-100">
                <h1 className="text-4xl max-lg:text-3xl max-md:text-2xl font-novaBold text-brand-blue mb-6">National Academic Depository</h1>
                <p className="mb-6 text-gray-700 leading-relaxed text-lg">
                    Embracing digital advancements has become essential in today's world. At AKG University, we are committed to ensuring digital trust and efficiency in degree verification. We have partnered with validateMe.online - a digital vault powered by blockchain technology, to create, issue, and validate documents instantly.
                </p>
                <div className="p-8 rounded-2xl mb-6 bg-blue-50/50 border border-blue-100">
                    <h2 className="text-2xl max-sm:text-xl font-novaSemi text-gray-800 mb-4">Verify documents associated with AKG University in no time!</h2>
                    <button className="text-brand-blue hover:text-blue-800 font-novaSemi text-base max-sm:text-sm flex items-center transition-colors">
                        Need Help?
                        <HelpCircle className="w-5 h-5 ml-2" />
                    </button>
                    <div
                        className="border-2 border-dashed border-blue-200 bg-white rounded-2xl p-12 my-6 text-center cursor-pointer hover:border-brand-blue transition-all group"
                        onClick={handleCloudUploadClick}
                    >
                        <div className="flex flex-col items-center">
                            <CloudUpload
                                className="w-16 h-16 text-brand-blue mx-auto mb-4 group-hover:scale-110 transition-transform"
                            />
                            <input
                                type="file"
                                ref={fileInputRef}
                                className="hidden"
                                onChange={(e) => {
                                    const file = e.target.files[0];
                                }}
                            />
                            <p className="text-gray-600 mb-2 text-xl">
                                Drag and drop here or <span className="text-brand-blue font-novaSemi">choose a file</span> to
                            </p>
                            <p className="text-gray-600 text-xl">verify the document's authenticity!</p>
                        </div>
                    </div>
                    <div className="text-right text-xs text-gray-400 mt-2 italic">Powered by itscredible</div>
                </div>
                <div className="space-y-4 text-lg">
                    <p className="text-gray-700">
                        OR <a href="#" className="text-brand-blue font-novaSemi hover:underline underline-offset-4">Click here to view verification link</a>
                    </p>
                    <p className="text-gray-700">
                        For verification of degrees/marks, please send your email to <a href="mailto:info@akgec.ac.in" className="text-brand-blue font-novaSemi hover:underline underline-offset-4">info@akgec.ac.in</a>
                    </p>
                </div>
            </div>
        </>
    );
};

export default NationalAcademicDepository;
