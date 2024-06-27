"use client"
import { GetUserCourseList } from '@/app/_services'
import { useUser } from '@clerk/nextjs'
import React, { useEffect, useState } from 'react'
import CategoryItem, { CourseItem } from '../../_components/CategoryItem';

function Dashboard() {

  const { user } = useUser();
  const [userCourseList, setUserCourseList] = useState([]);

  useEffect(() => {
    user ? getUserCourse() : null;
  }, [user])

  const getUserCourse = async () => {
    await GetUserCourseList(user.primaryEmailAddress.emailAddress).then(resp => {
      console.log(resp?.userEnrollCourses)
      if (resp)
        setUserCourseList(resp?.userEnrollCourses);
    })
  }
  return (
    <div>
      <h2 className='text-[20px] font-medium'>
        My Enrolled Courses:
      </h2>

      <div className='grid grid-cols-1 sm:grid-cols-2
      md:grid-cols-3 lg:grid-cols-4'>
        {userCourseList && userCourseList.map((course) => (
          <div key={course.courseList.id}>
            <CourseItem course={course} />
          </div>
        ))}
      </div>
    </div>
  );

}

export default Dashboard
