import React from "react";
import './alertError.scss';

export const Alert = ({text}) =>(
    <div className="alertError wrapper" role="alert"  data-test-id='error'>
     {text} 
    </div>
)