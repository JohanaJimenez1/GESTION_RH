const { Builder, By, Key, until } = require('selenium-webdriver');

async function testGestionEmployes() {
  // Créer une instance de WebDriver
  let driver = await new Builder().forBrowser('chrome').build();

  try {
   
    await driver.get('http://127.0.0.1:8081/');

    
    await driver.findElement(By.id('ajout-nom')).sendKeys('Jean Dupont'); 
    await driver.findElement(By.id('ajout-poste')).sendKeys('Développeur'); 

    
    await driver.findElement(By.id('btnajouter')).click();

   
    let employes = await driver.findElements(By.css('#liste-employes .employe-item'));
    if (employes.length === 4) {
      console.log('✔️ Test Ajouter : Réussi');
    } else {
      console.log('❌ Test Ajouter : Échoué');
    }

  
    await driver.findElement(By.css('.employe-item .supprimer-id')).click();

    // Vérifier si l'employé a été supprimé
    employes = await driver.findElements(By.css('#liste-employes .employe-item'));
    if (employes.length === 0) {
      console.log('✔️ Test Supprimer : Réussi');
    } else {
      console.log('❌ Test Supprimer : Échoué');
    }
  } finally {
    
    await driver.quit();
  }
}

testGestionEmployes();
