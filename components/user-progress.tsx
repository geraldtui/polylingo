import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { InfinityIcon } from "lucide-react";
import { courses } from "@/db/schema";

type Props = {
    activeCourse: typeof courses.$inferSelect;
    hearts: number;
    points: number;
    hasActiveSubscription: boolean;
}

export const UserProgress = ({
    activeCourse,
    hearts,
    points,
    hasActiveSubscription }: Props) => {

    return (
        <div className="flex items-center justify-between gap-x-2 w-full">
            <Link href="/courses" className="flex items-center gap-x-2">
                <Button variant="ghost" className="cursor-pointer">
                    <Image src={activeCourse.imageSrc} alt={activeCourse.title} width={32} height={32} className="rounded-md border" />
                </Button>
            </Link>
            <Link href="/shop">
                <Button variant="ghost" className="text-orange-500">
                    <Image src="/points.svg" alt="points" width={28} height={28} className="mr-2" />
                    {points}
                </Button>
            </Link>
            <Link href="/shop">
                <Button variant="ghost" className="text-orange-500">
                    <Image src="/heart.svg" alt="hearts" width={22} height={22} className="mr-2" />
                    {hasActiveSubscription ? <InfinityIcon className="h-4 w-4 stroke-[3]" /> : hearts}
                </Button>
            </Link>
        </div>
    )
}
