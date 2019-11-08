export interface RoomDetailModel {
  id: number;
  name: string;
  address: string;
  tel: string;
  coordinates: string;
  thumb: string;
  size:string;
  attention: string;
  introduce: string;
  wake: boolean;
  water: boolean;
  wifi: boolean;
  park: boolean;
  breakfast: boolean;
  unionPay: boolean;
  gym: boolean;
  boardroom: boolean;
  window: boolean;
  bed: number;
  floor: string;
  people: number;
  facilities: string;
  price:string;
  hotel: {
    name: string;
    address: string;
    tel: string;
  };
  photos: Array<string>;
  data: Array<{
    time: number;
    date: string;
    room_num: number;
    room_price: string;
    status: number;
  }>;
}
