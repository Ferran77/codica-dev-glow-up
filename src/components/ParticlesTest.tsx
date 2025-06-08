import { useCallback } from "react"
import Particles from "react-tsparticles"
import { loadSlim } from "tsparticles-slim"
import type { Engine } from "tsparticles-engine"

export const ParticlesTest = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine)
    }, [])

    return (
        <div className="w-full h-screen bg-black">
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                    background: {
                        color: {
                            value: "transparent",
                        },
                    },
                    particles: {
                        number: {
                            value: 50,
                        },
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            enable: true,
                            color: "#ffffff",
                            distance: 150,
                            opacity: 0.2,
                            width: 1,
                        },
                        move: {
                            enable: true,
                            speed: 1,
                        },
                        size: {
                            value: 3,
                        },
                        opacity: {
                            value: 0.5,
                        },
                    },
                    interactivity: {
                        events: {
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                        },
                        modes: {
                            repulse: {
                                distance: 100,
                                duration: 0.4,
                            },
                            push: {
                                quantity: 4,
                            },
                        },
                    },
                }}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                }}
            />
        </div>
    )
} 