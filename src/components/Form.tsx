import { useForm } from '../hooks/useForm';

interface IFormData {
  email: string;
  name: string;
}

const Form = () => {
  const { form, handleForm } = useForm<IFormData>({
    email: '',
    name: ''
  })

  const { email, name } = form;

  return (<form>
    <section>
      <label>Email:</label>
      <input name="email" value={email} type="email" onChange={handleForm} />
    </section>

    <section>
      <label>Name:</label>
      <input name="name" value={name} type="text" onChange={handleForm} />
    </section>
    {JSON.stringify(form)}
  </form>)
}

export default Form