export interface CothData {
  month: string;
  mau: number;
  dau: number;
  cac: number;
  ltv: number;
  conversionRate: number;
  monthlyRevenue: number; // In Million KRW
}

export interface Period {
  start: string;
  end: string;
}

export interface SegmentData {
  name: string;
  growth: number;
}

export interface CountryData {
  name: string;
  value: number;
}
