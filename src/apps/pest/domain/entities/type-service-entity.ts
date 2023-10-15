export class TypeServiceEntity {
  id: string;
  name: string;
  price?: number;

  constructor(data: { id: string; name: string; price?: number }) {
    this.id = data.id;
    this.name = data.name;
    this.price = data.price;
  }
}
