import React from 'react';
import { motion } from 'framer-motion';

export const Reveal = () => {
    return (
        <section className="grid place-content-center gap-2 bg-black px-8 py-24 text-lime-400">
            <FlipText href="#">first link</FlipText>
            <FlipText href="#">second link</FlipText>
            <FlipText href="#">third link</FlipText>
            <FlipText href="#">fourth link</FlipText>
        </section>
    );
};

const FlipText = ({ children, href }: { children: string; href: string }) => {
    const DURATION = 0.2;
    const STAGGER = 0.025;

    return (
        <motion.a
            initial="initial"
            whileHover="hovered"
            className="relative block overflow-hidden text-8xl font-black uppercase whitespace-nowrap"
            style={{ lineHeight: 0.8}}
            href={href}
        >
            <div>
                {children.split('').map((l, i) => (
                    <motion.span
                        key={i}
                        variants={{
                            initial: { y: 0 },
                            hovered: { y: '-110%', color:'#ff007f' }
                        }}
                        transition={{
                            duration: DURATION,
                            ease: 'easeInOut',
                            delay: STAGGER * i
                        }}
                        className="inline-block"
                    >
                        {l}
                    </motion.span>
                ))}
            </div>

            <div className="absolute inset-0">
                {children.split('').map((l, i) => (
                    <motion.span
                        key={i}
                        variants={{
                            initial: { y: '100%' },
                            hovered: { y: 0, color:'#decdc1' }
                        }}
                        transition={{
                            duration: DURATION,
                            ease: 'easeInOut',
                            delay: STAGGER * i
                        }}
                        className="inline-block"
                    >
                        {l}
                    </motion.span>
                ))}
            </div>
        </motion.a>
    );
};
