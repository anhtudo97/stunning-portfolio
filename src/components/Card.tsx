import React, { ComponentPropsWithoutRef, PropsWithChildren } from 'react';

import grainImage from "@/assets/images/grain.jpg";
import { twMerge } from 'tailwind-merge';

type CardProps = {
    className?: string;
};

const Card: React.FC<CardProps & ComponentPropsWithoutRef<"div">> = ({ className, children, ...props }) => {
    return (
        <div
            className={
                twMerge(
                    "bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none",
                    className
                )}
            {...props}
        >
            <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{
                    backgroundImage: `url(${grainImage.src})`
                }}
            ></div>
            {children}
        </div>
    );
};

export default Card;