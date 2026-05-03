# 📱 GUÍA DE USO: Landing Page JCK Pintura

## 🚀 ¿Qué es lo que recibiste?

Una **landing page profesional** completamente funcional para JCK Pintura lista para usar. Incluye:

✅ Diseño moderno (Azul #1E3A5F + Naranja #E8963A)
✅ Diseño responsivo (se ve bien en móvil, tablet y desktop)
✅ Formulario de contacto que envía a WhatsApp
✅ Botones de llamada directa y email
✅ Secciones: Hero, Servicios, Proyectos, Testimonios, Proceso
✅ Animaciones y efectos profesionales

---

## 🔧 CÓMO PERSONALIZAR LA LANDING

### PASO 1: Cambiar números de teléfono/email

Busca estos números en el código y cámbialos por los reales de tu papá:

```
🔍 Buscar: +51999999999
➡️ Reemplazar por: +51 XXX XXX XXX (número real)
```

```
🔍 Buscar: info@jckpintura.com
➡️ Reemplazar por: el email real
```

**Lugares donde aparecen:**
1. Línea 450 (botón WhatsApp en hero)
2. Línea 470 (botón WhatsApp en CTA final)
3. Línea 475 (botón llamar en CTA final)
4. Línea 476 (botón email en CTA final)
5. Línea 495 (WhatsApp en footer)
6. Línea 496 (email en footer)
7. Línea 632 (función de envío del formulario)

### PASO 2: Cambiar ubicación

```
🔍 Buscar: "El Polo, Surco" (en proyectos)
➡️ Reemplazar por: tu zona de trabajo real

🔍 Buscar: "Lima, Perú" (en footer)
➡️ Reemplazar por: "Tu distrito, Lima, Perú"
```

### PASO 3: Cambiar testimonios

Busca esta sección en el código:

```html
<div class="testimonial-card">
    <div class="rating">⭐⭐⭐⭐⭐</div>
    <p class="testimonial-text">"Excelente trabajo. El equipo fue..."</p>
    <p class="testimonial-author">Carlos M. - Surco</p>
</div>
```

Reemplázalo con testimonios reales de clientes satisfechos de tu papá.

### PASO 4: Cambiar proyectos

Busca las tarjetas de proyectos:

```html
<div class="project-card">
    <div class="project-image">📸 Antes/Después: Casa en Surco</div>
    <div class="project-info">
        <h4>Casa Residencial</h4>
        <p>Interior y exterior completamente renovado</p>
        <div class="project-location">📍 El Polo, Surco</div>
    </div>
</div>
```

Cambiar el texto con tus proyectos reales. Reemplaza la línea:
```html
<div class="project-image">📸 Antes/Después: Casa en Surco</div>
```

Por una imagen real. Por ejemplo:
```html
<div class="project-image" style="background-image: url('tu-foto.jpg'); background-size: cover;"></div>
```

### PASO 5: Agregar fotos reales

Opción A: Agregar imagen en proyecto-image:
```html
<div class="project-image" style="background-image: url('antes-despues-1.jpg'); background-size: cover; background-position: center;"></div>
```

Opción B: Mantener el emoji pero cambiar el texto:
```html
<div class="project-image">📸 Casa Pintada - Surco 2025</div>
```

---

## 💾 CÓMO GUARDAR Y PUBLICAR LA LANDING

### Opción 1: En tu computadora (GRATIS)
1. Guarda el archivo como `index.html`
2. Abre en navegador (doble click)
3. ¡Funciona sin internet!

### Opción 2: En un dominio propio (Recomendado)
1. Compra dominio: `jckpintura.com` o `jckpinturas.pe` (~$10-15 USD/año)
   - Proveedores: GoDaddy, Namecheap, Ionos
   
2. Crea cuenta en hosting gratis:
   - **Vercel** (vercel.com) - Gratis, muy fácil
   - **Netlify** (netlify.com) - Gratis, muy fácil
   - **GitHub Pages** (github.com) - Gratis, requiere más pasos
   
3. Sube el archivo `index.html`

4. Conecta tu dominio al hosting

### Opción 3: Usar plataformas sin código (MÁS FÁCIL)
- **Wix** (wix.com): Arrastra y suelta, muy intuitivo
- **Squarespace** (squarespace.com): Diseño profesional
- **Shopify** (shopify.com): Si quieres vender también

---

## ✏️ CAMBIOS RÁPIDOS EN 5 MINUTOS

### Cambiar nombre del logo:
```html
<div class="logo">JCK <span>Pintura</span></div>
```
➡️ Puedes cambiar "Pintura" por "Soluciones" o lo que prefieras

### Cambiar el título principal (Hero):
```html
<h1>Pintado Profesional en Lima</h1>
```
➡️ Personaliza según lo que tu papá ofrezca

### Cambiar descripción en hero:
```html
<p>Transformamos tus espacios con acabados de calidad garantizada</p>
```
➡️ Cámbialo por algo más específico si lo deseas

---

## 📊 USAR ANALYTICS (Para medir resultados)

Una vez publicada la landing, agrega Google Analytics para ver:
- Cuántas personas la visitan
- De dónde vienen
- Qué secciones leen más
- Cuántos clics en botones

1. Ve a: `google.com/analytics`
2. Crea una cuenta gratuita
3. Copia el código de seguimiento
4. Pégalo en el HTML (antes del `</head>`)

---

## 🔗 ENLACES QUE NECESITAS CAMBIAR

### Todos estos + el número 999999999:

| Elemento | Buscar | Reemplazar por |
|----------|--------|----------------|
| WhatsApp | +51999999999 | +51 + tu número real |
| Email | info@jckpintura.com | tu email |
| Teléfono | +51999999999 | tu número |
| Ubicación | Lima, Perú | tu zona real |

---

## 🎨 CAMBIAR COLORES (Opcional)

Si quieres otros colores, busca estas líneas:

```css
:root {
    --primary: #1E3A5F;        /* Azul oscuro */
    --secondary: #E8963A;      /* Naranja */
    --accent: #F7931E;         /* Naranja brillante */
    --light-bg: #F8F9FA;       /* Gris claro */
    --dark-text: #2C3E50;      /* Gris oscuro */
    --white: #FFFFFF;          /* Blanco */
}
```

Reemplaza los códigos de color por otros. Ejemplo:
- Verde profesional: `#2E7D32`
- Azul claro: `#0288D1`
- Rojo atrevido: `#D32F2F`

---

## 📱 COMPARTIR LA LANDING

Una vez publicada:

1. **En Facebook**: Comparte el link en tu página
   ```
   "Nuevo sitio web: jckpintura.com 🎨
   Solicita tu cotización gratis hoy"
   ```

2. **En WhatsApp**: Envía a clientes
   ```
   "Mira nuestro nuevo sitio: jckpintura.com
   Cotiza tu trabajo aquí 👍"
   ```

3. **En Google Maps**: Agrega el link a tu negocio
   - Busca "Google My Business"
   - Agrega el sitio web

4. **En Llamadas**: Di al cliente
   ```
   "Entra a jckpintura.com para ver nuestros proyectos"
   ```

---

## ✨ PRÓXIMOS PASOS PARA MEJORAR

### Semana 1-2:
- [x] Personaliza números y contacto
- [x] Agrega testimonios reales
- [x] Cambia proyectos por los reales
- [x] Publica en un dominio

### Semana 3-4:
- [ ] Agrega 5-6 fotos antes/después reales
- [ ] Integra Google Analytics
- [ ] Crea 3 posts en Facebook
- [ ] Crea 5 historias en Instagram

### Mes 2:
- [ ] Agrega blog con tips de pintura
- [ ] Integra WhatsApp Business
- [ ] Crea videos cortos (Reels)
- [ ] Pide reseñas en Google

---

## 🆘 PROBLEMAS COMUNES

### P: El formulario no funciona
R: Asegúrate de haber actualizado el número de WhatsApp en la línea 632.

### P: La página se ve fea en móvil
R: Abre en navegador (no en app). Está optimizada para móvil.

### P: ¿Cómo cambio las fuentes?
R: En la sección `<style>`, busca `font-family` y cámbialo.

### P: ¿Puedo agregar chat en vivo?
R: Sí, usa **Tawk.to** (gratis) o **Drift** (gratis hasta 100 chats/mes)

---

## 📞 CONTACTOS IMPORTANTES

```
GoDaddy (dominio):     godaddy.com
Vercel (hosting):      vercel.com
Netlify (hosting):     netlify.com
Google Analytics:      analytics.google.com
Google My Business:    google.com/business
Tawk Chat:             tawk.to
```

---

## 🎯 CHECKLIST FINAL

- [ ] Cambié teléfono/email/ubicación
- [ ] Agré testimonios reales
- [ ] Cambié proyectos a los reales
- [ ] Probé todos los botones
- [ ] Probé en móvil
- [ ] Publiqué el sitio
- [ ] Compartí en redes sociales
- [ ] Agregué a Google My Business

---

¡Listo! Tu landing está 100% funcional. Ahora solo falta llenarlo con contenido real y compartirlo. 🚀
