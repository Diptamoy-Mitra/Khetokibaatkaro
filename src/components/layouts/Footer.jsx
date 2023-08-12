import {
  Container,
  Text,
  Stack,
  ButtonGroup,
  IconButton,
} from '@chakra-ui/react';
import {  FaGithub } from 'react-icons/fa';

export const Footer = () => {
  return (
    <Container
      as="footer"
      role="contentinfo"
      marginTop={['7rem', '1rem', '1rem']}
    >
      <Stack
        spacing={{
          base: '2',
          md: '5',
        }}
      >
        <Stack justify="space-between" direction="column" align="center">
          <Text fontSize="sm" fontWeight="bold" color="subtle">
            {`Made by team 404 Not Found`}
          </Text>
          <ButtonGroup variant="ghost">
            {/* <IconButton
              as="a"
              href="https://www.linkedin.com/in/kedark152"
              aria-label="LinkedIn"
              icon={<FaLinkedin fontSize="1.25rem" />}
            /> */}
            <IconButton
              as="a"
              href="https://github.com/Diptamoy-Mitra/Khetokibaatkaro"
              aria-label="GitHub"
              icon={<FaGithub fontSize="1.25rem" />}
            />
           
          </ButtonGroup>
          <Text fontSize="sm" color="subtle">
            &copy; {2023} Khetokibaatkaro, Inc. All rights reserved.
          </Text>
        </Stack>
      </Stack>
    </Container>
  );
};
