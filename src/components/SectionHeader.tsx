import React from 'react';

type SectionHeaderProps = {
    title: string;
    eyebrow: string;
    description: string;
};

const SectionHeader: React.FC<SectionHeaderProps> = ({ description, eyebrow, title }) => {
    return (
        < >
            <div className="flex items-center justify-center">
                <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">
                    {eyebrow}
                </p>
            </div>
            <h2 className="font-serif text-3xl text-center mt-6">
                {title}
            </h2>
            <p className="text-center md:text-lg lg:text-xl max-w-md mx-auto text-white/60 mt-4">
                {description}
            </p>
        </>
    );
};

export default SectionHeader;