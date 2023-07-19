import './App.css';
import Input from './Components/Input';
import useForm from './Hooks/useForm';

function App() {

  const email = useForm('email');

  return (
    <section className="App">
      <Input.Root>
        <Input.Label label="E-mail" labelFor="email" ativo={email.ativo} value={email.value} />
        <Input.Input
          type="email"
          name="email"
          id="email"
          {...email}
        />
        <Input.Error error={email.error}/>
      </Input.Root>

    </section>
  );
}

export default App;
