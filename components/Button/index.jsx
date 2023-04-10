import { Button, Container } from '@chakra-ui/react';

export function CustomButton(props) {
  const { onClick, bg, title } = props;

  return (
    <Container>
      <Button onClick={onClick} bg={bg} size='md' variant='solid'>
        {title}
      </Button>
    </Container>
  );
}
