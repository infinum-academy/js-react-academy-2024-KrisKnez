export interface IPagination {
  count: number;
  page: number;
  items: number;
  pages: number;
}

export interface IMeta {
  pagination: IPagination;
}