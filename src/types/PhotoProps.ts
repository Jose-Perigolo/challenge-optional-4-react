interface Photo {
    id: string;
    urls: {
      full: string;
      raw: string;
      regular: string;
      small: string;
      thumb: string;
    };
    alt_description: string | null;
    city: string;
    country: string;
    icon?: string;
}
  
export interface Photos extends Array<Photo>{}