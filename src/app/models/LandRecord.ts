export class LandRecord {
  pid: number;
  wardNo: number;
  areaCode: number;
  siteNo: number;
  geoData: GeoData;
  owner: Owner;
  preMutationSketch: string;
  isMojaniApproved : boolean;
  constructor() { }

}

export class GeoData {
  latitude: number;
  longitude: number;
  length: number;
  width: number;
  totalArea: number;
  address: string;
  constructor() { }
}

export class Owner {
  ownerName: string;
  gender: string;
  aadharNo: number;
  mobileNo: number;
  emailID: string;
  address: string;
  constructor() { }

}
