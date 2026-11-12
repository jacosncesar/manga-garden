# Devlog 076: Localización del sitio y README en español

## Fecha

2026-11-12

## Objetivo

Añadir español al selector de idioma del sitio Manga Garden y publicar un README en español que conserve la estructura y la información del README principal.

## Implementación

- Añadida la opción Español en la página inicial, las dos rutas de la política de privacidad y el mapa del pipeline.
- Ampliado `site/js/i18n.js` para localizar títulos, textos, atributos accesibles y mensajes dinámicos del mapa; se mantienen inglés y pt-BR, con pt-BR como idioma predeterminado.
- Conservada la persistencia de la preferencia en `localStorage` y su sincronización entre pestañas mediante la clave existente.
- Traducidos al español los títulos de privacidad y del mapa, además de etiquetas y mensajes del diagrama que todavía aparecían en inglés.
- Creado `README.es.md` con las nueve secciones principales del README y añadido el enlace al nuevo idioma en los READMEs existentes.

## Validación

- `node --check site/js/i18n.js`, `npx oxlint site/js/i18n.js` y `git diff --check` concluidos sin errores ni avisos de claves duplicadas.
- Con JSDOM, verificados el título, el contenido, `document.documentElement.lang`, el selector y la preferencia guardada en las páginas inicial, de privacidad y del pipeline.
- Verificada también la actualización de mensajes dinámicos del mapa al seleccionar español.
- Confirmado que `README.es.md` y los demás READMEs tienen las mismas nueve secciones principales que `README.md`.
