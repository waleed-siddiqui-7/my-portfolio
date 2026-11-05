import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { SquarePlus, Pencil } from "lucide-react";
import { Createprojectapi } from "@/api/createproject";
import { Createskillapi } from "@/api/createskill";
import { Updateprojectapi } from '@/api/updateproject';
import { Updateskillapi } from "@/api/updateskill";

export function PopoverDemo({ variant, id }) {
    const [title, setTitle] = useState("");
    const [discription, setDescription] = useState("");
    const [tech, setTech] = useState("");
    const [link, setLink] = useState("");
    const [items, setItem] = useState("");
    const [titleskill, settitleskill] = useState("");




    async function handleAddProject(e) {
        e.preventDefault();
        const data = await Createprojectapi(title, discription, tech, link);
        console.log(data);
        alert("project add suceesfully")
    }

    async function handleaddskill(e) {
        e.preventDefault();
        const data = await Createskillapi(items, titleskill);
        console.log(data);
    }

    async function hadleUpdate(e) {
        e.preventDefault();
        console.log(id);
        const update = await Updateprojectapi(id, title, discription, tech, link);
        console.log(update);
        alert("project Updated suceesfully")
    }

    async function hadleUpdateskill(e) {
        e.preventDefault();
        console.log(id);
        const update = await Updateskillapi(id, title, items);
        console.log(update);
        alert("SKILL Updated suceesfully")
    }

    return (
        <>
            {variant === "waleed" ? (
                <Popover>
                    <PopoverTrigger asChild>
                        <Button variant="outline">
                            <SquarePlus className="mr-2 h-4 w-4" /> Add Projects
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-80">
                        <form onSubmit={handleAddProject} className="flex flex-col gap-3">
                            <div className="flex flex-col gap-1">
                                <Label htmlFor="title">Title:</Label>
                                <Input id="title" type="text" placeholder="Project title" value={title} onChange={(e) => setTitle(e.target.value)} />
                            </div>
                            <div className="flex flex-col gap-1">
                                <Label htmlFor="description">Description:</Label>
                                <Input id="description" type="text" placeholder="Description" value={discription} onChange={(e) => setDescription(e.target.value)} />
                            </div>
                            <div className="flex flex-col gap-1">
                                <Label htmlFor="tech">Tech:</Label>
                                <Input id="tech" type="text" placeholder="React, Tailwind, etc." value={tech} onChange={(e) => setTech(e.target.value)} />
                            </div>
                            <div className="flex flex-col gap-1">
                                <Label htmlFor="link">Link:</Label>
                                <Input id="link" type="text" placeholder="https://..." value={link} onChange={(e) => setLink(e.target.value)} />
                            </div>
                            <Button type="submit" className="mt-2 w-full cursor-pointer">
                                Add Project
                            </Button>
                        </form>
                    </PopoverContent>
                </Popover>
            ) : variant === "update" ? (
                <Popover>
                    <PopoverTrigger asChild>
                        <Button className="hover:text-gray-600 cursor-pointer">
                            <Pencil />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-80">
                        <form onSubmit={hadleUpdate} className="flex flex-col gap-3">
                            <div className="flex flex-col gap-1">
                                <Label htmlFor="title">Title:</Label>
                                <Input id="title" type="text" placeholder="Project title" value={title} onChange={(e) => setTitle(e.target.value)} />
                            </div>
                            <div className="flex flex-col gap-1">
                                <Label htmlFor="description">Description:</Label>
                                <Input id="description" type="text" placeholder="Description" value={discription} onChange={(e) => setDescription(e.target.value)} />
                            </div>
                            <div className="flex flex-col gap-1">
                                <Label htmlFor="tech">Tech:</Label>
                                <Input id="tech" type="text" placeholder="React, Tailwind, etc." value={tech} onChange={(e) => setTech(e.target.value)} />
                            </div>
                            <div className="flex flex-col gap-1">
                                <Label htmlFor="link">Link:</Label>
                                <Input id="link" type="text" placeholder="https://..." value={link} onChange={(e) => setLink(e.target.value)} />
                            </div>
                            <Button type="submit" className="mt-2 w-full cursor-pointer">
                                Update Project
                            </Button>
                        </form>
                    </PopoverContent>
                </Popover>
            ) : variant === "skill" ? (
                <Popover>
                    <PopoverTrigger asChild>
                        <Button variant="outline">
                            <SquarePlus className="mr-2 h-4 w-4" /> Add Skill
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-80">
                        <form onSubmit={handleaddskill} className="flex flex-col gap-3">
                            <div className="flex flex-col gap-1">
                                <Label htmlFor="title">Items:</Label>
                                <Input id="title" type="text" placeholder="skill item" value={items} onChange={(e) => setItem(e.target.value)} />
                            </div>
                            <div className="flex flex-col gap-1">
                                <Label htmlFor="description">Title:</Label>
                                <Input id="description" type="text" placeholder="title" value={titleskill} onChange={(e) => settitleskill(e.target.value)} />
                            </div>
                            <Button type="submit" className="mt-2 w-full cursor-pointer">
                                Add Skill
                            </Button>
                        </form>
                    </PopoverContent>
                </Popover>
            ) : variant === "updateskill" ? (
                <Popover>
                    <PopoverTrigger asChild>
                        <Button className="hover:text-gray-600 cursor-pointer">
                            <Pencil />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-80">
                        <form onSubmit={hadleUpdateskill} className="flex flex-col gap-3">
                            <div className="flex flex-col gap-1">
                                <Label htmlFor="title">Title:</Label>
                                <Input id="title" type="text" placeholder="Project title" value={title} onChange={(e) => setTitle(e.target.value)} />
                            </div>


                            <div className="flex flex-col gap-1">
                                <Label htmlFor="link">Items:</Label>
                                <Input id="link" type="text" placeholder="https://..." value={items} onChange={(e) => setItem(e.target.value)} />
                            </div>
                            <Button type="submit" className="mt-2 w-full cursor-pointer">
                                Update Skill
                            </Button>
                        </form>
                    </PopoverContent>
                </Popover>
            ) : ""}
        </>
    );
}
