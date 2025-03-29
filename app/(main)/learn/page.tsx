import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { Header } from "./header";
const LearnPage = () => {
    return (
        <div className="flex flex-row-reverse gap-[48px] px-6">
            <StickyWrapper>
                My sticky sidebare
            </StickyWrapper>
            <FeedWrapper>
                <Header title="Fa'amatai" />

                <div className="h-[200px] w-full bg-blue-500" />
                <div className="h-[200px] w-full bg-red-500" />
                <div className="h-[200px] w-full bg-green-500" />
                <div className="h-[200px] w-full bg-yellow-500" />
                <div className="h-[200px] w-full bg-purple-500" />
                <div className="h-[200px] w-full bg-orange-500" />
                <div className="h-[200px] w-full bg-pink-500" />
                <div className="h-[200px] w-full bg-gray-500" />
                <div className="h-[200px] w-full bg-blue-500" />
                <div className="h-[200px] w-full bg-red-500" />
                <div className="h-[200px] w-full bg-green-500" />
                <div className="h-[200px] w-full bg-yellow-500" />
                <div className="h-[200px] w-full bg-purple-500" />
                <div className="h-[200px] w-full bg-orange-500" />
                <div className="h-[200px] w-full bg-pink-500" />
                <div className="h-[200px] w-full bg-gray-500" />
            </FeedWrapper>
        </div>
    )
}

export default LearnPage;
