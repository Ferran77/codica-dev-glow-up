# Configuración de EmailJS para el Formulario de Contacto

Este documento explica cómo configurar EmailJS para que el formulario de contacto envíe correos reales sin necesidad de backend.

## Paso 1: Crear cuenta en EmailJS

1. Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
2. Crea una cuenta gratuita (permite hasta 200 emails/mes)

## Paso 2: Configurar un Servicio de Email

1. En el dashboard de EmailJS, ve a **Email Services**
2. Haz clic en **Add New Service**
3. Selecciona tu proveedor de email (Gmail, Outlook, etc.)
4. Sigue las instrucciones para conectar tu cuenta
5. **Copia el Service ID** (lo necesitarás después)

## Paso 3: Crear un Template de Email

1. Ve a **Email Templates**
2. Haz clic en **Create New Template**
3. Configura el template con los siguientes campos:

### Campos del Template

En el template de EmailJS, usa estos nombres de variables que coinciden con los campos del formulario:

- `{{name}}` - Nombre del usuario
- `{{email}}` - Correo electrónico del usuario
- `{{message}}` - Mensaje del usuario

### Ejemplo de Template:

```
Asunto: Nuevo mensaje de contacto desde Códica Dev

De: {{name}} <{{email}}>
Mensaje:

{{message}}

---
Este mensaje fue enviado desde el formulario de contacto de Códica Dev.
```

4. **Copia el Template ID** (lo necesitarás después)

## Paso 4: Obtener tu Public Key

1. Ve a **Account** > **General**
2. En la sección **API Keys**, copia tu **Public Key**

## Paso 5: Configurar Variables de Entorno

1. Crea un archivo `.env` en la raíz del proyecto (si no existe)
2. Agrega las siguientes variables:

```env
VITE_EMAILJS_SERVICE_ID=tu_service_id_aqui
VITE_EMAILJS_TEMPLATE_ID=tu_template_id_aqui
VITE_EMAILJS_PUBLIC_KEY=tu_public_key_aqui
```

**Importante:** 
- Reemplaza los valores con tus credenciales reales
- El archivo `.env` NO debe subirse a Git (ya está en `.gitignore`)
- En Vite, las variables de entorno deben comenzar con `VITE_` para ser accesibles en el frontend

## Paso 6: Reiniciar el servidor de desarrollo

Después de crear/actualizar el archivo `.env`, reinicia el servidor de desarrollo:

```bash
npm run dev
```

## Cómo conectar el Template con los campos del formulario

El componente `ContactForm.tsx` usa `emailjs.sendForm()` que automáticamente mapea los campos del formulario HTML a las variables del template de EmailJS.

### Mapeo automático:

- Campo HTML `name="name"` → Variable `{{name}}` en el template
- Campo HTML `name="email"` → Variable `{{email}}` en el template  
- Campo HTML `name="message"` → Variable `{{message}}` en el template

**Importante:** Los atributos `name` de los inputs del formulario deben coincidir exactamente con los nombres de las variables en el template de EmailJS (sin las llaves `{{}}`).

### Ejemplo de configuración del template:

Si tu formulario tiene:
```html
<input name="name" />
<input name="email" />
<textarea name="message"></textarea>
```

Tu template de EmailJS debe usar:
```
Nombre: {{name}}
Email: {{email}}
Mensaje: {{message}}
```

## Solución de Problemas

### Error: "Configuration error: EmailJS credentials are missing"

- Verifica que el archivo `.env` existe en la raíz del proyecto
- Verifica que las variables comienzan con `VITE_`
- Reinicia el servidor de desarrollo después de crear/modificar `.env`

### Error: "Error sending message"

- Verifica que el Service ID, Template ID y Public Key son correctos
- Verifica que el servicio de email está activo en EmailJS
- Revisa la consola del navegador para más detalles del error

### El correo no llega

- Verifica que el servicio de email está correctamente conectado en EmailJS
- Revisa la carpeta de spam
- Verifica los logs en el dashboard de EmailJS

## Notas de Seguridad

- **Nunca** subas el archivo `.env` a Git (ya está en `.gitignore`)
- El Public Key de EmailJS es seguro de exponer en el frontend (está diseñado para eso)
- El correo de destino se configura en el template de EmailJS, no en el código (evita spam)
