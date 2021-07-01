import React from 'react'
import Loading from './Loading'

const Comments =(props)=> {
    if(props.commentIsLoading){
        return(
            <Loading />
        );
    }
    else{
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
}

export default Comments
