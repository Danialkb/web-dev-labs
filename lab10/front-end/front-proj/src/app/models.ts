export interface Company {
  id: bigint
  name: string
  description: string
  city: string
  address: string
}

export interface Vacancy {
  id: bigint
  name: string
  description: string
  salary: number
}
