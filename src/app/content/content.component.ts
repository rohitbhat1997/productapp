import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  taxIndex: number = 0;
  subscribeParams!: Subscription;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getRoute();
  }
  /**
  * @method getRoute
  * @description For Getting The Routed Parameters
  */
  getRoute() {
    this.subscribeParams = this.activatedRoute.params.subscribe(resRoute => {
      if (resRoute.value) {
        this.taxIndex = 1;
      } else if (resRoute.value === 'two') {
        this.taxIndex = 2;
      }
    });
  }
  onTabChanged(event: any) {
    if (this.taxIndex === 1) {
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/content', 'two'], { skipLocationChange: true });
      });
    }

  }

}
