import React from "react";
import { TrendingUp, PieChart, BarChart3 } from "lucide-react";

const SkillsVisionMission = () => {
  return (
    <div className="min-h-screen bg-white p-6">
      <div className="w-full max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="w-20 h-1 bg-red-500 mb-3"></div>
          <h1 className="text-4xl font-bold">
            <span className="text-gray-500">VISION & </span>
            <span className="text-red-500">MISSION STATEMENT</span>
          </h1>
        </div>

        {/* Main Content */}
        <div className="relative h-[400px] scale-90 origin-top">
          {/* Vision Hexagon - Top Left */}
          <div className="absolute left-56 top-0">
            <div className="relative">
              {/* Percentage Badge */}
              <div
                className="absolute top-2 left-1/2 -translate-x-1/2 bg-white rounded-md shadow-2xl drop-shadow-lg px-5 py-3 flex items-center gap-3 z-20"
                style={{
                  boxShadow:
                    "0 -5px 15px rgba(0,0,0,0.1), 0 10px 25px rgba(0,0,0,0.15), 0 4px 10px rgba(0,0,0,0.1)",
                }}
              >
                <PieChart className="w-8 h-7 text-red-500 fill-red-500" />
                <span className="text-2xl text-gray-700">76%</span>
              </div>

              {/* Hexagon */}
              <div
                className="relative"
                style={{
                  filter: "drop-shadow(0 8px 15px rgba(244, 67, 54, 0.3))",
                }}
              >
                <svg width="340" height="340" viewBox="0 0 240 240">
                  <defs>
                    <pattern
                      id="vision-bg"
                      patternUnits="userSpaceOnUse"
                      width="240"
                      height="240"
                    >
                      <rect
                        width="240"
                        height="240"
                        fill="#F44336"
                        opacity="0.1"
                      />
                      <circle
                        cx="60"
                        cy="60"
                        r="2"
                        fill="white"
                        opacity="0.3"
                      />
                      <circle
                        cx="120"
                        cy="80"
                        r="1.5"
                        fill="white"
                        opacity="0.2"
                      />
                      <circle
                        cx="180"
                        cy="120"
                        r="2"
                        fill="white"
                        opacity="0.3"
                      />
                    </pattern>
                  </defs>
                  <polygon
                    points="60,15 180,15 240,120 180,225 60,225 0,120"
                    fill="#F44336"
                  />
                  <polygon
                    points="60,15 180,15 240,120 180,225 60,225 0,120"
                    fill="url(#vision-bg)"
                  />
                </svg>
                {/* Background Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-30">
                  <img
                    src="/image/icons/icon-blobal-exposure.png"
                    alt="Vision"
                    className="w-52 h-52"
                    style={{
                      filter: "brightness(0) saturate(100%) invert(100%)",
                      opacity: "0.4",
                    }}
                  />
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center px-10 text-center text-white">
                  <h3 className="text-2xl mb-4 tracking-[0.2em] font-light">
                    VISION
                  </h3>
                  <p className="text-xs leading-relaxed font-light">
                    To be a leading center of excellence in skill development and industrial consultancy, empowering the workforce with cutting-edge technologies and fostering innovation for national growth.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mission Hexagon - Center */}
          <div className="absolute right-36 -translate-x-1/2 top-40">
            <div className="relative">
              {/* Percentage Badge */}
              <div
                className="absolute top-2 left-1/2 -translate-x-1/2 bg-white rounded-md shadow-2xl drop-shadow-lg px-5 py-3 flex items-center gap-3 z-20"
                style={{
                  boxShadow:
                    "0 -5px 15px rgba(0,0,0,0.1), 0 10px 25px rgba(0,0,0,0.15), 0 4px 10px rgba(0,0,0,0.1)",
                }}
              >
                <PieChart className="w-8 h-7 text-orange-500 fill-orange-500" />
                <span className="text-2xl text-gray-700">87%</span>
              </div>

              {/* Hexagon */}
              <div
                className="relative"
                style={{
                  filter: "drop-shadow(0 8px 15px rgba(255, 152, 0, 0.3))",
                }}
              >
                <svg width="340" height="340" viewBox="0 0 260 260">
                  <defs>
                    <pattern
                      id="mission-bg"
                      patternUnits="userSpaceOnUse"
                      width="260"
                      height="260"
                    >
                      <rect
                        width="260"
                        height="260"
                        fill="#FF9800"
                        opacity="0.1"
                      />
                      <circle
                        cx="65"
                        cy="65"
                        r="2"
                        fill="white"
                        opacity="0.3"
                      />
                      <circle
                        cx="130"
                        cy="85"
                        r="1.5"
                        fill="white"
                        opacity="0.2"
                      />
                      <circle
                        cx="195"
                        cy="130"
                        r="2"
                        fill="white"
                        opacity="0.3"
                      />
                    </pattern>
                  </defs>
                  <polygon
                    points="65,15 195,15 260,130 195,245 65,245 0,130"
                    fill="#FF9800"
                  />
                  <polygon
                    points="65,15 195,15 260,130 195,245 65,245 0,130"
                    fill="url(#mission-bg)"
                  />
                </svg>
                {/* Background Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-30">
                  <img
                    src="/image/icons/icon-academic-excellence.png"
                    alt="Mission"
                    className="w-52 h-52"
                    style={{
                      filter: "brightness(0) saturate(100%) invert(100%)",
                      opacity: "0.4",
                    }}
                  />
                </div>

                <div className="absolute inset-0 flex flex-col items-center justify-center px-10 text-center text-white">
                  <h3 className="text-2xl mb-4 tracking-[0.2em] font-light">
                    MISSION
                  </h3>
                  <div className="text-[10px] leading-tight font-light text-left">
                    <ul className="list-disc pl-2 space-y-1">
                      <li>To provide high-quality technical training in emerging technologies.</li>
                      <li>To facilitate industrial consultancy and research for complex engineering problems.</li>
                      <li>To strengthen the industry-academia interface through MoUs and collaborative programs.</li>
                      <li>To empower students and professionals with practical skills that enhance employability.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Values Hexagon - Top Right */}
          <div className="absolute right-10 top-0">
            <div className="relative">
              {/* Percentage Badge */}
              <div
                className="absolute top-2 left-1/2 -translate-x-1/2 bg-white rounded-md shadow-2xl drop-shadow-lg px-5 py-3 flex items-center gap-3 z-20"
                style={{
                  boxShadow:
                    "0 -5px 15px rgba(0,0,0,0.1), 0 10px 25px rgba(0,0,0,0.15), 0 4px 10px rgba(0,0,0,0.1)",
                }}
              >
                <PieChart className="w-8 h-7 text-green-600 fill-green-600" />
                <span className="text-2xl text-gray-700">89%</span>
              </div>

              {/* Hexagon */}
              <div
                className="relative"
                style={{
                  filter: "drop-shadow(0 20px 30px rgba(76, 175, 80, 0.9))",
                }}
              >
                <svg width="340" height="340" viewBox="0 0 240 240">
                  <defs>
                    <pattern
                      id="values-bg"
                      patternUnits="userSpaceOnUse"
                      width="240"
                      height="240"
                    >
                      <rect
                        width="240"
                        height="240"
                        fill="#4CAF50"
                        opacity="0.1"
                      />
                      <circle
                        cx="60"
                        cy="60"
                        r="2"
                        fill="white"
                        opacity="0.3"
                      />
                      <circle
                        cx="120"
                        cy="80"
                        r="1.5"
                        fill="white"
                        opacity="0.2"
                      />
                      <circle
                        cx="180"
                        cy="120"
                        r="2"
                        fill="white"
                        opacity="0.3"
                      />
                    </pattern>
                  </defs>
                  <polygon
                    points="60,15 180,15 240,120 180,225 60,225 0,120"
                    fill="#4CAF50"
                  />
                  <polygon
                    points="60,15 180,15 240,120 180,225 60,225 0,120"
                    fill="url(#values-bg)"
                  />
                </svg>
                {/* Background Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  <img
                    src="/image/icons/icon-return-on-investment.png"
                    alt="Values"
                    className="w-52 h-52"
                    style={{
                      filter: "brightness(0) saturate(100%) invert(100%)",
                      opacity: "0.4",
                    }}
                  />
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center px-10 text-center text-white">
                  <h3 className="text-2xl mb-4 tracking-[0.2em] font-light">
                    VALUES
                  </h3>
                  <p className="text-xs leading-relaxed font-light">
                    Professional, Responsible, Innovative, Quality Driven -
                    Champion global standards, diversity, and sustainable
                    development for a better tomorrow.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mission Statement Box - Left Side */}
          <div className="absolute -left-10 top-64">
            <div className="flex flex-col items-start mb-4">
              <div className="w-16 h-16 border-2 border-gray-300 rounded flex items-center justify-center mb-2">
                <TrendingUp
                  className="w-8 h-8 text-gray-400"
                  strokeWidth={1.5}
                />
              </div>
            </div>
            <h2 className="text-3xl text-gray-500 mb-3 tracking-[0.12em] font-normal">
              MISSION STATEMENT
            </h2>
            <p className="text-gray-400 text-base leading-relaxed max-w-[520px] font-light">
              AKGU Skills Foundation (ASF) is dedicated to bridging the gap between academia and industry. Our mission focuses on providing industry-relevant skill development and consultancy services to empower the next generation of engineers.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center mt-16 pt-4 border-t border-gray-300">
          <div className="text-gray-400 text-xs tracking-wider font-light">
            POWERSLIDE<span className="text-red-500">S</span>
          </div>
          <div className="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center">
            <span className="text-sm">?</span>
          </div>
          <div className="text-red-500 text-xs tracking-wider font-light">
            WWW.POWERSLIDES.COM
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsVisionMission;
