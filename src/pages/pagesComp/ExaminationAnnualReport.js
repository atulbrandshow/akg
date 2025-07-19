import { FileText } from "lucide-react";

const ExaminationAnnualReport = () => {
    return (
        <>
            <div className="bg-[#eaf1ff] pl-3 shadow-[rgba(13,_38,_76,_0.19)_0px_0px_10px] rounded-lg">
                <div className="mb-9 p-5 max-sm:p-1">
                    <h2 className="text-3xl max-sm:text-2xl font-novaSemi mb-2">Examination Annual Report</h2>
                    <ul className="list-none w-fit">
                        <li className="mb-5 pl-2">
                            <a href="#" className="flex items-center text-primary hover:text-[#00bfe7] transition-colors duration-200">
                                <FileText className="w-4 h-4 mr-2" />
                                Download Annual Report
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default ExaminationAnnualReport;
