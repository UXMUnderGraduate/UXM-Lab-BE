import { PartialType } from '@nestjs/mapped-types';
import { CreateResearchDto } from './create-admin.dto';

export class UpdateResearchDto extends PartialType(CreateResearchDto) {}
