import React from 'react'
import { reduxForm, Field } from 'redux-form'

let DevForm = (props) => {
  const {handleSubmit} = props

  return (
    <form onSubmit={handleSubmit}>
      <Field name='nome' component='input'
             placeholder='Nome' />
      <Field name='sobrenome' component='input'
             placeholder='Sobrenome' />      
      <input type="submit" />
    </form>
  )
}

export default reduxForm({form: 'devForm' })(DevForm)