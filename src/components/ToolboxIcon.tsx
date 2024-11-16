import TechIcon from "@/components/TechIcon";
import { ElementType, FC } from "react";
import { twMerge } from "tailwind-merge";

type ToolboxIconProsp = {
    items: {
        title: string;
        iconType: ElementType;
    }[];
    className?: string;
    itemWrapperClassName?: string;
};

const ToolboxIcon: FC<ToolboxIconProsp> = ({ items, className, itemWrapperClassName }) => {
    return (
        <div className={twMerge(
            "flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
            className
        )}>
            <div className={twMerge(
                "flex flex-none py-0.5 gap-6 pr-6",
                itemWrapperClassName
            )}>
                {
                    items.map(item => {
                        return (
                            <div key={item.title} className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg">
                                <TechIcon component={item.iconType} />
                                <span className="font-semibold">{item.title}</span>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default ToolboxIcon;