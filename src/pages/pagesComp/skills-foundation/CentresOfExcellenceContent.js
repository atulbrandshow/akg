import { Cpu, Settings, Zap, Beaker } from 'lucide-react';

const coes = [
  { title: "KUKA Industrial Robotics Training Centre", icon: <Cpu size={24} />, color: "from-blue-600 to-cyan-500" },
  { title: "FRONIUS Advance Welding Technology & Research Centre", icon: <Zap size={24} />, color: "from-orange-600 to-yellow-500" },
  { title: "SIEMENS Advance Manufacturing Centre", icon: <Settings size={24} />, color: "from-indigo-600 to-purple-500" },
  { title: "NI LabVIEW Academy", icon: <Beaker size={24} />, color: "from-green-600 to-emerald-500" },
  { title: "BOSCH Rexroth Centre of Competence in Automation Technologies", icon: <Settings size={24} />, color: "from-red-600 to-rose-500" },
  { title: "AIA Centre for Integrated Automation", icon: <Cpu size={24} />, color: "from-indigo-900 to-blue-800" },
  { title: "SIEMENS PLM Centre of Excellence", icon: <Settings size={24} />, color: "from-sky-600 to-blue-500" },
  { title: "MITSUBISHI Authorised Training Centre", icon: <Zap size={24} />, color: "from-red-700 to-orange-600" },
  { title: "FAB LAB Centre of Digital Manufacturing", icon: <Cpu size={24} />, color: "from-slate-700 to-slate-500" },
  { title: "BOSCH Joint Certification Centre", icon: <Settings size={24} />, color: "from-red-500 to-pink-500" },
  { title: "ZEISS Calibration & Testing Centre", icon: <Beaker size={24} />, color: "from-blue-800 to-indigo-700" },
  { title: "SIEMENS Centre of Excellence in Automation", icon: <Settings size={24} />, color: "from-cyan-600 to-blue-600" },
  { title: "JANATICS Industrial Pneumatic Knowledge Centre", icon: <Zap size={24} />, color: "from-blue-500 to-sky-400" },
  { title: "DGCA Certified Remote Pilot Training Drone Academy", icon: <Cpu size={24} />, color: "from-indigo-800 to-purple-800" },
];

export default function CentresOfExcellenceContent() {
  return (
    <div className="">
      <h2 className="text-3xl font-novaBold text-indigo-950 mb-8 border-b pb-4">Centres of Excellence</h2>
      <p className="text-gray-600 mb-8 font-novaReg">Under the ASF umbrella, the following 14 Centres of Excellence (COEs) are operational, providing state-of-the-art training and research facilities in collaboration with eminent industry partners:</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {coes.slice(0, 14).map((coe, index) => (
          <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-indigo-50 border border-indigo-100 hover:border-secondary transition-colors group">
            <div className="w-8 h-8 rounded-full bg-indigo-900 text-white flex items-center justify-center flex-shrink-0 font-novaBold text-sm group-hover:bg-secondary">{index + 1}</div>
            <span className="text-indigo-900 font-novaBold group-hover:text-secondary transition-colors">{coe.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
