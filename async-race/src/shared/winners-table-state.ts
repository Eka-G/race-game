import type { WinnersOrder, WinnersSort } from '../types';

const winnersState: { startPage: number; currentPage: number; limit: number; sort?: WinnersSort; order: WinnersOrder } =
  {
    startPage: 1,
    currentPage: 1,
    limit: 10,
    order: 'ASD',
  };

export default winnersState;
