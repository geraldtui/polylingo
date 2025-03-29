import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function ProtectedLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { userId } = await auth();

    if (!userId) {
        redirect("/sign-in");
    }

    return (
        <div className="min-h-screen flex flex-col">
            <main className="flex-1">
                {children}
            </main>
        </div>
    );
}
