import { useToastContext } from '@/contexts';
import InputForm from '@/libs/Input/InputForm';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function Login() {
  const { toast } = useToastContext();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <InputForm id='email' type='text' label='Username' isRequired formik={formik} />
      <InputForm id='password' type='password' label='Password' isRequired formik={formik} />

      <button type='submit' onClick={() => toast.success('Login successfully')}>
        Login
      </button>
    </form>
  );
}

export default Login;
