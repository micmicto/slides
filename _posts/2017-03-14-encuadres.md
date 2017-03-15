---
title: Encuadres
layout: post
permalink: /super-encuadres/
---

<section>
    <h1>Encuadres</h1>
    <ul>
        <li>Horizontal</li>
        <li>Vertical</li>
        <li>Picada</li>
        <li>Contrapicada</li>
    </ul>
</section>

<!-- Example of nested vertical slides -->
<section>
    <section>
        <h2>Horizontal</h2>
        <a href="#" class="navigate-down">
         </a>
    </section>
    <section data-background="{{site.baseurl}}/images/h1.jpg">
        <h2>Paisajes</h2>
    </section>
    <section data-background="{{site.baseurl}}/images/h2.jpg">
        <h2>Amplitud</h2>
    </section>
    <section data-background="{{site.baseurl}}/images/h3.jpg">
    </section>
    <section data-background="{{site.baseurl}}/images/h4.jpg">
    </section>
</section>

<section>
    <section>
        <h2>Vertical</h2>
        <a href="#" class="navigate-down">
         </a>
    </section>
    <section>
        <h2>Dinamismo</h2>
        <img src="{{site.baseurl}}/images/v1.jpg" height="600">
    </section>
    <section>
        <img src="{{site.baseurl}}/images/v2.jpg" height="600">
    </section>
    <section>
        <img src="{{site.baseurl}}/images/v3.jpg" height="600">
    </section>
    <section>
        <img src="{{site.baseurl}}/images/v4.jpg" height="600">
    </section>
</section>

<section>
    <section>
        <h2>Picada</h2>
        <a href="#" class="navigate-down">
         </a>
    </section>
    <section data-background="{{site.baseurl}}/images/p1.jpg">
    </section>
    <section data-background="{{site.baseurl}}/images/p2.jpg">
    </section>
</section>

<section>
    <section>
        <h2>Contrapicada</h2>
        <a href="#" class="navigate-down">
         </a>
    </section>
    <section data-background="{{site.baseurl}}/images/c1.jpg">
     </section>
    <section data-background="{{site.baseurl}}/images/c2.jpg">
    </section>
    <section data-background="{{site.baseurl}}/images/c3.jpg">
    </section>
</section>

<section>
    <h1>Luz</h1>
</section>


<section data-transition="slide" data-background="#b5533c" data-background-transition="zoom">
    <h2>Background Transitions</h2>
    <p>
        You can override background transitions per-slide.
    </p>
    <pre><code class="hljs" style="word-wrap: break-word;">&lt;section data-background-transition="zoom"&gt;</code></pre>
</section>


<section>
    <h2>Speaker View</h2>
    <p>There's a <a href="https://github.com/hakimel/reveal.js#speaker-notes">speaker view</a>. It includes a timer, preview of the upcoming slide as well as your speaker notes.</p>
    <p>Press the <em>S</em> key to try it out.</p>

    <aside class="notes">
        Oh hey, these are some notes. They'll be hidden in your presentation, but you can see them if you open the speaker notes window (hit 's' on your keyboard).
    </aside>
</section>

<section>
    <h2>Export to PDF</h2>
    <p>Presentations can be <a href="https://github.com/hakimel/reveal.js#pdf-export">exported to PDF</a>, here's an example:</p>
    <iframe data-src="https://www.slideshare.net/slideshow/embed_code/42840540" width="445" height="355" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:3px solid #666; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe>
</section>

<section>
    <h2>Global State</h2>
    <p>
        Set <code>data-state="something"</code> on a slide and <code>"something"</code>
        will be added as a class to the document element when the slide is open. This lets you
        apply broader style changes, like switching the page background.
    </p>
</section>

<section data-state="customevent">
    <h2>State Events</h2>
    <p>
        Additionally custom events can be triggered on a per slide basis by binding to the <code>data-state</code> name.
    </p>
    <pre><code class="javascript" data-trim contenteditable style="font-size: 18px;">
Reveal.addEventListener( 'customevent', function() {
console.log( '"customevent" has fired' );
} );
    </code></pre>
</section>

<section>
    <h2>Take a Moment</h2>
    <p>
        Press B or . on your keyboard to pause the presentation. This is helpful when you're on stage and want to take distracting slides off the screen.
    </p>
</section>

<section>
    <h2>Much more</h2>
    <ul>
        <li>Right-to-left support</li>
        <li><a href="https://github.com/hakimel/reveal.js#api">Extensive JavaScript API</a></li>
        <li><a href="https://github.com/hakimel/reveal.js#auto-sliding">Auto-progression</a></li>
        <li><a href="https://github.com/hakimel/reveal.js#parallax-background">Parallax backgrounds</a></li>
        <li><a href="https://github.com/hakimel/reveal.js#keyboard-bindings">Custom keyboard bindings</a></li>
    </ul>
</section>

<section style="text-align: left;">
    <h1>THE END</h1>
    <p>
        - <a href="http://slides.com">Try the online editor</a> <br>
        - <a href="https://github.com/hakimel/reveal.js">Source code &amp; documentation</a>
    </p>
</section>

<section data-background="{{site.baseurl}}/images/giphy.gif">
</section>
