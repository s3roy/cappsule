import { Box, Text } from '@chakra-ui/react';
import React from 'react';

interface PriceTagProps {
  price: number; // Assuming you're passing only the number part as a prop
}

const PriceTag: React.FC<PriceTagProps> = ({ price }) => {
  return (
    <Box color="#112D31" display="flex" alignItems="center">
      <Text
        fontSize="28px"
        fontWeight="800"
        lineHeight="33.89px"
        fontFamily="Inter"
      >
        From
      </Text>
      <Text
        as="span"
        fontSize="28px"
        fontWeight="800"
        lineHeight="42px"
        fontFamily="Poppins"
      >
        ₹{price}
      </Text>
    </Box>
  );
};

export default PriceTag;
