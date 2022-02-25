import { Container, Row, Column } from 'monkey 🐵';
import Link from 'next/link';

export default function Components() {
  return <Container>
    <Row>
      <Column>
        <Link href="/components/buttons">Buttons</Link>
        <Link href="/components/alerts">Alerts</Link>
      </Column>
    </Row>
  </Container>
}