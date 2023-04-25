<p align="center">
  <h1 align="center">NyTimes Clone</h1>
  <p align="center">
   Clone of The New York Times website, built with React and New York Times API
  </p>
</p>

<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#license">License</a></li>
    <li><a href="#links">Links & Contacts</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
    <li><a href="#screenshots">ScreenShots</a></li>
  </ol>
</details>

## About The Project

NyTimes Clone is a web application that aims to recreate the user interface and functionality of The New York Times website. Built using modern web technologies such as React.js for deployment, this clone provides a similar browsing experience to the original website. Articles data are fetched from the [New York Times API](https://developer.nytimes.com/apis).
User can explore three main routes:

<ul>
<li> <strong>The Home Page</strong>, which contains most relevant articles currently on the first page; </li>

<li> <strong>Specific Sections</strong>, like Tech, Health, Science, which display most relevant articles of such categories; </li>

<li><strong>Search Section</strong>, which displays paginated articles based on the keyword typed by the user in the search-bar. Articles can be sorted by "relevance", "newest" and "oldest".</li>
</ul>

### Built With

- [React.js](https://react.dev/)
- [CSS modules](https://github.com/css-modules/css-modules)
- [Axios](https://github.com/axios/axios)
- [react-js-pagination](https://www.npmjs.com/package/react-js-pagination)
- [react-responsive](https://www.npmjs.com/package/react-responsive)
- [react-animation-on-scroll](https://www.npmjs.com/package/react-animation-on-scroll)
- [react-spring](https://react-spring.io/)

## Getting Started

### Prerequisites

Running the application requires [Node](https://nodejs.org/en/) to be installed on your operating system.

You can then install the latest version of npm from your terminal with the command:

```sh
npm install npm@latest -g
```

### Installation

1. Clone the repository locally with the git command:

   ```sh
   git clone https://github.com/berkbeleli/NyTimes-Clone.git
   ```

2. Install NPM packages:

   ```sh
   npm install
   ```

3. Create an account on [New York Times API](https://developer.nytimes.com/get-started) website
   and follow the instructions to get your api-key

4. Create a .env file in the root folder with just one line:

   ```sh
   REACT_APP_NYTIMES_API_KEY = 'ENTER YOUR API KEY'
   ```

5. Run the app with command:

   ```sh
   npm start
   ```

## License

NyTimes Clone is released under the MIT License. Please refer to the `LICENSE` file for more details.


## Links

Project Repository: [nytimes-clone](https://github.com/berkbeleli/NyTimes-Clone)

Project Website: [NyTimes clone](https://nytimes-clone.vercel.app/)

Portfolio: [berkbeleli-portfolio](https://berkbeleli.onrender.com/)

## Acknowledgements

- [New York Times API](https://developer.nytimes.com/)
- [CSS modules](https://github.com/css-modules/css-modules)
- [react-js-pagination](https://www.npmjs.com/package/react-js-pagination)
  
## ScreenShots

  <a href="https://github.com/berkbeleli/NyTimes-Clone">
    <img src="https://user-images.githubusercontent.com/44535117/234363403-163551fb-a3f0-49b3-9e35-71ad5e34b68a.png" alt="nytimes-clone-screenshot">
    <img src="https://user-images.githubusercontent.com/44535117/234363448-ba24f1bf-ec91-4d74-bc92-468ea510f32e.png" alt="nytimes-clone-screenshot">
    <img src="https://user-images.githubusercontent.com/44535117/234363463-d13ffb5f-40b1-4971-a97c-dd828f6274a5.png" alt="nytimes-clone-screenshot">
  </a>
