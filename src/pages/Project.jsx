import React from 'react'
import Navbar from '@/components/Navbar'

import { PopoverDemo } from '@/components/Pop';
export default function Project() {
    return (
        <div className='min-h-screen bg-[#080d18]   '>
            <Navbar />
            <div className='flex ml-200  justify-center items-center pt-10 gap-2  '>

                <PopoverDemo />
            </div>
            <div>
                <table style={{ width: '100%', color: "white", border: "1px solid white", marginTop: "40px" }}>
                    <thead className='border-2 border-white'>
                        <tr>
                            <th>id</th>
                            <th>title</th>
                            <th>discription</th>
                            <th>tech</th>
                            <th>link</th>
                            <th>delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='border-2 border-white'>Alfreds Futterkiste</td>
                            <td className='border-2 border-white'>Maria Anders</td>
                            <td className='border-2 border-white'>Germany</td>
                        </tr>
                        <tr>
                            <td className='border-2 border-white'>Centro comercial Moctezuma</td>
                            <td className='border-2 border-white'>Francisco Chang</td>
                            <td className='border-2 border-white'>Mexico</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}
