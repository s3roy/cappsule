/**
 * Represents a pharmacy with its unique identifier and the selling price of a product.
 */
interface Pharmacy {
  pharmacy_id: number;
  selling_price: number;
}

/**
 * Defines the structure of a product available in different pharmacies.
 * Each key is a unique identifier for a product variant, mapping to an array of pharmacies selling that variant.
 */
interface Product {
  [key: string]: Pharmacy[] | null;
}

/**
 * Represents packaging options for a product, where each key is a packaging type linked to product information.
 */
interface Packaging {
  [key: string]: Product;
}

/**
 * Represents the different strengths of a product, where each key is a strength measurement linked to packaging options.
 */
interface Strength {
  [key: string]: Packaging;
}

/**
 * Represents the different forms of a product, such as tablet, capsule, etc., where each key links to various strengths available.
 */
interface Form {
  [key: string]: Strength;
}

/**
 * Describes a salt (active ingredient) and its various formulations, typically used in pharmaceutical contexts.
 */
interface SaltSuggestion {
  name: string;
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

/**
 * The top-level structure encapsulating all data related to salt suggestions in the product context.
 */
interface ProductData {
  saltSuggestions: SaltSuggestion[];
}
