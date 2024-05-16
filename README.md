<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/andrastoth021/netflix_clone">
    <img src="frontend/vite-project/public/movie-2-line.svg" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Movie streaming site</h3>

  <p align="center">
    A user-friendly movie streaming web application that allows users to view a wide range of movies online without needing to download the media files first. Built using Vite with TypeScript on frontend and Spring Boot on the backend.
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
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
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#authors">Authors</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

![Product Name Screen Shot][product-screenshot]
<!-- <img src="" width="720" /> -->

<p><b>Note:</b> This project is <b>currently in development</b>, and it's not ready yet!</p>

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Tech stack

- **Backend**
  * ![Spring Boot][Spring Boot]
- **Database**
  * ![PostgreSQL][PostgreSQL]
- **Frontend**
  * ![Vite(React)][Vite]
  * ![TypeScript][TypeScript]
  * ![shadcn/ui][Shadcn-UI]
  * ![TailwindCSS][TailwindCSS]


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

### Installation

Before installing the project, make sure you have Docker installed on your machine.
Docker can be downloaded and installed from the official Docker website. Here are the links to download Docker for different operating systems:

[Docker Desktop for Windows](https://docs.docker.com/desktop/install/windows-install/)

[Docker Desktop for Mac](https://docs.docker.com/desktop/install/mac-install/)

[Docker Desktop for Linux](https://docs.docker.com/desktop/install/linux-install/)


After downloading and installing Docker, follow these steps to install and run the project:

Clone the repository to your local machine.

Navigate to the root directory of the project.

Create your `.env` file with the help of the provided `.env template` file.

```
DB_HOST=postgresql
DB_PORT=5432
DB_NAME=
DB_USERNAME=
DB_PASSWORD=
```

Fill it out with the preferred data then save it with the following name: `.env`.

Finally, start the Docker containers using Docker Compose. From the root directory of the project, run:

```
docker-compose up
```

This will build and start the Docker containers defined in the docker-compose.yml file.

Please note that the frontend and backend are not fully connected yet as the project is still under development.



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- AUTHORS -->
## Authors

<a href="https://github.com/andrastoth021/netflix_clone/graphs/contributors">
 <img src="https://contrib.rocks/image?repo=andrastoth021/netflix_clone" />
</a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[product-screenshot]: frontend/vite-project/public/auth-screenshot.png
[Spring Boot]: https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=Spring&logoColor=FFFFFF
[PostgreSQL]: https://img.shields.io/badge/PostgreSQL-FFFFFF?style=for-the-badge&logo=PostgreSQL&logoColor=0064a5
[Vite]: https://img.shields.io/badge/Vite-000000?style=for-the-badge&logo=Vite&logoColor=bd34fe
[TypeScript]: https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=FFFFFF
[Shadcn-UI]: https://img.shields.io/badge/shadcn/ui-000000?style=for-the-badge&logo=shadcn/ui&logoColor=FFFFFF
[TailwindCSS]: https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=Tailwind-CSS&logoColor=FFFFFF
