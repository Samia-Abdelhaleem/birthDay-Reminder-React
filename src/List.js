import React from 'react';

const List = ({people}) => {
  return <React.Fragment>
    {
     people.map((person)=>{
       const {id,name,age,image }=person
       return <article key={id} className='person'>
       <img src={image}/>
       <div>
         <h4> {name}</h4>
         <p> {age } Years</p>
       </div>

       </article>
     })
      
    }
  </React.Fragment>
};

export default List;
