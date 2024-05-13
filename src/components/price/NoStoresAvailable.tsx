import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const NoStoresAvailable: React.FC = () => {
  return (
    <Box
      width="206px"
      height="59px"
      padding="11.5px 14.79px"
      borderRadius="5px"
      border="1px solid #A7D6D4"
      backgroundColor="white"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Text
        fontFamily="Inter"
        fontSize="14px"
        fontWeight="500"
        lineHeight="18px"
        textAlign="center"
        color="#112D31"
      >
        No stores selling this product near you
      </Text>
    </Box>
  );
};

export default NoStoresAvailable;
