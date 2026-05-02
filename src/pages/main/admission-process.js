import Header from "@/Components/Header";
import Link from "next/link";

const StepCard = ({ number, title, children }) => (
  <div className="relative pl-16 pb-12 last:pb-0">
    {/* Connector Line */}
    <div className="absolute left-[31px] top-12 bottom-0 w-1 bg-gray-200 last:hidden"></div>
    
    {/* Step Number Circle */}
    <div className="absolute left-0 top-0 w-16 h-16 bg-[#3c5686] rounded-full flex items-center justify-center text-white border-4 border-white shadow-lg z-10">
      <span className="text-2xl font-novaBold">{number}</span>
    </div>

    <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-[#fecc00] hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      <h3 className="text-2xl font-novaBold text-[#3c5686] mb-6 flex items-center gap-3 uppercase tracking-wide">
        Step {number}: {title}
      </h3>
      <div className="space-y-4 text-gray-700 leading-relaxed font-novaReg">
        {children}
      </div>
    </div>
  </div>
);

export const Home = () => {
    return (
        <>
            <div className="bg-[#f8fafc] min-h-screen pb-20">
                <Header
                    title={<span className="leading-[45px] flex">Admission Flow</span>}
                    bgKey="BG11"
                    gradient={"bg-gradient-to-r from-black to-white/"}
                />

                <div className="max-w-[1200px] mx-auto px-6 mt-16">
                    {/* Introduction */}
                    <div className="text-center mb-16 max-w-4xl mx-auto">
                        <h2 className="text-4xl font-novaBold text-[#3c5686] mb-6 underline underline-offset-8 decoration-[#fecc00]">ADMISSION FLOW</h2>
                        <p className="text-xl text-gray-600 font-novaReg leading-relaxed">
                            Ajay Kumar Garg University invites applications for Undergraduate, Postgraduate, and Doctoral programs across multiple disciplines. Admission is granted strictly based on <strong className="text-[#3c5686]">merit, eligibility criteria, and entrance performance</strong> (if applicable).
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        {/* Step 1 */}
                        <StepCard number="1" title="Check Eligibility">
                            <p className="font-novaBold text-lg text-black mb-2">Before Applying:</p>
                            <ul className="list-disc ml-6 space-y-2">
                                <li>Review eligibility criteria for your desired program <Link href="/admissions/admission-criteria" className="text-[#3c5686] font-novaBold hover:underline">Check Details</Link></li>
                                <li>Check course-wise fee structure and requirements <Link href="/admissions/course-fee" className="text-[#3c5686] font-novaBold hover:underline">Click Here</Link></li>
                                <li>Ensure minimum academic qualifications are met</li>
                            </ul>
                            <div className="mt-4 p-3 bg-red-50 border-l-4 border-red-500 text-sm italic">
                                <strong>Note:</strong> Only candidates fulfilling eligibility criteria will be considered for admission.
                            </div>
                        </StepCard>

                        {/* Step 2 */}
                        <StepCard number="2" title="Registration & Application">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <p className="font-novaBold text-black mb-2">How to Apply:</p>
                                    <ul className="list-disc ml-6 space-y-1">
                                        <li><strong>Online:</strong> Visit official admission portal <Link href="/admissions" className="text-[#3c5686] font-novaBold hover:underline">Click Here</Link></li>
                                        <li><strong>Offline:</strong> Visit University Admission Office</li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="font-novaBold text-black mb-2">Process:</p>
                                    <ol className="list-decimal ml-6 space-y-1">
                                        <li>Fill basic registration form</li>
                                        <li>Verify email through OTP/link</li>
                                        <li>Complete full application form:
                                            <ul className="list-[circle] ml-6 text-sm mt-1">
                                                <li>Academic details</li>
                                                <li>Course & branch preference</li>
                                                <li>Personal & parent details</li>
                                            </ul>
                                        </li>
                                        <li>Pay <strong>Registration Fee ₹500</strong> (non-refundable)</li>
                                    </ol>
                                </div>
                            </div>
                            <div className="mt-4 p-3 bg-[#fcefb5] border-l-4 border-[#fecc00] text-sm italic text-black">
                                <strong>Note:</strong> Application is considered complete only after successful fee payment.
                            </div>
                        </StepCard>

                        {/* Step 3 */}
                        <StepCard number="3" title="Application Verification">
                            <ul className="list-disc ml-6 space-y-2">
                                <li>Admission Counselor verifies submitted details</li>
                                <li>Documents and information are reviewed</li>
                            </ul>
                            <div className="grid md:grid-cols-2 gap-6 mt-4">
                                <div className="p-4 bg-orange-50 rounded-xl border border-orange-200">
                                    <p className="font-novaBold text-orange-700 mb-2">If discrepancy found:</p>
                                    <p className="text-sm">Candidate is notified and required corrections must be submitted.</p>
                                </div>
                                <div className="p-4 bg-green-50 rounded-xl border border-green-200">
                                    <p className="font-novaBold text-green-700 mb-2">If verified:</p>
                                    <p className="text-sm">Application status updated to <strong className="uppercase">"Verified"</strong></p>
                                </div>
                            </div>
                        </StepCard>

                        {/* Step 4 */}
                        <StepCard number="4" title="Selection Process">
                            <div className="space-y-6">
                                <div className="border-b pb-4">
                                    <p className="font-novaBold text-black text-lg mb-3">Direct Admission (Eligible Candidates)</p>
                                    <ul className="list-disc ml-6">
                                        <li>Candidate receives <strong>Pre-Admission Offer Letter</strong></li>
                                        <li>Branch is allotted based on merit & preference</li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="font-novaBold text-black text-lg mb-3">Entrance-Based Admission (If Not Eligible)</p>
                                    <ul className="list-disc ml-6">
                                        <li>Candidates must appear for <strong>University Entrance Exam</strong></li>
                                        <li><strong>If Qualified:</strong> Pre-admission offer issued</li>
                                        <li><strong>If Not Qualified:</strong> Not Eligible for the Admission</li>
                                    </ul>
                                </div>
                            </div>
                        </StepCard>

                        {/* Step 5 */}
                        <StepCard number="5" title="Seat Confirmation">
                            <ul className="list-disc ml-6 space-y-3">
                                <li className="text-lg">Pay <strong>Seat Booking / Registration Amount</strong></li>
                                <li className="text-lg">Confirm allotted branch</li>
                            </ul>
                            <div className="mt-6 p-4 bg-red-50 border-l-4 border-red-500 text-[#3c5686] font-novaSemi italic">
                                *Note: Failure to pay within deadline may lead to seat cancellation.
                            </div>
                        </StepCard>

                        {/* Step 6 */}
                        <StepCard number="6" title="Provisional Admission Letter">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <ul className="list-disc ml-6 space-y-2">
                                        <li>Issued after <strong>Seat Booking / Registration Amount</strong> payment</li>
                                        <li>Valid for <strong>15 days</strong></li>
                                        <li>Candidate must complete further formalities within validity period</li>
                                        <li>Candidate must physically report to campus for verification</li>
                                    </ul>
                                </div>
                                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                    <p className="font-novaBold text-[#3c5686] mb-3 uppercase text-sm tracking-widest">Mandatory Documents:</p>
                                    <ul className="text-sm space-y-1.5 grid grid-cols-1 gap-1">
                                        <li>• 10th & 12th Marksheet/Certificates</li>
                                        <li>• Aadhaar Card</li>
                                        <li>• Transfer/Migration Certificate</li>
                                        <li>• Character Certificate</li>
                                        <li>• Passport Size Photographs</li>
                                        <li>• Medical Fitness Certificate</li>
                                        <li>• Admission Offer Letter</li>
                                    </ul>
                                    <p className="font-novaBold text-[#3c5686] mt-4 mb-2 uppercase text-xs tracking-widest">Additional (if applicable):</p>
                                    <ul className="text-xs space-y-1 text-gray-500">
                                        <li>• Graduation/PG Marksheets</li>
                                        <li>• Entrance Exam Scorecard</li>
                                        <li>• Category Certificate (SC/ST/OBC)</li>
                                        <li>• Gap Certificate</li>
                                    </ul>
                                </div>
                            </div>
                        </StepCard>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;
