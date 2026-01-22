import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // Load a lightweight version

const ParticlesBackground = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine); // Initialize the particles engine
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log("Particles loaded:", container);
    };

    return (
        <>{init && (
            <Particles
                id="tsparticles"
                className="w-full h-full" // Ensure full width and height
                particlesLoaded={particlesLoaded}
                options={{
                    background: {
                        color: { value: "#000000" }, // Black background
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: { enable: true, mode: "push" },
                            onHover: { enable: true, mode: "repulse" },
                            resize: true,
                        },
                        modes: {
                            push: { quantity: 4 },
                            repulse: { distance: 100, duration: 0.4 },
                        },
                    },
                    particles: {
                        color: { value: "#FFF500" }, // White particles
                        links: {
                            color: "#FFF500",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        move: {
                            enable: true,
                            speed: 3,
                            direction: "none",
                            random: false,
                            outModes: { default: "out" },
                        },
                        number: {
                            density: { enable: true, area: 800 },
                            value: 100,
                        },
                        opacity: { value: 0.5 },
                        shape: { type: "circle" },
                        size: { value: { min: 1, max: 4 } },
                    },
                    detectRetina: true,
                }}
            />
        )}</>
    );
};

export default ParticlesBackground;
