export interface ICompany{
    companyId: number,
    companyName: string,
    phone: string,
    email: string,
    location: string
}

export interface ICompanyWithoutId{
    companyName: string,
    phone: string,
    email: string,
    location: string
}