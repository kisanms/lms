// Import necessary modules and components
import { EnrollCourse, PublishCourse } from '@/app/_services';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import React from 'react';

// Define the EnrollmentSection component
function EnrollmentSection({ courseDetail, userCourse }) {
  // Retrieve user information and router instance
  const { user } = useUser();
  const router = useRouter();

  // const enrollCourse = async () => {
  //   if (user) {
  //     await EnrollCourse(courseDetail.id, user.primaryEmailAddress.emailAddress)
  //       .then(async (resp) => {
  //         console.log('EnrollCouresResp=>', resp);
  //       })
  //     if (resp) {
  //       await PublishCourse(resp?.createUserEnrollCourse?.id)
  //         .then(result => {
  //           console.log(result);
  //         })
  //     }
  //   }
  //   else {
  //     router.push('/sign-in');
  //   }
  // }
  const enrollCourse = async () => {
    if (user) {
      await EnrollCourse(courseDetail.id, user.primaryEmailAddress.emailAddress)
        .then(async resp => { // Convert the callback function to async
          console.log('EnrollCouresResp=>', resp);
          if (resp) {
            // Move the publish course logic inside the then callback
            await PublishCourse(resp?.createUserEnrollCourse?.id)
              .then(result => {
                console.log(result);
                if (result) {
                  router.push('/view-course/' + courseDetail.id)
                }

              })
          }
        })
    }
    else {
      router.push('/sign-in');
    }
  }





  return (
    <div>
      {userCourse?.courseId ?
        <div className='mt-5 border rounded-lg p-2 text-center'>
          <h2 className='text-gray-500'>Continue to Build Project, Access Source Code and Track your Progress for free!</h2>
          <button
            className='p-2 w-full bg-blue-500 text-white rounded-lg text-[14px] mt-2 hover:bg-blue-700'
            onClick={() => router.push('/view-course/' + courseDetail.id)}>Continue</button>
        </div> : null
      }
      {courseDetail.free && !userCourse?.courseId ? (
        <div className='mt-5 border rounded-lg p-2 text-center'>
          <h2 className='text-gray-500'>Learn and Build Project, Access Source Code and Track your Progress for free!</h2>
          <button
            className='p-2 w-full bg-blue-500 text-white rounded-lg text-[14px] mt-2 hover:bg-blue-700'
            onClick={() => enrollCourse()}>Enroll Now</button>
        </div>
      ) : !userCourse?.courseId ?
        <div className='mt-5 border rounded-lg p-2 text-center'>
          <h2 className='text-gray-500'>Buy this course and Source Code and Track your Progress !</h2>
          <button
            className='p-2 w-full bg-blue-500 text-white rounded-lg text-[14px] mt-2 hover:bg-blue-700'>Buy Course for Rs 1599</button>
        </div> : null
      }
      <div className='mt-5 border rounded-lg p-2 text-center'>
        <h2 className='text-gray-500'>Buy Monthly Membership to access all this course and Source Code and Track your Progress !</h2>
        <button
          className='p-2 w-full bg-blue-500 text-white rounded-lg text-[14px] mt-2 hover:bg-blue-700'>Buy Membership Rs200/Month</button>
      </div>
    </div>
  )
}

// Export the EnrollmentSection component
export default EnrollmentSection;
