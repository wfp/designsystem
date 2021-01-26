import React from 'react'

function EmptyContent() {
    return (
        <div style={{display:'flex',flexDirection:'column', justifyContent:'center', alignItems:'center', backgroundColor:'#edf1f3'}}>
            <img alt="illustration Image" />
            <div>Title</div>
            <div>Description</div>
            <div>Call to Action</div>
        </div>
    )
}

export default EmptyContent
