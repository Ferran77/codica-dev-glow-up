# Archivos de Texto en la Aplicación

Este documento lista todos los archivos donde se renderiza texto en la aplicación.

## 📁 Archivos de Traducción (i18n)

### Configuración de i18n
- **`src/i18n.ts`** - Configuración principal de internacionalización
  - Define los idiomas disponibles (en, es)
  - Configuración de detección de idioma

### Archivos de Traducción
- **`src/locales/en/translation.json`** - Todas las traducciones en inglés
  - Contiene: nav, hero, services, portfolio, about, index, modal, footer, contact
  - Total: ~343 líneas de texto traducido

- **`src/locales/es/translation.json`** - Todas las traducciones en español
  - Contiene: nav, hero, services, portfolio, about, index, modal, footer, contact
  - Total: ~339 líneas de texto traducido

## 🧩 Componentes con Texto

### Componentes que usan traducciones (i18n)
- **`src/components/Hero.tsx`**
  - Usa: `t("hero.title")`, `t("hero.subtitle")`, `t("hero.cta")`, `t("hero.contact")`
  - Usa: `t("hero.cards.web.*")`, `t("hero.cards.saas.*")`, `t("hero.cards.mobile.*")`
  - Textos: Títulos, subtítulos, botones, descripciones de tarjetas, contenido de modales

- **`src/components/Navigation.tsx`**
  - Usa: `t("nav.home")`, `t("nav.services")`, `t("nav.portfolio")`, `t("nav.about")`, `t("nav.contact")`
  - Textos hardcodeados: 
    - `"Códica Dev Logo"` (alt del logo)
    - `"Cambiar a Español"` / `"Switch to English"` (title del botón de idioma)

- **`src/components/Footer.tsx`**
  - Usa: `t("footer.description")`, `t("footer.quickLinks")`, `t("footer.contact")`, `t("footer.rights")`, `t("footer.privacy")`, `t("footer.terms")`
  - Usa: `t("nav.*")` para los enlaces
  - Textos hardcodeados:
    - `"contact@codicadev.com"` (email)
    - `"+1 (555) 123-4567"` (teléfono)
    - `"Remote & Global"` (ubicación)
    - `"Códica Dev Logo"` (alt del logo)

- **`src/components/Modal.tsx`**
  - Usa: `t("modal.close")` para el botón de cerrar
  - Recibe `title` y `content` como props (probablemente desde traducciones)

### Componentes con texto hardcodeado (NO usa i18n)
- **`src/components/Introduction.tsx`** ⚠️ **TEXTO HARDCODEADO**
  - Línea 82-83: `"It's never too late to get passionate about web development"`
  - Línea 85: `"Musician by origin, historian for pleasure and passionate about technology and web development. I put myself at your service as a frontend developer"`
  - Línea 90: `"See projects"`
  - Línea 93: `"Contact me"`
  - Línea 70: `"Avatar"` (alt de imagen)

## 📄 Páginas con Texto

### Páginas que usan traducciones (i18n)
- **`src/pages/About.tsx`**
  - Usa: `t("about.hero.*")`, `t("about.story.*")`, `t("about.mission.*")`, `t("about.vision.*")`
  - Usa: `t("about.values.*")`, `t("about.team.*")`, `t("about.cta.*")`
  - Textos: Títulos, descripciones, valores, información del equipo

- **`src/pages/Services.tsx`**
  - Usa: `t("services.hero.*")`, `t("services.web.*")`, `t("services.saas.*")`, `t("services.mobile.*")`
  - Textos hardcodeados:
    - Tecnologías: `"React"`, `"TypeScript"`, `"Node.js"`, `"Python"`, `"PostgreSQL"`, `"AWS"`
    - Plataformas: `"iOS"`, `"Android"`, `"React Native"`, `"Flutter"`
    - Alt de imágenes: `"Web Development"`, `"SaaS Development"`, `"Mobile Development"`

- **`src/pages/Portfolio.tsx`**
  - Usa: `t("portfolio.hero.*")`, `t("portfolio.projects.*")`, `t("portfolio.project.*")`, `t("portfolio.cta.*")`
  - Textos hardcodeados:
    - Tecnologías en proyectos: `"React"`, `"Node.js"`, `"PostgreSQL"`, `"Stripe"`, etc.

- **`src/pages/Contact.tsx`**
  - Usa: `t("contact.hero.*")`, `t("contact.form.*")`, `t("contact.info.*")`, `t("contact.process.*")`
  - Textos: Formulario, información de contacto, proceso

- **`src/pages/Index.tsx`**
  - Usa: `t("index.cta.*")`, `t("index.whyChooseUs.*")`
  - Textos: CTAs, razones para elegir

- **`src/pages/NotFound.tsx`** ⚠️ **TEXTO HARDCODEADO**
  - Línea 18: `"404"` (número)
  - Línea 19: `"Oops! Page not found"`
  - Línea 21: `"Return to Home"`
  - Línea 10: `"404 Error: User attempted to access non-existent route:"` (console.log)

## 📊 Resumen

### Textos Traducidos (i18n)
- ✅ **Hero.tsx** - Usa traducciones
- ✅ **Navigation.tsx** - Usa traducciones (excepto algunos textos)
- ✅ **Footer.tsx** - Usa traducciones (excepto datos de contacto)
- ✅ **About.tsx** - Usa traducciones
- ✅ **Services.tsx** - Usa traducciones (excepto nombres de tecnologías)
- ✅ **Portfolio.tsx** - Usa traducciones (excepto nombres de tecnologías)
- ✅ **Contact.tsx** - Usa traducciones
- ✅ **Index.tsx** - Usa traducciones

### Textos Hardcodeados (NO traducidos)
- ❌ **Introduction.tsx** - Texto completamente hardcodeado en inglés
  - Título, descripción, botones
- ❌ **NotFound.tsx** - Texto completamente hardcodeado en inglés
  - Mensaje 404, botón de retorno
- ⚠️ **Footer.tsx** - Email, teléfono, ubicación hardcodeados
- ⚠️ **Navigation.tsx** - Alt del logo, tooltips de idioma
- ⚠️ **Services.tsx** - Nombres de tecnologías
- ⚠️ **Portfolio.tsx** - Nombres de tecnologías

## 🔧 Recomendaciones

1. **Introduction.tsx** debería usar i18n para todos sus textos
   - Agregar claves: `introduction.title`, `introduction.subtitle`, `introduction.description`, `introduction.buttons.seeProjects`, `introduction.buttons.contact`
2. **NotFound.tsx** debería usar i18n
   - Agregar claves: `notFound.title`, `notFound.message`, `notFound.button`
3. **Footer.tsx** debería mover email, teléfono y ubicación a traducciones
   - Agregar claves: `footer.email`, `footer.phone`, `footer.location`
4. **Navigation.tsx** debería traducir tooltips y alt del logo
   - Agregar claves: `nav.logoAlt`, `nav.switchToSpanish`, `nav.switchToEnglish`
5. **Services.tsx** y **Portfolio.tsx** podrían traducir nombres de tecnologías si es necesario
   - Opcional: crear sección `technologies.*` en traducciones

## 📝 Estructura de Traducciones

Las traducciones están organizadas en:
- `nav.*` - Navegación
- `hero.*` - Sección hero
- `services.*` - Página de servicios
- `portfolio.*` - Página de portafolio
- `about.*` - Página sobre nosotros
- `index.*` - Página principal
- `contact.*` - Página de contacto
- `footer.*` - Pie de página
- `modal.*` - Modales
