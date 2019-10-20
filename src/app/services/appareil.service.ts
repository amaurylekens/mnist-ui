export class AppareilService {
  appareils = [
    {
      name:'Playsta',
      status: 'on'
    },
    {
      name:'Pout',
      status: 'off'
    },
    {
      name:'cou',
      status: 'off'
    }
  ]

  switchOnAll(){
    for(let appareil of this.appareils){
      appareil.status = 'on';
    }
  }

  switchOffAll(){
    for(let appareil of this.appareils){
      appareil.status = 'off';
    }
  }

  switchOnOne(i: number){
    this.appareils[i].status = 'on';
  }

  switchOffOne(i: number){
    this.appareils[i].status = 'off';
  }
}