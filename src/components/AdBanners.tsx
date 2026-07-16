import React from 'react';

export function HomeAdBanner() {
  const iframeSrcDoc = `
    <!DOCTYPE html>
    <html lang="ar" dir="rtl">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <style>
        html, body {
          margin: 0;
          padding: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          background: transparent;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        #container-05ad7fb8de8f3b8ef21624b307937bdd {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      </style>
    </head>
    <body>
      <div id="container-05ad7fb8de8f3b8ef21624b307937bdd"></div>
      <script async="async" data-cfasync="false" src="https://pl30389999.effectivecpmnetwork.com/05ad7fb8de8f3b8ef21624b307937bdd/invoke.js"></script>
    </body>
    </html>
  `;

  return (
    <div className="my-8 mx-auto w-full max-w-4xl text-center space-y-2">
      <div className="flex items-center justify-center gap-2 text-[10px] text-zinc-600 font-bold uppercase tracking-widest">
        <span className="h-px w-8 bg-zinc-800"></span>
        <span>إعـلان مـمـول / SPONSORED AD</span>
        <span className="h-px w-8 bg-zinc-800"></span>
      </div>

      <div className="bg-zinc-950/40 border border-zinc-900/60 rounded-2xl h-[280px] flex items-center justify-center shadow-2xl overflow-hidden transition-all duration-300 hover:border-zinc-800">
        <iframe
          title="Home Advertisement"
          srcDoc={iframeSrcDoc}
          className="w-full h-full border-0 bg-transparent"
          sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-forms"
          scrolling="no"
        />
      </div>
    </div>
  );
}

export function ToolsAdBanner() {
  const iframeSrcDoc = `
    <!DOCTYPE html>
    <html lang="ar" dir="rtl">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <style>
        html, body {
          margin: 0;
          padding: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          background: transparent;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        #container-75f7a9850f479c1dcf7dbb2f723f0fe6 {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      </style>
    </head>
    <body>
      <div id="container-75f7a9850f479c1dcf7dbb2f723f0fe6"></div>
      <script async="async" data-cfasync="false" src="https://pl30211052.effectivecpmnetwork.com/75f7a9850f479c1dcf7dbb2f723f0fe6/invoke.js"></script>
    </body>
    </html>
  `;

  return (
    <div className="my-8 mx-auto w-full max-w-4xl text-center space-y-2">
      <div className="flex items-center justify-center gap-2 text-[10px] text-zinc-600 font-bold uppercase tracking-widest">
        <span className="h-px w-8 bg-zinc-800"></span>
        <span>إعـلان مـمـول / SPONSORED AD</span>
        <span className="h-px w-8 bg-zinc-800"></span>
      </div>

      <div className="bg-zinc-950/40 border border-zinc-900/60 rounded-2xl h-[280px] flex items-center justify-center shadow-2xl overflow-hidden transition-all duration-300 hover:border-zinc-800">
        <iframe
          title="Tools Advertisement"
          srcDoc={iframeSrcDoc}
          className="w-full h-full border-0 bg-transparent"
          sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-forms"
          scrolling="no"
        />
      </div>
    </div>
  );
}

