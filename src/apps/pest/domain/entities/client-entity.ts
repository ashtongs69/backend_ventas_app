export class ClientEntity {
  id: string;
  name: string;
  address: string;
  phone: string;
  constructor(data: {
    id: string;
    name: string;
    address: string;
    phone: string;
  }) {
    this.id = data.id;
    this.name = data.name;
    this.address = data.address;
    this.phone = data.phone;
  }
}
