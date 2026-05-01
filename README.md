# Pepe Loader

A React SVG loader component with a flashy 3-phase burst animation: ФААА ✦ ШНЕЛЕ ✦ ПЭПЭ

[![Storybook](https://img.shields.io/badge/Storybook-Playground-ff4785?logo=storybook)](https://olegthecoder.github.io/pepe-loader)

```bash
npm install @olegthecoder/pepe-loader
```

---

## PepeLoader

Three sequential burst animations — each with a custom shape, sparks, and bold text that pops in sequence.

```tsx
import { PepeLoader } from '@olegthecoder/pepe-loader';

<PepeLoader />
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number` | `300` | Width and height in pixels |
| `speed` | `number` | `1` | Animation speed multiplier (2 = 2× faster) |
| `texts` | `[string, string, string]` | `['ФААА', 'ШНЕЛЕ', 'ПЭПЭ']` | Three phase texts |
| `colors` | `[string, string, string]` | `['#FF0000', '#FFD700', '#00BFFF']` | Three burst colors |
| `textColor` | `string` | `'#000000'` | Text fill color |
| `fontSizes` | `[number, number, number]` | `[38, 32, 36]` | Font sizes for each phase |
| `fontWeight` | `number \| string` | `900` | Font weight |
| `fontFamily` | `string` | `'Inter, Arial, Helvetica, sans-serif'` | Font family |
| `burstStrokeWidth` | `number` | `8` | Stroke width of burst shapes |

### Options

```tsx
// Size
<PepeLoader size={100} />
<PepeLoader size={400} />

// Colors
<PepeLoader colors={['#FF0000', '#FF0000', '#FF0000']} />
<PepeLoader colors={['#FF3366', '#FFD700', '#00E5FF']} />
<PepeLoader colors={['#FF9AA2', '#FFB7B2', '#B5EAD7']} />

// Text
<PepeLoader texts={['BOOM', 'BANG', 'POW']} />
<PepeLoader texts={['GO', 'FAST', 'WIN']} textColor="#FFFFFF" />

// Speed
<PepeLoader speed={0.5} />
<PepeLoader speed={2} />
<PepeLoader speed={3} />

// Font
<PepeLoader fontSizes={[48, 42, 46]} fontWeight={300} />

// Stroke
<PepeLoader burstStrokeWidth={4} />
<PepeLoader burstStrokeWidth={14} />

// Combined
<PepeLoader
  size={200}
  colors={['#FF3366', '#FFD700', '#00E5FF']}
  texts={['GO', 'FAST', 'GO']}
  speed={1.5}
  textColor="#FFFFFF"
/>
```

---

## License

MIT
