import { projectapi } from '@/api/project'
import { Faq } from '@/api/skill'
import React from 'react'
import { useEffect, useState } from 'react'
function Dashboard() {
    const [data, setdata] = useState()
    const [skilldata, setskilldata] = useState()
    async function countapi() {
        const apidata = await projectapi()
        console.log(apidata)
        const slicedata = apidata.length
        console.log(slicedata)
        setdata(slicedata)
    }
    useEffect(() => {
        countapi()
    }, [])


    async function countskillapi() {
        const apidata = await Faq()
        console.log(apidata)
        const slicedata = apidata.length
        console.log(slicedata)
        setskilldata(slicedata)
    }
    useEffect(() => {
        countskillapi()
    }, [])

    return (
        <div className='min-h-screen bg-[#080d18] px-5 py-10 sm:px-10'>
            <div className='mx-auto max-w-6xl'>
                <h1 className='text-center text-3xl font-bold tracking-tight text-white sm:text-5xl'>
                    Admin Dashboard
                </h1>
                <div className='mx-auto mt-4 h-1 w-16 rounded-full bg-blue-500' />

                <h2 className='mt-12 text-2xl font-semibold text-slate-100 sm:text-3xl'>
                    Welcome, <span className='text-blue-400'>Waleed Siddiqui</span>!
                </h2>
                <p className='mt-2 text-slate-400'>Here is a quick look at your portfolio.</p>

                <div className='mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                    <div className='rounded-2xl border border-white/10 bg-[#101a2b] p-6 transition-colors duration-200 hover:border-blue-400/40'>
                        <p className='text-sm font-medium text-slate-400'>Total Projects</p>
                        <p className='mt-4 text-5xl font-bold text-white'>{data}</p>
                    </div>

                    <div className='rounded-2xl border border-white/10 bg-[#101a2b] p-6 transition-colors duration-200 hover:border-blue-400/40'>
                        <p className='text-sm font-medium text-slate-400'>Total Skills</p>
                        <p className='mt-4 text-5xl font-bold text-white'>{skilldata}</p>
                    </div>

                    <div className='rounded-2xl border border-white/10 bg-[#101a2b] p-6 transition-colors duration-200 hover:border-blue-400/40'>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard