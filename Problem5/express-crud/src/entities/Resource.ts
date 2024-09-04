import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Resource {
  @PrimaryGeneratedColumn()
  id!: number;  // Use '!' para indicar que a propriedade será definida

  @Column()
  name: string;

  @Column()
  description: string;

  // Construtor opcional
  constructor(name: string, description: string) {
    this.name = name;
    this.description = description;
  }
}
