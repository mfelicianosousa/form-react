'use client';
import { useState, useEffect } from 'react'
import styles from './Home.module.css'


export default function Home() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // tipos diferentes
  const [loginState, setLoginState] = useState({
      email: '',
      password: ''
    }
  )

  const [search, setSearch] = useState('')

  const handleSignupForm = (event) => {
    // Acionar uma api, acionar um backend para enviar os dados
    event.preventDefault();
    // console.log('HandleSignupForm');
    console.log({name, email, password});
  }

  const HandleOnChangeLogin = (event, key) => {
    setLoginState({...loginState,[key]: event.target.value});
  }

  const handleLoginForm = (event) => {
    event.preventDefault();
    console.log(loginState);
  }

  useEffect(()=>{
    if (search.length > 2){
      console.log(`Realizando busca para '${search}'`)
    }
  },[search])
  return (
    <div>
      <form className={styles.form} onSubmit={handleSignupForm}>
        <h1>Formulário de Cadastro</h1>
        <input 
           type="text" 
           placeholder="Nome Completo"
           value={name} onChange={(event) => setName(event.target.value)}
           required/>
        <input 
           type="email" 
           placeholder="email"
           value={email} onChange={(event) => setEmail(event.target.value)}
           required/>
        <input 
           type="password" 
           placeholder="Password"
           value={password} onChange={(event) => setPassword(event.target.value)}
           required/>
        <button type="submit">Enviar</button>
      </form>

      <form className={styles.form} onSubmit={handleLoginForm}>
        <h1>Formulário de Login</h1>
        <input 
           type="email" 
           placeholder="email"
           value={loginState.email} onChange={(event)=> HandleOnChangeLogin(event, 'email')}

           required/>
        <input 
           type="password" 
           placeholder="Password"
           value={loginState.password} onChange={(event)=> HandleOnChangeLogin(event, 'password')}
           required/>
        <button type="submit">Entrar</button>
      </form>
      <form className={styles.form}>
        <h1>Formulário de Busca automática</h1>
        <input 
           type="text" 
           placeholder="Digite sua busca"
           value={search} onChange={(event) => setSearch(event.target.value)}
        />
      </form>
    </div>
  );
}
