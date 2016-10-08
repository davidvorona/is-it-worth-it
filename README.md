# Reel Talk&trade;
An app that generates a Reel&trade; score for currently playing movies, delivery, and local gas (and more coming soon). User can create an account with preferences that affects the Reel&trade; scores of different queries.

# Movies
1. Accept query from user.
2. Scrape for data from metacritic.
3. Generate Reel&trade; score based on:
  1. Critic's rating
  2. Average viewer's rating
  3. Star power
  4. Would the user like it (genre, favorite actor/actress/director, language, setting, etc.)
4. What else?

# Delivery
1. Ping UberEats and Postmates API's for latest pricing information at regular intervals.
2. Accept query from user.
3. Compare current price to lowest price from API pings.
4. Give percentage score.
5. Offer suggestions:
  1. Better time to order?
  2. Restaurant with similar food, lower prices?
  3. UberEats vs. Postmates?

# Gas
1. Ping gas prices API (which one?)
2. Accept query from user.
3. Using user's MPG and location (in preferences), and Google Maps API, determine within range of max distance the cheapest gas station user can go to.
