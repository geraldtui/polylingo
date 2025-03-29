"use client";

import { useEffect, useRef } from "react";

type Props = {
    children: React.ReactNode;
}

export const FeedWrapper = ({ children }: Props) => {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [children]);

    return (
        <div className="flex-1 relative top-0 h-[calc(100vh-70px)] lg:mt-[-20px]">
            <div ref={scrollRef} className="h-full overflow-y-auto">
                <div className="flex flex-col pt-6">
                    {Array.isArray(children) ? (
                        <>
                            {children[0]}
                            <div className="flex flex-col-reverse">
                                {children.slice(1)}
                            </div>
                        </>
                    ) : (
                        children
                    )}
                </div>
            </div>
        </div>
    )
}
