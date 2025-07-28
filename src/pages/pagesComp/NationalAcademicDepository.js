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
            <div className="p-5 mb-2 rounded-lg max-sm:p-2 bg-white">
                <h1 className="text-4xl max-lg:text-3xl max-md:text-2xl max-sm:font-novaSemi font-novaReg mb-4">National Academic Depository</h1>
                <p className="mb-4 text-sm">
                    Embracing digital advancements has become essential in today's world. At AKG University, we are committed to ensuring digital trust and efficiency in degree verification. We have partnered with validateMe.online - a digital vault powered by blockchain technology, to create, issue, and validate documents instantly.
                </p>
                <div className="p-6 rounded-lg mb-4 bg-[#f0f9fe]">
                    <h2 className="text-lg max-sm:text-sm font-novaSemi mb-4">Verify documents associated with AKG University in no time!</h2>
                    <button className="text-blue-500 max-sm:text-sm flex items-center">
                        Need Help?
                        <HelpCircle className="w-4 h-4 ml-1" />
                    </button>
                    <div
                        className="border-2 border-dashed border-gray-300 rounded-lg p-8 my-5 text-center cursor-pointer"
                        onClick={handleCloudUploadClick}
                    >
                        <div className="flex flex-col items-center">
                            <CloudUpload
                                className="w-12 h-12 text-blue-500 mx-auto mb-4"
                            />
                            <input
                                type="file"
                                ref={fileInputRef}
                                className="hidden"
                                onChange={(e) => {
                                    const file = e.target.files[0];
                                }}
                            />
                            <p className="text-gray-600 mb-2">
                                Drag and drop here or <span className="text-blue-500">choose a file</span> to
                            </p>
                            <p className="text-gray-600">verify the document's authenticity!</p>
                        </div>
                    </div>
                    <div className="text-right text-xs text-gray-500 mt-2">Powered by itscredible</div>
                </div>
                <p className="text-sm mb-4">
                    OR <a href="#" className="text-blue-500">Click here to view verification link</a>
                </p>
                <p className="text-sm">
                    For verification of degrees/marks, please send your email to <a href="mailto:info@akgec.ac.in" className="text-blue-500">info@akgec.ac.in</a>
                </p>
            </div>
        </>
    );
};

export default NationalAcademicDepository;
