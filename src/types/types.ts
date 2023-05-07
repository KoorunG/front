export type Post = {
  id: number;
  title: string;
  content: string;
};

export type PostSaveRequest = {
  title: string,
  content: string
}