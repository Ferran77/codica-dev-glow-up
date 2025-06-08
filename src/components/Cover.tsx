import { useCallback, useEffect, useRef } from "react"
import Particles from "react-tsparticles"
import { loadSlim } from "tsparticles-slim"
import type { Engine } from "tsparticles-engine"

export function Cover({ children }: { children: React.ReactNode }) {
    const particlesRef = useRef<any>(null)

    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine)
    }, [])

    const particlesLoaded = useCallback((container: any) => {
        particlesRef.current = container
    }, [])

    useEffect(() => {
        return () => {
            if (particlesRef.current) {
                particlesRef.current.destroy()
                particlesRef.current = null
            }
        }
    }, [])

    return (
        <div className="relative min-h-screen bg-brand-dark">
            <div className="fixed inset-0 pointer-events-none">
                <Particles
                    id="tsparticles"
                    init={particlesInit}
                    loaded={particlesLoaded}
                    options={{
                        fullScreen: false,
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
                                speed: 0.5,
                                direction: "none",
                                random: false,
                                straight: false,
                                outModes: {
                                    default: "bounce",
                                },
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
                        zIndex: 0,
                    }}
                />
            </div>
            <div className="relative z-10">
                {children}
            </div>
        </div>
    )
}

