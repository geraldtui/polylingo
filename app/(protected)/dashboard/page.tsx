import { auth } from "@clerk/nextjs/server";
import { Button } from "@/components/ui/button";
import { SignOutButton } from "@clerk/nextjs";

export default async function DashboardPage() {
    const { userId } = await auth();

    return (
        <div className="p-8 space-y-4">
            <h1 className="text-2xl font-bold">Protected Dashboard</h1>
            <p>User ID: {userId}</p>
            <SignOutButton>
                <Button variant="danger">Sign Out</Button>
            </SignOutButton>
        </div>
    );
}
