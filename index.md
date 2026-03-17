---
layout: default
title: الرئيسية
---

<section class="hero">
  <div class="hero-content">
    <h1>مرحباً بكم في مدونتي</h1>
    <p>أحدث المقالات والأفكار في عالم التقنية والبرمجة</p>
  </div>
</section>

<div class="container">
  <div class="row">
    <div class="col-md-8">
      <!-- المقالات المميزة -->
      <h2 class="section-title">أحدث المقالات</h2>
      <div class="posts-grid">
        {% for post in paginator.posts %}
        <article class="post-card">
          {% if post.image %}
          <div class="post-image">
            <img src="{{ post.image | relative_url }}" alt="{{ post.title }}">
          </div>
          {% endif %}
          <div class="post-content">
            <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
            <div class="post-meta">
              <span class="post-date">{{ post.date | date: "%Y-%m-%d" }}</span>
              <span class="post-author">{{ post.author }}</span>
              {% for category in post.categories %}
              <span class="post-category">{{ category }}</span>
              {% endfor %}
            </div>
            <p>{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
            <a href="{{ post.url | relative_url }}" class="read-more">اقرأ المزيد</a>
          </div>
        </article>
        {% endfor %}
      </div>

      <!-- الترقيم -->
      {% if paginator.total_pages > 1 %}
      <div class="pagination">
        {% if paginator.previous_page %}
        <a href="{{ paginator.previous_page_path | relative_url }}" class="prev">السابق</a>
        {% endif %}
        
        {% for page in (1..paginator.total_pages) %}
          {% if page == paginator.page %}
            <span class="current-page">{{ page }}</span>
          {% elsif page == 1 %}
            <a href="{{ '/' | relative_url }}">{{ page }}</a>
          {% else %}
            <a href="{{ site.paginate_path | relative_url | replace: ':num', page }}">{{ page }}</a>
          {% endif %}
        {% endfor %}
        
        {% if paginator.next_page %}
        <a href="{{ paginator.next_page_path | relative_url }}" class="next">التالي</a>
        {% endif %}
      </div>
      {% endif %}
    </div>

    <!-- القائمة الجانبية -->
    <div class="col-md-4">
      {% include sidebar.html %}
    </div>
  </div>
</div>
