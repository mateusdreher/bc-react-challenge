export interface IGif {
  id: string;
  url: string;
  username: string;
  title: string;
  image: IImage;
}

interface IImage {
  height: string;
  width: string;
  size: string;
  url: string;
  hash: string;
}