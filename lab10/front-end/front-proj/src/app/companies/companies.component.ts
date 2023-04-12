import {Component, OnInit} from '@angular/core';
import {Company} from "../models";
import {CompaniesService} from "../companies.service";

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit{
  companies!: Company[]

  constructor(private companyService: CompaniesService) {
  }

  ngOnInit(): void {
    this.companyService.getCompanies().subscribe((companies: Company[]) => this.companies = companies);
  }

}
