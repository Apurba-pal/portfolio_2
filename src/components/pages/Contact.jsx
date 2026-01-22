import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";
import { Canvas, useFrame } from "react-three-fiber";
import { OrbitControls, useGLTF, useFBX } from "@react-three/drei";
import * as THREE from "three";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { fStore } from "../../firebase";
import { collection, addDoc } from "firebase/firestore"; // Import Firestore functions

const ModelWithAnimation = () => {
  const group = useRef();
  const { scene } = useGLTF("/model/avatar_2.glb");
  const animation = useFBX("/animation/Talking On A Cell Phone.fbx");
  const mixer = useRef(null);

  useEffect(() => {
    if (group.current && animation.animations.length) {
      mixer.current = new THREE.AnimationMixer(group.current);
      mixer.current.clipAction(animation.animations[0]).play();
    }

    return () => {
      if (mixer.current) {
        mixer.current.stopAllAction();
        mixer.current = null;
      }
    };
  }, [animation]);

  useFrame((state, delta) => {
    if (mixer.current) {
      mixer.current.update(delta);
    }
  });

  return <primitive ref={group} object={scene} scale={3.5} position={[0, -3, 0]} />;
};

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  // const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const contactsCollection = collection(fStore, "contacts"); // Get the "contacts" collection
    addDoc(contactsCollection, { name, email, message }) // Add a new document
      .then(() => {
        setName('');
        setEmail('');
        setMessage('');
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 1000); // Reset submission state after 3 seconds
      })
      .catch((error) => console.log("Error submitting data:", error));
  };

  return (
    <motion.div className="flex items-center justify-center p-10">
      {/* <Canvas style={{ width: "30%", height: "100vh" }}>
        <ambientLight intensity={4} />
        <pointLight position={[0, 0, 3]} intensity={500} />
        <ModelWithAnimation />
        <OrbitControls
          minDistance={7}
          maxDistance={7}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 3}
          enableRotate={false} // Disable rotation
        />
      </Canvas> */}
      <div className="bg-transparent backdrop-blur-md bg-opacity-30 p-5 rounded-md shadow-lg border border-yellow-500 flex flex-wrap w-full max-w-5xl">
        {/* Social Buttons */}
        <div className="flex flex-col items-center justify-evenly space-y-4 w-full md:w-1/3 md:pr-5 md:border-r md:border-r-yellow-500">
          <a
            href="https://www.linkedin.com/in/apurba-pal-642729265/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full h-12 bg-yellow-500 text-black rounded-md hover:bg-black hover:text-yellow-500 hover:border hover:border-yellow-500 transition-all duration-300"
          >
            <FaLinkedin className="text-xl" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/apurba-pal"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full h-12 bg-yellow-500 text-black rounded-md hover:bg-black hover:text-yellow-500 hover:border hover:border-yellow-500 transition-all duration-300"
          >
            <FaGithub className="text-xl" />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.instagram.com/apurba__pal/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full h-12 bg-yellow-500 text-black rounded-md hover:bg-black hover:text-yellow-500 hover:border hover:border-yellow-500 transition-all duration-300"
          >
            <FaInstagram className="text-xl" />
            <span>Instagram</span>
          </a>
          <a
            href="mailto:palapurba2004@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full h-12 bg-yellow-500 text-black rounded-md hover:bg-black hover:text-yellow-500 hover:border hover:border-yellow-500 transition-all duration-300"
          >
            <SiGmail className="text-xl" />
            <span>Email</span>
          </a>
        </div>

        {/* Contact Form */}
        <div className="w-full md:w-2/3 md:pl-5 mt-10 md:mt-0">
          <h1 className="text-4xl font-bold mb-4 text-yellow-500">Let's Talk !!</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-1/2 p-3 text-yellow-500 bg-yellow-100 bg-opacity-20 rounded-md border border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-1/2 p-3 text-yellow-500 bg-yellow-100 bg-opacity-20 rounded-md border border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              />
            </div>
            <textarea
              name="message"
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-3 text-yellow-500 bg-yellow-100 bg-opacity-20 rounded-md border border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              rows="4"
              required
            />
            <button
              type="submit"
              className="w-full bg-yellow-500 text-black p-3 rounded-md hover:bg-yellow-600 transition-all duration-300"
            >
              {isSubmitted ? "Message Sent!" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
