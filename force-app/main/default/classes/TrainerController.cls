public  without sharing class TrainerController {
    @AuraEnabled
    public static List<Trainer__c> getTrainerListHandler() {
           return [SELECT 
                    Name,Email__c,Last_Name__c,Phone_Number__c,Photo__c,Specialities__c,
                    Certifications__c, Availability_Schedule__c 
                    FROM  Trainer__c 
                    ];  
   
    }
}
