import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGithub, FaPython, FaChartBar } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiThreedotjs, SiOpencv, SiTensorflow, SiPandas, SiNumpy, SiScikitlearn, SiKeras } from 'react-icons/si';

const Skills = () => {
  return (
    <div className="text-center min-h-screen flex flex-col items-center">
      <h1 className="text-4xl font-bold text-yellow-500 m-10">Skills</h1>
      <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row justify-center w-full">
        {/* Web Development Section */}
        <div className="flex flex-col items-center w-full md:w-1/2 border-b md:border-b-0 md:border-r border-yellow-500 md:pr-20">
          <h2 className="text-3xl font-bold text-yellow-500 mb-4">Web Dev</h2>
          <div className="flex flex-col gap-6">
            {/* Internal Div 1 */}
            <div className="flex justify-center gap-6">
              <div className="flex flex-col items-center transform transition-transform duration-300 hover:scale-110 hover:rotate-6">
                <div className="text-6xl text-yellow-500 mb-2">
                  <FaHtml5 />
                </div>
                <p className="text-sm text-gray-700">HTML</p>
              </div>
              <div className="flex flex-col items-center transform transition-transform duration-300 hover:scale-110 hover:rotate-6">
                <div className="text-6xl text-yellow-500 mb-2">
                  <FaCss3Alt />
                </div>
                <p className="text-sm text-gray-700">CSS</p>
              </div>
              <div className="flex flex-col items-center transform transition-transform duration-300 hover:scale-110 hover:rotate-6">
                <div className="text-6xl text-yellow-500 mb-2">
                  <SiTailwindcss />
                </div>
                <p className="text-sm text-gray-700">Tailwind CSS</p>
              </div>
              <div className="flex flex-col items-center transform transition-transform duration-300 hover:scale-110 hover:rotate-6">
                <div className="text-6xl text-yellow-500 mb-2">
                  <FaJsSquare />
                </div>
                <p className="text-sm text-gray-700">JavaScript</p>
              </div>
            </div>
            {/* Internal Div 2 */}
            <div className="flex justify-center gap-6">
              <div className="flex flex-col items-center transform transition-transform duration-300 hover:scale-110 hover:rotate-6">
                <div className="text-6xl text-yellow-500 mb-2">
                  <FaReact />
                </div>
                <p className="text-sm text-gray-700">React</p>
              </div>
              <div className="flex flex-col items-center transform transition-transform duration-300 hover:scale-110 hover:rotate-6">
                <div className="text-6xl text-yellow-500 mb-2">
                  <FaNodeJs />
                </div>
                <p className="text-sm text-gray-700">Node.js</p>
              </div>
              <div className="flex flex-col items-center transform transition-transform duration-300 hover:scale-110 hover:rotate-6">
                <div className="text-6xl text-yellow-500 mb-2">
                  <SiExpress />
                </div>
                <p className="text-sm text-gray-700">Express</p>
              </div>
              <div className="flex flex-col items-center transform transition-transform duration-300 hover:scale-110 hover:rotate-6">
                <div className="text-6xl text-yellow-500 mb-2">
                  <SiMongodb />
                </div>
                <p className="text-sm text-gray-700">MongoDB</p>
              </div>
            </div>
            {/* Internal Div 3 */}
            <div className="flex justify-center gap-6">
              <div className="flex flex-col items-center transform transition-transform duration-300 hover:scale-110 hover:rotate-6">
                <div className="text-6xl text-yellow-500 mb-2">
                  <SiThreedotjs />
                </div>
                <p className="text-sm text-gray-700">Three.js</p>
              </div>
              <div className="flex flex-col items-center transform transition-transform duration-300 hover:scale-110 hover:rotate-6">
                <div className="text-6xl text-yellow-500 mb-2">
                  <FaGithub />
                </div>
                <p className="text-sm text-gray-700">GitHub</p>
              </div>
            </div>
          </div>
        </div>

        {/* Machine Learning Section */}
        <div className="flex flex-col items-center w-full md:w-1/2 mt-10 md:mt-0">
          <h2 className="text-3xl font-bold text-yellow-500 mb-4">Machine Learning</h2>
          <div className="flex flex-col gap-6">
            {/* Internal Div 1 */}
            <div className="flex justify-center gap-6">
              <div className="flex flex-col items-center transform transition-transform duration-300 hover:scale-110 hover:rotate-6">
                <div className="text-6xl text-yellow-500 mb-2">
                  <FaPython />
                </div>
                <p className="text-sm text-gray-700">Python</p>
              </div>
              <div className="flex flex-col items-center transform transition-transform duration-300 hover:scale-110 hover:rotate-6">
                <div className="text-6xl text-yellow-500 mb-2">
                  <SiPandas />
                </div>
                <p className="text-sm text-gray-700">Pandas</p>
              </div>
              <div className="flex flex-col items-center transform transition-transform duration-300 hover:scale-110 hover:rotate-6">
                <div className="text-6xl text-yellow-500 mb-2">
                  <SiNumpy />
                </div>
                <p className="text-sm text-gray-700">NumPy</p>
              </div>
            </div>
            {/* Internal Div 2 */}
            <div className="flex justify-center gap-6">
              <div className="flex flex-col items-center transform transition-transform duration-300 hover:scale-110 hover:rotate-6">
                <div className="text-6xl text-yellow-500 mb-2">
                  <SiTensorflow />
                </div>
                <p className="text-sm text-gray-700">TensorFlow</p>
              </div>
              <div className="flex flex-col items-center transform transition-transform duration-300 hover:scale-110 hover:rotate-6">
                <div className="text-6xl text-yellow-500 mb-2">
                  <SiKeras />
                </div>
                <p className="text-sm text-gray-700">Keras</p>
              </div>
              <div className="flex flex-col items-center transform transition-transform duration-300 hover:scale-110 hover:rotate-6">
                <div className="text-6xl text-yellow-500 mb-2">
                  <SiScikitlearn />
                </div>
                <p className="text-sm text-gray-700">Scikit-learn</p>
              </div>
            </div>
            {/* Internal Div 3 */}
            <div className="flex justify-center gap-6">
              <div className="flex flex-col items-center transform transition-transform duration-300 hover:scale-110 hover:rotate-6">
                <div className="text-6xl text-yellow-500 mb-2">
                  <SiOpencv />
                </div>
                <p className="text-sm text-gray-700">OpenCV</p>
              </div>
              <div className="flex flex-col items-center transform transition-transform duration-300 hover:scale-110 hover:rotate-6">
                <div className="text-6xl text-yellow-500 mb-2">
                  <FaChartBar />
                </div>
                <p className="text-sm text-gray-700">Matplotlib</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
