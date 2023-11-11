import Region from './region';

export default interface Country {
  id?: number,
  country: string,
  region: Region,
  price: number,
}
