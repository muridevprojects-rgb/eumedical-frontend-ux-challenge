# Eumedical Frontend & UX Trainee Challenge

Propuesta frontend para el challenge técnico de Eumedical. El proyecto incluye una landing institucional renovada y una experiencia navegable para el área privada del paciente, manteniendo la identidad visual de la marca y priorizando claridad, confianza, accesibilidad y responsive design.

## Demo

**Live demo:**  
https://eumedical-frontend-ux-challenge.vercel.app

**Patient portal:**  
https://eumedical-frontend-ux-challenge.vercel.app/patient

La aplicación contiene dos experiencias principales:

- `/` — landing institucional
- `/patient` — área privada del paciente

Todas las personas, consultas, documentos, prescripciones y datos clínicos mostrados en el área privada son ficticios y se utilizan únicamente con fines de demostración.

## Funcionalidades

### Landing institucional

- Header responsive con navegación principal
- Hero con propuesta de valor internacional
- Capacidades y servicios
- Métricas de confianza
- Sección corporativa
- Contacto y CTA
- Footer institucional
- Acceso directo al área del paciente
- Diseño desktop y mobile

### Área privada del paciente

- Dashboard
- Próximas consultas
- Preparación de teleconsulta
- Historial de consultas
- Documentos médicos
- Prescripciones
- Perfil
- Soporte
- Navegación responsive para desktop y mobile
- Estados vacíos para consultas, historial, documentos y prescripciones

### Experiencia general

- Página 404 personalizada para rutas inexistentes
- Navegación mediante React Router
- Estados de interacción y foco visible
- Datos ficticios centralizados mediante mocks

## Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Lucide React
- Vitest
- Testing Library

No se implementó backend real, autenticación real, base de datos ni videollamadas reales, ya que el objetivo de esta entrega es demostrar la experiencia frontend y UX.

## Arquitectura

La estructura se mantuvo deliberadamente simple y fácil de explicar:

```text
src/
├── assets/
│   └── brand/
├── components/
│   ├── layout/
│   └── ui/
├── features/
│   └── patient/
│       ├── components/
│       └── data/
├── pages/
│   ├── patient/
│   └── NotFoundPage.tsx
├── styles/
├── test/
├── App.tsx
├── index.css
└── main.tsx
```

La landing utiliza componentes de layout compartidos. El área del paciente se organiza como una feature independiente con layout propio, rutas anidadas y datos mock centralizados.

El componente reutilizable `EmptyState` permite representar de forma consistente situaciones en las que todavía no existen datos disponibles.

## Rutas

```text
/
/patient
/patient/appointments
/patient/history
/patient/documents
/patient/prescriptions
/patient/profile
/patient/support
* — fallback para rutas inexistentes / página 404
```

## Instalación

Requisito utilizado durante el desarrollo:

```text
Node.js >= 24
```

Instalar dependencias:

```bash
npm install
```

En Windows PowerShell, si la política de ejecución bloquea `npm.ps1`, puede utilizarse:

```powershell
npm.cmd install
```

Ejecutar en desarrollo:

```bash
npm run dev
```

En Windows:

```powershell
npm.cmd run dev
```

## Calidad

Ejecutar las comprobaciones del proyecto:

```bash
npm run quality-check
```

Este comando valida:

- TypeScript
- ESLint
- cobertura de tipos

Durante el desarrollo, la cobertura de tipos alcanzó el 100%.

## Tests

Ejecutar:

```bash
npm test
```

Actualmente se incluyen tests esenciales para:

- renderizado y navegación del Header
- apertura del menú mobile
- información principal del Dashboard
- preparación de la teleconsulta

## Build de producción

```bash
npm run build
```

El build ejecuta primero `tsc --noEmit` y posteriormente genera la aplicación mediante Vite.

## Accesibilidad

Se tuvieron en cuenta medidas básicas de accesibilidad:

- navegación semántica
- labels accesibles en botones de menú
- estados `aria-expanded`
- iconos decorativos con `aria-hidden`
- foco visible en elementos interactivos
- navegación mediante enlaces reales
- estructura de headings
- soporte para `prefers-reduced-motion`
- layout responsive

## Branding

La interfaz utiliza la paleta oficial de Eumedical:

```text
Azul principal:   #1e4865
Aqua:             #79b19c
Aqua claro:       #bfd7cd
Azul claro:       #d9e4de
Naranja:          #e79f1a
Amarillo:         #efbc0b
Blanco:           #ffffff
Gris:             #f2f2f2
Negro:            #000000
```

El logo institucional se mantiene sin deformaciones y con un tamaño coherente con las indicaciones del Brand Book.

Las fuentes propietarias indicadas en el Brand Book no se incluyeron porque sus archivos no fueron proporcionados. Para evitar incorporar assets sin licencia, se utilizaron alternativas disponibles en el sistema manteniendo una jerarquía visual coherente con la identidad de la marca.

## Decisiones técnicas

### React Router

Se utilizó `BrowserRouter` con rutas anidadas para el portal del paciente. Esto permite mantener un layout común y cambiar únicamente el contenido principal.

También se incorporó una ruta fallback mediante `*` para mostrar una página 404 personalizada cuando una dirección no existe.

### Datos mock

Los datos de demostración se concentran en:

```text
src/features/patient/data/mockPatient.ts
```

Esto evita mezclar datos ficticios directamente con la presentación y facilita sustituirlos por una API en una implementación futura.

### Estado local

No se incorporó una librería global de estado porque el alcance actual no lo requiere.

El estado interactivo utilizado —por ejemplo, menú mobile o preparación de teleconsulta— es local a los componentes que lo necesitan.

### Empty states

Se creó un componente reutilizable para representar situaciones en las que el paciente todavía no dispone de determinada información.

Se utiliza para:

- próximas consultas
- historial
- documentos
- prescripciones

Esto evita interfaces vacías o ambiguas y proporciona al usuario una explicación clara.

### Sin backend

No se añadió una API ficticia compleja ni servicios externos. Para este challenge, un frontend navegable y mantenible permite demostrar mejor las decisiones de UX sin añadir complejidad innecesaria.

## Problemas encontrados durante el desarrollo

Durante la preparación del proyecto se detectaron y resolvieron varios problemas reales.

### PowerShell bloqueaba npm

`npm.ps1` estaba bloqueado por la política de ejecución de Windows.

Solución utilizada:

```powershell
npm.cmd
```

### Conflicto entre React y React DOM

La configuración inicial combinaba versiones incompatibles de React y React DOM.

Se alinearon ambas dependencias dentro de la misma versión mayor.

### Paquete interno no disponible

La dependencia:

```text
@eumedical/shared
```

no estaba disponible públicamente en npm para este entorno.

Como no era necesaria para implementar el challenge, fue retirada.

### Build configurado con Terser sin paquete disponible

El script inicial exigía Terser aunque la dependencia no estaba instalada.

Se mantuvo la minificación estándar de Vite eliminando la exigencia explícita de Terser.

### ESLint y React Hooks

La configuración inicial esperaba una propiedad distinta de la disponible en la versión instalada de `eslint-plugin-react-hooks`.

Se ajustó para utilizar la configuración `recommended-latest`.

### Test duplicado en DOM

Un test del Header encontró dos botones con el mismo nombre porque el DOM del test anterior no había sido limpiado.

Se añadió `cleanup()` después de cada test.

### Routing SPA en Vercel

Al utilizar `BrowserRouter`, el acceso directo o la actualización de una ruta interna como `/patient` necesitaba que Vercel devolviera la aplicación principal.

Se añadió una configuración de rewrite mediante `vercel.json` para permitir que React Router resuelva correctamente las rutas internas.

## Cambios sobre la configuración inicial

Se realizaron únicamente ajustes necesarios para disponer de una base estable:

- alineación de React y React DOM
- retirada de una dependencia interna inaccesible
- ajuste del script de build
- configuración compatible de ESLint
- configuración de Tailwind
- configuración de Vitest
- configuración del routing SPA para Vercel

No se utilizó `npm audit fix --force` para evitar introducir actualizaciones destructivas sin necesidad.

## Limitaciones actuales

Esta entrega es una demostración frontend. En un producto real todavía sería necesario implementar, entre otros:

- autenticación y autorización
- backend y persistencia
- API médica segura
- gestión real de documentos
- prescripciones reales
- videollamada / teleconsulta
- estados de carga y error conectados a una API real
- protección de datos y requisitos regulatorios
- internacionalización completa
- gestión segura de sesiones y permisos

## Posibles mejoras

Con más tiempo, las siguientes mejoras serían prioritarias:

- tests de accesibilidad automatizados
- tests end-to-end de los flujos principales
- lazy loading por ruta
- internacionalización
- skeletons y estados de carga
- estados de error vinculados a una API
- integración con backend
- autenticación
- métricas de performance
- auditoría Lighthouse
- sistema de design tokens más amplio

## Uso de IA

Se utilizaron herramientas de IA como apoyo durante el desarrollo, principalmente para análisis, debugging, revisión técnica y documentación.

La implementación final, las decisiones técnicas y el comportamiento de la aplicación fueron revisados, ejecutados y validados dentro del proyecto. El código y las decisiones adoptadas pueden explicarse y mantenerse de forma independiente.

## Validación realizada

Durante el desarrollo se utilizaron las siguientes comprobaciones:

```text
npm test
npm run quality-check
npm run build
```

En una de las validaciones completas realizadas durante el desarrollo se obtuvo:

```text
3 test files passed
4 tests passed
```

La aplicación también fue revisada manualmente en desktop y mobile.

Se comprobaron además:

- navegación principal
- menú mobile
- rutas del área del paciente
- acceso directo a `/patient`
- página 404
- comportamiento responsive
- navegación en producción mediante Vercel

## Deploy

La aplicación se encuentra desplegada públicamente mediante Vercel:

https://eumedical-frontend-ux-challenge.vercel.app

Repositorio del proyecto:

https://github.com/muridevprojects-rgb/eumedical-frontend-ux-challenge

## Autor

Murilo Caio