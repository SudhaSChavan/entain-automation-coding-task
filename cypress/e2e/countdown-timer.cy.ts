

const locators = {
  itemCategory:'[class="item"]',
};
describe('Countdown Timer', () => {
 
  it('Verify the TImer in the Ascending order', function() {
    cy.visit('');
    var raceNamess=[]
    let a;
     cy.get(locators.itemCategory)
     .each(($el) => {
 
       raceNamess.push($el.text());
        cy.log($el.text());   
 })

 cy.get(locators.itemCategory).each((item,index,list) => {
  expect(list).to.have.length(5);
  })
       
})



  
});
