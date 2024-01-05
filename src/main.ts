import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  template: `
  <input type="text" [(ngModel)]="searchString">
  <button (click)="searchdata()">Search</button>
  `,
})
export class App {
  googleurl = 'http://www.google.com/search?q=';
  searchString: string = '';
  stringsarray = [
    ' AND fraud OR default OR kickback OR scandal OR probe OR penalty OR misconduct OR CBI OR imprisonment OR police OR scam OR vigilance OR litigation OR arrests OR accused OR accuse OR alleged OR allegedly OR sentenced OR illegal OR lawsuit OR controversy OR controversial',
    ' AND ban OR banned OR politics OR political OR murder OR bribe OR bribed OR rape OR raped OR raping OR robbed OR rob OR theft OR charged OR mobbed OR jail OR jailed OR victim OR underworld OR terrorists OR terrorist OR terrorism OR investigate OR investigated OR sue OR Legal notice OR defendants',
    ' AND investigation OR penalized OR probed OR case OR criminal OR crime OR abuse OR abused OR strike OR accident OR manipulated OR manipulation OR downfall OR loss OR cronies OR absconds OR absconding OR absconded OR lobbying OR compliance OR complying OR prison OR imprisoned OR warned OR warn OR warning OR terminate',
    ' AND termination OR complain OR complaint OR complaining OR warrant OR arrested OR Inquiry OR inquired OR lock Up OR misbehaved OR sack OR sacked OR resigned OR forced OR resignation OR resign OR complain OR complaint OR complaining OR warrant OR arrested OR Inquiry OR inquired OR Lock Up OR misbehaved',
    ' AND defendant OR Defend OR plaintiff OR fraudulent OR unethical OR evade OR evasion OR Protest OR protested OR protesting OR killed OR killer OR killings OR corrupt OR corruption OR corrupted OR culprit OR disgraced OR disgrace OR tarnished OR tarnish OR tarnishing OR breach OR breached OR breaching OR imposed OR impose OR imposing OR false OR falsely',
    ' AND misrepresenting OR misrepresented OR misrepresent OR cartel OR bankrupt OR bankruptcy OR insolvent OR insolvency OR gang OR smuggled OR smuggling OR black marketeering OR black marketing OR kidnapping OR kidnap OR kidnapped OR kidnaper OR fake OR faking OR malpractice OR suspend OR suspect OR guilty OR ransom OR extortion OR remand OR settlement',
    ' AND Family OR Wife OR Daughter OR Son OR has Relations with OR Relationship OR Kin OR Sibling OR Brood OR Kid OR Relatives OR Family OR Domicile OR Children OR Spouse OR Attache OR Ambassador OR Advisor OR Consultant OR Associate OR Association',
    ' AND Political OR Military OR Official OR Officer OR Executive OR Cabinet OR Minister OR Attache OR Ambassador OR Advisor OR Consultant OR Associate OR Association OR Judge OR Judicial OR Administrative OR legislative OR Executive OR Government OR Legislature',
    ' AND Date OR Year OR Birth OR Death OR Died OR Born on OR Birth Place OR Origin OR Native OR Local OR Resident OR Inhabitant OR National OR Citizen',
    ' AND Address OR Resident OR Residence OR Resides OR Residing at OR Stays OR staying at OR Local OR Native OR Origin OR Nationality OR Citizen OR Place OR State OR Province OR Postal OR City OR Street',
  ];

  searchdata() {
    let count = 0;
    this.stringsarray.forEach((str) => {
      window.open(this.googleurl + this.searchString + str, String(count++));
    });
  }
}

bootstrapApplication(App);
