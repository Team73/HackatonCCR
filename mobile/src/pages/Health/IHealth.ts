export interface IHistory {
  id?: number;
  image: { uri: string };
  title: string;
  doctor: string;
  address: string;
  date: Date;
  isScheduled: boolean;
}
