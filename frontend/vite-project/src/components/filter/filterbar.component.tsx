import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator.tsx";

/*interface dataFormProps {
    getData: () => void,
}*/

/*export default function FilterBarComponent(
    // { getData = () => {} }: dataFormProps,
    getData: any,
    releaseYearFrom: number, releaseYearTo: number,
    runtimeFrom: number, runtimeTo: number,
    pegiFrom: number, pegiTo: number,
    setReleaseYearFrom: any, setReleaseYearTo: any,
    setRuntimeFrom: any, setRuntimeTo: any,
    setPegiFrom: any, setPegiTo: any
) {*/

interface Props {
    getData: () => void,
    releaseYearFrom: number, releaseYearTo: number,
    runtimeFrom: number, runtimeTo: number,
    pegiFrom: number, pegiTo: number,
    setReleaseYearFrom: any, setReleaseYearTo: any,
    setRuntimeFrom: any, setRuntimeTo: any,
    setPegiFrom: any, setPegiTo: any,
    ry: { min: number, max: number },
    rt: { min: number, max: number },
    pegi: { min: number, max: number }
}

const FilterbarComponent: React.FC<Props> = ({
    getData, releaseYearFrom, releaseYearTo, runtimeFrom, runtimeTo, pegiFrom, pegiTo,
    setReleaseYearFrom, setReleaseYearTo, setRuntimeFrom, setRuntimeTo, setPegiFrom, setPegiTo,
    ry, rt, pegi
}) => {

    return (
        <div className="flex justify-end w-[100%]">
            <form>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline">Filter</Button>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>Filter</SheetTitle>
                            <SheetDescription>
                                Select specific filter options.
                            </SheetDescription>
                        </SheetHeader>
                        <div className="grid gap-4 py-4">
                            <Label className="mt-3">Release Year</Label>
                            <Separator/>
                            <div className={"grid grid-cols-4 items-center gap-4"}>
                                <Label htmlFor="ry-from" className="text-center">From</Label>
                                <Input id={"ry-from"} type="number" min={ry.min} max={ry.max} placeholder="from"
                                       value={releaseYearFrom} onChange={(e) => setReleaseYearFrom(e.target.value)} />
                                <Label htmlFor="ry-to" className="text-center">To</Label>
                                <Input id={"ry-to"} type="number" min={ry.min} max={ry.max} placeholder="to"
                                       value={releaseYearTo} onChange={(e) => setReleaseYearTo(e.target.value)} />
                            </div>

                            <Label className="mt-3">Runtime (minutes)</Label>
                            <Separator/>
                            <div className={"grid grid-cols-4 items-center gap-4"}>
                                <Label htmlFor="rt-from" className="text-center">From</Label>
                                <Input id={"rt-from"} type="number" min={rt.min} max={rt.max} placeholder="from"
                                       value={runtimeFrom} onChange={(e) => setRuntimeFrom(e.target.value)} />
                                <Label htmlFor="rt-to" className="text-center">To</Label>
                                <Input id={"rt-to"} type="number" min={rt.min} max={rt.max} placeholder="to"
                                       value={runtimeTo} onChange={(e) => setRuntimeTo(e.target.value)} />
                            </div>

                            <Label className="mt-3">PEGI (age)</Label>
                            <Separator/>
                            <div className={"grid grid-cols-4 items-center gap-4"}>
                                <Label htmlFor="pegi-from" className="text-center">From</Label>
                                <Input id={"pegi-from"} type="number" min={pegi.min} max={pegi.max} placeholder="from"
                                       value={pegiFrom} onChange={(e) => setPegiFrom(e.target.value)} />
                                <Label htmlFor="pegi-to" className="text-center">To</Label>
                                <Input id={"pegi-to"} type="number" min={pegi.min} max={pegi.max} placeholder="to"
                                       value={pegiTo} onChange={(e) => setPegiTo(e.target.value)} />
                            </div>
                        </div>
                        <SheetFooter>
                            <SheetClose asChild>
                                <Button type="submit" onClick={getData}>Apply</Button>
                            </SheetClose>
                        </SheetFooter>
                    </SheetContent>
                </Sheet>
            </form>
        </div>
)
}

export default FilterbarComponent;
