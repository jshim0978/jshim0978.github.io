---
layout: page
title: Home
permalink: /
---

<!-- Styles -->
<link rel="stylesheet" href="{{ site.baseurl }}/assets/css/tailwind.css">
<link rel="stylesheet" href="{{ site.baseurl }}/assets/css/custom.css">

<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">

<!-- React App Container -->
<div id="react-app" class="min-h-screen bg-background text-foreground">
  <!-- Loading Animation -->
  <div class="fixed inset-0 bg-background z-50 flex items-center justify-center">
    <div class="animate-spin rounded-full h-32 w-32 border-b-2 border-accent"></div>
  </div>
</div>

<!-- Load React Bundle -->
<script src="{{ site.baseurl }}/assets/js/bundle.js"></script>
