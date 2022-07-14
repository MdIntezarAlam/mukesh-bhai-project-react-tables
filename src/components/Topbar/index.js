import React from 'react';
import './../Topbar/styles.css'

export default function Topbar(props) {
  console.log("====> props", props)
  return (
    <div className='topbar_heading'>{props.title && <h1 className='topbar_title'>{props.title}</h1>}
    </div>
  );
}
