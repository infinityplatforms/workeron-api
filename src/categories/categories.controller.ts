/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CategoriesService, Category } from './categories.service';

@ApiTags('Categories')
@Controller('api/v1/categories')
export class CategoriesController {
  constructor(private catSvc: CategoriesService) {}
  @Get()
  public getAllCategories(): Category[] {
    return this.catSvc.getCategories();
  }
}
