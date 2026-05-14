"use client";

import {
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import HTMLFlipBook from "react-pageflip";
import { ArrowIcon, ArrowLeftIcon } from "../icons";

const PDF_URL = "/catalogo/catalogo-hiperprint-2021.pdf";
const WORKER_URL = "/pdfjs/pdf.worker.min.mjs";

interface PageData {
  src: string;
  width: number;
  height: number;
}

interface FlipPageProps {
  children: React.ReactNode;
  className?: string;
  style?: CSSProperties;
}

const FlipPage = forwardRef<HTMLDivElement, FlipPageProps>(function FlipPage(
  { children, className, style },
  ref,
) {
  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
});

export default function CatalogFlipbook() {
  const [pages, setPages] = useState<PageData[]>([]);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const flipRef = useRef<any>(null);
  const cancelledRef = useRef(false);

  // Render PDF pages to data-URLs on mount
  useEffect(() => {
    cancelledRef.current = false;

    let pdfDoc: { destroy?: () => void } | null = null;

    (async () => {
      try {
        // Use the modern ESM build — bundled by Next.
        const pdfjs: any = await import("pdfjs-dist");
        pdfjs.GlobalWorkerOptions.workerSrc = WORKER_URL;

        const loadingTask = pdfjs.getDocument({ url: PDF_URL });
        const pdf = await loadingTask.promise;
        pdfDoc = pdf;
        if (cancelledRef.current) return;

        setTotalPages(pdf.numPages);

        const dpr =
          typeof window !== "undefined" && window.devicePixelRatio
            ? Math.min(window.devicePixelRatio, 2)
            : 1;
        // target render width before DPR scale
        const targetWidth = 1400;

        const rendered: PageData[] = [];

        for (let i = 1; i <= pdf.numPages; i++) {
          if (cancelledRef.current) return;
          const page = await pdf.getPage(i);
          const baseViewport = page.getViewport({ scale: 1 });
          const scale = (targetWidth / baseViewport.width) * dpr;
          const viewport = page.getViewport({ scale });

          const canvas = document.createElement("canvas");
          canvas.width = Math.ceil(viewport.width);
          canvas.height = Math.ceil(viewport.height);
          const ctx = canvas.getContext("2d");
          if (!ctx) {
            page.cleanup();
            continue;
          }
          await page.render({ canvasContext: ctx, viewport }).promise;
          const src = canvas.toDataURL("image/jpeg", 0.82);
          rendered.push({
            src,
            width: baseViewport.width,
            height: baseViewport.height,
          });
          page.cleanup();
          setProgress(Math.round((i / pdf.numPages) * 100));
        }

        if (cancelledRef.current) return;
        setPages(rendered);
        setLoading(false);
      } catch (e) {
        console.error("[CatalogFlipbook] failed to render PDF", e);
        if (!cancelledRef.current) {
          setError("No se pudo cargar el catálogo. Descárgalo desde el botón debajo.");
          setLoading(false);
        }
      }
    })();

    return () => {
      cancelledRef.current = true;
      if (pdfDoc && typeof pdfDoc.destroy === "function") {
        try {
          pdfDoc.destroy();
        } catch {
          /* noop */
        }
      }
    };
  }, []);

  const aspectRatio = useMemo(() => {
    if (pages.length === 0) return 700 / 500;
    return pages[0].height / pages[0].width;
  }, [pages]);

  const dimensions = useMemo(() => {
    // reference dimensions; flipbook stretches to fill container up to maxWidth
    const width = 700;
    const height = Math.round(width * aspectRatio);
    return { width, height };
  }, [aspectRatio]);

  const handleFlip = useCallback((e: { data: number }) => {
    setCurrentPage(e.data);
  }, []);

  const goPrev = () => {
    flipRef.current?.pageFlip?.()?.flipPrev();
  };
  const goNext = () => {
    flipRef.current?.pageFlip?.()?.flipNext();
  };

  if (error) {
    return (
      <div className="rounded-xl bg-navyDeep text-paper p-10 text-center">
        <p className="font-mono text-[12px] tracking-[.16em] uppercase text-terracotta mb-3">
          Error
        </p>
        <p className="text-paper/85 text-[15px]">{error}</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="rounded-xl bg-navyDeep text-paper p-12 lg:p-16 text-center min-h-[420px] flex flex-col items-center justify-center gap-6">
        <div className="w-14 h-14 rounded-full border-2 border-paper/15 border-t-terracotta animate-spin" />
        <div>
          <p className="font-mono text-[11px] tracking-[.18em] uppercase text-paper/80 mb-2">
            Cargando catálogo
          </p>
          <p className="font-serif text-paper text-[20px]">
            {progress > 0 ? `Renderizando páginas… ${progress}%` : "Conectando con el PDF…"}
          </p>
          <div className="mt-4 w-64 mx-auto h-1.5 rounded-full bg-paper/10 overflow-hidden">
            <div
              className="h-full bg-terracotta transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="rounded-xl bg-navyDeep p-3 sm:p-4 lg:p-6 relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-terracotta/15 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-navy/40 blur-3xl pointer-events-none" />

        <div className="relative flex justify-center">
          <HTMLFlipBook
            ref={flipRef}
            width={dimensions.width}
            height={dimensions.height}
            size="stretch"
            minWidth={300}
            maxWidth={900}
            minHeight={Math.round(300 * aspectRatio)}
            maxHeight={Math.round(900 * aspectRatio)}
            maxShadowOpacity={0.5}
            showCover
            mobileScrollSupport
            usePortrait
            drawShadow
            flippingTime={650}
            startPage={0}
            startZIndex={0}
            autoSize={false}
            clickEventForward
            useMouseEvents
            swipeDistance={30}
            showPageCorners
            disableFlipByClick={false}
            onFlip={handleFlip}
            className="catalog-flipbook"
            style={{}}
          >
            {pages.map((p, idx) => (
              <FlipPage
                key={idx}
                className="bg-paper overflow-hidden"
                style={{
                  boxShadow:
                    "inset 0 0 0 1px rgba(26,26,26,0.08), 0 1px 0 rgba(0,0,0,0.06)",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.src}
                  alt={`Página ${idx + 1} del catálogo Hiperprint`}
                  draggable={false}
                  className="block w-full h-full object-cover select-none"
                />
              </FlipPage>
            ))}
          </HTMLFlipBook>
        </div>

        <div className="relative mt-6 lg:mt-8 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={goPrev}
            disabled={currentPage === 0}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md border border-paper/25 text-paper hover:bg-paper/10 hover:border-terracotta transition disabled:opacity-30 disabled:cursor-not-allowed text-[14px] font-medium"
          >
            <ArrowLeftIcon className="w-4 h-4" />
            Anterior
          </button>
          <div className="font-mono text-[11px] tracking-[.18em] uppercase text-paper/80 text-center">
            Página {Math.min(currentPage + 1, totalPages)} de {totalPages}
          </div>
          <button
            type="button"
            onClick={goNext}
            disabled={currentPage >= totalPages - 1}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-terracotta hover:bg-terracottaDeep text-paper transition disabled:opacity-30 disabled:cursor-not-allowed text-[14px] font-medium"
          >
            Siguiente
            <ArrowIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
      <p className="mt-4 text-center text-ink/55 text-[13px] font-mono">
        Pasa las páginas con el dedo en móvil o arrastra una esquina en escritorio.
      </p>
    </div>
  );
}
