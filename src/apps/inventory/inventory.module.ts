import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';

/* import { AuthGuard } from 'src/shared/guard/auth.guard';
import { PermmissionGuard } from 'src/shared/guard/permission.guard'; */

import { ColorCreatorUseCase } from './application/color/creator';
import { ColorGetAllUseCase } from './application/color/get-all';
import { ContactCustomerCreatorUseCase } from './application/contact-customer/creator';
import { ContactCustomerGetAllUseCase } from './application/contact-customer/get-all';
import { PhoneChangeCreatorUseCase } from './application/phone-change/creator';
import { PhoneChangeGetAllUseCase } from './application/phone-change/get-all';
import { PhoneModelCreatorUseCase } from './application/phone-model/creator';
import { PhoneModelGetAllUseCase } from './application/phone-model/get-all';
import { ProductInventoryPhoneChangeStatusUseCase } from './application/product-inventory-phone/change-status';
import { ProductInventoryPhoneCreatorUseCase } from './application/product-inventory-phone/creator';
import { ProductInventoryPhoneGetByNameUseCase } from './application/product-inventory-phone/find-by-name';
import { ProductInventoryPhoneGetByIdUseCase } from './application/product-inventory-phone/get-by-id';
import { ProductInventoryPhoneGetByQueryUseCase } from './application/product-inventory-phone/get-by-query';
import { ProductInventoryPhoneUpdatorUseCase } from './application/product-inventory-phone/updator';
import { ProductInventoryTechnicalAssignTecnicalUseCase } from './application/product-inventory-technical/assign-technical.ts';
import { ProductInventoryTechnicalChangeStatusUseCase } from './application/product-inventory-technical/change-status';
import { ProductInventoryTechnicalFixPhoneUseCase } from './application/product-inventory-technical/fix-phone';
import { ProductInventoryTechnicalGetByQueryUseCase } from './application/product-inventory-technical/get-by-query';
import { ProviderCreatorUseCase } from './application/provider/creator';
import { ProviderGetAllUseCase } from './application/provider/get-all';
import { SalesCreatorUseCase } from './application/sales/creator';
import { SalesGetAllUseCase } from './application/sales/get-all';
import { StorageCreatorUseCase } from './application/storage/creator';
import { StorageGetAllUseCase } from './application/storage/get-all';
import { StoreCreatorUseCase } from './application/store/creator';
import { StoreGetAllUseCase } from './application/store/get-all';
import { TypeDamageCreatorUseCase } from './application/type-damange/creator';
import { TypeDamageGetAllUseCase } from './application/type-damange/get-all';
import { ColorController } from './infrastructure/controller/color.controller';
import { CustomerContactController } from './infrastructure/controller/customer-contact.controller';
import { PhoneChangeController } from './infrastructure/controller/phone-change.controller';
import { PhoneModelController } from './infrastructure/controller/phone-model.controller';
import { ProductInventoryPhoneController } from './infrastructure/controller/product-inventory-phone.controller';
import { ProductInventoryTechnicalController } from './infrastructure/controller/product-inventory-technical.controller';
import { ProviderController } from './infrastructure/controller/provider.controller';
import { SalesController } from './infrastructure/controller/sales.controller';
import { StorageController } from './infrastructure/controller/storage.controller';
import { StoreController } from './infrastructure/controller/store.controller';
import { TypeDamageController } from './infrastructure/controller/type-damage.controller';
import { Color } from './infrastructure/entities/Color.entity';
import { ContactCustomer } from './infrastructure/entities/ContactCustomer.entity';
import { PhoneChange } from './infrastructure/entities/PhoneChange.entity';
import { PhoneModel } from './infrastructure/entities/PhoneModel.entity';
import { ProductInventoryPhone } from './infrastructure/entities/ProductInventoryPhone.entity';
import { ProductInventoryTechnical } from './infrastructure/entities/ProductInventoryTechnical.entity';
import { Provider } from './infrastructure/entities/Provider.entity';
import { Sales } from './infrastructure/entities/Sales.entity';
import { Storage } from './infrastructure/entities/Storage.entity';
import { Store } from './infrastructure/entities/Store.entity';
import { TypeDamage } from './infrastructure/entities/TypeDamage.entity';
import { ColorRepository } from './infrastructure/repository/Color.repository';
import { ContactCustomerRepository } from './infrastructure/repository/ContactCustomer.repository';
import { PhoneChangeRepository } from './infrastructure/repository/PhoneChange.repository';
import { PhoneModelRepository } from './infrastructure/repository/PhoneModel.repository';
import { ProductInventoryPhoneRepository } from './infrastructure/repository/ProductInventoryPhone.repository';
import { ProductInventoryTechnicalRepository } from './infrastructure/repository/ProductInventoryTechnical.repository';
import { ProviderRepository } from './infrastructure/repository/Provider.repository';
import { SalesRepository } from './infrastructure/repository/Sales.repository';
import { StorageRepository } from './infrastructure/repository/Storage.repository';
import { StoreRepository } from './infrastructure/repository/Store.repository';
import { TypeDamageRepository } from './infrastructure/repository/TypeDamage.repository';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    //ENTITIES
    UserModule,
    CqrsModule,
    TypeOrmModule.forFeature([
      Provider,
      Storage,
      PhoneModel,
      Color,
      ProductInventoryPhone,
      ProductInventoryTechnical,
      TypeDamage,
      ContactCustomer,
      PhoneChange,
      Store,
      Sales,
    ]),
  ],
  controllers: [
    ColorController,
    PhoneModelController,
    ProviderController,
    StorageController,
    ProductInventoryTechnicalController,
    ProductInventoryPhoneController,
    CustomerContactController,
    PhoneChangeController,
    TypeDamageController,
    StoreController,
    SalesController,
  ],
  providers: [
    // EVENTS

    //USE CASE COLOR
    ColorGetAllUseCase,
    ColorCreatorUseCase,
    //USE CASE PHONE-MODEL
    PhoneModelGetAllUseCase,
    PhoneModelCreatorUseCase,
    //USE CASE PROVIDER
    ProviderGetAllUseCase,
    ProviderCreatorUseCase,
    //USE CASE STORAGE
    StorageGetAllUseCase,
    StorageCreatorUseCase,

    //USE CASE PRODUCT INVENTORY PHONE
    ProductInventoryPhoneGetByQueryUseCase,
    ProductInventoryPhoneChangeStatusUseCase,
    ProductInventoryPhoneCreatorUseCase,
    ProductInventoryPhoneUpdatorUseCase,
    ProductInventoryPhoneGetByIdUseCase,

    //USE CASE PRODUCT INVENTORY TECHNICAL
    ProductInventoryTechnicalAssignTecnicalUseCase,
    ProductInventoryTechnicalChangeStatusUseCase,
    ProductInventoryTechnicalGetByQueryUseCase,
    ProductInventoryTechnicalFixPhoneUseCase,
    ProductInventoryPhoneGetByNameUseCase,
    //Contact Customer
    ContactCustomerCreatorUseCase,
    ContactCustomerGetAllUseCase,
    //PhoneChange
    PhoneChangeCreatorUseCase,
    PhoneChangeGetAllUseCase,

    //Type Damage Use Case
    TypeDamageGetAllUseCase,
    TypeDamageCreatorUseCase,

    //Store
    StoreCreatorUseCase,
    StoreGetAllUseCase,

    //Sales
    SalesCreatorUseCase,
    SalesGetAllUseCase,

    //REPOSITORY
    ColorRepository,
    PhoneModelRepository,
    ProviderRepository,
    StorageRepository,
    ProductInventoryPhoneRepository,
    ContactCustomerRepository,
    ProductInventoryTechnicalRepository,
    PhoneChangeRepository,
    TypeDamageRepository,
    StoreRepository,
    SalesRepository,

    // AUTHORIZATION
    //AuthGuard,
    //PermmissionGuard,
  ],
  exports: [],
})
export class InventoryModule {}
