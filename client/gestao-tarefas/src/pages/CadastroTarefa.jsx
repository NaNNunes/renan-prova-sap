import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from 'react-bootstrap/Button';

import {useForm} from "react-hook-form";
import { useEffect, useState } from 'react';

import { useTarefa } from '../hooks/useApi';
const CadastroTarefa = () => {

  const {cadastrarTarefa} = useTarefa();
  const {register, handleSubmit, formState:{error}} = useForm();

  const [usuarios, setUsuarios] = useState([]);

  const url = import.meta.env.VITE_API_URL;

  useEffect(()=>{
    async function fetchData() {
      try {
        const req = await fetch(`${url}/usuario`);
        const res = await req.json();
        setUsuarios(res);
      } catch (error) {
        console.log();
      }
    };
    fetchData();
  },[])

    const onSubmit = async(data)=>{
        console.log(data);
        cadastrarTarefa(data);
    }
    const onError = (error)=>{
        console.log(error)
    }


  return (
    <div>
      <Card>
        <Form onSubmit={handleSubmit(onSubmit,onError)}>
          <Row>
            <Col>
              <FloatingLabel
                controlId='descricaoTarefa'
                label="Descrição"
                className='mb-3'
              >
                <Form.Control
                  type='text'
                  placeholder=''
                  {
                    ...register("descricao",{
                      required:'Necessário descrição'
                    })
                  }
                />
              </FloatingLabel>
            </Col>
          </Row>
          <Row>
            <Col>
              <FloatingLabel
                controlId='setorTarefa'
                label="Setor"
                className='mb-3'
              >
                <Form.Control
                  type='text'
                  placeholder=''
                  {
                    ...register("setor",{
                      required:'Necessário setor'
                    })
                  }
                />
              </FloatingLabel>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group>
                <label>Usuário:</label>
                <Form.Select
                  className='mb-3'
                  {
                    ...register("usuarioId",{
                      required:'Necessário usuário'
                    })
                  }
                >
                  {
                    usuarios.map((usuario)=>(
                      (
                        usuario.nome_usuario === localStorage.getItem('usuarioNome')
                        &&
                        usuario.id === localStorage.getItem('usuarioId')
                      )
                        ?
                          <option key={usuario.id} value={usuario.id} selected>{usuario.nome_usuario}</option>
                        :
                          <option key={usuario.id} value={usuario.id}>{usuario.nome_usuario}</option>
                    ))
                  }
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group>
                <label>Prioridade:</label>
                <Form.Select
                  className='mb-3'
                  {
                    ...register("prioridade",{
                      required:'Necessário prioridade'
                    })
                  }
                >
                  <option value="baixa">baixa</option>
                  <option value="média">média</option>
                  <option value="alta">alta</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Button 
            as='input'
            type='submit'
            value="Cadastrar"
          />
        </Form>
      </Card>
    </div>
  )
}

export default CadastroTarefa