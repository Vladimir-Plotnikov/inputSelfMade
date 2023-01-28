import { Formik, Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';
import * as yup from 'yup';


const schema = yup.object().shape({
    login: yup.string().required(),
    password: yup.string().min(4).max(14).required(),
});

const initialValues = {
    login: 'yeet',
    password: 'scrr'
};

const Input = styled(Field)`
font-size: 20px;
color: tomato;
`;

export const LoginForm = () => {

    const handleSubmit = ( values, {resetForm}) => {
        console.log(values);
        resetForm();
}
    
    return (    
<Formik
        initialValues={initialValues}
        onSubmit ={handleSubmit}
        validationSchema={schema}>
           
    <Form autoComplete='off'>
        <label htmlFor="login">
        
        Login 
        <Input type="text" name="login" />
        <ErrorMessage name='login' component={"div"}/>
        </label>
        <label htmlFor="password">
        <div></div>  
            
        <br />
        Password 
        <Input type="password" name='password' />
        <ErrorMessage name='password' component={"div"}/>
        </label>
        <button type="submit">Submit</button>
        
    </Form>

</Formik>)
};

// export const LoginForm = () => {

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const { login, password } = e.target.elements;
//         console.log(login.value, password.value);
//     };


//     return (<form autoComplete='off' onSubmit={handleSubmit}>
//         <label htmlFor="login">
//         Login <input type="text" name="login" />
//         </label>
//         <label htmlFor="password">
//         Password <input type="password" name='password' />
//         </label>
//         <button type="submit">Submit</button>
//     </form>)
// };