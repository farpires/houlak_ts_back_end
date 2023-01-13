
# Houlak-Challenge

En este repositorio se desarrolla un desafío presentado por la gente de Houlak.

## Descripción del desafio

Utilizando la API de Spotify, se deben listar todos los álbumes (con sus respectivas imágenes) de un artista en particular ordenados descendentemente por popularidad.

El nombre del artista debe ser proporcionado por el usuario desde el frontend. En caso de que exista más de un artista con ese nombre se debe seleccionar el primer artista de la lista.

Por cada solicitud, el backend debe almacenar en la DB la IP del usuario, la fecha de la solicitud y el nombre del artista.​El frontend no debe comunicarse directamente con la API de Spotify. Debe comunicarse con el backend y desde este es que se debe realizar la request a la API de Spotify.

El diseño debe ser responsive.

## Instalación

Para comenzar a utilizar este proyecto debemos ejecutar:

```bash
  npm install
```

Luego levantaremos el servidor con el comando    

```bash
  npm run dev
```
```
Deberiamos ver el siguiente mensaje:
online database 
```
## Dependencias utilizadas

| Dependencies               |
| -------------------------- |
| axios | 
| cors| 
| dotenv| 
| express| 
| mysql2| 
| sequelize |


## API Reference

#### obtener información del artista y sus albumnes

```http
  POST /api/artist/-->konga<--
```

| Parameter | Type     | Description                  |
| :-------- | :------- | :--------------------------- |
| `artistName` | `string` | **Required**.  User's name|

#### guarda informacion

```http
  POST /api/information
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `artistName` | `string` | **Required**. User's email |


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file


`PORT` - Port where the project will run.

`DATABASE` - database

`HOST_NAME`= database

`DIALECT`= database

`USER_NAME`= database

`PASSWORD`= database

`TOKEN_URL`= spotify

`CLIENT_ID`= spotify_client_id

`CLIENT_SECRET`= spotify_secret

`BASE_URL`= spotify_url


