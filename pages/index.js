// Libs
import { useState } from 'react';
import { Btn, BtnGroup } from 'monkey 🐵/components/Btn';
import { Column } from 'monkey 🐵/layout/Column';
import { Container } from 'monkey 🐵/layout/Container';
import { Row } from 'monkey 🐵/layout/Row';
import { Alert } from 'monkey 🐵/components/Alert';


export default function Home() {
  return (
    <Container>
      <div style={{ height: 100 }}></div>
      <Row gap={10}>
        <Column>
          <Alert>Soy una alerta simple</Alert>
          <Alert type="success" close>Soy una alerta de éxito</Alert>
          <Alert type="danger" close>Soy una alerta de peligro</Alert>
          <Alert type="warning" close>Soy una alerta de aviso</Alert>
          <Alert type="info" close>Soy una alerta de información</Alert>
          <Alert type="dark">Soy una alerta dark</Alert>
          <Alert type="light">Soy una alerta light</Alert>
        </Column>
      </Row>
    </Container>
  );
}
