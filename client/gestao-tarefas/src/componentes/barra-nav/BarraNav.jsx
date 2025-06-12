import Navbar from 'react-bootstrap/Navbar';
import Nav from "react-bootstrap/Nav";
import Container from 'react-bootstrap/Container'

const BarraNav = () => {
  return (
    <div>
        <Navbar
            bg='primary'
            className='text-white mb-3'
        >
            <Container>
                <Navbar.Brand className='text-white'>
                    Gerenciador de Tarefas
                </Navbar.Brand>
                <Nav.Link href='/cadastro-usuario'>
                    Cadastrar Usuários
                </Nav.Link>
                <Nav.Link href='/cadastro-tarefa'>
                    Cadastrar Tarefas
                </Nav.Link>
                <Nav.Link href='/tarefas'>
                    Gerenciar Tarefas
                </Nav.Link>
            </Container>
        </Navbar>
    </div>
  )
}

export default BarraNav