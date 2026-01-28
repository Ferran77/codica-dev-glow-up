# Guía: Crear Video con Transparencia (Canal Alpha)

## ¿Es posible crear un video "sin fondo"?

**¡Sí!** Es posible crear videos con transparencia usando el canal alpha. Esto te permitirá tener un video animado que mantenga la transparencia, igual que tu PNG.

## Formatos que soportan transparencia

### 1. **WebM con VP8/VP9 Alpha** (Recomendado)
- ✅ Excelente soporte en navegadores modernos
- ✅ Buena compresión
- ✅ Soporte nativo en Chrome, Firefox, Edge

### 2. **MOV con PNG Alpha**
- ✅ Soporte en Safari y algunos navegadores
- ⚠️ Archivos más grandes

## Herramientas para crear videos con transparencia

### Opción 1: Adobe After Effects (Profesional)
1. Crea tu composición con transparencia
2. Exporta usando:
   - **Formato**: QuickTime
   - **Codec**: PNG (con canal alpha)
   - O usa el plugin **WebM Exporter** para exportar directamente a WebM con alpha

### Opción 2: FFmpeg (Gratis, línea de comandos)

## 📚 Guía Detallada: FFmpeg para WebM con Alpha

### Paso 1: Instalar FFmpeg

#### Windows:
1. Descarga desde: https://ffmpeg.org/download.html
2. O usa Chocolatey: `choco install ffmpeg`
3. O usa winget: `winget install FFmpeg`

#### macOS:
```bash
brew install ffmpeg
```

#### Linux (Ubuntu/Debian):
```bash
sudo apt update
sudo apt install ffmpeg
```

### Paso 2: Verificar que tu video tiene canal alpha

⚠️ **Nota importante**: Los archivos `.mp4` normalmente **NO tienen canal alpha**. El formato MP4 no soporta transparencia nativamente. Si necesitas transparencia, necesitas un archivo `.mov` con codec PNG o una secuencia de PNGs.

Antes de convertir, verifica que tu video de entrada realmente tiene transparencia:

#### Opción 1: Ver información básica
```bash
# Navega al directorio donde está tu video primero
cd ruta/a/tu/video

# O usa la ruta completa
ffmpeg -i "C:\ruta\completa\a\tu-video.mov"
```

**En Windows PowerShell, navega así:**
```powershell
# Ejemplo: si tu video está en public/assets/
cd C:\Users\arter\Documents\Code\codica-dev-glow-up\public\assets
ffmpeg -i tu-video.mov
```

Busca en la salida algo como:
- `rgba` o `yuva` en el formato de píxeles
- Si ves `yuv420p` (sin 'a') = **NO tiene alpha** ❌
- Si ves `yuva420p` o `rgba` = **SÍ tiene alpha** ✅

#### Opción 2: Verificar formato de píxeles específicamente (más rápido)
```bash
# Usa ffprobe para ver solo el formato de píxeles
ffprobe -v error -select_streams v:0 -show_entries stream=pix_fmt -of default=noprint_wrappers=1 "ruta/a/tu-video.mov"
```

**Ejemplo en Windows:**
```powershell
cd C:\Users\arter\Documents\Code\codica-dev-glow-up\public\assets
ffprobe -v error -select_streams v:0 -show_entries stream=pix_fmt -of default=noprint_wrappers=1 home-4.mov
```

**Resultados esperados:**
- `pix_fmt=yuva420p` o `pix_fmt=rgba` = ✅ **Tiene alpha**
- `pix_fmt=yuv420p` (sin 'a') = ❌ **NO tiene alpha**

#### Si tu video NO tiene alpha:

Si tu video original es `.mp4` o no tiene transparencia, tienes varias opciones:

**Opción 1: Verificar primero (por si acaso)**
Aunque es muy raro, algunos MP4 pueden tener información de transparencia. Verifica:
```powershell
cd C:\Users\arter\Documents\Code\codica-dev-glow-up\public\assets
ffprobe -v error -select_streams v:0 -show_entries stream=pix_fmt -of default=noprint_wrappers=1 home-4.mp4
```
Si muestra `yuv420p` (sin 'a') = **NO tiene alpha** ❌

**Opción 2: Usar solo la imagen PNG (Funciona ahora mismo)**
- ✅ El código ya está configurado para mostrar la imagen PNG primero
- ✅ La imagen se muestra hasta que el usuario interactúe
- ✅ Si no tienes video con transparencia, simplemente no se activará el video
- ✅ **Esta es la solución más rápida y funciona perfectamente**

**Opción 3: Convertir MP4 a WebM (sin transparencia)**
Si quieres usar el video aunque no tenga transparencia:
```powershell
cd C:\Users\arter\Documents\Code\codica-dev-glow-up\public\assets
ffmpeg -i home-4.mp4 -c:v libvpx-vp9 -pix_fmt yuv420p -b:v 2M -y home-4.webm
```
⚠️ **Nota**: Este video NO tendrá transparencia, pero funcionará como video normal.

**Opción 4: Crear video con transparencia desde cero (Para el futuro)**
Si quieres un video con transparencia real:
1. Exporta desde tu software de animación como:
   - `.mov` con codec PNG (con canal alpha)
   - O secuencia de PNGs con transparencia
2. Luego convierte a WebM con alpha usando los comandos de esta guía

**Recomendación para tu caso:**
Como ya tienes la imagen PNG funcionando perfectamente, puedes:
- ✅ Dejar el código como está (imagen primero, video después de interacción)
- ✅ Si no tienes video con transparencia, simplemente no coloques los archivos `.webm` o `.mp4` en `public/assets/`
- ✅ El código mostrará solo la imagen y funcionará perfectamente

### Paso 3: Convertir video existente a WebM con alpha

#### Comando básico (recomendado):
```bash
ffmpeg -i tu-video.mov \
  -c:v libvpx-vp9 \
  -pix_fmt yuva420p \
  -auto-alt-ref 0 \
  -b:v 2M \
  -y home-4.webm
```

#### Explicación detallada de cada parámetro:

**`-i tu-video.mov`**
- Especifica el archivo de entrada
- Puede ser `.mov`, `.mp4`, `.avi`, etc., siempre que tenga canal alpha

**`-c:v libvpx-vp9`**
- `-c:v` = codec de video
- `libvpx-vp9` = codec VP9 (soporta transparencia)
- Alternativa: `libvpx-vp8` (VP8, más compatible pero menos eficiente)

**`-pix_fmt yuva420p`** ⭐ **CRÍTICO para transparencia**
- `yuva` = YUV con canal Alpha
- `420p` = submuestreo de croma (balance calidad/tamaño)
- Alternativas:
  - `yuva444p` = mejor calidad, archivo más grande
  - `yuva422p` = calidad intermedia

**`-auto-alt-ref 0`**
- Desactiva referencias alternativas
- **Importante**: Necesario para preservar correctamente el canal alpha
- Sin esto, la transparencia puede verse corrupta

**`-b:v 2M`**
- Bitrate de video: 2 megabits por segundo
- Ajusta según necesites:
  - `1M` = menor calidad, archivo más pequeño
  - `3M` = mejor calidad, archivo más grande
  - `5M` = alta calidad, archivo grande

**`-y`**
- Sobrescribe el archivo de salida sin preguntar

**`home-4.webm`**
- Nombre del archivo de salida

### Paso 4: Comando avanzado (mejor calidad/control)

```bash
ffmpeg -i tu-video.mov \
  -c:v libvpx-vp9 \
  -pix_fmt yuva420p \
  -auto-alt-ref 0 \
  -crf 30 \
  -b:v 0 \
  -row-mt 1 \
  -threads 4 \
  -speed 1 \
  -y home-4.webm
```

#### Parámetros adicionales:

**`-crf 30`** (Constant Rate Factor)
- Controla la calidad: menor número = mejor calidad
- Rango recomendado: 20-40
- `20` = muy alta calidad, archivo grande
- `30` = buena calidad, tamaño razonable (recomendado)
- `40` = calidad aceptable, archivo pequeño

**`-b:v 0`**
- Usa CRF en lugar de bitrate fijo
- Solo funciona cuando usas `-crf`

**`-row-mt 1`**
- Habilita multi-threading por filas
- Acelera la codificación

**`-threads 4`**
- Número de hilos de CPU a usar
- Ajusta según tu procesador (4, 8, 16, etc.)

**`-speed 1`**
- Velocidad de codificación (0-5)
- `0` = más lento, mejor compresión
- `1` = balance recomendado
- `5` = más rápido, peor compresión

### Paso 5: Convertir secuencia de PNGs a WebM

Si tienes una secuencia de imágenes PNG con transparencia:

```bash
ffmpeg -framerate 30 -i frame_%04d.png \
  -c:v libvpx-vp9 \
  -pix_fmt yuva420p \
  -auto-alt-ref 0 \
  -crf 30 \
  -y home-4.webm
```

**Explicación:**
- `-framerate 30` = 30 frames por segundo
- `-i frame_%04d.png` = busca archivos como `frame_0001.png`, `frame_0002.png`, etc.
- Si tus archivos tienen otro formato, ajusta: `imagen_%03d.png` para `imagen_001.png`

### Paso 6: Verificar el resultado

#### Verificar que tiene alpha:
```bash
ffprobe -v error -select_streams v:0 -show_entries stream=pix_fmt -of default=noprint_wrappers=1 home-4.webm
```

Debería mostrar: `pix_fmt=yuva420p` ✅

#### Ver información completa:
```bash
ffprobe home-4.webm
```

#### Probar en navegador:
1. Abre `home-4.webm` directamente en Chrome/Firefox
2. Si ves el fondo del navegador a través del video = tiene transparencia ✅

### Solución de problemas comunes

#### ❌ Error: "Unknown pixel format: yuva420p"
**Solución:** Tu versión de FFmpeg no tiene soporte para VP9. Actualiza FFmpeg:
```bash
# Windows: descarga la última versión
# macOS:
brew upgrade ffmpeg
# Linux:
sudo apt update && sudo apt upgrade ffmpeg
```

#### ❌ El video no tiene transparencia después de convertir
**Causas posibles:**
1. El video de entrada no tiene canal alpha
   - **Solución:** Verifica con `ffprobe` antes de convertir
2. Estás usando `-pix_fmt yuv420p` en lugar de `yuva420p`
   - **Solución:** Usa `yuva420p` (con 'a' de alpha)
3. El video de entrada perdió el alpha en algún paso previo
   - **Solución:** Asegúrate de exportar con alpha desde tu software de origen

#### ❌ El archivo resultante es muy grande
**Soluciones:**
1. Reduce el bitrate: `-b:v 1M` en lugar de `2M`
2. Aumenta el CRF: `-crf 35` en lugar de `30`
3. Usa `yuva420p` en lugar de `yuva444p`

#### ❌ La conversión es muy lenta
**Soluciones:**
1. Aumenta `-speed`: `-speed 2` o `-speed 3`
2. Aumenta threads: `-threads 8`
3. Usa VP8 en lugar de VP9 (más rápido pero menos eficiente):
   ```bash
   -c:v libvpx-vp8 -pix_fmt yuva420p
   ```

### Ejemplos de comandos completos

#### Para web (balance calidad/tamaño):
```bash
ffmpeg -i input.mov \
  -c:v libvpx-vp9 \
  -pix_fmt yuva420p \
  -auto-alt-ref 0 \
  -crf 30 \
  -b:v 0 \
  -row-mt 1 \
  -threads 4 \
  -speed 1 \
  -y home-4.webm
```

#### Para máxima calidad:
```bash
ffmpeg -i input.mov \
  -c:v libvpx-vp9 \
  -pix_fmt yuva444p \
  -auto-alt-ref 0 \
  -crf 20 \
  -b:v 0 \
  -row-mt 1 \
  -threads 8 \
  -speed 0 \
  -y home-4.webm
```

#### Para archivo pequeño (móvil):
```bash
ffmpeg -i input.mov \
  -c:v libvpx-vp9 \
  -pix_fmt yuva420p \
  -auto-alt-ref 0 \
  -crf 35 \
  -b:v 0 \
  -row-mt 1 \
  -threads 4 \
  -speed 2 \
  -y home-4.webm
```

### Opción 3: Blender (Gratis, 3D/Animación)
1. Renderiza tu animación con canal alpha
2. Exporta como PNG sequence
3. Usa FFmpeg para convertir a WebM con alpha

### Opción 4: Online Tools
- **CloudConvert**: Convierte videos a WebM con alpha
- **Kapwing**: Editor online con soporte para transparencia

## Pasos recomendados

### 1. Preparar tu animación
- Asegúrate de que el fondo sea transparente en tu software de animación
- Exporta como secuencia de PNGs con transparencia, o como video MOV con canal alpha

### 2. Convertir a WebM con alpha usando FFmpeg

**📖 Ver la sección detallada "Guía Detallada: FFmpeg para WebM con Alpha" más abajo para explicación completa de cada parámetro.**

#### Comando rápido (si tienes un video MOV con alpha):
```bash
ffmpeg -i input.mov -c:v libvpx-vp9 -pix_fmt yuva420p -auto-alt-ref 0 -b:v 2M -y home-4.webm
```

#### Comando recomendado (mejor calidad/tamaño):
```bash
ffmpeg -i input.mov \
  -c:v libvpx-vp9 \
  -pix_fmt yuva420p \
  -auto-alt-ref 0 \
  -crf 30 \
  -b:v 0 \
  -row-mt 1 \
  -threads 4 \
  -speed 1 \
  -y home-4.webm
```

#### Si tienes una secuencia de PNGs:
```bash
ffmpeg -framerate 30 -i frame_%04d.png \
  -c:v libvpx-vp9 \
  -pix_fmt yuva420p \
  -auto-alt-ref 0 \
  -crf 30 \
  -b:v 0 \
  -row-mt 1 \
  -threads 4 \
  -speed 1 \
  -y home-4.webm
```

### 3. Crear versión MP4 (fallback, sin transparencia)
Para navegadores que no soporten WebM con alpha, necesitarás un MP4 sin transparencia:
```bash
ffmpeg -i input.mov \
  -c:v libx264 \
  -pix_fmt yuv420p \
  -b:v 2M \
  -y home-4.mp4
```

## Parámetros importantes de FFmpeg

- `-pix_fmt yuva420p`: Formato de píxeles con canal alpha (solo para WebM)
- `-auto-alt-ref 0`: Desactiva referencias alternativas (mejor para transparencia)
- `-b:v 2M`: Bitrate de video (ajusta según necesites)
- `-crf 30`: Calidad (menor = mejor calidad, mayor tamaño)

## Actualizar el código

Una vez que tengas tu video con transparencia, el código ya está preparado. Solo asegúrate de:

1. Colocar `home-4.webm` (con alpha) en `public/assets/`
2. Colocar `home-4.mp4` (sin alpha, como fallback) en `public/assets/`
3. El navegador usará automáticamente WebM si lo soporta, o MP4 como fallback

## Notas importantes

⚠️ **Limitaciones**:
- Safari en iOS puede tener problemas con WebM con alpha
- Algunos navegadores antiguos no soportan transparencia en video
- El MP4 fallback no tendrá transparencia (por eso es fallback)

✅ **Recomendaciones**:
- Usa WebM con VP9 alpha como formato principal
- Mantén el MP4 como fallback
- Asegúrate de que ambos videos tengan las mismas dimensiones que tu PNG

## Verificar que el video tiene transparencia

### Método 1: En el navegador
1. Abre el archivo WebM directamente en Chrome/Firefox
2. Si ves el fondo del navegador a través del video, ¡tiene transparencia! ✅

### Método 2: Con FFprobe
```bash
ffprobe -v error -select_streams v:0 -show_entries stream=pix_fmt -of default=noprint_wrappers=1 home-4.webm
```
Debería mostrar: `pix_fmt=yuva420p` (la 'a' indica que tiene canal alpha)

### Método 3: Ver información completa
```bash
ffprobe home-4.webm
```
Busca en la salida el formato de píxeles que debe contener "yuva" o "rgba"

## 🚀 Scripts listos para usar

### Script para Windows (convert.bat)
Crea un archivo `convert.bat`:
```batch
@echo off
echo Convirtiendo video a WebM con alpha...
ffmpeg -i %1 ^
  -c:v libvpx-vp9 ^
  -pix_fmt yuva420p ^
  -auto-alt-ref 0 ^
  -crf 30 ^
  -b:v 0 ^
  -row-mt 1 ^
  -threads 4 ^
  -speed 1 ^
  -y home-4.webm
echo Conversion completada!
pause
```
Uso: `convert.bat tu-video.mov`

### Script para macOS/Linux (convert.sh)
Crea un archivo `convert.sh`:
```bash
#!/bin/bash
echo "Convirtiendo video a WebM con alpha..."
ffmpeg -i "$1" \
  -c:v libvpx-vp9 \
  -pix_fmt yuva420p \
  -auto-alt-ref 0 \
  -crf 30 \
  -b:v 0 \
  -row-mt 1 \
  -threads 4 \
  -speed 1 \
  -y home-4.webm
echo "Conversión completada!"
```
Uso: `chmod +x convert.sh && ./convert.sh tu-video.mov`
