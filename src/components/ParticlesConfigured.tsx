
import React from "react";
import Particles from "react-particles-js";

const ParticlesConfigured = ({ color }: { color: string }) =>
{
    return (
        <Particles
            className="wrapperParticles"
            params={{
                "particles": {
                    "number": {
                        "value": 10,
                        "density": {
                            "enable": true,
                            "value_area": 800
                        }
                    },
                    "color": {
                        "value": `${color}`
                    },
                    "shape": {
                        "type": "edge",
                        "stroke": {
                            "width": 0,
                            "color": "#000000"
                        },
                        "polygon": {
                            "nb_sides": 5
                        },
                        "image": {
                            "src": "img/github.svg",
                            "width": 100,
                            "height": 100
                        }
                    },
                    "opacity": {
                        "value": 0.3,
                        "random": false,
                        "anim": {
                            "enable": false,
                            "speed": 1,
                            "opacity_min": 0.1,
                            "sync": false
                        }
                    },
                    "size": {
                        "value": 55,
                        "random": false,
                        "anim": {
                            "enable": true,
                            "speed": 9,
                            "size_min": 15,
                            "sync": false
                        }
                    },
                    "line_linked": {
                        "enable": true,
                        "distance": 347,
                        "color": "#ffffff",
                        "opacity": 0,
                        "width": 1
                    },
                    "move": {
                        "enable": true,
                        "speed": 3.2,
                        "direction": "none",
                        "random": false,
                        "straight": false,
                        "out_mode": "bounce",
                        "bounce": false,
                        "attract": {
                            "enable": true,
                            "rotateX": 473,
                            "rotateY": 1420
                        }
                    }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "bubble"
                        },
                        "onclick": {
                            "enable": false,
                            "mode": "push"
                        },
                        "resize": true
                    },
                    "modes": {
                        "grab": {
                            "distance": 400,
                            "line_linked": {
                                "opacity": 1
                            }
                        },
                        "bubble": {
                            "distance": 251,
                            "size": 39,
                            "duration": 2,
                            "opacity": 1,
                            "speed": 3
                        } as any,
                        "repulse": {
                            "distance": 39,
                            "duration": 0.4
                        },
                        "push": {
                            "particles_nb": 4
                        },
                        "remove": {
                            "particles_nb": 2
                        }
                    }
                },
                "retina_detect": true
            }}
        />
    );
};

export default ParticlesConfigured;
