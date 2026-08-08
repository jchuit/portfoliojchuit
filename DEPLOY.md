# Publicar esta versión en GitHub Pages

## Opción simple desde Git

Desde la carpeta del repositorio:

```bash
git add -A
git commit -m "Actualiza portfolio profesional"
git push origin main
```

Si GitHub Pages ya está configurado para publicar desde la rama `main` y la carpeta raíz, el sitio se actualizará automáticamente.

## Si reemplazás el repositorio manualmente

1. Hacé una copia de seguridad del repo actual.
2. Reemplazá los archivos de la rama `main` por los contenidos de esta carpeta.
3. Conservá la carpeta `.git` de tu clon local si trabajás con Git.
4. Subí los cambios.

## Privacidad

El archivo `CV_Juan_Manuel_Chuit_Berzoni.pdf` queda accesible públicamente desde el portfolio. Si preferís no publicar un CV con teléfono u otros datos personales, eliminá ese PDF y reemplazá el botón "Ver CV" de `index.html` por un enlace a LinkedIn o email.
