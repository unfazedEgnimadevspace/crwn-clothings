import React from 'react';
import "./form-input.styles.scss";

const FormInput = ({handleChange,label, ...Otherprops}) =>{
    return(
        <div className='group'>
            <input className='form-input' onChange={handleChange} {...Otherprops} />
            {
              label ?
              (<label className={`${Otherprops.value.length ? 'shrink' : ""} form-input-label `}>
                  {label}
              </label>)
               :null
            }
        </div>
    )
}
export default FormInput;