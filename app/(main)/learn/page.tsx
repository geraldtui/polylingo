import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { Header } from "./header";
import { UserProgress } from "@/components/user-progress";
import { getCourseById, getUserProgress } from "@/db/queries";
import { redirect } from "next/navigation";

const LearnPage = async () => {
    const userProgressData = getUserProgress();

    const [userProgress] = await Promise.all([
        userProgressData,
    ]);


    if (!userProgress || !userProgress.activeCourse) {
        redirect("/courses");
    }

    return (
        <div className="flex flex-row-reverse gap-[48px] px-6">
            <StickyWrapper>
                <UserProgress
                    activeCourse={userProgress.activeCourse}
                    hearts={userProgress.hearts}
                    points={userProgress.points}
                    hasActiveSubscription={false}
                />
            </StickyWrapper>
            <FeedWrapper>
                <Header title={userProgress.activeCourse.title} />

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
