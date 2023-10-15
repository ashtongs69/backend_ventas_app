import { Injectable, NotFoundException } from '@nestjs/common';

import { UserRepository } from 'src/apps/user/infrastructure/repository/user.repository';
import { IUseCase } from 'src/global';
import { generateUUID } from 'src/shared/utils/generateUUID';

import { SalesEntity } from '../../domain/entities/SalesEntity';
import { CreateSalesDto } from '../../infrastructure/dto/sales.dto';
import { ContactCustomerRepository } from '../../infrastructure/repository/ContactCustomer.repository';
import { ProductInventoryPhoneRepository } from '../../infrastructure/repository/ProductInventoryPhone.repository';
import { SalesRepository } from '../../infrastructure/repository/Sales.repository';

@Injectable()
export class SalesCreatorUseCase
  implements IUseCase<CreateSalesDto, SalesEntity>
{
  constructor(
    private salesRepository: SalesRepository,
    private productInventoryPhoneEntity: ProductInventoryPhoneRepository,
    private contactCustomerRepository: ContactCustomerRepository,
    private userRepository: UserRepository,
  ) {}
  async execute(data: CreateSalesDto): Promise<SalesEntity> {
    const products = await this.productInventoryPhoneEntity.findManyById(
      data.products,
    );

    const customer = await this.contactCustomerRepository.findOne({
      id: data.customer,
    });
    if (!customer) throw new NotFoundException('No se encontro customer');

    const user = await this.userRepository.findOne({
      id: data.user,
    });
    if (!user) throw new NotFoundException('No se encontro user');

    const newSalesEntity = new SalesEntity({
      id: generateUUID(),
      products,
      customer,
      total: 1,
      user,
    });
    console.log(newSalesEntity);

    const newSales = await this.salesRepository.save(newSalesEntity);
    return newSales;
  }
}
