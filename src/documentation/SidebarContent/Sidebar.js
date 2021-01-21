import React from 'react'
import Search from '../../components/Search';

//This layout is the sidebar and content section that accept children

function Sidebar() {
    return (
        <div style={{display:'flex', width: '100%', backgroundColor:'#edf1f3', height:'100vh'}}>
        <div style={{width:'30%', borderRight:'1px solid #d8e0e5'}}>
            <div style={{padding:'1rem'}}>
                <Search
                    placeHolderText="Type to filter"
                />
            </div>
            
            sidebar here (dynamic)
        </div>
        <div style={{width: '70%', padding:'1rem'}}>
            content here (dynamic)
        </div>
        </div>
    )
}

export default Sidebar
