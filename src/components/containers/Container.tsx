import { Box } from '@chakra-ui/react';
import { useRouter } from 'next/router';

interface CustomContainerProps {
  children?: React.ReactNode;
}

const CustomContainer: React.FC<CustomContainerProps> = ({ children }) => {
  const router = useRouter();

  const handleClick = () => {
    console.log('Container clicked');
  };

  return (
    <Box
      width="100%"
      minHeight="231px"
      maxHeight="auto"
      position="relative"
      borderRadius="15px"
      opacity="1"
      boxShadow="0px 0px 30px 0px rgba(0, 0, 0, 0.1)"
      bgGradient="linear-gradient(275.41deg, #D5E7E6 -27.33%, #FFFFFF 46.85%)"
      onClick={handleClick}
      cursor="pointer"
      overflow="hidden"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      px={8}
      py={5}
    >
      {children}
    </Box>
  );
};

export default CustomContainer;
