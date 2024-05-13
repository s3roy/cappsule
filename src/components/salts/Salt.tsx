import React from 'react';
import { Box, Text } from '@chakra-ui/react';

interface SaltDetailsProps {
  saltName: string;
  form: string;
  strength: string;
  packaging: string;
}

const SaltDetails: React.FC<SaltDetailsProps> = ({
  saltName,
  form,
  strength,
  packaging,
}) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Text
        fontFamily="Poppins"
        fontSize="16.5px"
        fontWeight="600"
        textAlign="center"
        color="#222222"
      >
        {saltName}
      </Text>
      <Text
        fontFamily="Poppins"
        fontSize="13px"
        fontWeight="500"
        textAlign="center"
        color="#2A527A"
        mt={2}
      >
        {form} | {strength} | {packaging}
      </Text>
    </Box>
  );
};

export default SaltDetails;
