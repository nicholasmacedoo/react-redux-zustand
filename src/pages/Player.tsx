import { useEffect } from 'react'
import { MessageCircle } from 'lucide-react'


import { Header } from '../components/Header'
import { Video } from '../components/Video'
import { Module } from '../components/Module'
// import { useAppDispatch, useAppSelector } from '../store'
// import { loadCourse, useCurrentLesson } from '../store/slices/player'

export function Player() {
    // const dispatch = useAppDispatch()
    // const modules = useAppSelector(state => state.player.course?.modules)
    
    // const { currentLesson } = useCurrentLesson()

    // useEffect(() => {
    //     // dispatch(loadCourse())
    // }, [])

    // useEffect(() => {
    //     if(currentLesson)
    //         document.title = `${currentLesson.title} | React + Redux + Zustand`
    // }, [currentLesson])

    return (
        <div className="h-screen w-full bg-zinc-950 text-zinc-50 flex justify-center items-center">
            <div className="flex w-[1100px] flex-col gap-4">
                <div className="flex items-center justify-between">
                    {/* Header */}
                    {/* <Header /> */}

                    <button className="flex items-center gap-2 rounded bg-violet-500 hover:bg-violet-600 px-3 py-2 text-sm font-medium">
                        <MessageCircle className='w-4 h-4' /> 
                        Deixar Feedback
                    </button>
                </div>

                <main className='relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow pr-80'>
                    <div className='flex-1'>
                        {/* <Video /> */}
                    </div>

                    <aside className='w-80 absolute top-0 bottom-0 right-0 border-l divide-y-2 divide-zinc-900 border-zinc-800 bg-zinc-900 overflow-x-auto scrollbar scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800'>
                       {/* {
                        modules && modules.map((module, index) => (
                            <Module 
                                key={module.id} 
                                moduleIndex={index} 
                                title={module.title} 
                                amountOfLessons={module.lessons.length} 
                            />                      
                        ))
                       }                                         */}
                    </aside>
                </main>
            </div>
        </div>
    )
}