import React from 'react'
import Navbar from '@/components/Navbar'
import { projectapi } from '@/api/project';
import { PopoverDemo } from '@/components/Pop';
import { useState, useEffect } from 'react';
import { Trash } from 'lucide-react';
import { Deleteprojectapi } from "@/api/deleteprojects";
import Footer from '@/components/Footer';

export default function Project() {
  const [project, setProject] = useState([])

  async function handleProject() {
    const data = await projectapi()
    console.log(data)
    setProject(data)
  }

  async function handleDelete(id) {

    const data_2 = await Deleteprojectapi(id)
    console.log(data_2)


    setProject((prevProjects) => prevProjects.filter((p) => p.id !== id))
  }

  useEffect(() => {
    handleProject()
  }, [])

  return (
    <div className='min-h-screen bg-[#080d18] '>
      <Navbar />
      <div className='flex ml-200 justify-center items-center pt-10 gap-2'>
        <PopoverDemo variant="waleed" />
      </div>
      <div>
        <div className="mt-10 w-full mb-30 overflow-x-auto rounded-xl border border-white/10 bg-white/5 shadow-lg ">
          <table className="w-full text-left text-sm text-white">
            <thead className="bg-white/10 text-xs uppercase text-gray-300">
              <tr>
                <th className="px-6 py-4">ID</th>
                <th className="px-6 py-4">Title</th>
                <th className="px-6 py-4">Description</th>
                <th className="px-6 py-4">Tech</th>
                <th className="px-6 py-4">Link</th>
                <th className="px-6 py-4 text-center">Delete</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {project?.length > 0 ? (
                project.map((data) => (
                  <tr key={data.id} className="transition-colors duration-200 hover:bg-white/10" >
                    <td className="px-6 py-4 font-medium text-gray-400">{data.id}</td>
                    <td className="px-6 py-4 font-semibold">{data.title}</td>
                    <td className="max-w-xs px-6 py-4 text-gray-300">

                      <p className="line-clamp-2">{data.Discription || data.description}</p>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-2">
                        {String(data.tech)
                          .split(',')
                          .map((t) => (
                            <span key={t} className="rounded-full bg-indigo-500/20 px-3 py-1 text-xs font-medium text-indigo-300" >
                              {t.trim()}
                            </span>
                          ))}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <a href={data.link} target="_blank" rel="noreferrer" className="text-sky-400 underline-offset-4 hover:text-sky-300 hover:underline" >
                        Visit
                      </a>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <button
                        onClick={() => handleDelete(data.id)}
                        className="rounded-lg cursor-pointer bg-red-500/20 px-3 py-1.5 text-xs font-medium text-red-400 transition hover:bg-red-500 hover:text-white"
                      >
                        <Trash className='w-5' />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="px-6 py-10 text-center text-gray-400">
                    No projects found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <Footer />
      </div>
    </div>
  )
}
