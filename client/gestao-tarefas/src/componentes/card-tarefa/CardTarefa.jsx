import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useState } from 'react';

import { useTarefa } from '../../hooks/useApi';

const CardTarefa = (props) => {

  const {atualizarStatus, excluirTarefa} = useTarefa();

  const [usuarioResponsavel, serUsuarioResponsavel] = useState();
  
  const listaStatus = ["a fazer","fazendo","feito"];

  const atualizarTarefa = async(novoStatus)=>{
    atualizarStatus(props.id, novoStatus)
  }

  const excluir = async()=>{
    excluirTarefa(props.id);
  }

  return (
    <div>
      <Card className='p-1'>
          <Row className='mb-1'><Col>Descrição: {props.descricao}</Col></Row>
          <Row className='mb-1'><Col>Setor: {props.setor}</Col></Row>
          <Row className='mb-1'><Col>Prioridade: {props.prioridade}</Col></Row>
          <Row className='mb-1'><Col>Vinculado a: {usuarioResponsavel}</Col></Row>
          <Card.Footer>
            <Row className='mb-1'>
              <Col>
                <Button 
                  as='input'
                  type='submit'
                  value="Editar"
                />
              </Col>
              <Col>
                <Button 
                  as='input'
                  type='submit'
                  value="Excluir"
                  onClick={()=>{excluir()}}
                />
              </Col>
            </Row>
            <Row className='mb-1'>
              <Col>
                <Form.Select
                  onChange={(e)=>{
                    const novoStatus = e.target.value;
                    atualizarTarefa(novoStatus);
                  }}
                >
                  {
                    listaStatus.map((statusTarefa)=>(
                      (statusTarefa === props.status)
                        ?
                          <option key={statusTarefa} value={props.status} selected>{statusTarefa}</option>
                        :
                          <option key={statusTarefa} value={statusTarefa}>{statusTarefa}</option>
                    ))
                  }
                </Form.Select>
              </Col>
            </Row>
          </Card.Footer>
      </Card>
    </div>
  )
}

export default CardTarefa