import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { FolderKanban } from 'lucide-react';
import { Award } from 'lucide-react';
import { TabsDemo } from './tabs';
import { useNavigate } from 'react-router-dom';

export default function Dashboardsidebar() {
    const navigate = useNavigate()
    const [side, setside] = useState(false);

    function toggleSidebar() {
        setside(!side);
    }

    function gotonavigate() {
        navigate("/projects")
    }

 function gotoSkill() {
        navigate("/skill")
    }

    return (
        <div className="relative ">

            <div
                className={`bg-blue-50 h-50 absolute rounded-2xl top-58 flex flex-col pt-7  transition-all duration-300 ${side ? 'w-30  ' : 'w-13 '
                    }`}
            >
                <div className="flex justify-between items-center px-1 py-3">

                    <button onClick={toggleSidebar} className="p-1 ">
                        {side ? <X className='cursor-pointer' /> : <Menu className='cursor-pointer' />}
                    </button>
                </div>
                <div className='flex justify-between  px-2' >
                    <div>
                        <FolderKanban className='cursor-pointer' />
                    </div>
                    <div className={`cursor-pointer ${side ? "" : "hidden"}`} onClick={gotonavigate}>
                        Projects

                    </div>
                </div>

                <div className='flex justify-between px-1.5 pr-5 pt-2'>
                    <div>
                        <Award className='cursor-pointer' />
                    </div>
                    <div className={` cursor-pointer ${side ? "" : "hidden"}`} onClick={gotoSkill}>
                        Skills
                    </div>
                </div>

            </div>



            {!side && (
                <>
                    <button onClick={toggleSidebar} className="absolute left-2 top-3 p-1 ">
                        <Menu className='cursor-pointer' />
                    </button>

                </>
            )}


        </div>
    );
}
