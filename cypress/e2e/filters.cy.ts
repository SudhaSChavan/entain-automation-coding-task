import exp from "constants";

const locators = {
  throughbredLabel: '[data-testid="category-filter-4a2788f8-e825-4d36-9894-efd4baf1cfae"] > [data-testid="category-filter-label"]',
  throughbredCheckbox:'[data-testid="category-filter-4a2788f8-e825-4d36-9894-efd4baf1cfae"] > [data-testid="category-filter-checkbox"]',
  greyhoundLabel: '[data-testid="category-filter-9daef0d7-bf3c-4f50-921d-8e818c60fe61"] > [data-testid="category-filter-label"]',
  greyhoundCheckbox:'[data-testid="category-filter-9daef0d7-bf3c-4f50-921d-8e818c60fe61"] > [data-testid="category-filter-checkbox"]',
  harnessLabel: '[data-testid="category-filter-161d9be2-e909-4326-8c2c-35ed71fb460b"] > [data-testid="category-filter-label"]',
  harnessCheckbox:'[data-testid="category-filter-161d9be2-e909-4326-8c2c-35ed71fb460b"] > [data-testid="category-filter-checkbox"]',
  raceName: '[class="race-name"]',
  raceNumber:'[class="race-number"]',
  itemCategory:'[class="item"]',
};



describe('Category Filters', () => {
  it('Verify the Races when all the horses are selected', function() {
    cy.visit('');
    cy.get('[data-testid=page-title]').contains('Next To Go Races').and('be.visible');
  
    var raceNamess=[]
   let a;
    cy.get(locators.raceName)
    .each(($el) => {

a=($el.text()).substring(1);
a = a.replace(/[^a-z]/gi, '');

      raceNamess.push(a);
      // cy.log($el.text());   
})


const raceNames=[
  "Yonkers Raceway","Bathurst","Kasamatsu","Temora","Murray Bridge Straight"
]  
    cy.get(locators.raceName).each((item,index,list) => {
    expect(list).to.have.length(5);
    })
  })


  it('Verify the Races when Throughbred and Greyhound is Selected', () => {
  cy.get(locators.harnessCheckbox).click();

  

  const raceNames=[
    "R8Yonkers Raceway","R2Bathurst","R2Kasamatsu","R9Temora","R7Murray Bridge Straight"
  ]  
      cy.get(locators.raceName).each((item,index,list) => {
      expect(list).to.have.length(5);
      // cy.wrap(item).should("contains.text",raceNames[index])
   
      })
 cy.get(locators.harnessCheckbox).click();

});
  
  it('Verify the Races when  Greyhound and Harness is Selected', () => {
   
    cy.get(locators.throughbredCheckbox).click()
  
    var raceNames=[]
     
    cy.get(locators.raceName).each(($el) => {
      raceNames.push($el.text());
      // cy.log($el.text());
      cy.log('raceName:  ' +raceNames);
    })


    const raceNames=[
      "R8Yonkers Raceway","R2Bathurst","R2Kasamatsu","R9Temora","R7Murray Bridge Straight"
    ]  
        cy.get(locators.raceName).each((item,index,list) => {
        expect(list).to.have.length(5);
        // cy.wrap(item).should("contains.text",raceNames[index])
     
        })

    cy.get(locators.throughbredCheckbox).click()
  });
  

  it('Verify the Races when Harness and Throughbred is Selected', () => {
    cy.get(locators.greyhoundCheckbox).click();
    var raceNames=[]    
    cy.get(locators.raceName).each(($el) => {
      raceNames.push($el.text());
      cy.log('raceName:  ' +raceNames);
    })
    const raceNames=[
      "R8Yonkers Raceway","R2Bathurst","R2Kasamatsu","R9Temora","R7Murray Bridge Straight"
    ]  
        cy.get(locators.raceName).each((item,index,list) => {
        expect(list).to.have.length(5);
        // cy.wrap(item).should("contains.text",raceNames[index])
     
        })
    cy.get(locators.greyhoundCheckbox).click()
  
   });




   it('Verify the Races when only Throughbred is Selected', () => {
    cy.get(locators.greyhoundCheckbox).click();
    cy.get(locators.harnessCheckbox).click();

     
    cy.get(locators.raceName).each((item,index,list) => {
        expect(list).to.have.length(5);
        // cy.wrap(item).should("contains.text",raceNames[index])
     
        })
        cy.get(locators.greyhoundCheckbox).click();
        cy.get(locators.harnessCheckbox).click();
  
   });

   it('Verify the Races when only Harness is Selected', () => {
    cy.get(locators.greyhoundCheckbox).click();
    cy.get(locators.throughbredCheckbox).click();

     
    cy.get(locators.raceName).each((item,index,list) => {
        expect(list).to.have.length(5);
        // cy.wrap(item).should("contains.text",raceNames[index])
     
        })
        cy.get(locators.greyhoundCheckbox).click();
        cy.get(locators.throughbredCheckbox).click();
  
   });


   it('Verify the Races when only greyhound is Selected', () => {
    cy.get(locators.throughbredCheckbox).click();
    cy.get(locators.harnessCheckbox).click();
    cy.get(locators.raceName).each((item,index,list) => {
        expect(list).to.have.length(5);
        // cy.wrap(item).should("contains.text",raceNames[index])
     
        })
        cy.get(locators.throughbredCheckbox).click();
        cy.get(locators.harnessCheckbox).click();
  
   });




});
