import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {
  transform(array: any[], field: string, order: 'asc' | 'desc'): any[] {
    if (!Array.isArray(array) || !field || !order) {
      return array;
    }

    const sortedArray = array.sort((a, b) => {
      const aValue = a[field];
      const bValue = b[field];
      if (aValue < bValue) {
        return order === 'asc' ? -1 : 1;
      }
      if (aValue > bValue) {
        return order === 'asc' ? 1 : -1;
      }
      return 0;
    });

    return sortedArray;
  }
}
