# Add a chat widget to a Gatsby application

You can view the tutorial at the Pusher tutorial hub: [Add a chat widget to your Gatsby blog](https://pusher.com/tutorials/chat-gatsby)

*Note: the Gatsby static site generator as well as React is updated all the time. This means the code in this repo might already be outdated, so be sure to check out the release notes / changelog for both [Gatsby](https://github.com/gatsbyjs/gatsby/blob/master/CHANGELOG.md) and [React](https://github.com/facebook/react/releases).*

## Prerequisites

- [Pusher Account](https://pusher.com/) and a Pusher app
- [Node.js](https://nodejs.org/en/)
- [Gatsby CLI](https://www.npmjs.com/package/gatsby-cli)
- [Now.sh](https://zeit.co/now) - you can also use [Ngrok](https://ngrok.com/) to expose the Node server.

## Getting Started

1. Clone the repo:

```
git clone https://github.com/anchetaWern/gatsby-chat.git
```

2. Navigate inside the created folder, and replace the placeholder values for the Pusher app credentials in the `server.js` file:

```
cd gatsby-chat
nano server.js
```

3. Run the server:

```
node server.js
```

4. Create a new Gatsby blog:

```
gatsby new gatsby-blog https://github.com/gatsbyjs/gatsby-starter-blog
```

5. Navigate inside your Gatsby blog:

```
cd gatsby-blog
```

6. Copy the `Chat` component (the whole `Chat` folder) from the repo you cloned earlier: https://github.com/anchetaWern/gatsby-chat/tree/master/src/components/Chat into the `src/components` folder of your Gatsby blog.

7. Update the placeholder values on the `src/components/Chat.index.jsx` file with your Pusher app details: https://github.com/anchetaWern/gatsby-chat/blob/master/src/components/Chat/index.jsx#L26-L28

8. Import the `Chat` component on your blog's blog post template (https://github.com/anchetaWern/gatsby-chat/blob/master/src/templates/blog-post.js) at `src/templates/blog-post.js`.

9. Run your Gatsby blog:

```
gatsby develop
```

10. Run the Node server:

```
node server.js
```

11. Deploy the Node server using Now or just expose it to the internet using Ngrok.

12. Update the `authEndpoint` on your [Chat component](https://github.com/anchetaWern/gatsby-chat/blob/master/src/components/Chat/index.jsx#L27) with the IP address or Ngrok URL of the Node server. Be sure to use https URL if you've set `encrypted` to `true` in your Pusher connection settings.

## Built With
- [React](https://reactjs.org/)
- [Gatsby](https://www.gatsbyjs.org/)
- [Pusher Channels](https://pusher.com/)

## Donation

If this project helped you reduce time to develop, please consider buying me a cup of coffee :)

<a href="https://www.buymeacoffee.com/wernancheta" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>
