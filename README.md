<h1 align="center">Welcome to OurCAL 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.3.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/AudTheCodeWitch/OurCAL/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
  <a href="https://twitter.com/AudTheCodeWitch" target="_blank">
    <img alt="Twitter: AudTheCodeWitch" src="https://img.shields.io/twitter/follow/AudTheCodeWitch.svg?style=social" />
  </a>
</p>

>  OurCal is a community-generated Crochet-Along (CAL). Anyone can design a
          block using the graphghan generator and submit it to our database. Users
          can then view one another's blocks and implement their favorites in a
          one-of-a-kind blanket!
       
### ✨ [Heroku Demo](https://our-cal.herokuapp.com/)

### ✨ [Demo Video](https://youtu.be/Q4ZJAEO2FJM)

## Usage
OurCAL runs on PostgreSQL. To start your PostgreSQL server, run: 
```sh
$ sudo service postgresql start
```

Create the database, run migrations, and seed it:
```shell script
$ rails db:create
$ rails db:migrate
$ rails db:seed
``` 
 Start the backend server by running:
```shell script
$ rails s -p 3001
```

`cd` into `./client` and start the frontend server by running:
```shell script
$ yarn start
```


## Author

👤 **Audrea Cook**

* Twitter: [@AudTheCodeWitch](https://twitter.com/AudTheCodeWitch)
* Github: [@AudTheCodeWitch](https://github.com/AudTheCodeWitch)
* LinkedIn [Audrea Cook](https://www.linkedin.com/in/audreacook/)

## 🤝 Contributing
In the future, we would like to add a few features:
* Add user sessions
* Add the ability to edit one's submitted patterns
* Add the ability to view patterns by designer
* View other's patterns in your color scheme
* Arrange selected blocks on a blanket template
* Generate written instructions for patterns
* Add a print-friendly view of patterns with instructions
* Redesign layout from a mobile-first perspective
          
Contributions, issues and feature requests are welcome.<br />
[Check out the contributors' Code of Conduct](./CODE_OF_CONDUCT.md).<br />

## Show your support

Give a ⭐️ if you enjoyed OurCAL!

## 📝 License

Copyright © 2020 [Audrea Cook](https://github.com/AudTheCodeWitch).<br />
This project is [MIT](https://github.com/AudTheCodeWitch/OurCAL/blob/master/LICENSE) licensed.

---

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
