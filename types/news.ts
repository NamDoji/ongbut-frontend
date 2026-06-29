export interface BlogCategory {
  id: string;
  blogId: string;
  categoryId: string;
  category: string;
}

export interface BlogItem {
  blogId: string;
  title: string;
  keyword: string;
  shortContent: string;
  deviceType: string;
  urlImageRepresent: string;
  mediaUnit: string;
  categoryId: string;
  createDate: string;
  createUser: string;
  publicBlog: boolean;
  sortedDate: number;
  categories: BlogCategory[];
}

export interface BlogDetail extends BlogItem {
  content?: string;
  htmlContent?: string;
}
