import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {
characterDetailList:any;
Name:any;
Image_icon:any
  character: any;
  RealName:any;
  Gender:any;
  Description:any;
  SiteUrl:any;
  Aliases:any;
  constructor() { }

  ngOnInit(): void {
    this.character = history.state.row;
    // this.Image_icon = this.character.image.icon_url;
    this.Name = this.character.name;
    this.Image_icon = this.character.image.original_url;
    this.RealName = this.character.real_name;
    this.Description = this.character.deck;
    this.SiteUrl = this.character.site_detail_url;
    this.Aliases = this.character.aliases;
    this.Gender = this.character.gender;
    if(this.Gender ===1){
      this.Gender = "Male"
    }else if(this.Gender ===2){
      this.Gender = "Female"
    }
    console.log(this.Name, "this.character")
 
  }

}
