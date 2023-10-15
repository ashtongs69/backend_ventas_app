export interface IWriteRepository<T> {
  save(value: T): Promise<T | null>;
  deleteOne(id: string): Promise<void>;
}

export interface IReadRepository<T, R> {
  findOne(values: Partial<T>): Promise<R | null>;
  find(values: Partial<T>): Promise<R[] | []>;
}
