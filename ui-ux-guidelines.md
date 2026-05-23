# Directrices UI/UX: AsiSport y SaaSport

Este documento contiene las directrices de diseño unificadas para AsiSport y SaaSport, destinadas a ser utilizadas como base para el desarrollo de la Landing Page.

---

## 1. Tipografía

### SaaSport (Principal para la Landing Page)
- **Familia tipográfica**: `Inter, sans-serif`
- **Uso**: Títulos principales, cuerpo de texto, botones y elementos de la interfaz. Aporta una apariencia moderna, limpia y altamente legible.
- **Pesos recomendados**: 
  - Regular (400) para cuerpo de texto.
  - Medium (500) / SemiBold (600) para subtítulos y botones.
  - Bold (700) / Black (900) para encabezados principales.

### AsiSport (Acento / Estilo Deportivo)
- **Familia tipográfica secundaria**: `Permanent Marker, cursive` (utilizado a través de la clase `.font-brush`).
- **Uso**: Acentos decorativos, frases motivacionales o llamadas a la acción con un toque "deportivo" y agresivo.

---

## 2. Paleta de Colores

Ambos sistemas comparten un núcleo oscuro (Dark Mode) con acentos vibrantes que le dan una estética "Premium". 

### Colores Base (Comunes)
- **Fondo Principal**: `#0A0A0A` (Negro profundo)
- **Superficie / Tarjetas**: `#1A1A1A` (Gris muy oscuro)
- **Fondo de Inputs / Elementos menores**: `#121212`
- **Bordes**: `#2D2D2D`

### Texto
- **Texto Principal**: `#FFFFFF` (Blanco puro)
- **Texto Secundario**: `#A0A0A0` (Gris claro)
- **Texto Terciario**: `#6B7280` (Gris medio)

### Colores de Marca y Acento
- **Color Primario (Marca)**: `#FF6B35` (Naranja Vibrante). Se utiliza para los llamados a la acción principales (CTAs), botones destacados y elementos de marca.
- **Color Primario Hover**: `#FF8555`
- **Efecto de Brillo (Glow)**: `rgba(255, 107, 53, 0.3)`

### Colores de Estado
- **Éxito (Success)**: `#00D26A` (Verde brillante)
- **Información / Secundario**: `#0A84FF` (Azul eléctrico)
- **Peligro / Error**: `#FF3B30` (Rojo intenso)
- **Alerta / Advertencia (AsiSport)**: `#FFB020` (Amarillo ámbar)
- **Color Especial Arquero (AsiSport)**: `#9D4EDD` (Morado vibrante)

---

## 3. Efectos y Estilos Adicionales

### Glassmorphism (Efecto Cristal)
- Utilizado para fondos sutiles, paneles superpuestos o estados "hover" en botones secundarios.
- **Fondo**: `rgba(255, 255, 255, 0.05)`
- **Fondo Hover**: `rgba(255, 255, 255, 0.1)`

### Sombras (Shadows & Glows)
- Sombras suaves para separar las tarjetas del fondo.
- **Resplandor (Glow) para el acento**: `0 0 20px -5px rgba(255, 107, 53, 0.3)` (Aporta un aspecto futurista y premium a los botones principales o tarjetas destacadas).

### Botones y Bordes
- **Border Radius (Radios)**: 
  - Pequeño: `2px` - `4px`
  - Medio (Tarjetas estándar): `6px` - `8px`
  - Grande: `12px`
- Los botones principales suelen tener gradientes sutiles y sombras de color para destacar sobre el fondo oscuro.

---

## 4. Recomendaciones para la Landing Page

1. **Diseño Premium**: Mantener el fondo oscuro (`#0A0A0A`) como predeterminado. Evitar colores genéricos y abusar del naranja (`#FF6B35`) para resaltar elementos clave.
2. **Interactividad**: Incluir micro-animaciones en los botones (efectos de hover con `transform: translateY(-2px)` y aumento de la sombra/brillo).
3. **Jerarquía Tipográfica**: Usar `Inter` en pesos muy altos (800/900) para los títulos (H1/H2) y pesos normales (400) con texto secundario (`#A0A0A0`) para las descripciones.
4. **Detalles Deportivos**: Incorporar detalles esporádicos con la fuente `Permanent Marker` para enfatizar el carácter deportivo de las aplicaciones.
