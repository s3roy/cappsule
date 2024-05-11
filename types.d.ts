interface PharmacyPrice {
  [pharmacyId: string]: { selling_price: number } | null;
}

interface Packaging {
  [packaging: string]: PharmacyPrice;
}

interface Strength {
  [strength: string]: Packaging;
}

interface Form {
  [form: string]: Strength;
}

interface SaltSuggestion {
  id: number;
  salt: string;
  salt_frequency: number;
  available_forms: string[];
  most_common: {
    Form: string;
    Strength: string;
    Packing: string;
  };
  salt_forms_json: Form;
}

interface ProductData {
  saltSuggestions: SaltSuggestion[];
}
