'use client';
import SectionTitle from '@/components/SectionTitle';
import { CERTIFICATIONS } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { ExternalLink } from 'lucide-react';
import { useRef } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Certifications = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 60%',
                    end: 'bottom 50%',
                    toggleActions: 'restart none none reverse',
                    scrub: 1,
                },
            });

            tl.from('.certification-item', {
                y: 50,
                opacity: 0,
                stagger: 0.3,
            });
        },
        { scope: containerRef },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 50%',
                    end: 'bottom 20%',
                    scrub: 1,
                },
            });

            tl.to(containerRef.current, {
                y: -150,
                opacity: 0,
            });
        },
        { scope: containerRef },
    );

    return (
        <section className="pb-section" id="my-certifications">
            <div className="container" ref={containerRef}>
                <SectionTitle title="My Certifications" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                    {CERTIFICATIONS.map((item) => (
                        <div
                            key={item.title}
                            className="certification-item flex flex-col border border-border rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                        >
                            <p className="text-lg sm:text-xl text-muted-foreground">
                                {item.organization}
                            </p>

                            <div className="flex items-start justify-between gap-3 mt-3 mb-4">
                                <h3 className="text-2xl sm:text-3xl font-anton leading-tight">
                                    {item.title}
                                </h3>

                                {item.liveUrl && (
                                    <a
                                        href={item.liveUrl}
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        className="hover:text-primary shrink-0"
                                        aria-label={`View ${item.title}`}
                                    >
                                        <ExternalLink size={24} />
                                    </a>
                                )}
                            </div>

                            {item.thumbnail && (
                                <div className="w-full">
                                    <Image
                                        src={item.thumbnail}
                                        alt={item.title}
                                        width="300"
                                        height="200"
                                        className={cn(
                                            'w-full object-cover rounded-lg',
                                        )}
                                        key={item.title}
                                        loading="lazy"
                                    />
                                </div>
                            )}

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
