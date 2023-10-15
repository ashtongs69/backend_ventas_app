export class ContactCustomerEntity {
  id: string;
  name: string;
  phoneNumber: string;
  address: string;
  constructor(data: {
    id: string;
    name: string;
    phoneNumber: string;
    address: string;
  }) {
    this.id = data.id;
    this.name = data.name;
    this.phoneNumber = data.phoneNumber;
    this.address = data.address;
  }
}

export class ContactCustomerQuery {
  id?: string;
  phoneNumber?: string;
}
