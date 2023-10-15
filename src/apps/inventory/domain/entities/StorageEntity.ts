export class StorageEntity {
  id: string;
  quantity: number;

  constructor(data: { id: string; quantity: number }) {
    this.id = data.id;
    this.quantity = data.quantity;
  }
}
