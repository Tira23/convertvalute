export interface Currency {
    ID: string;
    NumCode: string;
    CharCode: string;
    Nominal: number;
    Name: string;
    Value: number;
    Previous: number;
}

export interface Valute {
    AUD: Currency;
}
export interface Api {
    Date: string;
    PreviousDate: string;
    PreviousURL: string;
    Timestamp: string;
    "Valute": Valute
}
