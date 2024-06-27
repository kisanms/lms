import { Book } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import "./CategoryItem.css"



export const CategoryItem = ({ course }) => {
  return (
    <div className="course-box">
      <img src={course.banner.url} alt="Course Banner" className="banner" />
      <div className="details">
        <h2>{course.name}</h2>
        <p>Author: {course.author}</p>
        <p>Total Chapters: {course.totalChapters}</p>
      </div>
    </div>
  );
};



export function CourseItem({ course }) {
  return (
    <div>
      <div

        className='border rounded-lg p-2
cursor-pointer hover:border-blue-600'>
        {/* <Image src={course.banner.url}
          alt={course.name}
          width={1000}
          height={500}
          className='rounded-lg' /> */}
        {course && course.banner && course.banner.url && (
          <Image
            src={course.banner.url}
            alt={course.name}
            width={1000}
            height={500}
            className='rounded-lg'
          />

        )}
        {
          course && course.courseList && (
            <div className='mt-2'>
              {
                console.log("Category Item  : ", course)
              }
              <h2 className='text-[18px] md:text-[16px] font-medium'>{course.courseList.name}</h2>
              <h2 className='text-gray-400 text-[13px]'>{course.courseList.author}</h2>
              <div className='flex items-center gap-2 mt-2'>
                <Book className='h-6 w-6 text-blue-600 rounded-full bg-blue-100 p-1' />
                <h2 className='text-[12px] text-gray-400'>{course.courseList.totalChapters} Chapters</h2>
              </div>
              <h2 className='mt-2 text-[14px]'>{course.courseList.free ? 'Free' : 'Paid'}</h2>
            </div>
          )
        }
      </div>
    </div>
  )
}

