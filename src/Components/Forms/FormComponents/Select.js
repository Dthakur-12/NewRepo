import React from 'react'
import {Field, ErrorMessage} from 'formik'
import TextError from './TextError'
function Select(props) {
    const { label, name, options, ...rest} = props
  return (
    <div>
        <label htmlFor={name}>{label}</label>
        <Field  as= 'select' id={name} name={name}  {...rest} className='form-control' >
         {
            options.map((option,index) => {
                return (
                    <option key={index} value={option.value}>
                        {option.key}
                    </option>
                )
            })
         }
         </Field>
         <ErrorMessage name={name} component={TextError} />
    </div>
  )
}

export default Select