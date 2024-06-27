import request, { gql } from "graphql-request"

const MASTER_URL = "https://api-ap-south-1.hygraph.com/v2/" + process.env.NEXT_PUBLIC_HYGRAPH_KEY + "/master"


export const getCourseList = async () => {
  const query = gql`
  query courseList {
    courseLists {
      name
      banner {
        url
      }
      free
      id
      author
      totalChapters
      tags
    }
  }
  
  `
  const result = await request(MASTER_URL, query);
  return result;
}

export const getCourseById = async (id, userEmail) => {
  const query = gql`
  query course {
    courseList(where: {id: "`+ id + `"}) {
      chapter (first: 30){
        ... on Chapter {
          id
          name
          video {
            url
          }
          chapterNumber
        }
      }
      description
      name
      id
      free
      author
      totalChapters
      youtubeUrl
     
    }
    userEnrollCourses(where: {courseId: "`+ id + `", userEmail: "` + userEmail + `"}) {
      courseId
      userEmail
      id
      completedChapter {
        ... on CompletedChapter {
          chapterId
        }
      }
    }
  }
  
  
  
  `

  const result = await request(MASTER_URL, query);
  return result;
}

export const EnrollCourse = async (courseId, userEmail) => {
  const mutationQuery = gql`
  mutation EnrollCourse {
    createUserEnrollCourse(data: {userEmail: "`+ userEmail + `", courseId: "` + courseId + `"}) {
      id
    }
  }
  `
  const result = await request(MASTER_URL, mutationQuery);
  return result;
}



export const PublishCourse = async (id) => {
  const mutationQuery = gql`
  mutation PublishCourse {
    publishUserEnrollCourse(where: {id: "`+ id + `"}) {
      id
    }
  }
  `
  const result = await request(MASTER_URL, mutationQuery);
  return result;
}


export const markChapterCompleted = async (recordId, chapterNumber) => {
  const mutationQuery = gql`
  mutation MarkChapterComplete {
    updateUserEnrollCourse(
      where: {id: "`+ recordId + `"}
      data: {completedChapter: {create: {CompletedChapter: {data: {chapterId: "`+ chapterNumber + `"}}}}}
    ) {
      id
    }
    publishManyUserEnrollCoursesConnection(to: PUBLISHED) {
      edges {
        node {
          id
        }
      }
    }
   }
  `
  const result = await request(MASTER_URL, mutationQuery);
  return result;
}


export const GetUserCourseList = async (userEmail) => {
  const query = gql`
  query UserCourseList {
    userEnrollCourses(where: {userEmail: "`+ userEmail + `"}) {
      courseList {
        banner {
          url
        }
        description
        name
        id
        free
        sourceCode
        tags
        totalChapters
        author
      }
    }
  }
  `

  const result = await request(MASTER_URL, query);
  return result;
}