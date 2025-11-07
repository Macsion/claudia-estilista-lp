# Claudia Estilista - Landing Page

Landing page profesional y moderna para Claudia Estilista, un salón unisex ubicado en Tortuguitas, Buenos Aires.

## 🎨 Características

- **Diseño Elegante**: Estilo Noir Elegante Minimalista con colores negro, blanco y fucsia
- **100% Responsive**: Optimizado para móviles, tablets y desktops
- **Secciones Completas**:
  - Hero section con imagen del salón
  - Servicios profesionales (6 categorías)
  - Galería de trabajos (6 imágenes de transformaciones)
  - Sección "Sobre Claudia" con badges de calificación
  - Testimonios de clientes (3 reseñas con 5 estrellas)
  - Ubicación con Google Maps integrado
  - CTA final para reservas
  - Footer con redes sociales

- **Funcionalidades Interactivas**:
  - Botón WhatsApp flotante sticky
  - Navegación suave (smooth scroll)
  - Animaciones fade-in al scroll
  - Efectos hover en cards y botones
  - Integración con Google Maps

- **Optimizaciones**:
  - SEO optimizado con meta tags
  - Open Graph tags para redes sociales
  - Imágenes optimizadas y lazy loading
  - Tipografías elegantes (Cormorant Garamond, Raleway)
  - Contraste WCAG AA para accesibilidad

## 🚀 Despliegue en Vercel

### Opción 1: Despliegue Automático (Recomendado)

1. Ve a https://vercel.com/new
2. Haz clic en "Continue with GitHub"
3. Busca y selecciona el repositorio `claudia-estilista-lp`
4. Vercel detectará automáticamente la configuración
5. Haz clic en "Deploy"

El sitio estará en vivo en minutos en una URL como `claudia-estilista-lp.vercel.app`

### Opción 2: Despliegue Manual con CLI

```bash
# Instalar Vercel CLI
npm install -g vercel

# Desplegar
cd claudia_estilista_lp
vercel deploy --prod
```

## 📁 Estructura del Proyecto

```
claudia_estilista_lp/
├── client/
│   ├── public/              # Assets estáticos (imágenes)
│   │   ├── hero-salon.jpg
│   │   ├── hair-red.jpg
│   │   ├── hair-black.jpg
│   │   ├── hair-violet.jpg
│   │   ├── hair-transformation.jpg
│   │   └── logo.svg
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.tsx     # Página principal
│   │   │   └── NotFound.tsx
│   │   ├── components/      # Componentes reutilizables
│   │   ├── contexts/        # React contexts
│   │   ├── hooks/           # Custom hooks
│   │   ├── lib/             # Utilidades
│   │   ├── App.tsx          # Componente raíz
│   │   ├── main.tsx         # Entry point
│   │   ├── index.css        # Estilos globales
│   │   └── const.ts         # Constantes
│   ├── index.html           # HTML principal
│   └── package.json
├── vite.config.ts           # Configuración de Vite
├── vercel.json              # Configuración de Vercel
├── tailwind.config.ts       # Configuración de Tailwind
├── tsconfig.json            # Configuración de TypeScript
└── README.md                # Este archivo

```

## 🛠️ Tecnologías Utilizadas

- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS 4 + Custom CSS
- **Build Tool**: Vite
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Routing**: Wouter
- **Deployment**: Vercel

## 📋 Requisitos

- Node.js 18+
- pnpm (gestor de paquetes)

## 🏃 Desarrollo Local

```bash
# Instalar dependencias
pnpm install

# Iniciar servidor de desarrollo
pnpm dev

# Compilar para producción
pnpm build

# Vista previa de la compilación
pnpm preview
```

El servidor de desarrollo estará disponible en `http://localhost:3000`

## 📞 Información de Contacto

- **Teléfono**: 011 3449-3593 (WhatsApp)
- **Ubicación**: Moreno 1190, B1667 Tortuguitas, Buenos Aires
- **Ubicación Secundaria**: Hipólito Bouchard 1416, Grand Bourg
- **Horarios**: Lunes a Sábados 9:00 - 19:00 hs
- **Redes Sociales**:
  - Instagram: @claudiaestilista1190
  - Facebook: Claudia Estilista

## 🎯 Servicios Ofrecidos

1. **Corte y Peinado** - Cortes modernos y peinados personalizados
2. **Coloración y Mechas** - Colores vibrantes con técnicas profesionales
3. **Tratamientos Capilares** - Cuidado profundo y brillo
4. **Alisado y Keratina** - Tratamientos de calidad premium
5. **Peinados para Eventos** - Especiales para bodas y fiestas
6. **Asesoramiento de Imagen** - Consultoría personalizada

## 📊 Estadísticas

- **Calificación**: 4.2⭐ en Google
- **Clientes Satisfechos**: 185+
- **Equipo**: Profesionales Certificados

## 🔐 Seguridad y Privacidad

- Sitio HTTPS seguro
- Sin recopilación de datos personales innecesarios
- Cumple con GDPR y regulaciones de privacidad

## 📝 Licencia

Este proyecto es de propiedad de Claudia Estilista. Todos los derechos reservados.

## 🤝 Contribuciones

Para cambios o mejoras, contacta directamente con el propietario del negocio.

---

**Creado con ❤️ para Claudia Estilista**

Para más información sobre el despliegue, consulta [VERCEL_DEPLOYMENT.md](./VERCEL_DEPLOYMENT.md)
