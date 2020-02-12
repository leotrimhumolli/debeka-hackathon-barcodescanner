import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DatabaseService {

    public user: user[] = [
        {discluded: ['nüsse', 'lactose'], preferences: ['proteins', 'calcium']},
    ];

    public products: Product[] = [{
        name: 'Chipsfrisch',
        barcode: 4003586000316,
        picture: 'Sentence 1',
        ingredients: ['Potatoes', 'sunflower oil', 'flavoring', 'table salt', 'yeast extract (contains BARLEY)', 'paprika powder', 'sugar', 'onion powder', 'garlic powder', 'coloring: paprika extract', 'smoke flavoring', 'spice extracts'],
        sustainability: 40,
        health: 55,
        weight: 100,
        category: 'Chips'
    },
        {
            name: 'Butterkeks',
            barcode: 4017100370007,
            picture: 'Sentence 1',
            ingredients: ['Weizenmehl', 'Zucker', 'Butter 12%', 'Invertzuckersirup', 'Backtriebmittel: Natriumcarbonate', 'Diphosphate', 'Molkenerzeugnis', 'Vollmilchpulver', 'Salz', 'Emulgator: Lecithine; Säuerungsmittel: Citronensäure; Aromen (Milch)', 'Hühnervolleipulver'],
            sustainability: 56.4,
            health: 31.4,
            weight: 200,
            category: 'kekse'
        },
        {
            name: 'Milka',
            barcode: 3045140105502,
            picture: 'Sentence 1',
            ingredients: ['Zucker', 'Kakaobutter', 'MAGERMILCHPULVER', 'Kakaomasse', 'Süßmolkenpulver (aus MILCH)', 'BUTTERREINFETT', 'Emulgator (SOJALECITHIN)', 'HASELNÜSSE', 'Kann andere NÜSSE und WEIZEN enthalten.'],
            sustainability: 40,
            health: 0,
            weight: 40,
            category: 'Chocolate'
        },
    ];

    public manufactures: Manufacturer[] = [
        {id: 400358, name: 'Intersnack Knabber-Gebäck GmbH & Co. KG', country: 'germany'},
        {id: 401710, name: 'Leibniz', country: 'germany'},
        {id: 304514, name: 'Mondelēz International', country: 'america'},
    ];

    constructor() {
    }
}


export interface user {
    discluded: string[];
    preferences: string[];
}


export interface Product {
    name: string;
    barcode: number;
    picture: string;
    ingredients: string[];
    sustainability: number;
    health: number;
    weight: number;
    category: string;
}


export interface Manufacturer {
    id: number;
    name: string;
    country: string;
}

