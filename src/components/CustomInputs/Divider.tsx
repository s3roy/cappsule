import { Box, Divider } from '@chakra-ui/react';

// Define an interface for component props
interface CustomDividerProps {
  borderColor?: string;
  borderWidth?: string;
  padding?: string;
  backgroundColor?: string;
  marginY?: string;
  paddingX?: string;
}

// Component definition with props
const CustomDivider: React.FC<CustomDividerProps> = ({
  borderColor = '#CDCDCD',
  borderWidth = '1px',
  padding = '4',
  backgroundColor = 'white',
  marginY = '10',
  paddingX = '5',
}) => {
  return (
    <Box
      width="full"
      p={padding}
      backgroundColor={backgroundColor}
      my={marginY}
      px={paddingX}
    >
      <Divider borderColor={borderColor} borderWidth={borderWidth} />
    </Box>
  );
};

export default CustomDivider;
