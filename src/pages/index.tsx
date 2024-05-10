import CustomButton from '@/components/CustomInputs/Button';
import CustomDivider from '@/components/CustomInputs/Divider';
import SearchInput from '@/components/CustomInputs/Search';
import { Box, Text } from '@chakra-ui/react';
import { Inter } from 'next/font/google';

export default function Home() {
  const handleButtonClick = () => {};
  return (
    <Box
      mx="10vw"
      my={5}
      display="flex"
      alignItems="center"
      flexDirection="column"
    >
      <Text
        fontFamily="Poppins, sans-serif"
        fontSize="24px"
        fontWeight="400"
        lineHeight="36px"
        textAlign="left"
        py={10}
      >
        Cappsule web development test
      </Text>

      <SearchInput onSearch={() => {}} />

      <CustomDivider />

      <Box mt={200}>
        <Text
          fontFamily="Poppins, sans-serif"
          fontSize="20px"
          fontWeight="600"
          lineHeight="36px"
          textAlign="left"
          color="#888888"
        >
          “ Find medicines with amazing discount “
        </Text>
      </Box>

      <CustomButton
        isSelected={true}
        isAvailable={true}
        onClick={handleButtonClick}
        label="Selected"
      />
      <CustomButton
        isSelected={false}
        isAvailable={true}
        onClick={handleButtonClick}
        label="Not Selected"
      />
      <CustomButton
        isSelected={false}
        isAvailable={false}
        onClick={handleButtonClick}
        label="Not Available and Not Selected"
      />
      <CustomButton
        isSelected={true}
        isAvailable={false}
        onClick={handleButtonClick}
        label="Not Available and Selected"
      />
    </Box>
  );
}
