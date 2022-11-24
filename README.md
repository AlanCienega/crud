# crud NodeJS y MySQL

### Clona el repositorio

```
git clone https://github.com/AlanCienega/crud.git
```

### instala las dependencias

```
npm i
```

### crea una base de datos en mysql llamada crudnodejsmysql

```
CREATE DATABASE crudnodejsmysql;
```

### crea y configura tu archivo env

```
cp .env.example .env
```

### ejecuta la migracion de la tabla

```
npm run migrate
```

### ahora solo inicia el servidor y la aplicacion estara en localhost:3000 o el puerto que definas

```
npm run dev
```

### alternativamente puedes usar el archivo db.sql
