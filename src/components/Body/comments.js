import React from 'react'

const Comments =(props)=> {
    return (
            props.comments.map((item)=>{
                return(
                    <div key={item.id}>
                        <p style={{color:"black"}}>
                            <b>{item.author} </b> <br/>
                            rating: {item.rating}<br/>
                            {item.comment} 
                            <p className="text-muted">{item.date}</p>
                        </p>
                    </div>

                )
            })
    )
}

export default Comments
