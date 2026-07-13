"use client";

import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Markdown from "react-markdown";
import {
  Loader2,
  AlertCircle,
  ExternalLink,
  Copy,
  Check,
  FileCode2,
  Terminal,
  ChevronRight,
  Maximize2,
  Minimize2,
  ChevronLeft,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Tokenizer & Custom Syntax Highlighting for Python (No external heavy dependencies)
function highlightPython(code: string): string {
  const tokenRegex = /(#.*)|("(?:\\.|[^"\\])*")|('(?:\\.|[^'\\])*')|(\b[a-zA-Z_][a-zA-Z0-9_]*\b)|(\b\d+(?:\.\d+)?\b)|([^\s\w]+)/g;

  const keywords = new Set([
    "def", "class", "return", "import", "from", "as", "if", "elif", "else",
    "for", "while", "break", "continue", "pass", "try", "except", "finally",
    "raise", "assert", "with", "yield", "lambda", "global", "nonlocal",
    "True", "False", "None", "and", "or", "not", "is", "in"
  ]);

  const escapeHtml = (str: string) =>
    str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  return code.replace(tokenRegex, (match, comment, dblQuote, sglQuote, word, number, op) => {
    if (comment) {
      return `<span class="text-emerald-600 dark:text-emerald-500 italic">${escapeHtml(comment)}</span>`;
    }
    if (dblQuote || sglQuote) {
      return `<span class="text-amber-600 dark:text-amber-400">${escapeHtml(match)}</span>`;
    }
    if (word) {
      if (keywords.has(word)) {
        return `<span class="text-violet-600 dark:text-violet-400 font-semibold">${word}</span>`;
      }
      return escapeHtml(word);
    }
    if (number) {
      return `<span class="text-teal-600 dark:text-teal-400">${number}</span>`;
    }
    return escapeHtml(match);
  });
}

// Secure HTML table parser for Pandas/DataFrame output to avoid dangerouslySetInnerHTML
function parseHtmlTable(html: string) {
  if (typeof window === "undefined") return null;

  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const table = doc.querySelector("table");
    if (!table) return null;

    const headers: string[] = [];
    table.querySelectorAll("thead th").forEach((th) => {
      headers.push(th.textContent || "");
    });

    const rows: string[][] = [];
    table.querySelectorAll("tbody tr").forEach((tr) => {
      const rowData: string[] = [];
      tr.querySelectorAll("th, td").forEach((cell) => {
        rowData.push(cell.textContent || "");
      });
      rows.push(rowData);
    });

    return { headers, rows };
  } catch (e) {
    console.error("Error parsing notebook table:", e);
    return null;
  }
}

// Typings for .ipynb Jupyter Notebook format
interface NotebookCell {
  cell_type: "markdown" | "code" | "raw";
  metadata: Record<string, any>;
  source: string[];
  outputs?: NotebookOutput[];
  execution_count?: number | null;
}

interface NotebookOutput {
  output_type: "stream" | "display_data" | "execute_result" | "error";
  name?: string;
  text?: string[];
  data?: Record<string, any>;
  traceback?: string[];
  ename?: string;
  evalue?: string;
}

interface NotebookData {
  cells: NotebookCell[];
  metadata: Record<string, any>;
}

export interface NotebookItem {
  title: string;
  githubUrl: string;
}

interface Props {
  title: string;
  description: string;
  githubUrl?: string; // for backward compatibility with single notebook
  notebooks?: readonly NotebookItem[]; // support multi-notebooks carousel
  trigger?: React.ReactNode;
}

// Clean raw URL converter
function getRawGithubUrl(url: string): string {
  try {
    const parsed = new URL(url);
    if (parsed.hostname === "github.com") {
      parsed.hostname = "raw.githubusercontent.com";
      const paths = parsed.pathname.split("/");
      if (paths[3] === "blob") {
        paths.splice(3, 1);
      }
      parsed.pathname = paths.join("/");
      return parsed.toString();
    }
  } catch (e) {
    console.error("Invalid URL:", url);
  }
  return url;
}

function getFilenameFromUrl(url: string): string {
  try {
    const parsed = new URL(url);
    const paths = parsed.pathname.split("/");
    return paths[paths.length - 1] || "notebook.ipynb";
  } catch (e) {
    const parts = url.split("/");
    return parts[parts.length - 1] || "notebook.ipynb";
  }
}

// Single Notebook content fetcher and renderer (nested scroll container)
function NotebookContentItem({ githubUrl }: { githubUrl: string }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [notebook, setNotebook] = useState<NotebookData | null>(null);
  const [copiedCellIndex, setCopiedCellIndex] = useState<number | null>(null);

  const fetchNotebook = async () => {
    setLoading(true);
    setError(null);
    try {
      const rawUrl = getRawGithubUrl(githubUrl);
      const res = await fetch(rawUrl);
      if (!res.ok) {
        throw new Error(`Failed to load file (${res.status} ${res.statusText})`);
      }
      const data = await res.json();
      if (!data || !data.cells) {
        throw new Error("Invalid Jupyter Notebook format");
      }
      setNotebook(data);
    } catch (err: any) {
      console.error(err);
      setError(err?.message || "Something went wrong while fetching the notebook");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotebook();
  }, [githubUrl]);

  const handleCopyCode = (code: string, index: number) => {
    navigator.clipboard.writeText(code);
    setCopiedCellIndex(index);
    setTimeout(() => setCopiedCellIndex(null), 2000);
  };

  if (loading) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-background/50 backdrop-blur-sm z-30">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center text-center p-12 space-y-4 h-full w-full min-h-[350px]">
        <AlertCircle className="size-12 text-destructive" />
        <div className="space-y-1">
          <h3 className="font-semibold text-foreground">Gagal memuat notebook</h3>
          <p className="text-xs text-muted-foreground max-w-md">{error}</p>
          <p className="text-xs text-muted-foreground/80 mt-1">
            (Repository ini mungkin bersifat privat atau berkas notebook belum di-push)
          </p>
        </div>
        <Button variant="default" size="sm" onClick={fetchNotebook}>
          Coba Lagi
        </Button>
      </div>
    );
  }

  if (!notebook) return null;

  return (
    <div className="flex-1 overflow-y-auto p-6 space-y-6 select-text h-full">
      {notebook.cells.map((cell, idx) => {
        const cellSource = cell.source.join("");

        return (
          <div key={idx} className="flex items-start gap-2 md:gap-4 group/cell">
            <div className="w-12 sm:w-16 flex-shrink-0 text-right pt-2.5 font-mono text-[10px] sm:text-xs text-muted-foreground/45 select-none">
              {cell.cell_type === "code" && (
                <span>In [{cell.execution_count ?? " "}]</span>
              )}
            </div>

            <div className="flex-1 min-w-0 space-y-3">
              {cell.cell_type === "markdown" && (
                <div className="prose prose-sm dark:prose-invert max-w-none text-foreground/90 leading-relaxed py-1">
                  <Markdown>{cellSource}</Markdown>
                </div>
              )}

              {cell.cell_type === "code" && (
                <div className="space-y-3">
                  <div className="relative border border-muted dark:border-zinc-800 rounded-lg overflow-hidden bg-zinc-50 dark:bg-zinc-950/40">
                    <button
                      onClick={() => handleCopyCode(cellSource, idx)}
                      className="absolute top-2 right-2 opacity-0 group-hover/cell:opacity-100 transition-opacity flex items-center gap-1.5 px-2 py-1 rounded bg-background border text-[10px] text-muted-foreground hover:text-foreground shadow-sm"
                    >
                      {copiedCellIndex === idx ? (
                        <>
                          <Check className="size-3 text-emerald-500" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="size-3" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>

                    <pre className="p-3.5 pr-14 text-xs font-mono overflow-x-auto leading-relaxed select-text whitespace-pre bg-transparent">
                      <code
                        dangerouslySetInnerHTML={{
                          __html: highlightPython(cellSource),
                        }}
                      />
                    </pre>
                  </div>

                  {cell.outputs && cell.outputs.length > 0 && (
                    <div className="space-y-2.5 pt-1">
                      {cell.outputs.map((out, outIdx) => {
                        if (out.output_type === "stream" && out.text) {
                          return (
                            <pre key={outIdx} className="p-3 bg-muted/10 border-l-2 border-muted-foreground/20 text-[11px] font-mono overflow-x-auto text-muted-foreground whitespace-pre leading-relaxed select-text">
                              {out.text.join("")}
                            </pre>
                          );
                        }

                        if ((out.output_type === "execute_result" || out.output_type === "display_data") && out.data) {
                          if (out.data["image/png"]) {
                            return (
                              <div key={outIdx} className="bg-white p-3 border rounded-lg flex items-center justify-center max-w-full overflow-hidden shadow-sm dark:bg-zinc-900/40">
                                <img
                                  src={`data:image/png;base64,${out.data["image/png"].replace(/\s/g, "")}`}
                                  alt="Visualization"
                                  className="max-h-[400px] w-auto max-w-full object-contain rounded dark:brightness-95"
                                />
                              </div>
                            );
                          }

                          if (out.data["text/html"]) {
                            const rawHtml = out.data["text/html"].join("");
                            const parsedTable = parseHtmlTable(rawHtml);

                            if (parsedTable) {
                              return (
                                <div key={outIdx} className="overflow-x-auto my-2 rounded-lg border border-muted bg-card shadow-sm max-w-full">
                                  <table className="w-full text-[10px] text-left border-collapse font-mono">
                                    {parsedTable.headers.length > 0 && (
                                      <thead className="bg-muted/50 text-muted-foreground border-b text-[9px] uppercase tracking-wider">
                                        <tr>
                                          {parsedTable.headers.map((h, hIdx) => (
                                            <th key={hIdx} className="px-3 py-2 border-r last:border-r-0 border-border font-bold">
                                              {h}
                                            </th>
                                          ))}
                                        </tr>
                                      </thead>
                                    )}
                                    <tbody className="divide-y divide-border">
                                      {parsedTable.rows.map((row, rIdx) => (
                                        <tr key={rIdx} className="hover:bg-muted/20 transition-colors odd:bg-muted/5">
                                          {row.map((cellVal, cIdx) => (
                                            <td key={cIdx} className="px-3 py-1.5 border-r last:border-r-0 border-border text-muted-foreground whitespace-nowrap">
                                              {cellVal}
                                            </td>
                                          ))}
                                        </tr>
                                      ))}
                                    </tbody>
                                  </table>
                                </div>
                              );
                            }
                          }

                          if (out.data["text/plain"]) {
                            return (
                              <pre key={outIdx} className="p-3 bg-muted/10 border-l-2 border-muted-foreground/20 text-[11px] font-mono overflow-x-auto text-muted-foreground whitespace-pre leading-relaxed select-text">
                                {out.data["text/plain"].join("")}
                              </pre>
                            );
                          }
                        }

                        if (out.output_type === "error" && out.traceback) {
                          return (
                            <pre key={outIdx} className="p-3 bg-rose-950/5 border-l-2 border-rose-500 text-rose-600 dark:text-rose-400 text-[10px] font-mono overflow-x-auto whitespace-pre leading-relaxed select-text">
                              {out.traceback.join("")}
                            </pre>
                          );
                        }

                        return null;
                      })}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function NotebookDialog({ title, description, githubUrl, notebooks, trigger }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Convert single notebook properties to unified list
  const notebookItems: NotebookItem[] = notebooks && notebooks.length > 0
    ? notebooks.map(nb => ({ title: nb.title, githubUrl: nb.githubUrl }))
    : githubUrl
      ? [{ title, githubUrl }]
      : [];

  useEffect(() => {
    if (isOpen) {
      setIsFullscreen(false);
      setCurrentIndex(0);
      carouselApi?.scrollTo(0);
    }
  }, [isOpen, carouselApi]);

  useEffect(() => {
    if (!carouselApi) return;
    carouselApi.on("select", () => {
      setCurrentIndex(carouselApi.selectedScrollSnap());
    });
  }, [carouselApi]);

  if (notebookItems.length === 0) return null;

  const activeNotebook = notebookItems[currentIndex];

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger ? (
          trigger
        ) : (
          <Button variant="outline" size="sm" className="gap-2">
            <FileCode2 className="size-4" />
            Open Notebook
          </Button>
        )}
      </DialogTrigger>

      <DialogContent className={cn(
        "p-0 flex flex-col gap-0 bg-background overflow-hidden border border-border transition-all duration-300 ease-in-out shadow-2xl",
        "w-screen h-[100dvh] max-w-none m-0 rounded-none border-none", // default mobile: full screen
        !isFullscreen && "sm:max-w-[95vw] md:max-w-[90vw] lg:max-w-[85vw] sm:h-[90vh] sm:rounded-lg sm:border" // desktop when not fullscreen
      )}>
        {/* HEADER */}
        <DialogHeader className="px-4 sm:px-6 py-4 border-b flex-shrink-0 flex flex-row items-center justify-between gap-4 h-16 bg-muted/20">
          <div className="space-y-0.5 text-left flex-1 min-w-0">
            <DialogTitle className="text-sm sm:text-base font-bold flex items-center gap-2">
              <FileCode2 className="size-4 text-primary shrink-0" />
              <span className="truncate">{activeNotebook.title}</span>
              <Badge variant="secondary" className="text-[9px] sm:text-[10px] px-1.5 py-0 shrink-0 font-mono">
                {currentIndex + 1} / {notebookItems.length}
              </Badge>
            </DialogTitle>
          </div>
          <div className="flex items-center gap-1.5 shrink-0 mr-8 sm:mr-10">
            {/* Header Navigation Controls for Multi-Notebook */}
            {notebookItems.length > 1 && (
              <div className="flex items-center gap-1 bg-muted/65 p-0.5 rounded-lg border mr-1">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-7 w-7 rounded-md"
                  onClick={() => carouselApi?.scrollPrev()}
                  disabled={!carouselApi?.canScrollPrev()}
                >
                  <ChevronLeft className="size-4" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-7 w-7 rounded-md"
                  onClick={() => carouselApi?.scrollNext()}
                  disabled={!carouselApi?.canScrollNext()}
                >
                  <ChevronRight className="size-4" />
                </Button>
              </div>
            )}
            
            {/* Fullscreen toggle - desktop only */}
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 text-xs shrink-0 hidden sm:inline-flex"
              onClick={() => setIsFullscreen(!isFullscreen)}
            >
              {isFullscreen ? (
                <Minimize2 className="size-4" />
              ) : (
                <Maximize2 className="size-4" />
              )}
            </Button>
            
            {/* GitHub action button */}
            <Button
              variant="outline"
              size="sm"
              className="h-8 text-xs gap-1.5"
              asChild
            >
              <a href={activeNotebook.githubUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="size-3.5" />
                <span className="hidden sm:inline">GitHub</span>
              </a>
            </Button>
          </div>
        </DialogHeader>

        {/* MAIN BODY AREA */}
        <div className="flex-1 min-h-0 relative flex flex-col">
          {notebookItems.length > 1 ? (
            <Carousel setApi={setCarouselApi} className="w-full flex-1 flex flex-col min-h-0">
              <CarouselContent className="flex-1 min-h-0 h-full m-0">
                {notebookItems.map((item, idx) => (
                  <CarouselItem key={idx} className="p-0 h-full flex flex-col min-h-0 select-text">
                    <NotebookContentItem githubUrl={item.githubUrl} />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          ) : (
            <NotebookContentItem githubUrl={activeNotebook.githubUrl} />
          )}
        </div>

        {/* FOOTER */}
        <div className="px-4 sm:px-6 py-3 border-t flex-shrink-0 h-12 flex items-center gap-2 bg-muted/20 text-xs text-muted-foreground select-none font-medium">
          <FileCode2 className="size-3.5 text-primary shrink-0" />
          <span className="truncate font-mono">{getFilenameFromUrl(activeNotebook.githubUrl)}</span>
        </div>
      </DialogContent>
    </Dialog>
  );
}
