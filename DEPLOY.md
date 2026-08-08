# Publicar esta versión en GitHub Pages

## Estructura que debe quedar publicada

En la raíz de la rama `main` deben quedar únicamente estos elementos:

```
assets/
Practicas/
DEPLOY.md
README.md
favicon.svg
index.html
```

No se deben conservar los CV viejos, los archivos sueltos de ejercicios académicos ni la carpeta `images/` del template anterior.

## Opción recomendada: Git desde un clon local

Desde la carpeta del repositorio:

```bash
git add -A
git commit -m "Actualiza portfolio profesional"
git push origin main
```

Si GitHub Pages ya está configurado para publicar desde la rama `main` y la carpeta raíz, el sitio se actualizará automáticamente.

## Si reemplazás el repositorio manualmente

1. Hacé una copia de seguridad del repo actual.
2. Reemplazá los archivos de la rama `main` por los contenidos de esta carpeta, respetando las subcarpetas `assets/` y `Practicas/`.
3. Conservá la carpeta `.git` de tu clon local si trabajás con Git.
4. Subí los cambios.

## Privacidad

Esta versión no publica el CV completo. El botón principal dirige a LinkedIn y el sitio mantiene el email como canal de contacto.
