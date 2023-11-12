import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migrations1699324096557 implements MigrationInterface {
  name = 'Migrations1699324096557';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "frecuency" ("id" character varying NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_c3202ebca109acfd0b57ce68429" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "recomendations" ("id" character varying NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_da2bebfc90f32376668a1060146" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "type_plague" ("id" character varying NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_1f4e86d2712c8ec7e42f2d55a69" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "type_service" ("id" character varying NOT NULL, "name" character varying NOT NULL, "price" integer NOT NULL, CONSTRAINT "PK_3d5d41ad1d5edfbdc95e36ed7b3" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "plague" ("id" character varying NOT NULL, "date" TIMESTAMP WITH TIME ZONE NOT NULL, "cost" integer NOT NULL, "observations" text NOT NULL, "type" character varying NOT NULL, "status" character varying NOT NULL, "shouldFollowUp" boolean, "daysFollowUp" integer, "dateFollowUp" TIMESTAMP WITH TIME ZONE, "clientId" character varying, CONSTRAINT "PK_a65012994f4cadf9d3ff07bbf85" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "client" ("id" character varying NOT NULL, "name" character varying NOT NULL, "address" character varying NOT NULL, "phone" character varying NOT NULL, CONSTRAINT "PK_96da49381769303a6515a8785c7" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "user" ("id" character varying NOT NULL, "name" character varying NOT NULL, "phone" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "refreshToken" character varying, "accessToken" character varying, "roleId" character varying, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "role" ("id" character varying NOT NULL, "name" character varying NOT NULL, "code" character varying NOT NULL DEFAULT 'RL002', CONSTRAINT "PK_b36bcfe02fc8de3c57a8b2391c2" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "permission" ("id" character varying NOT NULL, "name" character varying NOT NULL, "route" character varying NOT NULL, "permissions" json NOT NULL, "roleId" character varying, CONSTRAINT "PK_3b8b97af9d9d8807e41e6f48362" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "plague_type_plague_type_plague" ("plagueId" character varying NOT NULL, "typePlagueId" character varying NOT NULL, CONSTRAINT "PK_a9dd735b03de3638e098269789e" PRIMARY KEY ("plagueId", "typePlagueId"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_ca794725d94ccbbbdad1b953e8" ON "plague_type_plague_type_plague" ("plagueId") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_b8b251a94090455b5a8625492c" ON "plague_type_plague_type_plague" ("typePlagueId") `,
    );
    await queryRunner.query(
      `CREATE TABLE "plague_type_service_type_service" ("plagueId" character varying NOT NULL, "typeServiceId" character varying NOT NULL, CONSTRAINT "PK_6dc2f034897543510f5539e79c6" PRIMARY KEY ("plagueId", "typeServiceId"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_50ac2d8d3f19dd5033014b3c1f" ON "plague_type_service_type_service" ("plagueId") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_a672d324fdc960c8b82b5bedac" ON "plague_type_service_type_service" ("typeServiceId") `,
    );
    await queryRunner.query(
      `CREATE TABLE "plague_frecuency_frecuency" ("plagueId" character varying NOT NULL, "frecuencyId" character varying NOT NULL, CONSTRAINT "PK_4e9e382d4d97f0db6cb6b14017a" PRIMARY KEY ("plagueId", "frecuencyId"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_d3f79d1101e90208ba04a8690d" ON "plague_frecuency_frecuency" ("plagueId") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_9023d2b66e0ab90367a879dfd7" ON "plague_frecuency_frecuency" ("frecuencyId") `,
    );
    await queryRunner.query(
      `CREATE TABLE "plague_recomendations_recomendations" ("plagueId" character varying NOT NULL, "recomendationsId" character varying NOT NULL, CONSTRAINT "PK_aae3ee71f7ec5934ac6ed4056b2" PRIMARY KEY ("plagueId", "recomendationsId"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_76185fd832495384044c85d0bb" ON "plague_recomendations_recomendations" ("plagueId") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_eb8f992fbba345e809c96f302d" ON "plague_recomendations_recomendations" ("recomendationsId") `,
    );
    await queryRunner.query(
      `ALTER TABLE "plague" ADD CONSTRAINT "FK_9997571c705fdfb874e147a8f33" FOREIGN KEY ("clientId") REFERENCES "client"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD CONSTRAINT "FK_c28e52f758e7bbc53828db92194" FOREIGN KEY ("roleId") REFERENCES "role"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "permission" ADD CONSTRAINT "FK_cdb4db95384a1cf7a837c4c683e" FOREIGN KEY ("roleId") REFERENCES "role"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "plague_type_plague_type_plague" ADD CONSTRAINT "FK_ca794725d94ccbbbdad1b953e89" FOREIGN KEY ("plagueId") REFERENCES "plague"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "plague_type_plague_type_plague" ADD CONSTRAINT "FK_b8b251a94090455b5a8625492c0" FOREIGN KEY ("typePlagueId") REFERENCES "type_plague"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "plague_type_service_type_service" ADD CONSTRAINT "FK_50ac2d8d3f19dd5033014b3c1f3" FOREIGN KEY ("plagueId") REFERENCES "plague"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "plague_type_service_type_service" ADD CONSTRAINT "FK_a672d324fdc960c8b82b5bedac9" FOREIGN KEY ("typeServiceId") REFERENCES "type_service"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "plague_frecuency_frecuency" ADD CONSTRAINT "FK_d3f79d1101e90208ba04a8690d4" FOREIGN KEY ("plagueId") REFERENCES "plague"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "plague_frecuency_frecuency" ADD CONSTRAINT "FK_9023d2b66e0ab90367a879dfd74" FOREIGN KEY ("frecuencyId") REFERENCES "frecuency"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "plague_recomendations_recomendations" ADD CONSTRAINT "FK_76185fd832495384044c85d0bb0" FOREIGN KEY ("plagueId") REFERENCES "plague"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "plague_recomendations_recomendations" ADD CONSTRAINT "FK_eb8f992fbba345e809c96f302d1" FOREIGN KEY ("recomendationsId") REFERENCES "recomendations"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "plague_recomendations_recomendations" DROP CONSTRAINT "FK_eb8f992fbba345e809c96f302d1"`,
    );
    await queryRunner.query(
      `ALTER TABLE "plague_recomendations_recomendations" DROP CONSTRAINT "FK_76185fd832495384044c85d0bb0"`,
    );
    await queryRunner.query(
      `ALTER TABLE "plague_frecuency_frecuency" DROP CONSTRAINT "FK_9023d2b66e0ab90367a879dfd74"`,
    );
    await queryRunner.query(
      `ALTER TABLE "plague_frecuency_frecuency" DROP CONSTRAINT "FK_d3f79d1101e90208ba04a8690d4"`,
    );
    await queryRunner.query(
      `ALTER TABLE "plague_type_service_type_service" DROP CONSTRAINT "FK_a672d324fdc960c8b82b5bedac9"`,
    );
    await queryRunner.query(
      `ALTER TABLE "plague_type_service_type_service" DROP CONSTRAINT "FK_50ac2d8d3f19dd5033014b3c1f3"`,
    );
    await queryRunner.query(
      `ALTER TABLE "plague_type_plague_type_plague" DROP CONSTRAINT "FK_b8b251a94090455b5a8625492c0"`,
    );
    await queryRunner.query(
      `ALTER TABLE "plague_type_plague_type_plague" DROP CONSTRAINT "FK_ca794725d94ccbbbdad1b953e89"`,
    );
    await queryRunner.query(
      `ALTER TABLE "permission" DROP CONSTRAINT "FK_cdb4db95384a1cf7a837c4c683e"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" DROP CONSTRAINT "FK_c28e52f758e7bbc53828db92194"`,
    );
    await queryRunner.query(
      `ALTER TABLE "plague" DROP CONSTRAINT "FK_9997571c705fdfb874e147a8f33"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_eb8f992fbba345e809c96f302d"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_76185fd832495384044c85d0bb"`,
    );
    await queryRunner.query(
      `DROP TABLE "plague_recomendations_recomendations"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_9023d2b66e0ab90367a879dfd7"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_d3f79d1101e90208ba04a8690d"`,
    );
    await queryRunner.query(`DROP TABLE "plague_frecuency_frecuency"`);
    await queryRunner.query(
      `DROP INDEX "public"."IDX_a672d324fdc960c8b82b5bedac"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_50ac2d8d3f19dd5033014b3c1f"`,
    );
    await queryRunner.query(`DROP TABLE "plague_type_service_type_service"`);
    await queryRunner.query(
      `DROP INDEX "public"."IDX_b8b251a94090455b5a8625492c"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_ca794725d94ccbbbdad1b953e8"`,
    );
    await queryRunner.query(`DROP TABLE "plague_type_plague_type_plague"`);
    await queryRunner.query(`DROP TABLE "permission"`);
    await queryRunner.query(`DROP TABLE "role"`);
    await queryRunner.query(`DROP TABLE "user"`);
    await queryRunner.query(`DROP TABLE "client"`);
    await queryRunner.query(`DROP TABLE "plague"`);
    await queryRunner.query(`DROP TABLE "type_service"`);
    await queryRunner.query(`DROP TABLE "type_plague"`);
    await queryRunner.query(`DROP TABLE "recomendations"`);
    await queryRunner.query(`DROP TABLE "frecuency"`);
  }
}
