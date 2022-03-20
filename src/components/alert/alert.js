import React from "react";

export const Alert = ({text}) =>(
    <div className="alert alert-danger" role="alert"  data-test-id='error'>
     {text} 
    </div>
)