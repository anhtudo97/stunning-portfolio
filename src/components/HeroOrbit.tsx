import React, { PropsWithChildren } from 'react';
import StarIcon from "@/assets/icons/star.svg";

type HeroOrbitProps = {
    size: number;
    rotation: number;
};

const HeroOrbit: React.FC<PropsWithChildren<HeroOrbitProps>> = ({ children, size, rotation }) => {
    return (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div
                className="flex items-start justify-start"
                style={{
                    height: `${size}px`,
                    width: `${size}px`,
                    transform: `rotate(${rotation}deg)`
                }}
            >
                <div
                    className="inline-flex"
                    style={{
                        transform: `rotate(${rotation * -1}deg)`
                    }}
                >
                    {children}
                </div>
            </div>
        </div>
    );
};

export default HeroOrbit;