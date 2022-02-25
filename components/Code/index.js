import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
export default function Code({ children, language = 'javascript' }) {
  return (
    <SyntaxHighlighter
      showLineNumbers
      language={language}
      style={atomOneDark}
      customStyle={{
        padding: '20px 10px',
        borderRadius: 10,
        marginBottom: 50,
        lineHeight: 1.2
      }}
      className='pre'
    >
      {children}
    </SyntaxHighlighter>
  );
}
