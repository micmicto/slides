---
title: Presentation 1
layout: post
permalink: /presentation-1/
background: '#0a5'
slides:
 - title: A ver Mariana...
   slide-data: 
     
 - title: Ya te pones a trabajar...?
   slide-data: 

 - title: Te la pasas chacoteando
   slide-data: 
  
---

{% for slide in page.slides %}
                    
<section data-background="{% if slide.background %}{{slide.background}}{% else %}{{page.background}}{% endif %}"><h1>{{slide.title}}</h1>{{ slide.slide-data }}</section>
                    
{% endfor %}
    
