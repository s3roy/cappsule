import CustomDivider from '@/components/customInputs/Divider';
import SearchInput from '@/components/customInputs/Search';
import SaltList from '@/components/salts/SaltList';
import useProducts from '@/hooks/useProducts';
import { Box, Text } from '@chakra-ui/react';
import { useState } from 'react';

export default function Home() {
  const [query, setQuery] = useState('');
  const { data, loading, error } = useProducts(query);

  const handleSearch = (value: string) => {
    setQuery(value);
  };

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

      <SearchInput onSearch={handleSearch} />

      <CustomDivider />

      {data && data.saltSuggestions ? (
        data.saltSuggestions.map((salt, index) => (
          <Box key={salt.id} mb={10} width="100%">
            <SaltList salt={salt} />
          </Box>
        ))
      ) : (
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
      )}
    </Box>
  );
}
