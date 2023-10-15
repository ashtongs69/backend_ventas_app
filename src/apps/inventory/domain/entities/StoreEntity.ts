export class StoreEntity {
  id: string;
  name: string;
  address: string;
  constructor(data: { id: string; name: string; address: string }) {
    this.id = data.id;
    this.name = data.name;
    this.address = data.address;
  }
}
