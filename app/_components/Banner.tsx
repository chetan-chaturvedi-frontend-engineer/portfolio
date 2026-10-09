'use client';
import ArrowAnimation from '@/components/ArrowAnimation';
import Button from '@/components/Button';
import { GENERAL_INFO } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Banner = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);

    // move the content a little up on scroll
    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 70%',
                    end: 'bottom 10%',
                    scrub: 1,
                },
            });

            tl.fromTo(
                '.slide-up-and-fade',
                { y: 0 },
                { y: -150, opacity: 0, stagger: 0.02 },
            );
        },
        { scope: containerRef },
    );

    return (
        <section className="relative overflow-hidden" id="banner">
            <ArrowAnimation />
            <div
                className="container min-h-[100svh] min-h-[530px] py-10 grid grid-cols-1 md:grid-cols-2 items-center gap-10"
                ref={containerRef}
            >
                {/* Column 1: Introduction */}
                <div className="max-w-[544px]">
                    <h1 className="banner-title slide-up-and-fade leading-[.95] text-6xl sm:text-[80px] font-anton">
                        <span className="text-primary">FRONTEND</span>
                        <br />
                        <span className="ml-4">DEVELOPER</span>
                    </h1>

                    <p className="banner-description slide-up-and-fade mt-6 text-lg text-muted-foreground">
                        Hi! I&apos;m{" "}
                        <span className="font-medium text-foreground">Chetan</span>.
                        A creative Frontend Developer with 5+ years of experience in
                        building high-performance, scalable, and responsive web solutions.
                    </p>

                    <div className="mt-9 flex flex-wrap items-center gap-3">
                        <Button
                            as="link"
                            target="_blank"
                            rel="noopener noreferrer"
                            href={GENERAL_INFO.phone}
                            variant="primary"
                            className="banner-button slide-up-and-fade"
                        >
                            Let&apos;s Talk
                        </Button>

                        <Button
                            as="link"
                            target="_blank"
                            rel="noopener noreferrer"
                            href={GENERAL_INFO.resume}
                            variant="no-color"
                            className="banner-button slide-up-and-fade hover:text-black"
                        >
                            View Resume
                        </Button>
                    </div>

                    <div className="flex items-center gap-2 mt-4">
                        <span className="size-3 rounded-full bg-white"></span>
                        <span className="text-sm text-muted-foreground">
                            Available for full-time opportunities
                        </span>
                    </div>
                </div>

                {/* Column 2: Stats */}
                <div className="flex flex-col gap-8 md:items-end md:text-right">

                    <Image
                        src="/profile/profile.png"
                        alt="Profile Picture"
                        width="400"
                        height="400"
                        className=""
                    />
                    <div className="md:absolute bottom-[10%] right-[4%] flex md:flex-col gap-4 md:gap-8 text-center md:text-right">
                    <div className="slide-up-and-fade">
                        <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                            5+
                        </h5>
                        <p className="text-muted-foreground">
                            Years of Experience
                        </p>
                    </div>
                    <div className="slide-up-and-fade">
                        <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                            12+
                        </h5>
                        <p className="text-muted-foreground">
                            Completed Projects
                        </p>
                    </div>
                    <div className="slide-up-and-fade">
                        <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                            2
                        </h5>
                        <p className="text-muted-foreground">Certifications</p>
                    </div>
                </div>
                    
                </div>
            </div>
        </section>
    );
};

export default Banner;
