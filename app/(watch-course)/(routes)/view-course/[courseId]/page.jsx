"use client"
import React, { useEffect, useState } from 'react'
import ChapterNav from './_components/ChapterNav'
import FullVideoPlayer from './_components/FullVideoPlayer'
import { UserButton, useUser } from '@clerk/nextjs'
import { getCourseById } from '@/app/_services'
import { CompletedChapterContext } from '@/app/_context/CompletedChapterContext'

function ViewCourse({ params }) {
  const { user } = useUser();
  const [course, setCourse] = useState([]);
  const [userCourse, setUserCourse] = useState();
  const [activeChapter, setActiveChapter] = useState();
  const [completedChapter, setCompletedChapter] = useState();




  useEffect(() => {
    user ? getCourse() : null;
  }, [user])





  const getCourse = async () => {
    await getCourseById(params?.courseId,
      user.primaryEmailAddress.emailAddress)
      .then(resp => {
        console.log(resp?.userEnrollCourses[0]?.completedChapter);
        setCourse(resp.courseList);
        setUserCourse(resp.userEnrollCourses);
        setCompletedChapter(resp?.userEnrollCourses[0]?.completedChapter);
      })
  }

  return course?.name && (
    <div className='flex '>
      <CompletedChapterContext.Provider value={{ completedChapter, setCompletedChapter }}>
        <div className='w-72 border shadow-sm h-screen z-50'>
          {course ? <ChapterNav course={course}
            userCourse={userCourse}
            setActiveChapter={(chapter) => setActiveChapter(chapter)} />
            : null}
        </div>






        <div>


          <div className='float-right p-5'>
            <UserButton />
          </div>



          <FullVideoPlayer
            userCourse={userCourse}
            activeChapter={activeChapter} />
        </div>
      </CompletedChapterContext.Provider>
    </div>
  )
}

export default ViewCourse
