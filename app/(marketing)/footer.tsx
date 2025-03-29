import { Button } from "@/components/ui/button";
import Image from "next/image";
export const Footer = () => {
    return (
        <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
            <div className="max-w-screen-lg mx-auto flex items-center justify-between h-full gap-2">
                <Button size="lg" variant="ghost" className="flex-1">
                    <Image src="/ws.svg" alt="Samoan" width={40} height={32} className="mr-4 rounded-md" />
                    Samoan
                </Button>
                <Button className="flex-1" size="lg" variant="ghost">
                    <Image src="/fj.svg" alt="Fijian" width={40} height={32} className="mr-4 rounded-md" />
                    Fijian
                </Button>
                <Button className="flex-1" size="lg" variant="ghost">
                    <Image src="/to.svg" alt="Tongan" width={40} height={32} className="mr-4 rounded-md" />
                    Tongan
                </Button>
                <Button className="flex-1" size="lg" variant="ghost">
                    <Image src="/nu.svg" alt="Niuean" width={40} height={32} className="mr-4 rounded-md" />
                    Niuean
                </Button>
                <Button className="flex-1" size="lg" variant="ghost">
                    <Image src="/ck.svg" alt="Cook Island" width={40} height={32} className="mr-4 rounded-md" />
                    Cook Island
                </Button>
            </div>
        </footer>
    )
}

export default Footer;
