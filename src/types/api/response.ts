export interface ApiResponse<T> {
  data: Entity<T>[];
  meta: Meta;
}

export interface Entity<T> {
  id: number;
  attributes: T;
}

export interface Populate<T> {
  data: Array<Entity<T>>;
}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
