export class ProviderEntity {
  id: string;
  name: string;
  type: ProviderType;

  constructor(data: { id: string; name: string; type: ProviderType }) {
    this.id = data.id;
    this.name = data.name;
    this.type = data.type;
  }
}
export type ProviderType = 'person' | 'company';
