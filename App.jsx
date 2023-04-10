import React from 'react';
import { ButtonGroup, Center, Container, Flex } from '@chakra-ui/react';
import { CustomButton } from './components/Button';

function App() {
  return (
    <Container
      bg='#FFFFFF'
      h='100vh'
      backgroundImage="url('./assets/codeleap_logo_black.png')"
      backgroundRepeat='no-repeat'
      backgroundPosition='center'
    >
      <Flex>
        <Center>
          <ButtonGroup>
            <CustomButton onClick={() => {}} bg='#FFFFFF' title='Login' />
            <CustomButton onClick={() => {}} bg='#7695EC' title='Sing up' />
          </ButtonGroup>
        </Center>
      </Flex>
    </Container>
  );
}

export default App;
