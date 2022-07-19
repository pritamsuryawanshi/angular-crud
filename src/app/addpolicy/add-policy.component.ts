import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-addpolicy',
  templateUrl: './add-policy.component.html',
  styleUrls: ['./add-policy.component.css']
})

export class AddPolicyComponent implements OnInit {

  firstName: any;
  lastName: any;
  policyNumber: String = "";

  constructor(private http: HttpClient, private router: Router) {
  }

  ngOnInit(): void {
    this.getPolicyNumber();
  }

  addPolicy() {

    let myObject = {
      "policyNumber": this.policyNumber,
      "firstName": this.firstName,
      "lastName": this.lastName
    }

    this.http.post("http://localhost:8081/policy/addpolicy", myObject).subscribe(() =>
      this.router.navigateByUrl("")
    )
  }

  getPolicyNumber() {
    this.http.get("http://localhost:8081/policy/getpolicynumber", {responseType: "text"}).subscribe((data) =>
      this.policyNumber = data
    )
    console.log(this.policyNumber + " policy number")
  }
}
