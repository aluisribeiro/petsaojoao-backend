import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTutorsTable1602518961829 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

        await queryRunner.createTable(new Table({
            name: 'tutorsTest',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()',
                },
                {
                    name: 'name',
                    type: 'varchar',
                },
                {
                    name: 'email',
                    type: 'varchar',
                    isUnique: true,
                },
                {
                    name: 'rg',
                    type: 'varchar',
                    isUnique: true,
                },
                {
                    name: 'cpf',
                    type: 'varchar',
                    isUnique: true,
                },
                {
                    name: 'cep',
                    type: 'varchar',
                },
                {
                    name: 'whatsapp',
                    type: 'varchar',
                },
                {
                    name: 'phone',
                    type: 'varchar',
                },
                {
                    name: 'street',
                    type: 'varchar',
                },
                {
                    name: 'number',
                    type: 'varchar',
                },
                {
                    name: 'area',
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
