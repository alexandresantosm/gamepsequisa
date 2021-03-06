export type RecordsResponse = {
  content: RecordItem[];
  totalPages: number;
}

export type RecordItem = {
  id: number;
  moment: string;
  name: string;
  age: number;
  gamePlatform: Platform;
  genreName: string;
  gameTitle: string;
}

export type Platform = 'XBOX' | 'PC' | 'PLAYSTATION';