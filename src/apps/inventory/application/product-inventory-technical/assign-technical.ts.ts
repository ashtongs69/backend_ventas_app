import { Injectable, NotFoundException } from '@nestjs/common';

import { UserRepository } from 'src/apps/user/infrastructure/repository/user.repository';
import { IUseCase } from 'src/global';

import { EStatusProductInventoryTechnical } from '../../domain/entities/ProductInventoryTechnicalEntity';
import { ProductInventoryTechnicalRepository } from '../../infrastructure/repository/ProductInventoryTechnical.repository';

interface IInput {
  productId: string;
  technicalId: string;
}

@Injectable()
export class ProductInventoryTechnicalAssignTecnicalUseCase
  implements IUseCase<IInput, void>
{
  constructor(
    private productInventoryTechnicalRepository: ProductInventoryTechnicalRepository,
    private userRepository: UserRepository,
  ) {}

  async execute({ productId, technicalId }: IInput): Promise<void> {
    const product = await this.productInventoryTechnicalRepository.findOne({
      id: productId,
    });

    if (!product) {
      throw new NotFoundException('no se encotro item tecnico');
    }

    const user = await this.userRepository.findOne({ id: technicalId });

    if (!user) {
      throw new NotFoundException('no se encotro usuario');
    }

    product.status = EStatusProductInventoryTechnical.IN_PROCESS_REPAIR;

    product.technical = user;

    await this.productInventoryTechnicalRepository.save(product);
  }
}
