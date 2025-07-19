"use client";

const EnvelopeIcon = () => (
    <svg className="w-12 h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
)

const PencilIcon = () => (
    <svg className="w-12 h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
    </svg>
)

const PhoneIcon = () => (
    <svg className="w-12 h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
)

const EducationalVerification = () => {

    return (
        <div className="">
            <p className="text-lg text-center font-novaReg mt-5">Please visit Services link on home page of the University website (www.aktu.ac.in) for verification of educational details of our students.</p>
            <p className="text-lg text-center font-novaReg mb-4">In case of any problem or inordinate delay in response from University, the following guidelines should be followed:</p>

            <div className="flex justify-center p-4">
                <div className="w-full">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="shadow-[rgba(13,_38,_76,_0.19)_0px_0px_10px] rounded-lg p-6 flex flex-col items-center text-center">
                            <EnvelopeIcon />
                            <p className="mt-4 font-novaReg text-gray-600">
                                Please mail the final year marksheet and / or degree certificate of the concerned student(s) along with request for verification at following e-mail id:
                            </p>
                            <a href="mailto:registrar@akgec.ac.in" className="mt-2 text-secondary hover:underline">
                                registrar@akgec.ac.in
                            </a>
                        </div>

                        <div className="shadow-[rgba(13,_38,_76,_0.19)_0px_0px_10px] rounded-lg  p-6 flex flex-col items-center text-center">
                            <PencilIcon />
                            <p className="mt-4 font-novaReg text-gray-600">
                                You will be replied through e-mail within three working days of the College.
                            </p>
                        </div>

                        <div className="shadow-[rgba(13,_38,_76,_0.19)_0px_0px_10px] rounded-lg  p-6 flex flex-col items-center text-center">
                            <PhoneIcon />
                            <p className="mt-4 font-novaReg text-gray-600">
                                In case of non-reply from the College within stipulated time frame, please inform to Dr. Shraddha Dixit, Registrar at her mobile no. 9818391726 between 10 am to 4 pm except on Saturdays, Sundays and public holidays.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EducationalVerification;
