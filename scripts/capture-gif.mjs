import { chromium } from 'playwright';
import { execSync } from 'child_process';
import { writeFileSync, mkdirSync, rmSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const tmpDir = join(root, '.tmp-frames');
const htmlPath = join(tmpDir, 'anim.html');
const docsDir = join(root, 'docs');
const outputGif = join(docsDir, 'pepe-loader.gif');

const svgContent = `<svg viewBox="0 0 200 200" width="300" height="300" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap');

      :root {
        --cycle: 6s;
        --step: 2s;
      }

      @keyframes burst1 {
        0%   { opacity: 0; transform: scale(0.3) rotate(-20deg); }
        5%   { opacity: 1; transform: scale(1.05) rotate(5deg); }
        12%  { opacity: 1; transform: scale(1.0) rotate(0deg); }
        28%  { opacity: 1; transform: scale(1.0) rotate(0deg); }
        33%  { opacity: 0; transform: scale(1.4) rotate(15deg); }
        100% { opacity: 0; }
      }

      @keyframes burst2 {
        0%   { opacity: 0; }
        33%  { opacity: 0; transform: scale(0.3) rotate(20deg); }
        38%  { opacity: 1; transform: scale(1.05) rotate(-5deg); }
        45%  { opacity: 1; transform: scale(1.0) rotate(0deg); }
        61%  { opacity: 1; transform: scale(1.0) rotate(0deg); }
        66%  { opacity: 0; transform: scale(1.4) rotate(-15deg); }
        100% { opacity: 0; }
      }

      @keyframes burst3 {
        0%   { opacity: 0; }
        66%  { opacity: 0; transform: scale(0.3) rotate(-15deg); }
        71%  { opacity: 1; transform: scale(1.05) rotate(8deg); }
        78%  { opacity: 1; transform: scale(1.0) rotate(0deg); }
        94%  { opacity: 1; transform: scale(1.0) rotate(0deg); }
        100% { opacity: 0; transform: scale(1.4) rotate(20deg); }
      }

      @keyframes text1 {
        0%   { opacity: 0; transform: scale(0.2) translateY(30px); }
        3%   { opacity: 0; transform: scale(0.2) translateY(30px); }
        8%   { opacity: 1; transform: scale(1.1) translateY(-3px); }
        13%  { opacity: 1; transform: scale(1.0) translateY(0px); }
        28%  { opacity: 1; transform: scale(1.0) translateY(0px); }
        33%  { opacity: 0; transform: scale(0.6) translateY(-20px); }
        100% { opacity: 0; }
      }

      @keyframes text2 {
        0%   { opacity: 0; }
        33%  { opacity: 0; transform: scale(0.2) translateY(30px); }
        36%  { opacity: 0; transform: scale(0.2) translateY(30px); }
        41%  { opacity: 1; transform: scale(1.1) translateY(-3px); }
        46%  { opacity: 1; transform: scale(1.0) translateY(0px); }
        61%  { opacity: 1; transform: scale(1.0) translateY(0px); }
        66%  { opacity: 0; transform: scale(0.6) translateY(-20px); }
        100% { opacity: 0; }
      }

      @keyframes text3 {
        0%   { opacity: 0; }
        66%  { opacity: 0; transform: scale(0.2) translateY(30px); }
        69%  { opacity: 0; transform: scale(0.2) translateY(30px); }
        74%  { opacity: 1; transform: scale(1.1) translateY(-3px); }
        79%  { opacity: 1; transform: scale(1.0) translateY(0px); }
        94%  { opacity: 1; transform: scale(1.0) translateY(0px); }
        100% { opacity: 0; transform: scale(0.6) translateY(-20px); }
      }

      @keyframes spark1a {
        0%   { opacity: 0; transform: translate(0,0) scale(0); }
        6%   { opacity: 1; transform: translate(-25px,-30px) scale(1); }
        15%  { opacity: 0; transform: translate(-40px,-50px) scale(0.3); }
        100% { opacity: 0; }
      }
      @keyframes spark1b {
        0%   { opacity: 0; transform: translate(0,0) scale(0); }
        6%   { opacity: 1; transform: translate(30px,-25px) scale(1); }
        15%  { opacity: 0; transform: translate(50px,-40px) scale(0.3); }
        100% { opacity: 0; }
      }
      @keyframes spark1c {
        0%   { opacity: 0; transform: translate(0,0) scale(0); }
        6%   { opacity: 1; transform: translate(-20px,30px) scale(1); }
        15%  { opacity: 0; transform: translate(-35px,50px) scale(0.3); }
        100% { opacity: 0; }
      }
      @keyframes spark1d {
        0%   { opacity: 0; transform: translate(0,0) scale(0); }
        6%   { opacity: 1; transform: translate(25px,28px) scale(1); }
        15%  { opacity: 0; transform: translate(45px,45px) scale(0.3); }
        100% { opacity: 0; }
      }

      @keyframes spark2a {
        0%   { opacity: 0; }
        33%  { opacity: 0; transform: translate(0,0) scale(0); }
        39%  { opacity: 1; transform: translate(-28px,-28px) scale(1); }
        48%  { opacity: 0; transform: translate(-45px,-45px) scale(0.3); }
        100% { opacity: 0; }
      }
      @keyframes spark2b {
        0%   { opacity: 0; }
        33%  { opacity: 0; transform: translate(0,0) scale(0); }
        39%  { opacity: 1; transform: translate(28px,-20px) scale(1); }
        48%  { opacity: 0; transform: translate(48px,-35px) scale(0.3); }
        100% { opacity: 0; }
      }
      @keyframes spark2c {
        0%   { opacity: 0; }
        33%  { opacity: 0; transform: translate(0,0) scale(0); }
        39%  { opacity: 1; transform: translate(0px,35px) scale(1); }
        48%  { opacity: 0; transform: translate(0px,55px) scale(0.3); }
        100% { opacity: 0; }
      }

      @keyframes spark3a {
        0%   { opacity: 0; }
        66%  { opacity: 0; transform: translate(0,0) scale(0); }
        72%  { opacity: 1; transform: translate(-30px,-22px) scale(1); }
        81%  { opacity: 0; transform: translate(-50px,-38px) scale(0.3); }
        100% { opacity: 0; }
      }
      @keyframes spark3b {
        0%   { opacity: 0; }
        66%  { opacity: 0; transform: translate(0,0) scale(0); }
        72%  { opacity: 1; transform: translate(22px,-30px) scale(1); }
        81%  { opacity: 0; transform: translate(38px,-50px) scale(0.3); }
        100% { opacity: 0; }
      }
      @keyframes spark3c {
        0%   { opacity: 0; }
        66%  { opacity: 0; transform: translate(0,0) scale(0); }
        72%  { opacity: 1; transform: translate(30px,25px) scale(1); }
        81%  { opacity: 0; transform: translate(50px,42px) scale(0.3); }
        100% { opacity: 0; }
      }

      .b1 { transform-origin: 100px 100px; animation: burst1 var(--cycle) ease-out infinite; opacity: 0; }
      .b2 { transform-origin: 100px 100px; animation: burst2 var(--cycle) ease-out infinite; opacity: 0; }
      .b3 { transform-origin: 100px 100px; animation: burst3 var(--cycle) ease-out infinite; opacity: 0; }

      .t1 { transform-origin: 100px 100px; animation: text1 var(--cycle) cubic-bezier(0.22,1,0.36,1) infinite; opacity: 0; }
      .t2 { transform-origin: 100px 100px; animation: text2 var(--cycle) cubic-bezier(0.22,1,0.36,1) infinite; opacity: 0; }
      .t3 { transform-origin: 100px 100px; animation: text3 var(--cycle) cubic-bezier(0.22,1,0.36,1) infinite; opacity: 0; }

      .s1a { transform-origin: 100px 80px;  animation: spark1a var(--cycle) ease-out infinite; opacity: 0; }
      .s1b { transform-origin: 100px 80px;  animation: spark1b var(--cycle) ease-out infinite; opacity: 0; }
      .s1c { transform-origin: 100px 120px; animation: spark1c var(--cycle) ease-out infinite; opacity: 0; }
      .s1d { transform-origin: 100px 120px; animation: spark1d var(--cycle) ease-out infinite; opacity: 0; }

      .s2a { transform-origin: 100px 80px;  animation: spark2a var(--cycle) ease-out infinite; opacity: 0; }
      .s2b { transform-origin: 100px 80px;  animation: spark2b var(--cycle) ease-out infinite; opacity: 0; }
      .s2c { transform-origin: 100px 130px; animation: spark2c var(--cycle) ease-out infinite; opacity: 0; }

      .s3a { transform-origin: 100px 80px;  animation: spark3a var(--cycle) ease-out infinite; opacity: 0; }
      .s3b { transform-origin: 100px 80px;  animation: spark3b var(--cycle) ease-out infinite; opacity: 0; }
      .s3c { transform-origin: 100px 120px; animation: spark3c var(--cycle) ease-out infinite; opacity: 0; }
    </style>
  </defs>

  <rect width="200" height="200" fill="#ffffff" />

  <g class="b1">
    <path fill="none" stroke="#FF0000" stroke-width="8" stroke-linejoin="round" stroke-linecap="round"
      d="M 100 40 L 115 80 L 150 75 L 130 105 L 160 135 L 120 125 L 100 160 L 80 125 L 40 135 L 70 105 L 50 75 L 85 80 Z" />
  </g>
  <circle class="s1a" cx="100" cy="80" r="3" fill="#FF0000"/>
  <circle class="s1b" cx="100" cy="80" r="2.5" fill="#FF4444"/>
  <circle class="s1c" cx="100" cy="120" r="3" fill="#FF0000"/>
  <circle class="s1d" cx="100" cy="120" r="2" fill="#FF6666"/>
  <text x="100" y="105" class="t1"
    font-family="Inter, Arial, Helvetica, sans-serif"
    font-size="38" font-weight="900"
    text-anchor="middle" dominant-baseline="middle"
    fill="#000000" stroke="none">ФААА</text>

  <g class="b2">
    <path fill="none" stroke="#FFD700" stroke-width="8" stroke-linejoin="round" stroke-linecap="round"
      d="M 100 20 L 120 80 L 180 100 L 120 120 L 100 180 L 80 120 L 20 100 L 80 80 Z" />
  </g>
  <circle class="s2a" cx="100" cy="80" r="3" fill="#FFD700"/>
  <circle class="s2b" cx="100" cy="80" r="2.5" fill="#FFC000"/>
  <circle class="s2c" cx="100" cy="130" r="3" fill="#FFD700"/>
  <text x="100" y="105" class="t2"
    font-family="Inter, Arial, Helvetica, sans-serif"
    font-size="32" font-weight="900"
    text-anchor="middle" dominant-baseline="middle"
    fill="#000000" stroke="none">ШНЕЛЕ</text>

  <g class="b3">
    <path fill="none" stroke="#00BFFF" stroke-width="8" stroke-linejoin="round" stroke-linecap="round"
      d="M 80 70 A 30 30 0 0 1 120 70 A 30 30 0 0 1 160 110 A 30 30 0 0 1 120 150 A 30 30 0 0 1 80 110 A 30 30 0 0 1 80 70 Z" />
  </g>
  <circle class="s3a" cx="100" cy="80" r="3" fill="#00BFFF"/>
  <circle class="s3b" cx="100" cy="80" r="2.5" fill="#00E5FF"/>
  <circle class="s3c" cx="100" cy="120" r="2.5" fill="#00BFFF"/>
  <text x="100" y="105" class="t3"
    font-family="Inter, Arial, Helvetica, sans-serif"
    font-size="36" font-weight="900"
    text-anchor="middle" dominant-baseline="middle"
    fill="#000000" stroke="none">ПЭПЭ</text>
</svg>`;

if (!existsSync(tmpDir)) mkdirSync(tmpDir, { recursive: true });
writeFileSync(htmlPath, `<!DOCTYPE html><html><body style="margin:0;display:flex;align-items:center;justify-content:center;height:100vh;background:#fff">${svgContent}</body></html>`);

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 400, height: 400 } });
await page.goto('file://' + htmlPath);
await page.waitForSelector('svg');
await page.waitForTimeout(1000);

const totalFrames = 60;
const intervalMs = 100;
for (let i = 0; i < totalFrames; i++) {
  const path = join(tmpDir, `frame-${String(i).padStart(3, '0')}.png`);
  await page.screenshot({ path, clip: { x: 50, y: 50, width: 300, height: 300 } });
  await page.waitForTimeout(intervalMs);
}

await browser.close();

if (!existsSync(docsDir)) mkdirSync(docsDir, { recursive: true });
execSync(`ffmpeg -y -framerate 10 -i "${join(tmpDir, 'frame-%03d.png')}" -loop 0 -filter_complex "[0:v]split[s0][s1];[s0]palettegen=max_colors=128[p];[s1][p]paletteuse=dither=bayer" "${outputGif}"`, { stdio: 'inherit' });

rmSync(tmpDir, { recursive: true, force: true });
console.log('GIF created:', outputGif);
