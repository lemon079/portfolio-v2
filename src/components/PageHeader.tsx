import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
    title: string;
    description: string;
    image?: {
        src: string;
        alt: string;
        width?: number;
        height?: number;
    };
    align?: "left" | "center";
    maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl";
}

export default function PageHeader({
    title,
    description,
    image,
    align = "center",
    maxWidth = "2xl",
}: PageHeaderProps) {
    const maxWidthClasses = {
        sm: "max-w-sm",
        md: "max-w-md",
        lg: "max-w-lg",
        xl: "max-w-xl",
        "2xl": "max-w-2xl",
    };

    return (
        <div className={cn("z-10 space-y-6 mx-auto", maxWidthClasses[maxWidth])}>
            {image ? (
                <div className="flex items-center justify-between">
                    <div className="flex-1">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-2">
                            {title}
                        </h1>
                        <p className="text-text-muted text-xs md:text-sm">
                            {description}
                        </p>
                    </div>
                    <Image
                        unoptimized
                        src={image.src}
                        alt={image.alt}
                        width={image.width || 100}
                        height={image.height || 100}
                        className="items-end relative top-6"
                    />
                </div>
            ) : (
                <div>
                    <h1 className={cn(
                        "text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-2",
                        align === "center" && "text-center"
                    )}>
                        {title}
                    </h1>
                    <p className={cn(
                        "text-text-muted text-xs md:text-sm",
                        align === "center" && "text-center"
                    )}>
                        {description}
                    </p>
                </div>
            )}
            <Separator className="border-text-muted/20 border" />
        </div>
    );
}
