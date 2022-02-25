import { useState } from 'react';
import { Alert, Btn, Column, Container, Row, Text } from 'monkey 🐵';

export default function Alerts() {
  const [hide, setHide] = useState(false);

  const handleClick = () => setHide(true);

  return (
    <Container>
      <Text type='h1'>Alerts</Text>
      <Row>
        <Column xs='12' md='8' lg='6'>
          <h3>Simple</h3>
          <Alert>Soy una alerta simple</Alert>

          <div style={{ height: 50 }}></div>
          <h3>Types</h3>
          <Alert type='danger'>Soy una alerta de peligro</Alert>
          <Alert type='warning'>Soy una alerta de aviso</Alert>
          <Alert type='info'>Soy una alerta de información</Alert>

          <div style={{ height: 50 }}></div>
          <h3>Alertas descartables</h3>
          <Alert close type='warning'>
            Soy una alerta de aviso
          </Alert>

          <div style={{ height: 50 }}></div>
          <h3>Alertas con acciones</h3>
          <Alert
            type='light'
            hide={hide}
            actions={
              <>
                <Btn size='small' ghost onClick={handleClick}>
                  Cancelar
                </Btn>
                <Btn
                  color='info'
                  size='small'
                  onClick={(e) => console.log('Soy el evento de Aceptar')}
                >
                  Reintentar
                </Btn>
              </>
            }
          >
            El proceso ha fallado, pruebe reintentar
          </Alert>

          <div style={{ height: 50 }}></div>
          <h3>Alertas con contenido como atributo</h3>
          <Alert
            type='success'
            content={
              <>
                <h4>Hola soy el título</h4>
                <p>Soy una alerta de éxito</p>
              </>
            }
          />

          <div style={{ height: 50 }}></div>
          <h3>Alertas como texto</h3>
          <Alert type='success' text>
            Soy una alerta de texto
          </Alert>
          <Alert type='danger' text>
            Soy una alerta de texto
          </Alert>
          <Alert type='warning' text>
            Soy una alerta de texto
          </Alert>
        </Column>
      </Row>
    </Container>
  );
}
