---
layout: page
title: Home
permalink: /
---

<!-- Styles -->
<link rel="stylesheet" href="{{ site.baseurl }}/assets/css/tailwind.css">
<link rel="stylesheet" href="{{ site.baseurl }}/assets/css/custom.css">

<!-- Google Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,400;14..32,500;14..32,600;14..32,700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">

<!-- React App Container -->
<div id="root" class="min-h-screen bg-background text-foreground">
  <!-- Loading skeleton -->
  <div class="fixed inset-0 bg-white dark:bg-[hsl(240,10%,4%)] z-50 flex flex-col items-center justify-center gap-3">
    <div class="w-6 h-6 rounded-md border-2 border-slate-200 dark:border-slate-700 border-t-slate-500 dark:border-t-slate-400 animate-spin"></div>
  </div>
</div>

<!-- Load React Bundle -->
<script src="{{ site.baseurl }}/assets/js/bundle.js"></script>
