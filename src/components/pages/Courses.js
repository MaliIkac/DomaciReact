import React from 'react'
import Cards from '../Cards';

function Courses({courses1, courses2, startCourse, star1, star2}) {
    return (
        <div>
            <Cards 
                data1={courses1} 
                data2 = {courses2} 
                title='COURSES' 
                type='courses' 
                startCourse={startCourse}
                star1={star1}
                star2={star2} 
               />
        </div>
    )
}

export default Courses
