import React from 'react'
import Particles from 'react-particles';
import particlesConfig from './particle-config';
import particlesConfigLight from './particle-config-light';
import { useCallback } from "react";
//import type { Container, Engine } from "tsparticles-engine";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

 const ParticleBackground = ({ colorMode }) => {
    const particlesInit = useCallback(async (engine) => {
        console.log(engine);

        // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadFull(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);

    return (
        <Particles 
         id="tsparticles" 
         particlesLoaded="particlesLoaded"
         init={particlesInit} 
         loaded={particlesLoaded}
         options={colorMode === 'dark' ? particlesConfig : particlesConfigLight}
         height="100vh"
         width="100vh" />
    );
}

export default ParticleBackground;