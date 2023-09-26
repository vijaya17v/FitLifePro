import { LightningElement,track,wire } from 'lwc';
import getTrainerListHandler from '@salesforce/apex/TrainerController.getTrainerListHandler';

export default class FiltLifeProTrainer extends LightningElement {
   @track trainerInfo = false;
    @track trainerList;
     
    @wire(getTrainerListHandler)
    getTrainerList({data,error})
    {
        if(data)
        {
            console.log("Inside getTrainerList");
            this.trainerInfo = true;
            this.trainerList = data;
            console.log("getTrainerList - Data : " + JSON.stringify(this.trainerList));
        }else if(error)
        {
            console.log("getTrainerList - Error : " + error);
        }       
    }      
}