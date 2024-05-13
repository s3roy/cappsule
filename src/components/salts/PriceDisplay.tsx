import React from 'react';
import { Text, Box } from '@chakra-ui/react';
import PriceTag from '../price/PriceTag';
import NoStoresAvailable from '../price/NoStoresAvailable';

interface Pharmacy {
  pharmacy_id: number;
  selling_price: number;
}

interface PriceDisplayProps {
  saltFormsJson: any;
  selectedForm: string;
  selectedStrength: string;
  selectedPackaging: string;
}

const PriceDisplay: React.FC<PriceDisplayProps> = ({
  saltFormsJson,
  selectedForm,
  selectedStrength,
  selectedPackaging,
}) => {
  const getLowestPrice = (): number | null => {
    const products =
      saltFormsJson[selectedForm]?.[selectedStrength]?.[selectedPackaging];
    if (!products) {
      return null;
    }

    let lowestPrice: number | null = null;
    Object.keys(products).forEach((productID) => {
      const pharmacies: Pharmacy[] = products[productID];
      if (pharmacies) {
        pharmacies.forEach((pharmacy) => {
          if (lowestPrice === null || pharmacy.selling_price < lowestPrice) {
            lowestPrice = pharmacy.selling_price;
          }
        });
      }
    });

    return lowestPrice;
  };

  const lowestPrice = getLowestPrice();

  return (
    <Box textAlign="center">
      {lowestPrice === null ? (
        <NoStoresAvailable />
      ) : (
        <PriceTag price={lowestPrice} />
      )}
    </Box>
  );
};

export default PriceDisplay;
