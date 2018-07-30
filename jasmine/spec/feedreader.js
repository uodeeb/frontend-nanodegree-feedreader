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























}());