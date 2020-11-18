import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTutorsTable1602518961829 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

        await queryRunner.createTable(new Table({
            name: 'tutorsTest',
            columns: [
                {
                    name: 'id', 
                    isNullable:false,
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()',
                },
                {
                    name: 'name',
                    isNullable:false,
                    type: 'varchar',
                },
                {
                    name: 'email',
                    isNullable:false,
                    type: 'varchar',
                    isUnique: true,
                },
                {
                    name: 'rg',
                    isNullable:false,
                    type: 'varchar',
                    isUnique: true,
                },
                {
                    name: 'cpf',
                    isNullable:false,
                    type: 'varchar',
                    isUnique: true,
                },
                {
                    name: 'cep',
                    isNullable:false,
                    type: 'varchar',
                },
                {
                    name: 'whatsapp',
                    type: 'varchar',
                },
                {
                    name: 'phone',
                    isNullable:false,
                    type: 'varchar',
                },
                {
                    name: 'street',
                    isNullable:false,
                    type: 'varchar',
                },
                {
                    name: 'number',
                    isNullable:false,
                    type: 'varchar',
                },
                {
                    name: 'area',
                    isNullable:false,
                    type: 'varchar',
                },
                {
                    name: 'complement',
                    type: 'varchar',
                    isUnique: true,
                },
            ],
        }));

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('tutorsTest');
        await queryRunner.query('DROP EXTENSION "uuid-ossp"');
    }

}
