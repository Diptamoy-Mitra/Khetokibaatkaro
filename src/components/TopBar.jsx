import { HStack, Heading, useColorModeValue, Image } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { NavLink } from 'react-router-dom';
export const TopBar = () => {
  const cardBgColor = useColorModeValue('#00171F', '#00171F');
  const cardTextColor = useColorModeValue('white', 'gray.200');
  return (
    <HStack
      width="100%"
      bg={cardBgColor}
      color={cardTextColor}
      position="fixed"
      top="0"
      left="0"
      zIndex="9999"
    >
      <Heading
        as={NavLink}
        to="/home"
        size="xl"
        noOfLines="2"
        lineHeight={1.6}
        fontFamily="sans-serif"
        fontSize="30px"

        marginLeft="1rem"
      >

        <Image
          boxSize={['30px', '30px', '50px']}
          mx={['20vw', '1vw','4vw']}
          src="https://thumbs2.imgbox.com/0c/0f/WtSCfXX3_t.png"
        />


      </Heading>
      <ColorModeSwitcher position="absolute" right="2rem" />
    </HStack>
  );
};
