export type IdType = ReturnType<typeof crypto.randomUUID> | string;

export interface OutputType {
  id: IdType;
  language: string;
  text: string;
}

export interface SavedItemType {
  id: IdType;
  query: {
    language: string;
    text: string;
  };
  outputs: OutputType[];
}
