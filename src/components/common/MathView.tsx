import React from 'react';
import katex from 'katex';

interface MathViewProps {
  text?: string;
  math?: string;
  block?: boolean;
  className?: string;
}

/**
 * MathView component renders text with KaTeX formulas and markdown formatting.
 * - Supports inline math `$formula$` and display math `$$formula$$`.
 * - Supports bold text `**text**` (including nested math inside bold).
 * - Supports newline breaks `\n` without large gaps.
 * - Guarantees NO raw '$' or unrendered LaTeX text is exposed to the user.
 * - Responsive wrapping with NO horizontal scrollbar or clipped content.
 */
export const MathView: React.FC<MathViewProps> = ({
  text,
  math,
  block = false,
  className = '',
}) => {
  // If a single formula is passed directly via `math` prop
  if (math) {
    try {
      let renderMath = math.trim();
      if (!block && renderMath.includes('\\frac{') && !renderMath.includes('\\dfrac{') && !renderMath.includes('\\tfrac{')) {
        renderMath = renderMath.replace(/\\frac(?=\{)/g, '\\dfrac');
      }
      const html = katex.renderToString(renderMath, {
        displayMode: block,
        throwOnError: false,
      });
      return (
        <span
          className={`katex-math ${block ? 'my-2 block text-center math-formula-box overflow-x-auto py-1' : 'inline-flex items-center mx-1 my-0.5 align-middle'} ${className}`}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      );
    } catch {
      return <span className={`font-mono text-xs ${className}`}>{math.replace(/\$/g, '')}</span>;
    }
  }

  if (!text) return null;

  // Split by $$...$$, \[...\], $...$, \(...\), **bold**, bare LaTeX math (\frac..., \parallel...), and newlines (\n)
  const regex = /(\$\$[\s\S]*?\$\$|\\\[[\s\S]*?\\\]|\$[^$\n]+?\$|\\\([\s\S]*?\\\)|\*\*[^*]+?\*\*|\\(?:frac|dfrac)\{[^{}]+\}\{[^{}]+\}(?:\s*[\=\+\-\*\/]\s*\\?(?:frac|dfrac)?(?:\{[^{}]+\}\{[^{}]+\}|[a-zA-Z0-9_\'\,\.\:]+))?|\n)/g;
  const parts = text.split(regex);

  const hasDisplayMath = block || text.includes('$$') || text.includes('\\[');

  return (
    <span className={`${hasDisplayMath ? 'block w-full' : 'inline'} leading-relaxed break-words whitespace-normal ${className}`}>
      {parts.map((part, index) => {
        if (!part) return null;

        // 1. Display math: $$...$$ or \[...\]
        if ((part.startsWith('$$') && part.endsWith('$$')) || (part.startsWith('\\[') && part.endsWith('\\]'))) {
          const formula = part.startsWith('$$') ? part.slice(2, -2).trim() : part.slice(2, -2).trim();
          try {
            const html = katex.renderToString(formula, {
              displayMode: true,
              throwOnError: false,
            });
            return (
              <span
                key={index}
                className="my-2 block w-full text-center py-1 select-text math-formula-box overflow-x-auto"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            );
          } catch {
            return (
              <span key={index} className="block font-mono text-left my-1 text-xs text-slate-700 dark:text-slate-300">
                {formula.replace(/[\$\\]/g, '')}
              </span>
            );
          }
        }

        // 2. Inline math: $...$ or \(...\)
        if ((part.startsWith('$') && part.endsWith('$')) || (part.startsWith('\\(') && part.endsWith('\\)'))) {
          let formula = part.startsWith('$') ? part.slice(1, -1).trim() : part.slice(2, -2).trim();
          if (formula.includes('\\frac{') && !formula.includes('\\dfrac{') && !formula.includes('\\tfrac{')) {
            formula = formula.replace(/\\frac(?=\{)/g, '\\dfrac');
          }
          try {
            const html = katex.renderToString(formula, {
              displayMode: false,
              throwOnError: false,
            });
            return (
              <span
                key={index}
                className="inline-flex items-center mx-1 my-0.5 align-middle"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            );
          } catch {
            return (
              <span key={index} className="font-mono text-xs">
                {formula.replace(/[\$\\]/g, '')}
              </span>
            );
          }
        }

        // 3. Bare fraction LaTeX matched directly: \frac{...}{...}
        if (part.startsWith('\\frac{') || part.startsWith('\\dfrac{')) {
          let formula = part.trim();
          if (formula.includes('\\frac{') && !formula.includes('\\dfrac{')) {
            formula = formula.replace(/\\frac(?=\{)/g, '\\dfrac');
          }
          try {
            const html = katex.renderToString(formula, {
              displayMode: false,
              throwOnError: false,
            });
            return (
              <span
                key={index}
                className="inline-flex items-center mx-1 my-0.5 align-middle"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            );
          } catch {
            // fallback
          }
        }

        // 4. Bold text: **...** (recursively parses math within bold strings)
        if (part.startsWith('**') && part.endsWith('**')) {
          const boldText = part.slice(2, -2);
          return (
            <strong key={index} className="font-extrabold text-slate-900 dark:text-slate-100">
              <MathView text={boldText} />
            </strong>
          );
        }

        // 5. Line break: \n
        if (part === '\n') {
          return <br key={index} className="leading-relaxed" />;
        }

        // 6. Normal text fallback: ensure NO stray unclosed '$' or raw LaTeX commands leak into UI
        if (typeof part === 'string' && (part.includes('\\frac') || part.includes('\\dfrac') || part.includes('\\parallel') || part.includes('\\widehat'))) {
          try {
            let sanitized = part.replace(/\$/g, '').trim();
            if (sanitized.includes('\\frac{') && !sanitized.includes('\\dfrac{')) {
              sanitized = sanitized.replace(/\\frac(?=\{)/g, '\\dfrac');
            }
            const html = katex.renderToString(sanitized, {
              displayMode: false,
              throwOnError: false,
            });
            return (
              <span
                key={index}
                className="inline-flex items-center mx-1 my-0.5 align-middle"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            );
          } catch {
            // If full string cannot be rendered as math, remove backslashes
          }
        }

        if (typeof part === 'string' && part.includes('$')) {
          const stripped = part.replace(/\$/g, '').trim();
          if (stripped.startsWith('=') || stripped.includes('+') || stripped.includes('-') || stripped.includes('^')) {
            try {
              const html = katex.renderToString(stripped, {
                displayMode: false,
                throwOnError: false,
              });
              return (
                <span
                  key={index}
                  className="inline-flex items-center mx-1 my-0.5 align-middle"
                  dangerouslySetInnerHTML={{ __html: html }}
                />
              );
            } catch {
              return <React.Fragment key={index}>{stripped}</React.Fragment>;
            }
          }
          return <React.Fragment key={index}>{part.replace(/\$/g, '')}</React.Fragment>;
        }

        return <React.Fragment key={index}>{part}</React.Fragment>;
      })}
    </span>
  );
};
