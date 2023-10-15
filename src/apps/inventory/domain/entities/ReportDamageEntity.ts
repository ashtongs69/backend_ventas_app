export class ReportDamageEntity {
  id: string;
  name: string;
  description: string;
  constructor(data: { id: string; name: string; description: string }) {
    this.id = data.id;
    this.name = data.name;
    this.description = data.description;
  }
}
