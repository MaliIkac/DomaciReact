import React from 'react';
import Enrolled from '../Enrolled';
import '../Enrolledm.css'
import { Button } from '../Button';

function Enrolledm({data, deleteCourse}) {

   /* const headingStyle = {
        'color': '#fff',
        'margin-top': '-50px'
    } */

    return (
        <div>
        {data.length == 0 ? 
            <>
                <div className='cards1'>
                    <p className='app-text'>START NOW!</p>
                    <div className='main-btns'>
                        <Button
                        className='btns'
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'
                        link='/courses'
                        >
                        CHECK OUR COURSES
                        </Button>
                    </div>
                </div>
            </> : 
            <>
            <div className='cards2'>
                <h1>YOUR COURSES</h1>
                <div className='cards__container'>
                    <div className='cards__wrapper'>
                        <ul className='cards__items1'>
                            {
                                data.map(item => (<Enrolled obj={item} deleteCourse={deleteCourse} />))
                            }
                        </ul>
                    </div>  
                </div>  
            </div>
            </>
        }
      </div>
    )
}

export default Enrolledm
