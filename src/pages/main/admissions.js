import Header from '@/Components/Header';
import Admissions from '../pagesComp/Admissions';
import { useState } from 'react';

const Button = {
  name: "Apply Now",
  Link: "",
};

export default function Home() {
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleApplyNow = (programType) => {
    setSelectedProgram(programType);
    setShowForm(true);
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const getProgramCourses = () => {
    switch(selectedProgram) {
      case 'undergraduate':
        return ['Bachelor of Technology', 'Bachelor of Business Administration', 'Bachelor of Computer Application'];
      case 'postgraduate':
        return ['Master of Business Administration', 'Master of Technology', 'Master of Computer Applications'];
      case 'doctoral':
        return ['Ph.D. in Engineering', 'Ph.D. in Management', 'Ph.D. in Computer Applications', 'Interdisciplinary Research'];
      default:
        return [];
    }
  };

  return (
    <>
    

      <Header 
        Button={Button} 
        position='center' 
        title={<span className="text-4xl md:text-5xl lg:text-6xl pt-20">Discover First<br />Decide Later</span>} 
        subHeading={<>Turning Dreams into Reality With <strong> Special Scholarship Program at AKG University</strong></>} 
        gradient={"bg-gradient-to-r from-black to-black/20"} 
        bgKey='BG1'
        courses={getProgramCourses()}
          programType={selectedProgram}
          onClose={() => setShowForm(false)}
           buttonType="form"
            buttonText="Apply Now"
            formKey="applyNow"
      />
      
      <Admissions onApplyNow={handleApplyNow} />
    </>
  );
}