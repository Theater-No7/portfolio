"use client";

import CanvasParticles from "./canvas-particles";

export default function AmbientBackground() {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-gradient-to-b from-[#020813] via-[#010409] to-[#000000]">

            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#148E96] opacity-[0.05] blur-[120px] rounded-full mix-blend-screen" />
            <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-[#148E96] opacity-[0.04] blur-[150px] rounded-full mix-blend-screen" />
            <div className="absolute top-[40%] left-[50%] w-[30%] h-[30%] bg-[#0a4a52] opacity-[0.06] blur-[100px] rounded-full mix-blend-screen" />

            <CanvasParticles />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,#000000_130%)] opacity-90" />
        </div>
    );
}