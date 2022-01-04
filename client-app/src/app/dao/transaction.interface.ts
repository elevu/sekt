export interface ITransaction {
    id: string | null;
    company: string;
    endDate: string;
    lastModified?: string;
    amount?: number;
}
