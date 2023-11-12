import Region from './region';

export default interface Country {
  id?: number,
  country: string,
  idRegion: Region,
  price: number,
}
