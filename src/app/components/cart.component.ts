import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import {UnoDeck, Card} from '../Cards';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Output()
  //onStart:EventEmitter<number[]>=new EventEmitter<number[]>();
  //onTakeSeven:EventEmitter<string[]>=new EventEmitter<string[]>();

  @Input()
  playerCount:number;
  numPlayers:number[]=[];
  ud:UnoDeck;
  strCard: string[]=[];

  constructor() { 
   }

  ngOnInit() {
    this.playerCount=2;
  }
 add():void{
   this.numPlayers=[];
   if(this.playerCount < 7 && this.playerCount >=2)
    {
      this.playerCount++;
    }
 }
 remove():void
 {
   this.numPlayers=[];
   if(this.playerCount >2)
    {
      this.playerCount--;
    }
 }

 start():void{
   this.ud=new UnoDeck();
   this.numPlayers=[];
   let j:number;
   for(j=1; j<=this.playerCount; j++)
    {
      this.numPlayers.push(j);
    }
 }

 takeSeven():string[]{
    let i:number;
    this.strCard=[];
    for(i=0; i<7; i++){
      let newCard=this.ud.take();
      this.strCard.push(newCard.imageUrl);
    }
    return this.strCard;
 }
}
