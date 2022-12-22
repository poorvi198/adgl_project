export interface Customer {
  id: number;
  licenceId: string;
  name: string;
  date: Date;
  fileName: string;
  cPrice: number;
  tPrice: number;
}

export interface CustomerData {
  id: number;
  licence_id: string;
  cust_name: string;
  date_modified: Date;
  file_name: string;
  price_c: number;
  price_t: number;
}

export function downloadFile(data: string, fileName: string) {
  const a = document.createElement('a');
  a.href = data;
  a.download =  fileName;
  a.click();
  a.remove();
}
