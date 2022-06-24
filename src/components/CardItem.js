import React from 'react';
import { Button } from './Button';
import { useState } from 'react';

function CardItem({name, src, star, checked, type, startCourse, star1, star2, id, text}) {
  return (
    <>
      <li className='cards__item'>
        <div className='cards__item__link'>
          <figure className='cards__item__pic-wrap' data-category={type=='teachers' ? '“' : name}>
            <img
              className='cards__item__img'
              src={src}
            />
          </figure>
          <div className='cards__item__info'>
            <p className='cards__item__text'>{text}</p>
            {type == 'teachers' ? <h5 className='cards__item__title'>{name}</h5> : <></> }
            {type == 'teachers' ? <></> : 
              <div className='star-container'>
                <ul>
                  <li>                   
                    {checked == false ? <i class="far fa-star" onClick={()=>{star1(id)}}></i> :
                     <i class="fas fa-star" onClick={()=>star2(id)}></i>}                   
                  </li>
                  <li><p className='star-number'>{star}</p></li>
                  <li>
                    <Button 
                      className='btns' 
                      buttonStyle='btn--primary' 
                      buttonSize='btn--medium' 
                      link={'/courses'} 
                      id = {id}
                      onClick={startCourse}
                    >
                      ENROLL
                    </Button>
                  </li>
                </ul>
                
                
              </div>

             }
            
          </div>
        </div>
      </li>
    </>
  );
}

export default CardItem;
