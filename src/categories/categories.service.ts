/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoriesService {
  protected list: Array<Category> = [
    {
      id: '1',
      name: 'Accommodation',
      color: 'accent',
      icon: 'fi-bed',
    },
    {
      id: '2',
      name: 'Food & Drink',
      color: 'warning',
      icon: 'fi-cafe',
    },
    {
      id: '3',
      name: 'Shopping',
      color: 'primary',
      icon: 'fi-shopping-bag',
    },
    {
      id: '4',
      name: 'Art & History',
      color: 'success',
      icon: 'fi-museum',
    },
    {
      id: '4',
      name: 'Entertainment',
      color: 'primary',
      icon: 'fi-entertainment',
    },
  ];

  public getCategories(filter?: CategoryListFilter) {
    if (filter) {
      return this.list.filter((x) => x.name.indexOf(filter.name));
    }
    return this.list;
  }
}

export class Category {
  id: string;
  name: string;
  color: string;
  icon: string;
}

export class CategoryListFilter {
  name?: string;
}
