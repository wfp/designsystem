import React, { useState } from 'react';

export default function useWizard(initialValues ){
    const [page, setPage] = useState(0);
    const [values, setValues] = useState(initialValues || {});


    const validate = (values) => {
        const activePage = React.Children.toArray(children)[page];
        return activePage.props.validate ? activePage.props.validate(values) : {};
    };

    const handleTabClick = (values) =>{
    
        if(Object.keys(validate(values)).length > 0){
            // console.log("not valid",validate(values))
        }else{
            setPage(values);
            setValues(values);
        }
        
    }

    const next = (values) =>{
        setPage(Math.min(page + 1, children.length - 1));
        setValues(values);
      }
    
    const previous = () => {
    setPage(Math.max(page - 1, 0));
    }

}