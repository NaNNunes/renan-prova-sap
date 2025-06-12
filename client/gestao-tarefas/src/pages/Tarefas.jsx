import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from 'react-bootstrap/Button';

import CardTarefa from '../componentes/card-tarefa/CardTarefa';
import { useEffect, useState } from 'react';

const Tarefas = () => {

  const [tarefas, setTarefas] = useState([]);

  const url = import.meta.env.VITE_API_URL;

  useEffect(()=>{
    async function fetchData() {
      try {
        const req = await fetch(`${url}/tarefa`);
        const res = await req.json();
        setTarefas(res);
      } catch (error) {
        console.log(error)
      }
    };
    fetchData()
  })

  return (
    <div>
      <Card>
        <Card.Title className='mb-3'>Tarefas</Card.Title>
        <Row>
          <Col>
            <Card.Subtitle>
              A fazer
            </Card.Subtitle>
            {
              tarefas.map((tarefa)=>(
                (tarefa.status === "a fazer") &&
                  <CardTarefa
                    key={tarefa.id}
                    id={tarefa.id}
                    descricao={tarefa.descricao}
                    setor={tarefa.setor}
                    prioridade={tarefa.prioridade}
                    usuarioId={tarefa.usuarioId}
                    status={tarefa.status}
                  />
              ))
            }

          </Col>
          <Col>
            <Card.Subtitle>
              Fazendo
            </Card.Subtitle>
              {
                tarefas.map((tarefa)=>(
                  (tarefa.status === "fazendo") &&
                    <CardTarefa
                      key={tarefa.id}
                      id={tarefa.id}
                      descricao={tarefa.descricao}
                      setor={tarefa.setor}
                      prioridade={tarefa.prioridade}
                      usuarioId={tarefa.usuarioId}
                      status={tarefa.status}
                    />
                ))
              }
          </Col>
          <Col>
            <Card.Subtitle>
              Feito
            </Card.Subtitle>
              {
                tarefas.map((tarefa)=>(
                  (tarefa.status === "feito") &&
                    <CardTarefa
                      key={tarefa.id}
                      id={tarefa.id}
                      descricao={tarefa.descricao}
                      setor={tarefa.setor}
                      prioridade={tarefa.prioridade}
                      usuarioId={tarefa.usuarioId}
                      status={tarefa.status}
                    />
                ))
              }
          </Col>
        </Row>
      </Card>
    </div>
  )
}

export default Tarefas