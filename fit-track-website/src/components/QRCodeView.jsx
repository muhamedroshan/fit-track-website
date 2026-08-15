import { useMemo } from 'react';
import { generateQRCodeMatrix } from '../utils/qrcode';

/**
 * Clean SVG QR Code component
 */
export default function QRCodeView({
  value,
  size = 140,
  className = ''
}) {
  const { matrix, count } = useMemo(() => {
    try {
      const mat = generateQRCodeMatrix(value, 0); // M level
      return { matrix: mat, count: mat.length };
    } catch (err) {
      console.error('QR error:', err);
      return { matrix: [], count: 0 };
    }
  }, [value]);

  const margin = 2;
  const totalModules = count + margin * 2;
  const cellSize = 10;
  const viewBoxSize = totalModules * cellSize;

  const pathD = useMemo(() => {
    if (!matrix.length) return '';
    let d = '';
    for (let r = 0; r < count; r++) {
      for (let c = 0; c < count; c++) {
        if (matrix[r][c]) {
          const x = (c + margin) * cellSize;
          const y = (r + margin) * cellSize;
          d += `M${x},${y}h${cellSize}v${cellSize}h-${cellSize}z `;
        }
      }
    }
    return d;
  }, [matrix, count]);

  if (!matrix.length) {
    return (
      <div 
        className={`flex items-center justify-center bg-gray-800 text-xs text-gray-500 rounded-xl ${className}`}
        style={{ width: size, height: size }}
      >
        QR Error
      </div>
    );
  }

  return (
    <div 
      className={`inline-flex items-center justify-center p-3 bg-white rounded-xl shadow-md ${className}`}
      style={{ width: size + 24, height: size + 24 }}
    >
      <svg
        viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
        width={size}
        height={size}
        className="w-full h-full block"
        aria-label={`QR Code for ${value}`}
      >
        <rect width={viewBoxSize} height={viewBoxSize} fill="#ffffff" />
        <path d={pathD} fill="#0a0a0a" />
      </svg>
    </div>
  );
}
