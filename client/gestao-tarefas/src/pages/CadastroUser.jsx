import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from 'react-bootstrap/Button';

import {useForm} from "react-hook-form";

import { useUser } from '../hooks/useApi';

const CadastroUser = () => {

    const {cadastarUser} = useUser();

    const {register, handleSubmit, formState:{error}} = useForm();

    const onSubmit = async(data)=>{
        console.log(data);
        cadastarUser(data);
    }
    const onError = (error)=>{
        console.log(error)
    }

    return (
    <div>

        <Card>
            <Card.Header>
                <Card.Title>
                    Cadastrar Usuário
                </Card.Title>
            </Card.Header>

            <Form onSubmit={handleSubmit(onSubmit,onError)}>
                <Row>
                    <Col>
                        <FloatingLabel
                            controlId='nomeUser'
                            className='mb-3'
                            label="nome"
                        >
                            <Form.Control
                                type='text'
                                placeholder=''
                                {
                                    ...register("nome_usuario",{
                                        required:"Nome necessário"
                                    })
                                }
                            /> 
                        </FloatingLabel>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FloatingLabel
                            controlId='emailUser'
                            className='mb-3'
                            label="email"
                        >
                            <Form.Control
                                type='email'
                                placeholder=''
                                {
                                    ...register("usuario_email",{
                                        required:"Nome necessário"
                                    })
                                }
                            /> 
                        </FloatingLabel>
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

export default CadastroUser