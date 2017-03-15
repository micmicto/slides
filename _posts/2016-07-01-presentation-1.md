---
title: Encuadres
layout: post
permalink: /presentation-1/

<section>
 <ul>
    <li>Horizontal</li>
    <li>Vertical</li>
    <li>Picada</li>
    <li>Contrapicada</li>
 </ul>
</section>


{% for slide in page.slides %}
                    
<section data-background="{% if slide.background %}{{slide.background}}{% else %}{{page.background}}{% endif %}"><h1>{{slide.title}}</h1>{{ slide.slide-data }}</section>
                    
{% endfor %}
    
