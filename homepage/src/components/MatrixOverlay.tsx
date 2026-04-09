import { useEffect, useRef, type FC } from 'react';
import styled from 'styled-components';

const Canvas = styled.canvas`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
  opacity: 0.45;
`;

const FONT_SIZE = 16;
const ROW_GAP = 34;

const CODE_LINES = [
  // C#
  'await Task.Run(() => {',
  'public async Task<T>',
  'Console.WriteLine(val);',
  '.Where(x => x.Active)',
  'using System.Linq;',
  'string? name = null;',
  'IEnumerable<T> items',
  'var result = new List<>',
  '[HttpGet("{id}")]',
  'builder.Services.AddDb',
  // Python
  'def process(data):',
  'import numpy as np',
  '[x for x in lst if x]',
  'with open(file) as f:',
  'async def fetch(url):',
  'if __name__ == "__main__":',
  'class Model(BaseModel):',
  '@app.route("/api/v1")',
  'return pd.DataFrame(rows)',
  'raise ValueError(msg)',
  // SQL
  'SELECT id, name, email',
  'FROM users WHERE active=1',
  'INNER JOIN orders ON id',
  'GROUP BY department',
  'INSERT INTO logs VALUES',
  'CREATE INDEX idx_user_id',
  'UPDATE users SET status=',
  'LEFT JOIN roles ON r.id',
  'HAVING COUNT(*) > 10',
  'ORDER BY created_at DESC',
  // TypeScript / JavaScript
  'const fn = async () =>',
  'export default function',
  'useState<boolean>(false)',
  'Promise.all(requests)',
  'interface UserProps {',
  '.then(res => res.json())',
  'type Result<T> = {',
  'useEffect(() => {}, [])',
  'z.object({ id: z.string',
  'throw new Error(message)',
  // Bash / DevOps
  'git commit -m "fix:"',
  'docker-compose up -d',
  'kubectl get pods -n prod',
  'npm run build --prod',
  'terraform apply -auto',
  'curl -X POST /api/data',
  'chmod +x deploy.sh',
  'export NODE_ENV=prod',
];

const COLORS = [
  '#9b7ec8',
  '#6f5499',
  '#4fc3f7',
  '#80cbc4',
  '#ce93d8',
  '#a5d6a7',
  '#ffffff',
];

type MatrixOverlayProps = {
  src?: string;
};

type Row = {
  y: number;
  x: number;
  speed: number;
  line: string;
  charIdx: number;
  chunkSize: number;
  color: string;
};

const SAMPLE_SIZE = 200;

const MatrixOverlay: FC<MatrixOverlayProps> = ({ src }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Offscreen canvas for pixel sampling
    const offscreen = document.createElement('canvas');
    offscreen.width = SAMPLE_SIZE;
    offscreen.height = SAMPLE_SIZE;
    const offCtx = offscreen.getContext('2d');
    let imageReady = false;

    if (src && offCtx) {
      const img = new Image();
      img.onload = () => {
        offCtx.drawImage(img, 0, 0, SAMPLE_SIZE, SAMPLE_SIZE);
        imageReady = true;
      };
      img.src = src;
    }

    // Returns true if the pixel at canvas coords (px, py) is dark enough to be "space"
    const isSpace = (px: number, py: number): boolean => {
      if (!imageReady || !offCtx) return true;
      const ox = Math.min(SAMPLE_SIZE - 1, Math.floor(px * SAMPLE_SIZE / canvas.width));
      const oy = Math.min(SAMPLE_SIZE - 1, Math.floor(py * SAMPLE_SIZE / canvas.height));
      const d = offCtx.getImageData(ox, oy, 1, 1).data;
      const lum = 0.299 * d[0] + 0.587 * d[1] + 0.114 * d[2];
      return lum < 55;
    };

    const randomLine = () => CODE_LINES[Math.floor(Math.random() * CODE_LINES.length)];
    const randomColor = () => COLORS[Math.floor(Math.random() * COLORS.length)];
    const randomChunkSize = () => 8 + Math.floor(Math.random() * 5);

    let rows: Row[] = [];
    let intervalId: ReturnType<typeof setInterval>;

    const init = () => {
      canvas.width = canvas.offsetWidth || 400;
      canvas.height = canvas.offsetHeight || 400;
      const numRows = Math.floor(canvas.height / ROW_GAP);
      rows = Array.from({ length: numRows }, (_, i) => ({
        y: Math.round(ROW_GAP * i + ROW_GAP / 2),
        x: Math.random() * canvas.width,
        speed: 2.2 + Math.random() * 0.9,
        line: randomLine(),
        charIdx: 0,
        chunkSize: randomChunkSize(),
        color: randomColor(),
      }));
    };

    const getChunk = (line: string, start: number, size: number) => {
      const safeStart = start % line.length;
      const first = line.slice(safeStart, safeStart + size);
      if (first.length === size) {
        return first;
      }
      return first + line.slice(0, size - first.length);
    };

    const draw = () => {
      // Fade trail
      ctx.fillStyle = 'rgba(8, 4, 18, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `600 ${FONT_SIZE}px Consolas, 'Courier New', monospace`;

      for (const row of rows) {
        const x = Math.floor(row.x);
        const y = Math.floor(row.y);
        const chunk = getChunk(row.line, row.charIdx, row.chunkSize);
        const chunkWidth = ctx.measureText(chunk).width;

        const chunkInSpace =
          isSpace(x, y - 8) &&
          isSpace(x + Math.floor(chunkWidth * 0.5), y - 8) &&
          isSpace(x + Math.floor(chunkWidth), y - 8);

        if (chunkInSpace) {
          // Outline + glow makes snippets readable over stars.
          ctx.strokeStyle = 'rgba(8, 4, 18, 0.9)';
          ctx.lineWidth = 3;
          ctx.strokeText(chunk, x, y);

          ctx.fillStyle = row.color;
          ctx.shadowColor = row.color;
          ctx.shadowBlur = 10;
          ctx.fillText(chunk, x, y);
          ctx.shadowBlur = 0;

          row.charIdx = (row.charIdx + 1) % row.line.length;
        }
        // Always advance x, whether or not we drew (skip over Earth smoothly)
        row.x += row.speed;

        if (row.x > canvas.width) {
          row.x = 0;
          row.line = randomLine();
          row.color = randomColor();
          row.chunkSize = randomChunkSize();
          row.charIdx = 0;
        }
      }
    };

    init();
    intervalId = setInterval(draw, 55);

    const ro = new ResizeObserver(init);
    if (canvas.parentElement) ro.observe(canvas.parentElement);

    return () => {
      clearInterval(intervalId);
      ro.disconnect();
    };
  }, [src]);

  return <Canvas ref={canvasRef} />;
};

export default MatrixOverlay;
