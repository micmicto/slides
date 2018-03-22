---
title: Foto Ensayo
layout: post
permalink/foto-ensayo/

slides:
- title:
   slide-data:
   background:

---

{% for slide in page.slides %}
                    
<section data-background="{% if slide.background %}{{slide.background}}{% else %}{{page.background}}{% endif %}"><h1>{{slide.title}}</h1>{{ slide.slide-data }}</section>
                    
{% endfor %}
