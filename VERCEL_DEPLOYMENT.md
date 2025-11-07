# Guía de Despliegue en Vercel - Claudia Estilista

Este documento contiene las instrucciones para desplegar el sitio web de Claudia Estilista en Vercel.

## Requisitos Previos

- Una cuenta en GitHub, GitLab o Bitbucket
- Una cuenta en Vercel (gratuita en https://vercel.com)
- El repositorio del proyecto debe estar en uno de estos servicios de Git

## Pasos para Desplegar

### 1. Preparar el Repositorio Git

El proyecto ya está configurado con Git. Asegúrate de que todos los cambios estén commiteados:

```bash
git status
git push origin master
```

### 2. Conectar a Vercel

1. Ve a https://vercel.com/new
2. Haz clic en **"Import Git Repository"**
3. Selecciona tu proveedor de Git (GitHub, GitLab o Bitbucket)
4. Busca el repositorio `claudia_estilista_lp`
5. Haz clic en **"Import"**

### 3. Configurar el Proyecto en Vercel

En la pantalla de configuración:

- **Project Name**: `claudia-estilista` (o el nombre que prefieras)
- **Framework**: Vercel debería detectar automáticamente "Vite"
- **Build Command**: `pnpm build` (ya configurado en vercel.json)
- **Output Directory**: `dist/public` (ya configurado en vercel.json)
- **Install Command**: `pnpm install` (ya configurado en vercel.json)

### 4. Desplegar

Haz clic en el botón **"Deploy"** y espera a que se complete el despliegue.

### 5. Configurar Dominio Personalizado (Opcional)

Una vez desplegado:

1. Ve a la sección **"Settings"** del proyecto en Vercel
2. Haz clic en **"Domains"**
3. Agrega tu dominio personalizado (ej: claudiaestilista.com)
4. Sigue las instrucciones para configurar los registros DNS

## Estructura del Proyecto

```
claudia_estilista_lp/
├── client/
│   ├── public/          ← Imágenes y assets estáticos
│   ├── src/
│   │   ├── pages/       ← Páginas del sitio
│   │   ├── components/  ← Componentes reutilizables
│   │   └── index.css    ← Estilos globales
│   └── index.html       ← HTML principal
├── vite.config.ts       ← Configuración de Vite
├── vercel.json          ← Configuración de Vercel
└── package.json         ← Dependencias del proyecto
```

## Características del Sitio

✅ Landing page completa y responsive
✅ Sección de servicios (6 items)
✅ Galería de trabajos (6 imágenes)
✅ Sección sobre Claudia con badges
✅ Testimonios de clientes (3 cards)
✅ Ubicación con Google Maps integrado
✅ CTA final con botón de reserva
✅ Footer con redes sociales
✅ Botón WhatsApp flotante
✅ Navegación suave (smooth scroll)
✅ Animaciones fade-in al scroll
✅ Diseño 100% responsive
✅ Optimizado para conversión

## Información de Contacto

- **Teléfono**: 011 3449-3593 (WhatsApp)
- **Ubicación**: Moreno 1190, B1667 Tortuguitas, Buenos Aires
- **Horarios**: Lunes a Sábados 9:00 - 19:00 hs

## Solución de Problemas

### El despliegue falla

1. Verifica que `pnpm` esté instalado en el proyecto
2. Comprueba que todos los archivos estén commiteados en Git
3. Revisa los logs de construcción en Vercel para más detalles

### Las imágenes no se cargan

Las imágenes están en `client/public/` y Vercel las servirá automáticamente desde la raíz del sitio.

### El sitio se ve diferente en Vercel

Asegúrate de hacer un `pnpm build` localmente para verificar que todo funciona correctamente antes de desplegar.

## Próximos Pasos

Después del despliegue, considera:

1. Agregar un formulario de contacto
2. Integrar reseñas de Google en tiempo real
3. Crear un blog de tips de belleza
4. Configurar analytics (Google Analytics, Vercel Analytics)
5. Optimizar SEO con meta tags adicionales

¡Listo para desplegar! 🚀
