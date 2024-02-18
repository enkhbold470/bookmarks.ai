require("dotenv").config();

const fs = require("fs");
const SavedPost = require("./saved-post");
const Credentials = require("./credentials");
const RateLimiter = require("./rate-limit"); // Import the RateLimiter class

const IgApiClient = require("instagram-private-api");
const { RateLimiter } = require("your-rate-limiter-package"); // Import the RateLimiter class from the appropriate package

const ig = new IgApiClient.IgApiClient();

const { username, password } = Credentials;

ig.state.generateDevice(username);

const urlsFromCandidates = (candidates) => {
  let maxWidth = 0;
  let maxHeight = 0;
  let correctURL = "";

  candidates.forEach((candidate) => {
    if (candidate.width > maxWidth && candidate.height > maxHeight) {
      const { width, height, url } = candidate;
      maxWidth = width;
      maxHeight = height;
      correctURL = url;
    }
  });

  return [correctURL];
};

const urlsFromCarousel = (carousel_media) => {
  const urls = carousel_media.map((element) => {
    return urlsFromCandidates(element.image_versions2.candidates);
  });

  return [].concat(...urls);
};

const urlFromMedia = (media) => {
  const images = media.image_versions2;

  if (!images) {
    return urlsFromCarousel(media.carousel_media);
  }

  return urlsFromCandidates(images.candidates);
};

const postFromMedia = (media) => {
  const { code } = media;
  const webLink = `https://www.instagram.com/p/${code}`;
  const caption = media.caption ? media.caption.text : "";
  const imagesLink = urlFromMedia(media);

  return new SavedPost(webLink, code, caption, imagesLink);
};

const postsFromItems = (items) => {
  return items.map((item) => {
    return postFromMedia(item);
  });
};

const fetchPostsRecursive = async (savedFeed, posts) => {
  const items = await savedFeed.items();
  const allPosts = posts.concat(postsFromItems(items));
  return savedFeed.isMoreAvailable()
    ? fetchPostsRecursive(savedFeed, allPosts)
    : allPosts;
};

const fetchPosts = async (savedFeed) => {
  const allPosts = [];
  return fetchPostsRecursive(savedFeed, allPosts);
};

(async () => {
  await ig.simulate.preLoginFlow();
  const loggedInUser = await ig.account.login(username, password);

  process.nextTick(async () => ig.simulate.postLoginFlow());

  const savedFeed = ig.feed.saved(loggedInUser.pk);

  fetchPosts(savedFeed)
    .then((posts) => {
      return new Promise((resolve, reject) => {
        const path = `${__dirname}/saved_posts.json`;

        const content = JSON.stringify(posts, null, 2);

        fs.writeFile(path, content, "utf8", (err) => {
          if (err) {
            reject(err);
          } else {
            resolve(path);
          }
        });
      });
    })
    .then((path) => {
      console.log(`Posts saved in ${path}`);
    })
    .catch((err) => {
      console.log(`Error: ${err}`);
    });
})();

// Create an instance of RateLimiter with a limit of 10 requests per second
const rateLimiter = new RateLimiter(10, 1000); // Allow 10 requests per second

// Example function to make API request
// Create an instance of RateLimiter with a limit of 10 requests per second
const rateLimiter = new RateLimiter(10, 1000); // Allow 10 requests per second

function makeRequest() {
  console.log("Making request...");
  // Replace this with your actual API request logic
}

// Enqueue requests
for (let i = 0; i < 10; i++) {
  rateLimiter.enqueue(makeRequest); // Enqueue the requests using the enqueue method of the rateLimiter instance
}
