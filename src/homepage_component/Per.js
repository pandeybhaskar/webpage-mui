import React, { useEffect, useState } from 'react'

const Per = (props) => {
    let object = props.object;
    const [display_object, set_display_object] = useState(object);

    useEffect(()=>{
        console.log('display--',display_object)
        // set_display_object(display_object)
        // console.log('display--',display_object)
    },[display_object])

    let copy_object = [...display_object];
  return (
    copy_object.map((value, index)=>{
        return(
            <div className='perLists' 
            key={index}
            onClick={()=>{
                console.log(index);
                copy_object.splice(index,1);
                // console.log(display_object);
                set_display_object(copy_object);
                // set_display_object([...display_object, display_object]);
            }}
            >
                    <div>{value.product}</div>
                    <div>{value.price}</div>
                    <div>{value.available}</div>
            </div>
        )
    })
  )
}

export default Per