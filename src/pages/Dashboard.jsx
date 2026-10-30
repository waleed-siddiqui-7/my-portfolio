import React from 'react'

function Dashboard() {
    return (
        <div className='bg-[#080d18f3] h-screen'>
            <h1 className='text-center pt-10 text-4xl font-bold text-white'><span className='text-white'>Admin</span> Dashboard</h1>

            <h1 className='ml-10 mt-10 text-3xl text-green-700 font-bold'>Welcome Waleed Siddiqui!</h1>


            <div className='flex justify-center items-center pt-15 gap-6'>
                <div className='w-100 h-50 border rounded-2xl border-white/10 bg-[#101a2b] hover:border-blue-400/40 '>

                </div>
                <div className='w-100 h-50 border  rounded-2xl border-white/10 bg-[#101a2b] hover:border-blue-400/40 '>

                </div>
                <div className='w-100 h-50 border  rounded-2xl border-white/10 bg-[#101a2b] hover:border-blue-400/40 '>

                </div>
            </div>
        </div>
    )
}

export default Dashboard
