import { AfterContentInit, Component, ContentChildren, QueryList } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabscontainet',
  templateUrl: './tabscontainet.component.html',
  styleUrl: './tabscontainet.component.css'
})
export class TabscontainetComponent implements AfterContentInit{

  @ContentChildren(TabComponent) tabs:QueryList<TabComponent>=new QueryList

  ngAfterContentInit(): void {
    console.log(this.tabs);
    const activetabs=this.tabs.filter(tab=>tab.active)

    if(!activetabs || activetabs.length===0){
     this.selectTabs(this.tabs.first)
    }
  }
  selectTabs(tab:any){
    this.tabs.forEach(tab=>{
      tab.active=false
    })
    tab.active=true
    return false
  }
}
