export interface ApiMessage {
  code: number;
  description: string;
}

export interface ApiResponse<T> {
  data: T;
  mess: ApiMessage;
}
