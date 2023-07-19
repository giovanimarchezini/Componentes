import './App.css';
import Input from './Components/Input';
import useForm from './Hooks/useForm';

function App() {

  const email = useForm('email');
  const senha = useForm('password');

  return (
    <section className="App">

      <Input.Root>
        <Input.Label label="E-mail" labelFor="email" className="label-mid" ativo={email.ativo} value={email.value}/>
        <Input.Input
          type="email"
          name="email"
          id="email"
          {...email}
        />
        <Input.Error error={email.error}/>
      </Input.Root>

      <Input.Root>
        <Input.Label label="Senha" labelFor="senha" className="label-top" value={senha.value}/>
        <Input.Input
          type="password"
          name="senha"
          id="senha"
          {...senha}
        />
        <Input.Error error={senha.error}/>
      </Input.Root>

    </section>
  );
}

export default App;
