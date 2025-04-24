
import InputComponents from './Input'
import Button from './Button'

const Form = () => {
  return (
    <div className='flex flex-col ml-4'>
    <form className='*:mt-4'>
      <InputComponents.InputRest id="email" label="Email"></InputComponents.InputRest>
      <InputComponents.InputRest id="password" label="Passwod" type='password'></InputComponents.InputRest>
      
      <Button/>
    </form>
    </div>
  )
}




export default Form
