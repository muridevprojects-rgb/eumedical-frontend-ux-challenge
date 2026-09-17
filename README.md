# Eumedical Frontend & UX Trainee Challenge

Propuesta frontend para el challenge técnico de Eumedical. El proyecto incluye una landing institucional renovada y una experiencia navegable para el área privada del paciente, manteniendo la identidad visual de la marca y priorizando claridad, confianza, accesibilidad y responsive design.

## Demo

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
│   └── layout/
├── features/
│   └── patient/
│       ├── components/
│       └── data/
├── pages/
│   └── patient/
├── styles/
├── test/
├── App.tsx
├── index.css
└── main.tsx
```

La landing utiliza componentes de layout compartidos. El área del paciente se organiza como una feature independiente con layout propio, rutas anidadas y datos mock centralizados.

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

En la versión validada durante el desarrollo, la cobertura de tipos alcanzó el 100%.

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

El build ejecuta primero `tsc --noEmit` y luego genera la aplicación con Vite.

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
```

El logo institucional se mantiene sin deformaciones y con un tamaño coherente con las indicaciones del BrandBook.

Las fuentes propietarias indicadas en el BrandBook no se incluyeron porque sus archivos no fueron proporcionados. Para evitar incorporar assets sin licencia, se utilizó una fuente de sistema como fallback.

## Decisiones técnicas

### React Router

Se utilizó `BrowserRouter` con rutas anidadas para el portal del paciente. Esto permite mantener un layout común y cambiar únicamente el contenido principal.

### Datos mock

Los datos de demostración se concentran en:

```text
src/features/patient/data/mockPatient.ts
```

Esto evita mezclar datos ficticios directamente con la presentación y facilita sustituirlos por una API en una implementación futura.

### Estado local

No se incorporó una librería global de estado porque el alcance actual no lo requiere. El estado interactivo utilizado —por ejemplo, menú mobile o preparación de teleconsulta— es local al componente.

### Sin backend

No se añadió una API ficticia compleja ni servicios externos. Para este challenge, un frontend navegable y mantenible permite demostrar mejor las decisiones de UX sin añadir complejidad innecesaria.

## Problemas encontrados durante el desarrollo

Durante la preparación del proyecto se detectaron y resolvieron varios problemas reales:

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

La configuración generada esperaba una propiedad distinta de la disponible en la versión instalada de `eslint-plugin-react-hooks`.

Se ajustó para utilizar la configuración `recommended-latest`.

### Test duplicado en DOM

Un test del Header encontró dos botones con el mismo nombre porque el DOM del test anterior no había sido limpiado.

Se añadió `cleanup()` después de cada test.

## Cambios sobre la configuración inicial

Se realizaron únicamente ajustes necesarios para disponer de una base estable:

- alineación de React y React DOM
- retirada de una dependencia interna inaccesible
- ajuste del script de build
- configuración compatible de ESLint
- configuración de Tailwind
- configuración de Vitest

No se utilizó `npm audit fix --force` para evitar introducir actualizaciones destructivas sin necesidad.

## Limitaciones actuales

Esta entrega es una demostración frontend. En un producto real todavía sería necesario implementar, entre otros:

- autenticación y autorización
- backend y persistencia
- API médica segura
- gestión real de documentos
- prescripciones reales
- videollamada/teleconsulta
- estados de carga, error y empty state conectados a datos reales
- protección de datos y requisitos regulatorios
- internacionalización completa

## Posibles mejoras

Con más tiempo, las siguientes mejoras serían prioritarias:

- tests de accesibilidad automatizados
- test end-to-end de los flujos principales
- lazy loading por ruta
- internacionalización
- skeletons y estados de carga
- integración con API
- autenticación
- métricas de performance
- auditoría Lighthouse
- sistema de design tokens más amplio

## Uso de IA

Se utilizó IA como herramienta de apoyo durante el proceso de desarrollo para análisis, debugging, revisión de código, documentación y generación de propuestas de implementación.

Las decisiones técnicas, la estructura final, el comportamiento de la interfaz y los cambios aplicados fueron revisados y validados dentro del proyecto. La aplicación puede explicarse y mantenerse sin depender de código generado en tiempo de ejecución por IA.

## Validación realizada

Antes de preparar la entrega se validaron:

```text
npm test
npm run quality-check
npm run build
```

Resultado final de los tests esenciales:

```text
3 test files passed
4 tests passed
```

La aplicación también fue revisada manualmente en desktop y mobile.

## Autor

Murilo
