# 📝 Dónde Editar los Textos de la Aplicación

Este documento te indica exactamente dónde están los archivos que contienen los textos que se renderizan en la aplicación.

## 🎯 Archivos Principales de Texto (Editables)

### Archivos de Traducción JSON

Estos son los archivos principales donde están TODOS los textos traducidos:

1. **`src/locales/en/translation.json`**
   - 📍 **Ubicación completa**: `c:\Users\arter\Documents\Code\codica-dev-glow-up\src\locales\en\translation.json`
   - ✅ **Contiene**: Todos los textos en inglés
   - 📊 **Estructura**: JSON con claves organizadas por sección
   - 🔧 **Para editar**: Abre este archivo y modifica los valores entre comillas

2. **`src/locales/es/translation.json`**
   - 📍 **Ubicación completa**: `c:\Users\arter\Documents\Code\codica-dev-glow-up\src\locales\es\translation.json`
   - ✅ **Contiene**: Todos los textos en español
   - 📊 **Estructura**: JSON con claves organizadas por sección
   - 🔧 **Para editar**: Abre este archivo y modifica los valores entre comillas

## 📋 Estructura de los Archivos de Traducción

Los archivos JSON están organizados así:

```json
{
  "nav": { ... },           // Navegación
  "hero": { ... },          // Sección Hero
  "services": { ... },      // Página de Servicios
  "portfolio": { ... },     // Página de Portafolio
  "about": { ... },         // Página Sobre Nosotros
  "index": { ... },         // Página Principal
  "contact": { ... },       // Página de Contacto
  "footer": { ... },        // Pie de página
  "modal": { ... }          // Modales
}
```

## 🔍 Cómo Encontrar un Texto Específico

### Ejemplo 1: Cambiar el título del Hero
1. Abre: `src/locales/en/translation.json`
2. Busca: `"hero": { "title": ... }`
3. Edita el valor: `"title": "Tu nuevo título aquí"`

### Ejemplo 2: Cambiar texto de navegación
1. Abre: `src/locales/en/translation.json` o `src/locales/es/translation.json`
2. Busca: `"nav": { "home": ... }`
3. Edita: `"home": "Inicio"` (en español) o `"home": "Home"` (en inglés)

## ⚠️ Textos que NO están en los JSON (Hardcodeados)

Estos textos están directamente en los componentes y necesitas editarlos en el código:

### 1. `src/components/Introduction.tsx`
- **Línea 82-83**: Título principal
- **Línea 85**: Descripción
- **Línea 90**: Botón "See projects"
- **Línea 93**: Botón "Contact me"

### 2. `src/pages/NotFound.tsx`
- **Línea 19**: Mensaje "Oops! Page not found"
- **Línea 21**: Botón "Return to Home"

### 3. `src/components/Footer.tsx`
- **Línea 78**: Email `contact@codicadev.com`
- **Línea 83**: Teléfono `+1 (555) 123-4567`
- **Línea 87**: Ubicación `Remote & Global`

### 4. `src/components/Navigation.tsx`
- **Línea 33**: Alt del logo `"Códica Dev Logo"`
- **Línea 59, 71**: Tooltips de cambio de idioma

## 📂 Resumen Rápido

### Para editar textos traducidos:
✅ **Edita estos archivos:**
- `src/locales/en/translation.json` (inglés)
- `src/locales/es/translation.json` (español)

### Para editar textos hardcodeados:
⚠️ **Edita estos archivos directamente:**
- `src/components/Introduction.tsx`
- `src/pages/NotFound.tsx`
- `src/components/Footer.tsx` (email, teléfono, ubicación)
- `src/components/Navigation.tsx` (alt del logo, tooltips)

## 💡 Tip

La mayoría de los textos están en los archivos JSON de traducción. Solo necesitas editar esos dos archivos (`en/translation.json` y `es/translation.json`) para cambiar la mayoría del contenido de la aplicación.
