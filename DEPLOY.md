# Publicar esta versión en GitHub Pages

## Estructura que debe quedar publicada

En la raíz de la rama `main` deben quedar estos elementos del sitio y su
configuración de publicación:

```
assets/
Practicas/
CNAME
DEPLOY.md
README.md
favicon.svg
googleecf5b6d0376e7c7c.html
index.html
robots.txt
sitemap.xml
```

No se deben conservar el CV, los archivos temporales, los ZIP de trabajo, la
carpeta `images/` del template anterior ni CSS sueltos fuera de `assets/css/`.

## Material académico

La página `Practicas/` muestra únicamente previews de ejercicios históricos y
no ofrece descargas directas. Sin embargo, los archivos fuente `.xlsx` y `.pdf`
dentro de `Practicas/` siguen versionados y son accesibles desde un repositorio
público.

Antes de conservarlos, verificar que no contengan datos personales, de terceros
o metadatos que no deban difundirse. Si el material debe quedar realmente
"disponible a pedido", retirarlo del repositorio público y conservarlo por un
canal privado.

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
