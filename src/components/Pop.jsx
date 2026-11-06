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
    const [formData, setFormData] = useState({
        title: "",
        discription: "",
        tech: "",
        link: ""
    });

    const [items, setItem] = useState("");
    const [titleskill, settitleskill] = useState("");




    async function handleAddProject(e) {
        e.preventDefault();
        const data = await Createprojectapi(formData.title, formData.discription, formData.tech, formData.link);

        console.log(data);
        setFormData("")
        alert("project add suceesfully")
    }


    async function handleaddskill(e) {
        e.preventDefault();
        const data = await Createskillapi(items, titleskill);
        console.log(data);
        setItem("")
        settitleskill("")
        alert("project add suceesfully")
    }

    async function hadleUpdate(e) {
        e.preventDefault();
        console.log(id);
        const update = await Updateprojectapi(id, formData.title, formData.discription, formData.tech, formData.link);
        console.log(update);
        alert("project Updated suceesfully")
    }

    async function hadleUpdateskill(e) {
        e.preventDefault();
        console.log(id);
        const update = await Updateskillapi(id, formData.title, items);
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
                                <Input id="title" type="text" placeholder="Project title" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} />
                            </div>
                            <div className="flex flex-col gap-1">
                                <Label htmlFor="description">Description:</Label>
                                <Input id="description" type="text" placeholder="Description" value={formData.discription} onChange={(e) => setFormData({ ...formData, discription: e.target.value })} />
                            </div>
                            <div className="flex flex-col gap-1">
                                <Label htmlFor="tech">Tech:</Label>
                                <Input id="tech" type="text" placeholder="React, Tailwind, etc." value={formData.tech} onChange={(e) => setFormData({ ...formData, tech: e.target.value })} />
                            </div>
                            <div className="flex flex-col gap-1">
                                <Label htmlFor="link">Link:</Label>
                                <Input id="link" type="text" placeholder="https://..." value={formData.link} onChange={(e) => setFormData({ ...formData, link: e.target.value })} />
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
                                <Input id="title" type="text" placeholder="Project title" name="title" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} />
                            </div>
                            <div className="flex flex-col gap-1">
                                <Label htmlFor="description">Description:</Label>
                                <Input id="description" type="text" placeholder="Description" value={formData.discription} onChange={(e) => setFormData({ ...formData, discription: e.target.value })} />
                            </div>
                            <div className="flex flex-col gap-1">
                                <Label htmlFor="tech">Tech:</Label>
                                <Input id="tech" type="text" name="tech" placeholder="React, Tailwind, etc." value={formData.tech} onChange={(e) => setFormData({ ...formData, tech: e.target.value })} />
                            </div>
                            <div className="flex flex-col gap-1">
                                <Label htmlFor="link">Link:</Label>
                                <Input id="link" type="text" name="link" placeholder="https://..." value={formData.link}
                                    onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                                />
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
                                <Input id="title" type="text" placeholder="Project title" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} />
                            </div>


                            <div className="flex flex-col gap-1">
                                <Label htmlFor="link">Items:</Label>
                                <Input id="link" type="text" placeholder="items..." value={items} onChange={(e) => setItem(e.target.value)} />
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
