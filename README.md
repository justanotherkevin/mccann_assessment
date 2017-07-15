Mccann Prompt:
Create a single page JS application for displaying the feed from a subreddit (e.g. https://www.reddit.com/r/[subreddit name]/top/.json).

Guidelines
Don't spend more than 6 hours on this exercise -- try to tackle all of the basic requirements below, but focus on your strengths rather than trying to "do it all."
Use any JS framework you like, or just use vanilla JS. Whatever you think is appropriate or will help you to tackle the basic requirements.
Likewise, use any tooling set-up and/or styling framework that you think is appropriate for the task. Or don't... you are trying to do this in 6 hours, so don't spend 4 hours working out your build automation unless you think that is a good use of time.
Make the code for this app as maintainable/modularized/readable as you can.
Basic Requirements
The UX/UI should match the design in the sample video and mock.
Arvo: https://fonts.google.com/specimen/Arvo
FontAwesome: https://fontawesome.io
The feed reader should display, at a minimum:
A list of posts from one subreddit
The title, thumbnail, and author of each post
The application should have a minimum of two routes:
A route that displays a list of posts for the subreddit
A route that displays posts that the user has marked as "favorites"
The application UI should incorporate, at a minimum:
A method to select a post as a favorite
A method to remove a post from the list of favorites
The ability to toggle back and forth between the list of all posts (one route) and the list of favorited posts (the other route)
Extra credit (in no particular order)
Persist the user's favorites so this list is still available if the user reloads the page.
Incorporate meaningful (meaningful meaning, in this case, the opposite of gratuitous!) animations into the UI. For example, an animation that visually relays that a post has been favorited or un-favorited, or an animation that signals that the route has changed.
Add the ability to search for other subreddits.
Incorporate lazy/infinite loading of posts.
Make it look GOOD!
