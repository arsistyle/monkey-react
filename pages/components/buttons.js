import Code from 'components/Code';
import { Column, Container, Row, Text, Btn, BtnGroup } from 'monkey 🐵';

export default function Buttons() {
  return (
    <Container>
      <Row>
        <Column>
          <Text type='h1'>Buttons</Text>

          <Text type='h3'>Import</Text>
          <Code>{"import { Btn } from 'monkey 🐵';"}</Code>

          <Text type='h3'>Simple and Colors</Text>
          <BtnGroup splitted>
            <Btn>Default</Btn>
            <Btn color='primary'>Primary</Btn>
            <Btn color='secondary'>Secondary</Btn>
            <Btn color='tertiary'>Tertiary</Btn>
          </BtnGroup>
          <Code language='xml'>
            {
              "<Btn>Default</Btn> \n<Btn color='primary'>Primary</Btn> \n<Btn color='secondary'>Secondary</Btn> \n<Btn color='tertiary'>Tertiary</Btn>"
            }
          </Code>
          <Text type='h3'>Bordered</Text>
          <BtnGroup splitted>
            <Btn bordered>Default</Btn>
            <Btn color='primary' bordered>
              Primary
            </Btn>
            <Btn color='secondary' bordered>
              Secondary
            </Btn>
            <Btn color='tertiary' bordered>
              Tertiary
            </Btn>
          </BtnGroup>
          <Code language='xml'>{'<Btn bordered>Default</Btn>'}</Code>
          <Text type='h3'>Link</Text>
          <BtnGroup splitted>
            <Btn link>Default</Btn>
            <Btn color='primary' link>
              Primary
            </Btn>
            <Btn color='secondary' link>
              Secondary
            </Btn>
            <Btn color='tertiary' link>
              Tertiary
            </Btn>
          </BtnGroup>
          <Code language='xml'>{'<Btn link>Default</Btn>'}</Code>
          <Text type='h3'>Ghost</Text>
          <BtnGroup splitted>
            <Btn ghost>Default</Btn>
            <Btn color='primary' ghost>
              Primary
            </Btn>
            <Btn color='secondary' ghost>
              Secondary
            </Btn>
            <Btn color='tertiary' ghost>
              Tertiary
            </Btn>
          </BtnGroup>
          <Code language='xml'>{'<Btn ghost>Default</Btn>'}</Code>
          <Text type='h3'>Sizes</Text>
          <BtnGroup splitted>
            <Btn>Default</Btn>
            <Btn size='big'>Im Big</Btn>
            <Btn size='small'>Small</Btn>
            <Btn size='xsmall'>X-Small</Btn>
          </BtnGroup>
          <Code language='xml'>
            {
              "<Btn size='big'>Im Big</Btn> \n<Btn size='small'>Small</Btn> \n<Btn size='x-small'>X-Small</Btn>"
            }
          </Code>
          <Text type='h3'>Forms</Text>
          <BtnGroup splitted>
            <Btn>Default</Btn>
            <Btn rounded>Rounded</Btn>
            <Btn square>Square</Btn>
          </BtnGroup>
          <Code language='xml'>
            {
              "<Btn rounded>Rounded</Btn> \n<Btn square>Square</Btn>"
            }
          </Code>
        </Column>
      </Row>
    </Container>
  );
}
