// Libs
import { Container, Row, Column } from 'monkey 🐵';
import Link from 'next/link';

export default function Home() {
  

  return (
    <Container>
      <div style={{ height: 100 }}></div>
      <Row gap={10}>
        <Column>
          <Link href={'/components'}>Componentes</Link>
        </Column>
      </Row>
    </Container>
  );
}
