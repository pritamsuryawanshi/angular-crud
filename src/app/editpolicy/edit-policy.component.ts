import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-editpolicy',
  templateUrl: './edit-policy.component.html',
  styleUrls: ['./edit-policy.component.css']
})
export class EditPolicyComponent implements OnInit {
  policyNumber: any;
  firstName: any;
  lastName: any;
  id: any;

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {

  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log("data is " + JSON.stringify(params))
      this.policyNumber = params["policynumber"];
      this.firstName = params["firstname"];
      this.lastName = params["lastname"];
      this.id = params["id"];
    });
  }

  updatePolicy() {
    let myObject = {
      "id": this.id,
      "policyNumber": this.policyNumber,
      "firstName": this.firstName,
      "lastName": this.lastName
    }

    console.log(JSON.stringify(myObject))
    this.http.put("http://localhost:8081/policy/editpolicy", myObject).subscribe(data => {
      console.log("updated data is " + JSON.stringify(data));
      this.router.navigateByUrl("")
    })
  }
}
