import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { ModeToggle } from "@/components/mode-toggle";
import {Separator} from "@/components/ui/separator.tsx";

export default function SettingsComponent() {

    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle>Settings</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-6">
                    <Separator />
                    <div className="flex items-center justify-between space-x-2">
                        <Label className="flex flex-col space-y-1">
                            <span>Theme</span>
                            <span className="font-normal leading-snug text-muted-foreground">
                              Defines the visual appearance of the website, like colors for example.
                            </span>

                        </Label>
                        <ModeToggle/>
                    </div>
                </CardContent>
            </Card>
        </>
    );
}
