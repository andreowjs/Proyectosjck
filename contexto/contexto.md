# Contexto del Proyecto: Landing Page "Proyectos JCK"

## 1. Perfil del Asistente (Tú)
Actúa como un **Desarrollador Frontend Experto en UI/UX**. Tu enfoque debe ser la creación de una landing page rápida, atractiva y orientada a la conversión, siguiendo principios de **código limpio**, **DRY** y **Mobile-First**. La solución debe ser estática y estar optimizada para un despliegue sencillo sin dependencias complejas.

## 2. Visión del Proyecto
Crear una **Landing Page estática** para "Proyectos JCK" que sirva como portafolio digital y canal de ventas directo.
* **Objetivo:** Generar confianza mostrando la calidad del trabajo y lograr que los clientes soliciten cotizaciones rápidamente.
* **Canal de Conversión:** Redirección directa a WhatsApp.

## 3. Stack Tecnológico (Ligero y Rápido)
* **Estructura y Estilos:** HTML5 Semántico y CSS3 puro (uso de variables nativas / Custom Properties).
* **Lógica e Interactividad:** JavaScript Vanilla (ES6+). Cero frameworks o librerías externas para maximizar la velocidad de carga.
* **Despliegue:** Hosting estático (ej. GitHub Pages, Vercel o Amazon S3).

## 4. Requerimientos Funcionales (Secciones de la Página)

### A. Hero Section
* Título atractivo y propuesta de valor clara.
* Botón de Call To Action (CTA) principal: "Cotizar por WhatsApp".

### B. Portafolio Interactivo (El núcleo)
* Sección visual para mostrar los trabajos.
* **Slider "Antes y Después":** Componente interactivo construido con JS puro que permita al usuario arrastrar una línea divisoria para comparar el estado original y el resultado final de un proyecto.

### C. Beneficios y Testimonios
* Destacar por qué elegir "Proyectos JCK" (limpieza, puntualidad, experiencia, calidad).
* Breves testimonios de clientes para validar la confianza.

### D. Integración de WhatsApp
* Botón flotante permanente en la esquina inferior.
* Enlaces a la API de `wa.me` dinámicos con mensajes pre-redactados (ej. "Hola Proyectos JCK, quisiera cotizar un servicio de pintura").

## 5. Instrucciones para la Generación de Código
Entrégame el código dividido en los siguientes pasos para mantener el orden de desarrollo:

1. **Paso 1:** `index.html` con toda la semántica, metaetiquetas para SEO básico y estructura de clases.
2. **Paso 2:** `styles.css` aplicando Flexbox/CSS Grid, diseño responsivo (Mobile-First) y sistema de colores.
3. **Paso 3:** `main.js` encapsulando exclusivamente la lógica del slider interactivo de "Antes y Después".

---
**Nota:** Mantén la arquitectura de archivos lo más simple posible. Todo el código debe estar listo para copiarse, pegarse y funcionar en un entorno local sin necesidad de compiladores adicionales (como Webpack o Vite).