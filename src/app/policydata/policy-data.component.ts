import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-policy-data',
  templateUrl: './policy-data.component.html',
  styleUrls: ['./policy-data.component.css']
})
export class PolicyDataComponent implements OnInit {
  newData: any;
  message: any;

  constructor(private http: HttpClient, private router: Router) {

  }

  ngOnInit(): void {
    this.getPolicy()
  }

  btnClick() {
    this.router.navigateByUrl('/app-policy-data');
  };

  getPolicy() {
    this.http.get("http://localhost:8081/policy/getpolicy").subscribe((data) => this.newData = data)
  }

  deletePolicy(id: any) {
    this.http.delete("http://localhost:8081/policy/deletepolicy?id=" + id).subscribe(data => {
      this.newData = data;
    })
  }


  editRouter(data: any) {
    console.log("editable data is " + JSON.stringify(data))
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "policynumber": data.policyNumber,
        "firstname": data.firstName,
        "lastname": data.lastName,
        "id": data.id
      }
    };
    this.router.navigate(["editpolicy"], navigationExtras);
  }
}
