/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
/*_________________________suite 01 _______________________*/
describe('RSS Feeds', function() {
    /*_________________________spec 01 _______________________*/
        it('are defined', function() {
            // check if allfeeds is defined
            expect(allFeeds).toBeDefined();
            // check if allfeeds is not empty
            expect(allFeeds.length).not.toBe(0);

        });
         /*_________________________spec 02 _______________________*/
         it('has url', function() {
            // check if url are defined into allfeeds
            expect(allFeeds.keys('url')).toBeDefined();
            // check if url is not empty
            expect(allFeeds.url).not.toBe('');
            
        });
/*_________________________spec 03 _______________________*/
it('has a name', function() {
    // check if name are defined into allfeeds
    expect(allFeeds.keys('name')).toBeDefined();
    // check if name is not empty
    expect(allFeeds.name).not.toBe('');
    
})
});
/*_________________________suite 02 _______________________*/
describe('The menu', function() {
    /*_________________________spec 01 _______________________*/
    it('is menu hidden', function() {
        //check if menu has a default of hidden
        expect(document.body.classList).toContain('menu-hidden');
        
        }) 
/*_________________________spec 02 _______________________*/
it('is menu hidden when menu icon clicked', function() {
    //selecting the icon
   icon = document.querySelector('.menu-icon-link');
   //check if menu do not have a hidden class onclick
  if (icon.onclick){
      expect(document.body.classList).not.toContain('menu-hidden')
   //check if menu have a hidden class onclick  
   }else{
      expect(document.body.classList).toContain('menu-hidden')

       }
   })
})
/*_________________________suite 03 _______________________*/
describe('Initial Entries', function(){
    /*_________________________spec 01 _______________________*/
        // using done with beforeEach to check the asy function
        beforeEach(function(done){
            loadFeed(0,function(){
                done();
            });
        });
        // check if loadFeed doing its job
        it('loadFeed complets its work',function(done) {
        let entry = $('.feed .entry')[0];
        expect(entry).toBeGreaterThan('');
        done();
        });
    
    })






















}());