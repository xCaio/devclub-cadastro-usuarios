import './style.css'
import Trash from '../../assets/trash.svg'

function Home() {
  const users = [
    {
      id: '233232',
      name: 'Caio',
      age: 23,
      email: 'caio@gmail.com'
    },
    {
      id: '131243',
      name: 'Teste',
      age: 34,
      email: 'teste@gmail.com'
    },
  ]

  return (
    <div className='container'>
      <form>
        <h1>Cadastro de usuários</h1>
        <input name="name" type='text' />
        <input name="age" type='number' />
        <input name="email" type='email' />
        <button type='button'>Cadastrar</button>
      </form>

      {users.map((user) => (
        <div key={user.id}>
          <div>
            <p>Name:{user.name}</p>
            <p>Age:{user.age}</p>
            <p>E-mail:{user.email}</p>
          </div>
          <button>
            <img src={Trash} alt="" />
          </button>
        </div>

      ))}

    </div>

  )
}

export default Home
