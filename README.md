# School project with Framer-motion and react-chartjs-2.

## Project goal

**Create an site for a fictional streaming platform to showcase statistics and with the ability to search for movies by their title. We also needed to implement animations inspired by some of the 12 principles of animation**.

### Execution

**I used react router with two routes**

-   Charts
-   Movies

I made a little animation on the logo when the page loads and animated a hamburgermenu to navigate the routes.

#### Charts

I showcased the charts in a carousel which in bigger screensizes can be controlled using arrows, drag and dots. If you shrink the screensize below 1000px the arrows disappear to enable the chart to take up more space.
The drag-property is working great if you swipe to the right, not so much when you swipe to the left, it still changes the chart visible but it doesn't do the drag-motion.

#### Movies

On the movies route i made a dynamic grid that lays out the moviecards depending on the screensize and the number of cards in the search list.
The moviecards have hover-animation that shows more info about the movie and when there is only one movie in the search list the info shows without the need to hover the element.
I added scroll-animation to the movie-grid.

**Link to published page** [Movieflex](https://elinhagelin.github.io/movieflex/)
