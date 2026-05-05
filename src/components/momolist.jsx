import React from 'react';
import './momolist.scss';

    const Reactmomolist =(props)=>{

    
    return(
        <div className='wrapper'>
        <section className="module tour-list" id="momolists">
        <h3 className="section-title"><b>momo</b><span>momo</span></h3>
               { 
                props.momolists.map((momolist,index)=>{
                        return(
                          
      <div className="content" key={momolist}>
         <ul className="shows">
                            <li>
                            <date>{momolist.date}</date>
                            <p className="place">{momolist.place}</p>
                            <p className="country">{momolist.country}</p>
                            <div className="button-container">
                               <a className="btn-rsvp"  href={momolist.rsvplink}
          target="_blank" rel="noopener noreferrer">{momolist.rsvp}</a>
                               <a className="btn-buy"  href={momolist.buylink}
          target="_blank" rel="noopener noreferrer">{momolist.buy}</a>
                            </div>
                         </li>
                         </ul>
                         </div> 
                    
   )
                        
})
}
<div className='momolist_btnbox'>
<a><button className="momolist_btn">view all</button></a>
</div>                     
</section>
</div>
)
}


export default Reactmomolist;