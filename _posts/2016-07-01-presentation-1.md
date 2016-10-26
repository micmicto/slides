---
title: Presentation 1
layout: post
permalink: /presentation-1/
background: '#0a5'
slides:
 - title: 1
   slide-data: A ver Mariana...
     
 - title: 2
   slide-data: Ya te pones a trabajar...?

 - title: 3
   slide-data: Te la pasas chacoteando
  
---

{% for slide in page.slides %}
                    
<section data-background="{% if slide.background %}{{slide.background}}{% else %}{{page.background}}{% endif %}"><h1>{{slide.title}}</h1>{{ slide.slide-data }}</section>
                    
{% endfor %}
    
