#ENVIRONNEMENT

Projet généré avec yeoman v1.2.1

##REQUIS

* NODEJS : Serveur de développement
* NPM : Gestionnaire de dépendances pour NODEJS
* Grunt : Exécuteur de tâche en Javascript
* Bower : Gestionnaire de dépendances Javascript et CSS

> L'environnement de développement décrit ici permet de générer rapidement des sites web utilisant le Framework AngularJS, ce projet en lui-même consiste en un exemple de base d'utilisation de ce Framework. D'autres outils peuvent se substituer à ceux utilisés ici comme Gulp à la place de Grunt. De plus le générateur Yeoman peut permettre de générer d'autres types d'applications web.

##SETUP

> Les divers outils présentés doivent être présent dans votre Path pour être utilisés. Je ne reviens pas ici sur les différents moyens d'installer ces outils en fonction de votre OS cependant il est conseillé d'utiliser une application tierce sous windows comme chocolatey. NPM est embarqué avec NodeJS dans les dernières versions, il faut vérifier que ses dépendances sont installées correctement dans NodeJS.

* Installer la dernière version de [Nodejs](http://nodejs.org/) & vérifier l'installation : 
```shell
desktop:~$ node -v
v0.10.28
```
* Vérifier le bon fonctionnement de [NPM](https://www.npmjs.org/) (installé avec Nodejs)
```shell
desktop:~$ npm -v
1.4.9
```
* Installer le projet en vous plaçant à sa racine (à côté de package.json : fichier décrivant les dépendances de Node requises)
```shell
desktop:~$ npm install
npm http GET...
```
* [Optionnel] Installer [Yeoman](http://yeoman.io/) & vérifier l'installation : 
```shell
desktop:~$ yo -v
1.2.1
```
* Installer (dépendance installé par 'npm install') [Grunt](http://gruntjs.com/) avec NPM puis vérifier son installation : 
```shell
desktop:~$ npm install grunt
npm http GET https://registry.npmjs.org/grunt...
desktop:~$ grunt --version
grunt-cli v0.1.13
grunt v0.4.5
```

* Installer (dépendance installé par 'npm install') [Bower](http://bower.io/) avec NPM puis vérifier son installation : 
```shell
desktop:~$ npm install bower
npm http GET https://registry.npmjs.org/bower...
desktop:~$ bower --version
1.3.12
```

##LAUNCH

* Cloner le projet : 
```shell
desktop:~$ git clone https://github.com/anunesse/user-database.git
desktop:~$ cd user-database
```

* Installer les dépendances : 
```shell
desktop:~/user-database$ npm install
desktop:~/user-database$ bower install
```

* Déployer votre serveur de développement (déployé sur http://localhost:9090) :
```shell
desktop:~/user-database$ grunt serve
...
Running "connect:livereload" (connect) task
Started connect web server on 127.0.0.1:9090.
Running "watch" task
Waiting...
```

* Générer votre site web pour le déployer sur un autre serveur (site web généré dans dist/) :
```shell
desktop:~/user-database$ grunt build
...
Done, without errors
Execution Time (2014-10-10 12:25:19 UTC)
concurrent:dist   1.1s 10%
ngmin:dist        7.3s 66%
uglify:generated  2.4s 22%
Total 11.1s
```

##PRACTICE

> La pluspart des fichiers du projet sont commentés pour comprendre le fonctionnement de l'application. Ce projet est un site web statique mais il doit être rendu par un serveur, pour cela il s'agit d'uiliser le serveur de développement ou de déployer le dossier dist/ sur un serveur de type Apache ou Nginx en local.

###Principaux fichiers

* package.json : fichier de configuration de NPM, il contient les différents modules requis par le projet, notamment les dépendances de Grunt
```json
{
  "name": "userdatabase",
  "version": "0.0.0",
  "dependencies": {},
  "devDependencies": {
    "grunt": "~0.4.1",
    ...
  }
}
```
* Gruntfile.js : fichier contenant les commandes disponibles, il est possibles de modifier ces commandes, d'en ajouter etc.. Les commandes principales sont : 
```javascript
grunt.registerTask('build');
grunt.registerTask('serve');
```
* bower.json : fichier contenant les dépendances installées avec Bower, lorsque l'on utilise cet utilitaire pour intégrer des dépendances celles-ci sont téléchargées dans le dossier bower_components/. NB : Celles-ci seront ajoutées à ce fichier en utilisant l'option --save : 
```shell
desktop:~$ bower install font-awesome --save
...
font-awesome#4.2.0 app/bower_components/font-awesome
```
```json
{
  "name": "user-database",
  "version": "0.0.0",
  "dependencies": {
    ...
    "bootstrap": "~3.0.3",
    "angular-resource": "1.2.15",
    "angular-cookies": "1.2.15",
    "angular-sanitize": "1.2.15",
    "angular-route": "1.2.15",
    "font-awesome": "~4.2.0"
  }
}
```
* app/index.html : ce fichier est le point d'entrée de votre application, il déclare le module angularjs de celle-ci, c'est dans ce fichier que vont être intégré les différentes vues fournies par ngRoute, de plus les styles et sources Javascript sont chargés depuis ce fichier (CF: commentaire)
```code
<!-- Main module -->
<body ng-app="userDatabaseApp">

<!-- Views injection -->
<div ng-view=""></div>
```
* app/scritps/app.js : ce fichier définit le module principale de l'application, les modules dont il dépend et déclare les routes accessibles avec $routeProvider
```javascript
angular
  .module('userDatabaseApp', ['ngRoute', ...])
  .config(function ($routeProvider) {
  //On définit pour une url un template html, et un controller angularjs à rendre au client
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
```
* app/scripts/controllers/ : dans ce dossier sont définis les controllers de l'application, ces fichiers doivent être ajouter dans index.html pour être intégrés dans l'application (il faut envisager de séparer le code de manière fonctionnelle en créant des répertoires pour les services : app/scripts/services et pour les directives : app/scripts/directives
* app/views/ : dans ce dossier sont définies les vues qui seront injectés par le $routeProvider dans le fichier index.html