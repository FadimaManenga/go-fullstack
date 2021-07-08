Pour faire fonctionner ce projet **OPENCLASSROOMS sous UBUNTU**,  
vous avez besoin de `npm` + `angular`

![UBUNTU](./ubuntu-logo14.png)

Passez au Full stack avec Node.js, Express et MongoDB [OPENCLASSROOMS](https://openclassrooms.com/fr/courses/6390246-passez-au-full-stack-avec-node-js-express-et-mongodb)

## Installation Node.js sur **UBUNTU** 

> la version 12 fonctionne en local 
> la version 16 ne fonctionne pas en global

1. `nodejs -v`
2. `sudo apt-get install curl`
3. `curl -sl https://deb.nodesource.com/setup_14.x | sudo -E bash -`
4. `sudo apt-get install nodejs`

***

## Installation CLI Angular sur **UBUNTU**
  
1. `ng --version` version angular
2. `sudo npm install -g @angular/cli`

***

## Ensuite... le FRONTEND... ouvrez Visual Studio Code dans un dossier **go-fullstack**

1. `git clone` du repo **frontend** [go-fullstack-fr-frontend](https://github.com/OpenClassrooms-Student-Center/go-fullstack-fr-frontend)
   > `https://github.com/OpenClassrooms-Student-Center/go-fullstack-fr-frontend.git`
2. Renommer le dossier : **frontend**
3. `cd frontend`
4. `npm install`
5. `ng serve`  

Veillez à avoir toujours un terminal qui exécute `ng serve` 

***

## Initialisation BACKEND

1. Créer un dossier **backend**
2. `cd backend`
3. `npm init`  
   > initialise le projet node avec package.json
4. Listing... `entry point: (index.js)` --> `server.js`
5. `git init` 
   > initialise un repos gitHub
6. Créer un fichier `.gitignore`, comprenant `node_modules`
   > initialise un `.gitignore` sur git de node module
   > mdp + user ?
7. Créer un fichier `server.js` : code du serveur.
   > Pour afficher les logs dans le terminal `node server`   
   > Pour fermer le server `Ctrl+c`
8. Pour simplifier avec **nodemon**
   > `npm install -g nodemon` puis lancer le server avec `nodemon server`
9.  Framework **EXPRESS**
    > `npm install --save express`   
    > Créez un fichier `app.js` , où placer l'app Express
10. Package **body-parser** pour extraire l'objet JSON des POST
    > `npm install --save body-parser`
11. Package **Mongoose**
    > Est un package qui facilite les interactions avec notre base de données MongoDB.
    >`npm install --save mongoose`
12. Package de validation pour pré-valider les informations dans la DB. **mongoose-unique-validator**
    > `npm install --save mongoose-unique-validator`
13. Package de chiffrement **bcrypt** pour notre **fonction signup**
    > `npm install --save bcrypt`
14. Créez des tokens d'authentification **jsonwebtoken**
    > `npm install --save jsonwebtoken`
15. Configurez le **middleware** de gestion des fichiers
    > `npm install --save multer`

***
## Archi
<table cellspacing="0" border="0">
	<colgroup width="114"></colgroup>
	<colgroup width="176"></colgroup>
	<colgroup width="254"></colgroup>
	<colgroup width="245"></colgroup>
	<colgroup span="2" width="85"></colgroup>
	<tbody><tr>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000" colspan="2" height="50" align="center" valign="middle" bgcolor="#ED401C"><b><font face="Ubuntu" size="4" color="#FFFFFF">APIs are Cool </font></b></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-right: 1px solid #000000" colspan="2" align="center" valign="middle" bgcolor="#ED401C"><b><font face="Ubuntu" size="4" color="#FFFFFF">ARCHITECTURE go-fullstack</font></b></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
	</tr>
	<tr>
		<td height="12" align="center" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
	</tr>
	<tr>
		<td colspan="4" height="45" align="left" valign="middle"><font face="Ubuntu" size="4">Dossier backend</font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
	</tr>
	<tr>
		<td height="43" align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="left" valign="middle"><font face="Ubuntu" size="4">./controllers</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="left" valign="middle"><font face="Ubuntu" size="3">stuff.js </font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
		<td align="left"><br></td>
		<td align="left"><br></td>
	</tr>
	<tr>
		<td height="42" align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="4"><br></font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="left" valign="middle"><font face="Ubuntu" size="3">user.js </font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
		<td align="left"><br></td>
		<td align="left"><br></td>
	</tr>
	<tr>
		<td height="12" align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="4"><br></font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
	</tr>
	<tr>
		<td height="43" align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="left" valign="middle"><font face="Ubuntu" size="4">./routes </font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="left" valign="middle"><font face="Ubuntu" size="3">stuff.js </font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
	</tr>
	<tr>
		<td height="42" align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="4"><br></font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="left" valign="middle"><font face="Ubuntu" size="3">user.js </font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
	</tr>
	<tr>
		<td height="12" align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="4"><br></font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
	</tr>
	<tr>
		<td height="43" align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="left" valign="middle"><font face="Ubuntu" size="4">./models </font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="left" valign="middle"><font face="Ubuntu" size="3">Thing.js </font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
	</tr>
	<tr>
		<td height="42" align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="4"><br></font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="left" valign="middle"><font face="Ubuntu" size="3">user.js </font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
	</tr>
	<tr>
		<td height="12" align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="4"><br></font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
	</tr>
	<tr>
		<td height="43" align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="left" valign="middle"><font face="Ubuntu" size="4">./middleware</font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="left" valign="middle"><font face="Ubuntu" size="3">auth.js </font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
	</tr>
	<tr>
		<td height="42" align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="4"><br></font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="left" valign="middle"><font face="Ubuntu" size="3">multer-config.js </font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
	</tr>
	<tr>
		<td height="12" align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="4"><br></font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
	</tr>
	<tr>
		<td height="43" align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="left" valign="middle"><font face="Ubuntu" size="4">./server.js </font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
	</tr>
	<tr>
		<td height="12" align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="4"><br></font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
	</tr>
	<tr>
		<td height="43" align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="left" valign="middle"><font face="Ubuntu" size="4">./app.js </font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
	</tr>
	<tr>
		<td height="12" align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="4"><br></font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
	</tr>
	<tr>
		<td height="93" align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="left" valign="middle"><font face="Ubuntu" size="4">./package.json </font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="3">utilisé pour gérer les dépendances du projet, les scripts, la version et bien plus encore. </font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
	</tr>
	<tr>
		<td height="12" align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="4"><br></font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
	</tr>
	<tr>
		<td height="75" align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="left" valign="middle"><font face="Ubuntu" size="4">./node_modules</font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="3">contient toutes les dépendances installées pour le projet </font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
	</tr>
	<tr>
		<td height="12" align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="4"><br></font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
	</tr>
	<tr>
		<td height="57" align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="left" valign="middle"><font face="Ubuntu" size="4">./.gitignore</font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="3">fichiers non suivis que Git devrait ignorer </font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
	</tr>
	<tr>
		<td height="12" align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="4"><br></font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
	</tr>
	<tr>
		<td height="43" align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="left" valign="middle"><font face="Ubuntu" size="4">./readme.md </font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="3">docs - instructions </font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
	</tr>
	<tr>
		<td height="39" align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
	</tr>
	<tr>
		<td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan="4" height="45" align="left" valign="middle"><font face="Ubuntu" size="4">Dossier frontend </font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
		<td align="left" valign="middle"><font face="Ubuntu" size="3"><br></font></td>
	</tr>
</tbody></table>
<!-- ************************************************************************** -->