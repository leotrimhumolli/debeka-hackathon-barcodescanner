import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { ProductPageDetails } from './product-detail-page.component';
import {ExpandableComponent} from './expandable/expandable.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild([
            {
                path: '',
                component: ProductPageDetails
            }
        ]),
    ],
  declarations: [ProductPageDetails, ExpandableComponent]
})
export class ProductPageDetailsModule {}
