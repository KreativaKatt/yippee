const posts = [
  {
    author: "Maya R.",
    location: "The Brickyard",
    text: "The Brickyard is packed with clubs today and I somehow ended up with three flyers and a new favorite campus playlist."
  },
  {
    author: "Jordan K.",
    location: "Hunt Library",
    text: "Found a quiet spot on the fourth floor at Hunt. Midterms might not win this week after all."
  },
  {
    author: "Priya S.",
    location: "Talley Student Union",
    text: "A quick Talley lunch turned into a two-hour catch-up with friends. Exactly the break I needed."
  },
  {
    author: "Eli T.",
    location: "Carter-Finley Stadium",
    text: "Game day is here! Red and white everywhere, and the walk to Carter-Finley already feels like a celebration."
  },
  {
    author: "Sam W.",
    location: "Court of Carolinas",
    text: "Sat outside between classes for ten minutes and accidentally got enough sun to feel like a new person."
  },
  {
    author: "Nina P.",
    location: "Hill Library",
    text: "Hill Library has that quiet, focused energy today. One reading down, two to go."
  },
  {
    author: "Alex D.",
    location: "Witherspoon Student Center",
    text: "Ran into my lab partner at Witherspoon and we finally figured out the part of the project neither of us understood."
  },
  {
    author: "Chris M.",
    location: "NC State Fairgrounds",
    text: "Walked over to the fairgrounds after class for a snack and now I'm carrying a giant lemonade back to the bus."
  },
  {
    author: "Taylor B.",
    location: "The Brickyard",
    text: "Someone brought a guitar to the Brickyard and the whole afternoon got a little better."
  },
  {
    author: "Morgan L.",
    location: "Talley Student Union",
    text: "The line at Talley was moving so slowly that I finished my group meeting notes before ordering."
  },
  {
    author: "Devon H.",
    location: "Wolf Plaza",
    text: "The fountain at Wolf Plaza is the unofficial meeting point for every group project team I know."
  },
  {
    author: "Casey J.",
    location: "Carter-Finley Stadium",
    text: "First home game with my roommates. We got here early, found our seats, and are already losing our voices."
  },
  {
    author: "Riley A.",
    location: "Centennial Campus",
    text: "Long walk across Centennial Campus before my afternoon class. The breeze made the extra steps worth it."
  },
  {
    author: "Jamie F.",
    location: "Hunt Library",
    text: "I came to Hunt Library planning to study for an hour, but the project team found a whiteboard and now we're mapping out the whole semester. We started with one question about our design assignment and somehow got into the details of who is testing each part, how we are going to organize the notes, and what we still need to learn before our next meeting. It feels good when a confusing task starts to turn into a real plan. I also remembered to bring a snack this time, which is an improvement over my usual routine of noticing I'm hungry only after the café closes. If you are also here trying to focus, there's a little corner table near the windows with plenty of room for a laptop and a notebook. I'm going to finish the first section tonight, send the group a summary, and then call it a day before I convince myself that one more revision is necessary. Small progress still counts, especially during a busy week."
  },
  {
    author: "Avery C.",
    text: "Finally submitted the assignment I've been thinking about all week. Closing my laptop and taking the long way home."
  }
];

const postsContainer = document.querySelector("#posts");

for (const post of posts) {
  const article = document.createElement("article");
  const heading = document.createElement("h3");
  const message = document.createElement("p");

  heading.textContent = post.author;
  message.textContent = post.text;
  article.append(heading);

  if (post.location) {
    const location = document.createElement("p");
    location.textContent = `Location: ${post.location}`;
    article.append(location);
  }

  article.append(message);
  postsContainer.append(article);
}
