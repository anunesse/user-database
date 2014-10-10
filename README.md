#ENVIRONNEMENT

Projet généré avec yeoman v1.2.1

##REQUIS

* NODEJS : Serveur de développement
* NPM : Gestionnaire de dépendances pour NODEJS
* Grunt : Exécuteur de tâche en Javascript
* Bower : Gestionnaire de dépendances Javascript et CSS

> L'environnement de développement décrit ici permet de générer rapidement des sites web utilisant le Framework AngularJS, ce projet en lui-même consiste en un exemple de base d'utilisation de ce Framework. D'autres outils peuvent se substituer à ceux utilisés ici comme Gulp à la place de Grunt. De plus le générateur Yeoman peut permettre de générer d'autres types d'applications web.

##SETUP

> Les divers outils présentés doivent être présent dans votre Path pour être utilisés. Je ne reviens pas ici sur les différents moyens d'installer ces outils en fonction de votre OS cependant il est conseillé d'utiliser une application tierce sous windows comme chocolatey. NPM est embarqué avec NodeJS dans les dernière version, il faut vérifier que ses dépendances sont installées correctement dans NodeJS.

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

* Déployer votre serveur de développement (déployé sur http://localhost:9090) :
```shell
desktop:~$ grunt serve
...
Running "connect:livereload" (connect) task
Started connect web server on 127.0.0.1:9090.
Running "watch" task
Waiting...
```

* Générer votre site web pour le déployer sur un autre serveur (site web généré dans dist/) :
```shell
desktop:~$ grunt build
...
Done, without errors
Execution Time (2014-10-10 12:25:19 UTC)
concurrent:dist   1.1s 10%
ngmin:dist        7.3s 66%
uglify:generated  2.4s 22%
Total 11.1s
```

##PRACTICE