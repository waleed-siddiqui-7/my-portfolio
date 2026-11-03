import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { SquarePlus } from 'lucide-react';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

export function PopoverDemo() {
    return (
        <Popover>
            <PopoverTrigger render={<Button variant="outline"><SquarePlus /> Add Projects</Button>} />
            <PopoverContent className="w-80 h-80">
                <form action="" className="flex flex-col gap-3">
                    <label htmlFor="" className="font-bold">Title:</label>
                    <input type="text" placeholder="title" className="border-2 border-black  pl-3" />
                    <label htmlFor="" className="font-bold">Discription:</label>
                    <input type="text" placeholder="discription" className="border-2 border-black  pl-3" />
                    <label htmlFor="" className="font-bold" >Tech:</label>
                    <input type="text" placeholder="tech" className="border-2 border-black  pl-3" />
                    <label htmlFor="" className="font-bold">Link:</label>
                    <input type="text" placeholder="link" className="border-2 border-black  pl-3" />
                    <button className="border-2 border-gray-600 w-30 ml-20 bg-gray-500 font-black cursor-pointer">Add Project</button>
                </form>

            </PopoverContent>
        </Popover>
    )
}
